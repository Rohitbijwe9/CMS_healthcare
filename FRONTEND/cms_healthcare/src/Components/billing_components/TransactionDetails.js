import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TransactionDetails() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  async function savedata(data) {
    try {
      const result = await axios.post('http://127.0.0.1:8000/bill/tran_detail/', data);
      console.log(result.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  // Use useEffect to set the form values on initial render
  useEffect(() => {
    setValue('pan_card_number', ''); // Set initial value for pan_card_number
    setValue('transaction_number', ''); // Set initial value for transaction_number
    setValue('account_number', ''); // Set initial value for account_number
    setValue('bank_name', ''); // Set initial value for bank_name
    setValue('branch_name', ''); // Set initial value for branch_name
    setValue('bank_ifsc_code', ''); // Set initial value for bank_ifsc_code
  }, [setValue]);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(savedata)}>
        <br />
        <br />

        <div className='mb-3'>
          <label htmlFor='pan_card_number' className='form-label'>
            Pan Card Number
          </label>
          <input
            type='text'
            id='pan_card_number'
            placeholder='Enter Pan Card Number'
            className={`form-control ${errors.pan_card_number ? 'is-invalid' : ''}`}
            {...register('pan_card_number', {
              required: 'Pan Card Number is required',
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                message: 'Invalid Pan Card Number',
              },
            })}
          />
          {errors.pan_card_number && (
            <div className='invalid-feedback'>{errors.pan_card_number.message}</div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='transaction_number' className='form-label'>
            Transaction Number
          </label>
          <input
            type='text'
            id='transaction_number'
            placeholder='Enter Transaction Number'
            className={`form-control ${errors.transaction_number ? 'is-invalid' : ''}`}
            {...register('transaction_number', { required: 'Transaction Number is required' })}
          />
          {errors.transaction_number && (
            <div className='invalid-feedback'>{errors.transaction_number.message}</div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='account_number' className='form-label'>
            Account Number
          </label>
          <input
            type='text'
            id='account_number'
            placeholder='Enter Account Number'
            className={`form-control ${errors.account_number ? 'is-invalid' : ''}`}
            {...register('account_number', { required: 'Account Number is required' })}
          />
          {errors.account_number && (
            <div className='invalid-feedback'>{errors.account_number.message}</div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='bank_name' className='form-label'>
            Bank Name
          </label>
          <input
            type='text'
            id='bank_name'
            placeholder='Enter Bank Name'
            className={`form-control ${errors.bank_name ? 'is-invalid' : ''}`}
            {...register('bank_name', { required: 'Bank Name is required' })}
          />
          {errors.bank_name && <div className='invalid-feedback'>{errors.bank_name.message}</div>}
        </div>

        <div className='mb-3'>
          <label htmlFor='branch_name' className='form-label'>
            Branch Name
          </label>
          <input
            type='text'
            id='branch_name'
            placeholder='Enter Branch Name'
            className={`form-control ${errors.branch_name ? 'is-invalid' : ''}`}
            {...register('branch_name', { required: 'Branch Name is required' })}
          />
          {errors.branch_name && (
            <div className='invalid-feedback'>{errors.branch_name.message}</div>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='bank_ifsc_code' className='form-label'>
            IFSC Code
          </label>
          <input
            type='text'
            id='bank_ifsc_code'
            placeholder='Enter IFSC Code'
            className={`form-control ${errors.bank_ifsc_code ? 'is-invalid' : ''}`}
            {...register('bank_ifsc_code', {
              required: 'IFSC Code is required',
              pattern: {
                value: /^[A-Za-z]{4}\d{7}$/,
                message: 'Invalid IFSC Code',
              },
            })}
          />
          {errors.bank_ifsc_code && (
            <div className='invalid-feedback'>{errors.bank_ifsc_code.message}</div>
          )}
        </div>

        <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'} />
      </form>
    </div>
  );
}
