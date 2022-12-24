import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "interfaces/interfaces";

import {
  removeItemFromCart,
  addToCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "redux/actions/actions";
import { RootState } from "redux/store/store";

const initialState: CartState = {
  cartProducts: [],
  total: 0,
  shipping: 0,
  vat: 0,
  grandTotal: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemToCart: addToCart,
    removeFromCart: removeItemFromCart,
    clearCartItems: clearCart,
    increaseQuantity: incrementQuantity,
    decreaseQuantity: decrementQuantity,
  },
});

export const { addItemToCart, removeFromCart, clearCartItems, increaseQuantity, decreaseQuantity } =
  cartReducer.actions;

export const getTotalPrice = (state: RootState) =>
  state.cartReducer.cartProducts.reduce(
    (acc: number, next: { quantity: number; product: { price: number } }) =>
      (acc += next.quantity * next.product.price),
    0
  );

export const shipping = (state: RootState) =>
  state.cartReducer.cartProducts.reduce(
    (acc, next, _, array) =>
      Math.round(((acc += next.quantity * next.product.price) * array.length) / 100),
    0
  );

export const vat = (state: RootState) =>
  state.cartReducer.cartProducts.reduce(
    (acc: number, next: { quantity: number; product: { price: number } }) =>
      Math.round((acc += next.quantity * next.product.price) * 0.01),
    0
  );

export const grandTotal = (total: number, shipping: number, vat: number) => {
  const fee = total + shipping + vat;
  return parseInt(fee.toFixed(0));
};

export default cartReducer.reducer;
