import React, { useState } from "react";
import "../styles/YesButton.css";

interface YesButtonProps {
  label: string;
  baseSvg: string;         // default base image
  hoverBaseSvg: string;    // base image on hover
  topRightSvg: string;     // component at top-right
  bottomLeftSvg: string;   // component at bottom-left
}

const YesButton: React.FC<YesButtonProps> = ({
  label,
  baseSvg,
  hoverBaseSvg,
  topRightSvg,
  bottomLeftSvg,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="yes-btn-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? hoverBaseSvg : baseSvg}
        alt="base"
        className="main-icon"
      />

      <img
        src={topRightSvg}
        alt="top-right"
        className="hover-element hover-tr"
      />
      <img
        src={bottomLeftSvg}
        alt="bottom-left"
        className="hover-element hover-bl"
      />

      <span className="btn-text">{label}</span>
    </div>
  );
};

export default YesButton;
