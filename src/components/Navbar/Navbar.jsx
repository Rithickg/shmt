import React from 'react';
import "./navbar.css";
import{AiOutlineHome,AiOutlinePlusCircle,AiOutlineMedicineBox} from "react-icons/ai";
import{FaRegCommentDots} from "react-icons/fa";
import logo from "../../assets/Images/logo.png"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'><img src={logo} width="50px" height="60px" alt='logo' classname="logo"/></span>
        <span className='navbar-icons'>
            <span className='nav-icon'><AiOutlineHome className='icon'/> Dashboard</span>
            <span className='nav-icon'><AiOutlinePlusCircle/> Doctor</span>
            <span className='nav-icon'><FaRegCommentDots/> Contact</span>
            <span className='nav-icon'><AiOutlineMedicineBox/> Medicine</span>
        </span>
    </div>
  )
}
