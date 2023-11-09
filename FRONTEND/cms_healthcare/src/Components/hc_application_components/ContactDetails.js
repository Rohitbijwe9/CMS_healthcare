import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
// import '../../assets/css/Contactdetails.css'
// import '../../assets/images/Appointment.jpg'



export default function ContactDetails() {
  const { register, handleSubmit } = useForm();
  const redirect=useNavigate();


  const SubmitData = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/hcapp/contactview/', data);
      console.log('Form data submitted successfully:', response.data);
      console.log(data)
      redirect('/appointment')
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="contactdetails container-fluid form-container">
      <form className="mt-5 pt-5 mx-auto" onSubmit={handleSubmit(SubmitData)}>
        
        <div className="form-row">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Book Appointment</h3>
          <div className="col-12 col-lg-4 m-auto">
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="text"
              placeholder="Mobile No"
              {...register('mobile_number')}
            />
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="text"
              placeholder="Alternate Mobile No"
              {...register('alternate_mobile_number')}
            />
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="email"
              placeholder="Email"
              {...register('email_identifier')}
            />
            <input
              className="form-control shadow-none rounded-0 mt-3"
              type="email"
              placeholder="Alternate Email"
              {...register('alternate_email_identifier')}
            />
          </div>
          <div className="col-12 col-lg-4 m-auto text-center mb-5">
            <NavLink to={"/appointment"}>
              <button
                type="submit"
                className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
                style={{ backgroundColor: "#121831" }}
              >
                Next
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}