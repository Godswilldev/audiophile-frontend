import { PayloadAction } from "@reduxjs/toolkit";
import { AuthUserState } from "redux/reducers/authUser.reducer";

interface AuthUserPayload {
  user: {
    email: string;
    firstname: string;
    id: string;
    isEmailVerified: boolean;
    lastname: string;
    photo: string;
    role: string;
  } | null;
}

export const getLoggedInUser = (state: AuthUserState, action: PayloadAction<AuthUserPayload>) => {
  state.user = action.payload.user;
};

export const logoutUser = (state: AuthUserState) => {
  state.user=null
};
