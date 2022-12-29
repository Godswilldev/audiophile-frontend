import { ProductProps } from "interfaces/products";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",

  tagTypes: ["Products"],

  baseQuery: axiosBaseQuery({ baseUrl: "/products" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductProps[], null>({
      query: () => ({ url: "/", method: "get" }),
    }),

    getOneProduct: builder.query<{ data: ProductProps }, string>({
      query: (id: string) => ({ method: "get", url: `/${id}` }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetOneProductQuery } = productsApi;
