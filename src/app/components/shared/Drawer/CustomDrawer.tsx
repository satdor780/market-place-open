import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import { FavoriteButton } from '@/app/components/entites/FavoriteButton/FavoriteButton';
import { Quantity } from '@/app/components/entites/Quantity/Quantity';
import useBasketLogic from '@/app/components/features/hooks/useBasketLogic';
import { CardImages } from '@/app/components/shared/CardImages/CardImages';
import { DrawerCharacteristic } from '@/app/components/shared/Drawer/components';
import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import { Product } from '@/app/types/types';
import { formatPrice } from '@/lib/formatPrice';
import { Button } from '@/shadcn/ui/button';
import { DrawerClose, DrawerContent } from '@/shadcn/ui/drawer';

export const CustomDrawer: FC<{
  product: Product;
}> = observer(({ product }) => {
  const { quantity, setQuantity, price, addToBasket, removeToBasket, handleCharacteristicChange } =
    useBasketLogic(product);

  const isMd = useBreakpoint('md', 'down');

  return (
    <DrawerContent className="p-5">
      <div className="flex mt-5 justify-center gap-5 max-md:flex-col">
        <CardImages
          type={isMd ? 'vertical' : 'horizontal'}
          images={product.images}
          className="w-[40%] max-w-[320px] max-md:flex max-md:max-w-[340px] max-md:w-full"
        />

        <div className="max-h-[500px] overflow-y-scroll max-md:max-h-[350px]">
          <p className="text-[25px] pb-4 font-medium max-w-[80%] max-md:text-[20px] max-md:pb-2 max-md:max-w-full max-sm:text-[18px]">
            {product.description}
          </p>
          <span className="pb-3 block">{product.sells} уже продано</span>
          <div className="pb-2 font-medium text-[20px]">{product.price} сум</div>
          <div className="flex gap-3 pb-3">
            <div className="">
              <FontAwesomeIcon icon={faCheck} className="text-green pr-2" />
              <span>Бесплатная доставка</span>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCheck} className="text-green pr-2" />
              <span>Кредит на 12 000 сум за задержку</span>
            </div>
          </div>
          <div className="pb-4">
            <DrawerCharacteristic
              product={product}
              handleCharacteristicChange={handleCharacteristicChange}
            />
          </div>
          <div className="flex gap-5 items-center mb-4">
            <Quantity
              quantity={quantity}
              addQuantity={() => setQuantity((prev) => prev + 1)}
              removeQuantity={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              changeQuantity={(e) => setQuantity(e)}
            />
            <span className="block">Итого: {formatPrice(price)}</span>
          </div>
          <DrawerClose className="flex gap-2">
            <div className="relative w-10 bg-grayMedium rounded-lg">
              <FavoriteButton product={product} />
            </div>
            <Button onClick={() => addToBasket()}>
              {product.isBasket ? 'Изменить' : 'Добавить в корзину'}
            </Button>
            {product.isBasket ? (
              <Button onClick={() => removeToBasket()}>Удалить из корзины</Button>
            ) : null}
          </DrawerClose>
        </div>
      </div>
    </DrawerContent>
  );
});
