import { render, screen } from "@testing-library/react";
import Product from "..";
import "@testing-library/jest-dom";

describe("Product component", () => {
  const product = {
    id: "1",
    name: "Example Product",
    price: 100,
    discount: null,
    category: null,
    picture: "example.jpg",
  };

  it("should render the initial subcomponents", () => {
    render(<Product {...product} />);

    expect(screen.getByLabelText("product-image")).toBeInTheDocument();
    expect(screen.getByLabelText("product-name")).toBeInTheDocument();
    expect(screen.getByLabelText("product-price")).toBeInTheDocument();
    expect(screen.getByLabelText("product-image")).toBeInTheDocument();
  });
});
