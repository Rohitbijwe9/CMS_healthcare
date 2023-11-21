import React from 'react'
import { NavLink } from 'react-router-dom'



function Sidebar() {
  return (
    <div>
        <div className="container-fluid mt-5 pt-3">
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar text-center">
                    <div className="position-sticky ">
                        <header className='text-center'>
                            {/* <img src="#" alt="avatar" /> */}
                            <i className="abouticon bi bi-shield-check"></i>
                            <h5>Admin</h5>
                            <h2>Rohit</h2>
                            <button className='btn btn-danger btn-sm mt-5'>Logout</button>
                            <hr />
                        </header>
                        <ul className="nav flex-column mb-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/admin/doctors">
                                    Doctors
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/patients">
                                    Patients
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/appointments">
                                    Appointment
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/billing">
                                  Patient Billing
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/patientreg/">
                                  Patient Registration
                                </NavLink>
                            </li>
                            
                        </ul>
                        {/* <hr /> */}
                    </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 text-center">
                    {/* <!-- Main content goes here --> */}
                    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Button with data-bs-target
                    </button> */}
                    <h3 className='bg-info text-light p-3'>CMS Healthcare</h3>
                </main>
            </div>
        </div>

    </div>
  )
}

export default Sidebar