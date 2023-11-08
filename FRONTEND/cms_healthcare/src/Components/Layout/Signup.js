import React from 'react';
// import '../../assets/css/Login.css';
// import '../../assets/images/Login.jpg';
import { useForm } from 'react-hook-form';



function Signup() {
    const{register,handleSubmit} = useForm()
  return (
    
    <>
        <div className="Login container-fluid form-container">
            <center><b><h3>Sing Up </h3></b></center>

            <form className='container'><br/><br/>

        <label htmlFor='fn'>First Name</label>
        <input type='text' id='fn' className='form-control' {...register('first_name',{required : 'first_name is required'})}/><br/>

        <label htmlFor='ln'>Last Name</label>
        <input type='text' id='ln' className='form-control' {...register('last_name',{required : 'last_name is required'})}/><br/>

        <label htmlFor='un'>Username</label>
        <input type='text' id='un' className='form-control' {...register('username',{required : 'Username is required'})}/><br/>

        <label htmlFor='ps'>Password</label>
        <input type='password' id='psd' className='form-control' {...register('password',{required : 'password is required'})}/><br/>

        <label htmlFor='em'>Email Id</label>
        <input type='email' id='em' className='form-control' {...register('email',{required : 'Email id is required',
                                                            pattern:{value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,message:'Enter valid email'}})}/><br/>

        <label htmlFor='pn'>Phone Number</label><br/><br/>
        <input type='text' id='pn'  className='form-control' {...register('mobile',{required : 'mobile number is required'})}/><br/>

        <label htmlFor='dt'>Date of birth</label><br/>
        <input type='date' id='dt' style={{borderRadius:10,padding:10,backgroundColor:'darkgray'}}   {...register('dob',{required : 'date of birth is required'})}/><br/><br/>

        <label htmlFor='gen'>Gender</label><br/>
        <input type='radio' id='gen' value='male' {...register('gender')}/><b>Male</b><br/><br/>
        <input type='radio' id='gen' value='female' {...register('gender')}/><b>Female</b><br/><br/>
        <input type='radio' id='gen' value='transgender' {...register('gender')}/><b>Transgender</b><br/><br/>


        <label htmlFor='ad'>Permanent Address</label>
        <input type='text' id='ad' className='form-control' {...register('permanent_address')}/><br/>

        <label htmlFor='ld'>Current Address</label>
        <input type='text' id='ld' className='form-control' {...register('current_address')}/><br/>

        <label htmlFor='con'>Profile Photo</label>
        <input type='file' id='con' className='form-control' {...register('photo',{required : 'Photo is required'})}/><br/>



        <label htmlFor='ro'>User Role</label>&nbsp;&nbsp;
        <select className='btn btn-outline-dark' {...register('role',{required : 'User Role is required'})}>
            <option disabled selected>Select Role</option>
            <option value='ad'>Admin</option>
            <option value='dr'>Doctor</option>
            <option value='nr'>Nurse</option>
        </select><br/><br/><br/>


        <input type='submit' value='Register' style={{padding:10,fontSize:20}} className='btn btn-success col-6'/><br/><br/>
        <div class=" text-primary fw-bold">



        <small>Existing User To CMS HealthCare?</small>
        <a className="text-danger" href="/login">Login</a>
        </div>


        </form>

        </div>
    </>
  );
}

export default Signup;
