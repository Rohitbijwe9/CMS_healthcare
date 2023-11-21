import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function PaymentInfo() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>
 <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>
      <br/><br/><br/>

    <label htmlFor='sd'>Start Date</label><br/>
    <input type='date' id='sd' placeholder='start date' className='form-control'/><br/>

    <label htmlFor='ed'>End Date</label><br/>
    <input type='date' id='ed' placeholder='end date' className='form-control'/><br/>

    <label htmlFor='si'>Sum Insured</label><br/>
    <input type='text' id='si' placeholder='Sum Insured' className='form-control'/><br/>

    <label htmlFor='ba'>Balance Amount</label><br/>
    <input type='number' id='ba' placeholder='balance amount' className='form-control'/><br/>\

    <label htmlFor='pc'>Payer Code</label><br/>
    <input type='text' id='pc' placeholder='payer code' className='form-control'/><br/>

    <label htmlFor='pc'>Patient Code</label><br/>
    <input type='text' id='pc' placeholder='payment code' className='form-control'/><br/>

    <label htmlFor='ia'>Is Applicable</label><br/>
    <input type='text' id='ia' placeholder='is applicable' className='form-control'/><br/>

    <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
    <br/><br/><br/>





    </form>
  </div>



   </>
  )
}

