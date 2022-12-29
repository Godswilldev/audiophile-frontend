import { authApi } from "redux/api/auth.api";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/store/rootReducer";
import { productsApi } from "redux/api/products.api";
import { transport } from "redux/api/axiosBaseQuery";
import { setAuthUser } from "redux/reducers/auth.reducer";
import { setProducts } from "redux/reducers/productsReducer";
import storageSession from "redux-persist/lib/storage/session";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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
      authApi.middleware,
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

const verify = async () => {
  try {
    const { data } = await transport({
      url: "/auth/verify-cookie",
      method: "get",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
      },
    });
    store.dispatch(setAuthUser({ user: data.data, jwt: data.token }));
  } catch (err) {
    console.log("not authenticated");
  }
};

const getAllProducts = async () => {
  try {
    const { data } = await transport({
      url: "/products",
      method: "get",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
      },
    });
    console.log(data.data);
    store.dispatch(setProducts({ products: data.data.products }));
  } catch (error) {
    console.log(`Couldn't get Products ${error}`);
  }
};

store.dispatch(getAllProducts);
store.dispatch(verify);
