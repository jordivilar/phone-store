import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../context/CartContext", () => ({
   useCart: jest.fn(),
}));

import { useCart } from "../../context/CartContext";

describe("Navbar", () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   test("must contain an icon with a link to the home panel", () => {
      useCart.mockReturnValue({ cart: [] });

      render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      );

      const image = screen.getByAltText("Logo");
      expect(image).toBeInTheDocument();

      const link = image.closest("a");
      expect(link).toHaveAttribute("href", "/");
   });

   test("must contain an icon that displays the number of phones in the cart", () => {
      useCart.mockReturnValue({ cart: [{ id: 1 }, { id: 2 }] });

      render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      );

      const image = screen.getByAltText("Cart");
      expect(image).toBeInTheDocument();

      const link = image.closest("a");
      expect(link).toHaveAttribute("href", "/cart");

      expect(link).toHaveTextContent("2");
   });

   test("must display an empty cart with a 0 number when there are no phones", () => {
      useCart.mockReturnValue({ cart: [] });

      render(
         <BrowserRouter>
            <Navbar />
         </BrowserRouter>
      );

      const image = screen.getByAltText("Cart");
      expect(image).toBeInTheDocument();

      const link = image.closest("a");
      expect(link).toHaveAttribute("href", "/cart");

      expect(link).toHaveTextContent(0);
   });
});
