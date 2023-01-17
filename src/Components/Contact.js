import React from 'react';
import ContactForm from './ContactForm';
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { TiArrowRightThick } from "react-icons/ti"

function Contact() {

    return (
        <div className="container-fluid pt-5">
            <div className="container pt-5 desktop-contact-query mt-5">
                <div className='mb-5 mt-5 link-size'>
                    <div className='bordo'>
                        <a href="tel:+393465431525">
                            <IoPhonePortraitSharp className='icon-contact-size' />
                            <p> Phone : +39 346 54 31 525 </p>
                            <p>Chiamami <TiArrowRightThick/></p>
                        </a>
                    </div>
                    <div className='bordo'>
                        <a href="whatsapp://send?phone=+306973580295" target='_blank' rel="noreferrer">
                            <BsWhatsapp className='icon-contact-size' />
                            <p>Whatsapp : +30 697 35 80 295</p>
                            <p>Srivimi <TiArrowRightThick/></p>
                        </a>
                    </div>
                    <div className='bordo'>
                        <a href="mailto:ceciliafabiole18@gmail.com">
                            <MdAlternateEmail className='icon-contact-size' />
                            <p>E-mail : ceciliafabiole18@gmail.com</p>
                            <p>Srivimi <TiArrowRightThick/></p>
                        </a>
                    </div>
                    <div className='bordo'>
                        <a href="https://www.google.it/maps/place/11026+Pont-Saint-Martin+AO/@45.5945638,7.7856887,15z/data=!3m1!4b1!4m5!3m4!1s0x478896fddc000c2d:0xcc47cb89998707b9!8m2!3d45.594928!4d7.798357">
                            <GiPositionMarker className='icon-contact-size' />
                            <p> 11026, Pont-Saint-Martin, Aosta, Italia</p>
                            <p>Vedi sulla mappa <TiArrowRightThick/></p>
                        </a>
                    </div>



                </div>
                <ContactForm />
            </div>
        </div>);
}

export default Contact;