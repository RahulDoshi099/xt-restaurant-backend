import { Controller, Get, Post, Body } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dish } from './entities/dish.entity';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  findAll(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  @Post()
  create(@Body() dish: Dish): Promise<Dish> {
    return this.dishesService.create(dish);
  }
}
