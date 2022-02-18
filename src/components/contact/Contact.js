import React, { useState } from 'react';
import Popup from './Popup';

function Contact() {
    const[modal,setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal);
      };
      
  return (
    <>
           <button onClick={toggleModal} className="btnmodal">
        Contact Us
      </button>
      { modal &&(
            <div><Popup close={toggleModal} /></div>
          )
        
      }
      
    </>
  )
}

export default Contact