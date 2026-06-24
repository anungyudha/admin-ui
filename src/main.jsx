import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Exercise from "./latihan/Exercise.jsx";
import App from "./App.jsx";
import { ThemeContextProvider } from "./Context/themeContext.jsx";
import { AuthContextProvider } from "./Context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>

    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
