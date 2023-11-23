import React, { useState } from 'react';
import axios from 'axios';

export default function AppointmentStatus() {
  const [appointmentId, setAppointmentId] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleCheckStatus = () => {
    // Make an API request to check the status
    axios
      .get(`http://127.0.0.1:8000/hcapp/checkstatus/${appointmentId}/`)
      .then((response) => {
        setStatus(response.data.status);
        setError(''); // Clear the error message if status is successfully retrieved.
      })
      .catch(() => {
        setStatus(''); // Clear the status if there's an error.
        setError('No appointment found as per the provided data! Please check and try again.');
      });
  };

  return (
    <div>
        
      <div className="container mt-5 ">
            <div className="mt-5 pt-5 mb-5 pb-5">
                <div className=''>
                      
                    {
                      status && 

                          <div className="row gx-6 justify-content-center">
                            <div className="col-lg-6">
                                <div className="p-5" style={{backgroundColor: '#e7f1ff'}}>
                                    {/* <i className="dashboardicon bi bi-person-plus-fill"></i> */}
                                    <h5 className='text-danger'>Status : {status} </h5>
                                    <h6 className='pt-3'>
                                          Dear Patient,<br /><br />

                                          Thank you for providing us an opportunity to serve you. <br /><br />

                                          Our team has received your appointment application. The status of the same will be published on the website. <br /><br />

                                          Team CMS Healthcare <br />
                                          +91-1800-0000-00 <br />
                                          care@cmshealthcare.com
                                    </h6>
                                </div>
                            </div>
                          </div>
                          
                    }

                    {error && <center><h5 className='mb-5 mt-5' style={{ color: 'red' }}> {error}</h5></center>}
                </div>
            
            
       
                <div className="col-12 col-lg-4 m-auto">
                  <input
                    className='form-control  form-control-lg shadow-none rounded-0 mt-3 p-3'
                    type="number"
                    placeholder='Enter Appointment Id'
                    value={appointmentId}
                    onChange={(e) => setAppointmentId(e.target.value)}
                    required
                  />
                  <button 
                    onClick={handleCheckStatus} 
                    className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5 py-3' 
                    style={{backgroundColor : "#121831", fontSize : 22}}
                  >
                    Check Status
                  </button>
                </div>
            </div>
      </div>
    </div>
  );
}