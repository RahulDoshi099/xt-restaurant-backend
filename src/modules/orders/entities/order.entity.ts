import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Dish } from '../../dishes/entities/dish.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Dish)
  @JoinTable()
  dishes: Dish[];

  @Column('decimal')
  totalPrice: number;
}
