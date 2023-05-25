import { Order } from '@domain/entities/Order';

export interface MakeAssessmentDb {
  findTopCustomer(orders: Order[]): void;
  findAverageOrderValue(orders: Order[]): void;
  findTotalDiscounts(orders: Order[]): void;
  submit(result: string): Promise<void>;
}
