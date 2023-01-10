import { css } from "styled-components/macro";
import { colors } from "utils/theme";

export const orderSuccessCss = css`
  height: 71.3rem;
  width: 54rem;
  background-color: black;
  margin: 10rem auto;
  padding: 5rem;
  color: #fff;

  @media (max-width: 600px) {
    width: 85%;
    height: 100%;
  }
`;

export const checkMarkCss = css`
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 100%;
  background: #d87d4a;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const thankYouCss = css`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: 1.1428571939468384px;
  margin: 2rem 0;
`;

export const emailConfCss = css`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.5rem;
`;

export const productListCss = css`
  height: 27rem;
  /* width: 44.4rem; */
  border-radius: 0.8rem;
  margin: 3rem 0;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const orderCss = css`
  height: 100%;
  background: #f1f1f1;
  overflow: auto;
  padding: 3rem 1.5rem;
  scrollbar-width: thin;
  scrollbar-color: ${colors.colorDarkPink};
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.colorDarkPink};
    border-radius: 6px;
    border: 3px solid ${colors.colorDarkPink};
  }
`;

export const gtCss = css`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.5rem;
`;

export const gtPriceCss = css`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: right;
`;
export const productItemCss = css`
  color: #000;
  height: 5rem;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0rem;
    text-align: left;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0rem;
    text-align: left;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-align: right;
  }
`;

export const priceCss = css`
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  padding: 3rem 0 3rem 3rem;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
  }
`;
