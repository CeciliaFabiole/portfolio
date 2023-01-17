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
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg' title="HTML5" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' title="CSS" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg' title="SCSS" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' title="Javascript" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg' title="Typescript" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' title="React" paragraph="One year" />
                        <SkillsCard logo='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg' title="Node.js" paragraph="One year" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" title="Express.js" paragraph="One year" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg" title="PostgresQL" paragraph="One year" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" paragraph="One year" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" title="Git" paragraph="One year" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/illustrator/illustrator-line.svg" title="Illustrator" paragraph="Three years" />
                        <SkillsCard logo="" title="InDesign" paragraph="Three years" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-line.svg" title="Photoshop" paragraph="Three years" />
                        <SkillsCard logo="" title="Lightroom" paragraph="Three years" />
                        <SkillsCard logo="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/xd/xd-line.svg" title="XD" paragraph="Three years" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197374.png" title="English" paragraph="B2" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197560.png" title="French" paragraph="C1" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197571.png" title="German" paragraph="B2" />
                        <SkillsCard logo="https://cdn-icons-png.flaticon.com/512/197/197566.png" title="Greek" paragraph="Work in progress" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;