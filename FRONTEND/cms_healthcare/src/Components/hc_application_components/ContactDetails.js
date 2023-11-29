import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Contactdetails.css';
import '../../assets/images/Appointment.jpg';

export default function ContactDetails() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/hcapp/contactview/', data);

      console.log(response.data.contact_details_id);
      alert(`${response.data.contact_details_id} is your contact reference id`);

      console.log('Form data submitted successfully:', response.data);
      navigate('/appointment');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="contactdetails container-fluid form-container">
      <form className="mt-5 pt-5 mx-auto d-flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-0"></div>
        <div className="form-row col-8">
          <div className="col-12 col-lg-6 m-auto">
            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.mobile_number ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Mobile No"
              {...register('mobile_number', { required: 'Mobile Number is required' })}
            />
            {errors.mobile_number && <p className="invalid-feedback">{errors.mobile_number.message}</p>}
            
            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.alternate_mobile_number ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Alternate Mobile No"
              {...register('alternate_mobile_number', { required: 'Alternate Mobile Number is required' })}
            />
            {errors.alternate_mobile_number && <p className="invalid-feedback">{errors.alternate_mobile_number.message}</p>}
            
            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.email_identifier ? 'is-invalid' : ''}`}
              type="email"
              placeholder="Email"
              {...register('email_identifier', { required: 'Email is required' })}
            />
            {errors.email_identifier && <p className="invalid-feedback">{errors.email_identifier.message}</p>}
            
            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.alternate_email_identifier ? 'is-invalid' : ''}`}
              type="email"
              placeholder="Alternate Email"
              {...register('alternate_email_identifier', { required: 'Alternate Email is required' })}
            />
            {errors.alternate_email_identifier && <p className="invalid-feedback">{errors.alternate_email_identifier.message}</p>}
          </div>
          <div className="col-12 col-lg-6 m-auto text-center mb-5">
            <button
              type="submit"
              className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
              style={{ backgroundColor: "#121831" }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
