import exLight from '../assets/exLight.png'
import CardExperience from './CardExperience';
import { useTranslation } from "react-i18next";

function Experiences() {
    const {t} = useTranslation();
    return (
        <div className="container-fluid altezza">
            <div className="container altezza">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end' id='ex-color'>
                        <div className='container'>
                            <img src={exLight} alt="" className="spontaneous-img" />
                        </div>
                    </div>
                </div>
                <div className='desktop-experience-query mt-5'>
                    <div className='desktop-study-query'>
                        
                        <CardExperience year='2022' job='Develhope' place={t("experience_programing")} />
                        <CardExperience year='2018-2021' job={t("experience_accademy")} place={t("experience_graphics")} />
                        <CardExperience year='2010-2015' job={t("experience_linguistic")} place={t("experience_languages")} />

                    </div>
                    <div className='desktop-work-query'>
                        
                        <CardExperience year='2022' job={t("experience_lifeguard")} place={t("experience_kos")} />
                        <CardExperience year='2021' job={t("experience_photographer")} place={t("experience_evia")} />
                        <CardExperience year='2014-2020' job={t("experience_bartender")} place={t("experience_vda")} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;