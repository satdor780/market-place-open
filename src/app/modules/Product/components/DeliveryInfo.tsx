import Image from 'next/image';
import { FC } from 'react';

import { Separator } from '@/shadcn/ui/separator';

const paymentTypes = [
  '/payments/uzum.svg',
  '/payments/humo.svg',
  '/payments/masterCard.svg',
  '/payments/cash.svg',
];
export const DeliveryInfo: FC<{
  delivery: string;
}> = ({ delivery }) => {
  return (
    <div className="p-3 rounded-lg border border-gray max-w-[500px] max-md:-order-3">
      <div className="flex justify-between items-center">
        <span className="font-medium text-[15px]">Доставка от {delivery}</span>
        <div className="p-1 px-3 bg-default rounded-xl inline-flex justify-center items-center">
          <span className="font-medium leading-3 text-[12px] text-white">
            Склад Maverick Market
          </span>
        </div>
      </div>
      <p className="text-gray font-medium py-2">В пункты выдачи Maverick или курьером</p>
      <Separator />
      <div className="py-2">
        <span className="font-medium text-[15px]">Безопасная оплата удобным способом</span>
        <div className="flex gap-3 items-center mt-2">
          {paymentTypes.map((path) => (
            <Image key={path} src={path} alt="uzum" width={36} height={36} />
          ))}
        </div>
      </div>
      <Separator />
      <div className="py-2">
        <span className="font-medium text-[15px]">Простой и быстрый возврат</span>
        <p className="text-gray font-medium pt-2">В пункты выдачи Uzum или курьером</p>
      </div>
    </div>
  );
};
