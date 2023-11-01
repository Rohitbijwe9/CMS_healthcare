import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function HosoitalExpenses() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>
 <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>
    <label htmlFor='phe'>Pre Hospital Expenses</label><br/>
      <input type='number' id='phe' placeholder='enter pre hospital expenses' className='form-control'/><br/>

      <label htmlFor='he'>Hospital Expenses</label><br/>
      <input type='number' id='he' placeholder='enter hospital expenses' className='form-control'/><br/>

      <label htmlFor='pohe'>Post Hospital Expenses</label><br/>
      <input type='number' id='pohe' placeholder='enter post hospital expenses' className='form-control'/><br/>

      <label htmlFor='hc'>Health Check Expenses</label><br/>
      <input type='number' id='hc' placeholder='enter health check expenses' className='form-control'/><br/>

      <label htmlFor='ac'>Ambulance Charges</label><br/>
      <input type='number' id='ac' placeholder='enter ambulance charge' className='form-control'/><br/>

      <label htmlFor='oc'>Other Charges</label><br/>
      <input type='number' id='oc' placeholder='other charge' className='form-control'/><br/>

      <label htmlFor='tc'>Total Charges</label><br/>
      <input type='number' id='tc' placeholder='total charges' className='form-control'/><br/>

      <label htmlFor='spc'>Service Provider Code</label><br/>
      <input type='number' id='spc' placeholder='service provider code' className='form-control'/><br/>

      <label htmlFor='claim'>Claim</label><br/>
      <input type='text' id='claim' placeholder='claim' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>










      
    
    </form>
  </div>



   </>
  )
}
