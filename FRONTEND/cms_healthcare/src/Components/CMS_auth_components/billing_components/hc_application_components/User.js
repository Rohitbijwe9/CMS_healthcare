import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';

export default function User() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
    <>

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>


      <label htmlFor='ufname'>User First Name</label><br/>
      <input type='text' id='ufname' placeholder='enter user first name' className='form-control'/><br/>

      <label htmlFor='ulname'>User Last Name</label><br/>
      <input type='text' id='ulname' placeholder='enter user last name' className='form-control'/><br/>

      <label htmlFor='uname'>Username</label><br/>
      <input type='username' id='uname' placeholder='enter username' className='form-control'/><br/>

      <label htmlFor='pw'>Password</label><br/>
      <input type='password' id='pw' placeholder='enter password' className='form-control'/><br/>

      <label htmlFor='ut'>User Type</label><br/>
        <input type='radio' id='mu' value='admin'/>Admin<b></b><br/><br/>
        <input type='radio' id='mu' value='doctor'/>Doctor<b></b><br/><br/>
        <input type='radio' id='mu' value='receptionist'/>Receptionist<b></b><br/><br/>
        <input type='radio' id='mu' value='nurse'/>Nurse<b></b><br/><br/>
        <input type='radio' id='mu' value='wardboy'/>Wardboy<b></b><br/><br/>

      <label htmlFor='ucode'>User Code</label><br/>
        <input type='text' id='ucode' placeholder='enter user code' className='form-control'/><br/>

      <label htmlFor='uimg'>User Image</label><br/>
        <input type='file' id='uimg'  className='form-control'/><br/>

        <label htmlFor='ia'>Is Active</label><br/>
      <input type='' id='ia' className='form-control'/><br/>

      <label htmlFor='co'>Created On</label><br/>
      <input id='co' className='form-control'/><br/>

      <label htmlFor='cd'>Contact Details</label><br/>
      <input type='number' id='cd'  className='form-control'/><br/>

      <label htmlFor='sp'>Service Provider</label><br/>
      <input type='' id='sp'  className='form-control'/><br/>

      <label htmlFor='up'>Updated On</label><br/>
      <input type='datetime' id='up' className='form-control'/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
    </form>
  </div>
    </>
  )
}
