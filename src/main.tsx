import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DebateProvider } from "./DebatesContext";
 

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <DebateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DebateProvider>
  </React.StrictMode>
);