// import React from 'react'
// import { NavLink } from 'react-router-dom'



// function Sidebar() {
//   return (
//     <div>
//         <div className="container-fluid mt-5 pt-3">
//             <div className="row">
//                 <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar text-center">
//                     <div className="position-sticky ">
//                         <header className='text-center'>
//                             {/* <img src="#" alt="avatar" /> */}
//                             <i className="abouticon bi bi-shield-check"></i>
//                             <h5>Admin</h5>
//                             <h2>Dhananjay</h2>
//                             <button className='btn btn-danger btn-sm mt-5'>Logout</button>
//                             <hr />
//                         </header>
//                         <ul className="nav flex-column mb-5">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/admin/admindash">
//                                     Dashboard
//                                 </NavLink>
//                             </li>
//                             <li class="nav-item">
//                                 <NavLink className="nav-link" to="/admin/doctors">
//                                     Doctors
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/admin/patients">
//                                     Patients
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/admin/appointments">
//                                     Appointment
//                                 </NavLink>
//                             </li>
//                             {/* <!-- Add more navigation items as needed --> */}
//                         </ul>
//                         {/* <hr /> */}
//                         {/* <button className='btn btn-danger mb-5'>Logout</button> */}
//                     </div>
//                 </nav>
//                 <main className="col-md-9 ms-sm-auto col-lg-10 text-center">
//                     {/* <!-- Main content goes here --> */}
//                     {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
//                         Button with data-bs-target
//                     </button> */}
//                     <h3 className='bg-info text-light p-3'>CMS Healthcare</h3>
//                 </main>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Sidebar








// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import "../../../node_modules/bootstrap/js/dist/offcanvas"
// import "../../../node_modules/bootstrap/js/dist/dropdown"




// function Sidebar() {
//   return (
//     <div>
//         <nav class="navbar navbar-dark bg-dark fixed-top">
//             <div class="container-fluid text-center">
//                 <a class="navbar-brand" href="#">CMS Healthcare</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
//                 <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//                 <div class="offcanvas-header">
//                     <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
//                     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                 </div>
//                 <div class="offcanvas-body">

//                     <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
//                         {/* <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li> */}
//                         <header className='text-center'>
//                             {/* <img src="#" alt="avatar" /> */}
//                             <i className="abouticon bi bi-shield-check"></i>
//                             <h5>Admin</h5>
//                             <h2>Dhananjay</h2>
//                             <button className='btn btn-danger btn-sm mt-4'>Logout</button>
//                             <hr />
//                         </header>
//                         <li class="nav-item">
//                             <NavLink className="nav-link" to="/admin/admindash">
//                                 Dashboard
//                             </NavLink>
//                         </li>
//                         <li class="nav-item">
//                             <NavLink className="nav-link" to="/admin/doctors">
//                                 Doctors
//                             </NavLink>
//                         </li>
//                         <li class="nav-item">
//                             <NavLink className="nav-link" to="/admin/patients">
//                                 Patients
//                             </NavLink>
//                         </li>
//                         <li class="nav-item">
//                             <NavLink className="nav-link" to="/admin/appointments">
//                                 Appointments
//                             </NavLink>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             Dropdown
//                             </a>
//                             <ul class="dropdown-menu dropdown-menu-dark">
//                             <li><a class="dropdown-item" href="#">Action</a></li>
//                             <li><a class="dropdown-item" href="#">Another action</a></li>
//                             <li>
//                                 <hr class="dropdown-divider" />
//                             </li>
//                             <li><a class="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                         {/* <form class="d-flex mt-3" role="search">
//                             <input class="form-control me-2 rounded-0 p-1" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-success rounded-0 btn-sm" type="submit">Search</button>
//                         </form> */}
//                     </ul>
                    
//                 </div>
//                 </div>
//             </div>
//         </nav>

//     </div>
//   )
// }

// export default Sidebar