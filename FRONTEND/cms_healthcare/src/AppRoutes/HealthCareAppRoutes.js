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

export default function HealthCareAppRoutes() {
  return (
   <>
   <Routes>
    <Route path='/user' element={<User/>}/>
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

</Routes>
   </>
  )
}
