import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {


    const {register, handleSubmit} = useForm();

    const navi = useNavigate();
    

    function SaveData(data)
    {

      data.user_image= data.user_image[0]
        //console.log(data);
        axios.post('http://localhost:8000/user/',data,{headers:{'Content-Type':'multipart/form-data'}})
        .then(response => {
          console.log(response); // Log the response for further inspection
          navi('/showuser');
      })
      .catch(error => {
          console.error('AxiosError:', error);
      });
        console.log(data);
        navi('/showuser')
    }
  return (
    <>
        <div className='container'>
    <form onSubmit={handleSubmit(SaveData)}><br/><br/><br/>
      <center><h1>User Registration</h1></center>

      <label htmlFor='ufname'>User First Name</label><br/>
      <input type='text' id='ufname' placeholder='enter user first name' className='form-control'{...register('first_name')}/><br/>

      <label htmlFor='ulname'>User Last Name</label><br/>
      <input type='text' id='ulname' placeholder='enter user last name' className='form-control'{...register('last_name')}/><br/>

      <label htmlFor='uname'>Username</label><br/>
      <input type='username' id='uname' placeholder='enter username' className='form-control'{...register('username')}/><br/>

      <label htmlFor='pw'>Password</label><br/>
      <input type='password' id='pw' placeholder='enter password' className='form-control'{...register('password')}/><br/>

      <label htmlFor='em'>Email</label><br/>
      <input type='email' id='em' placeholder='enter email' className='form-control'{...register('email')}/><br/>

      {/*<label htmlFor='ut'>User Type</label><br/>
        <select>
          <option value="admin"{...register('user_type')}>Admin</option>
          <option value="doctor"{...register('user_type')}>Doctor</option>
          <option value="nurse"{...register('user_type')}>Nurse</option>
          <option value="wardboy"{...register('user_type')}>Wardboy</option>
          <option value="receptionist"{...register('user_type')}>Receptionist</option>
  </select>*/}

      <label htmlFor='ut'>User Type</label><br/>
      <select {...register('user_type')}>
        <option value="Admin">Admin</option>
        <option value="Doctor">Doctor</option>
        <option value="Nurse">Nurse</option>
        <option value="Wardboy">Wardboy</option>
        <option value="Receptionist">Receptionist</option>
      </select>

        <br></br><br></br>

      <label htmlFor='ucode'>User Code</label><br/>
        <input type='text' id='ucode' placeholder='enter user code' className='form-control'{...register('user_code')}/><br/>

      <label htmlFor='uimg'>User Image</label><br/>
        <input type='file' id='uimg'  className='form-control'{...register('user_image')}/><br/>

      <label htmlFor='ia'>Is Active</label><br/>
        <input type='checkbox' id='ia'{...register('is_active')}/><br/>

      <label htmlFor='co'>Created On</label><br/>
        <input type='datetime-local' id='co' className='form-control'{...register('created_on')}/><br/>

  
      <label htmlFor='up'>Updated On</label><br/>
        <input type="datetime-local" id='up' className='form-control'{...register('updated_on')}/><br/>

        <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
        <input type='reset' className='btn btn-outline-success' value={'RESET'}/>
    </form><br/><br/><br/>
  </div>
    </>
  )
}