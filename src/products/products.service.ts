import { Injectable } from '@nestjs/common';
import { db, Product } from './../db';

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
}
