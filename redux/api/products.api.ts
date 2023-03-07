import { ProductProps } from "interfaces/products";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";
import { HYDRATE } from "next-redux-wrapper";

export const productsApi = createApi({
  reducerPath: "productsApi",

  tagTypes: ["Products"],

  baseQuery: axiosBaseQuery({ baseUrl: "/products" }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductProps[], void>({
      query: () => ({ url: "/", method: "get" }),
      transformResponse: (res: { data: ProductProps[] }) => res.data,
    }),

    getOneProduct: builder.query<ProductProps, string>({
      query: (id: string) => ({ method: "get", url: `/${id}` }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  util: { getRunningOperationPromises },
} = productsApi;

// export endpoints for use in SSR
export const { getAllProducts, getOneProduct } = productsApi.endpoints;
