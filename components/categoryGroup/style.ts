import { colors } from "utils/theme";
import { h6 } from "utils/typography";
import { css } from "styled-components/macro";

export const categoryGroupCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const categoryTypeCss = css`
  height: 16.5rem;
  width: 35rem;
  margin: 0 1rem;
  background-color: ${colors.colorDarkWhite};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 0;
    margin-bottom: 15rem;
  }
`;

export const categoryIconCss = css``;

export const categorydescCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${h6}
  }
`;

export const marginCss = css`
  /* margin: 15rem 0; */
`;
