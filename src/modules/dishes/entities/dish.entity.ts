// src/entities/dish.entity.ts
import { Group } from 'src/modules/group/entities/group.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => Group, group => group.dishes)
  group: Group;
}
