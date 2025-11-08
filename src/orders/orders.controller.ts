import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  private ordersService;

  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
  }
}
