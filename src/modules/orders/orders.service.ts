import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { UserService } from '../user/user.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { DishService } from '../dishes/dish.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    private readonly userService: UserService,
    private readonly dishService: DishService
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<any> {
    const { userId, items } = createOrderDto;

    // Check if user exists
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Create order
    const order = new Order() as any;
    order.user = user;
    order.totalPrice = 0; // Initialize total price

    // Initialize the dishes array within the service method
    order.dishes = [];

    // Create order items
    for (const item of items) {
      const dish = await this.dishService.findOneById(item.dishId); // Make sure this method exists in DishService
      if (!dish) {
        throw new NotFoundException(`Dish with ID ${item.dishId} not found`);
      }

      const orderItem = new OrderItem();
      orderItem.dish = dish;
      orderItem.quantity = item.quantity;
      orderItem.groupId = item.groupId; 
      orderItem.order = order; 

      order.totalPrice += dish.price * item.quantity; // Calculate total price

      order.dishes.push(orderItem); // Add orderItem to order's dishes array
    }

    // Save order
    await this.orderRepository.save(order);

    // Save order items
    for (const orderItem of order.dishes) {
      await this.orderItemRepository.save(orderItem);
    }

    return {
      message: "order Added successfully"
    };
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['dishes', 'dishes.dish', 'user'],
    });
  }
}
