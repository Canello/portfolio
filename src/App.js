import "./App.styles.scss";
import { Button } from "./components/Button/Button.component";
import { Spacer } from "./components/Spacer/Spacer.component";

function App() {
    return (
        <div className="App">
            <div className="home-page-border">
                <main>
                    <h1 className="my-name color-p-5">
                        Gustavo Brandi Canello
                    </h1>
                    <h2 className="my-title color-p-5">
                        Dev full-stack & Designer
                    </h2>
                    <div className="main-buttons-container">
                        <Button>Informações</Button>
                        <Spacer x="32px" />
                        <Button>Projetos</Button>
                        <Spacer x="32px" />
                        <Button>Contato</Button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
