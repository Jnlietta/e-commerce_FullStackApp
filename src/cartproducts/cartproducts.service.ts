import { Injectable, NotFoundException } from '@nestjs/common';
import { CartProduct } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateCartProductDto } from './dtos/create-cartproduct.dto';
import { UpdateCartProductDto } from './dtos/update-cartproduct.dto';

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
    cartProductData: CreateCartProductDto,
    guestId: string,
  ): Promise<CartProduct> {
    const { productId, quantity, ...otherData } = cartProductData;

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
          quantity: existingCartProduct.quantity + quantity,
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

  async updateById(
    id: CartProduct['id'],
    cartProductData: UpdateCartProductDto,
  ): Promise<CartProduct> {
    const { productId, ...otherData } = cartProductData;

    // Check if the product exists
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }

    return this.prismaService.cartProduct.update({
      where: { id },
      data: {
        ...otherData,
      },
      include: { product: true },
    });
  }

  async deleteById(id: CartProduct['id']): Promise<CartProduct> {
    return this.prismaService.cartProduct.delete({
      where: { id },
    });
  }
}
