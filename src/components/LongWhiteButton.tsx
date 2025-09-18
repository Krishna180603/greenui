// YesResultBox.tsx
import React from "react";
import "../styles/LongWhiteButton.css";

interface WaitResultBoxProps {
  value: number;
  text?: string;
  status?: string;
}

const WaitResultBox: React.FC<WaitResultBoxProps> = ({ value, text = "YES", status = "Lost" }) => {
  return (
    <div className="wait-box-wrapper">
      <img src="/mastercardwhite/mastercardwhiteresultresult.svg" alt="border" className="wait-box-border" />
      
      {/* Overlay Text */}
      <div className="wait-box-text">
        {value} - {text} ({status})
      </div>
    </div>
  );
};

export default WaitResultBox;
