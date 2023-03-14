import "./FloatingDiamonds.styles.scss";
import { randomNumberBetween } from "../functions/randomNumberBetween";

const generateRandomDiamonds = (quantity) => {
    const diamonds = [];

    for (let i = 0; i < quantity; i++) {
        const width = `${randomNumberBetween(10, 40)}px`;
        const left = `${randomNumberBetween(0, 95)}%`;
        const top = `${randomNumberBetween(0, 95)}%`;
        const shineDuration = randomNumberBetween(2, 6);
        const floatDuration = randomNumberBetween(3, 10);
        const animation = `${shineDuration}s linear infinite home-page-diamond-shine, ${floatDuration}s ease-in-out infinite home-page-diamond-float`;

        const diamond = (
            <div
                key={i}
                className="floating-diamond"
                style={{ width, left, top, animation }}
            />
        );

        diamonds.push(diamond);
    }

    return diamonds;
};

export const FloatingDiamonds = () => {
    const randomDiamonds = generateRandomDiamonds(70);

    return <div className="FloatingDiamonds">{randomDiamonds}</div>;
};
