import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AddMenuDto } from "./dto/add-menu.dto";

@Entity()
export class DishInMenu extends BaseEntity implements AddMenuDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  price: number;
}