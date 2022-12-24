import { colors } from "utils/theme";
import { css } from "styled-components/macro";

export const buttonCss = (
  variant:
    | "PINK_DARK"
    | "PINK_LIGHT"
    | "BLACK"
    | "BORDERED"
    | "BORDERLESS_BLACK"
    | "BORDERLESS_COLOURED"
) => css`
  .arrow__Right {
    position: relative;
    margin-left: 1.2rem;
    top: 0.2rem;
  }
  position: relative;
  outline: none;
  width: fit-content;
  padding: 2rem 3rem;
  min-height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:active,
  &:focus {
    transform: translateY(0.2rem);
  }

  &:hover {
    background-color: ${variant === "PINK_DARK"
      ? colors.colorLightPink
      : variant === "PINK_LIGHT"
      ? colors.colorDarkPink
      : variant === "BLACK"
      ? colors.colorLightBlack
      : variant === "BORDERED"
      ? colors.colorBlack
      : variant === "BORDERLESS_BLACK"
      ? "transparent"
      : variant === "BORDERLESS_COLOURED"
      ? "transparent"
      : colors.colorBlack};

    color: ${variant === "PINK_DARK"
      ? colors.colorWhite
      : variant === "PINK_LIGHT"
      ? colors.colorWhite
      : variant === "BLACK"
      ? colors.colorWhite
      : variant === "BORDERED"
      ? colors.colorWhite
      : variant === "BORDERLESS_BLACK"
      ? colors.colorDarkPink
      : variant === "BORDERLESS_COLOURED"
      ? colors.colorBlack
      : colors.colorBlack};
  }

  border: ${variant === "PINK_DARK"
    ? "none"
    : variant === "PINK_LIGHT"
    ? "none"
    : variant === "BLACK"
    ? "none"
    : variant === "BORDERED"
    ? "1px solid black"
    : variant === "BORDERLESS_BLACK"
    ? "none"
    : variant === "BORDERLESS_COLOURED"
    ? "none"
    : "none"};

  background-color: ${variant === "PINK_DARK"
    ? colors.colorDarkPink
    : variant === "PINK_LIGHT"
    ? colors.colorLightPink
    : variant === "BLACK"
    ? colors.colorBlack
    : variant === "BORDERED"
    ? "transparent"
    : variant === "BORDERLESS_BLACK"
    ? "transparent"
    : variant === "BORDERLESS_COLOURED"
    ? "transparent"
    : "transparent"};

  color: ${variant === "PINK_DARK"
    ? colors.colorWhite
    : variant === "PINK_LIGHT"
    ? colors.colorWhite
    : variant === "BLACK"
    ? colors.colorWhite
    : variant === "BORDERED"
    ? colors.colorBlack
    : variant === "BORDERLESS_BLACK"
    ? colors.colorLightBlack
    : variant === "BORDERLESS_COLOURED"
    ? colors.colorDarkPink
    : colors.colorBlack};
`;
