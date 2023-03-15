import { useContext } from "react";
import { Button } from "../../../components/Button/Button.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { PopUpContext } from "../../../contexts/PopUpContext.context";
import "./ProjectCard.styles.scss";

export const ProjectCard = ({ project }) => {
    const { id, title, subtitle, thumbnail, content } = project;
    const { openPopUp } = useContext(PopUpContext);

    return (
        <div className="ProjectCard">
            <div className="thumbnail-container">
                <img
                    className="thumbnail"
                    src={thumbnail}
                    alt={`Imagem do projeto ${title}`}
                />
            </div>
            <div className="info-container">
                <h3 className="title">{title}</h3>
                <Spacer y="4px" />
                <span className="subtitle">{subtitle}</span>
                <Spacer y="20px" />
                <Button
                    className="see-more"
                    onClick={() => openPopUp(id, 2, title, content)}
                >
                    Ver
                </Button>
            </div>
        </div>
    );
};
