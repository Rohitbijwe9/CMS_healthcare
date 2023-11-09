import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'
// import '../../assets/css/Login.css';
// import '../../assets/images/Login.jpg';


export default function DeletePatient() {
    const{pk}=useParams();

    const redirect=useNavigate();

    const[user,setuser]=useState({});

    async function fetchuser()
    {
        const result=await axios.get(`http://127.0.0.1:8000/patientreg/patient/${pk}/`)
        console.log(result.data);
        setuser(result.data);
    }

    function deleconf()
    {
        axios.delete(`http://127.0.0.1:8000/patientreg/patient/${pk}/`)
        redirect ('/showpatient/')
    }

    useEffect(()=>{fetchuser()},[])

  return (
    <>
        <div className="Login container-fluid form-container">

    

        <br/><br/><br/><br/><br/><br/>







        <div className='text-center'>
            {/* <h1>Please confirm </h1> */}
            <h4 className='mb-3'>Do you really want to delete this data?</h4>
            <button className='btn btn-danger rounded-0 me-2' onClick={()=>(deleconf())}>YES</button>
            <NavLink to={'/showpatient/'}><button className='btn btn-success rounded-0'>NO</button></NavLink>
        </div>

        <br/><br/><br/><br/><br/><br/>



    
    </div>

    </>
  )
}