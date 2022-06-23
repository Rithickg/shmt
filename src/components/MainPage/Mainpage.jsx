import React from 'react'
import "./mainpage.css"
import { Doctor } from '../DoctorPage/Doctor'
import { Navbar } from '../Navbar/Navbar'
import { Appointment } from '../Appointment/Appointment'


export const Mainpage = () => {
return (
    <div className='main-container'>
        <div className='nav-item'>
            <Navbar/>
        </div>
        <div className='doc-item'>
            <Doctor/>
        </div>
        <div className='app-item'>
            <Appointment/>
        </div>
    </div>
)
}
