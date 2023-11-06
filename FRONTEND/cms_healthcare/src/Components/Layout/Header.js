import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';


function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: '#020f4a' }}>
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
        </nav>
    </div>
  )
}

export default Header