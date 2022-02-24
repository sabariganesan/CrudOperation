import React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { RoutePage } from "./route/route-pages";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import Footer from "../src/components/common/footer/Footer"
import BuySell from "../src/components/buy&sell/BuySell"

ReactDOM.render(
  <React.StrictMode>
      <BuySell/>
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(
  <React.StrictMode>
    
    <RoutePage />
      
>>>>>>> bd51d399f88fa29d5ef415b64871b8d23fcf49b5
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
