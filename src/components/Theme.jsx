import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  darkGray: "#353a3f",
  darkerGray: "#32363d",
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
