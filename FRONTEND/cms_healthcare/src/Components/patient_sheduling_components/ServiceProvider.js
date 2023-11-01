import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ServiceProvider() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }


  return (
    
    <>
    <div className='container'>
       <form onSubmit={handleSubmit(savedata)}>
       <label htmlFor='spi'><b>Service Provider Identifier</b></label><br/>
         <input type='number' id='spi' placeholder='Enter service provider Identifier' className='form-control'/><br/>
   
         <label htmlFor='spn'><b>Service Provider Name</b></label><br/>
         <input type='text' id='spn' placeholder='enter service provider name' className='form-control'/><br/>
   
         <label htmlFor='pohe'>Post Hospital Expenses</label><br/>
         <input type='number' id='pohe' placeholder='enter post hospital expenses' className='form-control'/><br/>
   
         <label htmlFor='spc'><b>Service Provider Code</b></label><br/>
         <input type='text' id='spc' placeholder='enter service provider code' className='form-control'/><br/>
   
         <label htmlFor='hi'><b>Hospital Identifier</b></label><br/>
         <input type='text' id='hi' placeholder='enter hospital identifier' className='form-control'/><br/>
   
         <label htmlFor='ht'><b>Hospital Type</b></label><br/>
         <input type='text' id='ht' placeholder='enter hospital type' className='form-control'/><br/>
   
         <label htmlFor='hrn'><b>Hospital Registration Number</b></label><br/>
         <input type='text' id='hrn' placeholder='enter hospital registration number' className='form-control'/><br/>
   
         <label htmlFor='ad'><b>Address Details</b></label><br/>
         <input type='text' id='ad' placeholder='enter address details' className='form-control'/><br/>
   
         <label htmlFor='cd'><b>Contact Details</b></label><br/>
         <input type='number' id='cd' placeholder='enter contact details' className='form-control'/><br/>
   
         <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
         <input type='reset' className='btn btn-outline-danger' value={'Reset'}/>
       </form>
     </div>
   
   
   
      </>


  )
}
