import React from 'react'
import { NavLink } from 'react-router-dom'

function DoctorDash() {
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
                <div class="card-body text-center">
                    <h6 class="card-title text-light">My Patients</h6>
                    <NavLink to={"/doc/appointmentlist"}>
                        <i className="appointmenticon bi bi-check-all"></i>
                    </NavLink>
                </div>
            </div>
            
            
        </div>
    
    </>
  )
}

export default DoctorDash