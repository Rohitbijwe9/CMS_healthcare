import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';



function Header() {
  return (
    <div>
        <nav className="navbar navbar-dark fixed-top" style={{ background: '#020f4a' }}>
            <div className="container-fluid text-center">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="not found" className='App-logo' /> 
                    <span style={{fontFamily: 'sans-serif', fontSize: '10px'}}>CMS Healthcare</span> 
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header" style={{ background: '#121831' }}>
                    <h6 className="offcanvas-title text-center" id="offcanvasDarkNavbarLabel">CMS Healthcare</h6>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" style={{ background: '#121831' }}>

                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        
                        <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/userlogin" className="nav-item nav-link">Login</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/doc/doctordash/" className="nav-item nav-link">Doctor Dashboard</NavLink>
                        </li>
                        
                        
                        <li className="nav-item dropdown" >
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                            </NavLink>
                            <ul className="dropdown-menu dropdown-menu-dark text-center" style={{ background: '#121831' }}>
                            <li>
                                <NavLink className="nav-link" to="/adm/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink className="nav-link" to="/adm/patients">
                                    Patients
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/adm/appointments">
                                    Appointments
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/user/" className="nav-item nav-link">
                                    Add User
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/adm/showusers">
                                    Show Users
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
                        {/* <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2 rounded-0 p-1" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success rounded-0 btn-sm" type="submit">Search</button>
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

export default Header