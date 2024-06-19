import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './entities/order.entity';
import { Dish } from '../dishes/entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Dish])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
