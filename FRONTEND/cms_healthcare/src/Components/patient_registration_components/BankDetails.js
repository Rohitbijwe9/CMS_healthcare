import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function BankDetails() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('http://127.0.0.1:8000/patientreg/bankdetails/',data)
  }

  return (
   <>

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>

    <label htmlFor='pn'>Pan Card Number</label><br/>
    <input type='text' id='pn' placeholder='enter pan no' className='form-control'
    {...register('pancard_number')}/><br/>

    <label htmlFor='acn'>Account Number</label><br/>
    <input type='number' id='acn' placeholder='enter account No' className='form-control'
    {...register('account_number')}/><br/>

    <label htmlFor='bn'>Bank Name</label><br/>
    <input type='text' id='bn' placeholder='enter bankname' className='form-control'
    {...register('bank_name')}/><br/>

    <label htmlFor='brn'>Branch Name</label><br/>
    <input type='text' id='brn' placeholder='enter branch name' className='form-control'
    {...register('branch_name')}/><br/>

    <label htmlFor='ic'>Ifsc Code</label><br/>
    <input type='text' id='ic' placeholder='enter ifsc code' className='form-control'
    {...register('ifsc_code')}/><br/>


    <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>





     

      
    </form>
  </div>



   </>
  )
}
