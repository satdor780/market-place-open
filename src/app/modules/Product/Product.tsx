import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { FavoriteButton } from '@/app/components/entites/FavoriteButton/FavoriteButton';
import { Price } from '@/app/components/entites/Price/Price';
import { Quantity } from '@/app/components/entites/Quantity/Quantity';
import useBasketLogic from '@/app/components/features/hooks/useBasketLogic';
import { CardImages } from '@/app/components/shared/CardImages/CardImages';
import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import {
  DeliveryInfo,
  MobileImages,
  ProductDetails,
  Reviews,
} from '@/app/modules/Product/components';
import productsStore from '@/app/stores/products-store';
import { formatPrice } from '@/lib/formatPrice';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/shadcn/ui/breadcrumb';
import { Button } from '@/shadcn/ui/button';
import { Separator } from '@/shadcn/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/shadcn/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '@/shadcn/ui/toggle-group';

export const Product: FC = observer(() => {
  const router = useRouter();
  const { product } = router.query;

  const { products } = productsStore;

  const productItem = products.categories
    .flatMap((category) => category.products)
    .find((item) => item.id === Number(product));

  const { quantity, setQuantity, price, addToBasket, handleCharacteristicChange } = useBasketLogic(
    productItem ? productItem : products.categories[0].products[0],
  );

  const isLg = useBreakpoint('lg', 'up');
  const isMd = useBreakpoint('md', 'up');

  if (!productItem) {
    return <p>err</p>;
  }

  return (
    <>
      <Breadcrumb className="pt-6 pb-4 max-md:pt-0 max-md:pb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Все категории</BreadcrumbLink>
          </BreadcrumbItem>
          {productItem.categories.map((category) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{category}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-20">
        <div className="mt-4 flex gap-5 items-start max-lg:flex-col max-md:gap-3">
          <div className="max-w-[50%] max-lg:max-w-[520px]">
            {isMd ? (
              <CardImages images={productItem.images} className="w-full flex" type="vertical" />
            ) : (
              <MobileImages product={productItem} />
            )}
            {isLg && <ProductDetails product={productItem} />}
          </div>
          <div className="sticky top-0">
            <h1 className="text-[24px] font-medium pb-2 max-md:pb-1">{productItem.title}</h1>
            <p>{productItem.description}</p>
            <div className="flex gap-3 mt-3 items-center pb-3">
              <div className="flex">
                <FontAwesomeIcon icon={faStar} className="w-4 text-orange" />
                <span className="pr-2 pl-1 text-[13px] text-gray">{productItem.rating}</span>
                <p className="text-[13px] text-gray ">({productItem.reviews} отзывов)</p>
              </div>
              <div className="">
                <p className="text-gray text-[13px]">{productItem.sells} заказов</p>
              </div>
            </div>
            <div className="flex gap-3 pb-1 max-sm:flex-col">
              <div className="">
                <FontAwesomeIcon icon={faCheck} className="text-green pr-2" />
                <span>Бесплатная доставка</span>
              </div>
              <div className="">
                <FontAwesomeIcon icon={faCheck} className="text-green pr-2" />
                <span>Кредит на 12 000 сум за задержку</span>
              </div>
            </div>
            <div className="pt-2">
              {productItem.characteristics.map((charac) => (
                <>
                  <span className="pb-2 block">{charac.name}</span>
                  <ToggleGroup
                    key={charac.id}
                    type="single"
                    className={
                      charac.id == 'color'
                        ? 'flex h-[160] gap-2 mt-2 justify-start pb-3'
                        : 'flex gap-2 mt-3 justify-start pb-3 flex-wrap'
                    }
                  >
                    {charac.variants.map((e, i) => (
                      <ToggleGroupItem
                        // data-state={i == 0 ? 'on': 'off'}
                        value={e.variantName}
                        className={
                          charac.id == 'color'
                            ? 'block rounded-lg overflow-hidden w-[160] h-[160] px-0 pb-1'
                            : 'rounded-[10px] overflow-hidden py-2 px-5'
                        }
                        key={e.variantName}
                        onClick={() =>
                          handleCharacteristicChange(
                            charac.id,
                            charac.name,
                            e.variantTitle,
                            charac.expensivePrices[i],
                          )
                        }
                      >
                        {e.variantImage && (
                          <Image
                            src={e.variantImage}
                            alt={e.variantImage}
                            width={160}
                            height={160}
                            className="rounded-[10px] block"
                          />
                        )}
                        {e.variantTitle}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </>
              ))}
            </div>
            <span className="pt-3 pb-2 block">количество: </span>
            <div className="flex gap-5 items-center mb-4">
              <Quantity
                quantity={quantity}
                addQuantity={() => setQuantity((prev) => prev + 1)}
                removeQuantity={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                changeQuantity={(e) => setQuantity(e)}
              />
              <span className="block">Итого: {formatPrice(price)}</span>
            </div>
            {isLg ? (
              <div className="flex gap-3">
                <div className="relative w-10 bg-grayMedium rounded-lg cursor-pointer">
                  <FavoriteButton product={productItem} />
                </div>
                <Button>Купить в 1 клик</Button>
                <Button onClick={() => addToBasket()}>
                  {productItem.isBasket ? 'Изменить' : 'Добавить в корзину'}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(2,1fr)] gap-5 mt-7 items-start max-md:grid-cols-1">
          <Reviews reviews={productItem.reviewsList} />
          {!isLg && (
            <Sheet>
              <SheetTrigger className="-order-2 flex flex-col">
                <span className="inline-block pb-4 font-mono text-[22px] font-bold text-start">
                  Описание:
                </span>
                <Button className="bg-grayMedium text-black block w-full text-[16px] mb-6">
                  Посмотреть описание
                </Button>
                <Separator />
              </SheetTrigger>
              <SheetContent className="p-3 w-full overflow-y-scroll flex flex-col items-center">
                <h3 className="hidden max-lg:block absolute top-3 text-center font-medium text-[18px]">
                  Описание
                </h3>
                <ProductDetails product={productItem} />
              </SheetContent>
            </Sheet>
          )}
          <DeliveryInfo delivery={productItem.availability.deliveryTime} />
        </div>
        {!isLg ? (
          <div className="fixed h-[60px] bottom-[59.7px] w-full bg-white mx-[-10px] flex justify-between px-5 items-center shadow-[0_-4px_8px_rgba(54,55,64,0.25)] z-20">
            <Price price={productItem.price} discount={productItem.discount} />
            <Button onClick={() => addToBasket()}>
              {productItem.isBasket ? 'Изменить' : 'Добавить в корзину'}
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
});
