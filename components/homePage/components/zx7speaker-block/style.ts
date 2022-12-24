import { h4 } from "utils/typography";
import { css } from "styled-components/macro";
import Zx7SpeakerImage from "components/homePage/components/zx7speaker-block/images/image-speaker-zx7.jpg";

export const zx7SpeakerCss = {
  backgroundImage: `url(${Zx7SpeakerImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  maxWidth: "100%",
  height: "32rem",
  borderRadius: "0.8rem",
};

export const zx7DescriptionCss = css`
  position: relative;
  margin-left: 13rem;
  top: 10rem;

  @media (max-width: 768px) {
    margin-left: 5rem;
  }

  @media (max-width: 425px) {
    margin-left: 2.5rem;
    top: 7rem;
  }

  h1 {
    ${h4}
    margin-bottom: 2rem;
  }
`;
