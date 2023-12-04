import React,{useEffect, useState} from 'react'
import axios from 'axios';
// import Doctor1 from '../../assets/images/doctor1.jpg'
import '../../assets/css/About.css'

function MeetOurDoctors() {
  
  const [users, setUsers] = useState([]);
   
  async function fetchData()
  {
      const result= await axios.get('http://localhost:8000/user/');
      //console.log(result.data);
      setUsers(result.data)
  }
  useEffect(()=>{
      fetchData()
  },[])

  return (
    <>
    <div className='container text-center mb-5 mt-5 pt-5'>
      
      
      {/* <img className='mt-5 mb-5 img-fluid' src={AboutImg} alt="..." /> */}

      <div className="row gx-5 mt-5">
        <div className="col">
          <div className="p-3 bg-light">
          <i className="doctoricon bi bi-globe-central-south-asia" style={{fontSize:140}}></i>
            <h2>10+</h2>
            <h6>Countries</h6>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="doctoricon bi bi-person-add" style={{fontSize:140}}></i>
            <h2>30 Lac+</h2>
            <h6>Patients</h6>
          </div>
        </div>
        <div className="col">
          <div className="p-3 bg-light">
            <i className="doctoricon bi bi-bag-plus" style={{fontSize:140}}></i>
            <h2>100+</h2>
            <h6>Doctor partners</h6>
          </div>
        </div>
      </div>

        {/* Doctor list below */}

        <h1 className='bigheading'>Meet our Doctors</h1>

        {
                    users.map(obj=>{
                        if (obj.user_type === "Doctor"){

                        return(

                            <div class="card mb-3 mt-5" >
                                <div class="row g-0 m-5">
                                    <div class="col-md-4">
                                    <img src={`http://localhost:8000${obj.user_image}`} alt='...' width="300px" height="300px" className='rounded-circle'/>
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                          <h5 class="card-title mb-4">{obj.first_name} {obj.last_name}</h5>
                                          <p class="card-text">Doctor code : {obj.user_code}</p>
                                          <p class="card-text">Date Joined : {obj.created_on.slice(0, 10)}</p>
                                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                             )
                        }
                    })
          }
    </div>
    </>
  )
}

export default MeetOurDoctors