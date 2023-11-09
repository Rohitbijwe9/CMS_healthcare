import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';



function Header() {
  return (
    <div>
        <nav class="navbar navbar-dark fixed-top" style={{ background: '#020f4a' }}>
            <div class="container-fluid text-center">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="not found" className='App-logo' />  
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header" style={{ background: '#121831' }}>
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" style={{ background: '#121831' }}>

                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li> */}
                        {/* <header className='text-center'>
                            <i className="abouticon bi bi-shield-check"></i>
                            <h6>Admin</h6>
                            <h2>Dhananjay</h2>
                            <button className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                        </header> */}
                        {/* <hr /> */}
                        <li class="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="login/" className="nav-item nav-link">Login</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="signup/" className="nav-item nav-link">Signup</NavLink>
                        </li>
                        
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-center" style={{ background: '#121831' }}>
                            <li>
                                <NavLink className="nav-link" to="/admin/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/admin/doctors">
                                    Doctors
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/admin/patients">
                                    Patients
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/admin/appointments">
                                    Appointments
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <hr />
                        <header className='text-center'>
                            {/* <img src="#" alt="avatar" /> */}
                            <i className="abouticon bi bi-shield-check"></i>
                            <h6>Admin</h6>
                            <h2>Dhananjay</h2>
                            <button className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                            {/* <hr /> */}
                        </header>
                        {/* <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2 rounded-0 p-1" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-success rounded-0 btn-sm" type="submit">Search</button>
                        </form> */}
                    </ul>
                    
                </div>
                </div>
            </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: '#020f4a' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="not found" height={30} />  
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="true">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav> */}
    </div>
  )
}

export default Header