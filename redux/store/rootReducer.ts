import { authApi } from "redux/api/auth.api";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "redux/reducers/cartReducer";
import { productsApi } from "redux/api/products.api";
import productsReducer from "redux/reducers/productsReducer";

const rootReducers = combineReducers({
  cartReducer,
  productsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducers;
