import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  public getAll(): Product[] {
    return db.products;
  }

  public getById(id: string): Product | null {
    return db.products.find((el) => el.id === id);
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
