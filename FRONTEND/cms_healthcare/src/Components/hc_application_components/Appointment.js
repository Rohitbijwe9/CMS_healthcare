import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const { register, handleSubmit } = useForm();
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

  const onSubmit = async (data) => {
    try {
      // Uncomment the following line if you want to send data to the server
       await axios.post('http://127.0.0.1:8000/hcapp/Appointmentview/', data);
      // Redirect to the desired page after submission
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

              {/* Dropdown for contact details */}
              <select
                name="contact_details"
                placeholder="Contact Details"
                className="form-control shadow-none rounded-0 mt-3"
                id="contact_details"
                {...register('contact_details')}
              >
                <option value="" disabled>Select Contact Details</option>
                {options.map((contactNumber) => (
                  <option key={contactNumber} value={contactNumber}>
                    {contactNumber}
                  </option>
                ))}
              </select>

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
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </>
  );
}
