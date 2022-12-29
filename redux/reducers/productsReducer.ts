import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "interfaces/products";

export const getProducts = (state: ProductsState, action: PayloadAction<ProductsState>) => {
  state.products = action.payload.products;
};

const initialState: ProductsState = {
  products: [],
};

const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {
    setProducts: getProducts,
  },
});

export const { setProducts } = productsReducer.actions;

export default productsReducer.reducer;
