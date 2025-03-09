import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client' for createRoot
import { BrowserRouter } from "react-router-dom";
import SearchPage from "./SearchPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Fix here
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
  </React.StrictMode>
);
