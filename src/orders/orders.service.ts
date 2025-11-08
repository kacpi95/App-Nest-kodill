import { db, Order } from './../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }
}
