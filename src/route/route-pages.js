import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popup from "../components/contact/Popup";
import Contact from "../components/contact/Contact";
import { homepath } from "../consts/RoutePaths";
import "../style/variable.css"
<<<<<<< HEAD
import BuySell from "../components/buy&sell/BuySell";
=======
import Guest from "../components/Guest/Guest";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/Footer";
import { Aboutus } from "../components/aboutus/aboutus";
>>>>>>> bd51d399f88fa29d5ef415b64871b8d23fcf49b5

export function RoutePage() {
  return (

    <Router>
<<<<<<< HEAD
=======
      <Header />
>>>>>>> bd51d399f88fa29d5ef415b64871b8d23fcf49b5
      
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
