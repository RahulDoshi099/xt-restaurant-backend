import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database';
import { UserModule } from './modules/user/user.module';
import { GroupModule } from './modules/group/group.module';
import { DishesModule } from './modules/dishes/dishes.module';
import { OrderModule } from './modules/orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GroupModule,
    DishesModule,
    UserModule,
    OrderModule
  ],
})
export class AppModule {}
