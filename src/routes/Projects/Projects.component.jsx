import "./Projects.styles.scss";
import { ProjectCard } from "./subcomponents/ProjectCard.component";
import { PROJECTS } from "./data/projects";
import { Spacer } from "../../components/Spacer/Spacer.component";

export const Projects = () => {
    return (
        <div className="Projects">
            <div className="projects-container">
                <ProjectCard project={PROJECTS.mylo} />
                {/* <ProjectCard project={PROJECTS.portfolio} />
                <ProjectCard project={PROJECTS["maze-generator"]} />
                <ProjectCard project={PROJECTS.weeev} /> */}
            </div>
        </div>
    );
};
