import { IsNotEmpty, IsString, IsInt, Min, IsEmail } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  @IsString()
  userAddress: string;

  @IsNotEmpty()
  @IsString()
  delivery: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  priceOnlyProducts: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  priceTotal: number;
}
