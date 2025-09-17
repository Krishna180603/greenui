import React from "react";
import "../styles/MastercardRed.css";
import NoResultBox from "./LongRedButton.tsx";

interface MastercardProps {
  baseSvg: string;
  topSvg: string;
  leftSvg: string;
  rightSvg: string;
  question: string;
  pollYes: number;   // % for Yes
  pollNo: number;    // % for No
}

const MasterCardRed: React.FC<MastercardProps> = ({
  baseSvg,
  topSvg,
  leftSvg,
  rightSvg,
  question,
  pollYes,
  pollNo,
}) => {
  return (
    <div className="mastercard-red-container">
      {/* Static Base SVG */}
      <img src={baseSvg} className="mastercard-red-base" alt="base" />
      <img src={topSvg} className="mastercard-red-icon-top" alt="top" />
      <img src={leftSvg} className="mastercard-red-icon-left" alt="left" />
      <img src={rightSvg} className="mastercard-red-icon-right" alt="right" />

      {/* Card content */}
      <div className="mastercard-red-content">
        <div className="mastercard-red-question">{question}</div>

        {/* Poll percentages */}
        <div className="mastercard-red-poll">
          <span>{pollYes}% SAID YES</span>
          <span>{pollNo}% SAID NO</span>
        </div>

        {/* Result Box */}
        <NoResultBox value={34} text="YES" status="Lost" />
      </div>
    </div>
  );
};

export default MasterCardRed;
