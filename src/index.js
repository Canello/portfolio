import React from "react";
import ReactDOM from "react-dom/client";
import "./index.styles.scss";
import App from "./App/App.component";
import { PopUpContextProvider } from "./contexts/PopUpContext.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PopUpContextProvider>
            <App />
        </PopUpContextProvider>
    </React.StrictMode>
);
