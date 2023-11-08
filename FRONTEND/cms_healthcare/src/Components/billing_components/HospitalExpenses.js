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
    <form onSubmit={handleSubmit(savedata)} className="mt-5 pt-5 mx-auto">
        <div className="col-12 col-lg-4 m-auto">
            <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Hospital Expenses</h3>
            
            
            <input type='number' id='phe' placeholder=    'Enter pre hospital expenses' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='he'>Hospital Expenses</label>  */}
            <input type='number' id='he' placeholder=   'Enter hospital expenses' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='pohe'>Post Hospital Expenses</label>  */}
            <input type='number' id='pohe' placeholder=   'Enter post hospital expenses' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='hc'>Health Check Expenses</label>  */}
            <input type='number' id='hc' placeholder=   'Enter health check expenses' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ac'>Ambulance Charges</label>  */}
            <input type='number' id='ac' placeholder=   'Enter ambulance charge' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='oc'>Other Charges</label>  */}
            <input type='number' id='oc' placeholder='Other charges' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='tc'>Total Charges</label>  */}
            <input type='number' id='tc' placeholder='Total charges' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='spc'>Service Provider Code</label>  */}
            <input type='number' id='spc' placeholder='Service provider code' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='claim'>Claim</label>  */}
            <input type='text' id='claim' placeholder='Claim' className=' form-control shadow-none rounded-0 mt-3'/> 

            

            <input type='submit' className='rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12' style={{ backgroundColor: "#121831" }} value={'Save Data'}/>

        </div>
    </form>
  </div>



   </>
  )
}