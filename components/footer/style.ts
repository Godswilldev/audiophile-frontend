import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { boldText, body } from "utils/typography";

export const footerCss = css`
  background-color: ${colors.colorBlack};
  height: 100%;
  color: ${colors.colorLightWhite};
  position: relative;
`;

export const footerContainerCss = css`
  padding: 10rem 2rem;

  &::before {
    content: "";
    width: 10.1rem;
    height: 0.4rem;
    background-color: ${colors.colorDarkPink};
    position: absolute;
    top: 0;
    @media (max-width: 598px) {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  a,
  svg {
    ${boldText}
    color:#fafafa;
    transition: 0.3s ease-in;
    text-transform: uppercase;
    margin-left: 2rem;

    &:hover {
      color: ${colors.colorDarkPink};
      cursor: pointer;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    ${body}
  }

  @media (max-width: 870px) {
    br {
      display: none;
    }
  }
  @media (max-width: 598px) {
    text-align: center;
  }
`;
