import Image from 'next/image';
import React, { FC } from 'react';

import { Product } from '@/app/types/types';

export const ProductDetails: FC<{
  product: Product;
}> = ({ product }) => {
  return (
    <div className="mt-7 max-lg:mt-[50px]">
      <h3 className="font-medium pb-3 text-[18px] max-lg:hidden">Описание:</h3>
      <ul className="grid grid-cols-[auto_auto] gap-4 pb-6 max-lg:grid-cols-1 max-lg:pb-4">
        {product.details.list &&
          product.details.list.map((item) => (
            <li
              key={item}
              className='before:content-[""] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-black before:mr-2 flex items-center '
            >
              {item}
            </li>
          ))}
      </ul>
      <div
        className="product__description"
        dangerouslySetInnerHTML={{ __html: product.details.text }}
      />
      <div className="">
        {product.details.images.map((image) => (
          <Image
            key={image.dec}
            src={image.img}
            alt={image.dec}
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
};
