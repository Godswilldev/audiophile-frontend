import { authApi } from "redux/api/auth.api";
import { ordersApi } from "redux/api/order.api";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "redux/reducers/cartReducer";
import { productsApi } from "redux/api/products.api";
import authReducer from "redux/reducers/auth.reducer";
import productsReducer from "redux/reducers/productsReducer";

const rootReducers = combineReducers({
  cartReducer,
  authReducer,
  productsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducers;
