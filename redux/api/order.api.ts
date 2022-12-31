import { axiosBaseQuery } from "./axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { OrderProps } from "../../interfaces/orders.interface";

export const ordersApi = createApi({
  reducerPath: "ordersApi",

  tagTypes: ["Orders"],

  baseQuery: axiosBaseQuery({ baseUrl: "/orders" }),

  endpoints: (builder) => ({
    getCheckoutSession: builder.mutation<any, OrderProps>({
      query: (order) => ({ url: "/checkout-session", method: "POST", body: order }),
    }),

    getMyOrders: builder.query<any, void>({
      query: () => ({ url: "/my-orders", method: "GET" }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetCheckoutSessionMutation, useGetMyOrdersQuery } = ordersApi;
