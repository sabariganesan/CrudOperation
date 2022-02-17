import React, { useEffect, useState } from 'react';
import "./popup.css";

function Popup({close}) {
   const initialvalue={
        firstname:'',
        email:'',
        company:'',
        phone:'',
        ext:'',
        state:'',
        purpose:'',
        massage:''
    }

    const[userinfo,setUserinfo]=useState(initialvalue);
    const [getinfo,setGetinfo] =useState({})
    
    const valueChange =(e)=>{
       const {name,value}=e.target;
       setUserinfo({...userinfo,[name]:value})
    }
    
    const valueSubmit =(e)=>{
         e.preventDefault();
         setGetinfo(userinfo);
         setUserinfo(initialvalue)

}
console.log(getinfo); 
    const handleclose=()=>{
        close()
    }
     
  return (
    <div>
         <div className='popupContainer' >
          <div className='popup'>
              <div className='main'>
            <div className='top'>
            <span>contact Us</span>
            <button onClick={handleclose} ><i class="fa-solid fa-xmark"></i> </button>
            </div>
            <br />
            <div className='sp'>
            <span>Please call us at (612) 800-0010</span> <br />
            <span>OR</span><br />
            <span>Enter your Information below and our team will respond shorly</span>
            </div>
            <hr  className='hr'/>
            <div className='btn1'>
            <button>Cancel</button> 	 &nbsp;
            <button>Submit</button>
            </div>
           <div>
              <div className='form'>  
            <form onSubmit={valueSubmit} >
               <div>
                   <label htmlFor="flname">First & Last Name</label>
                   <input type="text"id='flname' placeholder='Enter first & last name' className='input'name='firstname'value={userinfo.firstname}
                   onChange={valueChange} required />
               </div>
               <div>
                   <label htmlFor="email"> Email</label>
                   <input type="email"id='email' placeholder='Enter email'className='input'name='email'value={userinfo.email} onChange={valueChange} required />
               </div>
               <div>
                   <label htmlFor="company"> Company</label>
                   <input type="text"id='company' placeholder='Enter company' className='input'name='company'value={userinfo.company} onChange={valueChange} required />
               </div>
               <div>
                   <label htmlFor="phone"> Phone</label>
                   <input type='number'id='phone' placeholder='Enter phone' className='phone'  name='phone'value={userinfo.phone}onChange={valueChange} required />

                    <span>Ext</span>
                   <input type="text"placeholder='Enter Ext'className='ext'name='ext'value={userinfo.ext}onChange={valueChange} required  />
               </div>
               <div>
                   <label htmlFor="state"> State</label>
                   <select id='state' className='input'
                   name='state'value={userinfo.state} onChange={valueChange} required>Select Sate...
                       <option value="state">Select Sate...</option>
                       <option value="Tamilnadu">Tamilnadu</option>
                       <option value="Kerala">Kerala</option>
                       <option value="Mumbai">Mumbai</option>
                       <option value="Delhi">Delhi</option>
                   </select>
               </div>
               <div>
                   <label htmlFor="pursose"> Purpose</label>
                   <select id='pursose' className='input'
                   name='purpose'value={userinfo.purpose} onChange={valueChange} required >Select Purpose...
                       <option value="state">Select Purpose...</option>
                       <option value="Tamilnadu">Tamilnadu</option>
                       <option value="Kerala">Kerala</option>
                       <option value="Mumbai">Mumbai</option>
                       <option value="Delhi">Delhi</option>
                   </select>
               </div>
               <div>
               <label htmlFor="massage" className='massage'>Massage</label>
                   <textarea  cols="54" rows="4"className='te'id='massage'
                   name='massage'value={userinfo.massage}onChange={valueChange} placeholder='Enter massage'></textarea>
               </div>
               <div className='check'>
                   <input type="checkbox" name ='checkbox'required id='checkbox' /> <label htmlFor="checkbox"> i'm not a robot</label>
                   <img src="" alt="" />
               </div>
               <div className='btn2'>
                   <button onClick={handleclose} >Cancel</button> &nbsp; 
                   <button>Submit</button>

               </div>

            </form>
            </div>
               </div> 
        </div>
      </div>
      </div>
</div>
  )
}

export default Popup;