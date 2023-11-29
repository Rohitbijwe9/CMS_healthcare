import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function ShowUser() {
    const [users, setUsers] = useState([]);
   
    async function fetchData()
    {
        const result= await axios.get('http://localhost:8000/user/');
        //console.log(result.data);
        setUsers(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>User Type</th>
                    <th>User Code</th>
                    <th>User Image</th>
                    <th>Is Active</th>
                    <th>Created On</th>
                    <th>Updated On</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.username}</td>
                                <td>{obj.password}</td>
                                <td>{obj.user_type}</td>
                                <td>{obj.user_code}</td>
                                <td><img src={`http://localhost:8000${obj.user_image}`} width="100px" height="100px"/></td>
                                <td>{obj.is_active}</td>
                                <td>{obj.created_on}</td>
                                <td>{obj.updated_on}</td>
                                <td>
                                    <NavLink to={`/user/updateuser/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/user/deleteuser/${obj.id}`}><button className='btn btn-outline-danger btn-sm me-3'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default ShowUser