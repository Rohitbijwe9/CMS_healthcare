import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogin() {

  const {register, handleSubmit, formState: { errors }} = useForm();
  const [loginError, setLoginError] = useState(null);
  const navi = useNavigate();
  

    
  const validationRules = {
    username: { required: 'Username is required' },
    password: { required: 'Password is required' },
  };

  const displayValidationErrors = (field) => {
    return errors[field] ? <span style={{ color: 'red', fontSize: '14px' }}>{errors[field].message}</span> : null;
  };

  async function SaveData(data)
    {

    
      try {
         await axios.post('http://localhost:8000/loginpage/', data);
        console.log('Login successful');
        // Redirect to dashboard or handle success as needed
        navi('/adm/admindash');
      } catch (error) {
        console.error('AxiosError:', error);
        // Handle specific error status or show a generic error message
        if (error.response && error.response.status === 401) {
          setLoginError('Invalid username or password');
        } else {
          setLoginError('An error occurred during login');
        }
      }
    }

  return (
    <div className="Login container-fluid form-container">
      
      <form onSubmit={handleSubmit(SaveData)} className='mt-5 pt-5 m-auto d-flex'>
        <div className="col-4">
        </div>
        <div className="form-row col-8">
          <div className="col-12 col-lg-6 m-auto">
            <center><h2>Login</h2></center>
            <input className='form-control shadow-none rounded-3 mt-4' type="text" placeholder='Enter Username' {...register('username',validationRules.username)} />
            {displayValidationErrors('username')}
            <input className='form-control shadow-none rounded-3 mt-4' type="password" placeholder='Enter Password'{...register('password',validationRules.password)} />
            {displayValidationErrors('password')}
          </div>

          <div className="col-12 col-lg-6 m-auto text-center mb-4">
          {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
            <button type='submit' className='rounded-3 border-3 btn btn-primary mt-4 mb-5 col-12'>Login</button>
            <div className="text-center text-primary fw-bold">
              <small>Already User To CMS HealthCare:</small>
              <a className="text-danger" href="/password-request">Forgotten Password?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;