import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import { Group } from '../group/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish,Group])],
  controllers: [DishController],
  providers: [DishService],
})
export class DishesModule {}
