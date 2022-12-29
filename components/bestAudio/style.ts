import { colors } from "utils/theme";
import { body, h2 } from "utils/typography";
import { css } from "styled-components/macro";
import BestGear from "assets/shared/desktop/image-best-gear.jpg";

export const bestAudioCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const bestAudioImgCss = css`
  background-image: ${`url(${BestGear.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 54rem;
  height: 58.8rem;
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 60rem;
    background-position: top;
    margin-bottom: 7rem;
  }
  @media (max-width: 425px) {
    height: 40rem;
  }
`;

export const bestAudioDescriptionCss = css`
  h1 {
    ${h2}
    text-transform: uppercase;
    margin-bottom: 2rem;

    span {
      color: ${colors.colorDarkPink};
    }
  }

  p {
    ${body}
    color: ${colors.colorLightBlack};
    @media (max-width: 768px) {
      text-align: justify;
    }
  }

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }
`;
