import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/shadcn/ui/button';

export const Emptiness: FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-10 pb-10">
      <Image src="/basket/basket-not-found.png" alt="not found" width={150} height={150} />
      <p className="block pb-2 text-[20px] font-medium">{title}</p>
      <span className="block pb-4 text-gray text-center px-5">{subtitle}</span>
      <Link href="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
};
