import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function BankDetails() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [bankInfo, setBankInfo] = useState({ bank_name: '', branch_name: '' });
  const [error, setError] = useState('');

  // Function to fetch bank details based on IFSC code
  const fetchBankDetails = async (ifscCode) => {
    try {
      const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
      const data = response.data;

      // Set the bank name and branch name in state
      setBankInfo({
        bank_name: data.BANK,
        branch_name: data.BRANCH,
      });

      // Clear any previous error message
      setError('');
    } catch (error) {
      // Handle the error when an incorrect or unsupported IFSC code is entered
      console.error('Error fetching bank details', error);

      // Set an error message to inform the user
      setError('Invalid IFSC code');

      // Clear the "Bank Name" and "Branch Name" fields on error
      setBankInfo({ bank_name: '', branch_name: '' });
    }
  }

  // Use useEffect to update form fields when bankInfo changes
  useEffect(() => {
    setValue('bank_name', bankInfo.bank_name);
    setValue('branch_name', bankInfo.branch_name);
  }, [bankInfo]);

  const savedata = (data) => {
    axios.post('http://127.0.0.1:8000/patientreg/bankdetails/', data);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(savedata)}><br/><br/>


        <label htmlFor='pn'>Pan Card Number</label><br />
        <input type='text'id='pn' placeholder='enter pan no'className={`form-control ${errors.pancard_number ? 'is-invalid' : ''}`}
          {...register('pancard_number', {
            pattern: {
              value: /^[A-Z]{5}\d{4}[A-Z]$/, // PAN card format pattern
              message: 'Invalid PAN card number',},})}/><br/>
        {errors.pancard_number && <div className='invalid-feedback'>{errors.pancard_number.message}</div>}

        <label htmlFor='acn'>Account No</label>
        <input type='number'id='acn'placeholder='enter account no'className={`form-control ${errors.account_number ? 'is-invalid' : ''}`}
          {...register('account_number', {
            validate: {
              validLength: (value) => {
                // Validate that the input is a 12 to 17-digit integer
                const accountNumber = String(value).replace(/\D/g, ''); // Remove non-digits
                if (accountNumber.length < 12 || accountNumber.length > 17) {
                  return 'Invalid account number';
                }
                return true;
              },
            },
          })}
        /><br/>
        {errors.account_number && <div className='invalid-feedback'>{errors.account_number.message}</div>}

        <label htmlFor='ic'>IFSC Code</label><br />
        <input type='text'id='ic'placeholder='enter ifsc code'className='form-control'
        {...register('ifsc_code')}
          onChange={(e) => {
            console.log('IFSC Code Changed:', e.target.value);
            fetchBankDetails(e.target.value);
          }}
        /><br />

        {/* Error message for invalid IFSC code */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor='bn'>Bank Name</label><br />
        <input type='text' id='bn' placeholder='enter bankname'className='form-control'
        {...register('bank_name')}/><br />

        <label htmlFor='brn'>Branch Name</label><br />
        <input type='text'id='brn'placeholder='enter branch name'className='form-control'
          {...register('branch_name')}/><br />

        <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'} />
      </form>
    </div>
  );
}
