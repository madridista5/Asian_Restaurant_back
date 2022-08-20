import { Injectable } from '@nestjs/common';
import { AddDishBasketDto } from './dto/add-dish-basket.dto';
import { DishInBasket } from "./dish-in-basket.entity";
import { User } from "../user/user.entity";
import { DishInBasketResponse } from "../types";

@Injectable()
export class BasketService {

  async addDishToBasket(newDish: AddDishBasketDto, user: User): Promise<void> {
    const dish = new DishInBasket;
    dish.name = newDish.name;
    dish.price = newDish.price;
    dish.user = user;
    await dish.save();
  }

  async getUserBasket(user: User): Promise<DishInBasketResponse[]> {
    const relation = await User.find({
      relations: ["dishesInBasket"],
    });
    const currentUser: User = relation.filter(currentUser => currentUser.id === user.id)[0];

    return currentUser.dishesInBasket
      .map(dish => ({
        id: dish.id,
        name: dish.name,
        price: dish.price,
      })) as DishInBasketResponse[];
  }

  async deleteDishFromBasket(id: string): Promise<void> {
    await DishInBasket.delete(id);
  }
}
