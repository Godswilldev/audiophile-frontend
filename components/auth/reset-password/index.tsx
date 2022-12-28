import React from "react";
import { useTitle } from "react-use";
import toast from "react-hot-toast";
import Button from "components/buttons";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { Formik, Form, FormikHelpers } from "formik";
import { ResetPasswordSchema } from "utils/yupSchema";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import { signUpCss } from "components/auth/signup/style";
import InputAdornment from "@mui/material/InputAdornment";
import { useResetPasswordMutation } from "redux/api/auth.api";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { formLabelCss, textFieldCss } from "components/checkout/style";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { getAuthUser } from "redux/api/extendedAuth.api";
import { useAppDispatch } from "redux/store/store";

interface ResetPasswordProps {
  resetPasswordCode: string;
  newPassword: string;
  confirmNewPassword: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

const ResetPassword = () => {
  useTitle("RESET-PASSWORD | AUDIOPHILE");
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [resetPasswordValues, setResetPasswordValues] = React.useState<ResetPasswordProps>({
    resetPasswordCode: "",
    newPassword: "",
    confirmNewPassword: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const handleClickShowPassword = () =>
    setResetPasswordValues({
      ...resetPasswordValues,
      showPassword: !resetPasswordValues.showPassword,
    });

  const handleClickShowPasswordConfirm = () =>
    setResetPasswordValues({
      ...resetPasswordValues,
      showPasswordConfirm: !resetPasswordValues.showPasswordConfirm,
    });

  const handleResetPassword = async (
    values: ResetPasswordProps,
    { setSubmitting }: FormikHelpers<ResetPasswordProps>
  ) => {
    try {
      const { data } = await resetPassword({
        resetToken: values.resetPasswordCode,
        password: values.newPassword,
        passwordConfirm: values.confirmNewPassword,
      }).unwrap();
      toast.success("Password Changed Successfully");
      setSubmitting(false);
      localStorage.setItem("jwt", JSON.stringify(data.token));
      dispatch(getAuthUser({ user: data.data }));
      router.push("/");
    } catch (error: any) {
      toast.error(`Error: Invalid Reset Password Code`);
      setSubmitting(false);
    }
  };

  return (
    <Container css={signUpCss} sx={{ marginBottom: "15rem" }}>
      <h1>Reset Password</h1>
      <Formik
        initialValues={resetPasswordValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={handleResetPassword}
      >
        {({ errors, touched, values, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.resetPasswordCode && Boolean(errors.resetPasswordCode))}
                  htmlFor="resetPasswordCode"
                >
                  Enter Password Reset Code From Email
                </InputLabel>
                <TextField
                  id="resetPasswordCode"
                  css={textFieldCss}
                  name="resetPasswordCode"
                  placeholder="9294rd"
                  value={values.resetPasswordCode.trim().slice(0, 6)}
                  onChange={handleChange}
                  error={touched.resetPasswordCode && Boolean(errors.resetPasswordCode)}
                  helperText={touched.resetPasswordCode && errors.resetPasswordCode}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.newPassword && Boolean(errors.newPassword))}
                  htmlFor="newPassword"
                >
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="newPassword"
                  css={textFieldCss}
                  name="newPassword"
                  placeholder="Enter your New password"
                  type={resetPasswordValues.showPassword ? "text" : "password"}
                  value={values.newPassword}
                  onChange={handleChange("newPassword")}
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle newPassword visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(evt: React.MouseEvent<HTMLButtonElement>) =>
                          evt.preventDefault()
                        }
                        edge="end"
                      >
                        {resetPasswordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="newPassword"
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(
                    touched.confirmNewPassword && Boolean(errors.confirmNewPassword)
                  )}
                  htmlFor="confirmNewPassword"
                >
                  Confirm New Password
                </InputLabel>
                <OutlinedInput
                  id="confirmNewPassword"
                  css={textFieldCss}
                  name="confirmNewPassword"
                  placeholder="Confirm your password"
                  type={resetPasswordValues.showPasswordConfirm ? "text" : "password"}
                  value={values.confirmNewPassword}
                  onChange={handleChange("confirmNewPassword")}
                  error={touched.confirmNewPassword && Boolean(errors.confirmNewPassword)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password confirm visibility"
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={(evt: React.MouseEvent<HTMLButtonElement>) =>
                          evt.preventDefault()
                        }
                        edge="end"
                      >
                        {resetPasswordValues.showPasswordConfirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="confirmNewPassword"
                />
              </Grid>
            </Grid>

            <Button
              text={isSubmitting || isLoading ? "Loading" : "Change Password"}
              type="submit"
              disabled={isSubmitting || isLoading}
              variant={isSubmitting || isLoading ? "PINK_LIGHT" : "PINK_DARK"}
            />
          </Form>
        )}
      </Formik>

      <Typography sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        <Link href="/auth/resend-forgot-password-code">Did not Get Code ? Resend</Link>
      </Typography>
    </Container>
  );
};

export default ResetPassword;
