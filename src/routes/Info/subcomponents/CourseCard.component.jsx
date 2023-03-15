import { Spacer } from "../../../components/Spacer/Spacer.component";
import "./CourseCard.styles.scss";

export const CourseCard = ({ course }) => {
    const { name, link, certificate } = course;

    return (
        <div className="CourseCard">
            <h4 className="name">{name}</h4>
            <Spacer y="4px" />
            <div className="links-container">
                <a className="link block" href={link} target="_blank">
                    Curso
                </a>
                <span className="text-section-text block">
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
                <a className="link block" href={certificate} target="_blank">
                    Certificado
                </a>
            </div>
        </div>
    );
};
