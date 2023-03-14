import { createContext, useEffect, useState } from "react";
import { PopUp } from "../components/PopUp/PopUp.component";

export const PopUpContext = createContext();

export const PopUpContextProvider = ({ children }) => {
    const [popUps, setPopUps] = useState([]);
    const [popUpElements, setPopUpElements] = useState([]);

    const openPopUp = (id, z, title, content) => {
        const newPopUp = { id, z, title, content };
        setPopUps([...popUps, newPopUp]);
    };

    const closePopUp = (id) => {
        const filteredPopUps = popUps.filter((popUp) => popUp.id !== id);
        setPopUps(filteredPopUps);
    };

    const generatePopUpElements = () => {
        const newElements = popUps.map((popUp) => (
            <PopUp key={popUp.id} popUp={popUp} />
        ));
        setPopUpElements(newElements);
    };

    useEffect(() => {
        generatePopUpElements();
    }, [popUps]);

    return (
        <PopUpContext.Provider value={{ popUpElements, openPopUp, closePopUp }}>
            {children}
        </PopUpContext.Provider>
    );
};
