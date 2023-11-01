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
