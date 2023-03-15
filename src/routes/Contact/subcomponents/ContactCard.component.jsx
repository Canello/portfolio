import { Spacer } from "../../../components/Spacer/Spacer.component";
import "./ContactCard.styles.scss";

export const ContactCard = ({ media }) => {
    const { icon, name, username, link } = media;

    return (
        <div className="ContactCard">
            <img className="icon" src={icon} alt={`${name} icon`} />
            <Spacer x="12px" />
            <div className="info-container">
                <span className="media-name">{name}</span>
                <Spacer y="4px" />
                <a className="username" href={link} target="_blank">
                    {username}
                </a>
            </div>
        </div>
    );
};
