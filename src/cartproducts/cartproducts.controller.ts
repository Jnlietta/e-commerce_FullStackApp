import { Controller } from '@nestjs/common';
import { CartproductsService } from './cartproducts.service';

@Controller('cartproducts')
export class CartproductsController {
  constructor(private cartproductsService: CartproductsService) {}
}
