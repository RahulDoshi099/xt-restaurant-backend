import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  groupId: number;
}
