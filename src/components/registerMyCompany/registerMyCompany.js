import React, { useState } from 'react';
import PopupRg from './popupRg';


export default function RegisterMyCompany() {
    const[modal,setModal]= useState(false)
    const toggleModal =()=>{
        setModal(!modal);
    }
    return (
        <>
            <a style={{cursor:"pointer"}} onClick={toggleModal} >RegisterMyCompany</a>
            {modal && (
                <div> <PopupRg close={toggleModal}/> </div>
            )
            }
        </>
    );
}

