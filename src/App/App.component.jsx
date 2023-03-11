import "./App.styles.scss";
import { Button } from "../components/Button/Button.component";
import { Spacer } from "../components/Spacer/Spacer.component";
import { FloatingDiamonds } from "./subcomponents/FloatingDiamonds.component";

// !!!!!!!!!!!!!!!!!!!! RESPONSIVIDADE !!!!!!!!!!!!!!!!!!!!

function App() {
    return (
        <div className="App">
            <FloatingDiamonds />
            <div className="home-page-border">
                <main>
                    <h1 className="my-name">Gustavo Brandi Canello</h1>
                    <h2 className="my-title">Dev full-stack & Designer</h2>
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
