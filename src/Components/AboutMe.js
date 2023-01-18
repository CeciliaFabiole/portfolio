import aboutLight from '../assets/aboutLight.png'
import CVCeciliaFabiole from '../assets/CV-CeciliaFabiole.pdf'
import { FiFileText } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function AboutMe() {
    const {t} = useTranslation();
    return (
        <div className="container-fluid ">
            <div className="container d-flex flex-column ">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end'>
                        <div className='container'>
                            <img src={aboutLight} alt="" className="spontaneous-img" />
                        </div>
                    </div>

                    <div className="half-about">
                        <h6>{t("home_p1")}</h6>
                        <p>{t("home_p2")}</p>
                        <p>{t("home_p3")}</p>
                        <p>{t("home_p4")}</p>

                        <p>{t("home_p5")}</p>
                        <p>{t("home_p6")}</p>

                    </div>
                    <div className='bordo'>
                        <a download="" href={CVCeciliaFabiole} className="allineamento">
                            <FiFileText size="25px" />
                            <h5 className='mt-3'>{t("cv-download")}</h5>
                            
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;