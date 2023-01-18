import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ContactForm() {
    const { t } = useTranslation();
    const form = useRef();
    const YOUR_SERVICE_ID = 'service_2wteyb5';
    const YOUR_TEMPLATE_ID = 'template_dztvq7z';
    const YOUR_PUBLIC_KEY = 'G5sl8rMgvbq3_wqcK';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                console.log('message sent')
                alert('I tuoi dati sono stati inviati correttamente!')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                console.log('try again')
            });
    };
    return (
        <form className="form-style mb-5 mt-5" ref={form} onSubmit={sendEmail}>
            <div className='mb-5 text-center contenitore-titolo'>
                <h4>{t("contact_send_me")}</h4>
                <hr className='hr-title-form'></hr>
            </div>
            <div className="row">
                <div className="input-group">
                    <input type="text" name="user_name" id="name" required />
                    <label htmlFor="name"><FaUser style={{ fontSize: 25 }} /> {t("form_name")} </label>
                </div>
                <div className="input-group">
                    <input type="text" name="user_number" id="number" required />
                    <label htmlFor="number"> <ImPhone style={{ fontSize: 25 }} /> {t("form_phone")} </label>
                </div>
            </div>

            <div className="input-group">
                <input type="email" name="user_email" id="email" required />
                <label htmlFor="email"><MdEmail style={{ fontSize: 25 }} /> {t("form_email")} </label>
            </div>
            <div className="input-group">
                <textarea rows="8" name="message" id="message" required />
                <label htmlFor="message"><AiFillMessage style={{ fontSize: 25 }} /> {t("form_message")} </label>
            </div>
            <button type="submit">{t("form_button")} <SiMinutemailer style={{ fontSize: 25 }} /> </button>
        </form>
    );
}

export default ContactForm;