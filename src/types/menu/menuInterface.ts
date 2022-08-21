export interface DishResponse {
  id: string,
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