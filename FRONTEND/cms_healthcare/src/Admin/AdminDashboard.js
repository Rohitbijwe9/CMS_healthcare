import React from 'react'
import '../../src/assets/css/Admin.css'
import { NavLink } from 'react-router-dom'



function AdminDashboard() {
  return (
    <div className='container mb-5 mt-5 pt-5 text-center'>
        <div className="row g-5 d-flex ">
            <div className="col">
                <div className="p-5 bg-info">
                    <i className="dashboardicon bi bi-person-plus-fill"></i>
                    <h6 className='pt-3'>Total Doctors : 0</h6>
                    <span className='small'>Approval required : 0</span>
                </div>
            </div>
            <div className="col">
                <div className="p-5 bg-warning">
                    <i className="dashboardicon bi bi-person-wheelchair"></i>
                    <h6 className='pt-3'>Total Patients : 0</h6>
                    <span className='small'>Approval required : 0</span>
                </div>
            </div>
            <div className="col">
                <div className="p-5 bg-danger">
                    <i className="dashboardicon bi bi-calendar2-week-fill"></i>
                    <h6 className='pt-3'>Total Appointments : 0</h6>
                    <span className='small'>Approval required : 0</span>
                </div>
            </div>
        </div>

        <div className="container mt-5 d-flex flex-column">
            <div className='m-2'>
                <table className='table table-primary table-borderless table-hover text-center'>
                    <thead>
                    <tr>
                        <th className='table-dark' style={{backgroundColor : "#121831"}} colSpan={4}>Recent Doctors</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Mobile</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
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
                        <th>Name</th>
                        <th>Symptoms</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard