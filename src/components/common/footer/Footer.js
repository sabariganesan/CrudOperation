import React from 'react'
import PhoneIcon from './icons8-phone-50.png'
import EmailIcon from './email.png'
import './footer.css'

function Footer() {
  return (
  <div className='footer'> 
       <div className='footer_1'>
            <div className='footer_phone'>
               <img className='phoneIcon' src={PhoneIcon}></img>
               <h6 className='phone'>Phone</h6>
               <h6 className='phoneNo'>(612)800-6001</h6>
            </div>
            <div className='footer_mail'>  
                <img className='mailImg' src={EmailIcon}></img>
               <h6 className='footerMail'>EMAIL</h6>
               <h6 className='footermail'>info@nationaliventoryexchange.com</h6>             
            </div>
        </div>
        <div className='footer_2'>
              <div className='footer_policy'>
                <a href=''>Terms of Use</a>
                <a href=''>Privacy Police</a>
                <a href=''>Build 17/02/2021</a>
              </div>
             <div className='footer_copyright'>
                <p>Copyright @2022 National Iventory Exchange Network</p>
             </div>
         </div>
 </div>
    
    
  )
}

export default Footer