import React from 'react'

function RegisterDoctor() {
  return (
    <div className='mt-5 pt-5'>
        <form enctype="multipart/form-data">
            <input type="hidden" name="csrfmiddlewaretoken" value="4lqG68SilUaptfcFgAeGFbztMkVkbcPrpS9IkATIhVp73ZU9O4YZMQ8eDYuYVPwL" />
            <div className="container register-form">
                <div className="form">
                <div className="mb-5 text-center">
                    <h5>Add New Doctor To Hospital</h5>
                </div>
                <div className="form-content">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="first_name" maxlength="30" placeholder="First Name" className="form-control shadow-none rounded-0 mt-3" id="id_first_name" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="username" maxlength="150" placeholder="Username" className="form-control shadow-none rounded-0 mt-3" required id="id_username" />
                        </div>
                        <div className="form-group">
                            <select name="department" placeholder="Department" className="form-control shadow-none rounded-0 mt-3" id="id_department">
                                <option value="Cardiologist" selected>Cardiologist</option>

                                <option value="Dermatologists">Dermatologists</option>

                                <option value="Emergency Medicine Specialists">Emergency Medicine Specialists</option>

                                <option value="Allergists/Immunologists">Allergists/Immunologists</option>

                                <option value="Anesthesiologists">Anesthesiologists</option>

                                <option value="Colon and Rectal Surgeons">Colon and Rectal Surgeons</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" name="address" maxlength="40" placeholder="Address" className="form-control shadow-none rounded-0 mt-3" required id="id_address" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="last_name" maxlength="150" placeholder="Last Name" className="form-control shadow-none rounded-0 mt-3" id="id_last_name" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" maxlength="128" placeholder="Password" className="form-control shadow-none rounded-0 mt-3" required id="id_password" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="mobile" maxlength="20" placeholder="Mobile" className="form-control shadow-none rounded-0 mt-3" required id="id_mobile" />
                        </div>
                        <div className="form-group">
                            <input type="file" name="profile_pic" accept="image/*" placeholder="Profile Picture" className="form-control shadow-none rounded-0 mt-3" required="required" id="id_profile_pic"  />
                        </div>
                    </div>
                    </div>
                        <button type="submit" className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Register</button>
                    </div>
                </div>
            </div>

        </form>
    </div>
  )
}

export default RegisterDoctor