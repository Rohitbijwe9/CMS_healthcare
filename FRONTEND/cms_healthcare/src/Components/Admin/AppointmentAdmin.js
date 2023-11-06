import React from 'react'
import '../../Static/Css/Admin.css'



function AppointmentAdmin() {
  return (
    <>
        <div className="container mt-5 pt-5 d-flex justify-content-around">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">View Appointments</h6>
                    <i className="appointmenticon bi bi-calendar"></i>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Book Appointments</h6>
                    <i className="appointmenticon bi bi-calendar-plus"></i>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Approve Appointments</h6>
                    <i className="appointmenticon bi bi-calendar-check"></i>
                </div>
            </div>
        </div>

    </>
  )
}

export default AppointmentAdmin