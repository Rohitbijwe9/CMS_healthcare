import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Contactdetails.css';

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
        <form className="mt-5 pt-5 mx-auto d-flex" onSubmit={handleSubmit(savedata)}>
          <div className="col-0"></div>
          <div className="form-row col-8">
            <div className="col-12 col-lg-6 m-auto">
              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_date ? 'is-invalid' : ''}`}
                type="date"
                placeholder="Appointment Date"
                {...register('appointment_date', { required: 'Appointment date is required' })}
              />
              {errors.appointment_date && <div className="invalid-feedback">{errors.appointment_date.message}</div>}

              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_time ? 'is-invalid' : ''}`}
                type="time"
                placeholder="Appointment Time"
                {...register('appointment_time', { required: 'Appointment time is required' })}
              />
              {errors.appointment_time && <div className="invalid-feedback">{errors.appointment_time.message}</div>}

              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_for ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Appointment For"
                {...register('appointment_for', { required: 'Recipient is required' })}
              />
              {errors.appointment_for && <div className="invalid-feedback">{errors.appointment_for.message}</div>}

              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.contact_details ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Contact Details"
                {...register('contact_details', { required: 'Contact details are required' })}
              />
              {errors.contact_details && <div className="invalid-feedback">{errors.contact_details.message}</div>}

              <textarea
                className={`rounded-0 form-control shadow-none mt-3 ${errors.reason_of_appointment ? 'is-invalid' : ''}`}
                placeholder="Reason Of Appointment"
                rows="5"
                {...register('reason_of_appointment', { required: 'Reason for the appointment is required' })}
              />
              {errors.reason_of_appointment && <div className="invalid-feedback">{errors.reason_of_appointment.message}</div>}
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