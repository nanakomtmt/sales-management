import ReactDOM from "react-dom/client";

import { App } from "./components/App";
import { ItemDataProvider } from "./providers/ItemDataContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PageProvider } from "./providers/PageContext";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <PageProvider>
      <ItemDataProvider>
        <App />
      </ItemDataProvider>
    </PageProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
