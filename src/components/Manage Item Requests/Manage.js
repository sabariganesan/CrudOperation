import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { useRef } from 'react';
const Manage = () => {
   const [rowData] = useState([
       {PostDate:"",Branch:"", Industry:"", Category: "",ItemName: "",Description:"",NIEitemCode:"",Kind:"",UofM:"",Qty:"", BuyPrice:"", ElapseDate:""},
   ]);
//    const gridRef = useRef(null);
   const [columnDefs] = useState([
      // { field: "PostDate",sortable: true, filter: true },
       { field: "PostDate",sortable: true, filter: true },
       { field: "Branch",sortable: true, filter: true },
       { field: "Industry",sortable: true, filter: true },
       { field: "Category",sortable: true, filter: true },
       { field: "ItemName",sortable: true, filter: true },
       { field: "Description",sortable: true, filter: true },
       { field: "NIEitemCode",sortable: true, filter: true },
       { field: "Kind",sortable: true, filter: true },
       { field: "UofM",sortable: true, filter: true },
       { field: "Qty",sortable: true, filter: true },
       { field: "BuyPrice",sortable: true, filter: true },
       { field: "ElapseDate",sortable: true, filter: true },
   ]);  
   return (<div style={{position:'relative',top:"0px",left:"30px"}}>
       <div style={{position:'relative',left:"160px"}}>
       <h1>Manage Item Request</h1>
   </div>
       <div className="ag-theme-alpine" style={{height:"300px", width: 1303}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}
               pagination={true}
               paginationPageSize={4}
            >
           </AgGridReact>
       </div>
   </div>
   );

};

export default Manage;