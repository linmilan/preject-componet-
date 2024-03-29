import React from "react";
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import { useState } from "react";

const Nav = ()=> {
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
            <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiMessageSquare /></a>
        </nav>
    )
}

export default Nav