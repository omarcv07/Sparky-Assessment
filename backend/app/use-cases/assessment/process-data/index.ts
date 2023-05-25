import { MakeAssessmentDb } from '@data-access/types/assessment';
import { MakeOrdersDb } from '@data-access/types/orders';

interface ProcessDataProps {
  assessmentDb: MakeAssessmentDb,
  orderDb: MakeOrdersDb
}

const makeProcessData = ({ assessmentDb, orderDb }: ProcessDataProps) => {
  const processData = async () => {
    const orders = await orderDb.getAll();

    const customerEmailWithGreatestTotalOrderValue = assessmentDb.findTopCustomer(orders)
    const averageOrderValueWithoutDiscountInCents = assessmentDb.findAverageOrderValue(orders)
    const totalDiscountsInCents = assessmentDb.findTotalDiscounts(orders)

    return {
      customer_email_with_greatest_total_order_value: customerEmailWithGreatestTotalOrderValue,
      average_order_value_without_discount_in_cents: averageOrderValueWithoutDiscountInCents,
      total_discounts_in_cents: totalDiscountsInCents
    };
  };

  return processData;
};

export default makeProcessData;
