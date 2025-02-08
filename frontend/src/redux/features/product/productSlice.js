import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  totalProducts: {},
  product: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Products
export const getProducts = createAsyncThunk("product/getProducts", async (_, thunkAPI) => {
  try {
    return await productService.getProducts();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get Product by id
export const getProduct = createAsyncThunk("product/getProduct", async (id, thunkAPI) => {
  try {
    return await productService.getProduct(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get Products by query
export const getProductsByQuery = createAsyncThunk(
  "product/getProductsByQuery",
  async (data, thunkAPI) => {
    try {
      return await productService.getProductsByQuery(data);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Products
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.totalProducts = action.payload.length;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get Product by ID
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get Products by query
      .addCase(getProductsByQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.totalProducts = action.payload.length;
      })
      .addCase(getProductsByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { RESET } = productSlice.actions;

export default productSlice.reducer;
