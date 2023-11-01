import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function TransactionDetails() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>
 <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>

    <label htmlFor='pn'>Pan  Card Number</label><br/>
      <input type='number' id='pn' placeholder='enter pan no' className='form-control'/><br/>

    <label htmlFor='tn'>Transaction Number</label><br/>
      <input type='number' id='tn' placeholder='enter transaction no' className='form-control'/><br/>

    <label htmlFor='ac'>Account Number</label><br/>
      <input type='number' id='ac' placeholder='enter acount no' className='form-control'/><br/>

      <label htmlFor='bn'>Bank Name</label><br/>
      <input type='text' id='bn' placeholder='enter bank name' className='form-control'/><br/>

      <label htmlFor='brn'>Branch Name</label><br/>
      <input type='text' id='brn' placeholder='enter branch name' className='form-control'/><br/>


      <label htmlFor='ic'>Ifsc Code</label><br/>
      <input type='text' id='ic' placeholder='claim' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>

    
    
    </form>
  </div>



   </>
  )
}
