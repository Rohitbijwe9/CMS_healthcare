import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function Patient() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>
     

      
      
      


      <label htmlFor='pcode'>Patient Code</label><br/>
        <input type='text' id='pcode' placeholder='enter patient code' className='form-control'/><br/>

      <label htmlFor='cs'>Claim Status</label><br/>
        <input type='radio' id='ms' value='pending'/>Pending<b></b><br/><br/>
        <input type='radio' id='ms' value='success'/>Success<b></b><br/><br/>
        <input type='radio' id='ms' value='denied'/>Denied<b></b><br/><br/>

      <label htmlFor='pfname'>Patient First Name</label><br/>
      <input type='text' id='pfname' placeholder='enter patient first name' className='form-control'/><br/>

      <label htmlFor='plname'>Patient Last Name</label><br/>
      <input type='text' id='plname' placeholder='enter patient last name' className='form-control'/><br/>

      <label htmlFor='pmname'>Patient Middle Name</label><br/>
      <input type='text' id='pmname' placeholder='enter patient middle name' className='form-control'/><br/>

      <label htmlFor='pprifix'>Patient Prifix</label><br/>
      <input type='text' id='pprifix' placeholder='enter patient prifix' className='form-control'/><br/>

      <label htmlFor='psufix'>Patient Sufix</label><br/>
      <input type='text' id='psufix' placeholder='enter patient sufix' className='form-control'/><br/>

      <label htmlFor='psufix'>Patient Middle Name</label><br/>
      <input type='text' id='psuffix' placeholder='enter patient sufix' className='form-control'/><br/>

      <label htmlFor='page'>Patient Age</label><br/>
      <input type='number' id='page' placeholder='enter patient age' className='form-control'/><br/>

      <label htmlFor='pweight'>Patient Weight</label><br/>
      <input type='number' id='pweight' placeholder='enter patient weight' className='form-control'/><br/>

      <label htmlFor='pheight'>Patient Middle Name</label><br/>
      <input type='number' id='pheight' placeholder='enter patient height' className='form-control'/><br/>

      <label htmlFor='pimg'>Patient Image</label><br/>
      <input type='file' id='pimg'  className='form-control'/><br/>

      <label htmlFor='pmname'>Patient Middle Name</label><br/>
      <input type='text' id='pmname' placeholder='enter patient middle name' className='form-control'/><br/>

      <label htmlFor='ms'>Martial status</label><br/>
        <input type='radio' id='ms' value='married' /><b>Married</b><br/><br/>
        <input type='radio' id='ms' value='unmarried' /><b>Unmarried</b><br/><br/>
        <input type='radio' id='ms' value='divorced' /><b>Divorced</b><br/><br/>
        <input type='radio' id='ms' value='widow' /><b>widow</b><br/><br/>

      <label htmlFor='gen'>Gender</label><br/>
        <input type='radio' id='gen' value='male' /><b>Male</b><br/><br/>
        <input type='radio' id='gen' value='female' /><b>Female</b><br/><br/>
        <input type='radio' id='gen' value='other' /><b>Other</b><br/><br/>
      
      <label htmlFor='ph'>Patient Handicap</label><br/>
        <input type='radio' id='ph' value='True' /><b>Yes</b><br/><br/>
        <input type='radio' id='ph' value='False' /><b>No</b><br/><br/>
      
      <label htmlFor='pdob'>Patient DOB</label><br/>
      <input type='date' id='pdob'  className='form-control'/><br/>

      <label htmlFor='po'>Patient Occupation</label><br/>
      <input type='text' id='po' placeholder='enter patient occupation' className='form-control'/><br/>

      <label htmlFor='padhar'>Patient Adhar No</label><br/>
      <input type='number' id='padhar' placeholder='enter patient adhar no' className='form-control'/><br/>

      <label htmlFor='paimg'>Patient Adhar Image</label><br/>
      <input type='file' id='paimg' className='form-control'/><br/>

      <label htmlFor='pud'>Patient Updated Date</label><br/>
      <input type='date' id='pud'  className='form-control'/><br/>

      <label htmlFor='padd'>Patient Address</label><br/>
      <input type='text' id='padd' placeholder='enter patientaddress' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>



</form>
  </div>



   </>
  )
}
