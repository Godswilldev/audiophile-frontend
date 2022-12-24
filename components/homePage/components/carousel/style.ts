import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { body, h1, lightText } from "utils/typography";

export const headerCarouselContainer = css`
  color: #fff;
  width: 100%;
  background-color: ${colors.colorBlack};
  position: relative;
`;

export const gridContainerCss = css`
  height: 90vh;
`;

export const headerTextCss = css`
  z-index: 3;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  p {
    ${lightText}
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  h1 {
    ${h1}
    left: 0;
    margin-bottom: 3rem;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 4rem;
    }
  }
  h2 {
    ${body}
    margin-bottom: 3rem;
    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

export const gridItemImageCss = css`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  position: relative;
  top: 6rem;

  @media (max-width: 900px) {
    position: absolute;
    opacity: 0.5;
    top: 0;
  }
`;
