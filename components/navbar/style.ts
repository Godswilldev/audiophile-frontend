import { colors } from "utils/theme";
import { h6 } from "utils/typography";
import { css } from "styled-components/macro";

export const cartCss = css`
  position: absolute;
  z-index: 10;
  font-size: 1rem;
  background: ${colors.colorDarkPink};
  color: #fff;
  padding: 0.5rem 0.7rem;
  border-radius: 100%;
  top: -1rem;
  left: 0.7rem;
  cursor: pointer;
`;

export const logoStyles = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: "0rem",
  color: "inherit",
  textDecoration: "none",
};

export const logoMobilestyles = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: "0rem",
  color: "inherit",
  textDecoration: "none",
};

export const cartLogoCss = css`
  display: inline;
  right: 4rem;
  position: relative;
  top: 1rem;
  @media (max-width: 375px) {
    right: 2rem;
  }
`;

export const categoryTypeCss = css`
  height: 17rem;
  width: 32rem;
  margin: 0 1rem;
  background-color: ${colors.colorDarkWhite};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 0;
    margin-bottom: 10rem;
  }
`;

export const categorydescCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${h6}
  }
`;
