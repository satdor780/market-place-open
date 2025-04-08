import { makeAutoObservable } from 'mobx';

import ProductsStore from '@/app/stores/products-store';
import { Product } from '@/app/types/types';

class BasketStore {
  products: Product[] = [];

  private productsStore: typeof ProductsStore;

  constructor(productsStore: typeof ProductsStore) {
    makeAutoObservable(this);
    this.productsStore = productsStore;
  }

  // private loadProductsFromCookies() {
  //     try {
  //         const cookieStore = cookies();
  //         const productsCookie = cookieStore.get('basketProducts')?.value;
  //         console.log('Loaded from cookies:', productsCookie); // 🚨 Логирование
  //
  //         if (productsCookie) {
  //             this.products = JSON.parse(productsCookie);
  //         }
  //     } catch (error) {
  //         console.error('Failed to load cookies:', error);
  //     }
  // }
  //
  // private saveProductsToCookies() {
  //     try {
  //         const cookieStore = cookies();
  //         const data = JSON.stringify(this.products);
  //         console.log('Saving to cookies:', data); // 🚨 Логирование
  //
  //         cookieStore.set('basketProducts', data, {
  //             maxAge: 60 * 60 * 24 * 7, // 7 дней (в секундах)
  //             path: '/',
  //             sameSite: 'lax',
  //             secure: process.env.NODE_ENV === 'production',
  //         });
  //     } catch (error) {
  //         console.error('Failed to save cookies:', error);
  //     }
  // }

  addItem = (pr: Product) => {
    this.products = this.products.filter((product) => product.id !== pr.id);
    this.products = [...this.products, pr];
    this.productsStore.toggleBasket(pr);
  };

  removeItem = (pr: Product) => {
    this.products = this.products.filter((product) => product.id !== pr.id);
    this.productsStore.removeFromBasket(pr);
  };

  addQuantity = (pr: Product) => {
    this.products = this.products.map((product) => {
      if (product.id === pr.id && product.basket) {
        const newQuantity = product.basket ? product.basket.quantity + 1 : 1;
        return {
          ...product,
          basket: {
            ...product.basket,
            quantity: newQuantity,
          },
        };
      }
      return product;
    });
  };

  removeQuantity = (pr: Product) => {
    this.products = this.products.map((product) => {
      if (product.id === pr.id && product.basket) {
        const newQuantity = product.basket
          ? product.basket.quantity > 1
            ? product.basket.quantity - 1
            : 1
          : 1;
        return {
          ...product,
          basket: {
            ...product.basket,
            quantity: newQuantity,
          },
        };
      }
      return product;
    });
  };

  changeQuantity = (pr: Product, value: number) => {
    this.products = this.products.map((product) =>
      product.id === pr.id ? { ...product, quantity: value } : product,
    );
  };

  itemTotal = (pr: Product) => {
    return pr.basket ? pr.basket.totalPrice : null;
  };

  get total(): number {
    return this.products.reduce(
      (total, product) => (product.basket ? total + product.basket?.totalPrice : 0),
      0,
    );
  }

  applyDiscount(discountAmount: number): number {
    return this.total - discountAmount;
  }
}

const basketStore = new BasketStore(ProductsStore);

export default basketStore;
