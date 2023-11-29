import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Patient() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [contactDetails, setContactDetails] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // Fetch contact details data when the component mounts
    async function fetchContactDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/patientcont/');
        setContactDetails(response.data);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    }

    fetchContactDetails();
  }, []);

  useEffect(() => {
    async function fetchAddressDetails() {
      try {
        const responseAddresses = await axios.get('http://127.0.0.1:8000/patientreg/patientadress/');
        console.log('Response Addresses:', responseAddresses.data);
        setAddresses(responseAddresses.data);
      } catch (error) {
        console.error('Error fetching address details:', error);
      }
    }
  
    fetchAddressDetails();
  }, []);

    

  const savedata = async (data) => {
    try {
      data.patient_image = data.patient_image[0];
      data.patient_aadhar_card_image = data.patient_aadhar_card_image[0];

      // Adjust the URL according to your Django API endpoint
      const resp = await axios.post('http://127.0.0.1:8000/patientreg/patient/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(resp.data);
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <>
      <div className='container'>
        <br/><br/><br/>
        <form encType='multipart/form-data' onSubmit={handleSubmit(savedata)}>
        
        <label htmlFor='claim_status'>Claim Status</label><br/>
<input
  type='radio'
  id='pending'
  value='pending'
  {...register('claim_status', { required: 'Claim Status is required' })}
/>
<label htmlFor='pending'>Pending</label><br/><br/>

<input
  type='radio'
  id='success'
  value='success'
  {...register('claim_status', { required: 'Claim Status is required' })}
/>
<label htmlFor='success'>Success</label><br/><br/>

<input
  type='radio'
  id='denied'
  value='denied'
  {...register('claim_status', { required: 'Claim Status is required' })}
/>
<label htmlFor='denied'>Denied</label><br/><br/>

{errors.claim_status && <p className='error'>{errors.claim_status.message}</p>}

<label htmlFor='patient_first_name'>Patient First Name</label><br/>
<input
  type='text'
  id='patient_first_name'
  placeholder='Enter patient first name'
  className={`form-control ${errors.patient_first_name ? 'is-invalid' : ''}`}
  {...register('patient_first_name', { required: 'Patient First Name is required' })}
/>
{errors.patient_first_name && <p className='invalid-feedback'>{errors.patient_first_name.message}</p>}


     
      <label htmlFor='plname'>Patient Last Name</label><br/>
<input
  type='text'
  id='plname'
  placeholder='Enter patient last name'
  className={`form-control ${errors.patient_last_name ? 'is-invalid' : ''}`}
  {...register('patient_last_name', { required: 'Patient Last Name is required' })}
/>
{errors.patient_last_name && <p className='invalid-feedback'>{errors.patient_last_name.message}</p>}

<label htmlFor='pmn'>Patient Middle Name</label><br/>
<input
  type='text'
  id='pmn'
  placeholder='Enter patient middle name'
  className={`form-control ${errors.patient_middle_name ? 'is-invalid' : ''}`}
  {...register('patient_middle_name', { required: 'Patient Middle Name is required' })}
/>
{errors.patient_middle_name && <p className='invalid-feedback'>{errors.patient_middle_name.message}</p>}
<br/>



<label htmlFor='patient_code'>Patient Code</label><br/>
<input
  type='number'
  id='patient_code'
  placeholder='Enter patient code'
  className={`form-control ${errors.patient_code ? 'is-invalid' : ''}`}
  {...register('patient_code', { required: 'Patient Code is required' })}
/>
{errors.patient_code && <p className='invalid-feedback'>{errors.patient_code.message}</p>}
<br/>


<label htmlFor='pprifix'>Patient Prefix</label><br/>
<input
  type='text'
  id='pprifix'
  placeholder='Enter patient prefix'
  className={`form-control ${errors.patient_name_prefix ? 'is-invalid' : ''}`}
  {...register('patient_name_prefix', { required: 'Patient Prefix is required' })}
/>
{errors.patient_name_prefix && <p className='invalid-feedback'>{errors.patient_name_prefix.message}</p>}
<br/>


<label htmlFor='psufix'>Patient Suffix</label><br/>
<input
  type='text'
  id='psufix'
  placeholder='Enter patient suffix'
  className={`form-control ${errors.patient_name_suffix ? 'is-invalid' : ''}`}
  {...register('patient_name_suffix', { required: 'Patient Suffix is required' })}
/>
{errors.patient_name_suffix && <p className='invalid-feedback'>{errors.patient_name_suffix.message}</p>}
<br/>



<label htmlFor='page'>Patient Age</label><br/>
<input
  type='number'
  id='page'
  placeholder='Enter patient age'
  className={`form-control ${errors.patient_age ? 'is-invalid' : ''}`}
  {...register('patient_age', { required: 'Patient Age is required' })}
/>
{errors.patient_age && <p className='invalid-feedback'>{errors.patient_age.message}</p>}
<br/>

<label htmlFor='pweight'>Patient Weight</label><br/>
<input
  type='number'
  id='pweight'
  placeholder='Enter patient weight'
  className={`form-control ${errors.patient_weight ? 'is-invalid' : ''}`}
  {...register('patient_weight', { required: 'Patient Weight is required' })}
/>
{errors.patient_weight && <p className='invalid-feedback'>{errors.patient_weight.message}</p>}
<br/>

<label htmlFor='pheight'>Patient Height</label><br/>
<input
  type='number'
  id='pheight'
  placeholder='Enter patient height'
  className={`form-control ${errors.patient_height ? 'is-invalid' : ''}`}
  {...register('patient_height', { required: 'Patient Height is required' })}
/>
{errors.patient_height && <p className='invalid-feedback'>{errors.patient_height.message}</p>}
<br/>

<label htmlFor='pimg'>Patient Image</label><br/>
<input
  type='file'
  id='pimg'
  className={`form-control ${errors.patient_image ? 'is-invalid' : ''}`}
  {...register('patient_image', { required: 'Patient Image is required' })}
/>
{errors.patient_image && <p className='invalid-feedback'>{errors.patient_image.message}</p>}
<br/>

<label htmlFor='ms'>Marital Status</label><br/>
<input
  type='radio'
  id='married'
  value='married'
  {...register('patient_marital_status', { required: 'Marital Status is required' })}
/>
<b>Married</b><br/><br/>
<input
  type='radio'
  id='unmarried'
  value='unmarried'
  {...register('patient_marital_status', { required: 'Marital Status is required' })}
/>
<b>Unmarried</b><br/><br/>
<input
  type='radio'
  id='divorced'
  value='divorced'
  {...register('patient_marital_status', { required: 'Marital Status is required' })}
/>
<b>Divorced</b><br/><br/>
<input
  type='radio'
  id='widow'
  value='widow'
  {...register('patient_marital_status', { required: 'Marital Status is required' })}
/>
<b>Widow</b><br/><br/>
{errors.patient_marital_status && <p className='invalid-feedback'>{errors.patient_marital_status.message}</p>}

<label htmlFor='gen'>Gender</label><br/>
<input
  type='radio'
  id='male'
  value='male'
  {...register('patient_gender', { required: 'Gender is required' })}
/>
<b>Male</b><br/><br/>
<input
  type='radio'
  id='female'
  value='female'
  {...register('patient_gender', { required: 'Gender is required' })}
/>
<b>Female</b><br/><br/>
<input
  type='radio'
  id='other'
  value='other'
  {...register('patient_gender', { required: 'Gender is required' })}
/>
<b>Other</b><br/><br/>
{errors.patient_gender && <p className='invalid-feedback'>{errors.patient_gender.message}</p>}

<label htmlFor='ph'>Patient Handicap</label><br/>
<input
  type='radio'
  id='ph-yes'
  value='True'
  {...register('patient_is_handicap', { required: 'Please select Yes or No for Patient Handicap' })}
/>
<b>Yes</b><br/><br/>
<input
  type='radio'
  id='ph-no'
  value='False'
  {...register('patient_is_handicap', { required: 'Please select Yes or No for Patient Handicap' })}
/>
<b>No</b><br/><br/>
{errors.patient_is_handicap && <p className='invalid-feedback'>{errors.patient_is_handicap.message}</p>}

<label htmlFor='pdob'>Patient DOB</label><br/>
<input
  type='date'
  id='pdob'
  className={`form-control ${errors.patient_date_of_birth ? 'is-invalid' : ''}`}
  {...register('patient_date_of_birth', { required: 'Patient DOB is required' })}
/>
{errors.patient_date_of_birth && <p className='invalid-feedback'>{errors.patient_date_of_birth.message}</p>}
<br/>

<label htmlFor='po'>Patient Occupation</label><br/>
<input
  type='text'
  id='po'
  placeholder='Enter patient occupation'
  className={`form-control ${errors.patient_occupation ? 'is-invalid' : ''}`}
  {...register('patient_occupation', { required: 'Patient Occupation is required' })}
/>
{errors.patient_occupation && <p className='invalid-feedback'>{errors.patient_occupation.message}</p>}
<br/>

<label htmlFor='padhar'>Patient Adhar No</label><br/>
<input
  type='number'
  id='padhar'
  placeholder='Enter patient Adhar No'
  className={`form-control ${errors.patient_aadhar_card_number ? 'is-invalid' : ''}`}
  {...register('patient_aadhar_card_number', { required: 'Patient Adhar No is required' })}
/>
{errors.patient_aadhar_card_number && <p className='invalid-feedback'>{errors.patient_aadhar_card_number.message}</p>}
<br/>

<label htmlFor='paimg'>Patient Adhar Image</label><br/>
<input
  type='file'
  id='paimg'
  className={`form-control ${errors.patient_aadhar_card_image ? 'is-invalid' : ''}`}
  {...register('patient_aadhar_card_image', { required: 'Patient Adhar Image is required' })}
/>
{errors.patient_aadhar_card_image && <p className='invalid-feedback'>{errors.patient_aadhar_card_image.message}</p>}
<br/>

<label htmlFor='pcd'>Patient Created Date</label><br/>
<input
  type='date'
  id='pcd'
  className={`form-control ${errors.created_on ? 'is-invalid' : ''}`}
  {...register('created_on', { required: 'Patient Created Date is required' })}
/>
{errors.created_on && <p className='invalid-feedback'>{errors.created_on.message}</p>}
<br/>

<label htmlFor='pud'>Patient Updated Date</label><br/>
<input
  type='date'
  id='pud'
  className={`form-control ${errors.updated_on ? 'is-invalid' : ''}`}
  {...register('updated_on', { required: 'Patient Updated Date is required' })}
/>
{errors.updated_on && <p className='invalid-feedback'>{errors.updated_on.message}</p>}
<br/>

<label htmlFor='addressId'>Select Address</label>
<select
  id='addressId'
  name='addressId'
  className={`form-control shadow-none rounded-0 mt-3 ${errors.patients_add_details ? 'is-invalid' : ''}`}
  {...register('patients_add_details', { required: 'Please select an address' })}
>
  <option value='' disabled>Select Address</option>
  {addresses.map((address) => (
    <option key={address.addpatients_details_id} value={address.addpatients_details_id}>
      {`${address.addpatients_details_id} - ${address.city}`}
    </option>
  ))}
</select>
{errors.patients_add_details && <p className="invalid-feedback">{errors.patients_add_details.message}</p>}
<br />


<label htmlFor="contactId">Select Contact</label>
<select
  id="contactId"
  name="contactId"
  className={`form-control shadow-none rounded-0 mt-3 ${errors.contact_details ? 'is-invalid' : ''}`}
  {...register('contact_details', { required: 'Please select a contact' })}
>
  <option value="" disabled>Select Contact</option>
  {contactDetails.map((contact) => (
    <option key={contact.contact_details_id} value={contact.contact_details_id}>
      {`${contact.contact_details_id} - ${contact.alternate_mobile_number}`}
    </option>
  ))}
</select>
{errors.contact_details && <p className='invalid-feedback'>{errors.contact_details.message}</p>}
<br />

      



      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>



</form>
  </div>



   </>
  )
}
