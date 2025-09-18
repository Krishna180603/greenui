// YesResultBox.tsx
import React from "react";
import "../styles/LongRedButton.css";

interface YesResultBoxProps {
  value: number;
  text?: string;
  status?: string;
}

const NoResultBox: React.FC<YesResultBoxProps> = ({ value, text = "YES", status = "Lost" }) => {
  return (
    <div className="no-box-wrapper">
      <img src="/mastercardred/mastercardredresult.svg" alt="border" className="no-box-border" />
      
      {/* Overlay Text */}
      <div className="no-box-text">
        {value} - {text} ({status})
      </div>
    </div>
  );
};

export default NoResultBox;
