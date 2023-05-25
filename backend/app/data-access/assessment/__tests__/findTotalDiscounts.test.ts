import makeAssessmentDb from '..';

describe('findTotalDiscounts', () => {
  it('should return the total discounts', () => {
    const orders: any = [
      { total_discounts: '20.00' },
      { total_discounts: '30.00' },
      { total_discounts: '50.00' }
    ];
    expect(makeAssessmentDb().findTotalDiscounts(orders)).toBe(10000);
  });

  it('should return 0 if the orders array is empty', () => {
    const orders: any = [];
    expect(makeAssessmentDb().findTotalDiscounts(orders)).toBe(0);
  });
});
