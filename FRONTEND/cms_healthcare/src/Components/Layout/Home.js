import React from 'react'
import Slide1 from '../../Static/Images/slide1.jpg'
import Slide2 from '../../Static/Images/slide2.jpg'
import Slide3 from '../../Static/Images/slide3.jpg'
import Slide4 from '../../Static/Images/slide4.jpg'
import '../../Static/Css/Home.css'

function Home() {
  return (
    <>
    
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slide1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Slide2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Slide3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={Slide4} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div className="appointment text-center m-5">
            <h3 className='mb-4'>Emergency?</h3>
            <button className='btn btn-lg rounded-0 border-0 btn-primary p-3' style={{backgroundColor : "#121831"}}>
                Book an Appointment
            </button>
        </div>
    </div>
    </>
  )
}

export default Home