import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function PaymentInfo() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [fromBankInfo, setFromBankInfo] = useState({ from_bank_name: '', from_branch_name: '' });
  const [toBankInfo, setToBankInfo] = useState({ to_bank_name: '', to_branch_name: '' });
  const [error, setError] = useState('');

  const fetchBankDetails = async (ifscCode, isFromBank) => {
    try {
      const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
      const data = response.data;

      if (isFromBank) {
        setFromBankInfo({
          from_bank_name: data.BANK,
          from_branch_name: data.BRANCH,
        });
        setError('');
      } else {
        setToBankInfo({
          to_bank_name: data.BANK,
          to_branch_name: data.BRANCH,
        });
        setError('');
      }
    } catch (error) {
      console.error('Error fetching bank details', error);

      setError('Invalid IFSC code');

      if (isFromBank) {
        setFromBankInfo({ from_bank_name: '', from_branch_name: '' });
      } else {
        setToBankInfo({ to_bank_name: '', to_branch_name: '' });
      }
    }
  }

  useEffect(() => {
    setValue('from_bank_name', fromBankInfo.from_bank_name);
    setValue('from_branch_name', fromBankInfo.from_branch_name);
  }, [fromBankInfo, setValue]);

  useEffect(() => {
    setValue('to_bank_name', toBankInfo.to_bank_name);
    setValue('to_branch_name', toBankInfo.to_branch_name);
  }, [toBankInfo, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/bill/PaymentInfo/', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}><br/><br/><br/>
        {/* From Account Number */}
        <label htmlFor='from_account_number'>From Account Number</label><br />
        <input
          type='number'
          id='from_account_number'
          placeholder='Enter account number'
          className={`form-control ${errors.from_account_number ? 'is-invalid' : ''}`}
          {...register('from_account_number', {
            required: 'Account number is required',
            validate: {
              validLength: (value) => {
                const accountNumber = String(value).replace(/\D/g, '');
                if (accountNumber.length < 12 || accountNumber.length > 17) {
                  return 'Invalid account number';
                }
                return true;
              },
            },
          })}
        />
        {errors.from_account_number && <div className='invalid-feedback'>{errors.from_account_number.message}</div>}

        {/* From IFSC Code */}
        <label htmlFor='from_ifsc_code'>From IFSC Code</label><br />
        <input
          type='text'
          id='from_ifsc_code'
          placeholder='Enter IFSC code'
          className={`form-control ${errors.from_ifsc_code ? 'is-invalid' : ''}`}
          {...register('from_ifsc_code', { required: 'IFSC code is required' })}
          onChange={(e) => {
            console.log('IFSC Code Changed:', e.target.value);
            fetchBankDetails(e.target.value, true);
          }}
        />
        {errors.from_ifsc_code && <div className='invalid-feedback'>{errors.from_ifsc_code.message}</div>}

        {/* From Bank Name */}
        <label htmlFor='from_bank_name'>From Bank Name</label><br />
        <input
          type='text'
          id='from_bank_name'
          placeholder='Enter bank name'
          className='form-control'
          {...register('from_bank_name')}
          readOnly
        />

        {/* From Branch Name */}
        <label htmlFor='from_branch_name'>From Branch Name</label><br />
        <input
          type='text'
          id='from_branch_name'
          placeholder='Enter branch name'
          className='form-control'
          {...register('from_branch_name')}
          readOnly
        />

        {/* Patient Code */}
        <label htmlFor='patient_code'>Patient Code</label><br />
        <input
          type='text'
          id='patient_code'
          placeholder='Enter patient code'
          className={`form-control ${errors.patient_code ? 'is-invalid' : ''}`}
          {...register('patient_code', { required: 'Patient code is required' })}
        />
        {errors.patient_code && <div className='invalid-feedback'>{errors.patient_code.message}</div>}

        {/* Insurance Code */}
        <label htmlFor='insurance_code'>Insurance Code</label><br />
        <input
          type='text'
          id='insurance_code'
          placeholder='Enter insurance code'
          className={`form-control ${errors.insurance_code ? 'is-invalid' : ''}`}
          {...register('insurance_code', { required: 'Insurance code is required' })}
        />
        {errors.insurance_code && <div className='invalid-feedback'>{errors.insurance_code.message}</div>}

        {/* To Account Number */}
        <label htmlFor='to_account_number'>To Account Number</label><br />
        <input
          type='number'
          id='to_account_number'
          placeholder='Enter to account number'
          className={`form-control ${errors.to_account_number ? 'is-invalid' : ''}`}
          {...register('to_account_number', {
            required: 'To account number is required',
            validate: {
              validLength: (value) => {
                const accountNumber = String(value).replace(/\D/g, '');
                if (accountNumber.length < 12 || accountNumber.length > 17) {
                  return 'Invalid account number';
                }
                return true;
              },
            },
          })}
        />
        {errors.to_account_number && <div className='invalid-feedback'>{errors.to_account_number.message}</div>}

        {/* To IFSC Code */}
        <label htmlFor='to_ifsc_code'>To IFSC Code</label><br />
        <input
          type='text'
          id='to_ifsc_code'
          placeholder='Enter to IFSC code'
          className={`form-control ${errors.to_ifsc_code ? 'is-invalid' : ''}`}
          {...register('to_ifsc_code', { required: 'To IFSC code is required' })}
          onChange={(e) => {
            console.log('To IFSC Code Changed:', e.target.value);
            fetchBankDetails(e.target.value, false);
          }}
        />
        {errors.to_ifsc_code && <div className='invalid-feedback'>{errors.to_ifsc_code.message}</div>}

        {/* To Bank Name */}
        <label htmlFor='to_bank_name'>To Bank Name</label><br />
        <input
          type='text'
          id='to_bank_name'
          placeholder='Enter to bank name'
          className={`form-control ${errors.to_bank_name ? 'is-invalid' : ''}`}
          {...register('to_bank_name', { required: 'To bank name is required' })}
          readOnly
        />
        {errors.to_bank_name && <div className='invalid-feedback'>{errors.to_bank_name.message}</div>}

        {/* To Branch Name */}
        <label htmlFor='to_branch_name'>To Branch Name</label><br />
        <input
          type='text'
          id='to_branch_name'
          placeholder='Enter to branch name'
          className={`form-control ${errors.to_branch_name ? 'is-invalid' : ''}`}
          {...register('to_branch_name', { required: 'To branch name is required' })}
          readOnly
        />
        {errors.to_branch_name && <div className='invalid-feedback'>{errors.to_branch_name.message}</div>}

        {/* Denied Reason */}
        <label htmlFor='denied_reason'>Denied Reason</label><br />
        <input
          type='text'
          id='denied_reason'
          placeholder='Enter denied reason'
          className='form-control'
          {...register('denied_reason')}
        />

        {/* Remark */}
        <label htmlFor='remark'>Remark</label><br />
        <input
          type='text'
          id='remark'
          placeholder='Enter remark'
          className='form-control'
          {...register('remark')}
        />

        {/* Total Amount */}
        <label htmlFor='total_amount'>Total Amount</label><br />
        <input
          type='number'
          id='total_amount'
          placeholder='Enter total amount'
          className={`form-control ${errors.total_amount ? 'is-invalid' : ''}`}
          {...register('total_amount', { required: 'Total amount is required' })}
        />
        {errors.total_amount && <div className='invalid-feedback'>{errors.total_amount.message}</div>}

        {/* Claim Amount */}
        <label htmlFor='claim_amount'>Claim Amount</label><br />
        <input
          type='number'
          id='claim_amount'
          placeholder='Enter claim amount'
          className={`form-control ${errors.claim_amount ? 'is-invalid' : ''}`}
          {...register('claim_amount', { required: 'Claim amount is required' })}
        />
        {errors.claim_amount && <div className='invalid-feedback'>{errors.claim_amount.message}</div>}

        {/* Payment Status */}
        <label htmlFor='payment_status'>Payment Status</label><br />
        <input
          type='text'
          id='payment_status'
          placeholder='Enter payment status'
          className='form-control'
          {...register('payment_status')}
        />

        {/* Submit Button */}
        <input type='submit' value='SAVE DATA' className='btn btn-outline-success col-12 btn-lg'/>
      </form>
    </div>
  );
}