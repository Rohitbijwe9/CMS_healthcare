import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Contactdetails.css';
import '../../assets/images/Appointment.jpg';

export default function Appointment() {
  const { register, handleSubmit } = useForm();
  const redirect = useNavigate();

  async function savedata(data) {
    
      const response = await axios.post('http://127.0.0.1:8000/hcapp/Appointmentview/', data);

        redirect('/');
    
  
  }

  return (
    <>
      <div className="contactdetails container-fluid form-container">
        <form className="mt-5 pt-5 mx-auto d-flex" onSubmit={handleSubmit(savedata)}>
          <div className="col-0"></div>
          <div className="form-row col-8">
            <div className="col-12 col-lg-6 m-auto">
              <input
                className="form-control shadow-none rounded-0 mt-3"
                type="date"
                placeholder="Appointment Date"
                {...register('appointment_date')}
              />
              <input
                className="form-control shadow-none rounded-0 mt-3"
                type="time"
                placeholder="Appointment Time"
                {...register('appointment_time')}
              />
              <input
                className="form-control shadow-none rounded-0 mt-3"
                type="text"
                placeholder="Appointment For"
                {...register('appointment_for')}
              />
              
              <input
                className="form-control shadow-none rounded-0 mt-3"
                type="text"
                placeholder="Contact Details"
                {...register('contact_details')}
              />

              <textarea
                className="rounded-0 form-control shadow-none mt-3"
                placeholder="Reason Of Appointment"
                rows="5"
                {...register('reason_of_appointment')}
              ></textarea>
            </div>
            <div className="col-12 col-lg-6 m-auto text-center mb-5">
              <button
                type="submit"
                className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
                style={{ backgroundColor: "#121831" }}
              >
                BOOK
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
