import { Button } from "../../../components/Button/Button.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import "./ProjectCard.styles.scss";

// !!!!!!! CONSERTAR ESPAÇAMENTOS / USAR GRID !!!!!!!

export const ProjectCard = ({ project }) => {
    const { title, subtitle, thumbnail } = project;

    return (
        <div className="ProjectCard">
            {/* <img src="" /> */}
            <div className="card-halo" />
            <div className="info-container">
                <h3 className="title">{title}</h3>
                <Spacer y="4px" />
                <span className="subtitle">{subtitle}</span>
                <Spacer y="20px" />
                <Button className="see-more">Ver mais</Button>
            </div>
        </div>
    );
};
