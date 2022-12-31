import { ProductProps } from "interfaces/products";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",

  tagTypes: ["Products"],

  baseQuery: axiosBaseQuery({ baseUrl: "/products" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductProps[], void>({
      query: () => ({ url: "/", method: "get" }),
    }),

    getOneProduct: builder.query<ProductProps, string>({
      query: (id: string) => ({ method: "get", url: `/${id}` }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAllProductsQuery, useGetOneProductQuery } = productsApi;
