import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { CheckoutSchema } from "utils/yupSchema";
import { useAppSelector } from "redux/store/store";
import { Formik, Form, FormikHelpers } from "formik";
import { cartProductType } from "interfaces/interfaces";
import { FormValuesProps } from "interfaces/form.interface";
import { getTotalPrice, grandTotal, shipping, vat } from "redux/reducers/cartReducer";
import {
  formLabelCss,
  textFieldCss,
  backButtonCss,
  summaryGridCss,
  checkoutTextCss,
  sectionTitleCss,
  checkoutContainer,
} from "components/checkout/style";
import { useGetCheckoutSessionMutation } from "redux/api/order.api";
import toast from "react-hot-toast";

const Checkout = () => {
  const router = useRouter();
  const vatPrice = useAppSelector(vat);
  const total = useAppSelector(getTotalPrice);
  const shippingPrice = useAppSelector(shipping);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const grandTotalPrice = useAppSelector(() => grandTotal(total, vatPrice, shippingPrice));
  const [getCheckoutSession, { isLoading }] = useGetCheckoutSessionMutation();

  const initialvalues: FormValuesProps = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  };

  const handleSubmit = async (
    values: FormValuesProps,
    { setSubmitting }: FormikHelpers<FormValuesProps>
  ) => {
    try {
      const cartP = cartProducts.map((cartProd: cartProductType) => {
        return {
          product: cartProd.product.id,
          quantity: cartProd.quantity,
        };
      });

      const { data }: any = await getCheckoutSession({
        shippingInfo: {
          city: values.city,
          address: values.address,
          country: values.country,
          zipCode: values.zipCode,
        },
        orderItems: cartP,
      });

      router.push(`${data.data.link}`);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      toast.error("An Error Ocurred, Please try again later or contact support");
    }
  };

  return (
    <Box css={checkoutContainer}>
      <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }}>
        <p onClick={() => router.back()} css={backButtonCss}>
          Go Back
        </p>

        <Formik
          initialValues={initialvalues}
          validationSchema={CheckoutSchema}
          onSubmit={handleSubmit}
          validateOnChange
        >
          {({ errors, touched, isSubmitting, values, handleChange }) => {
            return (
              <Form>
                <Grid container justifyContent="space-between">
                  <Grid
                    xs={12}
                    md={7.5}
                    sx={{ padding: "5rem", background: "#fff", borderRadius: "1rem" }}
                  >
                    <h1 css={checkoutTextCss}>CHECKOUT</h1>

                    <h2 css={sectionTitleCss}>Billing Details</h2>
                    <Grid container justifyContent="space-between">
                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.fullName && Boolean(errors.fullName))}
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <TextField
                          id="fullName"
                          css={textFieldCss}
                          name="fullName"
                          placeholder="Alexei Sanchez"
                          value={values.fullName}
                          onChange={handleChange}
                          error={touched.fullName && Boolean(errors.fullName)}
                          helperText={touched.fullName && errors.fullName}
                        />
                      </Grid>

                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.email && Boolean(errors.email))}
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <TextField
                          id="email"
                          css={textFieldCss}
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleChange}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>

                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.phoneNumber && Boolean(errors.phoneNumber))}
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="+234(90)1120-7786"
                          value={values.phoneNumber}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <h2 css={sectionTitleCss}>Shipping Info</h2>
                    <Grid container justifyContent="space-between">
                      <Grid xs={12} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.address && Boolean(errors.address))}
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <TextField
                          fullWidth
                          css={textFieldCss}
                          id="address"
                          name="address"
                          placeholder="1137 Williams Avenue"
                          value={values.address}
                          onChange={handleChange}
                          error={touched.address && Boolean(errors.address)}
                          helperText={touched.address && errors.address}
                        />
                      </Grid>

                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.zipCode && Boolean(errors.zipCode))}
                          htmlFor="zipCode"
                        >
                          Zip Code
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="zipCode"
                          name="zipCode"
                          placeholder="10001"
                          value={values.zipCode}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.city && Boolean(errors.city))}
                          htmlFor="city"
                        >
                          City
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="city"
                          name="city"
                          placeholder="New York"
                          value={values.city}
                          onChange={handleChange}
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      </Grid>

                      <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                        <label
                          css={formLabelCss(touched.country && Boolean(errors.country))}
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="country"
                          name="country"
                          placeholder="United States"
                          value={values.country}
                          onChange={handleChange}
                          error={touched.country && Boolean(errors.country)}
                          helperText={touched.country && errors.country}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    xs={12}
                    md={4}
                    sx={{ padding: "5rem", marginTop: { xs: "10rem", md: 0 } }}
                    css={summaryGridCss}
                  >
                    <h1>SUMMARY</h1>

                    <Box className="cart__filled--body">
                      {cartProducts.map((product: cartProductType) => (
                        <Box key={product.id} className="cart__items">
                          <Box className="cart__items--desc">
                            <Image
                              width={64}
                              height={64}
                              src={product.product.categoryImage}
                              alt={`${product.id} image`}
                              css={"border-radius:1rem"}
                            />
                            <span>
                              <h1>{product.product.name}</h1>
                              <h2>${product.product.price}</h2>
                            </span>
                          </Box>

                          <Box className="cart__items--btn">
                            <h6> x{product.quantity}</h6>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box className="cart__total">
                      <span>
                        <h2>TOTAL </h2>
                        <h1>$ {total}</h1>
                      </span>
                      <span>
                        <h2>SHIPPING </h2>
                        <h1>$ {shippingPrice}</h1>
                      </span>
                      <span>
                        <h2>VAT (INCLUDED) </h2>
                        <h1>$ {vatPrice}</h1>
                      </span>
                      <span>
                        <h2>GRAND TOTAL </h2>
                        <h1 className="grandTotal">$ {grandTotalPrice}</h1>
                      </span>
                      <button type="submit" disabled={isSubmitting || isLoading}>
                        {isLoading || isSubmitting ? "LOADING" : "CHECKOUT"}
                      </button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};

export default Checkout;
