import "./Button.styles.scss";

export const Button = ({ children, ...otherProps }) => {
    const classes = otherProps.className ?? "";

    return (
        <button className={`Button ${classes}`}>
            <div className="halo halo1" />
            <div className="halo halo2" />
            <div className="diamond diamond1" />
            <div className="diamond diamond2" />
            {children}
        </button>
    );
};
