import React from 'react'
import { NavLink } from 'react-router-dom'



function Sidebar() {
  return (
    <div>
        <div className="container-fluid mt-5 pt-3">
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar text-center">
                    <div className="position-sticky">
                        <header className='text-center'>
                            {/* <img src="#" alt="avatar" /> */}
                            <i className="abouticon bi bi-shield-check"></i>
                            <h5>Admin</h5>
                            <h2>Dhananjay</h2>
                            <button className='btn btn-danger btn-sm mt-5'>Logout</button>
                            <hr />
                        </header>
                        <ul className="nav flex-column mb-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/admindash">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/admin/doctors">
                                    Doctors
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/patients">
                                    Patients
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/appointments">
                                    Appointment
                                </NavLink>
                            </li>
                            {/* <!-- Add more navigation items as needed --> */}
                        </ul>
                        {/* <hr /> */}
                        {/* <button className='btn btn-danger mb-5'>Logout</button> */}
                    </div>
                </nav>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {/* <!-- Main content goes here --> */}
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis accusantium suscipit beatae molestias quidem iusto doloremque deleniti eligendi, reiciendis impedit nesciunt mollitia minima ut quae dolore soluta id earum laudantium quod labore. Vero impedit debitis recusandae voluptatibus repudiandae eveniet ipsam ut, dolorum asperiores, omnis nostrum vitae cum. Cum beatae quam sint. Sint, eius ad quas quae, quisquam est quo architecto rerum illo nesciunt a corrupti labore deserunt facilis maxime dolore nisi sed. Voluptas laboriosam nesciunt iure natus sequi consequuntur voluptatum placeat vitae ut sed praesentium rerum, temporibus accusamus recusandae hic illum a excepturi modi reprehenderit, architecto sapiente? Vero labore quam ipsa sit asperiores animi! Facilis voluptatibus accusamus libero! Maiores quos incidunt nesciunt aliquid quidem error alias nisi nemo vero quisquam perferendis maxime, perspiciatis aut eius fugit fuga magnam qui! Nostrum expedita debitis ex similique enim voluptatum. Fugiat quidem sequi at voluptatibus minus aperiam nam maiores ducimus deserunt dicta veniam neque officiis numquam, itaque repellendus possimus dolorum ex tenetur eos inventore nihil dignissimos error laudantium. Cum est sapiente vitae atque alias delectus sit assumenda numquam culpa, animi repellat accusantium ab, earum iusto suscipit quibusdam consectetur voluptatibus sunt fuga ut sequi. Sequi numquam debitis, pariatur ducimus minima tenetur neque officiis possimus nesciunt!</p> */}
                </main>
            </div>
        </div>

    </div>
  )
}

export default Sidebar