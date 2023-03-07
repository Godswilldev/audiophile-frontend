import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import router from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "components/buttons";
import Container from "@mui/material/Container";
import { ProductProps } from "interfaces/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  gridContainerCss,
  gridItemImageCss,
  headerCarouselContainer,
  headerTextCss,
} from "components/homePage/components/carousel/style";

export function HeaderCarousel({ products }: any) {
  const newProducts = products?.filter((p: ProductProps) => p.new === true);

  return (
    <Box css={headerCarouselContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {newProducts?.map((product: ProductProps) => (
          <SwiperSlide key={product?.id}>
            <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }}>
              <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                css={gridContainerCss}
                sx={{ marginTop: 0 }}
              >
                <Grid item lg={5} md={6} css={headerTextCss}>
                  <p>New product</p>
                  <h1>{product?.name}</h1>
                  <h2>{product?.description}</h2>
                  <Button
                    onClick={() => router.push(`/product/${product?.id}`)}
                    text="see product"
                    variant="PINK_DARK"
                  />
                </Grid>

                <Grid item lg={7} md={6} css={gridItemImageCss}>
                  <Image
                    width={550}
                    height={550}
                    src={product?.image}
                    alt={`${product?.name} Image`}
                  />
                </Grid>
              </Grid>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
