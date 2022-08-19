import { Injectable } from '@nestjs/common';
import { AddMenuDto } from "./dto/add-menu.dto";
import { DishInMenu } from "./dish-in-menu.entity";
import { PastaAndRiceResponse } from "../types";

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

  async getPastaAndRice(): Promise<PastaAndRiceResponse[]> {
    const res = await DishInMenu.find({where: {category: 'Makarony i ryż z WOK'}});
    const data: PastaAndRiceResponse[] = res.map(obj => ({
      name: obj.name,
      description: obj.description,
      price: obj.price,
    }));
    return data;
  }
}
