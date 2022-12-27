import { authApi } from "redux/api/auth.api";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/store/rootReducer";
import { extendedAuthApiSlice } from "redux/reducers/authUser.reducer";
import storageSession from "redux-persist/lib/storage/session";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { productsApi } from "../api/products.api";

const persistConfig = {
  key: "root",
  storage: storageSession,
  clearTimeout: null,
  setTimeout: null,
  blacklist: [authApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware
      // productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

// store.dispatch(productsApi.endpoints.getAllProducts.initiate(null));

store.dispatch(extendedAuthApiSlice.endpoints.verifyCookie.initiate(null));
