import "./CloseIcon.styles.scss";
import CloseIconSvg from "../../../assets/icons/close-icon.svg";

export const CloseIcon = ({ onClick }) => {
    return (
        <div className="CloseIcon" onClick={onClick}>
            <img src={CloseIconSvg} alt="Close icon" />
            <div className="diamond diamond1" />
            <div className="diamond diamond2" />
            <div className="diamond diamond3" />
            <div className="diamond diamond4" />
        </div>
    );
};
