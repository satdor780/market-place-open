import Image from 'next/image';
import { FC, useState } from 'react';

import { IImage } from '@/app/types/types';
import { cn } from '@/lib/utils';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel';
import { ToggleGroup, ToggleGroupItem } from '@/shadcn/ui/toggle-group';

export const CardImages: FC<{
  images: IImage[];
  className?: string | undefined;
  type?: 'vertical' | 'horizontal';
}> = ({ images, className, type }) => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollSlider = (to: number) => {
    if (api) {
      api.scrollTo(to);
    }
  };

  return (
    <div className={cn('', className)}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((pr) => (
            <CarouselItem key={pr.id}>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={pr.img}
                  alt={pr.img}
                  width={700}
                  height={700}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ToggleGroup
        type="single"
        className={
          type == 'vertical'
            ? 'toggle-group flex h-full gap-2 flex-col -order-1 mr-3 max-md:grid max-md:grid-cols-[auto]'
            : 'toggle-group flex h-20 gap-2 mt-3 justify-start'
        }
      >
        {images.map((pr, i) => (
          <ToggleGroupItem
            key={pr.img}
            value={pr.imageDec}
            className="rounded-[10px] overflow-hidden w-20 h-20 max-md:w-auto max-md:h-auto"
          >
            <Image
              src={pr.img}
              alt={pr.img}
              width={100}
              height={100}
              onClick={() => scrollSlider(i)}
              className="rounded-[10px]"
            />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};
