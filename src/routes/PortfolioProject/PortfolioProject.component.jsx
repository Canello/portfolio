import "./PortfolioProject.styles.scss";
import { Spacer } from "../../components/Spacer/Spacer.component";
import portfolioCover from "../../assets/images/portfolio-cover.png";
import { PROJECTS } from "../../data/projects.data";
import { SkillCard } from "../../components/SkillCard/SkillCard.component";

const generateSkillCards = () =>
    PROJECTS.portfolio.skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
    ));

export const PortfolioProject = () => {
    const skillCards = generateSkillCards();

    return (
        <div className="PortfolioProject">
            {/* Imagem */}
            <div className="cover-container">
                <img
                    className="cover"
                    src={portfolioCover}
                    alt="Portfolio page"
                />
            </div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Resumo */}
            <h3 className="text-section-title">Resumo</h3>
            <span className="text-section-text">
                Esse portfolio aqui. Feito com React.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Links */}
            <h3 className="text-section-title">Links</h3>
            <span className="text-section-text">
                <a
                    className="text-section-link"
                    href="https://github.com/Canello/portfolio"
                    target="_blank"
                >
                    GitHub
                </a>
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Habilidades utilizadas */}
            <h3 className="text-section-title">Habilidades utilitzadas</h3>
            <Spacer y="8px" />
            <div className="cards-container">{skillCards}</div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
        </div>
    );
};
