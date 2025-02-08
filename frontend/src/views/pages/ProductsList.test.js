import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../redux/features/product/productSlice";
import ProductsList from "./ProductsList";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
const axios = require("axios");

jest.mock("axios", () => ({
  get: jest.fn(),
}));

const renderWithProviders = (ui, { preloadedState = {} } = {}) => {
  const store = configureStore({
    reducer: { product: productReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe("Products List", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should display 20 product cards at the very begining", async () => {
    axios.get.mockResolvedValue({
      data: Array(20).fill({
        id: "SMG",
        brand: "Samsung",
        name: "Galaxy S24",
        price: "1329 EUR",
        imageUrl: "http://test.com/test.png",
      }),
    });

    renderWithProviders(<ProductsList />);

    await waitFor(async () => {
      const productCards = await screen.findAllByLabelText(/Product:/i);
      expect(productCards).toHaveLength(20);
    });
  });

  test("must contain a search input", async () => {
    renderWithProviders(<ProductsList />);

    const searchInput = await screen.findByPlaceholderText("Search for a smartphone...");
    expect(searchInput).toBeInTheDocument();
  });

  test("the search input must contain a results counter", async () => {
    renderWithProviders(<ProductsList />);

    const resultsCounter = await screen.findByText(/results/i);
    expect(resultsCounter).toBeInTheDocument();
  });

  test("should update results counter when searching by name or brand", async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, brand: "Apple", name: "iPhone 13" },
        { id: 2, brand: "Apple", name: "iPhone 12" },
        { id: 3, brand: "Apple", name: "iPhone 11" },
      ],
    });

    renderWithProviders(<ProductsList />);

    const searchInput = await screen.findByPlaceholderText("Search for a smartphone...");
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, "iPhone");

    await waitFor(() => {
      const resultsCounter = screen.getByText("3 RESULTS");
      expect(resultsCounter).toBeInTheDocument();
    });
  });

  test("clicking on a ProductCard should navigate to /detail/:id", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "SMG",
          brand: "Samsung",
          name: "Galaxy S24",
          price: "1329 EUR",
          imageUrl: "http://test.com/test.png",
        },
      ],
    });

    renderWithProviders(<ProductsList />);

    let productCard;
    await waitFor(async () => {
      productCard = await screen.findByLabelText(/Product:/i);
      expect(productCard).toBeInTheDocument();
    });

    await userEvent.click(productCard);

    expect(window.location.pathname).toBe("/detail/SMG");
  });
});
