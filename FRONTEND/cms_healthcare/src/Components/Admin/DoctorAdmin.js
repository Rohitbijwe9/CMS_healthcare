import React from 'react'
import { NavLink } from 'react-router-dom'

function DoctorAdmin() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex justify-content-around mb-5">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                        <h6 class="card-title text-light">All Doctors</h6>
                    <NavLink to={"/admin/alldoctors"}>
                        <i className="appointmenticon bi bi-person-lines-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Register Doctor</h6>
                    <NavLink to={"/admin/registerdoctor"}>
                        <i className="appointmenticon bi bi-person-plus-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Approve Doctor</h6>
                    <NavLink to={"/admin/approvedoctor"}>
                        <i className="appointmenticon bi bi-person-check-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Doctor Specialization</h6>
                    <NavLink to={"/admin/doctorspecialization"}>
                        <i className="appointmenticon bi bi-person-vcard-fill"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default DoctorAdmin 