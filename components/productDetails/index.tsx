import Image from "next/image";
import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import { toast } from "react-hot-toast";
import Button from "components/buttons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BestAudio from "components/bestAudio";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import CategoryGroup from "components/categoryGroup";
import { addItemToCart } from "redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import ProductPreview from "components/productPreview/productPreview";
import { cartProductType, CurrentProductProps, ProductsProps } from "interfaces/interfaces";
import {
  productCss,
  goBackButton,
  productDescCss,
  featuresCss,
  imagesCss,
} from "components/productDetails/style";

const ProductDetail = () => {
  const router = useRouter();
  useTitle(`${router.query.productDetails}`);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const routeName: string | undefined | string[] = router?.query?.productDetails;
  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const currentProduct = products.find(
    (product: ProductsProps) => product.slug === routeName || product.name === routeName
  );

  useEffect(() => setQuantity(quantity), [router, quantity]);

  const addProductToCart = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts.map((product: cartProductType) => product.id).includes(currentProduct.slug)
      ) {
        toast.error(`${currentProduct?.name} is already in cart`);
        return;
      } else {
        dispatch(
          addItemToCart({
            id: currentProduct.slug,
            quantity,
            product: currentProduct,
          })
        );
        toast.success(`${currentProduct?.name} added to cart`);
      }
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
            src={currentProduct?.categoryImage.desktop}
            alt={`${routeName} image`}
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
          {currentProduct?.new && <h3>New Product</h3>}
          <h1>{currentProduct?.name}</h1>
          <p>{currentProduct?.description}</p>
          <h6>${currentProduct?.price}</h6>

          <span onClick={addProductToCart}>
            <Button text="add to cart" variant="PINK_DARK" />
          </span>
        </Grid>
      </Grid>

      <Box css={featuresCss}>
        <Grid container alignItems="flex-start" justifyContent={"space-between"}>
          <Grid xs={12} sm={7} md={6}>
            <h2>Features</h2>
            <p>{currentProduct?.features}</p>
          </Grid>

          <Grid
            xs={12}
            sm={5}
            md={6}
            sx={{ paddingLeft: { xs: 0, sm: "5rem" }, marginTop: { xs: "5rem", sm: 0 } }}
          >
            <h2>In the Box</h2>
            {currentProduct?.including.map((p: { quantity: number; item: string }) => (
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
              src={currentProduct?.gallery.second.desktop}
              alt={`${routeName} image`}
            />
          </Box>

          <Image
            priority={true}
            src={currentProduct?.gallery.first.desktop}
            alt={`${routeName} image`}
          />
        </Box>

        <Image
          priority={true}
          css={"padding-left: 5rem"}
          src={currentProduct?.gallery.third.desktop}
          alt={`${routeName} image`}
        />
      </Box>

      <h5>You May Also Like</h5>

      <Grid
        container
        justifyContent={"space-between"}
        sx={{ margin: "5rem auto 15rem 0" }}
        alignItems="center"
      >
        {currentProduct?.others.map((product: CurrentProductProps) => (
          <Grid
            sx={{ textAlign: "center", width: "min-content", margin: "5rem auto" }}
            xs={12}
            md={4}
            key={product.name}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <ProductPreview slug={product.slug} text={product.name} image={product.image.desktop} />
          </Grid>
        ))}
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
