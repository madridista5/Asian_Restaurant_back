import { Injectable } from '@nestjs/common';
import { AddDishBasketDto } from './dto/add-dish-basket.dto';
import { DishInBasket } from "./dish-in-basket.entity";
import { User } from "../user/user.entity";

@Injectable()
export class BasketService {

  async addDishToBasket(newDish: AddDishBasketDto, user: User): Promise<void> {
    const dish = new DishInBasket;
    dish.name = newDish.name;
    dish.price = newDish.price;
    dish.user = user;
    await dish.save();
  }
}
