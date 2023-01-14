function SkillsCard({ logo, title, paragraph }) {
    return (
        <div className="skill-box">
            <div className="skill-title">
                <div className="skill-img">
                    <img src={logo} alt="" className="skill-icon" />
                </div>
                <h3>{title}</h3>
            </div>
            <p>{paragraph}</p>
        </div>
    );
}

export default SkillsCard;