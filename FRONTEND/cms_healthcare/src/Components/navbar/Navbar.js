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
      
    </footer>
  );
};


export default function GuestNavbar() {
  return (
    <>
      <div>
      <Header />
      <div className="container" style={{ marginTop: '60px',height:'500px' }}><br/>
       
        


        
      </div>
      <Footer/> {}
    </div>
    
    </>
  )
}


