import React from 'react'
import { NavLink } from 'react-router-dom'

function ClaimDashboard() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex flex-wrap justify-content-center mb-5">
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Insurance Payer Details</h6>
                    <NavLink to={"/insurencepayerdetails"}>
                        <i className="appointmenticon bi bi-person-lines-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Insurance Details</h6>
                    <NavLink to={"/insurence"}>
                        <i className="appointmenticon bi bi-receipt"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Claim</h6>
                    <NavLink to={"/claim"}>
                        <i className="appointmenticon bi bi-arrow-left-right"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Claim Documents</h6>
                    <NavLink to={"/claimdocument"}>
                        <i className="appointmenticon bi bi-file-earmark-medical"></i>
                    </NavLink>
                </div>
            </div>
            
        </div>
    
    </>
  )
}

export default ClaimDashboard