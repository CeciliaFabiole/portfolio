import SkillsCard from "./SkillsCard";
import logoSass from '../assets/logo_sass.png'
import logoCSS from '../assets/logo_css.png'
import logoHTML from '../assets/logo_html.png'
import logoJavascript from '../assets/logo_javascript.png'
import logoTypescript from '../assets/logo_typescript.png'
import logoReact from '../assets/logo_react.png'
import logoNodejs from '../assets/logo_nodejs.png'

function Skills() {
    return (
        <div className="container-fluid bg-success pt-5">
            <div className="container bg-light pt-5">
                <div className="desktop-about-query">
                    <img src="#" alt="" className="bg-dark spontaneous-img"/>
                    <div className="griglia">
                        <SkillsCard logo={logoHTML} title="HTML5" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoCSS} title="CSS" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoSass} title="SCSS" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoJavascript} title="Javascript" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoTypescript} title="Typescript" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoReact} title="React" paragraph="Lorem ipsum"/>
                        <SkillsCard logo={logoNodejs} title="Node.js" paragraph="Lorem ipsum"/>
                        <SkillsCard logo="#" title="Express.js" paragraph="Lorem ipsum"/>
                        <SkillsCard logo="#" title="PostgresQL" paragraph="Lorem ipsum"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;