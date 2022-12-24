import data from "utils/data";
import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "interfaces/interfaces";

const initialState: ProductsState = {
  products: data,
};

const productsReducer = createSlice({
  name: "productsReducer",
  initialState,
  reducers: {},
});

export default productsReducer.reducer;
