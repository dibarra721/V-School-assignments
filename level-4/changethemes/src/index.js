import React from "react";
import ReactDOM from "react-dom";

import {ThemeContextProvider} from "./ThemeProvider"
import App from "./App"
import "./App.css"

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
  )