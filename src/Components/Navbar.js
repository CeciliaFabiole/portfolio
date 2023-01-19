import React, { useRef } from "react";
import { Link } from "react-router-dom";
import exCFlogoDark from "../assets/exCFlogoDark.png";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'

const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr',
        short: '.FR'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
        short: '.EN'
    },
    {
        code: 'it',
        name: 'Italiano',
        country_code: 'it',
        short: '.IT'
    }
]

function Navbar() {
    const currentLanguageCode = cookies.get('i18next')
    const { t } = useTranslation();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={exCFlogoDark} alt="logo" className="main-exlogo" /></Link>
                <button onClick={showNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/about">{t('nav_about_me')}</Link>
                        <Link className="nav-link" to="/skills">{t('nav_skills')}</Link>
                        <Link className="nav-link" to="/experiences">{t('nav_experiences')}</Link>
                        <Link className="nav-link" to="/contact">{t('nav_contact_me')}</Link>
                        <div className="selezione-lingua tablet-display">
                            {languages.map(({ code, country_code, name, short }) => (
                                <button
                                    key={country_code}
                                    onClick={() => i18next.changeLanguage(code)}
                                    disabled={code === currentLanguageCode}>
                                    {short}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="selezione-lingua justify-content-end desktop-display">
                    {languages.map(({ code, country_code, name, short }) => (
                        <button
                            key={country_code}
                            onClick={() => i18next.changeLanguage(code)}
                            disabled={code === currentLanguageCode}>
                            {short}
                        </button>
                    ))}
                </div>
            </div>

        </nav>
    );
}

export default Navbar;