import { Request } from 'express';
import { MakeAssessmentDb } from '@data-access/types/assessment';

interface SubmitDataProps {
  assessmentDb: MakeAssessmentDb;
}

const makeSubmitData = ({ assessmentDb }: SubmitDataProps) => {
  const submitData = async (req: Request) => {
    const {
      customer_email_with_greatest_total_order_value,
      average_order_value_without_discount_in_cents,
      total_discounts_in_cents
    } = req.body;

    const results = {
      customer_email_with_greatest_total_order_value,
      average_order_value_without_discount_in_cents,
      total_discounts_in_cents
    };

    const base64Result = Buffer.from(JSON.stringify(results)).toString('base64');

    const result = await assessmentDb.submit(base64Result);

    return result;
  };

  return submitData;
};

export default makeSubmitData;
