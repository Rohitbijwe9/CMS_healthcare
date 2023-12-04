import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function ShowDoctors() {
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
    <div className="container-fluid mt-5 pt-5 text-center">
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>User Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    {/* <th>Password</th> */}
                    <th>User Type</th>
                    <th>User Code</th>
                    {/* <th>Is Active</th> */}
                    <th>Created On</th>
                    <th>Updated On</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        if (obj.user_type === "Doctor"){

                        return(
                            <tr>
                                <td><img src={`http://localhost:8000${obj.user_image}`} alt='...' width="60px" height="60px" className='rounded-circle'/></td>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.username}</td>
                                {/* <td>{obj.password}</td> */}
                                <td>{obj.user_type}</td>
                                <td>{obj.user_code}</td>
                                {/* <td>{obj.is_active}</td> */}
                                <td>{obj.created_on}</td>
                                <td>{obj.updated_on}</td>
                                <td>
                                    <NavLink to={`/user/updateuser/${obj.id}`}><button className='btn'><i className="bi bi-pen-fill"></i></button></NavLink>
                                    <NavLink to={`/user/deleteuser/${obj.id}`}><button className='btn'><i className="bi bi-archive-fill"></i></button></NavLink>
                                </td>
                            </tr>
                        )
                    }
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ShowDoctors