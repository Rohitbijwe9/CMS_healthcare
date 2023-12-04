import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';
import { UserContext } from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { current_user_link } from '../auth_components/billing_components/hc_application_components/UserLogin';
//import { user_type } from '../auth_components/billing_components/hc_application_components/UserLogin';
import { user_name } from '../auth_components/billing_components/hc_application_components/UserLogin';
import { user_image } from '../auth_components/billing_components/hc_application_components/UserLogin';



function Header( {userRole,setUserRole}) {

    const access = sessionStorage.getItem('access')
    const refresh = sessionStorage.getItem('refresh')
    const user_type = userRole
    console.log(userRole)
    console.log('link : ', current_user_link)
    console.log('u_type : ', user_type)
    console.log('u_name : ', user_name)
    console.log('u_image : ', user_image)
    const redirect = useNavigate()
    console.log(access)
    async function handleLogout(e) {
        e.preventDefault();
        try {
            const result = await axios.post("http://127.0.0.1:8000/logout/", { refresh }, {
                headers: { 'Authorization': 'Bearer ' + access }
            });
    
            sessionStorage.clear();
            setUserRole("");
            redirect('/');
            console.log('Logout successful', result.data);
        } catch (error) {
            console.error('Logout Error:', error);
        }
    }
    
     

    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state && user_type === "Doctor") {
            return (
                <>
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
                            <NavLink to="/doc/doctordash/" className="nav-item nav-link">Doctor Dashboard</NavLink>
                        </li>
                        
                        <li>
                            <hr />
                            <header className='text-center'>
                            {
                                user_image ?
                                    <img src={`http://localhost:8000${user_image}`} alt="..." height={130} width={130} className='rounded-circle my-4 border border-3' />
                                    :
                                    <i className="abouticon bi bi-shield-check"></i>
                            }
                                <h6>{user_type}</h6>
                                <h2>{user_name}</h2>
                                <button onClick={(e)=>handleLogout(e)} className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                                {/* <hr /> */}
                            </header>
                        </li>  
                </>
            )
        }
        else if (state && user_type === "Admin"){
            return (
                <>
                    <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
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
                                <NavLink to="/user" className="nav-item nav-link">
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
                        <li>
                            <hr />
                            <header className='text-center'>
                            {
                                user_image ?
                                    <img src={`http://localhost:8000${user_image}`} alt="..." height={130} width={130} className='rounded-circle my-4 border border-3' />
                                    :
                                    <i className="abouticon bi bi-shield-check"></i>
                            }
                                <h6>{user_type}</h6>
                                <h2>{user_name}</h2>
                                <button onClick={(e)=>handleLogout(e)} className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                                {/* <hr /> */}
                            </header>
                        </li>  
                </>
            )
        }
        else if (state && user_type === "Receptionist"){
            return (
                <>
                    <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown" >
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Receptionist
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
                            </ul>
                        </li>
                        <li>
                            <hr />
                            <header className='text-center'>
                            {
                                user_image ?
                                    <img src={`http://localhost:8000${user_image}`} alt="..." height={130} width={130} className='rounded-circle my-4 border border-3' />
                                    :
                                    <i className="abouticon bi bi-shield-check"></i>
                            }
                                <h6>{user_type}</h6>
                                <h2>{user_name}</h2>
                                <button onClick={(e)=>handleLogout(e)} className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                                {/* <hr /> */}
                            </header>
                        </li>  
                </>
            )
        }
        else if (state && user_type === "Nurse"){
            return (
                <>
                    <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown" >
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nurse
                            </NavLink>
                            <ul className="dropdown-menu dropdown-menu-dark text-center" style={{ background: '#121831' }}>
                            <li>
                                <NavLink className="nav-link" to="/adm/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <hr />
                            <header className='text-center'>
                            {
                                user_image ?
                                    <img src={`http://localhost:8000${user_image}`} alt="..." height={130} width={130} className='rounded-circle my-4 border border-3' />
                                    :
                                    <i className="abouticon bi bi-shield-check"></i>
                            }
                                <h6>{user_type}</h6>
                                <h2>{user_name}</h2>
                                <button onClick={(e)=>handleLogout(e)} className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                                {/* <hr /> */}
                            </header>
                        </li>  
                </>
            )
        }
        else if (state && user_type === "Wardboy"){
            return (
                <>
                    <li className="nav-item">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contactus/" className="nav-item nav-link">Contact Us</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown" >
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Wardboy
                            </NavLink>
                            <ul className="dropdown-menu dropdown-menu-dark text-center" style={{ background: '#121831' }}>
                            <li>
                                <NavLink className="nav-link" to="/adm/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <li>
                            <hr />
                            <header className='text-center'>
                            {
                                user_image ?
                                    <img src={`http://localhost:8000${user_image}`} alt="..." height={130} width={130} className='rounded-circle my-4 border border-3' />
                                    :
                                    <i className="abouticon bi bi-shield-check"></i>
                            }
                                <h6>{user_type}</h6>
                                <h2>{user_name}</h2>
                                <button onClick={(e)=>handleLogout(e)} className='btn btn-danger btn-sm mt-4 border-0'>Logout</button>
                                {/* <hr /> */}
                            </header>
                        </li>  
                </>
            )
        }
        else{
            return (
                <>
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
                            <NavLink to="userlogin/" className="nav-item nav-link">Login</NavLink>
                        </li>
                </>
            )
        }
    }
  return (
    <div>
        <nav className="navbar navbar-dark fixed-top" style={{ background: '#020f4a' }}>
            <div className="container-fluid text-center">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="not found" className='App-logo' /> 
                    <span className='small'>CMS Healthcare</span> 
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
                        
                        
                          <RenderMenu />

                          
                    </ul>
                    
                </div>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Header