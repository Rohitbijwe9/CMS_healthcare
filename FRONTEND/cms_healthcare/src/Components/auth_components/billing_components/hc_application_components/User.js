import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';


export default function User() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('http://localhost:8000/api/register/',data)
  }

  return (
    <>

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>


      <label htmlFor='ufname'>User First Name</label><br/>
      <input type='text' id='ufname' placeholder='enter user first name' className='form-control'
      {...register('first_name')}/><br/>

      <label htmlFor='ulname'>User Last Name</label><br/>
      <input type='text' id='ulname' placeholder='enter user last name' className='form-control'
      {...register('last_name')}/><br/>

      <label htmlFor='uname'>Username</label><br/>
      <input type='username' id='uname' placeholder='enter username' className='form-control'
      {...register('username')}/><br/>

      <label htmlFor='pw'>Password</label><br/>
      <input type='password' id='pw' placeholder='enter password' className='form-control'
      {...register('password')}/><br/>

      <label htmlFor='ut'>User Type</label><br/>
      
      <input type='dropdown' id='mu' value='------'{...register('user_type')} />------<b></b><br/><br/>


        <input type='select' id='mu' value='admin'{...register('user_type')} />Admin<b></b><br/><br/>
        <input type='dropdown' id='mu' value='doctor'{...register('user_type')} />Doctor<b></b><br/><br/>
        <input type='dropdown' id='mu' value='receptionist'{...register('user_type')} />Receptionist<b></b><br/><br/>
        <input type='dropdown' id='mu' value='nurse'{...register('user_type')} />Nurse<b></b><br/><br/>
        <input type='dropdown' id='mu' value='wardboy'{...register('user_type')} />Wardboy<b></b><br/><br/>
        


      <label htmlFor='ucode'>User Code</label><br/>
        <input type='text' id='ucode' placeholder='enter user code' className='form-control'
        {...register('user_code')}/><br/>

      <label htmlFor='uimg'>User Image</label><br/>
        <input type='file' id='uimg'  className='form-control'
        {...register('user_image')}/><br/>

        <label htmlFor='ia'>Is Active</label><br/>
      <input type='radio' id='ia' className='form-control'
      {...register('is_active')}/><br/>

      <label htmlFor='co'>Created On</label><br/>
      <input type='datetime' id='co' className='form-control'
      {...register('created_on')}/><br/>

      <label htmlFor='cd'>Contact Details</label><br/>
      <input type='number' id='cd'  className='form-control'
      {...register('contact_details')}/><br/>

      <label htmlFor='sp'>Service Provider</label><br/>
      <input type='' id='sp'  className='form-control'
      {...register('service_provider')}/><br/>

      <label htmlFor='up'>Updated On</label><br/>
      <input type='datetime' id='up' className='form-control'
      {...register('updated_on')}/><br/>

      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
      <input type='reset' className='btn btn-outline-warning' value={'Reset'}/>
    </form>
  </div>
    </>
  )
}



