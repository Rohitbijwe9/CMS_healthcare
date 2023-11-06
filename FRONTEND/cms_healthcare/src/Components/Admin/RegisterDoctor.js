import React from 'react'

function RegisterDoctor() {
  return (
    <div className='mt-5 pt-5'>
        <form enctype="multipart/form-data">
            <input type="hidden" name="csrfmiddlewaretoken" value="4lqG68SilUaptfcFgAeGFbztMkVkbcPrpS9IkATIhVp73ZU9O4YZMQ8eDYuYVPwL" />
            <div class="container register-form">
                <div class="form">
                <div class="note">
                    <p>Add New Doctor To Hospital</p>
                </div>
                <div class="form-content">
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="first_name" maxlength="30" placeholder="First Name" class="form-control" id="id_first_name" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="username" maxlength="150" placeholder="Username" class="form-control" required id="id_username" />
                        </div>
                        <div class="form-group">
                            <select name="department" placeholder="Department" class="form-control" id="id_department">
                                <option value="Cardiologist" selected>Cardiologist</option>

                                <option value="Dermatologists">Dermatologists</option>

                                <option value="Emergency Medicine Specialists">Emergency Medicine Specialists</option>

                                <option value="Allergists/Immunologists">Allergists/Immunologists</option>

                                <option value="Anesthesiologists">Anesthesiologists</option>

                                <option value="Colon and Rectal Surgeons">Colon and Rectal Surgeons</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" name="address" maxlength="40" placeholder="Address" class="form-control" required id="id_address" />
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="last_name" maxlength="150" placeholder="Last Name" class="form-control" id="id_last_name" />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" maxlength="128" placeholder="Password" class="form-control" required id="id_password" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="mobile" maxlength="20" placeholder="Mobile" class="form-control" required id="id_mobile" />
                        </div>
                        <div class="form-group">
                            <input type="file" name="profile_pic" accept="image/*" placeholder="Profile Picture" class="form-control" required="required" id="id_profile_pic" />
                        </div>
                    </div>
                    </div>
                        <button type="submit" class="btnSubmit">Register</button>
                    </div>
                </div>
            </div>

        </form>
    </div>
  )
}

export default RegisterDoctor