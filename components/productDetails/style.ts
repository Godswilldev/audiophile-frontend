import { colors } from "utils/theme";
import { css } from "styled-components/macro";
import { body, h1, h3, h6, h2, lightText } from "utils/typography";

export const productCss = css`
  position: relative;
  padding-top: 5rem;

  h5 {
    ${h3}
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    margin-top: 15rem;
  }
`;

export const goBackButton = css`
  ${body}
  cursor: pointer;
  margin: 0 0 5rem 0;
  z-index: 100;
  width:fit-content;
`;

export const productDescCss = css`
  h3 {
    ${lightText}
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  h1 {
    ${h1}
    @media(max-width:768px) {
      ${h2}
    }
  }

  p {
    ${body}
    margin: 2rem 0;
    @media (max-width: 768px) {
      text-align: justify;
    }
  }

  h6 {
    ${h6}
    margin-bottom: 2rem;
  }
`;

export const featuresCss = css`
  margin: 15rem 0;

  h2 {
    ${h3}
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  p {
    ${body}
    text-align: justify;
    span {
      margin-right: 3rem;
      color: ${colors.colorDarkPink};
      font-weight: 600;
    }
  }
`;

export const imagesCss = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "row", md: "column" },
  marginBottom: { xs: "3rem", md: 0 },
  paddingRight: { xs: 0, md: "3rem" },
};
