import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../types";

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
}