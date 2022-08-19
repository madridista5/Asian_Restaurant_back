import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { AddMenuDto } from "./dto/add-menu.dto";
import { AdminGuard } from "../guards/admin.guard";
import { AuthGuard } from "@nestjs/passport";
import { PastaAndRiceResponse } from "../types";

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

  @Get('/pastaAndRice')
  getPastaAndRice(): Promise<PastaAndRiceResponse[]> {
    return this.menuService.getPastaAndRice();
  }
}
