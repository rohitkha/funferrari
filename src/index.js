import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

let token = localStorage.getItem("token");

axios.defaults.baseURL = "http://13.234.187.141:8080";
axios.defaults.headers.common["Content-Type"] = `application/json`;
axios.defaults.headers.post["Accept"] = `application/json`;
axios.defaults.headers.Authorization = `Bearer ${token}`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
