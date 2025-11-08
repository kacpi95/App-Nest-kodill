import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  private ordersService;

  constructor(ordersService: OrdersService) {
    this.ordersService = ordersService;
  }

  @Get('/')
  getAll(): any {
    return this.ordersService.getAll();
  }
  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');

    return this.ordersService.getById(id);
  }

  @Delete('/:id')
  delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Product not found');

    this.ordersService.deleteById(id);

    return { success: true };
  }
}
