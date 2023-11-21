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

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}><br/><br/><br/>

    <label htmlFor='cn'>Claim Name</label><br/>
    <input type='text' id='cn' placeholder='enter claim name' className='form-control'
    {...register('claim_name')}/><br/>

    <label htmlFor='cc'>Claim Code</label><br/>
    <input type='text' id='cc' placeholder='claim code' className='form-control'
    {...register('claim_code')}/><br/>

    <label htmlFor='cl'>Claim</label><br/>
    <input type='text' id='cl'  className='form-control'
    {...register('claim')}/><br/>

    <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/><br/><br/><br/>



    </form>
  </div>



   </>
  )
}

