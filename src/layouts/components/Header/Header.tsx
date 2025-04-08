import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import NextLink from 'next/link';
import { FC, useEffect, useMemo, useState } from 'react';

import { AuthModal } from '@/app/components/features/Auth/AuthModal';
import BasketStore from '@/app/stores/basket-store';
import favoritesStore from '@/app/stores/favorites-store';
import { Basket, Favorites, User } from '@/assets/icons';
import { categoriesData } from '@/data';
import { HeaderLink, Logo } from '@/layouts/components/Header/components';
import { Dialog, DialogContent, DialogTrigger } from '@/shadcn/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { Input } from '@/shadcn/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shadcn/ui/navigation-menu';

export const Header: FC = observer(() => {
  const { products } = BasketStore;
  const { favorites } = favoritesStore;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [activeCategory, setActiveCategory] = useState(0);

  const activeCategoryData = useMemo(() => {
    const safeCategories = categoriesData?.categories || [];
    return safeCategories[activeCategory] || { name: '', subcategories: [] };
  }, [activeCategory]);

  const subcategories = useMemo(() => {
    return activeCategoryData.subcategories.map((subcategory) => (
      <div key={subcategory.slug}>
        <NextLink href={`/${activeCategoryData.slug}/${subcategory.slug}`}>
          <DropdownMenuItem className="cursor-pointer font-medium pb-1">
            {subcategory.name}
          </DropdownMenuItem>
        </NextLink>
        <div>
          {subcategory.subcategories.map((nestedSubcategory) => (
            <NextLink
              href={`/${activeCategoryData.slug}/${subcategory.slug}/${nestedSubcategory.slug}`}
              key={nestedSubcategory.slug}
            >
              <DropdownMenuItem className="cursor-pointer text-[13px] py-[2px]">
                {nestedSubcategory.name}
              </DropdownMenuItem>
            </NextLink>
          ))}
        </div>
      </div>
    ));
  }, [activeCategoryData]);

  return (
    <div className="flex items-center justify-between py-3 relative mt-4">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList className="px-3">
          <NavigationMenuItem className="px-3 max-md:px-1">
            <HeaderLink href="/my-orders" className="font-medium hover:text-default duration-300">
              Мои заказы
            </HeaderLink>
          </NavigationMenuItem>

          <DropdownMenu>
            <DropdownMenuTrigger className="header__dropdown">
              <NavigationMenuItem className="max-md:px-1 px-3 font-medium  hover:text-default duration-300">
                Категории
              </NavigationMenuItem>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen left-0 right-0 transform translate-x-0">
              <DropdownMenuLabel>Категории товаров</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex">
                <div className="w-[25%]">
                  {categoriesData.categories.map((e, i) => (
                    <NextLink
                      href={`/categories/${e.slug}`}
                      key={e.id}
                      onMouseEnter={() => setActiveCategory(i)}
                    >
                      <DropdownMenuItem className="cursor-pointer">
                        <Image src={e.icon} width={20} height={20} alt="Picture of the author" />
                        {e.name}
                      </DropdownMenuItem>
                    </NextLink>
                  ))}
                </div>
                <div className="w-full grid grid-cols-5 gap-4 pb-6">{subcategories}</div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavigationMenuItem className="px-3 max-md:px-1">
            <HeaderLink href="/support" className="font-medium  hover:text-default duration-300">
              Тех поддержка
            </HeaderLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <Input placeholder="Search.." className="mr-2 max-md:hidden" />

          <div className="flex">
            <HeaderLink
              href="/favorites"
              className=" pl-1.5 relative flex items-center hover:bg-grayMedium py-2 pr-2 rounded-[3px] transition-all duration-300"
            >
              <Favorites className="w-[14px] h-[14px]" />
              {isClient && favorites.length > 0 && (
                <div className="max-lg:top-[-1px] bg-red-700 rounded-full flex items-center justify-center absolute top-[-3px] right-[3px] p-[2px] text-[10px] text-white w-[12px] h-[13px]">
                  {favorites.length}
                </div>
              )}
              <span className="max-lg:hidden font-medium text-[13px] pl-1.5">Избранные</span>
            </HeaderLink>

            <HeaderLink
              href="/basket"
              className="relative flex items-center hover:bg-grayMedium py-2 pr-2 pl-1 rounded-[3px] transition-all duration-300"
            >
              <Basket />
              {isClient && products.length > 0 && (
                <div className="max-lg:top-[-1px] bg-red-700 rounded-full flex items-center justify-center absolute top-[-3px] right-[3px] p-[2px] text-[10px] text-white w-[12px] h-[13px]">
                  {products.length}
                </div>
              )}
              <span className="max-lg:hidden font-medium text-[13px] block pl-1">Корзина</span>
            </HeaderLink>

            <Dialog>
              <DialogTrigger className="pl-1.5 relative flex items-center hover:bg-grayMedium py-2 pr-2 rounded-[3px] transition-all duration-300">
                <User />
                <span className="max-lg:hidden font-medium text-[13px] pl-1.5">Войти</span>
              </DialogTrigger>
              <DialogContent>
                <AuthModal />
              </DialogContent>
            </Dialog>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
});
