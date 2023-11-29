
import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { useForm } from 'react-hook-form';


export default function AddressDetails() {
  const { register, handleSubmit, setValue, watch, formState: { errors }  } = useForm();
  

  const cityToStateAndPincodeMap = {
    // Defin your city-to-state and pincode mappings here
    // Example:
    'Chandrapur': { state: 'Maharashtra', pincode: '442404'},
    'Nagpur': { state: 'Maharashtra', pincode: '440001' },
    'Warje': { state: 'Maharashtra', pincode: '411058' },
  };

  async function savedata(data) {
    const result = await axios.post('http://127.0.0.1:8000/patientreg/add_detail/', data);
    console.log(result.data);
  }

  const cityValue = watch('city'); // Get the value of the city field

  // When the city input changes, automatically populate state and pincode
  useEffect(() => {
    if (cityValue) {
      // Check if the city exists in the mapping
      if (cityToStateAndPincodeMap[cityValue]) {
        const { state, pincode } = cityToStateAndPincodeMap[cityValue];
        // Set the state and pincode values in the form
        setValue('state', state);
        setValue('pincode', pincode);
      } else {
        // Handle the case when the city is not in the mapping
        // You can clear the state and pincode fields or show an error message.
        // For this example, we'll clear them.
        setValue('state', '');
        setValue('pincode', '');
      }
    }
  }, [cityValue, setValue]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(savedata)}>
          <br/>
          <br/>
          <br/>
          <br/>

          <label htmlFor='apatientline1'>addpatients_linel</label>
          <input type='text' id='apatientline1' placeholder='enter apatientline1' className='form-control'
        {...register('addpatients_linel', { required: 'Address Line is required' })}
      />
      {errors.addpatients_linel && (
        <p style={{ color: 'red' }}>{errors.addpatients_linel.message}</p>
      )}

        <label htmlFor='apatientline2'>addpatients_line2</label><br/>
        <input type='text' id='apatientline2' placeholder='enter apatientline2' className='form-control'{...register('addpatients_line2')}/><br/>

        <label htmlFor='lmark'>landmark</label><br/>
        <input type='text' id='lmark' placeholder='enter landmark' className='form-control'{...register('landmark')}/><br/>

        <label htmlFor='area'>area</label><br/>
        <input type='text' id='area' placeholder='enter area' className='form-control'{...register('area')}/><br/>

        <label htmlFor='town'>Town</label>
      <br />
      <input
        type='text'
        id='town'
        placeholder='Enter town'
        className='form-control'
        {...register('town', { required: 'Town is required' })}
      />
      <br />
      {errors.town && <p style={{ color: 'red' }}>{errors.town.message}</p>}

      <label htmlFor='city'>City</label>
      <br />
      <input
        type='text'
        id='city'
        placeholder='Enter city'
        className='form-control'
        {...register('city', { required: 'City is required' })}
      />
      <br />
      {errors.city && <p style={{ color: 'red' }}>{errors.city.message}</p>}

      <label htmlFor='state'>State</label>
      <br />
      <input
        type='text'
        id='state'
        placeholder='Enter state'
        className='form-control'
        {...register('state', { required: 'State is required' })}
      />
      <br />
      {errors.state && <p style={{ color: 'red' }}>{errors.state.message}</p>}

      <label htmlFor='pcode'>Pincode</label>
      <br />
      <input
        type='number'
        id='pcode'
        placeholder='Enter pincode'
        className='form-control'
        {...register('pincode', {
          required: 'Pincode is required',
          pattern: {
            value: /^\d{6}$/,
            message: 'Invalid pincode. Must be 6 digits.'
          }
        })}
      />
      <br />
      {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode.message}</p>} 
               
          <input type="submit" className="btn btn-outline-success" value={'SAVE DATA'}/>
        </form>
      </div>
    </>
  );
}