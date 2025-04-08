import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';

import { AuthModal } from '@/app/components/features/Auth/AuthModal';
import BasketStore from '@/app/stores/basket-store';
import { AddedBasket, Basket, HeaderSearch, MobileUser, Uzum } from '@/assets/icons';
import { Dialog, DialogContent, DialogTrigger } from '@/shadcn/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shadcn/ui/navigation-menu';

import { HeaderLink } from './components';

export const MobileHeader: FC = observer(() => {
  const { products } = BasketStore;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <NavigationMenu className="fixed z-10 bottom-0 h-[60px] bg-white w-full min-w-full shadow-[0_-4px_8px_rgba(54,55,64,0.25)]">
      <NavigationMenuList className="px-1 flex gap-5 justify-between">
        <NavigationMenuItem className="px-1">
          <HeaderLink href="/" className="text-[12px] flex justify-center items-center flex-col">
            <Uzum className="w-[24px] h-[24px] mb-[2px]" />
            Главная
          </HeaderLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1">
          <HeaderLink
            href="/categories"
            className="text-[12px] flex justify-center items-center flex-col"
          >
            <HeaderSearch className="w-[24px] h-[24px] mb-[2px]" />
            Каталог
          </HeaderLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1">
          <HeaderLink
            href="/basket"
            className="text-[12px] flex justify-center items-center flex-col relative"
          >
            <Basket className="w-[24px] h-[24px] mb-[2px]" />
            Корзина
            {isClient && products.length > 0 && (
              <div className="max-lg:top-[-1px] bg-red-700 rounded-full flex items-center justify-center absolute top-[-3px] right-[3px] p-[2px] text-[10px] text-white w-[12px] h-[13px]">
                {products.length}
              </div>
            )}
          </HeaderLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1">
          <HeaderLink
            href="/my-orders"
            className="text-[12px] flex justify-center items-center flex-col"
          >
            <AddedBasket className="w-[24px] h-[24px] mb-[2px]" />
            Мои заказы
          </HeaderLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="px-1">
          <Dialog>
            <DialogTrigger className="flex justify-center items-center flex-col ">
              <MobileUser className="w-[24px] h-[24px] mb-[2px]" />
              <span className="text-[12px]">Войти</span>
            </DialogTrigger>
            <DialogContent>
              <AuthModal />
            </DialogContent>
          </Dialog>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
});
