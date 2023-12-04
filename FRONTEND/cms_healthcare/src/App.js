import React, { createContext, useReducer } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HealthCareAppRoutes } from './AppRoutes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/collapse.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/js/dist/carousel.js'
import "../node_modules/bootstrap/js/dist/offcanvas"
import "../node_modules/bootstrap/js/dist/dropdown"
import { initialState, reducer } from './reducer/UseReducer.js'




export const UserContext = createContext();

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <>
      <UserContext.Provider value={{state, dispatch}}>

          <BrowserRouter>

          <HealthCareAppRoutes/>
          
          </BrowserRouter>

      </UserContext.Provider>
   </>
  )
}