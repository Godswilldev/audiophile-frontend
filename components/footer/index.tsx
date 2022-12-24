import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "assets/shared/desktop/logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerContainerCss, footerCss } from "components/footer/style";

const Footer = () => {
  return (
    <Box css={footerCss}>
      <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }} css={footerContainerCss}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid xs={12} sm={6}>
            <Image src={logo} alt="audiophile logo" />
          </Grid>

          <Grid
            xs={12}
            sm={6}
            display="flex"
            sx={{
              marginTop: { xs: "3.5rem", sm: 0 },
              justifyContent: { sm: "flex-end", xs: "center" },
            }}
          >
            <Grid container sx={{ flexDirection: { sm: "row", xs: "column" } }}>
              <Grid sx={{ marginBottom: { xs: "2rem", sm: 0 } }}>
                <Link href="/">Home</Link>
              </Grid>

              <Grid sx={{ marginBottom: { xs: "2rem", sm: 0 } }}>
                <Link href="/headphones">Headphones</Link>
              </Grid>

              <Grid sx={{ marginBottom: { xs: "2rem", sm: 0 } }}>
                <Link href="/speakers">Speakers</Link>
              </Grid>

              <Grid>
                <Link href="/earphones">Earphones</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{ margin: "4rem 0" }}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid xs={12} sm={6}>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team{" "}
              <br /> of music lovers and sound specialists who are devoted to helping you get the{" "}
              <br /> most out of personal audio. Come and visit our demo facility - we&apos;re open
              7 <br /> days a week.
            </p>
          </Grid>

          <Grid
            xs={12}
            sm={6}
            display="flex"
            sx={{
              marginTop: { sm: 0, xs: "3.5rem" },
              justifyContent: { sm: "flex-end", xs: "center" },
            }}
          >
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Grid>
        </Grid>

        <Box>
          <p>Copyright 2021. All Rights Reserved</p>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
