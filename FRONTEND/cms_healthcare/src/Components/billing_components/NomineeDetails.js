import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function NomineeDetails() {

    const {register, handleSubmit} = useForm();

    function savedata(data) {
        axios.post('http://127.0.0.1:8000/billing/nomineedetails/', data)
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
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





