import React from 'react'
import { NavLink } from 'react-router-dom'

function PatientAdmin() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex flex-wrap justify-content-center mb-5">
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">All Patients</h6>
                    <NavLink to={"/showpatient"}>
                        <i className="appointmenticon bi bi-person-wheelchair"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Admit Patients</h6>
                    <NavLink to={"/patient"}>
                        <i className="appointmenticon bi bi-person-plus-fill"></i>
                    </NavLink>
                </div>
            </div>

            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Claims Related</h6>
                    <NavLink to={"/adm/claimdashboard"}>
                        <i className="appointmenticon bi bi-list-stars"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Patient Billing</h6>
                    <NavLink to={"/adm/billing"}>
                        {/* <i className="appointmenticon bi bi-receipt-cutoff"></i> */}
                        <i className="appointmenticon bi bi-currency-rupee"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "28rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Discharge Patient</h6>
                    <NavLink to={""}>
                        <i className="appointmenticon bi bi-person-walking"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default PatientAdmin