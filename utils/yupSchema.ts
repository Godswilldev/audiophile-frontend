import * as Yup from "yup";

export const CheckoutSchema = Yup.object().shape({
  // paymentMethod: Yup.string().required("A Option is required"),
  email: Yup.string().email("Wrong Format").required("Required"),
  fullName: Yup.string().min(3, "Name Too Short!").max(50, "Name Too Long!").required("Required"),

  address: Yup.string()
    .min(3, "Address Too Short!")
    .max(50, "Address Too Long!")
    .required("This field is required"),

  city: Yup.string()
    .min(3, "City Too Short!")
    .max(50, "City Too Long!")
    .required("This field is required"),

  country: Yup.string()
    .min(3, "Country Too Short!")
    .max(50, "Country Too Long!")
    .required("This field is required"),
});

export const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!")
    .required("Firstname is Required"),
  lastname: Yup.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!")
    .required("Lastname Required"),
  email: Yup.string().email("Wrong Format").required("Required"),
  phone: Yup.string()
    .min(10, "Phone number too short")
    .max(15, "Phone number too long")
    .required("Phone number is required"),
  password: Yup.string().min(6, "Password too short").required("this field is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Password Confirm field is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Wrong Format").required("Required"),
  password: Yup.string().min(6, "Password too short").required("this field is required"),
});

export const EmailSchama = Yup.object().shape({
  email: Yup.string().email("Wrong Format").required("Required"),
});

export const VerificationCodeSchema = Yup.object().shape({
  emailToken: Yup.string()
    .min(6, "Token Too Short!")
    .max(7, "Token Too Long!")
    .required("Token is Required"),
});

export const ResetPasswordSchema = Yup.object().shape({
  resetPasswordCode: Yup.string()
    .min(6, "Token Too Short!")
    .max(7, "Token Too Long!")
    .required("Token is Required"),
  newPassword: Yup.string().min(6, "Password too short").required("this field is required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords do not match")
    .required("Password Confirm field is required"),
});
