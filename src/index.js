import React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { RoutePage } from "./route/route-pages";
import reportWebVitals from "./reportWebVitals";
import Footer from "../src/components/common/footer/Footer"

ReactDOM.render(
  <React.StrictMode>
      <Footer/>
=======
// import "./index.css";
import { RoutePage } from "./route/route-pages";
import reportWebVitals from "./reportWebVitals";
import Contact from "./components/contact/Contact"

ReactDOM.render(
  <React.StrictMode>
  
    <Contact />

    {/* <CommonContext.Provider>
      <RoutePage />
    </CommonContext.Provider> */}
>>>>>>> d9aaaf45f77b39c438423fd5fe365cb9b92105e8
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
