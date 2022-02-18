import React from 'react'
import './Homepage.css';

function HomePage() {
  return (
    <div>
      <h5> </h5>
    <div classname="container">
        
        <div className="leftdiv">
       <h1>New Member</h1>
         <p> To register your company into the NIE Network, please click the " join " button below. </p>
         <button className='buttonJoin' type="button">JOIN</button>
       </div>
      
        <div className="centrediv">
          <h2> Login</h2>
        
          <label className="Name">Username*</label>
          <input className="email"  placeholder='Enter Email Address'></input>
          <label className="poss">Possword*</label>
            <input className="possword"  placeholder='Enter  Password'></input>
            <a className='forget'>Forget Password?</a><br/>
          
        <button className='buttonset' type="button">Login</button>
  
        </div>

        <div className="rightdiv">
          <h3>Welcome to NIE 1.0</h3>
          <p className="first">Happy New Year!</p>
          <p className="second">we look forward to a healthier</p>
          <p className="third">and safe year for all in 2022.</p>
          <p className="fourth">Stay tuned here for more information about a major new NIE platform release...</p>
        
        
          
          
          
      
        
        
      

          </div>

      </div>
        
    

        

            

    
      
        


          

         


        

            
         
      </div>
  )
    
}

export default HomePage