import { MoneySet } from './Money';

export interface LineItem {
    id: number;
    sku: string;
    name: string;
    grams: number;
    price: string;
    title: string;
    duties: any[];
    vendor: string;
    taxable: boolean;
    quantity: number;
    gift_card: boolean;
    price_set: MoneySet;
    tax_lines: any[];
    product_id: number;
    properties: any[];
    variant_id: number;
    variant_title: string;
    product_exists: boolean;
    total_discount: string;
    requires_shipping: boolean;
    fulfillment_status: string | null;
    total_discount_set: MoneySet;
    fulfillment_service: string;
    admin_graphql_api_id: string;
    discount_allocations: any[];
    fulfillable_quantity: number;
    variant_inventory_management: string;
}