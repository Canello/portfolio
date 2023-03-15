import myloImg from "../assets/images/mylo-card.png";
import portfolioImg from "../assets/images/portfolio-card.png";
import mazeImg from "../assets/images/maze-card.png";
import weeevImg from "../assets/images/weeev-card.png";
import { MyloProject } from "../routes/MyloProject/MyloProject.component";
import { MazeProject } from "../routes/MazeProject/MazeProject.component";

export const PROJECTS = {
    mylo: {
        id: "mylo",
        title: "Mylo",
        subtitle:
            "Rede social para encontrar atividades e eventos. Startup acelerada pela FGV Ventures.",
        thumbnail: myloImg,
        content: <MyloProject />,
        skills: [
            "React",
            "React Native",
            "CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "Heroku",
            "React Navigation",
            "JWT",
            "Socket.IO",
            "Context API",
            "Hooks",
            "MVC",
            "Postman",
            "Figma",
            "Excel",
            "Agile",
        ],
    },
    portfolio: {
        id: "portfolio",
        title: "Portfolio",
        subtitle: "Esse portfolio aqui. Inception!",
        thumbnail: portfolioImg,
    },
    maze: {
        id: "maze",
        title: "Maze Generator/Game",
        subtitle:
            "Gerador de labirintos jogáveis, usando depth first search e backtracking.",
        thumbnail: mazeImg,
        content: <MazeProject />,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "AWS",
            "Orientação a Objetos",
            "Depth First Search",
            "Backtracking",
        ],
    },
    weeev: {
        id: "weeev",
        title: "Weeev",
        subtitle: "Web app para compartilhar ideias por link.",
        thumbnail: weeevImg,
    },
};
