import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { CartproductsService } from './cartproducts.service';
import { CreateCartProductDto } from './dtos/create-cartproduct.dto';
import { UpdateCartProductDto } from './dtos/update-cartproduct.dto';
import { Request } from 'express';

@Controller('cartproducts')
export class CartproductsController {
  constructor(private cartproductsService: CartproductsService) {}

  @Get('/')
  getAll(@Req() req: Request) {
    const guestId = req.cookies['guestId'];
    return this.cartproductsService.getAll(guestId);
  }

  @Post('/')
  async createCartProduct(
    @Body() cartProductData: CreateCartProductDto,
    @Req() req: Request,
  ) {
    const guestId = req.cookies['guestId'];
    return this.cartproductsService.createCartProduct(cartProductData, guestId);
  }

  @Put('/:id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() cartProductData: UpdateCartProductDto,
  ) {
    const cartProduct = await this.cartproductsService.getById(id);
    if (!cartProduct) throw new NotFoundException('Cart product not found');

    return this.cartproductsService.updateById(id, cartProductData);
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    const cartProduct = await this.cartproductsService.getById(id);
    if (!cartProduct) throw new NotFoundException('Cart product not found');

    return this.cartproductsService.deleteById(id);
  }
}
