import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  darkTheme: {
    darkGray: "#353a3f",
    darkerGray: "#32363d",
  },
  peachTheme: {
    darkGray: "#353a3f",
    darkerGray: "#32363d",
  },
  colors: [],
};

const Theme = (props) => {
  console.log(props);
  console.log(props.hello);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
