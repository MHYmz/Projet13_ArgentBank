import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import MainRouter from "./mainRouter";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <MainRouter/>
  </BrowserRouter>
)