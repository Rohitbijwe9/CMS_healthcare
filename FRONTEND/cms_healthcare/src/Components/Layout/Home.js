import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slide1 from '../../assets/images/slide1.jpg';
import Slide2 from '../../assets/images/slide2.jpg';
import Slide3 from '../../assets/images/slide3.jpg';
import Slide4 from '../../assets/images/slide4.jpg';
import '../../assets/css/Home.css';

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideImages = [Slide1, Slide2, Slide3, Slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlide = (activeSlide + 1) % slideImages.length;
      setActiveSlide(nextSlide);
    }, 2000); // 2 seconds in milliseconds

    return () => {
      // Cleanup the timer when the component unmounts
      clearInterval(timer);
    };
  }, [activeSlide]);

  return (
    <>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {slideImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
              >
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="appointment text-center m-5">
        <div class="container">
        <h3 class="mb-4"><i>Emergency?</i></h3>
        <a href="/contactdetails/">
            <button class="btn btn-info m-2 " >Book an Appointment</button>
        </a>

        <a href='/astatus'>
        <button class="btn btn-info m-3 " >Check Status</button>
        </a>
    </div>
        </div>
      </div>
    </>
  );
}

export default Home;
