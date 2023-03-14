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
            <div className="pop-up-wrapper">
                {/* <div className="pop-up-diamond pop-up-diamond1" />
                <div className="pop-up-diamond pop-up-diamond2" />
                <div className="pop-up-diamond pop-up-diamond3" /> */}
                <h2 className="pop-up-title">{title}</h2>
                <CloseIcon onClick={() => closePopUp(id)} />
                <Spacer y="72px" />
                {content}
            </div>
        </div>
    );
};
