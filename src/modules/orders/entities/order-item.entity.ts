// src/modules/orders/entities/order-item.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Dish } from '../../dishes/entities/dish.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.dishes)
  order: Order;

  @ManyToOne(() => Dish, dish => dish.orderItems)
  dish: Dish;

  @Column()
  quantity: number;

  @Column()
  groupId: number; 
}
