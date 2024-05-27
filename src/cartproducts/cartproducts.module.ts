import { Module } from '@nestjs/common';
import { CartproductsController } from './cartproducts.controller';
import { CartproductsService } from './cartproducts.service';

@Module({
  controllers: [CartproductsController],
  providers: [CartproductsService]
})
export class CartproductsModule {}
