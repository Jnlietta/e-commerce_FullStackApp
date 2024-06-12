import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

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
          orderId: null,
        },
      });

      return order;
    } catch (error) {
      throw error;
    }
  }
}
