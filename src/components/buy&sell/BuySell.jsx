import React from 'react'
import './BuySell.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Contact from "../contact/Contact"
import Popup from "../contact/Popup"
function BuySell() {
  return (
    <div className="main">
    <div className='one'>
    <h1 className='heading'>Buying & Selling Information</h1>
    <p className='para'>The National Inventory Exchange Network (NIE) has been developed to assist all types of industries manage their product assets especially as it pertains to dead stock and excess inventory. The NIE business model only allows industry distributors and manufacturers to transact the selling and buying of products.</p>
    <p className='para'>As a guest you may browse and search for products you might like to buy, but you will have to work with an NIE member distributor to transact your purchase. Also, you may sell an item on the NIE network, but again, a member distributor will have to transact this for you. Here is information to review before contacting a distributor to initiate a buy or sell transaction request.</p>
</div>
  <div className="two">
    <ul>
      <li>
      Only industry related products that are new and unused may be sold on the network. A list of industries served by the NIE network will be provided.
      </li>
      <li>Our member distributor, at their sole discretion, will determine if a product is suitable to sell on the NIE network.</li>
      <li>
      Our distributor member will add an appropriate margin to compensate a return on their invested time and effort to transact this product purchase or sale.
      </li>
      <li>
      If you do not work with one of our member distributors we will provide you the contact information of one nearest to you.
      </li>
    </ul>
  </div>
  <div className="three">
    <p>Here are the industries that are presently established on the National Inventory Exchange Network</p>
    <div className='clist'>
    <p>ABC Test Industry 2021 ABC Test Industry 2021ABC Test Industry 2021 wdsdasdsad asdfasfas asfdasfa afasfasf asfas</p>
    <p>Industry_No Product renamed to check the issue with long</p>
    <p>name</p>
    <p>Iron Supplies</p>
    <p>Iron/Steel</p>
    <p>Mark's Test Industry</p>
    <p>MK</p>
    <p>MT technologies</p>
    <p>MXM Another Import</p>
    <p>MXM MXM Industry</p>
    <p>MXM Test Industry</p>
    <p>MXM Test Industry Two</p>
    <p>MXM XM Industry</p>
    <p>North American Building Material</p>
    <p>PK</p>
    <p>Power Transmission</p>
    <p>PPPte</p>
    <p>PTDA</p>
    <p>PTM01 Test Industry</p>
    <p>ST</p>
    <p>Steel and Iron services</p>
    <p>suraj industry</p>
    <p>SVG</p>
    <p>TECH</p>
    <p>Tech Supply Association</p>
    <p>Techno</p>
    <p>Techs Association</p>
    <p>test industru</p>
    <p>Test industry24</p>
    <p>Test k</p>
    <p>To Check3</p>
    <p>TPA</p>
    <p>TT industries</p>
    <p>uEfw- Wfw - efw</p>
    <p>uig</p>
    <p>WASADA</p>
    <p>WASADA</p>
    <p>z424</p>
    <p>zgg</p>
    </div>
    {/* <span className='cont'>contact us</span> */}
    <p>Please <a href="">Contact Us</a> if your industry is not yet included. We are in the process of establishing a beneficial network for all industries. We also are looking for experienced industry distributor consultants to assist us in this effort.</p>
    
  </div>
</div>
  )
}

export default BuySell