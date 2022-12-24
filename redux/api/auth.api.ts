import { createApi } from "@reduxjs/toolkit/query/react";
import { VerifyEmailProps } from "components/auth/verify-email";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";
import {
  EmailProps,
  CreateUserProps,
  LoginUserProps,
  ResetPasswordProps,
} from "interfaces/user.interface";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: "/auth" }),

  endpoints: (builder) => ({
    // done
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
      invalidatesTags: ["Auth"],
    }),
    // done
    verifyUserEmail: builder.mutation<any, VerifyEmailProps>({
      query: (token) => ({ url: `/verify-email/${token.emailToken}`, method: "post" }),
      invalidatesTags: ["Auth"],
    }),
    // done
    resendEmailToken: builder.mutation<any, EmailProps>({
      query: (email) => ({
        url: "/resend-email-confirmation-code",
        method: "post",
        data: email,
      }),
      invalidatesTags: ["Auth"],
    }),
    // done
    loginUser: builder.mutation<any, LoginUserProps>({
      query: (user) => ({ url: "/login", method: "post", data: user }),
      invalidatesTags: ["Auth"],
    }),

    logoutUser: builder.mutation<any, void>({
      query: () => ({ url: "/logout", method: "post" }),
      invalidatesTags: ["Auth"],
    }),

    // done
    forgotPassword: builder.mutation<any, EmailProps>({
      query: (email) => ({ method: "patch", url: "/forgot-password", data: email }),
      invalidatesTags: ["Auth"],
    }),
    // done
    resendForgotPasswordCode: builder.mutation<any, EmailProps>({
      query: (email) => ({ method: "patch", url: "/resend-forgot-password-code", data: email }),
      invalidatesTags: ["Auth"],
    }),
    // done
    resetPassword: builder.mutation<any, ResetPasswordProps>({
      query: (data) => ({ method: "post", url: "/reset-password", data }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useVerifyUserEmailMutation,
  useForgotPasswordMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useResendEmailTokenMutation,
  useResendForgotPasswordCodeMutation,
  useResetPasswordMutation,
} = authApi;
