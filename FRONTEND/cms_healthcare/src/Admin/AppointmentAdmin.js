import React from 'react'
import '../../src/assets/css/Admin.css'
import { NavLink } from 'react-router-dom'



function AppointmentAdmin() {
  return (
    <>
        <div className="container mt-5 pt-5 d-flex flex-wrap justify-content-center mb-5">
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Pending Appointments</h6>
                    <NavLink to={"/admin/showpending"}>
                        <i className="appointmenticon bi bi-calendar"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Book Appointments</h6>
                    <NavLink to={"/contactdetails"}>
                        <i className="appointmenticon bi bi-calendar-plus"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Approved Appointments</h6>
                    <NavLink to={"/admin/showapprove"}>
                        <i className="appointmenticon bi bi-calendar-check"></i>
                    </NavLink>
                </div>
            </div>
        </div>

    </>
  )
}

export default AppointmentAdmin
