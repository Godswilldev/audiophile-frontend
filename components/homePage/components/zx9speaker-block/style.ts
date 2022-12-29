import { colors } from "utils/theme";
import { body, h1 } from "utils/typography";
import { css } from "styled-components/macro";

export const zx9speakerCss = css`
  width: 100%;
  height: 56rem;
  background-color: ${colors.colorDarkPink};
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
  }
`;

export const patternCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const slideDescriptionCss = css`
  color: ${colors.colorWhite};
  align-self: center;

  p {
    ${body}
    margin-bottom: 2rem;
  }

  h1 {
    ${h1}
    left: 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 700px) {
    text-align: center;
    margin-top: 5rem;
  }
`;
