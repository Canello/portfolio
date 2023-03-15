import "./App.styles.scss";
import { Button } from "../components/Button/Button.component";
import { FloatingDiamonds } from "./subcomponents/FloatingDiamonds.component";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext.context";
import { Projects } from "../routes/Projects/Projects.component";
import { Contact } from "../routes/Contact/Contact.component";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! FINALIZAR DEMAIS ROTAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADICIONAR ANIMAÇÕES DE ABERTURA DE POP UP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function App() {
    const { popUpElements, openPopUp } = useContext(PopUpContext);
    const openInfoPopUp = () => openPopUp("info", 1, "Informações", <></>);
    const openProjectsPopUp = () =>
        openPopUp("projects", 1, "Projetos", <Projects />);
    const openContactPopUp = () =>
        openPopUp("contact", 1, "Contato", <Contact />);

    return (
        <div className="App">
            <FloatingDiamonds />
            <div className="home-page-border">
                <main>
                    <h1 className="my-name">Gustavo Brandi Canello</h1>
                    <h2 className="my-title">Dev full-stack & Designer</h2>
                    <div className="main-buttons-container">
                        <Button
                            className="home-page-button"
                            onClick={openInfoPopUp}
                        >
                            Informações
                        </Button>
                        <Button
                            className="home-page-button"
                            onClick={openProjectsPopUp}
                        >
                            Projetos
                        </Button>
                        <Button
                            className="home-page-button"
                            onClick={openContactPopUp}
                        >
                            Contato
                        </Button>
                    </div>
                </main>
            </div>
            {popUpElements}
        </div>
    );
}

export default App;
