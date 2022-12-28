import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthUserState {
  user: {
    email: string;
    firstname: string;
    id: string;
    isEmailVerified: boolean;
    lastname: string;
    photo: string;
    role: string;
  } | null;
  jwt: string | null;
}

export const setAuth = (state: AuthUserState, action: PayloadAction<AuthUserState>) => {
  localStorage.setItem("jwt", JSON.stringify(action.payload.jwt));
  state.jwt = action.payload.jwt;
  state.user = action.payload.user;
};

export const removeAuth = (state: AuthUserState) => {
  localStorage.setItem("jwt", "null");
  state.jwt = "null";
  state.user = null;
};

const initialState: AuthUserState = {
  user: null,
  jwt:
    typeof window != "undefined"
      ? JSON.parse(window.localStorage.getItem("jwt") as string)
      : "null",
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuthUser: setAuth,
    removeAuthUser: removeAuth,
  },
});

export const { setAuthUser, removeAuthUser } = authReducer.actions;

export default authReducer.reducer;
