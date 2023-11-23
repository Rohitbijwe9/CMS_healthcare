import React from 'react'
import{Route, Routes} from 'react-router-dom'
import User from '../Components/auth_components/billing_components/hc_application_components/User'
import HospitalExpenses from '../Components/billing_components/HospitalExpenses'
import InsurancePayerDetails from '../Components/billing_components/InsurancePayerDetails'
import Insurence from '../Components/billing_components/Insurence'
import Ledger from '../Components/billing_components/Ledger'
import NomineeDetails from '../Components/billing_components/NomineeDetails'
import PaymentInfo from '../Components/billing_components/PaymentInfo'
import ServiceProviderBill from '../Components/billing_components/ServiceProviderBill'
import Appointment from '../Components/hc_application_components/Appointment'
import ContactDetails from '../Components/hc_application_components/ContactDetails'
import AddressDetails from '../Components/patient_registration_components/AddressDetails'
import BankDetails from '../Components/patient_registration_components/BankDetails'
import Claim from '../Components/patient_registration_components/Claim'
import ClaimDocument from '../Components/patient_registration_components/ClaimDocument'
import Patient from '../Components/patient_registration_components/Patient'
import RoomCategory from '../Components/patient_sheduling_components/RoomCategory'
import Disease from '../Components/treatment_components/Disease'
import DiseaseDocument from '../Components/treatment_components/DiseaseDocument'
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import path for Bootstrap CSS
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import About from '../Components/Layout/About'
import Contact from '../Components/Layout/Contact'
import Home from '../Components/Layout/Home'
import Login from '../Components/signuplogin/Login'
import Signup from '../Components/signuplogin/Signup'
import Appointmentstatus from '../Components/hc_application_components/Appointmentstatus'
import Show from '../Components/patient_registration_components/Showpatient'
import Showperticular from '../Components/patient_registration_components/Showperticular'
import Deletepatient from '../Components/patient_registration_components/Deletepatient'
import PatientUpdate from '../Components/patient_registration_components/Updatepatient'
import Showapproveappintment from '../Components/hc_application_components/Showapproveappointment'
import Showpendingappointment from '../Components/hc_application_components/Showpendingappointment'
import Approveappointment from '../Components/hc_application_components/Approveappointment'
import { ApproveAppointment } from '../Components/hc_application_components/Approveappointment';
import Deletappointment from '../Components/hc_application_components/Deleteappointment'
import Sidebar from '../Components/Admin/Sidebar'
import AdminDashboard from '../Components/Admin/AdminDashbord'
import PatientAdmin from '../Components/Admin/PatientAdmin'
import DoctorAdmin from '../Components/Admin/DoctorAdmin'
import RegisterDoctor from '../Components/Admin/RegisterDoctor'
import AppointmentAdmin from '../Components/Admin/AppointmentAdmin'
import PatientRegistration from '../Components/Admin/PatientRegistration'
import Billing from '../Components/Admin/Billing'








export default function HealthCareAppRoutes() {
  return (
   <>
  <Header/>
   <Routes>
    <Route path='/aboutus' element={<About/>}/>
    <Route path='/user' element={<User/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/' element={<Home/>}/>


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

    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>


    <Route path='/astatus' element={<Appointmentstatus/>}/>
    <Route path='/showapprove'element={<Showapproveappintment/>}/>
    <Route path='/showpending' element={<Showpendingappointment/>}/>
    <Route path='/approveappointment/:pk' element={<ApproveAppointment/>}/>
    <Route path='/deleteappointment/:pk' element={<Deletappointment/>}/>



    <Route path='/showpatient' element={<Show/>}/>
    <Route path='/showper/:pk/' element={<Showperticular/>}/>
    <Route path='/deletepatient/:pk' element={<Deletepatient/>}/>
    <Route path='/updatepatient/:pk/' element={<PatientUpdate/>}/>


    <Route path='/admin/sidebar' element={<Sidebar/>}/>
    <Route path='/admin/admindash' element={<AdminDashboard/>}/>
    <Route path='/admin/patients' element={<PatientAdmin/>}/>
    <Route path='/admin/doctors' element={<DoctorAdmin/>}/>
    <Route path='/admin/registerdoctor' element={<RegisterDoctor/>}/>
    <Route path='/admin/appointments' element={<AppointmentAdmin/>}/>
    <Route path='admin/patientreg' element={<PatientRegistration/>}/>
    <Route path='admin/billing' element={<Billing/>}/>





    











</Routes>
<Footer/>
   </>
  )
}
