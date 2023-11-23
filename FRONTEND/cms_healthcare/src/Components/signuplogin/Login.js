import React from 'react';

import '../../assets/css/Login.css';
import '../../assets/images/Login.jpg';

function Login() {
  return (
    <div className="Login container-fluid form-container">
      <form className='mt-5 pt-5 m-auto d-flex'>
        <div className="col-4">
        </div>
        <div className="form-row col-8">
          <div className="col-12 col-lg-6 m-auto">
            <center><h2>Login</h2></center>
            <input className='form-control shadow-none rounded-3 mt-4' type="text" placeholder='Enter Username' />
            <input className='form-control shadow-none rounded-3 mt-4' type="password" placeholder='Password' />
          </div>

          <div className="col-12 col-lg-6 m-auto text-center mb-4">
            <button type='submit' className='rounded-3 border-3 btn btn-primary mt-4 mb-5 col-12'>Login</button>
            <div className="text-center text-primary fw-bold">
              <small>New User To CMS HealthCare</small>
              <a className="text-danger" href="#">Signup</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
