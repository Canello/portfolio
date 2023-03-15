import { Spacer } from "../../components/Spacer/Spacer.component";
import "./Contact.styles.scss";
import { ContactCard } from "./subcomponents/ContactCard.component";
import { CONTACT } from "../../data/contact.data";

export const Contact = () => {
    return (
        <div className="Contact">
            <span className="text-info">+55 11 96049 4096</span>
            <Spacer y="4px" />
            <span className="text-info">gustavobrandicanello@gmail.com</span>
            <Spacer y="48px" />
            <div className="info-cards-container">
                <ContactCard media={CONTACT.linkedin} />
                <ContactCard media={CONTACT.github} />
                <ContactCard media={CONTACT.instagram} />
            </div>
        </div>
    );
};
