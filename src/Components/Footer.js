import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
function Footer() {
    return (
        <div className="container d-flex justify-content-between align-items-center colonna">
            <h3>Logo</h3>
            <div className="desktop-footer-query tablet-footer-query">
                <a href="https://www.facebook.com/cecilia.fabiole" target="_blank" rel="noreferrer"><CiFacebook className="icon-size" /></a>
                <a href="https://www.instagram.com/cecifabiole" target="_blank" rel="noreferrer"><CiInstagram className="icon-size" /></a>
                <a href="https://www.linkedin.com/in/cecilia-fabiole-76565b208" target="_blank" rel="noreferrer"><CiLinkedin className="icon-size" /></a>
                <a href="https://github.com/CeciliaFabiole" target="_blank" rel="noreferrer"><VscGithubAlt className="icon-size" /></a>
            </div>

        </div>
    );
}

export default Footer;