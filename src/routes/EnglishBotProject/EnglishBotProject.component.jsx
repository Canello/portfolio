import "./EnglishBotProject.styles.scss";
import englishBotCover from "../../assets/images/english-teacher-cover.png";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { SkillCard } from "../../components/SkillCard/SkillCard.component";
import { PROJECTS } from "../../data/projects.data";

const generateSkillCards = () =>
    PROJECTS.englishBot.skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
    ));

export const EnglishBotProject = () => {
    const skillCards = generateSkillCards();

    return (
        <div className="EnglishBotProject">
            {/* Imagem */}
            <div className="cover-container">
                <img
                    className="cover"
                    src={englishBotCover}
                    alt="Maze generator page"
                />
            </div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Resumo */}
            <h3 className="text-section-title">Resumo</h3>
            <span className="text-section-text">
                Um bot que age como um professor de inglês para treinar
                conversação.
                <br />O app grava a voz do usuário e usa speech-to-text para
                transformá-la em texto. O texto então é enviado para a API do
                ChatGPT, junto a orientações para agir como um professor de
                inglês. Por fim, o app transforma a resposta do ChatGPT em voz,
                a fim de simular conversação.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Links */}
            <h3 className="text-section-title">Links</h3>
            <a
                className="text-section-link"
                href="https://www.veewi.fun/"
                target="_blank"
            >
                Web app
            </a>
            <br />
            <a
                className="text-section-link"
                href="https://github.com/Canello/language"
                target="_blank"
            >
                GitHub front-end
            </a>
            <br />
            <a
                className="text-section-link"
                href="https://github.com/Canello/language-api"
                target="_blank"
            >
                GitHub back-end
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
