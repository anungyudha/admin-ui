import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Exercise from "./latihan/Exercise.jsx";
import App from "./App.jsx";
import { ThemeContextProvider } from "./Context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
