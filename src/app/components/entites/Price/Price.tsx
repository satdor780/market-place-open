import { FC } from 'react';

import { formatPrice } from '@/lib/formatPrice';

export const Price: FC<{
  price: number;
  discount?: number;
}> = ({ price, discount }) => {
  return (
    <div>
      <span className="underline-center text-gray text-[13px]">{formatPrice(discount)}</span>
      <p className="font-medium pt-[2px]">{formatPrice(price)}</p>
    </div>
  );
};
