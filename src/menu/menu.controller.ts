import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { AddMenuDto } from "./dto/add-menu.dto";
import { AdminGuard } from "../guards/admin.guard";
import { AuthGuard } from "@nestjs/passport";
import { DishResponse } from "../types";

@Controller("/menu")
export class MenuController {
  constructor(
    @Inject(MenuService) private menuService: MenuService
  ) {
  }

  @Post("/add")
  @UseGuards(AdminGuard)
  @UseGuards(AuthGuard("jwt"))
  add(@Body() newDish: AddMenuDto): Promise<void> {
    return this.menuService.add(newDish);
  }

  @Get("/pastaAndRice")
  getPastaAndRice(): Promise<DishResponse[]> {
    return this.menuService.getPastaAndRice();
  }

  @Get("/seafood")
  getSeafood(): Promise<DishResponse[]> {
    return this.menuService.getSeafood();
  }

  @Get("/allDishes")
  getAllDishes(): Promise<DishResponse[]> {
    return this.menuService.getAllDishes();
  }

  @Get("/oneDish/:id")
  getOneDish(@Param("id") id: string): Promise<DishResponse[]> {
    return this.menuService.getOneDish(id);
  }

  @Post("/editOneDish")
  @UseGuards(AdminGuard)
  @UseGuards(AuthGuard("jwt"))
  editOneDish(@Body() req: AddMenuDto): Promise<void> {
    return this.menuService.editOneDish(req);
  }

  @Delete("/delete/:id")
  @UseGuards(AdminGuard)
  @UseGuards(AuthGuard("jwt"))
  deleteOneDishFromMenu(@Param("id") id: string): Promise<void> {
    return this.menuService.deleteOneDishFromMenu(id);
  }

}
