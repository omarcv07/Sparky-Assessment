import { Order } from '@domain/entities/Order';

export interface MakeOrdersDb {
    getAll(): Promise<Order[]>;
}