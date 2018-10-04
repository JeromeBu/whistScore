import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./style/themes";
import "./style/reset.css";
import Router from "./Router";

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    <Router />
  </ThemeProvider>,
  document.getElementById("app"),
);
