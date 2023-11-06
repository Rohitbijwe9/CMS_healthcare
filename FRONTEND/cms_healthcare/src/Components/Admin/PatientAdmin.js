import React from 'react'

function PatientAdmin() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex justify-content-around mb-5">
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">All Patients</h6>
                    <i className="appointmenticon bi bi-person-wheelchair"></i>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Admit Patients</h6>
                    <i className="appointmenticon bi bi-person-plus-fill"></i>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Approve Patients</h6>
                    <i className="appointmenticon bi bi-person-check-fill"></i>
                </div>
            </div>
            <div class="card text-dark bg-info mb-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">Discharge Patients</h6>
                    <i className="appointmenticon bi bi-person-raised-hand"></i>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default PatientAdmin