import React, { useEffect, useState } from 'react'
import '../../assets/css/Admin.css'
import axios from 'axios'



function AdminDashboard() {


    const[doctor,setDoctor]=useState([]);
    const[patientcount,setPatientcount]=useState([]);
    const[approvedappointmentcount,setApprovedappointmentcount]=useState([]);
    const[pendingappointmentcount,setPendingappointmentcount]=useState([]);
    
    async function fetchdata()
    {

        const accessToken = sessionStorage.getItem('access');
        
        const result_doctor=await axios.get('http://localhost:8000/user/')
        const result_patient=await axios.get('http://127.0.0.1:8000/patientreg/patient/')
        const result_approved_appointments = await axios.get(
            'http://127.0.0.1:8000/hcapp/checkapprove/',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        
        const result_pending_appointments = await axios.get(
            'http://127.0.0.1:8000/hcapp/checkpending/',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        
        
        setDoctor(result_doctor.data)
        setPatientcount(result_patient.data)
        setApprovedappointmentcount(result_approved_appointments.data)
        setPendingappointmentcount(result_pending_appointments.data)


        console.log("result_doctor.data : ", result_doctor.data)
        console.log("result_patient.data : ", result_patient.data)
        console.log("result_approved_appointments.data : ", result_approved_appointments.data)
        console.log("result_pending_appointments.data : ", result_pending_appointments.data)
    }

    useEffect(()=>{fetchdata()},[])

  return (
    <div className='container mb-5 mt-5 pt-5 text-center'>
        <div className="row g-5 d-flex ">
        <div className="col ">
                <div className="p-5 bg-warning">
                    <i className="dashboardicon bi bi-person-wheelchair"></i>
                    <h6 className='pt-3'>Total Patients : {patientcount.length}</h6>
                    <span className='small'>Approval required : 0</span>
                </div>
            </div>

            <div className="col">
                <div className="p-5 bg-info">
                    <i className="dashboardicon bi bi-person-plus-fill"></i>
                    <h6 className='pt-3'>Total Users : {doctor.length}</h6>
                    <span className='small'>Approval required : 0</span>
                </div>
            </div>
            
            <div className="col">
                <div className="p-5 bg-danger">
                    <i className="dashboardicon bi bi-calendar2-week-fill"></i>
                    <h6 className='pt-3'>Total Appointments : {approvedappointmentcount.length + pendingappointmentcount.length}</h6>
                    <span className='small'>Approval required : {pendingappointmentcount.length}</span>
                </div>
            </div>
        </div>

        <div className="container mt-5 d-flex flex-wrap flex-column">
            <div className='m-2'>
                <table className='table table-primary table-borderless table-hover text-center'>
                    <thead>
                    <tr>
                        <th className='table-dark' style={{backgroundColor : "#121831"}} colSpan={4}>Recent Doctors</th>
                    </tr>
                    <tr>
                        <th>Profile Picture</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            
                        doctor.map(obj=>{
                            if (obj.user_type === "Doctor"){

                            return(
                                <tr>
                                    <td><img src={`http://localhost:8000${obj.user_image}`} width="60px" height="60px" className='rounded-circle'/></td>
                                    <td>{obj.first_name}</td>
                                    <td>{obj.last_name}</td>
                                    <td> Available </td>
                                </tr>
                            )
                        }
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className='m-2'>
                <table className='table table-primary table-hover table-borderless text-center'>
                    <thead>
                    <tr>
                        <th className='table-dark' style={{backgroundColor : "#121831"}} colSpan={5}>Recent Patients</th>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <th>Patient Code</th>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Contact Details</th>
                    </tr>
                    </thead>
                    <tbody className='table-light'>
                        {
                            patientcount.map(obj=>{return(
                            <tr>
                                <td>
                                    <img src={`http://localhost:8000${obj.patient_image}`} width="50px" height="50px" alt='...' className='rounded-circle'/>
                                </td>
                                <td>{obj.patient_code}</td>
                                <td>{obj.patient_first_name}</td>
                                <td>{obj.patient_last_name}</td>
                                <td>{obj.contact_details}</td>
                            </tr>
                            )})
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard