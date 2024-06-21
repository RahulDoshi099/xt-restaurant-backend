// src/group/dto/create-group.dto.ts
import { IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;
}
