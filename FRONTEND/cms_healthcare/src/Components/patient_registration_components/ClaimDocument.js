import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function ClaimDocument() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchClaims() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/claimdocclaim/');
        setClaims(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching claims:', error);
        setError('Error fetching claims. Please try again.');
        setLoading(false);
      }
    }

    fetchClaims();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Uncomment the following line if you want to send data to the server
      await axios.post('http://127.0.0.1:8000/patientreg/claim_doc/', data);
      console.log(data);
      // Redirect to the desired page after submission
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Error saving data. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <form className="mt-5 pt-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <h3 className="text-center mb-5" style={{ color: "#020f4a" }}>
            Claim Document
          </h3>
          <div className="col-12 col-lg-4 m-auto">
            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.claim_name ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Claim Name"
              {...register('claim_name', { required: 'Claim Name is required' })}
            />
            {errors.claim_name && <p className="invalid-feedback">{errors.claim_name.message}</p>}

            <input
              className={`form-control shadow-none rounded-0 mt-3 ${errors.claim_code ? 'is-invalid' : ''}`}
              type="text"
              placeholder="Claim Code"
              {...register('claim_code', { required: 'Claim Code is required' })}
            />
            {errors.claim_code && <p className="invalid-feedback">{errors.claim_code.message}</p>}

            {/* Dropdown for selecting a claim */}
            <select
              name="claimId"
              placeholder="Select Claim"
              className={`form-control shadow-none rounded-0 mt-3 ${errors.claim ? 'is-invalid' : ''}`}
              {...register('claim', { required: 'Claim is required' })}
            >
              <option value="" disabled>Select Claim</option>
              {claims.map((claim) => (
                <option key={claim.claim_id} value={claim.claim_id}>
                  {`${claim.claim_id} - ${claim.patient_first_name} - ${claim.patient_last_name}`}
                </option>
              ))}
            </select>
            {errors.claim && <p className="invalid-feedback">{errors.claim.message}</p>}
          </div>
          <div className="col-12 col-lg-4 m-auto text-center mb-5">
            <button
              type="submit"
              className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
              style={{ backgroundColor: "#121831" }}
            >
              Save Claim Document
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
