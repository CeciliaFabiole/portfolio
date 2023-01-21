import SkillsCard from "./SkillsCard";
import { useTranslation } from "react-i18next";
import indesignLine from "../assets/indesign-line.svg"
import lightroomLine from "../assets/lightroom-line.svg"

function Skills() {
    const { t } = useTranslation();
    return (
        <div className="container-fluid">
            <div className="container d-flex flex-column">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end' id='skill-color'>
                        <div className='container'>
                            <h1 className="spontaneous-img">{t("skill_copertina")}</h1>
                        </div>
                    </div>

                    <div className='contenitore-titolo'>
                        <h4>{t("skill_program")}</h4>
                        <hr className='hr-title'></hr>
                    </div>
                    <div className="griglia">
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg' title="HTML5" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' title="CSS" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg' title="SCSS" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' title="Javascript" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg' title="Typescript" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' title="React" paragraph={t("skills_1y")} />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg' title="Node.js" paragraph={t("skills_1y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express.js" paragraph={t("skills_1y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgresQL" paragraph={t("skills_1y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" paragraph={t("skills_1y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" title="Git" paragraph={t("skills_1y")} />
                    </div>
                    <div className='contenitore-titolo'>
                        <h4>{t("skill_adobe")}</h4>
                        <hr className='hr-title'></hr>
                    </div>
                    <div className="griglia">
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/illustrator/illustrator-line.svg" title="Illustrator" paragraph={t("skills_3y")} />
                        <SkillsCard logo={indesignLine} title="InDesign" paragraph={t("skills_3y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-line.svg" title="Photoshop" paragraph={t("skills_3y")} />
                        <SkillsCard logo={lightroomLine} title="Lightroom" paragraph={t("skills_3y")} />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/xd/xd-line.svg" title="XD" paragraph={t("skills_3y")} />
                    </div>
                    <div className='contenitore-titolo'>
                        <h4>{t("skill_languages")}</h4>
                        <hr className='hr-title'></hr>
                    </div>
                    <div className="griglia">
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/5315/5315858.png" title={t("italian")} paragraph={t("mothertongue")} />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197374.png" title={t("english")} paragraph="B2" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197560.png" title={t("french")} paragraph="C1" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197571.png" title={t("german")} paragraph="B2" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197566.png" title={t("greek")} paragraph={t("work_in_progress")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;