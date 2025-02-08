import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { BrowserRouter } from "react-router-dom";

const mockProduct = {
  id: "SMG-S24",
  brand: "Samsung",
  name: "Galaxy S24",
  basePrice: "1329",
  imageUrl: "http://test.com/test.png",
};

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("ProductCard should display background image, name, brand, and base price", () => {
  renderWithRouter(<ProductCard data={mockProduct} />);

  const imageDiv = screen
    .getByRole("link", { name: /Product: Galaxy S24/i })
    .querySelector(".image");
  expect(imageDiv).not.toBeNull();
  const style = window.getComputedStyle(imageDiv);
  expect(style.backgroundImage).toContain(mockProduct.imageUrl);

  expect(screen.getByText(mockProduct.name.toUpperCase())).toBeInTheDocument();

  expect(screen.getByText(mockProduct.brand.toUpperCase())).toBeInTheDocument();

  expect(screen.getByText(`${mockProduct.basePrice} EUR`)).toBeInTheDocument();
});
