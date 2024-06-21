import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database';
import { Group } from './modules/group/entities/group.entity';
import { Dish } from './modules/dishes/entities/dish.entity';
import { GroupController } from './modules/group/group.controller';
import { DishController } from './modules/dishes/dish.controller';
import { GroupService } from './modules/group/group.service';
import { DishService } from './modules/dishes/dish.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Group, Dish]),
  ],
  controllers: [GroupController, DishController],
  providers: [GroupService, DishService],
})
export class AppModule {}
