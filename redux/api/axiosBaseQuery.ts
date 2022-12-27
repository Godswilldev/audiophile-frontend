import axios from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

// export const API_URL = "https://audiophile.up.railway.app/api/v1";
export const API_URL = "http://127.0.0.1:9898/api/v1";

export const transport = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const axiosBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await transport({
        url: `${baseUrl}${url}`,
        method,
        data,
        params,
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          err: axiosError,
          status: err.response?.status,
          data: err.response?.data,
          message: err.message,
          status2: err.status,
        },
      };
    }
  };
