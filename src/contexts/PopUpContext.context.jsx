import { createContext, useEffect, useState } from "react";
import { PopUp } from "../components/PopUp/PopUp.component";

export const PopUpContext = createContext();

export const PopUpContextProvider = ({ children }) => {
    const [popUps, setPopUps] = useState([]);
    const [popUpElements, setPopUpElements] = useState([]);

    const openPopUp = (id, z, content) => {
        const newPopUp = { id, z, content };
        setPopUps([...popUps, newPopUp]);
    };

    const closePopUp = (id) => {
        const filteredPopUps = popUps.filter((popUp) => popUp.key !== id);
        setPopUps(filteredPopUps);
    };

    const generatePopUpElements = () => {
        const newElements = popUps.map((popUp) => (
            <PopUp key={popUp.id} z={popUp.z}>
                {popUp.content}
            </PopUp>
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
