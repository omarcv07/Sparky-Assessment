import { SmsMarketingConsent } from './SmsMarketingConsent';
import { EmailMarketingConsent } from './EmailMarketingConsent';
import { Address } from './Address';

export interface Customer {
    id: number;
    note: string | null;
    tags: string;
    email: string;
    phone: string;
    state: string;
    currency: string;
    last_name: string;
    created_at: string;
    first_name: string;
    tax_exempt: boolean;
    updated_at: string;
    total_spent: string;
    orders_count: number;
    last_order_id: number;
    tax_exemptions: any[];
    verified_email: boolean;
    default_address: Address;
    last_order_name: string;
    accepts_marketing: boolean;
    admin_graphql_api_id: string;
    multipass_identifier: string | null;
    marketing_opt_in_level: string | null;
    sms_marketing_consent: SmsMarketingConsent;
    email_marketing_consent: EmailMarketingConsent;
    accepts_marketing_updated_at: string;
}