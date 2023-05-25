import makeAssessmentDb from '..';

describe('findAverageOrderValue', () => {
  it('should return the average order value', () => {
    const orders: any = [
      { total_tax: '1.00', subtotal_price: '2.00' },
      { total_tax: '2.00', subtotal_price: '3.00' },
      { total_tax: '3.00', subtotal_price: '4.00' }
    ];
    expect(makeAssessmentDb().findAverageOrderValue(orders)).toBe(500); // (3 + 5 + 7) * 100 / 3 = 400
  });

  it('should return 0 if the orders array is empty', () => {
    const orders: any = [];
    expect(makeAssessmentDb().findAverageOrderValue(orders)).toBe(0);
  });
});
