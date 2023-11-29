import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';


function Insurance() {

    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
    const redirect=useNavigate();

// ==========================================================================

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


// ===========================================================================
    
      const [options, setOptions] = useState([]);

      async function fetchNomineeData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/bill/insurancenominee/');
          setOptions(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      useEffect(() => {
        fetchNomineeData();
      }, []);


      useEffect(() => {
        // Log the updated options state when it changes
        console.log(options);
      }, [options]);


      const [options2, setOptions2] = useState([]);

      async function fetchInsurancePayerData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/bill/insinsurancepayerdetails/');
          setOptions2(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      useEffect(() => {
        fetchInsurancePayerData();
      }, []);


      useEffect(() => {
        // Log the updated options state when it changes
        console.log(options2);
      }, [options2]);

      function savedata(data) {
        console.log('Form data:', data);
      
        // Validate appointment date
        const isDateValid = validateAppointmentDate(data.appointment_date);
      
        if (isDateValid) {
          // If date is valid, proceed with the API call
          axios.post('http://127.0.0.1:8000/bill/insurence/', data)
            .then(response => {
              console.log('Data saved successfully:', response.data);
              // Optionally, you can redirect or perform other actions after successful save
            })
            .catch(error => {
              console.error('Error saving data:', error);
            });
        } else {
          console.log('Date validation failed. Form not submitted.');
        }
      }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <h5 className='text-center mb-5'>Insurance Details</h5>
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Patient code' {...register('patient_code')} />
                    
                    <div className="row mb-3 mt-3">
                      <label for="inputEmail3" className="col-sm-7 col-form-label">Insurance start date : </label>
                      <div className="col-sm-5">
                        <input type="date" className="form-control shadow-none rounded-0" id="inputEmail3" {...register('insurance_start_date')}/>
                      </div>
                    </div>

                    <div className="row mb-3 mt-3">
                      <label for="inputEmail3" className="col-sm-7 col-form-label">Insurance end date : </label>
                      <div className="col-sm-5">
                        <input type="date" className="form-control shadow-none rounded-0" id="inputEmail3" {...register('insurance_end_date')} />
                      </div>
                    </div>

                    {/* <label className="form-check-label" htmlFor="sd">Insurance start date</label>
                    <input className='form-control shadow-none rounded-0 mt-3' type="date" id="sd" placeholder='insurance_start_date' {...register('insurance_start_date')} /> */}

                    {/* <label className="form-check-label mt-3" htmlFor="ed">Insurance end date : </label>
                    <input className='form-control shadow-none rounded-0 mt-1' type="date" id="ed" placeholder='insurance_end_date' {...register('insurance_end_date')} /> */}

                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance sum insured' {...register('insurance_sum_insured')} />

                    <div className="form-check form-switch mt-3 col-12 col-lg-6">
                        <input className="form-check-input shadow-none" type="checkbox" id="cmp" {...register('is_primary')} />
                        <label className="form-check-label" htmlFor="cmp">Is primary</label>
                    </div>
                    <div className="form-check form-switch mt-3 col-12 col-lg-6">
                        <input className="form-check-input shadow-none" type="checkbox" id="cmp" {...register('is_rider')} />
                        <label className="form-check-label" htmlFor="cmp">Is rider</label>
                    </div>
                    
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance policy term' {...register('insurance_policy_term')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance premium amount' {...register('insurance_premium_amount')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Insurance policy name' {...register('insurance_policy_name')} />
                    
                    <div className="form-check form-switch mt-3 col-12 col-lg-6">
                        <input className="form-check-input shadow-none" type="checkbox" id="cmp" {...register('is_cashless')} />
                        <label className="form-check-label" htmlFor="cmp">Is cashless</label>
                    </div>
                    
                    {/* <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Nominee details' {...register('nominee_details')} /> */}
                    {/* Dropdown for Nominee details */}
                    <select
                      name="nominee_details_indentifier"
                      placeholder="Nominee details"
                      className="form-control shadow-none rounded-0 mt-3"
                      id="nominee_details_indentifier"
                      {...register('nominee_details_indentifier')}
                    >
                      <option htmlFor="nominee_details_indentifier" value="" disabled>Select Nominee Details</option>
                      {options.map((obj) => (
                        <option key={obj.nominee_details_indentifier} value={obj.nominee_details_indentifier}>
                          {obj.nominee_details_indentifier}---{obj.nominee_name}---{obj.relation_with_insurance_payer}
                        </option>
                      ))}
                    </select>




                    {/* <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance payer details' {...register('insurance_payer_details')} /> */}
                    {/* Dropdown for insurance payer details */}
                    <select
                      name="insurance_payer_identifer"
                      placeholder="Insurance Payer details"
                      className="form-control shadow-none rounded-0 mt-3"
                      id="insurance_payer_identifer"
                      {...register('insurance_payer_identifer')}
                    >
                      <option value="" disabled>Select Insurance Payer Details</option>
                      {options2.map((obj) => (
                        <option htmlFor="insurance_payer_identifer" key={obj.insurance_payer_identifer} value={obj.insurance_payer_identifer}>
                          {obj.insurance_payer_identifer}---{obj.insurance_payer_name}
                        </option>
                      ))}
                    </select>
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Insurance

