import React from "react";
import ReactDOM from "react-dom/client";
import "./index.styles.scss";
import App from "./App/App.component";
import { PopUpContextProvider } from "./contexts/PopUpContext.context";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Bold.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-BoldItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Heavy.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-HeavyItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Italic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Italic(1).otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Light.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-LightItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-LightItalic(1).otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Medium.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-MediumItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLOL-Regular.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-Bold.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-BoldItalic.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-Regular.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-RegularItalic.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-SemiBold.otf";
import "./assets/fonts/Spiegel-OTF/Spiegel-OTF/Spiegel-SemiBoldItalic.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PopUpContextProvider>
            <App />
        </PopUpContextProvider>
    </React.StrictMode>
);
