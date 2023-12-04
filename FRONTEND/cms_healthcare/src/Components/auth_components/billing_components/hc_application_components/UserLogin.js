import React,{useContext,  useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../../App';

//export var user_type = 'default_value';
export var user_name = 'default_value';
export var user_image = 'default_value';
export var current_user_link = 'default_value';


function UserLogin({setUserRole}) {
 
  
  
  const {state, dispatch} = useContext(UserContext);

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
      
      var current_user_link = `http://localhost:8000/user_type/${data.username}`
      
      async function fetchData()
      {
        try {
          const result = await axios.get(current_user_link);
          setUserRole(result.data.user_type)
         // user_type = ; // Set user_type
          user_name = result.data.username;
          user_image = result.data.user_image;
          
          console.log('user_name : ', user_name);
          console.log('result.data.user_type : ', result.data.user_type);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Set a default value for user_type in case of an error
          //user_type = 'default_user_type';
          user_name = 'default_user_name';
        }
      }
      
      fetchData();
      
      try {
         const result = await axios.post('http://localhost:8000/loginpage/', data);
         dispatch({type:"USER", payload:true})
        console.log(result)
        // Stroe access token in sessionStorage
        sessionStorage.setItem('access',result.data.access)
        sessionStorage.setItem('refresh',result.data.refresh)
        console.log('data.username : ', data.username)
        console.log('current_user_link : ', current_user_link)
        navi('/');
        console.log('Login successful');
        // Redirect to dashboard or handle success as needed
        
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

export default UserLogin;