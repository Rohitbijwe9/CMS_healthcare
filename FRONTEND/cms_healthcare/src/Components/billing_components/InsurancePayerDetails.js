import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function InsurancePayerDetails() {

    const {register, handleSubmit} = useForm();

    function savedata(data) {
        axios.post('http://127.0.0.1:8000/billing/insurencepayerdetails/', data)
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Insurance payer name' {...register('insurance_payer_name')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance payer code' {...register('insurance_payer_code')} />
                    <textarea className="rounded-0 form-control shadow-none mt-3" placeholder='Address' rows="4" {...register('address_details')}></textarea>
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InsurancePayerDetails