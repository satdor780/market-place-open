import Image from 'next/image';
import { FC } from 'react';

import { useBreakpoint } from '@/app/hooks/useBreakpoint';

export const Banner: FC = () => {
  const isMd = useBreakpoint('md', 'down');

  return (
    <div className="rounded-lg overflow-hidden w-full mb-10 max-md:mb-5">
      <Image
        width={1500}
        height={300}
        src={`/banners/banner-1-${isMd ? 'md' : 'lg'}.jpg`}
        alt=""
        className="w-full"
      />
    </div>
  );
};
