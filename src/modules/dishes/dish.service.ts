import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
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

  async create(createDishDto: CreateDishDto): Promise<Dish> {
    const { groupId, name, ...dishData } = createDishDto;

    const group = await this.groupRepository.findOne({ where: { id: groupId } });
    if (!group) {
      throw new NotFoundException('Group not found');
    }

    const existingDish = await this.dishRepository.findOne({ where: { name } });
    if (existingDish) {
      throw new ConflictException('A dish with this name already exists');
    }

    const dish = this.dishRepository.create({
      ...dishData,
      name,
      group,
    });
    return this.dishRepository.save(dish);
  }

  async findAll(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['group'] });
  }

  async findOneById(dishId: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({ where: { id: dishId } }); // Simply pass the ID as argument
    
    if (!dish) {
      throw new NotFoundException(`Dish with ID ${dishId} not found`);
    }
    return dish;
  }
}
