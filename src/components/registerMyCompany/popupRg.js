import React from 'react';
import './popupRg.css'
function popupRg({close}) {

  const  boxClose=()=>{
        close()
    }
    return (
        <div>
        <div className='mainContainer'>
        <div className='Popup'>
            <div className='headerr'>
                <h5 className='join'>Join</h5>
                <span onClick={boxClose} className='closeX'>x</span>
            </div>
            <div className='container'>
              <p className='Para_1'>The National Inventory Exchange Network (NIE) is available at no cost for all distributors and manufacturers in industries established by NIE. Here are the industries that are presently served by the National Inventory Exchange Network</p>
              <div className='para_2_div'>
              <p>ABC Test Industry 2021 ABC Test Industry 2021ABC Test Industry 2021 wdsdasdsad asdfasfas asfdasfa afasfasf asfas<br/>
              Cable2 renamed to check the long name issue<br/>
              Industry_No Product renamed to check the issue with long name<br/>
              Iron Supplies<br/>
              Iron/Steel<br/>
              Mark's Test Industry<br/>
              MKs<br/>
              MT technologies<br/>
              MXM Another Import<br/>
              MXM MXM Industry<br/>
              MXM Test Industry<br/>
              MXM Test Industry Two<br/>
              MXM XM Industry<br/>
              North American Building Material<br/>
              PK<br/>
              Power Transmission<br/>
              PPPte<br/>
              ptda<br/>
              PTM01 Test Industry<br/>
              ST<br/>
              Steel and Iron services<br/>
              suraj industry<br/>
              SVG<br/>
              Tech<br/>
              Tech Supply Association<br/>
              Techno<br/>
              Techs Association<br/>
              test industru<br/>
              Test industry24<br/>
              Test k<br/>
              To Check3<br/>
              TPA<br/>
              TT industries<br/>
              uEfw- Wfw - efw<br/>
              uig<br/>
              WASDA<br/>
              WASDA<br/>
              xyz<br/>
              z424<br/>
              zgg<br/>
              </p>
              <p>If your particular industry is already established (on the list above) and you would like to register for a free NIE membership, please click the "Register" button below.</p>
              <p>Please <a href=''>contact us</a> if your industry is not yet included. We are in the process of establishing a beneficial network for all industries. We also are looking for experienced industry distributor consultants to assist us in this effort.</p>
              <button className='Register_button'>Register</button>
              <div className='empty'></div>
              </div>
              
            </div>
           
        </div>
        </div>
        </div>
    );
}

export default popupRg;