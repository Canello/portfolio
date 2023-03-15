import "./SkillCard.styles.scss";

export const SkillCard = ({ skill }) => {
    return (
        <div className="SkillCard">
            <span className="skill">{skill}</span>
        </div>
    );
};
