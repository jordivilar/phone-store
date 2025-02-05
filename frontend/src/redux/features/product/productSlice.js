import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
// import { toast } from 'react-toastify';

const initialState = {
   products: [],
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
         (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
   }
});

// Get Product by id
export const getProduct = createAsyncThunk("product/getProduct", async (id, thunkAPI) => {
   try {
      return await productService.getProduct(id);
   } catch (error) {
      const message =
         (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
   }
});

// Get Fake Featured Products by id
export const getFeaturedProducts = createAsyncThunk("product/getFeaturedProducts", async (lang, thunkAPI) => {
   try {
      return await productService.getFeaturedProducts(lang);
   } catch (error) {
      const message =
         (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
   }
});

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
         .addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         // Get Product
         .addCase(getProduct.pending, (state, action) => {
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
         // Get Featured Products
         .addCase(getFeaturedProducts.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getFeaturedProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
         })
         .addCase(getFeaturedProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         });
   },
});

export const { RESET } = productSlice.actions;

export default productSlice.reducer;
