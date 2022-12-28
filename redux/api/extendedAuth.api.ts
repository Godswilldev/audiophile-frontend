import { authApi } from "redux/api/auth.api";
import { EntityId, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const authUserAdapter = createEntityAdapter();

const initialState = authUserAdapter.getInitialState();

export const extendedAuthApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    verifyCookie: builder.query<any, null>({
      query: () => ({ url: "/verify-cookie", method: "get" }),
      transformResponse: (responseData: {
        payload: readonly unknown[] | Record<EntityId, unknown>;
        type: string;
      }) => {
        return authUserAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useVerifyCookieQuery } = extendedAuthApiSlice;

export const selectAuthUserResult = extendedAuthApiSlice.endpoints.verifyCookie.select(null);

const selectAuthUserData: any = createSelector(
  selectAuthUserResult,
  (usersResult) => usersResult.data
);

export const { selectAll: selectAuthUser } = authUserAdapter.getSelectors(
  (state) => selectAuthUserData(state) ?? initialState
);
