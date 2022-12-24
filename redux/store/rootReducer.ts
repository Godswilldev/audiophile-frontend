import { authApi } from "redux/api/auth.api";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "redux/reducers/cartReducer";
import productsReducer from "redux/reducers/productsReducer";
import authUserReducer from "redux/reducers/authUser.reducer";

const rootReducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authUserReducer: authUserReducer,
  cartReducer,
  productsReducer,
});

export default rootReducers;
