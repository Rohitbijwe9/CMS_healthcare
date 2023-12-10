import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {NavLink, useNavigate, useParams} from 'react-router-dom'

function DeleteUser() {
    const {pk} = useParams();

    const [user, setUser] = useState({});

    const navi = useNavigate();

    async function fetchUser()
    {
        const result = await axios.get(`http://localhost:8000/user/${pk}`);
        setUser(result.data);
    }

    function deleteConfirm()
    {
        axios.delete(`http://localhost:8000/user/${pk}`);
        navi('/showuser');
    }

    useEffect(()=>{
        fetchUser();
    }, [])

  return (
    <>
        <div>
            <center>
                <h1><u>DELETE CONFIRMATION</u></h1>
                <h1 className='mt-5'>Do You Really Want To Delete This<span style={{color:'red'}}>{user.first_name}{user.last_name}</span>Record?</h1>
                <button className='btn btn-outline-danger col-4 mt-5' onClick={()=>deleteConfirm()}>YES</button>
                <NavLink to='/showuser'><button className='btn btn-outline-warning col-4 mt-5'>NO</button></NavLink>
            </center>
        </div>
    </>
  )
}

export default DeleteUser