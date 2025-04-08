import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import basketStore from '@/app/stores/basket-store';
import { BasketCharacteristics, Product } from '@/app/types/types';

const useBasketLogic = (product: Product) => {
  const { addItem, removeItem } = basketStore;

  const [quantity, setQuantity] = useState(product.basket ? product.basket.quantity : 1);
  const [expensive, setExpensive] = useState(0);
  const [price, setPrice] = useState((product.price + expensive) * quantity);

  const [characteristics, setCharacteristics] = useState<BasketCharacteristics[]>();

  useEffect(() => {
    const defaultCharacteristics = product.characteristics.map((charac) => ({
      id: charac.id,
      name: charac.name,
      variant: charac.variants[0].variantName,
      expensivePrice: charac.expensivePrices[0],
    }));

    setCharacteristics(
      product.basket && product.basket.characteristics
        ? [...product.basket.characteristics]
        : defaultCharacteristics,
    );
  }, [product]);

  useEffect(() => {
    if (characteristics) {
      const totalExtraPrice = characteristics.reduce(
        (acc, characteristic) => acc + characteristic.expensivePrice,
        0,
      );
      setExpensive(totalExtraPrice);
    }
  }, [characteristics]);

  useEffect(() => {
    setPrice((product.price + expensive) * quantity);
  }, [quantity, expensive, product.price]);

  const addToBasket = () => {
    if (characteristics) {
      addItem({
        ...product,
        isBasket: true,
        basket: {
          characteristics: characteristics,
          quantity: quantity,
          totalPrice: price,
        },
      });
      // product.isBasket = true;
      toast('товар добавлен в корзину !');
    }
  };

  const removeToBasket = () => {
    removeItem(product);
    toast('товар удален из корзины(');
  };

  const changeProductQuantity = () => {};

  const handleCharacteristicChange = (
    characId: string,
    characName: string,
    variant: string,
    price: number,
  ) => {
    setCharacteristics((prev) => {
      if (prev) {
        const newCharacteristic = prev.filter((e) => e.id !== characId);
        newCharacteristic.push({
          id: characId,
          name: characName,
          variant: variant,
          expensivePrice: price,
        });
        return newCharacteristic;
      } else {
        return [
          {
            id: characId,
            name: characName,
            variant: variant,
            expensivePrice: price,
          },
        ];
      }
    });
  };

  return {
    quantity,
    setQuantity,
    changeProductQuantity,
    characteristics,
    setCharacteristics,
    price,
    addToBasket,
    removeToBasket,
    handleCharacteristicChange,
  };
};

export default useBasketLogic;
