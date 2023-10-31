import React from 'react'
import { NavLink } from 'react-router-dom';

// Header component
const Header = () => {
  return (
    <div className="bs-example">


      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: '#020f4a' }}>
      <img src="cmslogo.png" alt="not found" width={180} height={70} />

        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav">
            <NavLink to="/doctorclick" className="nav-item nav-link">LOGIN</NavLink>
          </div>

          <div className="navbar-nav">
            <NavLink to="aboutus/" className="nav-item nav-link">About Us</NavLink>
            <NavLink to="/contactus" className="nav-item nav-link">Contact Us</NavLink>
            <NavLink to="/contactus" className="nav-item nav-link">Home</NavLink>

          </div>
        </div>
      </nav>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="footer" style={{ background: '#2B2F32', color: 'white', padding: '10px' }}>
      <div className="container">
        <div className="text-center">© 2023 Hospital Management<br/>

       

        
        
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d484247.9912592107!2d73.8567437!3d18.520430300000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698233687311!5m2!1sen!2sin"
        width="200"
        height="70"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </footer>
  );
};


export default function GuestNavbar() {
  return (
    <>
      <div>
      <Header />
      <div className="container" style={{ marginTop: '60px',height:'500px' }}><br/>
       
        <center><h1>Emergency?</h1><button className='btn btn-warning'>Take Appointment</button></center><br/>
        


        
      </div>
      <Footer/> {}
    </div>
    
    </>
  )
}


