import {
  IsNotEmpty,
  IsInt,
  IsUUID,
  IsString,
  IsEnum,
  IsOptional,
  Length,
} from 'class-validator';
import { $Enums } from '@prisma/client';
export class UpdateCartProductDto {
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

  @IsString()
  @IsOptional()
  @Length(0, 50)
  comment?: string;
}
