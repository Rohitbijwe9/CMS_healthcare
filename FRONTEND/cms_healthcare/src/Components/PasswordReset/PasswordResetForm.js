

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// import '../../assets/css/Contactdetails.css'
// import '../../assets/images/Appointment.jpg'



export default function PasswordResetForm() {
  
  const { register, handleSubmit,formState,formState: { errors, isSubmitSuccessful } } = useForm();
  
  const [message, setMessage] = useState('');

  const validationRules = {
    email: {
      required: 'Email is required',
      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
    },
    username: { required: 'Username is required' },
  };

  const displayValidationErrors = (field) => {
    return errors[field] ? <span style={{ color: 'red', fontSize: '14px' }}>{errors[field].message}</span> : null;
  };
  


  const SubmitData = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/password-request', data);
      console.log('Form data submitted successfully:', response.data);
      console.log(data)
      setMessage('An email with password reset instructions has been sent to you.');
      
      //navigate('/password-request')
    } catch (error) {
      console.error('Error submitting form data:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contactdetails container-fluid form-container">
      <form className="mt-5 pt-5 mx-auto" onSubmit={handleSubmit(SubmitData)}>
        
        <div className="form-row">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Reset Password Request</h3>
          <div className="col-12 col-lg-4 m-auto">
            
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="email"
              placeholder="Email"  
               {...register('email',validationRules.email)}
            />
            {displayValidationErrors('email')}
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="text"
              placeholder="Username"
               {...register('username',validationRules.username)}
            />
            {displayValidationErrors('username')}
          </div>
          <div className="col-12 col-lg-4 m-auto text-center mb-5">
            
              <button
                type="submit"
                className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
                style={{ backgroundColor: "#121831" }}
              >
                Reset Password
              </button>
              
            {formState.isSubmitSuccessful &&(
            <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
            ) }
          </div>
        </div>
      </form>
    </div>
  );
}

