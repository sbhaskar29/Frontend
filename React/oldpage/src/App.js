import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Doctor from './Doctors/Doctor'
import Patient from './Patients/Patient'
import Home from './Home'
import Navigation from './Navigation'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>

      </Routes>

      </BrowserRouter>
      
    </div>
  )
}
