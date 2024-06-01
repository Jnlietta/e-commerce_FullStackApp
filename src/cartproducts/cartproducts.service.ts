import { Injectable, NotFoundException } from '@nestjs/common';
import { CartProduct } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateCartProductDto } from './dtos/create-cartproduct.dto';

@Injectable()
export class CartproductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(guestId: string): Promise<CartProduct[]> {
    return this.prismaService.cartProduct.findMany({
      where: {
        guestId: guestId,
      },
      include: { product: true },
    });
  }

  public getById(id: CartProduct['id']): Promise<CartProduct | null> {
    return this.prismaService.cartProduct.findUnique({
      where: { id },
    });
  }

  async createCartProduct(
    cartProductData: Omit<CreateCartProductDto, 'id'>,
    guestId: string,
  ): Promise<CartProduct> {
    const { productId, ...otherData } = cartProductData;

    // Check if the product exists
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }

    // Check if the product is already in the cart, if yes increase the quantity
    const existingCartProduct = await this.prismaService.cartProduct.findFirst({
      where: { productId, guestId },
    });

    if (existingCartProduct) {
      return this.prismaService.cartProduct.update({
        where: { id: existingCartProduct.id },
        data: {
          quantity: existingCartProduct.quantity + 1,
        },
      });
    }

    return this.prismaService.cartProduct.create({
      data: {
        ...otherData,
        guestId: guestId,
        product: { connect: { id: productId } },
      },
    });
  }

  async deleteById(id: CartProduct['id']): Promise<CartProduct> {
    const cartProduct = await this.prismaService.cartProduct.findFirst({
      where: { id },
    });

    // Check if the cart product is chosen more then once, if yes decrease the quantity
    if (cartProduct.quantity > 1) {
      return this.prismaService.cartProduct.update({
        where: { id },
        data: {
          quantity: cartProduct.quantity - 1,
        },
      });
    }

    return this.prismaService.cartProduct.delete({
      where: { id },
    });
  }
}
