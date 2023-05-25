export interface Address {
    id?: number;
    zip: string;
    city: string;
    name: string;
    phone: string;
    company: string | null;
    country: string;
    default?: boolean;
    address1: string;
    address2: string | null;
    province: string | null;
    last_name: string;
    first_name: string;
    customer_id: number;
    country_code: string;
    country_name: string;
    province_code: string | null;
}