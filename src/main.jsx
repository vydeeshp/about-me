import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./styles/style.css";
import {Routes, Route,BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/vydeeshp.github.io/">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
