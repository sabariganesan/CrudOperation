import React from 'react'

const Guest = () => {
  return (
    <div>
   <div>
   <span >
     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" style={{width: "15rem"}}>
      X  Guest
  </button>
     </span>

<span className="card" style={{width: "15rem"}} id ='collapseExample' >
  <ul className="list-group list-group-flush">
    <li className="list-group-item active">Buying & Selling information</li>
    <li className="list-group-item">Search items for sales</li>
    <li className="list-group-item">Locate A Member Distributer </li>
    <li className="list-group-item">Register My Company</li>
  </ul>
 
</span>
   </div>


    </div>
  )
}

export default Guest