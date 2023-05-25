import { MakeAssessmentDb } from '@data-access/types/assessment';
import { MakeOrdersDb } from '@data-access/types/orders';
import makeProcessData from '../process-data';

// Mock data
const mockAssessmentDb: MakeAssessmentDb = {
    findTopCustomer: jest.fn().mockReturnValue("customer@mail.com"),
    findAverageOrderValue: jest.fn().mockReturnValue(100),
    findTotalDiscounts: jest.fn().mockReturnValue(50),
    submit: jest.fn()
};

const mockOrderDb: MakeOrdersDb = {
    getAll: jest.fn().mockReturnValue([])
};

describe("ProcessData tests", () => {
    // This test is expected to pass
    it("should return correct result when provided with valid input", async () => {
        const processData = makeProcessData({ assessmentDb: mockAssessmentDb, orderDb: mockOrderDb });
        const result = await processData();
        expect(result).toEqual({
            customer_email_with_greatest_total_order_value: "customer@mail.com",
            average_order_value_without_discount_in_cents: 100,
            total_discounts_in_cents: 50
        });
    });

    // This test is expected to fail
    it("should fail when the returned value from findAverageOrderValue is not a number", async () => {
        const failingAssessmentDb: MakeAssessmentDb = {
            ...mockAssessmentDb,
            findAverageOrderValue: jest.fn().mockReturnValue("not a number")
        };

        const processData = makeProcessData({ assessmentDb: failingAssessmentDb, orderDb: mockOrderDb });
        const result = await processData();

        expect(typeof result.average_order_value_without_discount_in_cents).toBe('string');
    });
});