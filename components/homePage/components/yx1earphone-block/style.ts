import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { h4 } from "utils/typography";
import yx1 from "assets/home/desktop/image-earphones-yx1.jpg";

export const yx1Css = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const yx1ImageCss = css`
  background-image: ${`url(${yx1.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 54rem;
  height: 32rem;
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 690px) {
    width: 35rem;
  }
  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const yx1DecsriptionCss = css`
  background-color: ${colors.colorDarkWhite};
  width: 54rem;
  height: 32rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10rem;

  h1 {
    ${h4}
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 40rem;
  }
  @media (max-width: 690px) {
    width: 35rem;
  }
  @media (max-width: 690px) {
    width: 100%;
    margin-top: 7rem;
    padding-left: 5rem;
  }
`;
