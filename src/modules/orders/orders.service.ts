// order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { UserService } from '../user/user.service';
import { CreateOrderDto, OrderItemDto } from './dto/create-order.dto';
import { DishService } from '../dishes/dish.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    private readonly userService: UserService,
    private dishRepository : DishService
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, items } = createOrderDto;

    // Check if user exists
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Create order
    const order = new Order();
    order.user = user;
    order.totalPrice = 0; // Initialize total price

    // Create order items
    for (const item of items) {
      const dish = await this.dishRepository.findOneById(item.dishId);
      if (!dish) {
        throw new NotFoundException(`Dish with ID ${item.dishId} not found`);
      }

      const orderItem = new OrderItem();
      orderItem.dish = dish;
      orderItem.quantity = item.quantity;
      orderItem.groupId = item.groupId; // Assuming groupId is included in DTO

      order.totalPrice += dish.price * item.quantity; // Calculate total price

      await this.orderItemRepository.save(orderItem);
      order.dishes.push(orderItem); // Assuming `dishes` is a OneToMany relation in Order entity
    }

    // Save order
    await this.orderRepository.save(order);

    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['dishes', 'dishes.dish', 'user'],
    });
  }
  
  
}
