import { IsNotEmpty, IsInt, IsUUID, IsOptional } from 'class-validator';

export class CreateCartProductDto {
  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsInt()
  @IsOptional()
  quantity?: number;

  @IsUUID()
  @IsOptional()
  orderId?: string;
}
