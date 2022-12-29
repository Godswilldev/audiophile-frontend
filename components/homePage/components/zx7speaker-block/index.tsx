import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import {
  zx7DescriptionCss,
  zx7SpeakerCss,
} from "components/homePage/components/zx7speaker-block/style";

const Zx7Speaker = () => {
  const router = useRouter();
  return (
    <Box style={zx7SpeakerCss}>
      <Box css={zx7DescriptionCss}>
        <h1>ZX7 SPEAKER</h1>

        <Button
          onClick={() => router.push("/product/zx7-speaker")}
          text="see product"
          variant="BORDERED"
        />
      </Box>
    </Box>
  );
};

export default Zx7Speaker;
