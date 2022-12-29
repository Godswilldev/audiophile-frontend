import React from "react";
import Box from "@mui/material/Box";
import { colors } from "utils/theme";
import { css } from "styled-components/macro";
import { CircularProgress } from "@mui/material";

const backgroundCss = css`
  width: 55px;
  height: 55px;
  display: flex;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: white;
  /* background: ${colors.colorDarkPink}; */
`;

const containerCss = css`
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 45px);
`;

export const LoadingComp = css`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  background: ${colors.colorDarkPink};
  /* background: transparent; */
`;

export const PageLoader = () => {
  return (
    <Box css={LoadingComp}>
      <Box css={containerCss}>
        <Box css={backgroundCss}>
          <CircularProgress size={"4rem"} color="primary" disableShrink />
        </Box>
      </Box>
    </Box>
  );
};
