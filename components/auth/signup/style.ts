import { css } from "styled-components/macro";

export const signUpCss = css`
  margin-top: 5rem;
  h1 {
    margin-bottom: 2rem;
  }
  button[type="submit"] {
    margin-top: 3rem;
    float: right;

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;
