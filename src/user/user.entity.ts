import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../types";
import { DishInBasket } from "../basket/dish-in-basket.entity";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  pwdHash: string;

  @Column({
    length: 5,
  })
  role: UserRole;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @OneToMany(type => DishInBasket, entity => entity.user)
  dishesInBasket: DishInBasket[];
}