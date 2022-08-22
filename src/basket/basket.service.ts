import { Inject, Injectable } from "@nestjs/common";
import { AddDishBasketDto } from "./dto/add-dish-basket.dto";
import { DishInBasket } from "./dish-in-basket.entity";
import { User } from "../user/user.entity";
import { DishInBasketResponse } from "../types";
import { DataSource } from "typeorm";

@Injectable()
export class BasketService {

  constructor(
    @Inject(DataSource) private dataSource: DataSource
  ) {
  }

  async addDishToBasket(newDish: AddDishBasketDto, user: User): Promise<void> {
    const dish = new DishInBasket;
    dish.name = newDish.name;
    dish.price = newDish.price;
    dish.user = user;
    await dish.save();
  }

  async getUserBasket(user: User): Promise<DishInBasketResponse[]> {
    const relation = await User.find({
      relations: ["dishesInBasket"]
    });
    const currentUser: User = relation.filter(currentUser => currentUser.id === user.id)[0];

    return currentUser.dishesInBasket
      .map(dish => ({
        id: dish.id,
        name: dish.name,
        price: dish.price
      })) as DishInBasketResponse[];
  }

  async deleteDishFromBasket(id: string): Promise<void> {
    await DishInBasket.delete(id);
  }

  async deleteAllBasket(user: User): Promise<void> {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(DishInBasket)
      .where("userId = :id", { id: user.id })
      .execute();
  }

  async getSumOfBasket(user: User): Promise<number> {
    const userBasket = await this.getUserBasket(user);
    return userBasket.reduce((prev, curr) => prev + Number(curr.price), 0);
  }
}
