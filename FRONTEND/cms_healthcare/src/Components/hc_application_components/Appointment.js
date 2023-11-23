import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Appointment() {
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
  const redirect = useNavigate();

  const validateAppointmentTime = (time) => {
    // Extract hours, minutes, and AM/PM from the time
    const [hours, minutes, ampm] = time.split(/:| /);

    // Convert hours to 24-hour format for comparison
    const hour = parseInt(hours, 10) + (ampm === 'PM' ? 12 : 0);

    // Check if time is within the allowed range (12:00 PM - 5:00 PM)
    if (hour < 12 || (hour === 12 && minutes < 0) || hour > 16) {
      setError('appointment_time', {
        type: 'validate',
        message: 'Appointment time must be between 12:00 PM and 5:00 PM',
      });
      return false;
    }

    clearErrors('appointment_time');
    return true;
  };

  const validateAppointmentDate = (date) => {
    // Parse the provided date
    const selectedDate = new Date(date);
    const currentDate = new Date();

    // Set the current time to 12:00 PM
    currentDate.setHours(12, 0, 0, 0);

    // Check if the selected date is in the past or earlier on the same day
    if (selectedDate < currentDate) {
      setError('appointment_date', {
        type: 'validate',
        message: 'Please select a future date',
      });
      return false;
    }

    clearErrors('appointment_date');
    return true;
  };

  async function savedata(data) {
    const isTimeValid = validateAppointmentTime(data.appointment_time);
    const isDateValid = validateAppointmentDate(data.appointment_date);

    if (isTimeValid && isDateValid) {
      const response = await axios.post('http://127.0.0.1:8000/hcapp/Appointmentview/', data);
      console.log('Form submitted with data:', data);

      redirect('/');
    }
  }

  return (
    <>
      <div className="contactdetails container-fluid form-container">
        <form className="mt-5 pt-5 mx-auto" onSubmit={handleSubmit(savedata)}>
          <div className="form-row">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Book Appointment</h3>
            <div className="col-12 col-lg-4 m-auto">
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
                placeholder="Contact Reference"
                {...register('contact_details')}
              />

              {/* dropdown starts */}
            {
              <select name="contact" placeholder="Contact Reference" className="form-control shadow-none rounded-0 mt-3" id="id_department">
                    {
                      option.map(obj=>{
                                 

                                <option value="Dermatologists">{obj.contact_details}</option>
                              
 
                            })
                    }

                    </select>
                    }
              {/* dropdown ends */}

              <textarea
                className="rounded-0 form-control shadow-none mt-3"
                placeholder="Reason Of Appointment"
                rows="5"
                {...register('reason_of_appointment')}
              ></textarea>
            </div>
            <div className="col-12 col-lg-4 m-auto text-center mb-5">
              <button
                type="submit"
                className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
                style={{ backgroundColor: "#121831" }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}