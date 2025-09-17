import React, { useState } from "react";
import "../styles/SmallCard.css";

interface SmallCardProps {
    label: string;          
    centerSvg: string;
    topSvg: string;
    leftSvg: string;
    rightSvg: string;
    baseSvg: string;
    hoverBaseSvg: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
    label,
    centerSvg,
    topSvg,
    leftSvg,
    rightSvg,
    baseSvg,
    hoverBaseSvg,
}) => {
    const [isCardHovered, setIsCardHovered] = useState(false);

    return (
        <div
            className="small-card"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <img
                src={isCardHovered ? hoverBaseSvg : baseSvg}
                alt="base"
                className="base-icon"
            />

            <img src={topSvg} alt="top" className="hover-part hover-top" />
            <img src={leftSvg} alt="left" className="hover-part hover-left" />
            <img src={rightSvg} alt="right" className="hover-part hover-right" />

            <div className="center-wrapper">
                <img src={centerSvg} alt={label} className="center-icon" />
                <span className="card-label">{label}</span>
            </div>
        </div>
    );
};

export default SmallCard;
