import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { AddMenuDto } from "./dto/add-menu.dto";
import { AdminGuard } from "../guards/admin.guard";
import { AuthGuard } from "@nestjs/passport";

@Controller('/menu')
export class MenuController {
  constructor(
    @Inject(MenuService) private menuService: MenuService,
  ) {}

  @Post('/add')
  @UseGuards(AdminGuard)
  @UseGuards(AuthGuard("jwt"))
  add(@Body() newDish: AddMenuDto): Promise<void> {
    return this.menuService.add(newDish);
  }

}
