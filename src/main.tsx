import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//i18n設置
import "./locale/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
