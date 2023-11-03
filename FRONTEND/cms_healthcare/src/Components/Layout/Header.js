import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

function Header() {
  return (
    <div>

        <div className="bs-example">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: '#020f4a' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="not found" height={30} />  
                    </NavLink>

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="" className="nav-item nav-link">About Us</NavLink>
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink to="/doctorclick" className="nav-item nav-link">Login</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <br/><br/>
        <br/><br/>
    </div>
   
    
    
  )
}

export default Header