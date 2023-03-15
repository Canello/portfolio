import "./PopUp.styles.scss";
import { Spacer } from "../Spacer/Spacer.component";
import { useContext } from "react";
import { PopUpContext } from "../../contexts/PopUpContext.context";
import { CloseIcon } from "./subcomponents/CloseIcon.component";

export const PopUp = ({ popUp }) => {
    const { id, z, title, content } = popUp;
    const { closePopUp } = useContext(PopUpContext);

    return (
        <div className="PopUp" style={{ zIndex: z }}>
            <div className="pop-up-background" onClick={() => closePopUp(id)} />
            <div className="pop-up-wrapper">
                <h2 className="pop-up-title">{title}</h2>
                <CloseIcon onClick={() => closePopUp(id)} />
                <Spacer y="40px" />
                {content}
            </div>
        </div>
    );
};
