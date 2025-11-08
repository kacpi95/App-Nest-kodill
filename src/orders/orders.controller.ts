import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from 'src/products/dtos/create-orders.dtos';
import { UpdateOrderDTO } from 'src/products/dtos/update-orders.dtos';

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
      throw new NotFoundException('Order not found');

    this.ordersService.deleteById(id);

    return { success: true };
  }
  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }
  @Patch('/:id')
  edit(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: UpdateOrderDTO,
  ) {
    if (!this.ordersService.getById(id))
      throw new NotFoundException('Order not found');
    this.ordersService.edit(id, orderData);

    return { success: true };
  }
}
