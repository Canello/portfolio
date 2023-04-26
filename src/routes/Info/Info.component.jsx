import { Spacer } from "../../components/Spacer/Spacer.component";
import "./Info.styles.scss";
import { INFO } from "../../data/info.data";
import { CourseCard } from "./subcomponents/CourseCard.component";
import { SkillCard } from "../../components/SkillCard/SkillCard.component";

const generateSkillCards = () =>
    INFO.skills.map((skill) => <SkillCard key={skill} skill={skill} />);

const generateCourseCards = () =>
    INFO.courses.map((course) => (
        <CourseCard key={course.name} course={course} />
    ));

export const Info = () => {
    const skillCards = generateSkillCards();
    const courseCards = generateCourseCards();

    return (
        <div className="Info">
            {/* Sobre */}
            <h3 className="text-section-title">Sobre</h3>
            <span className="text-section-text">
                Trabalhando com programação desde 02/2021, quando estagiei com
                análise de dados na Cielo.
                <br />
                Saí de lá para participar de uma startup baseada num app mobile
                desenvolvido por mim, que foi acelerada pela FGV Ventures.
                <br />
                Atualmente, busco vaga como desenvolvedor front/back-end, com as
                tecnologias: React, React Native e Node.js.
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Ensino */}
            <h3 className="text-section-title">Ensino</h3>
            <span className="text-section-text">
                Engenharia Mecânica - Universidade Estadual de Campinas
                (UNICAMP)
                <br />
                Graduado em 03/2022
            </span>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Habilidades */}
            <h3 className="text-section-title">Habilidades</h3>
            <Spacer y="8px" />
            <div className="cards-container">{skillCards}</div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
            {/* Cursos e certificados */}
            <h3 className="text-section-title">Cursos e certificados</h3>
            <Spacer y="8px" />
            <div className="cards-container">{courseCards}</div>
            <Spacer y="40px" />
            {/* ----------------------------------------------------------------------- */}
        </div>
    );
};
