import React from 'react'
import { NavLink } from 'react-router-dom'


function ShowUsers() {
  return (
    <>

        <div className="container mt-5 pt-5 d-flex flex-wrap justify-content-center mb-5">
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                        <h6 class="card-title text-light">All Users</h6>
                    <NavLink to='/showuser'>
                        <i className="appointmenticon bi bi-person"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                        <h6 class="card-title text-light">All Doctors</h6>
                    <NavLink to={"/adm/alldoctors"}>
                        <i className="appointmenticon bi bi-person-lines-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">All Patients</h6>
                    <NavLink to={'/showpatient'}>
                        <i className="appointmenticon bi bi-person-plus-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">All Nurses</h6>
                    <NavLink>
                        <i className="appointmenticon bi bi-person-check-fill"></i>
                    </NavLink>
                </div>
            </div>
            <div class="card text-dark bg-info m-3 border-0 px-5" style={{maxWidth : "18rem"}}>
                {/* <div class="card-header">Header</div> */}
                <div class="card-body text-center">
                    <h6 class="card-title text-light">All Wardboys</h6>
                    <NavLink>
                        <i className="appointmenticon bi bi-person-vcard-fill"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default ShowUsers