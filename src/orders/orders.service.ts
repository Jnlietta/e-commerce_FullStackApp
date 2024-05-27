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

  public async create(orderData: Omit<Order, 'id'>): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: orderData,
      });
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
