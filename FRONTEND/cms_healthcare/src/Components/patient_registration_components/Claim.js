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

  <div className='container form-container'>
    <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
      <div className="col-12 col-lg-4 m-auto">
          <h5 className='text-center mb-5'>Claim</h5>

        
      

      


      {/* <label htmlFor='claimid'>Cliam Id</label>  */}
      <input type='text' id='claimid' placeholder='Enter claim id' className=' form-control shadow-none rounded-0 mt-3'
      {...register('claim_id')}/> 
     

      {/* <label htmlFor='insurancecode'>Insurance Code</label>  */}
      <input type='text' id='insurancecode' placeholder='Enter insurance code' className=' form-control shadow-none rounded-0 mt-3'
      {...register('insurance_code')}/> 

      {/* <label htmlFor='pfn'>Patient First Name</label>  */}
      <input type='text' id='pfn' placeholder='Enter patient First name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_first_name')}/> 

      {/* <label htmlFor='pln'>Patient Last Name</label>  */}
      <input type='text' id='pln' placeholder='Enter patient Last name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_last_name')}/> 

      {/* <label htmlFor='pmn'>Patient Middle Name</label>  */}
      <input type='text' id='pmn' placeholder='Enter patient middle name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_middle_name')}/> 

      {/* <label htmlFor='patientcode'>Patient Code</label>  */}
      <input type='number' id='patientcode' placeholder='Enter patient code' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_code')}/> 

      {/* <label htmlFor='ppriffix'>Patient Prifix</label>  */}
      <input type='text' id='ppriffix' placeholder='Enter patient preffix' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_prefix')}/> 

      {/* <label htmlFor='psuffix'>Patient Suffix</label>  */}
      <input type='text' id='psuffix' placeholder='Enter patient suffix' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_suffix')}/> 

      <label htmlFor='gender' className='mt-3 mx-3'>Gender : </label> 
        <input type='radio' id='gender' value='pending'{...register('patient_gender')} className='ms-3 me-1'/>Male  
        <input type='radio' id='gender' value='success'{...register('patient_gender')} className='ms-3 me-1'/>Female  
        <input type='radio' id='gender' value='denied'{...register('patient_gender')} className='ms-3 me-1'/>Others  


      {/* <label htmlFor='pageyears'>Patient Age Years</label>  */}
      <input type='number' id='pageyears' placeholder='Enter patient age years' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_age_year')}/> 

      {/* <label htmlFor='pagemonth'>Patient Age Month</label>  */}
      <input type='number' id='pagemonth' placeholder='Enter patient age months' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_age_months')}/> 

      {/* <label htmlFor='pagedays'>Patient Age Days</label>  */}
      <input type='number' id='pagedays' placeholder='Enter patient age days' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_age_days')}/> 

      

      <label htmlFor='pp' className='mt-3 mx-3'>Patient (Is Primary) : </label> 
        <input type='radio' id='pp' value='True' {...register('patient_isprimary')} className='ms-4 me-1'/>True  
        <input type='radio' id='pp' value='False'{...register('patient_isprimary')} className='ms-4 me-1' />False


      <br />
      <label htmlFor='pi' className='mt-3 mx-3'>Patient (Isrider) : </label> 
      <input type='radio' id='pi' value='True'{...register('patient_isrider')} className='ms-4 me-1'/>True
      <input type='radio' id='pi' value='False'{...register('patient_isrider')} className='ms-4 me-1'/>False


      {/* <label htmlFor='poccup'>Patient Occupation </label>  */}
      <input type='text' id='poccup' placeholder='Enter patient name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patient_occupation')}/> 

      {/* <label htmlFor='spname'>Service Provider Name</label>  */}
      <input type='text' id='spname' placeholder='Enter service provider name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('service_provider_name')}/> 

      {/* <label htmlFor='ms'>Service Provider Code</label>  */}
      <input type='text' id='ms' placeholder='Enter service provider code' className=' form-control shadow-none rounded-0 mt-3'
      {...register('service_provider_code')}/> 

      {/* <label htmlFor='areson'>Admited Reson</label>  */}
      <input type='text' id='areson' placeholder='Admitted reson' className=' form-control shadow-none rounded-0 mt-3'
      {...register('admitted_reason')}/> 

      <label htmlFor='dsd' className='mt-3 ms-3'>Disease Start Date :</label> 
      <input type='date' id='dsd' placeholder='Disease start date' className=' form-control shadow-none rounded-0 mt-1'
      {...register('disease_start_date')}/> 


      <label htmlFor='adddate' className='mt-3 ms-3'>Admmision Date :</label> 
      <input type='date' id='adddate' placeholder='Enter addmision date' className=' form-control shadow-none rounded-0 mt-1'
      {...register('admission_date')}/> 

      <label htmlFor='ddate' className='mt-3 ms-3'>Discharge Date : </label> 
      <input type='date' id='ddate' placeholder='Enter patient discharge date' className=' form-control shadow-none rounded-0 mt-1'
      {...register('discharge_date')}/> 

      {/* <label htmlFor='pr'>Police Report</label>  */}
      <input type='text' id='pr' placeholder='Enter police reported' className=' form-control shadow-none rounded-0 mt-3'
      {...register('police_reported')}/> 
      
      
      <label htmlFor='fatt' className='mt-3 ms-3'>Attach FIR :</label> 
      <input type='file' id='fatt'  className=' form-control shadow-none rounded-0 mt-1'
      {...register('fir_attached')}/> 

      {/* <label htmlFor='php'>Pre Hospital Period </label>  */}
      <input type='text' id='php' placeholder='Pre hospital period' className=' form-control shadow-none rounded-0 mt-3'
      {...register('pre_hospital_period')}/> 

      {/* <label htmlFor='posthp'>Post Hospital Period</label>  */}
      <input type='text' id='posthp' placeholder='Post hospital period' className=' form-control shadow-none rounded-0 mt-3'
      {...register('post_hospital_period')}/> 

      {/* <label htmlFor='dn'>Doctor Name</label> */}
      <input type='text' id='dn' placeholder='Doctor name' className=' form-control shadow-none rounded-0 mt-3'
      {...register('doctor_name')}/> 

      {/* <label htmlFor='dq'>Doctor Qualification</label> */}
      <input type='text' id='dq' placeholder='Doctor qualification' className=' form-control shadow-none rounded-0 mt-3'
      {...register('doctor_qualification')}/>  

      {/* <label htmlFor='dmn'>Doctor Mobile No</label> */}
      <input type='number' id='dmn' placeholder='Doctor mo no' className=' form-control shadow-none rounded-0 mt-3'
      {...register('doctor_mobile_no')}/> 

      {/* <label htmlFor='tyoadd'>Type Of Admmision</label>  */}
      <input type='text' id='tyoadd' placeholder='Enter type of addmission' className=' form-control shadow-none rounded-0 mt-3'
      {...register('type_of_admission')}/> 
      
      {/* <label htmlFor='tclaima'>Total Claim Amount</label>  */}
      <input type='text' id='padd' placeholder='Enter patient claim amount' className=' form-control shadow-none rounded-0 mt-3'
      {...register('total_claim_amount')}/> 

      <label htmlFor='dstatus' className='mt-3 mx-3 mb-1'>Discharge Status : </label> <br />
      <input type='radio' id='dstatus' value='pending'{...register('discharge_status')} className='ms-4 me-1'/>Cured <br />  
      <input type='radio' id='dstatus' value='success'{...register('discharge_status')} className='ms-4 me-1'/>Improved <br />  
      <input type='radio' id='dstatus' value='denied'{...register('discharge_status')} className='ms-4 me-1'/>Unchanged <br />  
      <input type='radio' id='dstatus' value='denied'{...register('discharge_status')} className='ms-4 me-1'/>Dead <br />  
      


     
      {/* <label htmlFor='ainj'>Abuse Injury</label>  */}
      <input type='text' id='ainj' placeholder='Enter abbuse injury' className=' form-control shadow-none rounded-0 mt-3'
      {...register('abuse_injury')}/> 

      {/* <label htmlFor='alcinnj'>Alcohol Injury</label>  */}
      <input type='text' id='alcinj' placeholder='Enter patient alcohol injury ' className=' form-control shadow-none rounded-0 mt-3'
      {...register('alcohol_injury')}/> 

      {/* <label htmlFor='arep'>Abuse Report</label>  */}
      <input type='text' id='arep' placeholder='Enter abuse report' className=' form-control shadow-none rounded-0 mt-3'
      {...register('abuse_report')}/> 

      {/* <label htmlFor='padd'>Alcohol Report</label>  */}
      <input type='text' id='padd' placeholder='Enter patient alcohol report' className=' form-control shadow-none rounded-0 mt-3'
      {...register('alcohol_report')}/> 

      {/* <label htmlFor='clplace'>Claim Place</label>  */}
      <input type='text' id='clplace' placeholder='Enter claim  place' className=' form-control shadow-none rounded-0 mt-3'
      {...register('claim_place')}/> 
      

      <label htmlFor='cdate' className='mt-3 ms-3'>Claim Date :</label> 
      <input type='date' id='cdate' placeholder='Enter patient claim date' className=' form-control shadow-none rounded-0 mt-1'
      {...register('claim_date')}/> 

      <label htmlFor='cstatus' className='mt-3 mx-3 mb-1'>Claim Status :</label> 
      <input type='radio' id='cstatus' value='success'{...register('claim_status')} className='ms-3 me-1'/>Pending<b></b>  
      <input type='radio' id='cstatus' value='denied'{...register('claim_status')} className='ms-3 me-1'/>Approved<b></b>  
      <input type='radio' id='cstatus' value='denied'{...register('claim_status')} className='ms-3 me-1'/>Rejected<b></b>  

      {/* <label htmlFor='cnum'>Claim Number</label>  */}
      <input type='number' id='cnum' placeholder='Enter claim number' className=' form-control shadow-none rounded-0 mt-3'
      {...register('claim_number')}/> 

      <label htmlFor='padd' className='mt-3 mx-3'>Claim Pdf :</label> 
      <input type='file' id='padd' placeholder='Upload patient claim pdf ' className=' form-control shadow-none rounded-0 mt-1'
      {...register('claim_PDF')}/> 

      {/* <label htmlFor='padd'>Patient Add Details</label>  */}
      <input type='text' id='padd' placeholder='Enter patient address details' className=' form-control shadow-none rounded-0 mt-3'
      {...register('patients_add_details ')}/> 

      {/* <label htmlFor='rcat'>Room Category</label>  */}
      <input type='text' id='rcat' placeholder='Enter patient room category' className=' form-control shadow-none rounded-0 mt-3'
      {...register('room_category')}/> 

      {/* <label htmlFor='cdet'>Contact Details</label>  */}
      <input type='text' id='cdet' placeholder='Enter patient contact details' className=' form-control shadow-none rounded-0 mt-3'
      {...register('contact_details')}/> 

      {/* <label htmlFor='inpaydet'>Insurence Payer Details</label>  */}
      <input type='text' id='inpaydet' placeholder='Enter patient insurance payer details' className=' form-control shadow-none rounded-0 mt-3'
      {...register('insurance_payer_details')}/> 


      {/* <label htmlFor='bdet'>Bank Details</label>  */}
      <input type='text' id='bdet' placeholder='Enter patient bank details' className=' form-control shadow-none rounded-0 mt-3'
      {...register('bank_details')}/> 


      <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>


      </div>
    </form>
  </div>



   </>
  )
}
