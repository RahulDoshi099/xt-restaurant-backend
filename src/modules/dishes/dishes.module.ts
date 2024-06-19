import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { Dish } from './entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  providers: [DishesService],
  controllers: [DishesController],
})
export class DishesModule {}
