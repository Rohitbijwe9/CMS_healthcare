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
        setError('Appointment not found');
      });
  };

  return (
    <div>
        
      <div className="contactdetails container-fluid form-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      
      
        <div className="form-row col-8">

            <div className='m-5'>
            {status && <center><h1 style={{ color: 'green' }}>{status}</h1></center>}
            {error && <center><h3 style={{ color: 'red' }}> {error}</h3></center>}
            </div>
            
            
       
          <div className="col-12 col-lg-6 m-auto d-flex justify-content-center align-items-center">
         
            <input
              className='form-control shadow-none rounded-3 mt-0 mr-3'
              type="number"
              placeholder='Enter Appointment Id'
              value={appointmentId}
              onChange={(e) => setAppointmentId(e.target.value)}
            />
            <button onClick={handleCheckStatus} className='btn btn-warning'>Check_Status</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
