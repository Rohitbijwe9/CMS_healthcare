import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HealthCareAppRoutes } from './AppRoutes'

export default function App() {
  return (
   <>
   <BrowserRouter>

   <HealthCareAppRoutes/>
   
   </BrowserRouter>
   </>
  )
}
