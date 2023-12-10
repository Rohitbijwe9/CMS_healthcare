import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HealthCareAppRoutes } from './AppRoutes'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/collapse.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/js/dist/carousel.js'
import "../node_modules/bootstrap/js/dist/offcanvas"
import "../node_modules/bootstrap/js/dist/dropdown"
export default function App() {
  return (
   <>
   <BrowserRouter>

   <HealthCareAppRoutes/>
   
   </BrowserRouter>
   </>
  )
}