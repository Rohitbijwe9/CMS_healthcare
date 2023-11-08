import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdatePatient() {

    const{pk}=useParams();

    const redirect=useNavigate();

    const{register,handleSubmit,setValue}=useForm({});

   async function fetchuser()
    {
        const result=await axios.get(`http://127.0.0.1:8000/patientreg/patient/${pk}/`)
        setValue('eid',result.data.eid)
        setValue('ename',result.data.ename)
        setValue('phone',result.data.phone)
        setValue('mail',result.data.mail)
        setValue('add',result.data.add)
        setValue('photo',result.data.photo)


    }

    function savedata(data)
    {
        data.photo= data.photo[0]
        axios.put(`http://127.0.0.1:8000/patientreg/patient/${pk}/`,data,{headers:{'Content-Type':'multipart/form-data'}})
        redirect('/show')


    }

    useEffect(()=>{fetchuser()},[])



  return (
    <>

    <div className='container'>
      <form className='mt-5 pt-5 m-auto'>
        <div className="col-12 col-lg-4 m-auto">
          <h5 className='text-center mb-5'>Admit Patient</h5>
  
        
        {/* <label htmlFor='pcode'>Patient Code</label>  */}
          <input type='text' id='pcode' placeholder=     'Enter patient code' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        <label htmlFor='cs' className='mt-3 mx-3'>Claim Status :</label> 
          <input type='radio' id='ms' value='pending' className='ms-3 me-1'/>Pending    
          <input type='radio' id='ms' value='success' className='ms-3 me-1'/>Success    
          <input type='radio' id='ms' value='denied' className='ms-3 me-1'/>Denied    
  
        {/* <label htmlFor='pfname'>Patient First Name</label>  */}
        <input type='text' id='pfname' placeholder=     'Enter patient first name' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='plname'>Patient Last Name</label>  */}
        <input type='text' id='plname' placeholder=     'Enter patient last name' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='pmname'>Patient Middle Name</label>  */}
        <input type='text' id='pmname' placeholder=     'Enter patient middle name' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='pprifix'>Patient Prifix</label>  */}
        <input type='text' id='pprifix' placeholder=     'Enter patient prifix' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='psufix'>Patient Sufix</label>  */}
        <input type='text' id='psufix' placeholder=     'Enter patient sufix' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='psufix'>Patient Middle Name</label>  */}
        <input type='text' id='psuffix' placeholder=     'Enter patient sufix' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='page'>Patient Age</label>  */}
        <input type='number' id='page' placeholder=     'Enter patient age' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='pweight'>Patient Weight</label>  */}
        <input type='number' id='pweight' placeholder=     'Enter patient weight' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='pheight'>Patient Middle Name</label>  */}
        <input type='number' id='pheight' placeholder=     'Enter patient height' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        <label htmlFor='pimg' className='mt-3 mx-3 mb-1'>Patient Image : </label> 
        <input type='file' id='pimg'  className=' form-control shadow-none rounded-0'/> 
  
        {/* <label htmlFor='pmname'>Patient Middle Name</label>  */}
        <input type='text' id='pmname' placeholder=    'Enter patient middle name' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        <label htmlFor='ms' className='mt-3 mx-3 mb-1'>Martial status :</label> <br />
          <input type='radio' id='ms' value='married' className='ms-3 me-1' /> Married <br />  
          <input type='radio' id='ms' value='unmarried' className='ms-3 me-1' /> Unmarried  <br /> 
          <input type='radio' id='ms' value='divorced' className='ms-3 me-1' /> Divorced   <br />
          <input type='radio' id='ms' value='widow' className='ms-3 me-1' /> widow   <br />
  
        <label htmlFor='gen' className='mt-3 mx-3'>Gender :</label> 
          <input type='radio' id='gen' value='male' className='ms-3 me-1' /> Male   
          <input type='radio' id='gen' value='female' className='ms-3 me-1' /> Female   
          <input type='radio' id='gen' value='other' className='ms-3 me-1' /> Other   
        
        <label htmlFor='ph' className='mt-3 mx-3'>Patient Handicap :</label> 
          <input type='radio' id='ph' value='True' className='ms-3 me-1' /> Yes   
          <input type='radio' id='ph' value='False' className='ms-3 me-1' /> No   <br />
        
        <label htmlFor='pdob' className='mt-3 mx-3 mb-1'>Patient DOB :</label> 
        <input type='date' id='pdob'  className=' form-control shadow-none rounded-0'/> 
  
        {/* <label htmlFor='po'>Patient Occupation</label>  */}
        <input type='text' id='po' placeholder=    'Enter patient occupation' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        {/* <label htmlFor='padhar'>Patient Adhar No</label>  */}
        <input type='number' id='padhar' placeholder=    'Enter patient aadhar no' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        <label htmlFor='paimg' className='mt-3 mx-3 mb-1'>Patient Adhar Image :</label> 
        <input type='file' id='paimg' className=' form-control shadow-none rounded-0'/> 
  
        <label htmlFor='pud' className='mt-3 mx-3 mb-1'>Patient Updated Date :</label> 
        <input type='date' id='pud'  className=' form-control shadow-none rounded-0'/> 
  
        {/* <label htmlFor='padd'>Patient Address</label>  */}
        <input type='text' id='padd' placeholder=    'Enter patientaddress' className=' form-control shadow-none rounded-0 mt-3'/> 
  
        <input type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}} value={'Save Data'}/>
  
  
        </div>
      </form>
    </div>
  
  
  
     </>
  )
}