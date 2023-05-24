import type {
  LoaderFunction,
  V2_MetaFunction,
  LinksFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Products from "./../screens/Products";
import productStyles from "~/styles/products.css";
import { getStoredProducts } from "~/data/products";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Sparky Products App" }];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: productStyles },
];

export const loader: LoaderFunction = async () => {
  const products = await getStoredProducts();
  return json(products);
};

export default function Index() {
  const products = useLoaderData();
  return <Products products={products} />;
}
