import React from 'react'
import { NavLink } from 'react-router-dom'

function AddMorePatientDetails() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex justify-content-around mb-5">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Add Address Details</h6>
                    <NavLink to={"/addressdetails"}>
                        <i className="appointmenticon bi bi-geo-alt-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Add Bank Details</h6>
                    <NavLink to={"/bankdetails"}>
                        <i className="appointmenticon bi bi-bank"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Add Claim Details</h6>
                    <NavLink to={"/claim"}>
                        <i className="appointmenticon bi bi-journal-text"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Add Claim Document details</h6>
                    <NavLink to={"/claimdocument"}>
                        <i className="appointmenticon bi bi-filetype-doc"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default AddMorePatientDetails