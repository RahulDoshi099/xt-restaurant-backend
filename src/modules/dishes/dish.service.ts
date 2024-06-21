// src/dish/dish.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { Dish } from './entities/dish.entity';
import { Group } from '../group/entities/group.entity';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private dishRepository: Repository<Dish>,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async create(createDishDto: any): Promise<any> {
    const group = await this.groupRepository.findOne(createDishDto.groupId);
    if (!group) {
      throw new Error('Group not found');
    }

    const dish = this.dishRepository.create({
      ...createDishDto,
      group,
    });
    return this.dishRepository.save(dish);
  }

  async findAll(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['group'] });
  }
}
