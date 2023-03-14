import myloImg from "../assets/images/mylo-card.png";
import portfolioImg from "../assets/images/portfolio-card.png";
import mazeImg from "../assets/images/maze-card.png";
import weeevImg from "../assets/images/weeev-card.png";

export const PROJECTS = {
    mylo: {
        title: "Mylo",
        subtitle:
            "Rede social para encontrar atividades e eventos. Startup acelerada pela FGV Ventures.",
        thumbnail: myloImg,
    },
    portfolio: {
        title: "Portfolio",
        subtitle: "Esse portfolio aqui. Inception!",
        thumbnail: portfolioImg,
    },
    maze: {
        title: "Maze Generator/Game",
        subtitle:
            "Gerador de labirintos jogáveis, usando depth first search e backtracking.",
        thumbnail: mazeImg,
    },
    weeev: {
        title: "Weeev",
        subtitle: "Web app para compartilhar ideias por link.",
        thumbnail: weeevImg,
    },
};
