export interface DishResponse {
  category: string;
  name: string,
  description: string;
  price: number;
}

export interface DishInBasketResponse {
  id: string;
  name: string;
  price: number;
}