import React from 'react'

function Login() {
  return (
    <div className='container form-container'>
        
        <form  className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                {/* <h6 className='my-5'>Todo List</h6> */}
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control  form-control-lg shadow-none rounded-0 mt-3 p-3' type="text" placeholder='Username' required/>
                    <input className='form-control  form-control-lg shadow-none rounded-0 mt-3 p-3' type="password" placeholder='Password' required/>
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5 py-3' style={{backgroundColor : "#121831", fontSize : 22}}>Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login