import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='main'>
    
    <div className="first">
    <div className="a1"><h1 className='s1'>WHY</h1></div>
    <div className="a2"><h1 className='s2'>WHAT</h1></div>
    <div className="a3"><h1 className='s3'>HOW</h1></div>

    </div>
    <div className="second">
      <div className="one">
      <div className='h1'>NIE</div>
      <h5>You make money by moving inventory, not storing it. Every distributor has a dead-stock graveyard on their property.</h5>
            <p>When your inventory doesn't move for various reasons it adds to your holding cost. It's a cash flow killer. And while Inventory management software keeps track of sales and other information like the date of expiry, allowable return dates, and so on, a certain amount of dead stock is inevitable despite taking measures. By joining the NIE network you can mitigate the impact of dead-stock in a manner that is separate and complimentary to your Inventory management software</p>
      </div>
      <div className="two">
      <div className='h2'>WE OFFER</div>
            <h5>Distributors wishing to re-market unused products use the NIE platform to post items they wish to offer to fellow members of the NIE..</h5>
            <p>The NIE application features a negotiation algorithm that protects the identity of the parties until a buy/sell agreement has been made and completes the transaction with best practice payment and shipping ergonomics,</p>
            <p>The data fields guide you through a product posting which then become agnostically identified on the respective product indices for buyers to consider. Once a buyer has declared intent, a two-way exchange begins the process I completing a transaction according to the requirements of both parties.</p>
      </div>
      <div className="three">
      <div className='h3'>TO EXCHANGE</div>
            <h5> Using the exchange platform is as easy as entering data in any GUI database..</h5>
              <p>The data fields guide you through a product posting which then becomes agnostically identified on the respective product indices for buyers to consider. Once a buyer has declared intent, a two-way exchange begins the process of completing a transaction according to the requirements of both parties Transaction processing and shipping specifics complete the deal and the seller's "SKU is deleted
              </p>
      </div>

    </div>
    <div className="third">
      <div className="upper">
          <div className="u1">
            <h1>NIE NEWS</h1>
          </div>
          <div className="u2">
            <span className="date">June 8,2021</span>
            <p>Distributor's wishing to remark inventory... <span className='readmore'>readmore..</span></p>
            <span className="date">May 26,2021</span>
            <p>You make a money by moving inventory... <span className='readmore'>readmore...</span></p>
            <span className="date">May 26,2021</span>
            <p>You make a money by moving inventory... <span className='readmore'>readmore...</span></p>
          </div>
      </div>
      <div className="lower">
            <div className='details'>Phone</div>
            <div className='details'>(612)800-0100</div>
            <div className='details'>Email</div>
            <div className='details'>info@nationalinventryexchange.com</div>
            <div className='details'>Address</div>
            <div className='details'>National Inventry Exchange <br />
                 Po Box- 517 <br />
                 Shokopee,MN 55379.
            </div>
            <div className="icon">
              <div><i class="fa-brands fa-facebook-f"></i></div>
              <div><i class="fa-brands fa-twitter"></i></div>
              <div><i class="fa-brands fa-google"></i></div>
            
            </div>
      </div>

    </div>

    </div>
  )
}

export default Home