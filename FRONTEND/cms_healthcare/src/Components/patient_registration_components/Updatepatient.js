import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function PatientUpdate() {
    const { pk } = useParams();
    const redirect = useNavigate();
    const { register, handleSubmit, control, reset } = useForm();

    async function fetchUser() {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/patientreg/patient/${pk}/`);
            const { patient_image, patient_aadhar_card_image, ...dataWithoutImages } = result.data;
            reset(dataWithoutImages);
        } catch (err) {
            console.error(err);
        }
    }

    async function saveData(data) {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/patientreg/patient/${pk}/`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log('Data updated:', response.data);
            redirect('/show');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [pk]);

    return (
        <>
        <br/><br/>        <br/><br/>

            <form onSubmit={handleSubmit(saveData)} encType='multipart/form-data' className='container'>
            <label htmlFor='pprifix'>Patient Name Prifix</label><br/>
      <input type='text' id='pprifix' placeholder='enter patient prifix' className='form-control'
      {...register('patient_name_prefix')}/><br/>

      <label htmlFor='psufix'>Patient Name Suffix</label><br/>
      <input type='text' id='psufix' placeholder='enter patient sufix' className='form-control'
      {...register('patient_name_suffix')}/><br/>

      

      <label htmlFor='page'>Patient Age</label><br/>
      <input type='number' id='page' placeholder='enter patient age' className='form-control'
      {...register('patient_age')}/><br/>

      <label htmlFor='pweight'>Patient Weight</label><br/>
      <input type='number' id='pweight' placeholder='enter patient weight' className='form-control'
      {...register('patient_weight')}/><br/>

      <label htmlFor='pheight'>Patient Height</label><br/>
      <input type='number' id='pheight' placeholder='enter patient height' className='form-control'
      {...register('patient_height')}/><br/>

      <label htmlFor='pimg'>Patient Image</label><br/>
      <input type='file' id='pimg'  className='form-control'
      {...register('patient_image')}/><br/>

     
      <label htmlFor='ms'>Martial status</label><br/>
        <input type='radio' id='ms' value='married'{...register('patient_marital_status')} /><b>Married</b><br/><br/>
        <input type='radio' id='ms' value='unmarried'{...register('patient_marital_status')} /><b>Unmarried</b><br/><br/>
        <input type='radio' id='ms' value='divorced'{...register('patient_marital_status')} /><b>Divorced</b><br/><br/>
        <input type='radio' id='ms' value='widow'{...register('patient_marital_status')} /><b>widow</b><br/><br/>

      <label htmlFor='gen'>Gender</label><br/>
      <input type='radio' id='gen' value='male' {...register('patient_gender')}/><b>Male</b><br/><br/>
      <input type='radio' id='gen' value='female'{...register('patient_gender')} /><b>Female</b><br/><br/>
      <input type='radio' id='gen' value='other'{...register('patient_gender')} /><b>Other</b><br/><br/>
      
      <label htmlFor='ph'>Patient Handicap</label><br/>
      <input type='radio' id='ph' value='True' {...register('patient_is_handicap')}/><b>Yes</b><br/><br/>
      <input type='radio' id='ph' value='False'{...register('patient_is_handicap')} /><b>No</b><br/><br/>
      
      <label htmlFor='pdob'>Patient DOB</label><br/>
      <input type='date' id='pdob'  className='form-control'{...register('patient_date_of_birth')}/><br/>

      <label htmlFor='po'>Patient Occupation</label><br/>
      <input type='text' id='po' placeholder='enter patient occupation' className='form-control'{...register('patient_occupation')}/><br/>

      <label htmlFor='padhar'>Patient Adhar No</label><br/>
      <input type='number' id='padhar' placeholder='enter patient adhar no' className='form-control'{...register('patient_aadhar_card_number')}/><br/>

      <label htmlFor='paimg'>Patient Adhar Image</label><br/>
      <input type='file' id='paimg' className='form-control'{...register('patient_aadhar_card_image')}/><br/>

      <label htmlFor='pcd'>Patient Created Date</label><br/>
      <input type='date' id='pcd'  className='form-control'{...register('created_on')}/><br/>

      
      <label htmlFor='pud'>Patient Updated Date</label><br/>
      <input type='date' id='pud'  className='form-control'{...register('updated_on')}/><br/>


      <label htmlFor='padd'>Patient Address</label><br/>
      <input type='text' id='padd' placeholder='enter patientaddress' className='form-control'{...register('patients_add_details')}/><br/>

      <label htmlFor='con'>Contact </label><br/>
      <input type='text' id='con' placeholder='enter contact' className='form-control'{...register('contact_details')}/><br/>

      







                <button type='submit' className='btn btn-outline-success'>Save Data</button>
            </form>
            <br/><br/>        <br/><br/>

        </>
    );
}
