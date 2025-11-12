import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Product['id']): Promise<Product> | null {
    return this.prismaService.product.findUnique({ where: { id } });
  }

  public delete(id: string): Product[] {
    const updateArray = db.products.filter((el) => el.id !== id);
    db.products = updateArray;
    return updateArray;
  }

  public create(productData: Omit<Product, 'id'>): Product {
    const newProduct = { ...productData, id: uuidv4() };
    db.products.push(newProduct);
    return newProduct;
  }
  public edit(id: string, productData: Omit<Product, 'id'>): void {
    db.products.forEach((el) => {
      if (el.id === id) {
        Object.assign(el, productData);
      }
    });
  }
}
