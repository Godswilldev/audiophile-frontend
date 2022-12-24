import { authApi } from "redux/api/auth.api";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/store/rootReducer";
import { transport } from "redux/api/axiosBaseQuery";
import { getAuthUser } from "redux/reducers/authUser.reducer";
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
    getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware),
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
    localStorage.setItem("jwt", JSON.stringify(data.token));
    store.dispatch(getAuthUser({ user: data.data }));
  } catch (err) {
    console.log("not authenticated");
  }
};

store.dispatch(verify);
