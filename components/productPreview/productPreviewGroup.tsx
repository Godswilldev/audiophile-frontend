import Grid from "@mui/material/Unstable_Grid2";
import ProductPreview from "components/productPreview/productPreview";
import zx9SpeakerOthersDesktop from "assets/shared/desktop/image-zx9-speaker.jpg";
import xx59HeadphonesOthersDesktop from "assets/shared/desktop/image-xx59-headphones.jpg";
import xx99MarkTwoHeadPhonesOthersDesktop from "assets/shared/desktop/image-xx99-mark-two-headphones.jpg";

const ProductPreviewGroup = () => {
  return (
    <>
      <Grid
        sx={{ textAlign: "center", width: "min-content", margin: "5rem auto" }}
        xs={12}
        md={4}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <ProductPreview
          id="63a9caa8560efe584f871d3e"
          text="XX99 Mark II"
          image={xx99MarkTwoHeadPhonesOthersDesktop}
          slug={"xx99-mark-two-headphones"}
        />
      </Grid>
      <Grid
        sx={{ textAlign: "center", width: "min-content", margin: "5rem auto" }}
        xs={12}
        md={4}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <ProductPreview
          id="63a9c992377e040d7a46f58b"
          text="XX59"
          image={xx59HeadphonesOthersDesktop}
          slug={"xx59-headphones"}
        />
      </Grid>
      <Grid
        sx={{ textAlign: "center", width: "min-content", margin: "5rem auto" }}
        xs={12}
        md={4}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <ProductPreview
          id="63a9cbd0560efe584f871d48"
          text="ZX9 Speaker"
          image={zx9SpeakerOthersDesktop}
          slug={"zx9-speaker"}
        />
      </Grid>
    </>
  );
};

export default ProductPreviewGroup;
