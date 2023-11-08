import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DoneIcon from '@mui/icons-material/Done';
import '../../assets/css/pendingappointment.css';




import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';


export default function Showpendingappointment() {
    const[user,setuser]=useState([]);

    const redirect=useNavigate()

    async function fetchdata()
    {
        const result=await axios.get('http://127.0.0.1:8000/hcapp/checkpending/')
        setuser(result.data)
        console.log(result.data)
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>
        <div className="Login container-fluid form-container">
        <br/><br/><br/>

            <center><h2>Pending Appointments List</h2></center>
            <br/>

    <table className='table table-stipped'>
        <thead>
            <tr>
                <th>Appointment Identifier</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Reason Of Aappointment</th>
                <th>Aappointment For</th>
                <th>Contact Details</th>
                <th>Appointment Status</th>
                <th>Delete</th>
                <th>Approve</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map(obj=>{return(
                    <tr>
                        <td>{obj.appointment_identifier}</td>
                        <td>{obj.appointment_date}</td>
                        <td>{obj.appointment_time}</td>
                        <td>{obj.reason_of_appointment}</td>
                        <td>{obj.appointment_for}</td>
                        <td>{obj.contact_details}</td>
                        <td>{obj.a_status}</td>
                        


                        
                           


                            <td>
                           <NavLink to={`/deletepatient/${obj.appointment_identifier}/`}><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /> 
                           </button></NavLink>
                           </td>

                           <td>
                           <NavLink to={`/approveappointment/${obj.appointment_identifier}`}><DoneIcon className="green-checkmark" /></NavLink>
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