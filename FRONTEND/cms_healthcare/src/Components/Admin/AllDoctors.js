import React from 'react'

function AllDoctors() {
  return (
    <div className='container mt-5 pt-5'>
        <div className=''>
                <table className='table table-primary table-hover table-borderless text-center'>
                    <thead>
                    <tr>
                        <th className='table-dark' style={{backgroundColor : "#121831"}} colSpan={7}>Doctors</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Profile Picture</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button className='btn pe-3'>
                                    <i class="bi bi-pen-fill"></i>
                                </button>
                                <button className='btn'>
                                    <i class="bi bi-archive-fill"></i>
                                </button>
                            </td>
                            </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default AllDoctors