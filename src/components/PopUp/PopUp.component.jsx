import "./PopUp.styles.scss";
import { Spacer } from "../Spacer/Spacer.component";
import { useContext, useRef } from "react";
import { PopUpContext } from "../../contexts/PopUpContext.context";
import { CloseIcon } from "./subcomponents/CloseIcon.component";

export const PopUp = ({ popUp }) => {
    const { id, z, title, content } = popUp;
    const { closePopUp } = useContext(PopUpContext);
    const ref = useRef();

    const animateThenClose = (id) => {
        ref.current.classList.add("closing");
        setTimeout(() => closePopUp(id), 150);
    };

    return (
        <div className="PopUp" style={{ zIndex: z }}>
            <div
                className="pop-up-background"
                onClick={() => animateThenClose(id)}
            />
            <div className="pop-up-wrapper" ref={ref}>
                <h2 className="pop-up-title">{title}</h2>
                <CloseIcon onClick={() => animateThenClose(id)} />
                <Spacer y="40px" />
                {content}
            </div>
        </div>
    );
};
