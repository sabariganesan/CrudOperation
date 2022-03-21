import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../contact/Contact';
import './header.css';

function Header() {
  return (
    
    <div>
      <div className='header'>
      <h1 className='h1'> 

      NATIONAL INVENTORY EXCHANGE NETWORK
      </h1>
      <p className='paragraph'>An innovative digital platform helping all industries solve dead <br />
      stock, excess inventory, and supply chain disruption issues. </p> 
    <div className='nav'>
    <ul >
      <li><a href="">HOME</a></li>
      <li><Link to="/about">ABOUT US</Link> </li>
      <li><Link to="/guest">GUEST</Link> </li>
      <li> <Contact /> </li>
      <li> vvvv </li>
      </ul> 
      <button className='login'>LOGIN</button> 
    </div>
    
      </div>
    </div>
      
  )
}

export default Header