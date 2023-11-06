import React from 'react'
import '../../assets/css/Contactdetails.css'
import '../../assets/images/Appointment.jpg'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function Appointment() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('http://127.0.0.1:8000/hcapp/contactview/',data)
  }
  return (
  <>


    <div className='contactdetails container-fluid form-container'>

   <form className='mt-5 pt-5 mx-auto d-flex' onSubmit={handleSubmit(savedata)}>
  <div className="col-0">
  </div>
  <div className="form-row col-8">
    <div className="col-12 col-lg-6 m-auto">
      <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Mobile No'{...register('mobile_number')} />
      <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Alternate Mobile No'{...register('alternate_mobile_number')} />
      <input className='form-control shadow-none rounded-0 mt-3' type="email" placeholder='Email'{...register('email_identifier')} />
      <input className='form-control shadow-none rounded-0 mt-3' type="email" placeholder='Alternate Email' {...register('alternate_email_identifier')}/>

    </div>

    <div className="col-12 col-lg-6 m-auto text-center mb-5">
      <button type='submit' className='rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12 ' style={{ backgroundColor: "#121831" }}>Next</button>
    </div>
  </div>
</form>
</div>

</>
  )
}
