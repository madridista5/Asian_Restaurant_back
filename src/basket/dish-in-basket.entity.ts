import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { JoinColumn } from "typeorm/browser";

@Entity()
export class DishInBasket extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 0,
  })
  price: number;

  @ManyToOne(type => User, entity => entity.dishesInBasket)
  @JoinColumn()
  user: User;
}