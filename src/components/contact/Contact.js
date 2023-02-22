import React from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import {RiMessageLine} from 'react-icons/ri' 
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact =()=>{
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pc3asy8', 'template_0xoixi1', form.current, '4W7esaR3e7CzTiSP2')
        e.target.reset()
        
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>
            
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <a href="mailto:linxiaoting100@gmail.com" target='_blank' >
                            <MdOutlineEmail  className="contact_option-icon"/>
                            <h4>Email</h4>
                        </a>
                        {/* <h5>linxiaoting100@gmail.com</h5> */}
                        {/* <a href="mailto:linxiaoting100@gmail.com" target='_blank' >Send me message</a> */}
                    </article>
                    <article className="contact_option">
                        <a href="#" target='_blank'>
                            <RiMessageLine className="contact_option-icon"/>
                            <h4>Message</h4>
                            {/* <h5>sendmemessage</h5> */}
                        </a>
                    </article>
                    <article className="contact_option">
                        <a href="https://api.whatsapp.com/send?phont+0039340998" target='_blank'>
                            <BsWhatsapp className="contact_option-icon"/>
                            <h4>Whatsapp</h4>
                            {/* <h5>+0039 XXXX</h5> */}
                        </a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact