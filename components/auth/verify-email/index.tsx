import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useTitle } from "react-use";
import Button from "components/buttons";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "redux/store/store";
import { Formik, Form, FormikHelpers } from "formik";
import { VerificationCodeSchema } from "utils/yupSchema";
import { signUpCss } from "components/auth/signup/style";
import { setAuthUser } from "redux/reducers/auth.reducer";
import { useVerifyUserEmailMutation } from "redux/api/auth.api";
import { formLabelCss, textFieldCss } from "components/checkout/style";

export interface VerifyEmailProps {
  emailToken: string;
}

const VerifyEmail = () => {
  useTitle("VERIFY-EMAIL | AUDIOPHILE");
  const [verifyUser, { isLoading }] = useVerifyUserEmailMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [verificationToken, setVerificationToken] = React.useState<VerifyEmailProps>({
    emailToken: "",
  });

  const handleVerifyUser = async (
    values: VerifyEmailProps,
    { setSubmitting }: FormikHelpers<VerifyEmailProps>
  ) => {
    try {
      const { data, token } = await verifyUser({ emailToken: values.emailToken }).unwrap();
      dispatch(setAuthUser({ jwt: token, user: data.user }));
      toast.success("Email Verified");
      setSubmitting(false);
      setVerificationToken({ emailToken: "" });
      router.push("/");
    } catch (error: any) {
      toast.error("An error occoured: Invalid Token");
      setSubmitting(false);
      setVerificationToken({ emailToken: "" });
    }
  };

  return (
    <Container css={signUpCss} sx={{ marginBottom: "15rem" }}>
      <h1>Verify Email</h1>
      <Formik
        initialValues={verificationToken}
        validationSchema={VerificationCodeSchema}
        onSubmit={handleVerifyUser}
      >
        {({ errors, touched, values, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.emailToken && Boolean(errors.emailToken))}
                  htmlFor="emailToken"
                >
                  Input Email Verification Code
                </InputLabel>
                <TextField
                  id="emailToken"
                  css={textFieldCss}
                  name="emailToken"
                  placeholder="293837"
                  value={values.emailToken.trim().slice(0, 6)}
                  onChange={handleChange}
                  error={touched.emailToken && Boolean(errors.emailToken)}
                  helperText={touched.emailToken && errors.emailToken}
                />
              </Grid>
            </Grid>

            <Button
              text={isSubmitting || isLoading ? "Verifying" : "Submit"}
              type="submit"
              disabled={isSubmitting || isLoading}
              variant={isSubmitting || isLoading ? "PINK_LIGHT" : "PINK_DARK"}
            />
          </Form>
        )}
      </Formik>

      <Typography sx={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        <Link href="/auth/resend-token">Did not Get Code ? Resend</Link>
      </Typography>
    </Container>
  );
};

export default VerifyEmail;
