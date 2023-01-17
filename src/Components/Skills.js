import SkillsCard from "./SkillsCard";
import skillsLight from '../assets/skillsLight.png'

function Skills() {
    return (
        <div className="container-fluid">
            <div className="container d-flex flex-column">
                <div className="desktop-about-query">
                    <div className='contenitore-img d-flex align-items-end' id='skill-color'>
                        <div className='container'>
                            <img src={skillsLight} alt="" className="spontaneous-img" />
                        </div>
                    </div>
                    <div className="griglia">
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg' title="HTML5" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' title="CSS" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg' title="SCSS" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' title="Javascript" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg' title="Typescript" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' title="React" paragraph="Lorem ipsum" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg' title="Node.js" paragraph="Lorem ipsum" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express.js" paragraph="Lorem ipsum" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgresQL" paragraph="Lorem ipsum" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;