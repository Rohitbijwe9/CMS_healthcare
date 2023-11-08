import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'
import '../../assets/css/Login.css';
import '../../assets/images/Login.jpg';


export default function Deletepatient() {
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

    <center>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>







        <h1>DELETE CONFORMATION</h1>
        <h4>ARE YOU WANT TO DELETE THIS DATA?</h4>
        <button className='btn btn-danger' onClick={()=>(deleconf())}>YES</button>
        <NavLink to={'/showpatient/'}><button className='btn btn-success'>NO</button></NavLink>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>



    </center>
    </div>

    </>
  )
}