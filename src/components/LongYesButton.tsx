// YesResultBox.tsx
import React from "react";
import "../styles/LongYesButton.css";

interface YesResultBoxProps {
  value: number;
  text?: string;
  status?: string;
}

const YesResultBox: React.FC<YesResultBoxProps> = ({ value, text = "YES", status = "WON" }) => {
  return (
    <div className="yes-box-wrapper">
      <img src="/mastercardgreenresult.svg" alt="border" className="yes-box-border" />
      
      {/* Overlay Text */}
      <div className="yes-box-text">
        {value} - {text} ({status})
      </div>
    </div>
  );
};

export default YesResultBox;
