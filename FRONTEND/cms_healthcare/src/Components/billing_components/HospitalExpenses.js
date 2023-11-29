import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function HospitalExpenses() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Fetch claims data when the component mounts
    async function fetchClaims() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/bill/hospitalexpensessclaim/');
        setClaims(response.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    }

    // Call the fetchClaims function
    fetchClaims();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const savedata = async (data) => {
    try {
      // Your axios post request here
      console.log('Data saved successfully:', data);
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(savedata)}>
          <br />
          <br />
          <br />
          <br />
          <label htmlFor='phe'>Pre Hospital Expenses</label>
          <br />
          <input
            type='number'
            id='phe'
            placeholder='Enter pre hospital expenses'
            className={`form-control ${errors.pre_hospital_expenses ? 'is-invalid' : ''}`}
            {...register('pre_hospital_expenses', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.pre_hospital_expenses && (
            <div className='invalid-feedback'>{errors.pre_hospital_expenses.message}</div>
          )}
          <br />

          <label htmlFor='he'>Hospital Expenses</label>
          <br />
          <input
            type='number'
            id='he'
            placeholder='Enter hospital expenses'
            className={`form-control ${errors.hospital_expenses ? 'is-invalid' : ''}`}
            {...register('hospital_expenses', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.hospital_expenses && (
            <div className='invalid-feedback'>{errors.hospital_expenses.message}</div>
          )}
          <br />

          <label htmlFor='pohe'>Post Hospital Expenses</label>
          <br />
          <input
            type='number'
            id='pohe'
            placeholder='Enter post hospital expenses'
            className={`form-control ${errors.post_hospital_expenses ? 'is-invalid' : ''}`}
            {...register('post_hospital_expenses', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.post_hospital_expenses && (
            <div className='invalid-feedback'>{errors.post_hospital_expenses.message}</div>
          )}
          <br />

          <label htmlFor='hc'>Health Check Expenses</label>
          <br />
          <input
            type='number'
            id='hc'
            placeholder='Enter health check expenses'
            className={`form-control ${errors.health_check_cost ? 'is-invalid' : ''}`}
            {...register('health_check_cost', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.health_check_cost && (
            <div className='invalid-feedback'>{errors.health_check_cost.message}</div>
          )}
          <br />

          <label htmlFor='ac'>Ambulance Charges</label>
          <br />
          <input
            type='number'
            id='ac'
            placeholder='Enter ambulance charge'
            className={`form-control ${errors.ambulance_charges ? 'is-invalid' : ''}`}
            {...register('ambulance_charges', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.ambulance_charges && (
            <div className='invalid-feedback'>{errors.ambulance_charges.message}</div>
          )}
          <br />

          <label htmlFor='oc'>Other Charges</label>
          <br />
          <input
            type='number'
            id='oc'
            placeholder='Enter other charge'
            className={`form-control ${errors.other_charges ? 'is-invalid' : ''}`}
            {...register('other_charges', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.other_charges && (
            <div className='invalid-feedback'>{errors.other_charges.message}</div>
          )}
          <br />

          <label htmlFor='tc'>Total Charges</label>
          <br />
          <input
            type='number'
            id='tc'
            placeholder='Enter total charges'
            className={`form-control ${errors.total_charges ? 'is-invalid' : ''}`}
            {...register('total_charges', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.total_charges && (
            <div className='invalid-feedback'>{errors.total_charges.message}</div>
          )}
          <br />

          <label htmlFor='spc'>Service Provider Code</label>
          <br />
          <input
            type='number'
            id='spc'
            placeholder='Enter service provider code'
            className={`form-control ${errors.service_provider_code ? 'is-invalid' : ''}`}
            {...register('service_provider_code', {
              required: 'This field is required',
              min: { value: 0, message: 'Value must be greater than or equal to 0' },
            })}
          />
          {errors.service_provider_code && (
            <div className='invalid-feedback'>{errors.service_provider_code.message}</div>
          )}
          <br />
          <label htmlFor="claimId">Select Claim</label>
<select
  id="claimId"
  name="claimId"
  className={`form-control shadow-none rounded-0 mt-3 ${errors.claim ? 'is-invalid' : ''}`}
  {...register('claim', { required: 'Please select a claim' })}
>
  <option value="" disabled selected>
    Select Claim
  </option>
  {claims.map((claim) => (
    <option key={claim.claim_id} value={claim.claim_id}>
      {`${claim.claim_id} - ${claim.claim_number} - ${claim.patient_first_name} -${claim.patient_last_name}`}
    </option>
  ))}
</select>
{errors.claim && <p className='invalid-feedback'>{errors.claim.message}</p>}
<br />
          <input
            type='submit'
            className='btn btn-outline-success'
            value={'SAVE DATA'}
          />
        </form>
      </div>
    </>
  );
}
