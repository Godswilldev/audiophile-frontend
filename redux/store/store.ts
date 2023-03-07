import { authApi } from "redux/api/auth.api";
import { persistReducer } from "redux-persist";
import { ordersApi } from "redux/api/order.api";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/store/rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { productsApi } from "redux/api/products.api";
const { deserialize, serialize } = require("json-immutable");
import storageSession from "redux-persist/lib/storage/session";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// const persistConfig = {
//   key: "root",
//   storage: storageSession,
//   clearTimeout: null,
//   setTimeout: null,
//   blacklist: [authApi.reducerPath],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        authApi.middleware,
        productsApi.middleware,
        ordersApi.middleware
      ),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => deserialize(state),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const verify = async () => {
//   try {
//     const { data } = await transport({
//       url: "/auth/verify-cookie",
//       method: "get",
//       headers: {
//         Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
//       },
//     });
//     store.dispatch(setAuthUser({ user: data.data, jwt: data.token }));
//   } catch (err) {
//     console.log("not authenticated");
//   }
// };

// const getAllProducts = async () => {
//   try {
//     const { data } = await transport({
//       url: "/products",
//       method: "get",
//       headers: {
//         Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
//       },
//     });
//     store.dispatch(setProducts({ products: data.data.products }));
//   } catch (error) {
//     console.log(`Couldn't get Products ${error}`);
//   }
// };

// store.dispatch(getAllProducts);
// store.dispatch(verify);
