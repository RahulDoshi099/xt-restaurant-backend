// src/modules/user/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string; 

  @Column()
  phone: string;

  @Column({ type: 'date' }) 
  dob: Date;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  pincode: string;

  @Column()
  district: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];
}
