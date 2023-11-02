import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HealthCareAppRoutes } from './AppRoutes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
   <>
   <BrowserRouter>

   <HealthCareAppRoutes/>
   
   </BrowserRouter>
   </>
  )
}
