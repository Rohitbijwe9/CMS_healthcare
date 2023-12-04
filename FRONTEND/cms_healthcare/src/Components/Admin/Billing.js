import React from 'react'
import { NavLink } from 'react-router-dom'

function PatientBilling() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex flex-wrap justify-content-center mb-5">
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Hospital Expenses</h6>
                    <NavLink to={"/hospitalexpensec"}>
                        <i className="appointmenticon bi bi-hospital-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Nominee Details</h6>
                    <NavLink to={"/nomineedetails"}>
                        <i className="appointmenticon bi bi-file-earmark-person"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Bank Details</h6>
                    <NavLink to={"/bankdetails"}>
                        <i className="appointmenticon bi bi-bank"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Address Details</h6>
                    <NavLink to={"/addressdetails"}>
                        <i className="appointmenticon bi bi-geo-alt-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Ledger Information</h6>
                    <NavLink to={"/ledger"}>
                        <i className="appointmenticon bi bi-file-earmark-ruled-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Payment Information</h6>
                    <NavLink to={"/paymentinfo"}>
                        <i className="appointmenticon bi bi-credit-card"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Service Provider Bill</h6>
                    <NavLink to={"/serviceproviderbill"}>
                        <i className="appointmenticon bi bi-receipt"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Transaction Details</h6>
                    <NavLink to={"/TrasactionDetails"}>
                        <i className="appointmenticon bi bi-arrow-left-right"></i>
                    </NavLink>
                </div>
            </div>
            
        </div>
    
    </>
  )
}

export default PatientBilling