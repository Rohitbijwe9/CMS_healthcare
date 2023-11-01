import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function RoomCategory() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }
  return (
  <>  
    <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>
    <label htmlFor='rci'><b>Room Category Identifier</b></label><br/>
      <input type='number' id='rci' placeholder='enter room category identifier' className='form-control'/><br/>

      <label htmlFor='rcn'><b>Room Category Name</b></label><br/>
        <input type='radio' id='rcn' value='icu'/>ICU<b></b><br/><br/>
        <input type='radio' id='rcn' value='general_ward'/>General ward<b></b><br/><br/>
        <input type='radio' id='rcn' value='special_ward'/>Special Ward<b></b><br/><br/>

      <label htmlFor='sp'><b>Service Provider</b></label><br/>
      <input type='' id='sp' placeholder='enter service provider' className='form-control'/><br/>

      <label htmlFor='claim'><b>Claim</b></label><br/>
      <input type='text' id='claim' placeholder='claim' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
      <input type='reset' className='btn btn-outline-danger' value={'Reset'}/>
    
    </form>
  </div>



   </>

    


  )
}
