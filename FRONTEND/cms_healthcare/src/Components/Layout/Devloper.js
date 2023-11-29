import React from 'react'
import Doctor1 from '../../assets/images/doctor1.jpg'

function Developers() {
  return (
    <>
    <div className='container text-center mb-5'>
      
      
      {/* <img className='mt-5 mb-5 img-fluid' src={AboutImg} alt="..." /> */}


        {/* Doctor list below */}

        <h1 className='bigheading'>Technical Team</h1>

        <div class="card mb-3 mt-5" >
            <div class="row g-0 m-5">
                <div class="col-md-4">
                <img src={Doctor1} class="img-fluid rounded-start" alt="..." className='rounded-circle' />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title mb-4">Full Name</h5>
                    <p class="card-text">More Details</p>
                    <p class="card-text">More Details</p>
                    <p class="card-text">More Details</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 mt-5" >
            <div class="row g-0 m-5">
                <div class="col-md-4">
                <img src={Doctor1} class="img-fluid rounded-start" alt="..." className='rounded-circle' />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title mb-4">Full Name</h5>
                    <p class="card-text">More Details</p>
                    <p class="card-text">More Details</p>
                    <p class="card-text">More Details</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Developers