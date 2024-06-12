import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { Request, Response } from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/')
  async create(
    @Body() orderData: CreateOrderDTO,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const guestId = req.cookies['guestId'];
    const order = await this.ordersService.create(orderData, guestId);

    // Clear the 'guestId' cookie
    res.clearCookie('guestId');

    // Respond with the created order
    res.status(201).json(order);
  }
}
