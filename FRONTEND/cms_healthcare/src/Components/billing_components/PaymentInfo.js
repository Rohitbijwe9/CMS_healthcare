import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';



export default function PaymentInfo() {

  const{register,handleSubmit}=useForm();

  function savedata(data)
  {
    axios.post('',data)
  }

  return (
   <>
 <div className='container'>
    <form onSubmit={handleSubmit(savedata)} className="mt-5 pt-5 mx-auto">
        <div className="col-12 col-lg-4 m-auto">
            <h3 className='text-center mb-5 ' style={{ color: "#020f4a" }}>Payment Information</h3>
        

            {/* <label htmlFor='fan'>From Acount Number</label>  */}
            <input type='number' id='fan' placeholder='From account no' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='fbr'>From Branch</label>  */}
            <input type='text' id='fbr' placeholder='From branch' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='fic'>From Ifsc Code</label>  */}
            <input type='text' id='fic' placeholder='From Ifsc Code' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='fb'>From Bank</label>  */}
            <input type='text' id='fb' placeholder='From Bank' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='pc'>Patient Code</label>  */}
            <input type='text' id='pc' placeholder='Patient code' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ic'>Insurance Code</label>  */}
            <input type='text' id='ic' placeholder='Insurance code' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ta'>To Account No</label>  */}
            <input type='numer' id='ta' placeholder='To Account number' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='tb'>To Branch Name</label>  */}
            <input type='text' id='tb' placeholder='To Branch Name' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ti'>To Ifsc Code</label>  */}
            <input type='text' id='ti' placeholder='To ifsc code' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='tbn'>To Bank Name</label>  */}
            <input type='text' id='tbn' placeholder='To bank name' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='dr'>Denied Reson</label>  */}
            <input type='text' id='dr' placeholder='Denied reason' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='rm'>Remark</label>  */}
            <input type='text' id='rm' placeholder='Remark' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ta'>Total Amount</label>  */}
            <input type='number' id='ta' placeholder='Total amount' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='ca'>Claim Amount</label>  */}
            <input type='number' id='ca' placeholder='Claim amount' className=' form-control shadow-none rounded-0 mt-3'/> 

            {/* <label htmlFor='st'>Status</label>  */}
            <input type='text' id='st' placeholder='Status' className=' form-control shadow-none rounded-0 mt-3'/> 

            <input type='submit' className='rounded-0 border-0 btn btn-primary mt-3 mb-5 col-12' style={{ backgroundColor: "#121831" }} value={'Save Data'}/>

          </div>
      </form>
  </div>



   </>
  )
}



