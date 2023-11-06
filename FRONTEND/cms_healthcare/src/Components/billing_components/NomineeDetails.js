import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'


function NomineeDetails() {

    const {register, handleSubmit} = useForm();

    function savedata(data) {
        axios.post('http://127.0.0.1:8000/billing/nomineedetails/', data)
    }

  return (
    <div className='container form-container'>
        
        <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5 m-auto'>
            <div className="form-row">
                <div className="col-12 col-lg-4 m-auto">
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Nominee name' {...register('nominee_name')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Relation with insurance payer' {...register('relation_with_insurance_payer')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="date" placeholder='Nominee DOB' {...register('nominee_date_of_birth')} />
                    <input className='form-control shadow-none rounded-0 mt-3' type="text" placeholder='Nominee mobile number' {...register('nominee_mobile_number')} />
                </div>

                <div className="col-12 col-lg-4 m-auto text-center">
                    <button type='submit' className='rounded-0 border-0 col-12 btn btn-primary mt-3 mb-5' style={{backgroundColor : "#121831"}}>Save</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NomineeDetails








// import React from 'react'
// import {useForm} from 'react-hook-form'
// import axios from 'axios';



// export default function NomineeDetails() {

//   const{register,handleSubmit}=useForm();

//   async function savedata(data)
//   {
//     await axios.post('http://127.0.0.1:8000/billing/nomineedetails/',data)
//     console.log(data)
//   }

//   return (
//    <>

//   <div className='container'>
//     <form onSubmit={handleSubmit(savedata)} className='mt-5'>

//     <label htmlFor='cn'>nominee_name</label><br/>
//     <input type='text' id='cn' placeholder='nominee_name' className='form-control'
//     {...register('nominee_name')}/><br/>

//     <label htmlFor='cc'>relation_with_insurance_payer Code</label><br/>
//     <input type='text' id='cc' placeholder='relation_with_insurance_payer' className='form-control'
//     {...register('relation_with_insurance_payer')}/><br/>

//     <label htmlFor='cl'>nominee_date_of_birth</label><br/>
//     <input type='date' id='cl'  className='form-control'
//     {...register('nominee_date_of_birth')}/><br/>
    
//     <label htmlFor='cl'>nominee_mobile_number</label><br/>
//     <input type='number' id='cl'  className='form-control'
//     {...register('nominee_mobile_number')}/><br/>

//     <input type='submit' className='btn btn-outline-success' value={'SAVE DATA'}/>



//     </form>
//   </div>



//    </>
//   )
// }


// import axios from 'axios'
// import React from 'react'
// import { useForm } from 'react-hook-form'



// function NomineeDetails() {

//     const {register, handleSubmit } = useForm();

//     function savedata(data) {
//         axios.post('http://127.0.0.1:8000/billing/nomineedetails/', data);
//         console.log(data)
//     }




//   return (
//     <div>
//         <form onSubmit={handleSubmit(savedata)} className='mt-5 pt-5'>
//             <input type="text" placeholder='nominee_name' {...register('nominee_name')} />
//             <input type="text" placeholder='relation_with_insurance_payer' {...register('relation_with_insurance_payer')} />
//             <input type="date" placeholder='nominee_date_of_birth' {...register('nominee_date_of_birth')} />
//             <input type="text" placeholder='nominee_mobile_number' {...register('nominee_mobile_number')} />
//             <input type="submit" value="save"  />
//         </form>


//     </div>
//   )
// }

// export default NomineeDetails