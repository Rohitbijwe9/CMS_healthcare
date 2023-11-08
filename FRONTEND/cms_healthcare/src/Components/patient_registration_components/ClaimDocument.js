import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function ClaimDocument() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('http://127.0.0.1:8000/patientreg/claim_doc/',data)
  }

  return (
   <>

  <div className='container '>
    <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>

      <div className="col-12 col-lg-4 m-auto">
          <h5 className='text-center mb-5'>Claim Document</h5>

          
          <input type='text' id='cn' placeholder='Enter claim name' className='form-control shadow-none rounded-0 mt-3'
          {...register('claim_name')}/>

          
          <input type='text' id='cc' placeholder='Claim code' className='form-control shadow-none rounded-0 mt-3'
          {...register('claim_code')}/>

          
          <input type='text' id='cl' placeholder='Claim' className='form-control shadow-none rounded-0 mt-3'
          {...register('claim')}/>

          <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>


      </div>
    </form>
  </div>



   </>
  )
}
