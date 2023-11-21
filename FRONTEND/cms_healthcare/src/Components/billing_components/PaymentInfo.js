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
    <form onSubmit={handleSubmit(savedata)}>
    <br/><br/><br/>


    <label htmlFor='fan'>From Acount Number</label><br/>
    <input type='number' id='fan' placeholder='from account no' className='form-control'/><br/>

    <label htmlFor='fbr'>From Branch</label><br/>
    <input type='text' id='fbr' placeholder='from branch' className='form-control'/><br/>

    <label htmlFor='fic'>From Ifsc Code</label><br/>
    <input type='text' id='fic' placeholder='from date' className='form-control'/><br/>

    <label htmlFor='fb'>From Bank</label><br/>
    <input type='text' id='fb' placeholder='from date' className='form-control'/><br/>

    <label htmlFor='pc'>Patient Code</label><br/>
    <input type='text' id='pc' placeholder='patient code' className='form-control'/><br/>

    <label htmlFor='ic'>Insurance Code</label><br/>
    <input type='text' id='ic' placeholder='insurance code' className='form-control'/><br/>

    <label htmlFor='ta'>To Account No</label><br/>
    <input type='numer' id='ta' placeholder='to account' className='form-control'/><br/>

    <label htmlFor='tb'>To Branch Name</label><br/>
    <input type='text' id='tb' placeholder='to branch' className='form-control'/><br/>

    <label htmlFor='ti'>To Ifsc Code</label><br/>
    <input type='text' id='ti' placeholder='to ifsc code' className='form-control'/><br/>

    <label htmlFor='tbn'>To Bank Name</label><br/>
    <input type='text' id='tbn' placeholder='to bank name' className='form-control'/><br/>

    <label htmlFor='dr'>Denied Reson</label><br/>
    <input type='text' id='dr' placeholder='denied reson' className='form-control'/><br/>

    <label htmlFor='rm'>Remark</label><br/>
    <input type='text' id='rm' placeholder='remark' className='form-control'/><br/>

    <label htmlFor='ta'>Total Amount</label><br/>
    <input type='number' id='ta' placeholder='total amount' className='form-control'/><br/>

    <label htmlFor='ca'>Claim Amount</label><br/>
    <input type='number' id='ca' placeholder='claim amount' className='form-control'/><br/>

    <label htmlFor='st'>Status</label><br/>
    <input type='text' id='st' placeholder='status' className='form-control'/><br/>

    <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>
    <br/><br/><br/>



</form>
  </div>



   </>
  )
}







