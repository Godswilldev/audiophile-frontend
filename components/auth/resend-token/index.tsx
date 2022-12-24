import React from "react";
import toast from "react-hot-toast";
import { useTitle } from "react-use";
import { useRouter } from "next/router";
import Button from "components/buttons";
import { EmailSchama } from "utils/yupSchema";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import { Formik, Form, FormikHelpers } from "formik";
import { signUpCss } from "components/auth/signup/style";
import { useResendEmailTokenMutation } from "redux/api/auth.api";
import { formLabelCss, textFieldCss } from "components/checkout/style";

interface IResendToken {
  email: string;
}

const ResendToken = () => {
  useTitle("RESEND-TOKEN | AUDIOPHILE");
  const [resendToken, { isLoading }] = useResendEmailTokenMutation();
  const router = useRouter();

  const [email, setEmail] = React.useState<IResendToken>({
    email: "",
  });

  const handleResendToken = async (
    values: IResendToken,
    { setSubmitting }: FormikHelpers<IResendToken>
  ) => {
    try {
      await resendToken({
        email: values.email,
      }).unwrap();
      toast.success("Token Resent to Email");
      setSubmitting(false);
      setEmail({ email: "" });
      router.push("/auth/verify-email");
    } catch (error) {
      toast.error("Email not found in database");
      setSubmitting(false);
    }
  };

  return (
    <Container css={signUpCss} style={{ marginBottom: "15rem" }}>
      <h1>Resend Email Verification Code</h1>
      <Formik initialValues={email} validationSchema={EmailSchama} onSubmit={handleResendToken}>
        {({ errors, touched, values, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.email && Boolean(errors.email))}
                  htmlFor="email"
                >
                  Email Address
                </InputLabel>
                <TextField
                  id="email"
                  css={textFieldCss}
                  name="email"
                  placeholder="email@email.com"
                  value={values.email.trim()}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
            </Grid>

            <Button
              text={isSubmitting || isLoading ? "Sending" : "Resend"}
              type="submit"
              disabled={isSubmitting || isLoading}
              variant={isSubmitting || isLoading ? "PINK_LIGHT" : "PINK_DARK"}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ResendToken;
