import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core'


var mountNode = document.getElementById("app");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);