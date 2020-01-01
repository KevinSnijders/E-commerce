// Different screen size breakpoints
const breakpoints = {
  sm: "567px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

// Mobile first approach
export const screen = {
  sm: `only screen and (min-width: ${breakpoints.sm})`,
  md: `only screen and (min-width: ${breakpoints.md})`,
  lg: `only screen and (min-width: ${breakpoints.lg})`,
  xl: `only screen and (min-width: ${breakpoints.xl})`
};

const colors = {
  white: "#ffffff",
  black: "#000",
  grey: "#4a4a4a",
  lightGrey: "#a9a9a9"
};

const fontWeight = {
  lighter: "lighter",
  light: "light",
  normal: "normal",
  bold: "bold",
  bolder: "bolder"
};

const radius = {
  normal: "4px"
};

const shadow = {
  normal: `0 1px 5px 0 ${colors.black}`
};

export const theme = {
  colors,
  fontWeight,
  radius,
  shadow
};
