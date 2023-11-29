import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Claim() {
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();

  //const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [contactDetails, setContactDetails] = useState([]);
  const [loadingContactDetails, setLoadingContactDetails] = useState(true);
  const [errorContactDetails, setErrorContactDetails] = useState(null);

  const [addressDetails, setAddressDetails] = useState([]);
  const [loadingAddressDetails, setLoadingAddressDetails] = useState(true);
  const [errorAddressDetails, setErrorAddressDetails] = useState(null);

  const [insuerncepayerDetails, setinsuerncepayeDetails] = useState([]);
  const [loadinginsuerncepayeDetails, setLoadinginsuerncepayeDetails] = useState(true);
  const [errorinsuerncepayeDetails, setErrorinsuerncepayeDetails] = useState(null);

  const [bankDetails, setBankDetails] = useState([]);
  const [loadingBankDetails, setLoadingBankDetails] = useState(true);
  const [errorBankDetails, setErrorBankDetails] = useState(null);

  const [loadingClaim, setLoadingClaim] = useState(false);
  const [errorClaim, setErrorClaim] = useState(null);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/claimidapi/');
        setContactDetails(response.data);
        setLoadingContactDetails(false);
      } catch (error) {
        console.error('Error fetching contact details:', error);
        setErrorContactDetails('Error fetching contact details. Please try again.');
        setLoadingContactDetails(false);
      }
    }

    fetchContactDetails();
  }, []);

  useEffect(() => {
    async function fetchAddressDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/claimadd/');
        setAddressDetails(response.data);
        setLoadingAddressDetails(false);
      } catch (error) {
        console.error('Error fetching address details:', error);
        setErrorAddressDetails('Error fetching address details. Please try again.');
        setLoadingAddressDetails(false);
      }
    }

    fetchAddressDetails();
  }, []);


  useEffect(() => {
    async function fetchInsurencePayerDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/claiminsurencepay/');
        setinsuerncepayeDetails(response.data);
        setLoadinginsuerncepayeDetails(false);
      } catch (error) {
        console.error('Error fetching insurencepayer details:', error);
        setErrorinsuerncepayeDetails('Error fetching insurence payer details. Please try again.');
        setLoadinginsuerncepayeDetails(false);
      }
    }

    fetchInsurencePayerDetails()
  }, []);


  useEffect(() => {
    async function fetchBankDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/patientreg/claimbank/');
        setBankDetails(response.data);
        setLoadingBankDetails(false);
      } catch (error) {
        console.error('Error fetching bank details:', error);
        setErrorBankDetails('Error fetching bank details. Please try again.');
        setLoadingBankDetails(false);
      }
    }
  
    fetchBankDetails();
  }, []);



  const saveClaimData = async (data) => {
    try {
      setLoadingClaim(true);

      // Check if the claim number already exists
      const claimNumberExists = contactDetails.some(
        (contact) => contact.claim_number === parseInt(data.claim_number, 10)
      );

      if (claimNumberExists) {
        setError('claim_number', {
          type: 'manual',
          message: 'Claim with this claim number already exists.',
        });
        return;
      }

      // Continue with the form submission logic
      data.claim_PDF = data.claim_PDF[0];
      data.abuse_report = data.abuse_report[0];
      data.alcohol_report = data.alcohol_report[0];

      const response = await axios.post(
        'http://127.0.0.1:8000/patientreg/claim/',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log('Claim Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving claim data:', error);
      setError('claim_number', {
        type: 'manual',
        message: 'Error saving claim data. Please try again.',
      });
    } finally {
      setLoadingClaim(false);
    }
  };
  return (
    <>
      <div className='container'>
        <form encType='multipart/form-data' onSubmit={handleSubmit(saveClaimData)}>
          <br/><br/><br/>

      


      
     

          <div className="form-group">
  <label htmlFor='insurancecode'>Insurance Code</label>
  <input
    type='text'
    id='insurancecode'
    placeholder='Enter insurance code'
    className={`form-control ${errors.insurance_code ? 'is-invalid' : ''}`}
    {...register('insurance_code', {
      required: 'Insurance Code is required',
      maxLength: {
        value: 20,
        message: 'Insurance Code cannot exceed 20 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.insurance_code && (
    <div className="invalid-feedback">{errors.insurance_code.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pfn'>Patient First Name</label>
  <input
    type='text'
    id='pfn'
    placeholder='Enter patient First name'
    className={`form-control ${errors.patient_first_name ? 'is-invalid' : ''}`}
    {...register('patient_first_name', {
      required: 'Patient First Name is required',
      maxLength: {
        value: 50,
        message: 'Patient First Name cannot exceed 50 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_first_name && (
    <div className="invalid-feedback">{errors.patient_first_name.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pln'>Patient Last Name</label>
  <input
    type='text'
    id='pln'
    placeholder='Enter patient Last name'
    className={`form-control ${errors.patient_last_name ? 'is-invalid' : ''}`}
    {...register('patient_last_name', {
      required: 'Patient Last Name is required',
      maxLength: {
        value: 50,
        message: 'Patient Last Name cannot exceed 50 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_last_name && (
    <div className="invalid-feedback">{errors.patient_last_name.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pmn'>Patient Middle Name</label>
  <input
    type='text'
    id='pmn'
    placeholder='Enter patient middle name'
    className={`form-control ${errors.patient_middle_name ? 'is-invalid' : ''}`}
    {...register('patient_middle_name', {
      maxLength: {
        value: 50,
        message: 'Patient Middle Name cannot exceed 50 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_middle_name && (
    <div className="invalid-feedback">{errors.patient_middle_name.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='patientcode'>Patient Code</label>
  <input
    type='number'
    id='patientcode'
    placeholder='Enter patient code'
    className={`form-control ${errors.patient_code ? 'is-invalid' : ''}`}
    {...register('patient_code', {
      required: 'Patient Code is required',
      valueAsNumber: true, // Ensures the entered value is converted to a number
    })}
  />
  {errors.patient_code && (
    <div className="invalid-feedback">{errors.patient_code.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='ppriffix'>Patient Prefix</label>
  <input
    type='text'
    id='ppriffix'
    placeholder='Enter patient prefix'
    className={`form-control ${errors.patient_prefix ? 'is-invalid' : ''}`}
    {...register('patient_prefix', {
      maxLength: {
        value: 20,
        message: 'Patient Prefix cannot exceed 20 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_prefix && (
    <div className="invalid-feedback">{errors.patient_prefix.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='psuffix'>Patient Suffix</label>
  <input
    type='text'
    id='psuffix'
    placeholder='Enter patient suffix'
    className={`form-control ${errors.patient_suffix ? 'is-invalid' : ''}`}
    {...register('patient_suffix', {
      maxLength: {
        value: 20,
        message: 'Patient Suffix cannot exceed 20 characters',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_suffix && (
    <div className="invalid-feedback">{errors.patient_suffix.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='gender'>Gender</label><br/>
  <input type='radio' id='gender' value='male' {...register('patient_gender', { required: 'Gender is required' })}/> Male<b></b><br/><br/>
  <input type='radio' id='gender' value='female' {...register('patient_gender', { required: 'Gender is required' })}/> Female<b></b><br/><br/>
  <input type='radio' id='gender' value='others' {...register('patient_gender', { required: 'Gender is required' })}/> Others<b></b><br/><br/>
  {errors.patient_gender && (
    <div className="invalid-feedback">{errors.patient_gender.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pageyears'>Patient Age Years</label>
  <input
    type='number'
    id='pageyears'
    placeholder='Enter patient age years'
    className={`form-control ${errors.patient_age_years ? 'is-invalid' : ''}`}
    {...register('patient_age_years', {
      required: 'Patient Age Years is required',
      min: {
        value: 0,
        message: 'Patient Age Years cannot be negative',
      },
      // Add more validation rules as needed
    })}
  />
  {errors.patient_age_years && (
    <div className="invalid-feedback">{errors.patient_age_years.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pagemonth'>Patient Age Month</label>
  <input
    type='number'
    id='pagemonth'
    placeholder='Enter patient age months'
    className={`form-control ${errors.patient_age_months ? 'is-invalid' : ''}`}
    {...register('patient_age_months', {
      required: 'Patient Age Month is required',
      min: {
        value: 0,
        message: 'Patient Age Month cannot be negative',
      },
      max: {
        value: 11,
        message: 'Patient Age Month cannot exceed 11',
      },
    })}
  />
  {errors.patient_age_months && (
    <div className="invalid-feedback">{errors.patient_age_months.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pagedays'>Patient Age Days</label>
  <input
    type='number'
    id='pagedays'
    placeholder='Enter patient age days'
    className={`form-control ${errors.patient_age_days ? 'is-invalid' : ''}`}
    {...register('patient_age_days', {
      required: 'Patient Age Days is required',
      min: {
        value: 0,
        message: 'Patient Age Days cannot be negative',
      },
      max: {
        value: 30,
        message: 'Patient Age Days cannot exceed 30',
      },
    })}
  />
  {errors.patient_age_days && (
    <div className="invalid-feedback">{errors.patient_age_days.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pp'>Patient Is Primary</label><br/>
  <input type='radio' id='pp' value='True' {...register('patient_isprimary', { required: 'Patient Is Primary is required' })}/> True<b></b><br/><br/>
  <input type='radio' id='pp' value='False' {...register('patient_isprimary', { required: 'Patient Is Primary is required' })}/> False<b></b><br/><br/>
  {errors.patient_isprimary && (
    <div className="invalid-feedback">{errors.patient_isprimary.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='pi'>Patient Is Rider</label><br/>
  <input type='radio' id='pi' value='True' {...register('patient_isrider', { required: 'Patient Is Rider is required' })}/> True<b></b><br/><br/>
  <input type='radio' id='pi' value='False' {...register('patient_isrider', { required: 'Patient Is Rider is required' })}/> False<b></b><br/><br/>
  {errors.patient_isrider && (
    <div className="invalid-feedback">{errors.patient_isrider.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='spname'>Service Provider Name</label>
  <input
    type='text'
    id='spname'
    placeholder='Enter service provider name'
    className={`form-control ${errors.service_provider_name ? 'is-invalid' : ''}`}
    {...register('service_provider_name', {
      required: 'Service Provider Name is required',
      maxLength: {
        value: 50,
        message: 'Service Provider Name cannot exceed 50 characters',
      },
    })}
  />
  {errors.service_provider_name && (
    <div className="invalid-feedback">{errors.service_provider_name.message}</div>
  )}
</div>


<div className="form-group">
  <label htmlFor='ms'>Service Provider Code</label>
  <input
    type='text'
    id='ms'
    placeholder='Enter service provider code'
    className={`form-control ${errors.service_provider_code ? 'is-invalid' : ''}`}
    {...register('service_provider_code', {
      required: 'Service Provider Code is required',
      maxLength: {
        value: 20,
        message: 'Service Provider Code cannot exceed 20 characters',
      },
    })}
  />
  {errors.service_provider_code && (
    <div className="invalid-feedback">{errors.service_provider_code.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='areson'>Admitted Reason</label>
  <input
    type='text'
    id='areson'
    placeholder='Enter admitted reason'
    className={`form-control ${errors.admitted_reason ? 'is-invalid' : ''}`}
    {...register('admitted_reason', {
      required: 'Admitted Reason is required',
      maxLength: {
        value: 100,
        message: 'Admitted Reason cannot exceed 100 characters',
      },
    })}
  />
  {errors.admitted_reason && (
    <div className="invalid-feedback">{errors.admitted_reason.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='dsd'>Disease Start Date</label>
  <input
    type='date'
    id='dsd'
    placeholder='Enter disease start date'
    className={`form-control ${errors.disease_start_date ? 'is-invalid' : ''}`}
    {...register('disease_start_date', {
      required: 'Disease Start Date is required',
    })}
  />
  {errors.disease_start_date && (
    <div className="invalid-feedback">{errors.disease_start_date.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='adddate'>Admission Date</label>
  <input
    type='date'
    id='adddate'
    placeholder='Enter admission date'
    className={`form-control ${errors.admission_date ? 'is-invalid' : ''}`}
    {...register('admission_date', {
      required: 'Admission Date is required',
    })}
  />
  {errors.admission_date && (
    <div className="invalid-feedback">{errors.admission_date.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='ddate'>Discharge Date</label>
  <input
    type='date'
    id='ddate'
    placeholder='Enter patient discharge date'
    className={`form-control ${errors.discharge_date ? 'is-invalid' : ''}`}
    {...register('discharge_date', {
      required: 'Discharge Date is required',
    })}
  />
  {errors.discharge_date && (
    <div className="invalid-feedback">{errors.discharge_date.message}</div>
  )}
</div>

<label htmlFor='pr'>Police Report</label><br/>
<input
  type='radio'
  id='prTrue'
  value='True'
  {...register('police_reported', { required: 'Please select whether police reported or not' })}
/>True<br/><br/>
<input
  type='radio'
  id='prFalse'
  value='False'
  {...register('police_reported', { required: 'Please select whether police reported or not' })}
/>False<br/><br/>

      


      
      
      
<label htmlFor='fatt'>FIR Attached</label><br/>
<input
  type='radio'
  id='fattTrue'
  value='True'
  {...register('fir_attached', { required: 'Please select whether FIR is attached or not' })}
/>True<br/><br/>
<input
  type='radio'
  id='fattFalse'
  value='False'
  {...register('fir_attached', { required: 'Please select whether FIR is attached or not' })}
/>False<br/><br/>


<div className="form-group">
  <label htmlFor='php'>Pre Hospital Period</label>
  <input
    type='time'
    id='php'
    placeholder='Enter pre hospital period'
    className={`form-control ${errors.pre_hospital_period ? 'is-invalid' : ''}`}
    {...register('pre_hospital_period', {
      required: 'Pre Hospital Period is required',
    })}
  />
  {errors.pre_hospital_period && (
    <div className="invalid-feedback">{errors.pre_hospital_period.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='posthp'>Post Hospital Period</label>
  <input
    type='time'
    id='posthp'
    placeholder='Enter post hospital period'
    className={`form-control ${errors.post_hospital_period ? 'is-invalid' : ''}`}
    {...register('post_hospital_period', {
      required: 'Post Hospital Period is required',
    })}
  />
  {errors.post_hospital_period && (
    <div className="invalid-feedback">{errors.post_hospital_period.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='dn'>Doctor Name</label>
  <input
    type='text'
    id='dn'
    placeholder='Enter doctor name'
    className={`form-control ${errors.doctor_name ? 'is-invalid' : ''}`}
    {...register('doctor_name', {
      required: 'Doctor Name is required',
      maxLength: {
        value: 50,
        message: 'Doctor Name cannot exceed 50 characters',
      },
    })}
  />
  {errors.doctor_name && (
    <div className="invalid-feedback">{errors.doctor_name.message}</div>
  )}
</div>


<div className="form-group">
  <label htmlFor='dq'>Doctor Qualification</label>
  <input
    type='text'
    id='dq'
    placeholder='Enter doctor qualification'
    className={`form-control ${errors.doctor_qualification ? 'is-invalid' : ''}`}
    {...register('doctor_qualification', {
      maxLength: {
        value: 50,
        message: 'Doctor Qualification cannot exceed 50 characters',
      },
    })}
  />
  {errors.doctor_qualification && (
    <div className="invalid-feedback">{errors.doctor_qualification.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='dmn'>Doctor Mobile No</label>
  <input
    type='text'
    id='dmn'
    placeholder='Enter doctor mobile no'
    className={`form-control ${errors.doctor_mobile_no ? 'is-invalid' : ''}`}
    {...register('doctor_mobile_no', {
      required: 'Doctor Mobile No is required',
    })}
  />
  {errors.doctor_mobile_no && (
    <div className="invalid-feedback">{errors.doctor_mobile_no.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='tyoadd'>Type Of Admission</label><br/>
  <input
    type='text'
    id='tyoadd'
    placeholder='Enter type of admission'
    className={`form-control ${errors.type_of_admission ? 'is-invalid' : ''}`}
    {...register('type_of_admission', {
      required: 'Type Of Admission is required',
    })}
  />
  {errors.type_of_admission && (
    <div className="invalid-feedback">{errors.type_of_admission.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='tclaima'>Total Claim Amount</label><br/>
  <input
    type='text'
    id='tclaima'
    placeholder='Enter total claim amount'
    className={`form-control ${errors.total_claim_amount ? 'is-invalid' : ''}`}
    {...register('total_claim_amount', {
      required: 'Total Claim Amount is required',
    })}
  />
  {errors.total_claim_amount && (
    <div className="invalid-feedback">{errors.total_claim_amount.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='dstatus'>Discharge Status</label><br/>
  <input
    type='radio'
    id='dstatusCured'
    value='Cured'
    {...register('discharge_status', { required: 'Please select the discharge status' })}
  />Cured<br/><br/>
  <input
    type='radio'
    id='dstatusImproved'
    value='Improved'
    {...register('discharge_status', { required: 'Please select the discharge status' })}
  />Improved<br/><br/>
  <input
    type='radio'
    id='dstatusUnchanged'
    value='Unchanged'
    {...register('discharge_status', { required: 'Please select the discharge status' })}
  />Unchanged<br/><br/>
  <input
    type='radio'
    id='dstatusDead'
    value='Dead'
    {...register('discharge_status', { required: 'Please select the discharge status' })}
  />Dead<br/><br/>
  {errors.discharge_status && (
    <div className="invalid-feedback">{errors.discharge_status.message}</div>
  )}
</div>

     
<div className="form-group">
  <label htmlFor='ainj'>Abuse Injury</label><br/>
  <input
    type='radio'
    id='ainjTrue'
    value='True'
    {...register('abuse_injury')}
  />True<br/><br/>
  <input
    type='radio'
    id='ainjFalse'
    value='False'
    {...register('abuse_injury')}
  />False<br/><br/>
</div>

<div className="form-group">
  <label htmlFor='alcinnj'>Alcohol Injury</label><br/>
  <input
    type='radio'
    id='alcinjTrue'
    value='True'
    {...register('alcohol_injury')}
  />True<br/><br/>
  <input
    type='radio'
    id='alcinjFalse'
    value='False'
    {...register('alcohol_injury')}
  />False<br/><br/>
</div>

<div className="form-group">
  <label htmlFor='arep'>Abuse Report</label><br/>
  <input
    type='file'
    id='arep'
    placeholder='Enter abuse report'
    className={`form-control ${errors.abuse_report ? 'is-invalid' : ''}`}
    {...register('abuse_report', {
      required: 'Abuse Report is required',
    })}
  />
  {errors.abuse_report && (
    <div className="invalid-feedback">{errors.abuse_report.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='padd'>Alcohol Report</label><br/>
  <input
    type='file'
    id='padd'
    placeholder='Enter patient alcohol report'
    className={`form-control ${errors.alcohol_report ? 'is-invalid' : ''}`}
    {...register('alcohol_report', {
      required: 'Alcohol Report is required',
    })}
  />
  {errors.alcohol_report && (
    <div className="invalid-feedback">{errors.alcohol_report.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='clplace'>Claim Place</label><br/>
  <input
    type='text'
    id='clplace'
    placeholder='Enter claim place'
    className={`form-control ${errors.claim_place ? 'is-invalid' : ''}`}
    {...register('claim_place', {
      required: 'Claim Place is required',
    })}
  />
  {errors.claim_place && (
    <div className="invalid-feedback">{errors.claim_place.message}</div>
  )}
</div>

      

<div className="form-group">
  <label htmlFor='cdate'>Claim Date</label><br/>
  <input
    type='date'
    id='cdate'
    placeholder='Enter patient claim date'
    className={`form-control ${errors.claim_date ? 'is-invalid' : ''}`}
    {...register('claim_date', {
      required: 'Claim Date is required',
    })}
  />
  {errors.claim_date && (
    <div className="invalid-feedback">{errors.claim_date.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='cstatus'>Claim Status</label><br/>
  <input
    type='radio'
    id='cstatusPending'
    value='Pending'
    {...register('claim_status')}
  />Pending<br/><br/>
  <input
    type='radio'
    id='cstatusApproved'
    value='Approved'
    {...register('claim_status')}
  />Approved<br/><br/>
  <input
    type='radio'
    id='cstatusRejected'
    value='Rejected'
    {...register('claim_status')}
  />Rejected<br/><br/>
</div>

<div className="form-group">
  <label htmlFor='cnum'>Claim Number</label><br/>
  <input
    type='text'
    id='cnum'
    placeholder='Enter claim number'
    className={`form-control ${errors.claim_number ? 'is-invalid' : ''}`}
    {...register('claim_number', {
      required: 'Claim Number is required',
    })}
  />
  {errors.claim_number && (
    <div className="invalid-feedback">{errors.claim_number.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='padd'>Claim Pdf</label><br/>
  <input
    type='file'
    id='padd'
    placeholder='Upload patient claim pdf'
    className={`form-control ${errors.claim_PDF ? 'is-invalid' : ''}`}
    {...register('claim_PDF', {
      required: 'Claim PDF is required',
    })}
  />
  {errors.claim_PDF && (
    <div className="invalid-feedback">{errors.claim_PDF.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='address_details'>Address Details</label>
  <select
    name='address_details'
    placeholder='Address Details'
    className={`form-control shadow-none rounded-0 mt-3 ${errors.address_details ? 'is-invalid' : ''}`}
    id='address_details'
    {...register('patients_add_details', {
      required: 'Address Details is required',
    })}
  >
    <option value='' disabled>Select Address Details</option>
    {addressDetails.map((address) => (
      <option key={address.addpatients_details_id} value={address.addpatients_details_id}>
        {`${address.addpatients_details_id} - ${address.city}`}
      </option>
    ))}
  </select>
  {errors.address_details && (
    <div className="invalid-feedback">{errors.address_details.message}</div>
  )}
  <br />
</div>


<div className="form-group">
  <label htmlFor='rcat'>Room Category</label><br/>
  <input
    type='text'
    id='rcat'
    placeholder='Enter patient room category'
    className={`form-control ${errors.room_category ? 'is-invalid' : ''}`}
    {...register('room_category', {
      required: 'Room Category is required',
    })}
  />
  {errors.room_category && (
    <div className="invalid-feedback">{errors.room_category.message}</div>
  )}
</div>

<div className="form-group">
  <label htmlFor='contact_details'>Contact Details</label>
  <select
    name='contact_details'
    placeholder='Contact Details'
    className={`form-control shadow-none rounded-0 mt-3 ${errors.contact_details ? 'is-invalid' : ''}`}
    id='contact_details'
    {...register('contact_details', {
      required: 'Contact Details is required',
    })}
  >
    <option value='' disabled>Select Contact Details</option>
    {contactDetails.map((contact) => (
      <option key={contact.contact_details_id} value={contact.contact_details_id}>
        {`${contact.contact_details_id} - ${contact.mobile_number}`}
      </option>
    ))}
  </select>
  {errors.contact_details && (
    <div className="invalid-feedback">{errors.contact_details.message}</div>
  )}
  <br/>
</div>

<div className="form-group">
  <label htmlFor='insurance_payer_details'>Insurance Payer Details</label>
  <select
    name='insurance_payer_details'
    className={`form-control shadow-none rounded-0 mt-3 ${errors.insurance_payer_details ? 'is-invalid' : ''}`}
    id='insurance_payer_details'
    {...register('insurance_payer_details', {
      required: 'Insurance Payer Details is required',
    })}
  >
    <option value=''>Select Insurance Payer Details</option>
    {insuerncepayerDetails.map((payer) => (
      <option key={payer.insurance_payer_identifer} value={payer.insurance_payer_identifer}>
        {`${payer.insurance_payer_identifer} - ${payer.insurance_payer_name}`}
      </option>
    ))}
  </select>
  {errors.insurance_payer_details && (
    <div className="invalid-feedback">{errors.insurance_payer_details.message}</div>
  )}
  <br />
</div>



<div className="form-group">
  <label htmlFor="bankDetails">Bank Details</label>
  <select
    name="bankDetails"
    placeholder="Bank Details"
    className={`form-control shadow-none rounded-0 mt-3 ${errors.bank_details ? 'is-invalid' : ''}`}
    id="bankDetails"
    {...register('bank_details', {
      required: 'Bank Details is required',
    })}
  >
    <option value="">Select Bank Details</option>
    {bankDetails.map((bank) => (
      <option key={bank.bank_details_identifier} value={bank.bank_details_identifier}>
        {`${bank.bank_details_identifier} - ${bank.account_number}`}
      </option>
    ))}
  </select>
  {errors.bank_details && (
    <div className="invalid-feedback">{errors.bank_details.message}</div>
  )}
  <br />
</div>


      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/><br/><br/><br/>



    </form>
  </div>



   </>
  )
}




