import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Clock from "./components/Clock/Clock";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
