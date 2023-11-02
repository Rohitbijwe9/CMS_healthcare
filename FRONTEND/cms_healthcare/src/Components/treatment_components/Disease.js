import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';

import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'

export default function Disease(){
  
  const{register, handleSubmit}=useForm();
  
  function savedata(data)
  {
    axios.post('', data)
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(savedata)}>
          
          <label htmlFor='di'>Disease Identifier</label><br/>
          <input type='text' id='di' placeholder='Enter Disease Identifier' className='form-control'/>

          <label htmlFor='di'>Patient Code</label><br/>
          <input type='text' id='di' placeholder='Enter Patient Code' className='form-control'/>

          <label htmlFor='di'>Disease Name</label><br/>
          <input type='text' id='di' placeholder='Enter Disease Name' className='form-control'/>

          <label htmlFor='di'>Disease Category</label><br/>
          <input type='text' id='di' placeholder='Enter Disease Category' className='form-control'/>

          <label htmlFor='di'>Denied Reasone</label><br/>
          <input type='text' id='di' placeholder='Enter Denied Reasone' className='form-control'/>

          <label htmlFor='di'>Is Disease Recover</label><br/>
          <input type='text' id='di' placeholder='Enter Is Disease Recover' className='form-control'/>

          <label htmlFor='di'>Patient</label><br/>
          <input type='text' id='di' placeholder='Enter Patient' className='form-control'/>

          <label htmlFor='di'>Claim</label><br/>
          <input type='text' id='di' placeholder='Enter Claim' className='form-control'/>

          <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
         <input type='reset' className='btn btn-outline-danger' value={'Reset'}/>

        </form>
      </div>
    </>
  )
}