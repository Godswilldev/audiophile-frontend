import React from "react";
import Box from "@mui/material/Box";
import { css } from "styled-components/macro";

export const notFoundCss = css`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 4rem;
  }
`;

const NotFound = () => {
  return (
    <Box css={notFoundCss}>
      <h1>Product Not Found</h1>
    </Box>
  );
};

export default NotFound;
