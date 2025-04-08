export interface Product {
  id: number;
  category: string;
  categorySlug: string;
  product: string;
  img: string;
  description: string;
  title: string;
  price: number;
  discount: number;
  reviews: number;
  rating: number;
  sells: number;
  reviewsList: ReviewsList[];
  images: IImage[];
  characteristics: Characteristic[];
  isFavorite: boolean;
  isBasket: boolean;
  availability: Availability;
  warranty: string;
  tags: string[];
  basket?: Basket;
  details: Details;
  categories: string[];
}

export interface Basket {
  characteristics: BasketCharacteristics[];
  quantity: number;
  totalPrice: number;
}

export interface Details {
  images: {
    dec: string;
    img: string;
  }[];
  list?: string[];
  text: string;
}

export interface BasketCharacteristics {
  name: string;
  id: string;
  variant: string;
  expensivePrice: number;
}

export interface ReviewsList {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface IImage {
  id: number;
  img: string;
  imageDec: string;
}

export interface Characteristic {
  name: string;
  id: string;
  variants: Variant[];
  expensivePrices: number[];
}

export interface Variant {
  variantImage?: string;
  variantName: string;
  variantTitle: string;
}

export interface Availability {
  status: string;
  deliveryTime: string;
}

export interface Category {
  title: string;
  slug: string;
  products: Product[];
}

export interface ProductData {
  categories: Category[];
}

export interface CategoryItem {
  name: string;
  slug: string;
}

export interface Subcategory {
  name: string;
  slug: string;
  subcategories: CategoryItem[];
}

export interface Catalog {
  id: number;
  name: string;
  slug: string;
  subcategories: Subcategory[];
  icon: string;
}

export interface CatalogsData {
  categories: Catalog[];
}

// FAQ
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type FAQCategory = {
  category: string;
  questions: FAQItem[];
};

export type FAQData = {
  faq: FAQCategory[];
};
