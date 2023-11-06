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
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Slide3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Slide4} className="d-block w-100" alt="..." />
                </div>
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
            <button className='btn btn-lg rounded-0 border-0 btn-primary p-3' style={{backgroundColor : "#121831"}}>
                Book an Appointment
            </button>
        </div>
    </div>
    </>
  )
}

export default Home