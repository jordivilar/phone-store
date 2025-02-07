import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";
import { BrowserRouter } from "react-router-dom";

describe("Products page", () => {
   test("must contain an icon with a link to the home panel", () => {
      render(
         <BrowserRouter>
            <ProductsList />
         </BrowserRouter>
      );

      const image = screen.getByAltText("Logo");
      expect(image).toBeInTheDocument();

      const link = image.closest("a");
      expect(link).toHaveAttribute("href", "/");
   });
});
