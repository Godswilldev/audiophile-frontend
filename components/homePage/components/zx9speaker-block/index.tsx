import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import Typography from "@mui/material/Typography";
import {
  patternCss,
  zx9speakerCss,
  slideDescriptionCss,
} from "components/homePage/components/zx9speaker-block/style";
import ZX9Image from "components/homePage/components/zx9speaker-block/images/zx9Speaker.png";
import PatternCircles from "components/homePage/components/zx9speaker-block/images/pattern-circles.svg";

const Z9Speaker = () => {
  const router = useRouter();
  return (
    <Box css={zx9speakerCss}>
      <Box css={patternCss}>
        <Image src={PatternCircles} alt="Pattern Circles" />
      </Box>

      <Image src={ZX9Image} alt="ZX9Speaker Image" />

      <Box css={slideDescriptionCss}>
        <h1>
          ZX9 <br /> SPEAKER
        </h1>

        <Typography>
          Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable{" "}
          <br /> sound.
        </Typography>

        <Button
          onClick={() => router.push("/product/63a9cbd0560efe584f871d48")}
          text="see product"
          variant="BLACK"
        />
      </Box>
    </Box>
  );
};

export default Z9Speaker;
