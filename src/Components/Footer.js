import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import CFlogoDark from "../assets/CFlogoDark.png";

function Footer() {
    return (
        <div className="container d-flex justify-content-between align-items-center colonna pt-5">
            <img src={CFlogoDark} alt="logo" className="main-logo"/>
            <div className="desktop-footer-query tablet-footer-query">
                <a href="https://www.facebook.com/cecilia.fabiole" target="_blank" rel="noreferrer noopener"><CiFacebook className="icon-size" /></a>
                <a href="https://www.instagram.com/cecifabiole" target="_blank" rel="noreferrer noopener"><CiInstagram className="icon-size" /></a>
                <a href="https://www.linkedin.com/in/cecilia-fabiole-76565b208" target="_blank" rel="noreferrer noopener"><CiLinkedin className="icon-size" /></a>
                <a href="https://github.com/CeciliaFabiole" target="_blank" rel="noreferrer noopener"><VscGithubAlt className="icon-size" /></a>
            </div>

        </div>
    );
}

export default Footer;