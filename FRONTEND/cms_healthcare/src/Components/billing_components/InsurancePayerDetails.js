
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function InsurancePayerDetails() {

    const {register, handleSubmit} = useForm();
    const redirect=useNavigate();

    const [options, setOptions] = useState([]);

    async function fetchData() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/bill/insurancepayeraddress/');
          setOptions(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      useEffect(() => {
        fetchData();
      }, []);
    

    function savedata(data) {
        axios.post('http://127.0.0.1:8000/bill/insurencepayerdetails/', data)
        redirect('/adm/admindash')
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <h5 className='text-center mb-5'>Insurance Payer Details</h5>
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Insurance payer name' {...register('insurance_payer_name')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="number" placeholder='Insurance payer code' {...register('insurance_payer_code')} />


                    {/* Dropdown for insurance payer details */}
                        <select
                            name="address"
                            placeholder="Address Details"
                            className="form-control shadow-none rounded-0 mt-3"
                            id="address_details"
                            {...register('address_details')}
                        >
                            <option value="" disabled>Select Address Details</option>
                            {options.map((obj) => (
                            <option key={obj.addpatients_details_id} value={obj.addpatients_details_id}>
                                {obj.addpatients_details_id}-{obj.city}-{obj.pincode}
                            </option>
                            ))}
                        </select>



                    {/* <textarea className="rounded-0 form-control shadow-none mt-3" placeholder='Address' rows="4" {...register('address_details')}></textarea> */}
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InsurancePayerDetails