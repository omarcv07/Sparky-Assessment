import { calculateDiscount, currencyFormatter } from "./utils";
import type { ProductProps } from "../types";

const useProductDetails = ({
  price,
  discount,
}: Pick<ProductProps, "price" | "discount">) => {
  const discountPrice = calculateDiscount(price, discount);
  const formatPrice = currencyFormatter();
  const formattedPrice = formatPrice(price);
  const formattedDiscount = discountPrice ? formatPrice(discountPrice) : null;

  return { formattedPrice, formattedDiscount };
};

export default useProductDetails;
