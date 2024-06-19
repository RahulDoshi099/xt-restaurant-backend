import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database';
import { DishesModule } from './modules/dishes/dishes.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DishesModule,
    OrdersModule,
  ],
})
export class AppModule {}
