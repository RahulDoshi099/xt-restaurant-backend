// src/modules/orders/dto/order-details.dto.ts
import { IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class OrderDetailsDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  @IsArray()
  dishes: OrderItemDetailsDto[];

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;
}

class OrderItemDetailsDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  dishId: number;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  groupId: number; // Assuming you want to include the group ID of the dish
}
