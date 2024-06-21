import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { DishService } from './dish.service';
import { Dish } from './entities/dish.entity';

@Controller('dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  create(@Body() createDishDto: CreateDishDto): Promise<Dish> {
    return this.dishService.create(createDishDto);
  }

  @Get()
  findAll() {
    return this.dishService.findAll();
  }
}
