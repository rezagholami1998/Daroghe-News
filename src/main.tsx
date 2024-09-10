import "./index.css";
import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
/////////////////////////////////////////////////////////////////////
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily:'IRANSansXFaNum-medium,IRANSansXFaNum-regular,IRANSansXFaNum-bold',
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
