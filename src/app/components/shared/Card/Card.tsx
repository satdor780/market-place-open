import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { FavoriteButton } from '@/app/components/entites/FavoriteButton/FavoriteButton';
import { Price } from '@/app/components/entites/Price/Price';
import { CustomDrawer } from '@/app/components/shared/Drawer/CustomDrawer';
import { Product } from '@/app/types/types';
import { AddBasket } from '@/assets/icons';
import { Drawer, DrawerTrigger } from '@/shadcn/ui/drawer';

export const Card: FC<{
  product: Product;
}> = observer(({ product }) => {
  return (
    <>
      <Drawer>
        <Link
          href={`/product/${product.id}`}
          className="card-shadow rounded-lg overflow-hidden relative duration-300"
        >
          <div className="mb-1 rounded-lg overflow-hidden">
            <Image
              src={product.img}
              alt={product.description}
              // layout="responsive"
              width={305}
              height={305}
              // className="w-full max-w-[162.5px] md:max-w-[305px] mx-auto"
            />
          </div>
          <div className="p-1 pb-2">
            <p className="pb-2 text-[15px]">{product.title}</p>
            <div className="flex items-center pb-3">
              <FontAwesomeIcon icon={faStar} className="w-4 text-orange" />
              <span className="pr-2 pl-1 text-[13px] text-gray">{product.rating}</span>
              <p className="text-[13px] text-gray ">({product.reviews} отзывов)</p>
            </div>
            <div className="flex items-end justify-between">
              <Price price={product.price} discount={product.discount} />
              <DrawerTrigger
                onClick={(e) => {
                  e.stopPropagation();
                  e.nativeEvent.preventDefault();
                }}
                className="rounded-full border border-grayMedium flex items-center justify-center p-1 mr-3 hover:bg-grayMedium duration-300"
              >
                <AddBasket className="hover:text-default w-6 h-6" />
              </DrawerTrigger>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <FavoriteButton product={product} />
          </div>
        </Link>
        <CustomDrawer product={product} />
      </Drawer>
    </>
  );
});
