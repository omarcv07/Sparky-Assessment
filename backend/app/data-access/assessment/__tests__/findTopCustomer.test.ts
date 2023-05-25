import makeAssessmentDb from '..';

describe('findTopCustomer', () => {
  it('should return the customer email with the highest total order value', () => {
    const orders: any = [
      {
        customer: { email: 'customer1@example.com' },
        total_price: '100.00'
      },
      {
        customer: { email: 'customer2@example.com' },
        total_price: '200.00'
      },
      {
        customer: { email: 'customer3@example.com' },
        total_price: '150.00'
      }
    ];
    expect(makeAssessmentDb().findTopCustomer(orders)).toBe('customer2@example.com');
  });

  it('should return an empty string if the orders array is empty', () => {
    const orders: any = [];
    expect(makeAssessmentDb().findTopCustomer(orders)).toBe('');
  });
});
