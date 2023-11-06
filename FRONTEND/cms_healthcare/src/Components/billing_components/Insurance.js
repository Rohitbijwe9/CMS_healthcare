import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function Insurance() {

    const {register, handleSubmit} = useForm();

    function savedata(data) {
        axios.post('http://127.0.0.1:8000/billing/insurence/', data)
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Patient code' {...register('patient_code')} />
                    
                    <div className="row mb-3 mt-3">
                      <label for="inputEmail3" className="col-sm-7 col-form-label">Insurance start date : </label>
                      <div className="col-sm-5">
                        <input type="date" className="form-control" id="inputEmail3" {...register('insurance_start_date')}/>
                      </div>
                    </div>

                    <div className="row mb-3 mt-3">
                      <label for="inputEmail3" className="col-sm-7 col-form-label">Insurance end date : </label>
                      <div className="col-sm-5">
                        <input type="date" className="form-control" id="inputEmail3" {...register('insurance_end_date')} />
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
                    
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Nominee details' {...register('nominee_details')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance payer details' {...register('insurance_payer_details')} />
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