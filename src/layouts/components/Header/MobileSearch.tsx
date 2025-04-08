import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';

import favoritesStore from '@/app/stores/favorites-store';
import { Favorites } from '@/assets/icons';
import { Input } from '@/shadcn/ui/input';

export const MobileSearch: FC = observer(() => {
  const { favorites } = favoritesStore;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex gap-4 my-5 items-center">
      <div className="relative flex items-center w-full">
        <Input className=" bg-grayMedium pr-[50px]" placeholder="Поиск по названию или категории" />
        <Image
          src="/search.svg"
          alt="Search"
          width={16}
          height={16}
          className="absolute right-5 "
        />
      </div>
      <Link href="/favorites" className="relative">
        {isClient && favorites.length > 0 && (
          <div className="top-[-5.5px] bg-red-700 rounded-full flex items-center justify-center absolute right-[-4px] p-[2px] text-[10px] text-white w-[12px] h-[13px]">
            {favorites.length}
          </div>
        )}
        <Favorites className="w-[20px] h-[20px]" />
      </Link>
    </div>
  );
});
