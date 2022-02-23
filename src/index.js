import React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RoutePage } from "./route/route-pages";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import RegisterMyCompany from "./components/registerMyCompany/registerMyCompany";
// import PopupRg from "./components/registerMyCompany/popupRg";
// import Popup from "./components/contact/Popup";


ReactDOM.render(
  <React.StrictMode>
    
    <RoutePage />
    {/* <RegisterMyCompany/> */}
    {/* <PopupRg/> */}
    {/* <Popup/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
