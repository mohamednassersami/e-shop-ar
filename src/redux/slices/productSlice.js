import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: null,
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    getProduct(state, action) {
      state.product = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

export const { getProducts, getProduct, setLoading, clearLoading } =
  productSlice.actions;

export default productSlice.reducer;
