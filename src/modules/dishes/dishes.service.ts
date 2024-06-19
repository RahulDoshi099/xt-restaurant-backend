import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
  ) {}

  findAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  create(dish: Dish): Promise<Dish> {
    return this.dishRepository.save(dish);
  }
}
