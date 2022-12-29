import { colors } from "utils/theme";
import { css } from "styled-components/macro";
import { body, h6, h3 } from "utils/typography";

export const checkoutContainer = css`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 10rem 0;
`;

export const backButtonCss = css`
  ${body}
  cursor: pointer;
  color: ${colors.colorLightPink};
  transition: 0.3s all;
  margin-bottom: 5rem;
  width:fit-content;
  &:hover {
    font-weight: 700;
  }
`;

export const checkoutTextCss = css`
  ${h3}
  margin-bottom: 4rem;
`;

export const gridContainerCss = css``;

export const sectionTitleCss = css`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-transform: uppercase;
  color: ${colors.colorDarkPink};
  margin-top: 5rem;
`;

export const formLabelCss = (active: boolean | undefined) => css`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.6rem;
  color: ${active ? "red" : "black"};
  display: block;
  margin: 1rem 0;
`;

export const textFieldCss = css`
  height: 5.6rem;
  width: 100%;
  border-radius: 8px;
  position: relative;
  input {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 19px;
    padding-left: 2rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: #cd2c2c;
    position: absolute;
    right: 0;
    top: -3rem;
  }
`;

export const paymentContainerCss = css`
  margin-top: 5rem;
`;

export const paymentMethodCss = css`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const cashOnDeliveryCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.5rem;
    width: 55rem;
    opacity: 0.7;
    text-align: justify;
  }
`;

export const methodCss = (error: string | boolean | undefined) => css`
  height: 5.6rem;
  width: 30.9rem;
  border-radius: 8px;
  border: ${error ? "1px solid red" : "1px solid #cfcfcf"};
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  label {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.9rem;
    padding-left: 2rem;
  }
`;

export const summaryGridCss = css`
  background-color: #fff;
  border-radius: 1rem;
  height: 70rem;
  > h1 {
    margin-bottom: 3rem;
    ${h6}
  }
  .cart {
    &__filled {
      &--body {
        height: 30rem;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: ${colors.colorDarkPink};
        &::-webkit-scrollbar {
          width: 0.5rem;
        }
        &::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
          background: ${colors.colorDarkPink};
          border-radius: 6px;
          border: 3px solid ${colors.colorDarkPink};
        }
      }
    }
    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6.4rem;
      width: 100%;
      margin: 0 0 3rem 0;

      &--desc {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          margin-left: 2rem;
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2.5rem;
          }
          h2 {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 2.5rem;
            opacity: 0.6;
          }
        }
      }

      &--btn {
        margin-right: 2rem;
        h6 {
          ${body}
          opacity: 0.6;
        }
      }
    }

    &__total {
      margin-top: 3rem;
      .grandTotal {
        color: ${colors.colorDarkPink};
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 2rem 0;
        h2 {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 2.5rem;
        }
        h1 {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 2.5rem;
        }
      }
      button {
        border: none;
        outline: none;
        background-color: ${colors.colorDarkPink};
        color: #fff;
        width: 100%;
        height: 4.8rem;
        cursor: pointer;
        transition: 0.5s all;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.8rem;
        text-align: center;
        letter-spacing: 1px;

        &:hover {
          background-color: ${colors.colorLightPink};
        }
      }
    }
  }
`;
