import { calculateDiscount, currencyFormatter } from "../utils";

describe("product utils", () => {
  describe("currencyFormatter", () => {
    it("should format the value with the default currency and format", () => {
      const formatPrice = currencyFormatter();
      const formattedPrice = formatPrice(100);

      expect(formattedPrice).toBe("$100.00");
    });

    it("should format the value with a different currency and format", () => {
      const formatPrice = currencyFormatter("GBP", "en-GB");
      const formattedPrice = formatPrice(75);

      expect(formattedPrice).toBe("£75.00");
    });
  });

  describe("calculateDiscount", () => {
    it("should return null when discount percentage is null", () => {
      const price = 100;
      const discountPercentage = null;
      const discountAmount = calculateDiscount(price, discountPercentage);

      expect(discountAmount).toBeNull();
    });

    it("should calculate the correct discount amount", () => {
      const price = 100;
      const discountPercentage = 20;
      const discountAmount = calculateDiscount(price, discountPercentage);

      expect(discountAmount).toBe(20);
    });

    it("should handle zero price with discount percentage", () => {
      const price = 0;
      const discountPercentage = 50;
      const discountAmount = calculateDiscount(price, discountPercentage);

      expect(discountAmount).toBe(0);
    });
  });
});
