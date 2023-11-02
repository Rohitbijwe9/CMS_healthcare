

import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function ServiceProvider() {

  const{register,handleSubmit}=useForm(); 

  function savedata(data)
  {
    axios.post('',data)
  }


  return (
    
    <>
    <div className='container'>
       <form onSubmit={handleSubmit(savedata)}>
       <label htmlFor='ddi'><b>Disease_Document_Identifier</b></label><br/>
         <input type='number' id='ddi' placeholder='Enter Disease_Document_Identifier' className='form-control'/><br/>
   
         <label htmlFor='ddn'><b>disease_document_name</b></label><br/>
         <input type='text' id='ddn' placeholder='Enter Disease_Document_Name' className='form-control'/><br/>
   
         <label htmlFor='ddf'>Disease_Document_File</label><br/>
         <input type='file' id='ddf' placeholder='Enter Disease_Document_File' className='form-control'/><br/>
   
         <label htmlFor='d'><b>Disease</b></label><br/>
         <input type='text' id='d' placeholder='Enter Disease' className='form-control'/><br/>

         <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
         <input type='reset' className='btn btn-outline-danger' value={'Reset'}/>
       </form>
     </div>
   
   
   
      </>


  )
}

    


  