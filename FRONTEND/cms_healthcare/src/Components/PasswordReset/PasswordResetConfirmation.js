import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PasswordResetConfirmation = () => {
  const { uidb64, token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/password-reset/${uidb64}/${token}/`,
        { password }
      );
      setMessage('Password successfully reset. Go back to the login page.');
    } catch (error) {
      setError(error.response.data.detail[0]);
    }
  };

  return (
    <div className="password-reset-container container-fluid form-container">
      <div className="form-row mt-5"><br/>
        <h3 className='text-center mb-5' style={{ color: "#020f4a" }}>Password Reset</h3>
        <div className="col-12 col-lg-4 m-auto"></div>
        <p>{message}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="col-12 col-lg-4 m-auto text-center">
          <input
            className="form-control form-control-sm shadow-none rounded-0 mt-3"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button
            className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
            style={{ backgroundColor: "#121831" }}
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetConfirmation;
