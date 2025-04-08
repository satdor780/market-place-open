import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FC } from 'react';

import { useBreakpoint } from '@/app/hooks/useBreakpoint';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shadcn/ui/carousel';

const banners = [0, 1, 2, 3];

export const Intro: FC = () => {
  const isMd = useBreakpoint('md', 'down');

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="mt-3 mb-10 max-md:mb-5 max-md:mt-0"
    >
      <CarouselContent>
        {banners.map((_, i) => (
          <CarouselItem key={i}>
            <div className="rounded-lg overflow-hidden w-full">
              <Image
                width={1500}
                height={300}
                src={`/banners/banner-${i}-${isMd ? 'md' : 'lg'}.jpg`}
                alt=""
                className="w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 max-sm:w-6 max-sm:h-6 max-sm:left-1.5 intro__arrows" />
      <CarouselNext className="right-3 max-sm:w-6 max-sm:h-6 max-sm:right-1.5  intro__arrows" />
    </Carousel>
  );
};
