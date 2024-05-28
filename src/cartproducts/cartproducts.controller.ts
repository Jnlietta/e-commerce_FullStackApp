import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CartproductsService } from './cartproducts.service';
import { CreateCartProductDto } from './dtos/create-cartproduct.dto';
import { Request } from 'express';

@Controller('cartproducts')
export class CartproductsController {
  constructor(private cartproductsService: CartproductsService) {}

  @Get('/')
  getAll() {
    return this.cartproductsService.getAll();
  }

  @Post()
  async createCartProduct(
    @Body() cartProductData: CreateCartProductDto,
    @Req() req: Request,
  ) {
    const guestId = req.cookies['guestId'];
    return this.cartproductsService.createCartProduct(cartProductData, guestId);
  }
}
