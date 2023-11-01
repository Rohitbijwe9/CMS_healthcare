import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function ServiceProviderBill () {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>
 <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>


    <label htmlFor='spc'>Service Provider Code</label><br/>
    <input type='number' id='spc' placeholder='service provider code 'className='form-control'/><br/>

     
    <label htmlFor='bn'>Bill No</label><br/>
    <input type='number' id='bn' placeholder='bn ' className='form-control'/><br/>

    <label htmlFor='bd'>Bill Date</label><br/>
    <input type='date' id='bd' placeholder='bill date' className='form-control'/><br/>

    <label htmlFor='ib'>Issue By</label><br/>
    <input type='text' id='ib' placeholder='issue by' className='form-control'/><br/>

    <label htmlFor='t'>Title</label><br/>
    <input type='text' id='t' placeholder='title' className='form-control'/><br/>

    <label htmlFor='am'>Amount</label><br/>
    <input type='number' id='am' placeholder='amount' className='form-control'/><br/>

    <label htmlFor='bi'>Bill Image</label><br/>
    <input type='file' id='bi'className='form-control'/><br/>

    <label htmlFor='sp'>Service Provider</label><br/>
    <input type='text' id='sp' placeholder='service provider' className='form-control'/><br/>

    <label htmlFor='spc'>Service Provider Code</label><br/>
    <input type='number' id='spc' placeholder='service provider code ' className='form-control'/><br/>


    <label htmlFor='cl'>Claim</label><br/>
    <input type='text' id='cl' placeholder='claim' className='form-control'/><br/>


    <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>






    </form>
  </div>



   </>
  )
}






