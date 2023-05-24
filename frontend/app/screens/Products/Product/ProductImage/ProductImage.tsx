import type { ProductProps } from "../../types";

const ProductImage = ({
  name,
  category,
  picture,
}: Pick<ProductProps, "name" | "category" | "picture">) => {
  return (
    <div className="product-image-container">
      <img
        className="product-image"
        src={picture}
        alt={name}
        aria-label="product-image"
      />
      {category ? (
        <span className="category-tag capitalize" aria-label="product-category">
          {category}
        </span>
      ) : null}
    </div>
  );
};

export default ProductImage;
