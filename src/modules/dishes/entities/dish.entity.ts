// src/modules/dishes/entities/dish.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { OrderItem } from 'src/modules/orders/entities/order-item.entity';

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

  @ManyToOne(() => Group, group => group.dishes, { nullable: false })
  group: Group;

  @OneToMany(() => OrderItem, orderItem => orderItem.dish)
  orderItems: OrderItem[];
}
