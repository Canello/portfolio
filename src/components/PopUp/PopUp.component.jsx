import "./PopUp.styles.scss";

export const PopUp = ({ id, z, children }) => {
    return (
        <div className="PopUp" key={id} style={{ zIndex: z }}>
            {children}
        </div>
    );
};
