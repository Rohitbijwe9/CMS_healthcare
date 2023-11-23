import React from 'react'
import Doctor1 from '../../Static/Images/doctor1.jpg'

function MeetOurDoctors() {
  return (
    <>
    <div className='container text-center mb-5 mt-5 pt-5'>
      
      
      {/* <img className='mt-5 mb-5 img-fluid' src={AboutImg} alt="..." /> */}

      <div className="row gx-5 mt-5">
        <div className="col">
          <div className="p-3 bg-light">
          <i className="doctoricon bi bi-globe-central-south-asia"></i>
            <h2>10+</h2>
            <h6>Countries</h6>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="doctoricon bi bi-person-add"></i>
            <h2>30 Lac+</h2>
            <h6>Patients</h6>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="doctoricon bi bi-bag-plus"></i>
            <h2>100+</h2>
            <h6>Doctor partners</h6>
          </div>
        </div>
      </div>

        {/* Doctor list below */}

        <h1 className='bigheading'>Meet our doctors</h1>

        <div class="card mb-3 mt-5" >
            <div class="row g-0 m-5">
                <div class="col-md-4">
                <img src={Doctor1} class="img-fluid rounded-start" alt="..." className='rounded-circle' />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title mb-4">Doctor Name</h5>
                    <p class="card-text">Department</p>
                    <p class="card-text">More details...</p>
                    <p class="card-text">More details...</p>
                    <p class="card-text">More details...</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MeetOurDoctors