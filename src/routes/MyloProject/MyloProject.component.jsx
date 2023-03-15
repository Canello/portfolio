import { SkillCard } from "../../components/SkillCard/SkillCard.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { PROJECTS } from "../../data/projects.data";
import "./MyloProject.styles.scss";
import myloCover from "../../assets/images/mylo-cover.png";

const generateSkillCards = () =>
    PROJECTS.mylo.skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
    ));

export const MyloProject = () => {
    const skillCards = generateSkillCards();

    return (
        <div className="MyloProject">
            {/* Imagem */}
            <div className="cover-container">
                <img className="cover" src={myloCover} />
            </div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Resumo */}
            <h3 className="text-section-title">Resumo</h3>
            <span className="text-section-text">
                Rede social para encontrar eventos que virou uma startup
                acelerada pela FGV Ventures. Rodamos o MVP na Unicamp, atingindo
                300 WAU e 100 DAU.
                <br />
                Minhas responsabilidades eram:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;- User research, design do produto,
                prototipagem e testes com usuários;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;- Desenvolvimento do app mobile, usando
                React Native;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;- Desenvolvilmento do back-end (API
                REST), usando Node.js + Express + PostgreSQL + MongoDB;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;- Desenvolvimento da landing page,
                usando React + CSS;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;- Acompanhamento de resultados por meio
                de entrevistas com usuários e métricas chave (WAU, DAU e
                retenção).
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Links */}
            <h3 className="text-section-title">Links</h3>
            <span className="text-section-text">
                <a
                    className="text-section-link"
                    href="https://www.appmylo.com/"
                    target="_blank"
                >
                    Landing page
                </a>
                <br />
                <a
                    className="text-section-link"
                    href="https://play.google.com/store/apps/details?id=com.gustavobrandicanello.mylo"
                    target="_blank"
                >
                    Play Store
                </a>
                <br />
                <a
                    className="text-section-link"
                    href="https://apps.apple.com/app/mylo/id1614012413"
                    target="_blank"
                >
                    App Store (pode estar fora do ar)
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
            {/* Features */}
            <h3 className="text-section-title">Features</h3>
            <Spacer y="8px" />
            <span className="text-section-text">
                <span className="text-section-subtitle">
                    Feed com eventos criados pelos próprios usuários
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Cada evento tem foto e informações, que
                podem ser editadas pelo criador;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível convidar amigos;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível confirmar presença para que
                outros usuários vejam que você vai no evento;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível salvar o evento para ver
                depois;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível compartilhar o evento via
                outros apps;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível criar um evento fechado e
                controlar quem tem permissão para convidar;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível denunciar o evento;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível filtrar por tipo de evento.
                <br />
                <br />
                <span className="text-section-subtitle">
                    Feed de pessoas que você segue
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Feed que mostra as atividades de pessoas
                que você segue, como confirmar e cancelar presença em eventos;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível curtir as atividades.
                <br />
                <br />
                <span className="text-section-subtitle">Página de buscas</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Carrossel com sugestões de pessoas que
                você pode conhecer;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Barra de busca para achar pessoas e
                atividades.
                <br />
                <br />
                <span className="text-section-subtitle">Perfil</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Foto de perfil;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Espaço para descrição e até 8 fotos
                adicionais;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível seguir e ser seguido por
                outros usuários;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Espaço com meus eventos passados e
                futuros;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível ter perfil privado
                (semelhante ao Instagram);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;É possível denunciar outros usuários.
                <br />
                <br />
                <span className="text-section-subtitle">Página de buscas</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Notificações em tempo real.
                <br />
                <br />
                <span className="text-section-subtitle">
                    Recuperação de senha
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Recuperação de senha com código enviado
                por e-mail.
                <br />
                <br />
                <span className="text-section-subtitle">
                    Trackeamento dos usuários
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Trackeamento das interações dos
                usuários, como: login, participações em eventos, seguir outro
                usuário, convidar pessoas para evento, etc.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
        </div>
    );
};
