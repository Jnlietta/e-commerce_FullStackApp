import { Controller, Get, Post } from '@nestjs/common';
import { CartproductsService } from './cartproducts.service';
import { CartProduct } from '@prisma/client';

@Controller('cartproducts')
export class CartproductsController {
  constructor(private cartproductsService: CartproductsService) {}

  @Get('/')
  getAll() {
    return this.cartproductsService.getAll();
  }

  @Post('/')
  create(cartProductData: Omit<CartProduct, 'id'>) {
    return this.cartproductsService.create(cartProductData);
  }
}
