'use client';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { Quantity } from '@/app/components/entites/Quantity/Quantity';
import { CustomDrawer } from '@/app/components/shared/Drawer/CustomDrawer';
import { Emptiness } from '@/app/components/shared/Emptiness/Emptiness';
import BasketStore from '@/app/stores/basket-store';
import { formatPrice } from '@/lib/formatPrice';
import { Button } from '@/shadcn/ui/button';
import { Drawer, DrawerTrigger } from '@/shadcn/ui/drawer';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shadcn/ui/table';

export const Basket: FC = observer(() => {
  const { products, addQuantity, removeQuantity, changeQuantity, total, itemTotal, removeItem } =
    BasketStore;

  if (products.length === 0) {
    return (
      <Emptiness
        title="В корзине пока пусто"
        subtitle="Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки"
      />
    );
  }

  return (
    <>
      <h3 className="py-3 flex font-medium text-2xl items-center">
        Ваша корзина,
        <b className="text-gray pl-1">{products.length} товар</b>
      </h3>
      <Table className="mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Product</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Trash</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            if (!product.basket) {
              return null;
            }
            return (
              <Drawer key={product.id}>
                <TableRow>
                  <TableCell className="flex items-center gap-3 w-full pr-4">
                    <div className="mr-1 rounded-lg overflow-hidden min-w-[162.5px]">
                      <Image
                        src={product.img}
                        alt={product.description}
                        width={200}
                        height={200}
                        className="w-full min-w-[162.5px]"
                      />
                    </div>
                    <div className="pl-2 px-4">
                      <p className="pb-1">{product.title}</p>
                      {product.basket.characteristics.map((e) => (
                        <p key={e.id} className="text-gray text-[12px] pb-[2px] whitespace-nowrap">
                          {e.name}: {e.variant}
                          {e.expensivePrice > 0 && <span>{` + ${e.expensivePrice}`}</span>}
                        </p>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-4">{formatPrice(product.price)}</TableCell>
                  <TableCell className="px-4">
                    <Quantity
                      quantity={product.basket.quantity}
                      addQuantity={() => addQuantity(product)}
                      changeQuantity={(e) => changeQuantity(product, e)}
                      removeQuantity={() => removeQuantity(product)}
                    />
                  </TableCell>
                  <TableCell className="px-4">
                    <Link href={`/product/${product.id}`} className="block mb-2">
                      <Button>К карточке товара</Button>
                    </Link>
                    <DrawerTrigger>
                      <Button>Изменить</Button>
                    </DrawerTrigger>
                  </TableCell>
                  <TableCell className="px-4">{formatPrice(itemTotal(product))}</TableCell>
                  <TableCell className="px-4">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="cursor-pointer ml-auto flex mr-2"
                      onClick={() => removeItem(product)}
                    />
                  </TableCell>
                </TableRow>
                <CustomDrawer product={product} />
              </Drawer>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">{formatPrice(total)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
});
