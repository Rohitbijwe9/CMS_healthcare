import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function User() {


    const {register, handleSubmit,formState:{ errors },} = useForm();

    const navi = useNavigate();
    
    const validationRules = {
      first_name: { required: 'First name is required' },
      last_name: { required: 'Last name is required' },
      username: { required: 'Username is required' },
      password: {
        required: 'Password is required',
        minLength: { value: 6, message: 'Password must be at least 6 characters long' },
      },
      email: { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } },
      user_type: { required: 'User type is required' },
      user_code: { required: 'User code is required' },
      user_image: { required: 'User image is required' },
      created_on: { required: 'Created on date is required' },
      updated_on: { required: 'Updated on date is required' },
    };
  
    const displayValidationErrors = (field) => {
      return errors[field] ? <span style={{ color: 'red', fontSize: '14px' }}>{errors[field].message}</span> : null;
    };

    async function SaveData(data)
    {

      data.user_image= data.user_image[0]

      try {
        await axios.post('http://localhost:8000/user/', data, { headers: { 'Content-Type': 'multipart/form-data' } });
        console.log('Data saved successfully');
        navi('/showuser');
      } catch (error) {
        console.error('AxiosError:', error);
      }
    }
  return (
    <>

      <div className='container'>
        <form onSubmit={handleSubmit(SaveData)}encType="multipart/form-data">
          <center><h1 style={{ color: "royalblue", marginTop: "10px"}}>User Registration</h1></center>

          <label htmlFor='ufname'>User First Name</label><br/>
          <input type='text' id='ufname' placeholder='enter user first name' className='form-control'{...register('first_name',validationRules.first_name)}/>
          {displayValidationErrors('first_name')}
          <br/>

          <label htmlFor='ulname'>User Last Name</label><br/>
          <input type='text' id='ulname' placeholder='enter user last name' className='form-control'{...register('last_name',validationRules.last_name)}/>
          {displayValidationErrors('last_name')}
          <br/>

          <label htmlFor='uname'>Username</label><br/>
          <input type='username' id='uname' placeholder='enter username' className='form-control'{...register('username',validationRules.username)}/>
          {displayValidationErrors('username')}
          <br/>

          <label htmlFor='pw'>Password</label><br/>
          <input type='password' id='pw' placeholder='enter password' className='form-control'{...register('password',validationRules.password)}/>
          {displayValidationErrors('password')}
          <br/>

          <label htmlFor='em'>Email</label><br/>
          <input type='email' id='em' placeholder='enter email' className='form-control'{...register('email',validationRules.email)}/>
          {displayValidationErrors('email')}
          <br/>

          <label htmlFor='ut'>User Type</label><br/>
          <select {...register('user_type',validationRules.user_type)}>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Wardboy">Wardboy</option>
            <option value="Receptionist">Receptionist</option>
          </select>
          {displayValidationErrors('user_type')}
            <br></br><br></br>

          <label htmlFor='ucode'>User Code</label><br/>
            <input type='text' id='ucode' placeholder='enter user code' className='form-control'{...register('user_code',validationRules.user_code)}/>
            {displayValidationErrors('user_code')}
            <br/>

          <label htmlFor='uimg'>User Image</label><br/>
            <input type='file' id='uimg'  className='form-control'{...register('user_image',validationRules.user_image)}/>
            {displayValidationErrors('user_image')}
            <br/>

          <label htmlFor='ia'>Is Active</label><br/>
            <input type='checkbox' id='ia'{...register('is_active')}/><br/>

          <label htmlFor='co'>Created On</label><br/>
            <input type='datetime-local' id='co' className='form-control'{...register('created_on',validationRules.created_on)}/>
            {displayValidationErrors('created_on')}
            <br/>

      
          <label htmlFor='up'>Updated On</label><br/>
            <input type="datetime-local" id='up' className='form-control'{...register('updated_on',validationRules.updated_on)}/>
            {displayValidationErrors('updated_on')}
            <br/>

          <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'} style={{ marginRight: '30px' }}/>
          <input type='reset' className='btn btn-outline-success' value={'RESET'}/>
        </form>
      </div>
    </>
  )
}