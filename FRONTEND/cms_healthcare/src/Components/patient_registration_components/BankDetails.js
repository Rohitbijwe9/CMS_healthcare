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
    <div className='container form-container mt-5'>
      <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
        <div className="col-12 col-lg-4 m-auto mb-5">

            <h5 className='text-center mb-5'>Bank Details</h5>
        
            <input type='text'id='pn' placeholder='Enter PAN number'className={`form-control shadow-none rounded-0 mt-3 ${errors.pancard_number ? 'is-invalid' : ''}`}
              {...register('pancard_number', {
                pattern: {
                  value: /^[A-Z]{5}\d{4}[A-Z]$/, // PAN card format pattern
                  message: 'Invalid PAN card number',},})}/>
            {errors.pancard_number && <div className='invalid-feedback'>{errors.pancard_number.message}</div>}

            
            <input type='number'id='acn'placeholder='Enter Account number'className={`form-control shadow-none rounded-0 mt-3 ${errors.account_number ? 'is-invalid' : ''}`}
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
            />
            {errors.account_number && <div className='invalid-feedback'>{errors.account_number.message}</div>}

            
            <input type='text'id='ic'placeholder='Enter IFSC code'className='form-control shadow-none rounded-0 mt-3'
            {...register('ifsc_code')}
              onChange={(e) => {
                console.log('IFSC Code Changed:', e.target.value);
                fetchBankDetails(e.target.value);
              }}
            />

            {/* Error message for invalid IFSC code */}
            {error && <span className='text-danger' style={{fontSize: 14}}>{error}</span>}
            

            
            <input type='text' id='bn' placeholder='Enter Bank name'className='form-control shadow-none rounded-0 mt-3'
            {...register('bank_name')}/>

            
            <input type='text'id='brn'placeholder='Enter Branch name'className='form-control shadow-none rounded-0 mt-3'
              {...register('branch_name')}/>

            <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'} />

        </div>
      </form>
    </div>
  );
}