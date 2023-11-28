import React,{useEffect} from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {

    const{pk} = useParams();

    const navi = useNavigate();

    const {register, handleSubmit, setValue} = useForm();
    async function fetchUser()
    {
        const result= await axios.get(`http://localhost:8000/user/${pk}/`);
        setValue('first_name', result.data.first_name)
        setValue('last_name', result.data.last_name)
        setValue('username', result.data.username)
        setValue('password', result.data.password)
        setValue('email', result.data.email)
        setValue('user_type', result.data.user_type)
        setValue('user_code', result.data.user_code)
        setValue('user_image', result.data.user_image)
        setValue('is_active', result.data.is_active)
        setValue('created_on', result.data.created_on)
        setValue('updated_on', result.data.updated_on)
    }

    function SaveData(data)
    {
        data.user_image= data.user_image[0]
        axios.put(`http://localhost:8000/user/${pk}/`,data,{headers:{'Content-Type':'multipart/form-data'}});
        navi('/showuser');
    }

    useEffect(()=>{
        fetchUser()
    },[])
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit(SaveData)}>
      <center><h1 style={{ color: "royalblue", marginTop: "10px"}}>User Registration</h1></center>

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

       <input type='submit' className='btn btn-outline-warning' value='Update User' style={{ marginRight: '30px' }}/>
       <input type='reset' className='btn btn-outline-warning' value='RESET'/>
    </form>
    </div> 
    </>
  )
}

export default UpdateUser