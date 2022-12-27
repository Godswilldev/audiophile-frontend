import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";
import { NewProductProps } from "interfaces/products";

export const productsApi = createApi({
  reducerPath: "productsApi",

  tagTypes: ["Products"],

  baseQuery: axiosBaseQuery({ baseUrl: "/products" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<NewProductProps[], null>({
      query: () => ({ url: "/", method: "get" }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
