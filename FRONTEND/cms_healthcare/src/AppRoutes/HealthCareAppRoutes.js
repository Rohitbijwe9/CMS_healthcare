import React from 'react'
import{Route, Routes} from 'react-router-dom'


import HospitalExpenses from '../Components/CMS_billing_components/HospitalExpenses'
import InsurancePayerDetails from '../Components/CMS_billing_components/InsurancePayerDetails'
import Insurence from '../Components/CMS_billing_components/Insurence'
import Ledger from '../Components/CMS_billing_components/Ledger'
import NomineeDetails from '../Components/CMS_billing_components/NomineeDetails'
import PaymentInfo from '../Components/CMS_billing_components/PaymentInfo'
import ServiceProviderBill from '../Components/CMS_billing_components/ServiceProviderBill'
import Appointment from '../Components/CMS_hc_application_components/Appointment'
import ContactDetails from '../Components/CMS_hc_application_components/ContactDetails'
import AddressDetails from '../Components/CMS_patient_registration_components/AddressDetails'
import BankDetails from '../Components/CMS_patient_registration_components/BankDetails'
import Claim from '../Components/CMS_patient_registration_components/Claim'
import ClaimDocument from '../Components/CMS_patient_registration_components/ClaimDocument'
import Patient from '../Components/CMS_patient_registration_components/Patient'
import RoomCategory from '../Components/CMS_patient_sheduling_components/RoomCategory'
import Disease from '../Components/CMS_treatment_components/Disease'
import DiseaseDocument from '../Components/CMS_treatment_components/DiseaseDocument'

import User from '../Components/CMS_auth_components/billing_components/hc_application_components/User'
import UserLogin from '../Components/CMS_auth_components/billing_components/hc_application_components/UserLogin'
import ShowUser from '../Components/CMS_auth_components/billing_components/hc_application_components/ShowUser'
import UpdateUser from '../Components/CMS_auth_components/billing_components/hc_application_components/UpdateUser'
import DeleteUser from '../Components/CMS_auth_components/billing_components/hc_application_components/DeleteUser'

import About from '../Components/Layout/About'
import Contact from '../Components/Layout/Contact'
import Footer from '../Components/Layout/Footer'
import Header from '../Components/Layout/Header'
import Home from '../Components/Layout/Home'
import Developers from '../Components/Layout/Developers'
import MeetOurDoctors from '../Components/Layout/MeetOurDoctors'

import AddMorePatientDetails from '../Admin/AddMorePatientDetails'
import AdminDashboard from '../Admin/AdminDashboard'
import AllDoctors from '../Admin/AllDoctors'
import AppointmentAdmin from '../Admin/AppointmentAdmin'
import { ApproveAppointment } from '../Admin/ApproveAppointment'
import DeleteAppointment from '../Admin/DeleteAppointment'
import DoctorAdmin from '../Admin/DoctorAdmin'
import PatientAdmin from '../Admin/PatientAdmin'
import PatientBilling from '../Admin/PatientBilling'
import RegisterDoctor from '../Admin/RegisterDoctor'
import Showapproveappointment from '../Admin/Showpproveppointment'
import Showpendingappointment from '../Admin/Showpendingappointment'
import Sidebar from '../Admin/Sidebar.js'

import PasswordResetForm from '../Components/PasswordReset/PasswordResetForm'
import PasswordResetConfirmation from '../Components/PasswordReset/PasswordResetConfirmation'



export default function HealthCareAppRoutes() {
  return (
   <>
   <Header />
   {/* <switch>
        <Route path="/password-reset" exact component={PasswordResetForm} />
        <Route path="/password-reset/:uidb64/:token" component={PasswordResetConfirmation} />
   </switch> */}
   <Routes>
    <Route path='/user' element={<User/>}/>
    <Route path='/showuser' element={<ShowUser/>}/>
    <Route path='/userlogin' element={<UserLogin/>}/>
    <Route path='/user/updateuser/:pk' element={<UpdateUser/>}/>
    <Route path='/user/deleteuser/:pk' element={<DeleteUser/>}/>

    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus/' element={<About/>}/>
    <Route path='/contactus/' element={<Contact/>}/>
    <Route path='/developers/' element={<Developers/>}/>
    <Route path='/meetourdoctors/' element={<MeetOurDoctors/>}/>


    <Route path='/hospitalexpensec' element={<HospitalExpenses/>}/>
    <Route path='/insurencepayerdetails' element={<InsurancePayerDetails/>}/>
    <Route path='/insurence' element={<Insurence/>}/>
    <Route path='/ledger' element={<Ledger/>}/>
    <Route path='/nomineedetails' element={<NomineeDetails/>}/>
    <Route path='/paymentinfo' element={<PaymentInfo/>}/>
    <Route path='/serviceproviderbill' element={<ServiceProviderBill/>}/>
    <Route path='/TrasactionDetails' element={<ServiceProviderBill/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route path='/contactdetails' element={<ContactDetails/>}/>
    <Route path='/addressdetails' element={<AddressDetails/>}/>
    <Route path='/bankdetails' element={<BankDetails/>}/>
    <Route path='/claim' element={<Claim/>}/>
    <Route path='/claimdocument' element={<ClaimDocument/>}/>
    <Route path='/patient' element={<Patient/>}/>
    <Route path='/roomcategory' element={<RoomCategory/>}/>
    <Route path='/serviceprovider' element={<ServiceProviderBill/>}/>
    <Route path='/disease' element={<Disease/>}/>
    <Route path='/diseasedocument' element={<DiseaseDocument/>}/>


    {/* -------------- Admin ------------- */}
    {/*<Route path='/admin/sidebar' element={<Sidebar/>}/>*/}
    <Route path='/adminDashboard/' element={<AdminDashboard/>}/>
    <Route path='/admin/appointments' element={<AppointmentAdmin/>}/>
    <Route path='/admin/approveappointment/:pk' element={<ApproveAppointment/>}/>
    <Route path='/admin/deleteappointment/:pk' element={<DeleteAppointment/>}/>
    <Route path='/admin/showapprove' element={<Showapproveappointment/>}/>
    <Route path='/admin/showpending' element={<Showpendingappointment/>}/>
    <Route path='/admin/patients' element={<PatientAdmin/>}/>
    <Route path='/admin/doctors' element={<DoctorAdmin/>}/>
    <Route path='/admin/alldoctors' element={<AllDoctors/>}/>
    <Route path='/admin/registerdoctor' element={<RegisterDoctor/>}/>
    {/*<Route path='/admin/showpatient' element={<Showpatient/>}/>
    <Route path='/admin/showper' element={<ShowParticular/>}/>
    <Route path='/admin/updatepatient' element={<UpdatePatient/>}/>
  <Route path='/admin/deletepatient' element={<DeletePatient/>}/>*/}
    <Route path='/admin/addmore' element={<AddMorePatientDetails/>}/>
    <Route path='/admin/patientbilling' element={<PatientBilling/>}/>

    <Route path="/password-request" element={<PasswordResetForm/>} />
    <Route path="/password-reset/:uidb64/:token" element={<PasswordResetConfirmation/>} />
      

    
    

</Routes>

<Footer />
   </>
  )
}
