import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useRef } from 'react';
const Search = () => {
   const [rowData] = useState([
       {PostDate:"10/21/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111",Description:"111",NIEitemCode:"P3000863",Manufacture:"454",UofM:"Kilo",Qty:"108"},
       {PostDate:"10/26/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111-post an item request-seller-mark's 1",Description:"111-post an item request-seller-mark's 1",NIEitemCode:"P3000870",Manufacture:"Name",UofM:"nfg",Qty:"100"},
       {PostDate:"10/27/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111-2186-Reproduce",Description:"111-2186-Reproduce",NIEitemCode:"P3000875",Manufacture:"454",UofM:"Kilo",Qty:"90"},
       {PostDate:"10/26/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "1111",Description:"1111",NIEitemCode:"P3000873",Manufacture:"454",UofM:"Kilo",Qty:"98"},
       {PostDate:"10/13/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-13th october",Description:"123-13th october",NIEitemCode:"P3000840",Manufacture:"name",UofM:"Kilo",Qty:"100"},
       {PostDate:"10/14/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-14th october",Description:"123-14th october",NIEitemCode:"P3000845",Manufacture:"name",UofM:"Kilo",Qty:"90"},
       {PostDate:"09/15/2021", Industry:"Tech", Category: "Tech-fabricated/CCFRPM",ItemName: "123-15th sept",Description:"123-15th sept",NIEitemCode:"P3000744",Manufacture:"name",UofM:"Kilo",Qty:"95"},
       {PostDate:"10/19/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-19th october",Description:"123-19th october",NIEitemCode:"P3000847",Manufacture:"name",UofM:"Kilo",Qty:"90"},
       {PostDate:"10/20/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-20th october",Description:"123-20th october",NIEitemCode:"P3000849",Manufacture:"name",UofM:"Kilo",Qty:"100"},
       {PostDate:"09/24/2021", Industry:"Tech", Category: "Tech-fabricated/CCFRPM",ItemName: "123-24th sept",Description:"123-24thsept",NIEitemCode:"P3000775",Manufacture:"name",UofM:"Kilo",Qty:"100"},
       {PostDate:"10/21/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111",Description:"111",NIEitemCode:"P3000863",Manufacture:"454",UofM:"Kilo",Qty:"108"},
       {PostDate:"10/26/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111-post an item request-seller-mark's 1",Description:"111-post an item request-seller-mark's 1",NIEitemCode:"P3000870",Manufacture:"Name",UofM:"nfg",Qty:"100"},
       {PostDate:"10/27/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "111-2186-Reproduce",Description:"111-2186-Reproduce",NIEitemCode:"P3000875",Manufacture:"454",UofM:"Kilo",Qty:"90"},
       {PostDate:"10/26/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "1111",Description:"1111",NIEitemCode:"P3000873",Manufacture:"454",UofM:"Kilo",Qty:"98"},
       {PostDate:"10/13/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-13th october",Description:"123-13th october",NIEitemCode:"P3000840",Manufacture:"name",UofM:"Kilo",Qty:"100"},
       {PostDate:"10/14/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-14th october",Description:"123-14th october",NIEitemCode:"P3000845",Manufacture:"name",UofM:"Kilo",Qty:"90"},
       {PostDate:"09/15/2021", Industry:"Tech", Category: "Tech-fabricated/CCFRPM",ItemName: "123-15th sept",Description:"123-15th sept",NIEitemCode:"P3000744",Manufacture:"name",UofM:"Kilo",Qty:"95"},
       {PostDate:"10/19/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-19th october",Description:"123-19th october",NIEitemCode:"P3000847",Manufacture:"name",UofM:"Kilo",Qty:"90"},
       {PostDate:"10/20/2021", Industry:"Tech", Category: "Tech-fabricated",ItemName: "123-20th october",Description:"123-20th october",NIEitemCode:"P3000849",Manufacture:"name",UofM:"Kilo",Qty:"100"},
       {PostDate:"09/24/2021", Industry:"Tech", Category: "Tech-fabricated/CCFRPM",ItemName: "123-24th sept",Description:"123-24thsept",NIEitemCode:"P3000775",Manufacture:"name",UofM:"Kilo",Qty:"100"},
   ]);
   const gridRef = useRef(null);
   const [columnDefs] = useState([
      // { field: "PostDate",sortable: true, filter: true },
       { field: "PostDate",sortable: true, filter: true, checkboxSelection: true },
       { field: "Industry",sortable: true, filter: true },
       { field: "Category",sortable: true, filter: true },
       { field: "ItemName",sortable: true, filter: true },
       { field: "Description",sortable: true, filter: true },
       { field: "NIEitemCode",sortable: true, filter: true },
       { field: "Manufacture",sortable: true, filter: true },
       { field: "UofM",sortable: true, filter: true },
       { field: "Qty",sortable: true, filter: true },
   ]);  
   const onButtonClick = e => {
         const selectedNodes = gridRef.current.api.getSelectedNodes()
          const selectedData = selectedNodes.map( node => node.data )
          const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
          alert(`Selected nodes: ${selectedDataStringPresentation}`)
      }   
   return (<div style={{position:'relative',top:"110px",left:"30px"}}>
       <div style={{position:'relative',left:"160px"}}>
       <h1>View NIE Inventory For Sale</h1>
   </div>
       <div className="ag-theme-alpine" style={{height:"451px", width: 1303}}>
       <button onClick={onButtonClick}>Get selected rows</button>
           <AgGridReact
            ref={gridRef}
               rowData={rowData}
               columnDefs={columnDefs}
               pagination={true}
               paginationPageSize={8}
               rowSelection="multiple"
            >
           </AgGridReact>
       </div>
   </div>
   );

};

export default Search;