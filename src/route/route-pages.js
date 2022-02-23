import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popup from "../components/contact/Popup";
import Contact from "../components/contact/Contact";
import { homepath } from "../consts/RoutePaths";
import "../style/variable.css"
import BuySell from "../components/buy&sell/BuySell";

export function RoutePage() {
  return (

    <Router>
      
        <Routes>
          <Route path='/popup' element ={<Popup />} />
          <Route path='/contact' element ={<Contact />} />
        </Routes>
    </Router>
  );
}
