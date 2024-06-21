// src/entities/group.entity.ts
import { Dish } from 'src/modules/dishes/entities/dish.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Dish, dish => dish.group)
  dishes: Dish[];
}
