import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "./ProductDetails";

describe("ProductDetails component", () => {
  it("hides the sale tag and old price when discount is null", () => {
    const props = {
      discount: null,
      name: "Example Product",
      price: 100,
    };

    render(<ProductDetails {...props} />);
    expect(screen.queryByLabelText("product-sale-tag")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("old-price")).not.toBeInTheDocument();
  });

  it("shows the sale tag and old price when discount has a value", () => {
    const props = {
      discount: 20,
      name: "Example Product",
      price: 100,
    };

    render(<ProductDetails {...props} />);
    expect(screen.getByLabelText("product-sale-tag")).toBeInTheDocument();
    expect(screen.getByLabelText("old-price")).toBeInTheDocument();
  });
});
