import myloImg from "../assets/images/mylo-card.png";
import portfolioImg from "../assets/images/portfolio-card.png";
import mazeImg from "../assets/images/maze-card.png";
import weeevImg from "../assets/images/weeev-card.png";
import englishBotImg from "../assets/images/english-teacher-card.png";
import { MyloProject } from "../routes/MyloProject/MyloProject.component";
import { MazeProject } from "../routes/MazeProject/MazeProject.component";
import { WeeevProject } from "../routes/WeeevProject/WeeevProject.component";
import { PortfolioProject } from "../routes/PortfolioProject/PortfolioProject.component";
import { EnglishBotProject } from "../routes/EnglishBotProject/EnglishBotProject.component";

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
            "API REST",
            "Postman",
            "Figma",
            "Excel",
            "Agile",
        ],
    },
    portfolio: {
        id: "portfolio",
        title: "Portfolio",
        subtitle: "Esse portfolio aqui. Feito com React.",
        thumbnail: portfolioImg,
        content: <PortfolioProject />,
        skills: ["React", "SCSS", "AWS", "Context API", "Hooks", "Figma"],
    },
    maze: {
        id: "maze",
        title: "Maze Generator/Game",
        subtitle: "Gerador de labirintos jogáveis, usando depth first search.",
        thumbnail: mazeImg,
        content: <MazeProject />,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "AWS",
            "Orientação a Objetos",
            "Depth First Search",
        ],
    },
    weeev: {
        id: "weeev",
        title: "Weeev",
        subtitle: "Web app para compartilhar ideias por link.",
        thumbnail: weeevImg,
        content: <WeeevProject />,
        skills: [
            "React",
            "SCSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "AWS",
            "Heroku",
            "React Router",
            "JWT",
            "Context API",
            "Hooks",
            "MVC",
            "API REST",
            "Postman",
            "Figma",
            "Design System",
        ],
    },
    englishBot: {
        id: "englishBot",
        title: "Caitlyn",
        subtitle: "Bot para treinar conversação em inglês. Feito com ChatGPT.",
        thumbnail: englishBotImg,
        content: <EnglishBotProject />,
        skills: [
            "React",
            "SCSS",
            "Node.js",
            "Python",
            "OpenAI API",
            "Express",
            "AWS EC2",
            "Hooks",
            "MVC",
            "API REST",
            "Postman",
        ],
    },
};
