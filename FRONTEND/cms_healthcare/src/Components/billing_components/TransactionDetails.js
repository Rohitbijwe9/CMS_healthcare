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
    <form onSubmit={handleSubmit(savedata)} className="mt-5 pt-5 mx-auto">
      <div className="col-12 col-lg-4 m-auto">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Transaction Details</h3>
      
          {/* <label htmlFor='pn'>Pan  Card Number</label>  */}
          <input type='number' id='pn' placeholder='Enter pan number' className='form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='tn'>Transaction Number</label>  */}
          <input type='number' id='tn' placeholder='Enter transaction number' className='form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='ac'>Account Number</label>  */}
          <input type='number' id='ac' placeholder='Enter acount number' className='form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='bn'>Bank Name</label>  */}
          <input type='text' id='bn' placeholder='Enter bank name' className='form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='brn'>Branch Name</label>  */}
          <input type='text' id='brn' placeholder='Enter branch name' className='form-control shadow-none rounded-0 mt-3'/> 


          {/* <label htmlFor='ic'>Ifsc Code</label>  */}
          <input type='text' id='ic' placeholder='Claim' className='form-control shadow-none rounded-0 mt-3'/> 

          <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>

    
      </div>
    </form>
  </div>



   </>
  )
}