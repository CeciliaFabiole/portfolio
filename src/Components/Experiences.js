import { CardExperience, CardProject } from './CardExperience';
import { useTranslation } from "react-i18next";

function Experiences() {
    const { t } = useTranslation();
    return (
        <div className="container-fluid altezza">
            <div className="container altezza">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end' id='ex-color'>
                        <div className='container'>
                        <h1 className="spontaneous-img">{t("experience_copertina")}</h1>
                        </div>
                    </div>
                </div>
                <div className='desktop-experience-query'>
                    <div className='desktop-projects-query'>
                        <div className='mb-5 contenitore-titolo'>
                            <h2>{t("experience_projects")}</h2>
                            <hr className='hr-title'></hr>
                        </div>
                        <CardProject year={t("nvidia_project")} job='React, Bootstrap' place={t("show_more")} link="https://github.com/Micheleg27/NVIDIA-GeForce-Now-REACT-" />
                        <CardProject year={t("pancake_project")} job='HTML, SCSS, Javascript' place={t("show_more")} link="https://github.com/rickcrypto90/PancakeSwap_Team5" />
                        <CardProject year={t("hw1_project")} job='HTML, CSS, Javascript' place={t("show_more")} link="https://github.com/riorillo/hw-team-1" />

                    </div>
                    <div className='desktop-study-query'>
                        <div className='mb-5 contenitore-titolo'>
                            <h2>{t("experience_training")}</h2>
                            <hr className='hr-title'></hr>
                        </div>
                        <CardExperience year='2022' job='Develhope' place={t("experience_programing")} />
                        <CardExperience year='2018-2021' job={t("experience_accademy")} place={t("experience_graphics")} />
                        <CardExperience year='2010-2015' job={t("experience_linguistic")} place={t("experience_languages")} />

                    </div>
                    <div className='desktop-work-query'>
                        <div className='mb-5 contenitore-titolo'>
                            <h2>{t("experience_work")}</h2>
                            <hr className='hr-title'></hr>
                        </div>

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