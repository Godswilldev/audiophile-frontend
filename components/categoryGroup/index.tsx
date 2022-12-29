import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "components/buttons";
import speaker from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";

import {
  categoryTypeCss,
  categoryIconCss,
  categorydescCss,
  categoryGroupCss,
} from "components/categoryGroup/style";

const CategoryGroup = () => {
  const router = useRouter();

  return (
    <Box css={categoryGroupCss}>
      <Box css={categoryTypeCss}>
        <Box css={categoryIconCss}>
          <Image width={146} height={146} alt="headphones image" src={headphones} />
        </Box>

        <Box css={categorydescCss}>
          <h1>HEADPHONES</h1>

          <Button
            onClick={() => router.push("/headphones")}
            text="shop"
            variant="BORDERLESS_BLACK"
          />
        </Box>
      </Box>

      <Box css={categoryTypeCss}>
        <Box css={categoryIconCss}>
          <Image width={146} height={146} alt="speaker image" src={speaker} />
        </Box>

        <Box css={categorydescCss}>
          <h1>SPEAKER</h1>

          <Button onClick={() => router.push("/speakers")} text="shop" variant="BORDERLESS_BLACK" />
        </Box>
      </Box>

      <Box
        css={`
          ${categoryTypeCss}
          @media (max-width: 600px) {
            margin-bottom: 0;
          }
        `}
      >
        <Box css={categoryIconCss}>
          <Image width={146} height={146} alt="earphones image" src={earphones} />
        </Box>

        <Box css={categorydescCss}>
          <h1>EARPHONES</h1>

          <Button
            onClick={() => router.push("/earphones")}
            text="shop"
            variant="BORDERLESS_BLACK"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryGroup;
