import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
// import {  useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';


export default function Showpatient() {
    const[user,setuser]=useState([]);

    // const redirect=useNavigate()

    async function fetchdata()
    {
        const result=await axios.get('http://127.0.0.1:8000/patientreg/patient/')
        setuser(result.data)
        console.log(result.data)
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>
        <div className="Login container form-container">

            <br/><br/><br/>
    <table className='table table-primary text-center' >
        <thead>
            <tr>
                <th>Patient Image</th>
                <th>Patient Code</th>
                <th>Patient First name</th>
                <th>Patient Last</th>
                <th>Contact Details</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map(obj=>{return(
                    <tr>
                        <td><img src={`http://localhost:8000${obj.patient_image}`} width="100px" height="100px" alt='patient'/></td>
                        <td>{obj.patient_code}</td>
                        <td>{obj.patient_first_name}</td>
                        <td>{obj.patient_last_name}</td>
                        <td>{obj.contact_details}</td>
                        <td>
                            <tr>
                            <NavLink to={'/showper'}><button className='btn'><i className="appointmenticon bi bi-eye-fill"></i></button></NavLink>


                           <NavLink to={`/updatepatient/${obj.personal_identifier}/`}> <button className='btn'><i className="appointmenticon bi bi-pen-fill"></i> 
                           </button></NavLink>

                           <NavLink to={`/deletepatient/${obj.personal_identifier}/`}><button className='btn'><i className="appointmenticon bi bi-archive-fill"></i>
                           </button></NavLink>
                           </tr>

                           





                        </td>






                    </tr>
                )})
            }
        </tbody>
    </table>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    </div>

    </>
  )
}