import { db, Order } from './../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id: string): Order | null {
    return db.orders.find((el) => el.id === id);
  }
}
