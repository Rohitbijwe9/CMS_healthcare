import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import Slide4 from '../../assets/images/slide4.jpg';
import '../../assets/css/Home.css';
import { user_type } from '../auth_components/billing_components/hc_application_components/UserLogin';
function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideImages = [Slide1, Slide2, Slide3, Slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlide = activeSlide + 1;
      
      // Check if it's the last slide, reset to the first slide
      if (nextSlide === slideImages.length) {
        setActiveSlide(0);
      } else {
        setActiveSlide(nextSlide);
      }
    }, 2000); // 2 seconds in milliseconds

    return () => {
      // Cleanup the timer when the component unmounts
      clearInterval(timer);
    };
  }, [activeSlide, slideImages.length]);

  return (
    <>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5">
          <div className="carousel-inner">
            {slideImages.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
                <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="appointment text-center m-5">
          <h3 className='mb-4'>Emergency?</h3>
          <NavLink to={"/contactdetails/"}>
            <button className='btn btn-lg rounded-0 border-0 btn-primary p-3 m-3' style={{ backgroundColor: "#121831" }}>
              Book an Appointment
            </button>
          </NavLink>
          <NavLink to={"/astatus"}>
            <button className='btn btn-lg rounded-0 border-0 btn-primary p-3 m-3' style={{ backgroundColor: "#121831" }}>
              Check Appointment Status
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
