import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../shared/theme/tokens.css";
import "../shared/theme/dashboard.css";
import "../shared/theme/auth.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
