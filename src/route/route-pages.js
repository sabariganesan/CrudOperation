import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popup from "../components/contact/Popup";
import Contact from "../components/contact/Contact";
import { homepath } from "../consts/RoutePaths";
import "../style/variable.css"
import Guest from "../components/Guest/Guest";
import Header from "../components/common/header/header";
import Footer from "../components/common/footer/Footer";
import { Aboutus } from "../components/aboutus/aboutus";
import Buysell from "../components/buy&sell/BuySell"
import Search from "../components/Search Item for Sale/Search";


export function RoutePage() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path='/popup' element ={<Popup />} />
          <Route path='/contact' element ={<Contact />} />
          <Route path='/guest' element ={<Guest />} />
         <Route path='/about' element ={<Aboutus />} />
         <Route path='/buyerseller' element ={<Buysell/>} />  
         <Route path='/searchItem' element ={<Search/>} />  
       

        </Routes>
        <Footer />
    </Router>
  );
}
