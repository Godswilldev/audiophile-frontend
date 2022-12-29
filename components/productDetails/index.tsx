import Image from "next/image";
import Box from "@mui/material/Box";
import { toast } from "react-hot-toast";
import Button from "components/buttons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BestAudio from "components/bestAudio";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { ProductProps } from "interfaces/products";
import CategoryGroup from "components/categoryGroup";
import { cartProductType } from "interfaces/interfaces";
import { addItemToCart } from "redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import ProductPreviewGroup from "components/productPreview/productPreviewGroup";
import {
  imagesCss,
  productCss,
  featuresCss,
  goBackButton,
  productDescCss,
} from "components/productDetails/style";

const ProductDetail = (product: ProductProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  useEffect(() => setQuantity(quantity), [quantity]);

  const addProductToCart = () => {
    if (cartProducts.map((product: cartProductType) => product.id).includes(product.id)) {
      toast.error(`${product?.name} is already in cart`);
      return;
    } else {
      dispatch(
        addItemToCart({
          id: product.id,
          quantity,
          product,
        })
      );
      toast.success(`${product?.name} added to cart`);
    }
  };

  return (
    <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }} css={productCss}>
      <h1 onClick={() => router.back()} css={goBackButton}>
        Go Back
      </h1>

      <Grid container justifyContent={"space-between"} alignItems="center">
        <Grid xs={12} sm={5} md={6}>
          <Image
            priority={true}
            src={product?.categoryImage}
            alt={`${product.name} image`}
            width={540}
            height={560}
            css={"border-radius:1rem"}
          />
        </Grid>

        <Grid
          xs={12}
          sm={7}
          md={6}
          sx={{ paddingLeft: { xs: 0, sm: "3rem" }, marginTop: { xs: "5rem", sm: 0 } }}
          css={productDescCss}
        >
          {product?.new && <h3>New Product</h3>}
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <h6>${product?.price}</h6>

          <span onClick={addProductToCart}>
            <Button text="add to cart" variant="PINK_DARK" />
          </span>
        </Grid>
      </Grid>

      <Box css={featuresCss}>
        <Grid container alignItems="flex-start" justifyContent={"space-between"}>
          <Grid xs={12} sm={7} md={6}>
            <h2>Features</h2>
            <p>{product?.features}</p>
          </Grid>

          <Grid
            xs={12}
            sm={5}
            md={6}
            sx={{ paddingLeft: { xs: 0, sm: "5rem" }, marginTop: { xs: "5rem", sm: 0 } }}
          >
            <h2>In the Box</h2>
            {product.includedItems.map((p: { quantity: number; item: string }) => (
              <p key={p.item}>
                <span>{p.quantity}X</span> {p.item}
              </p>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
        css={"img{border-radius:1rem}"}
      >
        <Box sx={imagesCss}>
          <Box sx={{ paddingRight: { xs: "3rem", md: 0 } }}>
            <Image
              priority={true}
              src={product?.productImageGallery[0]}
              alt={`${product.name} image`}
              width={445}
              height={280}
            />
          </Box>

          <Image
            priority={true}
            src={product?.productImageGallery[1]}
            alt={`${product.name} image`}
            width={445}
            height={280}
          />
        </Box>

        <Image
          priority={true}
          css={"padding-left: 5rem"}
          src={product?.productImageGallery[2]}
          alt={`${product.name} image`}
          width={635}
          height={592}
        />
      </Box>

      <h5>You May Also Like</h5>

      <Grid
        container
        justifyContent={"space-between"}
        sx={{ margin: "5rem auto 15rem 0", width: "100%" }}
        alignItems="center"
      >
        <ProductPreviewGroup />
      </Grid>

      <Box css={"margin:15rem 0"}>
        <CategoryGroup />
      </Box>
      <Box sx={{ marginBottom: "12rem" }}>
        <BestAudio />
      </Box>
    </Container>
  );
};

export default ProductDetail;
