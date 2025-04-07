import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import MainRouter from "./mainRouter";
import "../src/css/main.css";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <MainRouter/>
  </BrowserRouter>
  </Provider>
)