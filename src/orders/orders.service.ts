import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        cartProducts: true,
      },
    });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        cartProducts: true,
      },
    });
  }

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
    guestId: string,
  ): Promise<Order> {
    try {
      const order = await this.prismaService.order.create({
        data: orderData,
      });

      await this.prismaService.cartProduct.updateMany({
        data: {
          orderId: order.id,
        },
        where: {
          guestId: guestId,
        },
      });

      return order;
    } catch (error) {
      throw error;
    }
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
