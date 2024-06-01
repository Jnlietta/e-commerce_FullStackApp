import { IsNotEmpty, IsInt, IsUUID, IsString, IsEnum } from 'class-validator';
import { $Enums } from '@prisma/client';
export class CreateCartProductDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  @IsEnum($Enums.Size)
  size: $Enums.Size;
}
