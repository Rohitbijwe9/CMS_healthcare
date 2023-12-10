import React from 'react'
import '../../assets/css/Contact.css'


function Contact() {
  return (
    <div className='contact container-fluid form-container'>
        <form className='mt-5 pt-5 m-auto d-flex'>
            <div className="col-4">
            </div>
            <div className="form-row col-8">
                <div className="col-12 col-lg-6 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Your Name' />
                    <input className='form-control shadow-none rounded-0 mt-3' type="email" placeholder='Your Email' />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Subject' />
                    <textarea className="rounded-0 form-control shadow-none mt-3" placeholder='Message' rows="10" ></textarea>
                </div>
                
               
                <div className="col-12 col-lg-6 m-auto text-center mb-5">
                    <button type='submit' className='rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12 ' style={{backgroundColor : "#121831"}}>Send</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact