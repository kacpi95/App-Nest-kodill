import { Order } from '@prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateOrderDTO } from 'src/products/dtos/create-orders.dtos';
import { UpdateOrderDTO } from 'src/products/dtos/update-orders.dtos';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: { product: true, client: true },
    });
  }

  public getById(id: Order['id']): Promise<Order> | null {
    return this.prismaService.order.findUnique({
      where: { id },
      include: { product: true, client: true },
    });
  }
  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
  public async create(dto: CreateOrderDTO) {
    try {
      return await this.prismaService.order.create({
        data: {
          product: { connect: { id: dto.productId } },
          client: { connect: { id: dto.clientId } },
        },
        include: { product: true, client: true },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("Product doesn't exist");
      throw error;
    }
  }
  public updateById(id: string, dto: UpdateOrderDTO) {
    return this.prismaService.order.update({
      where: { id },
      data: {
        product: dto.productId ? { connect: { id: dto.productId } } : undefined,
        client: dto.clientId ? { connect: { id: dto.clientId } } : undefined,
      },
      include: { product: true, client: true },
    });
  }
}
