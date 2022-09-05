import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppBar, Toolbar } from "material-ui";
import Typography from "material-ui/styles/typography";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBar>
      <Toolbar>
      <Typography varient="h6">React Steps</Typography>

      </Toolbar>
    </AppBar>
    <App />
  </React.StrictMode>
);
