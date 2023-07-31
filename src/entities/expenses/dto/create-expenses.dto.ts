/* eslint-disable prettier/prettier */
import { IsInt, IsDate, IsOptional, IsString } from '@nestjs/class-validator';

export class CreateExpensesDto {
  @IsInt()
  id: number;

  @IsDate()
  date: Date;

  @IsOptional()
  type: string;

  @IsOptional()
  status: string;

  @IsInt()
  amount: number;

  @IsInt()
  user_ID: number; 

  @IsDate()
  createdAt: Date;
}
