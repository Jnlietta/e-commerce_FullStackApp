import { BadRequestException, Injectable } from '@nestjs/common';
import { Order, Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  public async createOrderProduct(
    orderId: Order['id'],
    productId: Product['id'],
  ): Promise<Order> {
    try {
      return await this.prismaService.order.update({
        where: { id: orderId },
        data: {
          products: {
            create: {
              product: {
                connect: { id: productId },
              },
            },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("User or order doesn't exist");
      throw error;
    }
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
