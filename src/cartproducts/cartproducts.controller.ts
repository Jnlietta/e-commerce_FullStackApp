import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartproductsService } from './cartproducts.service';
import { CreateCartProductDto } from './dtos/create-cartproduct.dto';

@Controller('cartproducts')
export class CartproductsController {
  constructor(private cartproductsService: CartproductsService) {}

  @Get('/')
  getAll() {
    return this.cartproductsService.getAll();
  }

  @Post()
  async createCartProduct(@Body() cartProductData: CreateCartProductDto) {
    return this.cartproductsService.createCartProduct(cartProductData);
  }
}
