import { Inject, Injectable } from "@nestjs/common";
import { AddMenuDto } from "./dto/add-menu.dto";
import { DishInMenu } from "./dish-in-menu.entity";
import { DishResponse } from "../types";
import { DataSource } from "typeorm";

@Injectable()
export class MenuService {
  constructor(
    @Inject(DataSource) private dataSource: DataSource
  ) {
  }

  async add(newDish: AddMenuDto): Promise<void> {
    const { category, name, price, description } = newDish;
    const dishToAdd = new DishInMenu();
    dishToAdd.category = category;
    dishToAdd.name = name;
    dishToAdd.price = price;
    dishToAdd.description = description;
    await dishToAdd.save();
  }

  async getPastaAndRice(): Promise<DishResponse[]> {
    const res = await DishInMenu.find({ where: { category: "Makarony i ryż z WOK" } });

    return (res.map(obj => ({
      category: obj.category,
      name: obj.name,
      description: obj.description,
      price: obj.price
    })) as DishResponse[]);
  }

  async getSeafood(): Promise<DishResponse[]> {
    const res = await DishInMenu.find({ where: { category: "Owoce morza" } });

    return (res.map(obj => ({
      category: obj.category,
      name: obj.name,
      description: obj.description,
      price: obj.price
    })) as DishResponse[]);
  }

  async getAllDishes(): Promise<DishResponse[]> {
    const res = await DishInMenu.find();
    return (res.map(obj => ({
      id: obj.id,
      category: obj.category,
      name: obj.name,
      description: obj.description,
      price: obj.price
    })) as DishResponse[]);
  }

  async getOneDish(id: string): Promise<DishResponse[]> {
    return await DishInMenu.find({ where: { id } });
  }

  async editOneDish(req: AddMenuDto): Promise<void> {
    const dishToEdit = await DishInMenu.find({ where: { id: req.id } });
    dishToEdit[0].name = req.name;
    dishToEdit[0].description = req.description;
    dishToEdit[0].price = req.price;

    await this.dataSource
      .createQueryBuilder()
      .update(DishInMenu)
      .set(dishToEdit[0])
      .where({ id: req.id })
      .execute();
  }

  async deleteOneDishFromMenu(id: string): Promise<void> {
    await DishInMenu.delete(id);
  }
}
