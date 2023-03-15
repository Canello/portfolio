import "./MazeProject.styles.scss";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { PROJECTS } from "../../data/projects.data";
import { SkillCard } from "../../components/SkillCard/SkillCard.component";
import mazeCover from "../../assets/images/maze-cover.png";

const generateSkillCards = () =>
    PROJECTS.maze.skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
    ));

export const MazeProject = () => {
    const skillCards = generateSkillCards();

    return (
        <div className="MazeProject">
            {/* Imagem */}
            <div className="cover-container">
                <img
                    className="cover"
                    src={mazeCover}
                    alt="Maze generator page"
                />
            </div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Resumo */}
            <h3 className="text-section-title">Resumo</h3>
            <span className="text-section-text">
                Um algoritmo de geração de labirintos com animação. Feito usando
                depth first search e backtraking.
                <br />
                É possível jogar no labirinto depois que ele for gerado — o
                objetivo é escapar antes que o tempo acabe.
                <br />
                Tudo foi feito em HTML, CSS e JavaScript puro, usando orientação
                a objetos. A hospedagem foi feita na AWS.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Links */}
            <h3 className="text-section-title">Links</h3>
            <a
                className="text-section-link"
                href="https://www.weeev.cyou/"
                target="_blank"
            >
                Web app
            </a>
            <br />
            <a
                className="text-section-link"
                href="https://github.com/Canello/maze"
                target="_blank"
            >
                GitHub
            </a>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Habilidades utilizadas */}
            <h3 className="text-section-title">Habilidades utilizadas</h3>
            <Spacer y="8px" />
            <div className="cards-container">{skillCards}</div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
        </div>
    );
};
