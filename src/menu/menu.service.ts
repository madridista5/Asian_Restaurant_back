import { Injectable } from '@nestjs/common';
import { AddMenuDto } from "./dto/add-menu.dto";
import { DishInMenu } from "./dish-in-menu.entity";

@Injectable()
export class MenuService {

  async add(newDish: AddMenuDto): Promise<void> {
    const {category, name, price, description} = newDish;
    const dishToAdd = new DishInMenu();
    dishToAdd.category = category;
    dishToAdd.name = name;
    dishToAdd.price = price;
    dishToAdd.description = description;
    await dishToAdd.save();
  }

}
