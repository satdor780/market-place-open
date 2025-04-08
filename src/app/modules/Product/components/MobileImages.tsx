import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import { Product } from '@/app/types/types';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/shadcn/ui/carousel';

export const MobileImages: FC<{
  product: Product;
}> = ({ product }) => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollSlider = (to: number) => {
    if (api) {
      api.scrollTo(to);
    }
  };

  const dotWidth = 100 / product.images.length;

  if (!product.images) return '';

  return (
    <div className="relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={image.img}
                alt={image.img}
                width={300}
                height={300}
                className="rounded-[10px]"
                style={{ width: '100%', height: 'auto' }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute w-[60px] h-1 flex rounded-lg overflow-hidden bg-grayMedium bottom-5 right-5">
        {product.images.map((_, i) => (
          <div
            key={i}
            className="bg-red-700 h-1 block rounded-lg duration-300"
            style={{
              width: `${dotWidth}%`,
              background: current - 1 === i ? 'black' : 'transparent',
            }}
            onClick={() => scrollSlider(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
