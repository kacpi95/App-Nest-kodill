import { db, Order } from './../db';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public getById(id: Order['id']): Promise<Order> | null {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }
  public delete(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
  public create(orderData: Omit<Order, 'id'>): Promise<Order> {
    return this.prismaService.order.create({
      data: orderData,
    });
  }
  public edit(id: string, orderData: Omit<Order, 'id'>): void {
    db.orders.forEach((el) => {
      if (el.id === id) {
        Object.assign(el, orderData);
      }
    });
  }
}
