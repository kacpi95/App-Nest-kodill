import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Product['id']): Promise<Product> | null {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  public deleteById(id: Product['id']): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }

  public create(
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product> {
    return this.prismaService.product.create({
      data: productData,
    });
  }
  public edit(id: string, productData: Omit<Product, 'id'>): void {
    db.products.forEach((el) => {
      if (el.id === id) {
        Object.assign(el, productData);
      }
    });
  }
}
