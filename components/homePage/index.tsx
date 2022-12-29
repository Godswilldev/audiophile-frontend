import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import BestAudio from "components/bestAudio";
import { css } from "styled-components/macro";
import Container from "@mui/material/Container";
import CategoryGroup from "components/categoryGroup";
import Z9Speaker from "components/homePage/components/zx9speaker-block";
import { HeaderCarousel } from "components/homePage/components/carousel";
import Zx7Speaker from "components/homePage/components/zx7speaker-block";
import Yx1Earphone from "components/homePage/components/yx1earphone-block";

const marginCss = css`
  margin-top: 20rem;
`;

const mobileMarginCss = css`
  ${marginCss}
  @media (max-width: 600px) {
    margin-top: 13rem;
  }
`;

const Home = () => {
  useTitle("AUDIOPHILE | One Stop Audio Store");

  return (
    <Box>
      <HeaderCarousel />

      <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }}>
        <Box css={marginCss}>
          <CategoryGroup />
        </Box>

        <Box css={marginCss}>
          <Z9Speaker />
        </Box>

        <Box css={mobileMarginCss}>
          <Zx7Speaker />
        </Box>

        <Box css={mobileMarginCss}>
          <Yx1Earphone />
        </Box>

        <Box sx={{ marginBottom: "12rem" }} css={marginCss}>
          <BestAudio />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
