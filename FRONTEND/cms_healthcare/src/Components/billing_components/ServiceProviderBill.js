import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

function ServiceProviderBill() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [claims, setClaims] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const serviceProvidersResponse = await axios.get('http://127.0.0.1:8000/bill/serviceproviderbillservice/');
        setServiceProviders(serviceProvidersResponse.data);

        const claimsResponse = await axios.get('http://127.0.0.1:8000/bill/serviceproviderbillclaim/');
        setClaims(claimsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  async function SaveData(data) {
    const formData = new FormData();
    
    formData.append('service_provider_code', data.service_provider_code);
    formData.append('bill_number', data.bill_number);
    formData.append('bill_date', data.bill_date);
    formData.append('issued_by', data.issued_by);
    formData.append('title', data.title);
    formData.append('amount', data.amount);
    formData.append('bill_image', data.bill_image[0]); // Assuming you're allowing only one image upload
    formData.append('service_provider', data.service_provider); 
    formData.append('claim', data.claim); 

    try {
      const result = await axios.post('http://127.0.0.1:8000/bill/ServiceProviderbill/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(SaveData)} encType='multipart/form-data'>
        <br />
        <br />
        <br />
        <br />

        {/* Service Provider Code */}
        <label htmlFor='spc'>Service Provider Code</label>
        <input
          type='text'
          id='spc'
          placeholder='Service Provider Code'
          className={`form-control ${errors.service_provider_code ? 'is-invalid' : ''}`}
          {...register('service_provider_code', { required: 'Service Provider Code is required' })}
        />
        {errors.service_provider_code && (
          <div className='invalid-feedback'>{errors.service_provider_code.message}</div>
        )}
        <br />

        {/* Bill Number */}
        <label htmlFor='bn'>Bill No</label>
        <input
          type='text'
          id='bn'
          placeholder='Bill Number'
          className={`form-control ${errors.bill_number ? 'is-invalid' : ''}`}
          {...register('bill_number', { required: 'Bill Number is required' })}
        />
        {errors.bill_number && <div className='invalid-feedback'>{errors.bill_number.message}</div>}
        <br />

        {/* Bill Date */}
        <label htmlFor='bd'>Bill Date</label>
        <input
          type='date'
          id='bd'
          className={`form-control ${errors.bill_date ? 'is-invalid' : ''}`}
          {...register('bill_date', { required: 'Bill Date is required' })}
        />
        {errors.bill_date && <div className='invalid-feedback'>{errors.bill_date.message}</div>}
        <br />

        {/* Issue By */}
        <label htmlFor='ib'>Issue By</label>
        <input
          type='text'
          id='ib'
          placeholder='Issue By'
          className={`form-control ${errors.issued_by ? 'is-invalid' : ''}`}
          {...register('issued_by', { required: 'Issue By is required' })}
        />
        {errors.issued_by && <div className='invalid-feedback'>{errors.issued_by.message}</div>}
        <br />

        {/* Title */}
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          placeholder='Title'
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <div className='invalid-feedback'>{errors.title.message}</div>}
        <br />

        {/* Amount */}
        <label htmlFor='amt'>Amount</label>
        <input
          type='number'
          id='amt'
          placeholder='Amount'
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          {...register('amount', { required: 'Amount is required' })}
        />
        {errors.amount && <div className='invalid-feedback'>{errors.amount.message}</div>}
        <br />

        {/* Bill Image */}
        <label htmlFor='bi'>Bill Image</label>
        <input
          accept='image/*'
          id='bi'
          className={`form-control ${errors.bill_image ? 'is-invalid' : ''}`}
          type='file'
          {...register('bill_image', { required: 'Bill Image is required' })}
        />
        {errors.bill_image && <div className='invalid-feedback'>{errors.bill_image.message}</div>}
        <br />

       
      

        <label htmlFor='sp'>Service Provider</label>
<select
  id='sp'
  className={`form-control ${errors.service_provider ? 'is-invalid' : ''}`}
  {...register('service_provider', { required: 'ServiceProvider is required' })}
>
  <option value='' disabled>Select ServiceProvider</option>
  {serviceProviders.map((serviceProvider) => (
    <option key={serviceProvider.service_provider_identifier} value={serviceProvider.service_provider_identifier}>
      {`${serviceProvider.service_provider_identifier} - ${serviceProvider.service_provider_name} `}
    </option>
  ))}
</select>
{errors.service_provider && <div className='invalid-feedback'>{errors.service_provider.message}</div>}
<br/>



        <label htmlFor='claim'>Claim</label>
        <select
          id='claim'
          className={`form-control ${errors.claim ? 'is-invalid' : ''}`}
          {...register('claim', { required: 'Claim is required' })}
        >
          <option value='' disabled>Select Claim</option>
          {claims.map((claim) => (
            <option key={claim.claim_id} value={claim.claim_id}>
              {`${claim.claim_id} - ${claim.patient_first_name} ${claim.patient_last_name}`}
            </option>
          ))}
        </select>
        {errors.claim && <div className='invalid-feedback'>{errors.claim.message}</div>}
        <br />

      
        {/* Submit Button */}
        <input type='submit' value='SAVE DATA' className='btn btn-outline-success ' />
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ServiceProviderBill;
