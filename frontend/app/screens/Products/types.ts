export type ProductProps = {
  id: string;
  name: string;
  price: number;
  discount: number | null;
  category: string | null;
  picture: string;
};

export type ProductsProps = {
  products: ProductProps[];
};