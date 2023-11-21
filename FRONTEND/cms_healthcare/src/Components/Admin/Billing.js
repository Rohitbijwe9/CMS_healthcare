import React from 'react'
import { NavLink } from 'react-router-dom'

function Billing() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex justify-content-around mb-5">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                <h6 class="card-title text-light">Hospital Expenses</h6>
                <NavLink to={"/hospitalexpensec"}>
                <i className="bi bi-currency-dollar" style={{ fontSize: '3rem' }}></i>
                </NavLink>
                </div>

            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Nominee Details</h6>
                    <NavLink to={"/nomineedetails"}>
                        <i className="bi bi-person"style={{ fontSize: '3rem' }}></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Insurence Payer Details</h6>
                    <NavLink to={"/insurencepayerdetails"}>
                        <i className="bi bi-wallet"style={{ fontSize: '3rem' }}></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Insurence</h6>
                    <NavLink to={"/insurence"}>
                        <i className="bi bi-shield"style={{ fontSize: '3rem' }}></i>
                    </NavLink>
                </div>

                
            </div>

            

            
            
        </div>

        <div className="container mt-5 pt-5 d-flex justify-content-around mb-5">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                <h6 class="card-title text-light">Ledger</h6>
                <NavLink to={"/ledger"}>
                <i className="bi bi-journal" style={{ fontSize: '3rem' }}></i>
                </NavLink>
                </div>



            </div>

            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                <h6 class="card-title text-light">PaymentInfo</h6>
                <NavLink to={"/paymentinfo"}>
                <i className="bi bi-credit-card" style={{ fontSize: '3rem' }}></i>
                </NavLink>
                </div>
            </div>

            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                <h6 class="card-title text-light">ServiceProviderBill</h6>
                <NavLink to={"/serviceproviderbill"}>
                <i className="bi bi-file-text" style={{ fontSize: '3rem' }}></i>
                </NavLink>
                </div>
            </div>

            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                <h6 class="card-title text-light">TrasactionDetails</h6>
                <NavLink to={"/TrasactionDetails"}>
                <i className="bi bi-cash" style={{ fontSize: '3rem' }}></i>
                </NavLink>
                </div>
            </div>
            




        </div>

        
        
    
    </>
  )
}

export default Billing