import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { Dish } from '../dishes/entities/dish.entity';
import { OrderController } from './orders.controller';
import { OrderService } from './orders.service';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { DishService } from '../dishes/dish.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, User, Dish])],
  controllers: [OrderController],
  providers: [OrderService, UserService,DishService],
})
export class OrderModule {}
