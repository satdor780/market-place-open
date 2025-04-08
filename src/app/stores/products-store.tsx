import { makeAutoObservable } from 'mobx';

import { Product, ProductData } from '@/app/types/types';
import { productsData } from '@/data';

class ProductsStore {
  products: ProductData = productsData;

  constructor() {
    makeAutoObservable(this);
  }

  toggleBasket = (product: Product) => {
    this.products.categories.forEach((category) => {
      const foundProduct = category.products.find((p) => p.id === product.id);
      if (foundProduct) {
        foundProduct.isBasket = true;

        if (foundProduct.isBasket && !foundProduct.basket) {
          foundProduct.basket = {
            characteristics: [],
            quantity: 1,
            totalPrice: foundProduct.price,
          };
        }
      }
    });
  };

  removeFromBasket = (product: Product) => {
    this.products.categories.forEach((category) => {
      const foundProduct = category.products.find((p) => p.id === product.id);
      if (foundProduct) {
        foundProduct.isBasket = false;
        foundProduct.basket = undefined;
      }
    });
  };

  getProductsFromCategory = (category: string | undefined) => {
    if (!category) return null;
    return this.products.categories.find((e) => e.slug === category);
  };
}

const productsStore = new ProductsStore();

export default productsStore;
