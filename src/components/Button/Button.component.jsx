import "./Button.styles.scss";

export const Button = ({ children, variant = "primary", ...otherProps }) => {
    const classes = otherProps.className ?? "";

    if (variant === "primary") {
        return (
            <button className={`Button ${classes}`}>
                <div className="halo halo1" />
                <div className="halo halo2" />
                <div className="diamond diamond1" />
                <div className="diamond diamond2" />
                {children}
            </button>
        );
    }
};
