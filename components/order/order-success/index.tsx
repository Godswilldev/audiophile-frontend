import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import { useRouter } from "next/router";
import Button from "components/buttons";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import { useGetOneOrderQuery } from "redux/api/order.api";
import {
  gtCss,
  orderCss,
  priceCss,
  gtPriceCss,
  thankYouCss,
  checkMarkCss,
  emailConfCss,
  productListCss,
  productItemCss,
  orderSuccessCss,
} from "components/order/order-success/style";

const OrderSuccess = () => {
  useTitle("ORDER SUCCESS");
  const router = useRouter();

  const { data: order } = useGetOneOrderQuery(router.query.trxref as string, {
    skip: router.query.trxref === undefined,
  });

  return (
    <Container css={orderSuccessCss}>
      <Box css={checkMarkCss}>
        <CheckIcon sx={{ color: "#fff" }} fontSize="large" />
      </Box>
      <h1 css={thankYouCss}>
        THANK YOU <br /> FOR YOUR ORDER
      </h1>
      <Typography css={emailConfCss}>You will receive an email confirmation shortly.</Typography>

      <Grid css={productListCss} container>
        <Grid css={orderCss} sm={7} xs={12}>
          {order?.orderItems.map((ord: any) => (
            <Box css={productItemCss} key={ord?.product.id}>
              <Box>
                <Image
                  alt={`${ord?.product.name} image`}
                  src={ord?.product.image}
                  width={50}
                  height={50}
                />
              </Box>

              <Box>
                <h2>{ord?.product.name}</h2>
                <h3>₦ {ord?.product.price}</h3>
              </Box>

              <p>x{ord?.quantity}</p>
            </Box>
          ))}
        </Grid>

        <Grid sx={{ background: "#d87d4a", height: "100%" }} css={priceCss} sm={5} xs={12}>
          <h3 css={gtCss}>Grand Total</h3>
          <h2 css={gtPriceCss}>₦ {order?.grandTotal}</h2>
        </Grid>
      </Grid>

      <Button
        style={{ width: "100%", marginTop: "3rem" }}
        variant="PINK_DARK"
        text="BACK TO HOME"
        onClick={() => router.push("/")}
      />
    </Container>
  );
};

export default OrderSuccess;
