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
 <div className='container form-container'>
    <form onSubmit={handleSubmit(savedata)} className='mt-5 mb-5 pt-5 m-auto'>

      <div className="col-12 col-lg-4 m-auto">

        <label htmlFor='sd'>Start Date</label><br/>
        <input type='date' id='sd' placeholder='Start date' className='form-control shadow-none rounded-0 mt-1'/><br/>

        <label htmlFor='ed'>End Date</label><br/>
        <input type='date' id='ed' placeholder='End date' className='form-control shadow-none rounded-0 mt-1'/><br/>

        {/* <label htmlFor='si'>Sum Insured</label><br/> */}
        <input type='text' id='si' placeholder='Sum Insured' className='form-control shadow-none rounded-0 mt-1'/><br/>

        {/* <label htmlFor='ba'>Balance Amount</label><br/> */}
        <input type='number' id='ba' placeholder='Balance amount' className='form-control shadow-none rounded-0 mt-1'/><br/>

        {/* <label htmlFor='pc'>Payer Code</label><br/> */}
        <input type='text' id='pc' placeholder='Payer code' className='form-control shadow-none rounded-0 mt-1'/><br/>

        {/* <label htmlFor='pc'>Patient Code</label><br/> */}
        <input type='text' id='pc' placeholder='Payment code' className='form-control shadow-none rounded-0 mt-1'/><br/>

        {/* <label htmlFor='ia'>Is Applicable</label><br/> */}
        <input type='text' id='ia' placeholder='Is applicable' className='form-control shadow-none rounded-0 mt-1'/><br/>

        <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>



      </div>
    </form>
  </div>



   </>
  )
}
