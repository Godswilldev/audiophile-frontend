import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import {
  yx1Css,
  yx1DecsriptionCss,
  yx1ImageCss,
} from "components/homePage/components/yx1earphone-block/style";

const Yx1Earphone = () => {
  const router = useRouter();
  return (
    <Box css={yx1Css}>
      <Box css={yx1ImageCss}></Box>

      <Box css={yx1DecsriptionCss}>
        <h1>YX1 EARPHONES</h1>

        <Button
          onClick={() => router.push("/product/yx1-earphones")}
          text="see product"
          variant="BORDERED"
        />
      </Box>
    </Box>
  );
};

export default Yx1Earphone;
