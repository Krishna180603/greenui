import React, { useState } from "react";
import "../styles/Mastercard.css";
import YesButton from "./YesButton";

interface MasterCardProps {
  baseSvg: string;
  hoverBaseSvg: string;
  topSvg: string;
  leftSvg: string;
  rightSvg: string;
  question: string;
  pollYes: number;   // % for Yes
  pollNo: number;    // % for No
}

const MasterCard: React.FC<MasterCardProps> = ({
  baseSvg,
  hoverBaseSvg,
  topSvg,
  leftSvg,
  rightSvg,
  question,
  pollYes,
  pollNo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mastercard-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Icons */}
      <img
        src={isHovered ? hoverBaseSvg : baseSvg}
        className="mastercard-base"
        alt="base"
      />
      <img src={topSvg} className="mastercard-icon-top" alt="top" />
      <img src={leftSvg} className="mastercard-icon-left" alt="left" />
      <img src={rightSvg} className="mastercard-icon-right" alt="right" />

      {/* Card content */}
      <div className="mastercard-content">
        <div className="mastercard-question">{question}</div>

        {/* Poll percentages */}
        <div className="mastercard-poll">
          <span>{pollYes}% SAID YES</span>
          <span>{pollNo}% SAID NO</span>
        </div>

        {/* Buttons */}
        <div className="mastercard-buttons">
          <YesButton
            label="YES"
            baseSvg="/yesbuttonoff.svg"
            hoverBaseSvg="/yesbuttonon.svg"
            topRightSvg="/yestopright.svg"
            bottomLeftSvg="/yesbottomleft.svg"
          />
          <YesButton
            label="NO"
            baseSvg="/yesbuttonoff.svg"
            hoverBaseSvg="/yesbuttonon.svg"
            topRightSvg="/yestopright.svg"
            bottomLeftSvg="/yesbottomleft.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
