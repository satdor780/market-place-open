import Cookies from 'js-cookie';
import { makeAutoObservable } from 'mobx';

import { Product } from '@/app/types/types';

class FavoritesStore {
  favorites: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadProductsFromCookies();
  }

  private loadProductsFromCookies() {
    const productsCookie = Cookies.get('favoritesProducts');
    if (productsCookie) {
      this.favorites = JSON.parse(productsCookie);
    }
  }

  private saveProductsToCookies() {
    Cookies.set('favoritesProducts', JSON.stringify(this.favorites), { expires: 7 });
  }

  addItem = (pr: Product) => {
    if (!this.favorites.some((product) => product.id === pr.id)) {
      this.favorites = [...this.favorites, pr];
      this.saveProductsToCookies();
    }
  };

  removeItem = (pr: Product) => {
    this.favorites = this.favorites.filter((product) => product.id !== pr.id);
    this.saveProductsToCookies();
  };

  isFavorite = (pr: Product) => {
    return this.favorites.some((product) => product.id === pr.id);
  };
}

const favoritesStore = new FavoritesStore();

export default favoritesStore;
