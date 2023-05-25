import { MakeAssessmentDb } from '@data-access/types/assessment';
import { Order } from '@domain/entities/Order';
import { BASIC_AUTH } from '@infrastructure/config';
import axios from 'axios';

const makeAssessmentDb = (): MakeAssessmentDb => {
  function findTopCustomer(orders: Order[]) {
    let maxOrderValue = 0;
    let maxOrderCustomerEmail = '';

    for (let order of orders) {
      let orderValue = parseFloat(order.total_price);
      if (orderValue > maxOrderValue) {
        maxOrderValue = orderValue;
        maxOrderCustomerEmail = order.customer.email;
      }
    }

    return maxOrderCustomerEmail;
  }

  function findAverageOrderValue(orders: Order[]) {
    const totalValue = orders.reduce((sum, order) => {
      const price = parseFloat(order.total_tax) + parseFloat(order.subtotal_price);

      return sum + price * 100;
    }, 0);

    return orders.length ? totalValue / orders.length : 0;
  }

  function findTotalDiscounts(orders: Order[]) {
    const totalDiscount = orders.reduce((total, order) => {
      return total + parseFloat(order.total_discounts) * 100;
    }, 0);

    return totalDiscount;
  }

  async function submit(result: string) {
    const username = BASIC_AUTH.USERNAME;
    const password = BASIC_AUTH.PASSWORD;

    const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');

    const response = await axios.post(
      'https://assessments.sparkyapps.dev/assessment/submit',
      {
        result
      },
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          'Content-Type': 'text/plain'
        }
      }
    );

    return response.data;
  }

  return Object.freeze({
    findTopCustomer,
    findAverageOrderValue,
    findTotalDiscounts,
    submit
  });
};

export default makeAssessmentDb;
