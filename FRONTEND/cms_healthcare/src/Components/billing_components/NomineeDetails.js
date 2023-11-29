import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';



function NomineeDetails() {

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

    function savedata(data) {
        const isDateValid = validateAppointmentDate(data.appointment_date);

        if (isDateValid) {
            axios.post('http://127.0.0.1:8000/bill/nomineedetails/', data)
            redirect('/adm/admindash')
        }
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <h5 className='text-center mb-5'>Nominee Details</h5>
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Nominee name' {...register('nominee_name')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Relation with insurance payer' {...register('relation_with_insurance_payer')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="date" placeholder='Nominee DOB' {...register('nominee_date_of_birth')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Nominee mobile number' {...register('nominee_mobile_number')} />
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NomineeDetails




