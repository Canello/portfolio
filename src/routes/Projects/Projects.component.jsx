import { useContext } from "react";
import { PopUpContext } from "../../contexts/PopUpContext.context";

export const Projects = ({ id }) => {
    const { closePopUp } = useContext(PopUpContext);

    return (
        <div style={{ backgroundColor: "red" }}>
            <h2 onClick={() => closePopUp(id)}>asdasdas</h2>
            <h2>fdsfsfss</h2>
        </div>
    );
};
