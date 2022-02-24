import React, { Component } from "react";
import './Register.css';
class Register extends Component {
  render() {
    return <div>
       <h5> </h5>
    <div classname="container">
        
        <div className="leftdiv">
       
       
      </div>
      
        <div className="centrediv">
          <h2> Locate A Member Distributor</h2>
          <p> Guests may buy and sell items on the NIE network with the assistance of member distributors. If you do not know of a member distributor in your area, please fill out and submit the following communication form. Our NIE team will provide you the contact information of an appropriate NIE distributor nearest to your location.
            </p> <br/>
          <button className='buttonset' type="button">Cancel</button> <br/>
          <button className="buttonsets" type="button">submit</button>
          <br/>
          <lable className="name">First and Last Name*</lable>
          <input className="first" placeholder="First and Last Name"></input><br/>
          <lable className="company"> Company Name*</lable>
          <input className="second" placeholder="Enter Company Name"></input><br/>
          <lable className="address1">Address1*</lable>
          <input className="third" placeholder="Enter Address1"></input><br/>
          <lable className="address2">Address2*</lable>
          <input className="fourth" placeholder="Enter Address2"></input><br/>
          <label className="state">State*</label>
          <select className="fifth" placeholder="Select State..">
            <option value="Select State">Select State...</option>
            <option value=" chennai">chennai</option>
            <option value=" madurai">madurai</option>
          </select><br/>
          <lable className="zipcode">ZIP Code*</lable>
          <input className="six" placeholder="Enter ZIP Code"></input><br/>
          <lable className="email">Email*</lable>
          <input className="seven" placeholder="Enter Email"></input><br/>

         <lable className="nie" placeholder="Enter Item Code">NIE item code you are intrested in buying</lable>
         <input className="input3" placeholder="Enter Item Code"></input><br/>
         <lable className="message" placeholder=" Message">Message</lable>
         <input className="input4" placeholder="Enter Massage"></input><br/>
         <lable className="date">0/1024</lable><br/>
         <lable>
         <input className="box" placeholder="i'm not a robot"></input>
  
        </lable><br/>
        <button className='button1' type="button">Cancel</button> <br/>
          <button className="button2" type="button">submit</button>



          
      
  </div>
  </div>
  </div>; 
  }
}

export default Register;
