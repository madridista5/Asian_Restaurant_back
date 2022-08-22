import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards } from "@nestjs/common";
import { AddDishBasketDto } from "./dto/add-dish-basket.dto";
import { BasketService } from "./basket.service";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "../decorators/userobj.decorator";
import { User } from "../user/user.entity";
import { DishInBasketResponse } from "../types";

@Controller("/basket")
export class BasketController {

  constructor(
    @Inject(BasketService) private basketService: BasketService
  ) {
  }

  @Post("/add")
  @UseGuards(AuthGuard("jwt"))
  addDishToBasket(
    @Body() newDish: AddDishBasketDto,
    @UserObj() user: User
  ): Promise<void> {
    return this.basketService.addDishToBasket(newDish, user);
  }

  @Get("/userBasket")
  @UseGuards(AuthGuard("jwt"))
  getUserBasket(
    @UserObj() user: User
  ): Promise<DishInBasketResponse[]> {
    return this.basketService.getUserBasket(user);
  }

  @Delete("/delete/:id")
  @UseGuards(AuthGuard("jwt"))
  deleteDishFromBasket(@Param("id") id: string): Promise<void> {
    return this.basketService.deleteDishFromBasket(id);
  }

  @Delete("/deleteAll")
  @UseGuards(AuthGuard("jwt"))
  deleteAllBasket(
    @UserObj() user: User
  ): Promise<void> {
    return this.basketService.deleteAllBasket(user);
  }

  @Get("/sumOfBasket")
  @UseGuards(AuthGuard("jwt"))
  getSumOfBasket(
    @UserObj() user: User
  ): Promise<number> {
    return this.basketService.getSumOfBasket(user);
  }
}
