import "./WeeevProject.styles.scss";
import weeevCover from "../../assets/images/weeev-cover.png";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { PROJECTS } from "../../data/projects.data";
import { SkillCard } from "../../components/SkillCard/SkillCard.component";
import weeevDesign from "../../assets/images/weeev-design.png";
import weeevBackEnd from "../../assets/images/weeev-back-end.png";
import weeevFrontEnd from "../../assets/images/weeev-front-end.png";

const generateSkillCards = () =>
    PROJECTS.weeev.skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
    ));

export const WeeevProject = () => {
    const skillCards = generateSkillCards();

    return (
        <div className="WeeevProject">
            {/* Imagem */}
            <div className="cover-container">
                <img className="cover" src={weeevCover} alt="Weeev web app" />
            </div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Resumo */}
            <h3 className="text-section-title">Resumo</h3>
            <span className="text-section-text">
                Web app para compartilhar ideias por link. A intenção é criar
                uma ideia e spammar o link para ver quem quer participar.
                Depois, é só escolher entre os interessados e criar um grupo no
                WhatsApp para realizar o evento.
                <br />O front-end foi feito com React + SCSS; o back-end, com
                Node.js + Express + PostgreSQL; a hospedagem, com Heroku + AWS;
                e o design system, com Figma.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Links */}
            <h3 className="text-section-title">Links</h3>
            <a className="text-section-link" href="https://www.weeev.fun/">
                Web app
            </a>
            <br />
            <a
                className="text-section-link"
                href="https://github.com/Canello/weeev-webapp"
            >
                GitHub front-end
            </a>
            <br />
            <a
                className="text-section-link"
                href="https://github.com/Canello/weeev-api"
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
            {/* Etapas */}
            <h3 className="text-section-title">Etapas</h3>
            <Spacer y="8px" />
            <h5 className="text-section-subtitle">
                Design system e prototipagem
            </h5>
            <span className="text-section-text">
                Ideação do produto, sketches, wireframes e protótipos de alta
                fidelidade.
                <br />
                Aqui foram definidos espaçamentos, cores, tipografia e
                componentes, visando facilitar o processo de design, a criação
                dos componentes e a reutilização de código.
            </span>
            <Spacer y="8px" />
            <img
                className="image"
                src={weeevDesign}
                alt="design system schema"
            />
            <Spacer y="24px" />
            <h5 className="text-section-subtitle">Back-end</h5>
            <span className="text-section-text">
                Definição do esquema do banco de dados e dos endpoints da API.
            </span>
            <Spacer y="8px" />
            <img className="image" src={weeevBackEnd} alt="back-end schema" />
            <Spacer y="24px" />
            <h5 className="text-section-subtitle">Front-end</h5>
            <span className="text-section-text">
                Definição dos componentes e do fluxo de dados dentro do app
                React.
            </span>
            <Spacer y="8px" />
            <img className="image" src={weeevFrontEnd} alt="front-end-schema" />
            <Spacer y="40px" />
        </div>
    );
};
