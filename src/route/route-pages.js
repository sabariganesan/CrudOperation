import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popup from "../components/contact/Popup";
import Contact from "../components/contact/Contact";
import { homepath } from "../consts/RoutePaths";
import "../style/variable.css"
import Guest from "../components/Guest/Guest";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/Footer";
import { Aboutus } from "../components/aboutus/aboutus";
import BuySell from "../components/buy&sell/BuySell";


export function RoutePage() {
  return (

    <Router>
      <Header />
      
        <Routes>
          <Route path='/popup' element ={<Popup />} />
          <Route path='/contact' element ={<Contact />} />
          <Route path='/guest' element ={<Guest />} />
         <Route path='/about' element ={<Aboutus />} />
       

        </Routes>
        <Footer />
    </Router>
  );
}
