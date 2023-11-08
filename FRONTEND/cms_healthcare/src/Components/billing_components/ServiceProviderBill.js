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
    <form onSubmit={handleSubmit(savedata)} className="mt-5 pt-5 mx-auto">
      <div className="col-12 col-lg-4 m-auto">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Service Provider Bill</h3>
      
          {/* <label htmlFor='spc'>Service Provider Code</label>  */}
          <input type='number' id='spc' placeholder='Service provider code 'className=' form-control shadow-none rounded-0 mt-3'/> 
  
          {/* <label htmlFor='bn'>Bill No</label>  */}
          <input type='number' id='bn' placeholder='Bill number' className=' form-control shadow-none rounded-0 mt-3'/> 
          
          <div className="row mb-3 mt-3">
              <label htmlFor="bd" className="col-sm-4 col-form-label">Bill date : </label>
              <div className="col-sm-8">
                  <input type="date" className="form-control shadow-none rounded-0" id="bd" />
              </div>
          </div>

          

          {/* <label htmlFor='ib'>Issue By</label>  */}
          <input type='text' id='ib' placeholder='Issue by' className=' form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='t'>Title</label>  */}
          <input type='text' id='t' placeholder='Title' className=' form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='am'>Amount</label>  */}
          <input type='number' id='am' placeholder='Amount' className=' form-control shadow-none rounded-0 mt-3'/> 

          <div className="row mb-3 mt-3">
              <label htmlFor='bi' className="col-sm-4 col-form-label">Bill Image : </label>
              <div className="col-sm-8">
                  <input type='file' id='bi' className=' form-control shadow-none rounded-0'/> 
              </div>
          </div>

          {/* <label htmlFor='bi' className='mt-3 mx-3 mb-1'>Bill Image :</label> 
          <input type='file' id='bi'className=' form-control shadow-none rounded-0'/>  */}

          {/* <label htmlFor='sp'>Service Provider</label>  */}
          <input type='text' id='sp' placeholder='Service provider' className=' form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='spc'>Service Provider Code</label>  */}
          <input type='number' id='spc' placeholder='Service provider code ' className=' form-control shadow-none rounded-0 mt-3'/> 

          {/* <label htmlFor='cl'>Claim</label>  */}
          <input type='text' id='cl' placeholder='Claim' className=' form-control shadow-none rounded-0 mt-3'/> 

          <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>

      </div>
    </form>
  </div>



   </>
  )
}

