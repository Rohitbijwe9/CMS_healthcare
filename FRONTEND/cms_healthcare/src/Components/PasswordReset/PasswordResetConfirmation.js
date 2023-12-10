

// export default PasswordResetConfirmation;
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
        { password },
        // Add headers if needed, such as Content-Type
       setMessage('Password successfull Go Back To Login Page')
      );

      setMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.detail[0]);
    }
  };

  return (
    <div className="contactdetails container-fluid form-container">
      <div className="form-row">
          <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Password Reset</h3>
      <div className="col-12 col-lg-4 m-auto"></div>
      <p>{message}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        className="form-control shadow-none rounded-0 mt-3"
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      
      className="rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12"
      style={{ backgroundColor: "#121831" }}
      
      onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default PasswordResetConfirmation;