import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBar>
      <Toolbar>
        <Typography varient="h6">React app</Typography>
      </Toolbar>
      <Container>
        <Box mt={10}>
          <App />
        </Box>
      </Container>
    </AppBar>
  </React.StrictMode>
);
