import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function Claim() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('http://127.0.0.1:8000/patientreg/claim/',data)
  }

  return (
   <>

  <div className='container'>
    <form onSubmit={handleSubmit(savedata)}>

    

        
      

      


      <label htmlFor='claimid'>Cliam Id</label><br/>
      <input type='text' id='claimid' placeholder='enter claim id' className='form-control'
      {...register('claim_id')}/><br/>
     

      <label htmlFor='insurancecode'>Insurance Code</label><br/>
      <input type='text' id='insurancecode' placeholder='enter insurance code' className='form-control'
      {...register('insurance_code')}/><br/>

      <label htmlFor='pfn'>Patient First Name</label><br/>
      <input type='text' id='pfn' placeholder='enter patient First name' className='form-control'
      {...register('patient_first_name')}/><br/>

      <label htmlFor='pln'>Patient Last Name</label><br/>
      <input type='text' id='pln' placeholder='enter patient Last name' className='form-control'
      {...register('patient_last_name')}/><br/>

      <label htmlFor='pmn'>Patient Middle Name</label><br/>
      <input type='text' id='pmn' placeholder='enter patient middle name' className='form-control'
      {...register('patient_middle_name')}/><br/>

      <label htmlFor='patientcode'>Patient Code</label><br/>
      <input type='number' id='patientcode' placeholder='enter patient code' className='form-control'
      {...register('patient_code')}/><br/>

      <label htmlFor='ppriffix'>Patient Prifix</label><br/>
      <input type='text' id='ppriffix' placeholder='enter patient preffix' className='form-control'
      {...register('patient_prefix')}/><br/>

      <label htmlFor='psuffix'>Patient Suffix</label><br/>
      <input type='text' id='psuffix' placeholder='enter patient suffix' className='form-control'
      {...register('patient_suffix')}/><br/>

      <label htmlFor='gender'>GENDER</label><br/>
        <input type='radio' id='gender' value='pending'{...register('patient_gender')}/>male<b></b><br/><br/>
        <input type='radio' id='gender' value='success'{...register('patient_gender')}/>female<b></b><br/><br/>
        <input type='radio' id='gender' value='denied'{...register('patient_gender')}/>others<b></b><br/><br/>


      <label htmlFor='pageyears'>Patient Age Years</label><br/>
      <input type='number' id='pageyears' placeholder='enter patient age years' className='form-control'
      {...register('patient_age_year')}/><br/>

      <label htmlFor='pagemonth'>Patient Age Month</label><br/>
      <input type='number' id='pagemonth' placeholder='enter patient age months' className='form-control'
      {...register('patient_age_months')}/><br/>

      <label htmlFor='pagedays'>Patient Age Days</label><br/>
      <input type='number' id='pagedays' placeholder='enter patient age days' className='form-control'
      {...register('patient_age_days')}/><br/>

      

      <label htmlFor='pp'>Patient Is Primary</label><br/>
        <input type='radio' id='pp' value='True' {...register('patient_isprimary')}/>True<b></b><br/><br/>
        <input type='radio' id='pp' value='False'{...register('patient_isprimary')} />False<b></b><br/><br/>


      
      <label htmlFor='pi'>Patient Isrider</label><br/>
      <input type='radio' id='pi' value='True'{...register('patient_isrider')}/>True<b></b><br/><br/>
      <input type='radio' id='pi' value='False'{...register('patient_isrider')}/>False<b></b><br/><br/>


      <label htmlFor='poccup'>Patient Occupation </label><br/>
      <input type='text' id='poccup' placeholder='enter patient name' className='form-control'
      {...register('patient_occupation')}/><br/>

      <label htmlFor='spname'>Service Provider Name</label><br/>
      <input type='text' id='spname' placeholder='enter service provider name' className='form-control'
      {...register('service_provider_name')}/><br/>

      <label htmlFor='ms'>Service Provider Code</label><br/>
      <input type='text' id='ms' placeholder='enter service provider code' className='form-control'
      {...register('service_provider_code')}/><br/>

      <label htmlFor='areson'>Admited Reson</label><br/>
      <input type='text' id='areson' placeholder='admitted reson' className='form-control'
      {...register('admitted_reason')}/><br/>

      <label htmlFor='dsd'>Disease Start Date </label><br/>
      <input type='date' id='dsd' placeholder='disease start date' className='form-control'
      {...register('disease_start_date')}/><br/>


      <label htmlFor='adddate'>Admmision Date</label><br/>
      <input type='date' id='adddate' placeholder='enter addmision date' className='form-control'
      {...register('admission_date')}/><br/>

      <label htmlFor='ddate'>Discharge Date</label><br/>
      <input type='date' id='ddate' placeholder='enter patient discharge date' className='form-control'
      {...register('discharge_date')}/><br/>

      <label htmlFor='pr'>Police Report</label><br/>
      <input type='text' id='pr' placeholder='enter police reported' className='form-control'
      {...register('police_reported')}/><br/>
      
      
      <label htmlFor='fatt'>Fir Attached</label><br/>
      <input type='file' id='fatt'  className='form-control'
      {...register('fir_attached')}/><br/>

      <label htmlFor='php'>Pre Hospital Period </label><br/>
      <input type='text' id='php' placeholder='pre hosptal period' className='form-control'
      {...register('pre_hospital_period')}/><br/>

      <label htmlFor='posthp'>Post Hospital Period</label><br/>
      <input type='text' id='posthp' placeholder='post hospital period' className='form-control'
      {...register('post_hospital_period')}/><br/>

      <label htmlFor='dn'>Doctor Name</label>
      <input type='text' id='dn' placeholder='doctor name' className='form-control'
      {...register('doctor_name')}/><br/>

      <label htmlFor='dq'>Doctor Qualification</label>
      <input type='text' id='dq' placeholder='doctor qualification' className='form-control'
      {...register('doctor_qualification')}/><br/><br/>

      <label htmlFor='dmn'>Doctor Mobile No</label>
      <input type='number' id='dmn' placeholder='doctor mo no' className='form-control'
      {...register('doctor_mobile_no')}/><br/>

      <label htmlFor='tyoadd'>Type Of Admmision</label><br/>
      <input type='text' id='tyoadd' placeholder='enter type of addmission' className='form-control'
      {...register('type_of_admission')}/><br/>
      
      <label htmlFor='tclaima'>Total Claim Amount</label><br/>
      <input type='text' id='padd' placeholder='enter patient claim amount' className='form-control'
      {...register('total_claim_amount')}/><br/>

      <label htmlFor='dstatus'>Discharge Status</label><br/>
      <input type='radio' id='dstatus' value='pending'{...register('discharge_status')}/>Cured<b></b><br/><br/>
      <input type='radio' id='dstatus' value='success'{...register('discharge_status')}/>Improved<b></b><br/><br/>
      <input type='radio' id='dstatus' value='denied'{...register('discharge_status')}/>Unchanged<b></b><br/><br/>
      <input type='radio' id='dstatus' value='denied'{...register('discharge_status')}/>Dead<b></b><br/><br/>
      


     
      <label htmlFor='ainj'>Abuse Injury</label><br/>
      <input type='text' id='ainj' placeholder='enter abbuse injury' className='form-control'
      {...register('abuse_injury')}/><br/>

      <label htmlFor='alcinnj'>Alcohol Injury</label><br/>
      <input type='text' id='alcinj' placeholder='enter patient alcohol injury ' className='form-control'
      {...register('alcohol_injury')}/><br/>

      <label htmlFor='arep'>Abuse Report</label><br/>
      <input type='text' id='arep' placeholder='enter abuse report' className='form-control'
      {...register('abuse_report')}/><br/>

      <label htmlFor='padd'>Alcohol Report</label><br/>
      <input type='text' id='padd' placeholder='enter patient alcohol report' className='form-control'
      {...register('alcohol_report')}/><br/>

      <label htmlFor='clplace'>Claim Place</label><br/>
      <input type='text' id='clplace' placeholder='enter claim  place' className='form-control'
      {...register('claim_place')}/><br/>
      

      <label htmlFor='cdate'>Claim Date</label><br/>
      <input type='date' id='cdate' placeholder='enter patient claim date' className='form-control'
      {...register('claim_date')}/><br/>

      <label htmlFor='cstatus'>Claim Status</label><br/>
      <input type='radio' id='cstatus' value='success'{...register('claim_status')}/>Pending<b></b><br/><br/>
      <input type='radio' id='cstatus' value='denied'{...register('claim_status')}/>Approved<b></b><br/><br/>
      <input type='radio' id='cstatus' value='denied'{...register('claim_status')}/>Rejected<b></b><br/><br/>

      <label htmlFor='cnum'>Claim Number</label><br/>
      <input type='number' id='cnum' placeholder='enter claim number' className='form-control'
      {...register('claim_number')}/><br/>

      <label htmlFor='padd'>Claim Pdf</label><br/>
      <input type='file' id='padd' placeholder='upload patient claim pdf ' className='form-control'
      {...register('claim_PDF')}/><br/>

      <label htmlFor='padd'>Patient Add Details</label><br/>
      <input type='text' id='padd' placeholder='enter patient address details' className='form-control'
      {...register('patients_add_details ')}/><br/>

      <label htmlFor='rcat'>Room Category</label><br/>
      <input type='text' id='rcat' placeholder='enter patient room category' className='form-control'
      {...register('room_category')}/><br/>

      <label htmlFor='cdet'>Contact Details</label><br/>
      <input type='text' id='cdet' placeholder='enter patient contact details' className='form-control'
      {...register('contact_details')}/><br/>

      <label htmlFor='inpaydet'>Insurence Payer Details</label><br/>
      <input type='text' id='inpaydet' placeholder='enter patient insurance payer details' className='form-control'
      {...register('insurance_payer_details')}/><br/>


      <label htmlFor='bdet'>Bank Details</label><br/>
      <input type='text' id='bdet' placeholder='enter patient bank details' className='form-control'
      {...register('bank_details')}/><br/>


      <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>



    </form>
  </div>



   </>
  )
}

