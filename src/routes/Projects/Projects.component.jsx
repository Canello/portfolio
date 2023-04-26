import "./Projects.styles.scss";
import { ProjectCard } from "./subcomponents/ProjectCard.component";
import { PROJECTS } from "../../data/projects.data";
import { Spacer } from "../../components/Spacer/Spacer.component";

export const Projects = () => {
    return (
        <div className="Projects">
            <div className="projects-container">
                <ProjectCard project={PROJECTS.mylo} />
                <ProjectCard project={PROJECTS.englishBot} />
                <ProjectCard project={PROJECTS.maze} />
                <ProjectCard project={PROJECTS.weeev} />
                <ProjectCard project={PROJECTS.portfolio} />
            </div>
            <Spacer y="40px" />
        </div>
    );
};
