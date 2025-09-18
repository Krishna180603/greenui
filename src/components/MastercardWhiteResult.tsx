import React from "react";
import "../styles/MastercardWhiteResultResult.css";
import WaitResultBox from "./LongWhiteButton";

interface MastercardProps {
  baseSvg: string;
  topSvg: string;
  leftSvg: string;
  rightSvg: string;
  question: string;
  pollYes: number;   
  pollNo: number;    
}

const MasterCardWhite: React.FC<MastercardProps> = ({
  baseSvg,
  topSvg,
  leftSvg,
  rightSvg,
  question,
  pollYes,
  pollNo,
}) => {
  return (
    <div className="mastercard-white-container">
      <img src={baseSvg} className="mastercard-white-base" alt="base" />
      <img src={topSvg} className="mastercard-white-icon-top" alt="top" />
      <img src={leftSvg} className="mastercard-white-icon-left" alt="left" />
      <img src={rightSvg} className="mastercard-white-icon-right" alt="right" />

      <div className="mastercard-white-content">
        <div className="mastercard-white-question">{question}</div>

        <div className="mastercard-white-poll">
          <span>{pollYes}% SAID YES</span>
          <span>{pollNo}% SAID NO</span>
        </div>

        <WaitResultBox value={34} text="YES" status="WON" />
      </div>
    </div>
  );
};

export default MasterCardWhite;
