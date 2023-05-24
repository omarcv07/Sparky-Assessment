import type { ProductProps } from "../types";
import ProductImage from "./ProductImage/ProductImage";
import ProductDetails from "./ProductDetails/ProductDetails";

const Product = ({
  id,
  name,
  price,
  discount,
  category,
  picture,
}: ProductProps) => {
  return (
    <div className="product-card">
      <ProductImage name={name} category={category} picture={picture} />
      <ProductDetails name={name} price={price} discount={discount} />
    </div>
  );
};

export default Product;
