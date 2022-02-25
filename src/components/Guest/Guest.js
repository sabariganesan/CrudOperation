import React from 'react'
import RegisterMyCompany from '../registerMyCompany/registerMyCompany'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const Guest = () => {
  const [menu,setMenu] = useState(false);
  const changeMenu=()=>{
      setMenu(!menu)
  }
  return (
    <div>
   <div>
   <span >
     <button class="btn btn-primary" onClick={changeMenu} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" style={{width: "15rem"}}>
      {menu? 'X Guest':'MENU'}
  </button>
     </span>

<span className="card" style={{width: "15rem"}} id ='collapseExample' >
  <ul className="list-group list-group-flush">
    <li className="list-group-item "><Link to="/buyerseller">Buying & Selling information</Link></li>
    <li className="list-group-item">Search items for sales</li>
    <li className="list-group-item">Locate A Member Distributer </li>
    <li className="list-group-item"><RegisterMyCompany/></li>
  </ul>
 
</span>
    
   </div>
    </div>
    
  )
}

export default Guest