// create-order.dto.ts
import { IsNumber, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsArray()
  items: OrderItemDto[];
}

export class OrderItemDto {
  @IsNumber()
  dishId: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  groupId: number;
}
