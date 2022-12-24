export enum roles {
  user = "user",
  manager = "manager",
  admin = "admin",
}

export interface CreateUserProps {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string | undefined;
}

export interface LoginUserProps {
  email: string;
  password: string;
}

export interface UserProps {
  firstname: string;
  lastname: string;
  email: string;
  photo: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date | number;
  role: roles;
  passwordResetToken: String | undefined;
  passwordResetTokenExpires: Date | undefined;
  active: Boolean;
  favouriteProducts: [];
  isEmailVerified: Boolean;
  emailVerificationToken: string | undefined;
  emailVerificationTokenExpires: string | undefined;
}


export interface EmailProps {
  email: string;
}

export interface ResetPasswordProps {
  resetToken: string;
  password: string;
  passwordConfirm: string;
}
