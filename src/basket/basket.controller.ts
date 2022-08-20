import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { AddDishBasketDto } from "./dto/add-dish-basket.dto";
import { BasketService } from "./basket.service";
import { AuthGuard } from "@nestjs/passport";
import { UserObj } from "../decorators/userobj.decorator";
import { User } from "../user/user.entity";

@Controller('/basket')
export class BasketController {

  constructor(
    @Inject(BasketService) private basketService: BasketService,
    ) {}

  @Post('/add')
  @UseGuards(AuthGuard('jwt'))
  addDishToBasket(
    @Body() newDish: AddDishBasketDto,
    @UserObj() user: User,
    ): Promise<void> {
    return this.basketService.addDishToBasket(newDish, user);
  }
}
