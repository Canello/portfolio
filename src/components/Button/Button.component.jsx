import "./Button.styles.scss";

export const Button = ({ children, variant = "primary", ...otherProps }) => {
    const additionalClasses = otherProps.className ?? "";
    otherProps.className = `Button ${additionalClasses}`;

    if (variant === "primary") {
        return (
            <button {...otherProps}>
                <div className="halo halo1" />
                <div className="halo halo2" />
                <div className="diamond diamond1" />
                <div className="diamond diamond2" />
                {children}
            </button>
        );
    }
};
