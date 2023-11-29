import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/Footer.css'


function Footer() {
  return (
    <div>
        <footer className="footer text-light " style={{ background: '#121831' }}>
            <div className="container pt-5 pb-5 d-flex flex-wrap copyright">
                
                <div className='me-2 text-center mb-5'>
                    <span className='px-3'>Our Site </span> 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d484247.9912592107!2d73.8567437!3d18.520430300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698233687311!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className='mt-2'
                    />
                </div>

                <div className=" ms-2 d-flex flex-wrap align-items-center flex-column text-center">
                    <NavLink to={"/meetourdoctors"} className="text-light text-decoration-none"><span>Meet Our Doctors</span></NavLink>
                    <NavLink to={"/developers"} className="text-light text-decoration-none"><span>Developers</span></NavLink>
                    <span>Help</span>
                    <span>License</span>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                    
                    <span className='m-4'>
                        <NavLink><i class="bi bi-facebook m-2"></i></NavLink>
                        <NavLink><i class="bi bi-whatsapp m-2"></i></NavLink>
                        <NavLink><i class="bi bi-twitter-x m-2"></i></NavLink>
                        <NavLink><i class="bi bi-linkedin m-2"></i></NavLink>
                        <NavLink><i class="bi bi-instagram m-2"></i></NavLink>
                    </span>
                    <span>
                        Copyright © 2023, CMS Healthcare. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer