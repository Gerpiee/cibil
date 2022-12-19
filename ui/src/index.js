import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TablePatient from "./TablePatient";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <TablePatient />
  </Provider>
);
