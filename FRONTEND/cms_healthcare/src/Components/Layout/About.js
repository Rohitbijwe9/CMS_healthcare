import React from 'react'
import '../../Static/Css/About.css'
import AboutImg from '../../Static/Images/about.jpg'



function About() {
  return (

    <>
    <div className='container text-center mb-5'>
      <h1 className='bigheading'>Quality Healthcare Made Simple</h1>
      <h1>Our Mission</h1>
      <p className='mt-3'>We are on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>

      <img className='mt-5 mb-5 img-fluid' src={AboutImg} alt="..." />

      <h1>Our approach to healthcare</h1>
      <p className='mb-5'>Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
      
      {/* 0000000000 */}

      <div className="row gx-5">
        <div className="col">
          <div className="p-3 bg-light">
          <i className="abouticon bi bi-person-badge"></i>
            <h1>Connect</h1>
            <span className='small'>We understand healthcare goes beyond signs, symptoms, diagnosis, and treatment. It’s about the deep connection between doctors and patients that leads to continuous care and sustained, better outcomes.</span>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="abouticon bi bi-shield-check"></i>
            <h1>Trust</h1>
            <span className='small'>Practo works on trust. We are aware of the responsibility placed on us by 30 crore+ patients and over a lakh doctors. We always have and always will do everything we possibly can to uphold this trust.</span>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="abouticon bi bi-eye"></i>
            <h1>Transparency</h1>
            <span className='small'>We believe in full disclosure. We believe in communicating openly and honestly, and holding ourselves to the highest ethical standards.</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About