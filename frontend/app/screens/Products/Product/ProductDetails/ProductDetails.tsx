import type { ProductProps } from "../../types";
import useProductDetails from "../useProductDetails";

const ProductDetails = ({
  discount,
  name,
  price,
}: Pick<ProductProps, "discount" | "name" | "price">) => {
  const { formattedPrice, formattedDiscount } = useProductDetails({
    price,
    discount,
  });

  return (
    <>
      <div className="sale-tag-container">
        {discount ? (
          <div
            className={`sale-tag uppercase text-xs ${discount ?? "invisible"}`}
            aria-label="product-sale-tag"
          >
            sale
          </div>
        ) : null}
      </div>
      <h2 className="product-name" aria-label="product-name">
        {name}
      </h2>
      <div>
        <span aria-label="product-price">
          {discount ? formattedDiscount : formattedPrice}
        </span>{" "}
        {discount ? (
          <s className="old-price" aria-label="old-price">
            {formattedPrice}
          </s>
        ) : null}
      </div>
    </>
  );
};

export default ProductDetails;
