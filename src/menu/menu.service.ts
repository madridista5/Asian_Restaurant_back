import { Injectable } from '@nestjs/common';
import { AddMenuDto } from "./dto/add-menu.dto";
import { DishInMenu } from "./dish-in-menu.entity";
import { DishResponse } from "../types";

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

  async getPastaAndRice(): Promise<DishResponse[]> {
    const res = await DishInMenu.find({where: {category: 'Makarony i ryż z WOK'}});

    return (res.map(obj => ({
      name: obj.name,
      description: obj.description,
      price: obj.price,
    })) as DishResponse[]);
  }

  async getSeafood(): Promise<DishResponse[]> {
    const res = await DishInMenu.find({where: {category: 'Owoce morza'}});

    return (res.map(obj => ({
      name: obj.name,
      description: obj.description,
      price: obj.price,
    })) as DishResponse[]);
  }
}
