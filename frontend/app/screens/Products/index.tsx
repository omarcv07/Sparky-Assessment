import Product from "./Product";
import type { ProductsProps } from "./types";

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-5">
        <h1 className="title">Products</h1>
      </div>
      <div>
        <div className="max-w-[1060px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-0 lg:px-10 pb-10">
          {products.map((product, index) => (
            <Product {...product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
