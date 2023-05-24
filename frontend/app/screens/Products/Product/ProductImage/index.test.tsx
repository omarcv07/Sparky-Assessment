import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductImage from "./ProductImage";

describe("ProductImage component", () => {
  it("renders the product image and category correctly", () => {
    const props = {
      name: "Example Product",
      category: "Example Category",
      picture: "example.jpg",
    };

    render(<ProductImage {...props} />);

    const productImage = screen.getByLabelText("product-image");
    const productCategory = screen.getByLabelText("product-category");

    expect(productImage).toBeInTheDocument();
    expect(productCategory).toBeInTheDocument();
  });

  it("does not render the category if it is not provided", () => {
    const props = {
      name: "Example Product",
      category: null,
      picture: "example.jpg",
    };

    render(<ProductImage {...props} />);

    const productCategory = screen.queryByLabelText("product-category");

    expect(productCategory).not.toBeInTheDocument();
  });
});
