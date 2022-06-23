import React from 'react';
import "./doctor.css";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiFillVideoCamera} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import avatar1 from "../../assets/Images/man.png"
import avatar2 from "../../assets/Images/man2.png"


export const Doctor = () => {
const date = Array.from(Array(10).keys())
return (
    <div className='doctor'>
        <div className='doc-container'>
            <div className='row1'>
                <h1>Your Treatment</h1> 
            </div>
            <div className='row2'>
                <img src={avatar1} width="50" height="60" alt='profileImg' 
                className='doc-img'/>
                <span>Dr.Lida Gutierrez</span>
                <span>Heart Surgeon, London,England</span>
                <h2>Surgeon</h2>
                <h4>Heart Surgeon</h4>
                <span>Date</span>
                <span>20 Nov 2020</span>
                <span>Time</span>
                <span>10:00 AM</span>
                <span>Appointment</span>
                <BsFillTelephoneFill/>
                <AiFillVideoCamera/>
            </div>
            <div className='row3'>
                <img src={avatar2} width="50" height="60" alt='profileImg' className='doc-img'/>
                <span>Dr.Lida Gutierrez</span>
                <span>Heart Surgeon, London,England</span>
                <h2>Surgeon</h2>
                <h4>Heart Surgeon</h4>
                <span>Date</span>
                <span>20 Nov 2020</span>
                <span>Time</span>
                <span>10:00 AM</span>
                <span>Appointment</span>
                <BsFillTelephoneFill/>
                <AiFillVideoCamera/>
            </div>
            <div className='row4'>
                <div>
                <h2>5500 6677 000 99</h2>
                <span>Harold Mann</span>
                <span>VISA</span>
                {date}
                </div>
                <div>
                <FiSettings className='setting-icon'/>
                <span>Settings</span>
                </div>
            </div>
        </div>
    </div>
)
}
