import "./App.styles.scss";
import { Button } from "../components/Button/Button.component";
import { FloatingDiamonds } from "./subcomponents/FloatingDiamonds.component";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext.context";
import { Projects } from "../routes/Projects/Projects.component";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADICIONAR REACT ROUTER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADICIONAR ANIMAÇÕES DE ABERTURA DE POP UP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function App() {
    const { popUpElements, openPopUp } = useContext(PopUpContext);

    return (
        <div className="App">
            <FloatingDiamonds />
            <div className="home-page-border">
                <main>
                    <h1 className="my-name">Gustavo Brandi Canello</h1>
                    <h2 className="my-title">Dev full-stack & Designer</h2>
                    <div className="main-buttons-container">
                        <Button className="home-page-button">
                            Informações
                        </Button>
                        <Button
                            className="home-page-button"
                            onClick={() =>
                                openPopUp("projects", 1, <Projects />)
                            }
                        >
                            Projetos
                        </Button>
                        <Button className="home-page-button">Contato</Button>
                    </div>
                </main>
            </div>
            {popUpElements}
        </div>
    );
}

export default App;
