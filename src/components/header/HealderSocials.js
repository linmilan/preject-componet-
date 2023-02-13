import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const HeaderSocials = ()=>{
    return(
        <div>
            <a href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com' target='_blank'><FaGithub /></a>
            <a href='https://tiktok.com' target='_blank'><FaTiktok /></a>
        </div>
    )
}

export default HeaderSocials

