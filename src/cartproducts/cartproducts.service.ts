import { Injectable } from '@nestjs/common';
import { CartProduct } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class CartproductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<CartProduct[]> {
    return this.prismaService.cartProduct.findMany({
      include: { product: true },
    });
  }

  public async create(
    cartProductData: Omit<CartProduct, 'id'>,
  ): Promise<CartProduct> {
    try {
      const { orderId, productId } = cartProductData;

      const isSameCartProduct = await this.prismaService.cartProduct.findFirst({
        where: { productId: productId },
      });

      const quantityIncreased = isSameCartProduct.quantity + 1;

      // check if product is already in cart if yes increase quantity, else add new product to cart
      if (isSameCartProduct) {
        await this.prismaService.cartProduct.update({
          where: { id: isSameCartProduct.id },
          data: {
            quantity: quantityIncreased,
          },
        });
      } else {
        return await this.prismaService.cartProduct.create({
          data: {
            product: {
              connect: { id: productId },
            },
            order: {
              connect: { id: orderId },
            },
          },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
