import React, { useRef } from "react";
import { Link } from "react-router-dom";
import exCFlogoDark from "../assets/exCFlogoDark.png";

function Navbar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={exCFlogoDark} alt="logo" className="main-exlogo"/></Link>
                <button onClick={showNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/about">About me</Link>
                        <Link className="nav-link" to="/skills">Skills</Link>
                        <Link className="nav-link" to="/experiences">Experiences</Link>
                        <Link className="nav-link" to="/contact">Contact me</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;