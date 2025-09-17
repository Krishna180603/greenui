import React from "react";
import "../styles/MastercardGreen.css";
import YesResultBox from "./LongGreenButton";

interface MastercardProps {
  baseSvg: string;
  topSvg: string;
  leftSvg: string;
  rightSvg: string;
  question: string;
  pollYes: number;   // % for Yes
  pollNo: number;    // % for No
}

const MasterCardGreen: React.FC<MastercardProps> = ({
  baseSvg,
  topSvg,
  leftSvg,
  rightSvg,
  question,
  pollYes,
  pollNo,
}) => {
  return (
    <div className="mastercard-green-container">
      {/* Static Base SVG */}
      <img src={baseSvg} className="mastercard-green-base" alt="base" />
      <img src={topSvg} className="mastercard-green-icon-top" alt="top" />
      <img src={leftSvg} className="mastercard-green-icon-left" alt="left" />
      <img src={rightSvg} className="mastercard-green-icon-right" alt="right" />

      {/* Card content */}
      <div className="mastercard-green-content">
        <div className="mastercard-green-question">{question}</div>

        {/* Poll percentages */}
        <div className="mastercard-green-poll">
          <span>{pollYes}% SAID YES</span>
          <span>{pollNo}% SAID NO</span>
        </div>

        {/* Result Box */}
        <YesResultBox value={34} text="YES" status="WON" />
      </div>
    </div>
  );
};

export default MasterCardGreen;
