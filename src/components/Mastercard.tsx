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
  pollYes: number;  
  pollNo: number;    
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
      <img
        src={isHovered ? baseSvg:hoverBaseSvg}
        className="mastercard-base"
        alt="base"
      />
      <img src={topSvg} className="mastercard-icon-top" alt="top" />
      <img src={leftSvg} className="mastercard-icon-left" alt="left" />
      <img src={rightSvg} className="mastercard-icon-right" alt="right" />

      <div className="mastercard-content">
        <div className="mastercard-question">{question}</div>

        <div className="mastercard-poll">
          <span>{pollYes}% SAID YES</span>
          <span>{pollNo}% SAID NO</span>
        </div>

        <div className="mastercard-buttons">
          <YesButton
            label="YES"
            baseSvg="/yesbutton/yesbuttonoff.svg"
            hoverBaseSvg="/yesbutton/yesbuttonon.svg"
            topRightSvg="/yesbutton/yestopright.svg"
            bottomLeftSvg="/yesbutton/yesbottomleft.svg"
          />
          <YesButton
            label="NO"
            baseSvg="/yesbutton/yesbuttonoff.svg"
            hoverBaseSvg="/yesbutton/yesbuttonon.svg"
            topRightSvg="/yesbutton/yestopright.svg"
            bottomLeftSvg="/yesbutton/yesbottomleft.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
