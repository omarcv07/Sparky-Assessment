import { Order } from "./Order";

export interface AssessmentData {
    orders: Order[]
}
export interface ProcessedData {
    customer_email_with_greatest_total_order_value: string;
    average_order_value_without_discount_in_cents: number;
    total_discounts_in_cents: number;
}