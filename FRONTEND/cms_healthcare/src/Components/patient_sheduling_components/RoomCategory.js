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
      <input type='text' id='rcn' placeholder='eg icu,general_ward,special_ward' className='form-control'/><br/>

      <label htmlFor='sp'><b>Service Provider</b></label><br/>
      <input type='number' id='sp' placeholder='enter service provider' className='form-control'/><br/>

      <label htmlFor='claim'><b>Claim</b></label><br/>
      <input type='text' id='claim' placeholder='claim' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
      <input type='reset' className='btn btn-outline-danger' value={'Reset'}/>
    
    </form>
  </div>



   </>

    


  )
}
