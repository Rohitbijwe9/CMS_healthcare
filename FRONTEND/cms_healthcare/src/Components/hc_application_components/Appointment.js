import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/hcapp/f_user_ids/');
      setOptions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isDateRequired = (date) => !!date;

  const isDateFuture = (date) => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Ensure at least one day in the future
    return new Date(date) >= today;
  };

  const isTimeRequired = (time) => !!time;

  const isTimeValid = (time) => {
    const startTime = new Date(`01/01/2000 ${time}`);
    const endTime = new Date(`01/01/2000 17:00`); // 5:00 PM
    return startTime >= new Date('01/01/2000 12:00') && startTime <= endTime;
  };

  const onSubmit = async (data) => {
    try {
      if (!isDateRequired(data.appointment_date)) {
        setError('Appointment Date is required.');
        return;
      }

      if (!isDateFuture(data.appointment_date)) {
        setError('Please select a future date for the appointment.');
        return;
      }

      if (!isTimeRequired(data.appointment_time)) {
        setError('Appointment Time is required.');
        return;
      }

      if (!isTimeValid(data.appointment_time)) {
        setError('Appointment time must be between 12:00 PM and 5:00 PM.');
        return;
      }

      await axios.post('http://127.0.0.1:8000/hcapp/Appointmentview/', data);
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="contactdetails container-fluid form-container">
        <form className="mt-5 pt-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <h3 className="text-center mb-5" style={{ color: "#020f4a" }}>
              Book Appointment
            </h3>
            <div className="col-12 col-lg-4 m-auto">
              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_date ? 'is-invalid' : ''}`}
                type="date"
                placeholder="Appointment Date"
                {...register('appointment_date', {
                  required: { value: true, message: 'Appointment Date is required.' },
                  validate: { futureDate: isDateFuture },
                })}
              />
              {errors.appointment_date && (
                <p className="invalid-feedback">{errors.appointment_date.message}</p>
              )}

              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_time ? 'is-invalid' : ''}`}
                type="time"
                placeholder="Appointment Time"
                {...register('appointment_time', {
                  required: { value: true, message: 'Appointment Time is required.' },
                  validate: { validTime: isTimeValid },
                })}
              />
              {errors.appointment_time && (
                <p className="invalid-feedback">{errors.appointment_time.message}</p>
              )}

              <input
                className={`form-control shadow-none rounded-0 mt-3 ${errors.appointment_for ? 'is-invalid' : ''}`}
                type="text"
                placeholder="Appointment For"
                {...register('appointment_for', { required: 'Appointment For is required' })}
              />
              {errors.appointment_for && (
                <p className="invalid-feedback">{errors.appointment_for.message}</p>
              )}

              {/* Dropdown for contact details */}
              <select
                name="contact_details"
                placeholder="Contact Details"
                className={`form-control shadow-none rounded-0 mt-3 ${errors.contact_details ? 'is-invalid' : ''}`}
                id="contact_details"
                {...register('contact_details', { required: 'Contact Details is required' })}
              >
                <option value="" disabled>Select Contact Details</option>
                {options.map((contactDetails) => (
                  <option key={contactDetails.contact_details_id} value={contactDetails.contact_details_id}>
                    {`${contactDetails.contact_details_id} - ${contactDetails.mobile_number}`}
                  </option>
                ))}
              </select>
              {errors.contact_details && (
                <p className="invalid-feedback">{errors.contact_details.message}</p>
              )}

              <textarea
                className={`rounded-0 form-control shadow-none mt-3 ${errors.reason_of_appointment ? 'is-invalid' : ''}`}
                placeholder="Reason Of Appointment"
                rows="5"
                {...register('reason_of_appointment', { required: 'Reason Of Appointment is required' })}
              ></textarea>
              {errors.reason_of_appointment && (
                <p className="invalid-feedback">{errors.reason_of_appointment.message}</p>
              )}
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
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </>
  );
}
