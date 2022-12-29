import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { h2 } from "utils/typography";

export const categoryPageCss = css``;

export const categoryHeaderCss = css`
  height: ${33.6 - 9.7 + "rem"};
  background-color: ${colors.colorBlack};
  color: ${colors.colorWhite};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    ${h2}
  }
`;
