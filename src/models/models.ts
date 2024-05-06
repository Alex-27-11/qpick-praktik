export interface HeadPhonesItem {
  img: string;
  title: string;
  price: number;
  rate: number;
  id: number;
  oldPrice?: number;
}

export interface BasketItem {
  img: string;
  title: string;
  price: number;
  id: number;
}

export interface Basket {
  basketCards: BasketItem[];
  totalPrice: number;
  Count: number;
}
