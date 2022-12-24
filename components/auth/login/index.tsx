import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useTitle } from "react-use";
import { useRouter } from "next/router";
import Button from "components/buttons";
import { LoginSchema } from "utils/yupSchema";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { Formik, Form, FormikHelpers } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import { signUpCss } from "components/auth/signup/style";
import InputAdornment from "@mui/material/InputAdornment";
import { useLoginUserMutation } from "redux/api/auth.api";
import { LoginUserProps } from "interfaces/user.interface";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { formLabelCss, textFieldCss } from "components/checkout/style";
import { getAuthUser } from "redux/reducers/authUser.reducer";
import { useAppDispatch } from "redux/store/store";

interface ILoginUser extends LoginUserProps {
  showPassword: boolean;
}

const Login = () => {
  useTitle("LOGIN | AUDIOPHILE");
  const [loginInUser, { isLoading }] = useLoginUserMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginValues, setLoginValues] = React.useState<ILoginUser>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () =>
    setLoginValues({
      ...loginValues,
      showPassword: !loginValues.showPassword,
    });

  const handleLoginInUser = async (
    values: ILoginUser,
    { setSubmitting }: FormikHelpers<ILoginUser>
  ) => {
    try {
      const { token, data } = await loginInUser({
        email: values.email,
        password: values.password,
      }).unwrap();
      localStorage.setItem("jwt", JSON.stringify(token));
      dispatch(getAuthUser({ user: data }));
      toast.success("Login Successful");
      setSubmitting(false);
      router.push("/");
    } catch (error: any) {
      toast.error("Invalid Login credentials");
      setSubmitting(false);
    }
  };

  return (
    <Container css={signUpCss}  sx={{ marginBottom: "15rem" }}>
      <h1>Login</h1>
      <Formik
        initialValues={loginValues}
        validationSchema={LoginSchema}
        onSubmit={handleLoginInUser}
      >
        {({ errors, touched, values, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.email && Boolean(errors.email))}
                  htmlFor="email"
                >
                  Email
                </InputLabel>
                <TextField
                  id="email"
                  css={textFieldCss}
                  name="email"
                  placeholder="email@gmail.com"
                  value={values.email.trim()}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.password && Boolean(errors.password))}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  css={textFieldCss}
                  name="password"
                  placeholder="Enter your password"
                  type={loginValues.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  error={touched.password && Boolean(errors.password)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(evt: React.MouseEvent<HTMLButtonElement>) =>
                          evt.preventDefault()
                        }
                        edge="end"
                      >
                        {loginValues.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </Grid>
            </Grid>

            <Button
              text={isSubmitting || isLoading ? "Loading" : "Login"}
              type="submit"
              disabled={isSubmitting || isLoading}
              variant={isSubmitting || isLoading ? "PINK_LIGHT" : "PINK_DARK"}
            />
          </Form>
        )}
      </Formik>

      <Typography sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        <Link href="/auth/forgot-password">Forgot Password ?</Link>
      </Typography>
    </Container>
  );
};

export default Login;
