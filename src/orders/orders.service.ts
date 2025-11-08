import { db, Order } from './../db';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id: string): Order | null {
    return db.orders.find((el) => el.id === id);
  }
  public delete(id: string): Order[] {
    const updateArray = db.orders.filter((el) => el.id === id);
    db.orders = updateArray;
    return updateArray;
  }
  public create(orderData: Omit<Order, 'id'>): Order {
    const newOrder = { ...orderData, id: uuidv4() };
    db.orders.push(newOrder);
    return newOrder;
  }
  public edit(id: string, orderData: Omit<Order, 'id'>): void {
    db.orders.forEach((el) => {
      if (el.id === id) {
        Object.assign(el, orderData);
      }
    });
  }
}
