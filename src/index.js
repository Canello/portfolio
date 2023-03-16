import React from "react";
import ReactDOM from "react-dom/client";
import "./index.styles.scss";
import App from "./App/App.component";
import { PopUpContextProvider } from "./contexts/PopUpContext.context";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Bold.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-BoldItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Heavy.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-HeavyItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Italic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Italic(1).otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Light.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-LightItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-LightItalic(1).otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Medium.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-MediumItalic.otf";
import "./assets/fonts/BeaufortForLoL-OTF/BeaufortForLoL-OTF/BeaufortforLoL-Regular.otf";
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
