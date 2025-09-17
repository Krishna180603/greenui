import React, { useState } from "react";
import "../styles/SmallButton.css";

interface SmallButtonProps {
  label: string;
  initialOn?: boolean;
}

const SmallButton: React.FC<SmallButtonProps> = ({ label, initialOn = false }) => {
  const [isOn, setIsOn] = useState(initialOn);
  const [isPressing, setIsPressing] = useState(false);

  const handleMouseDown = () => {
    setIsPressing(true);
  };

  const handleMouseUp = () => {
    setIsPressing(false);
    setIsOn(!isOn); // toggle state
  };

  const getDotStyle = () => {
    if (isPressing) {
    //   const futureState = !isOn; // state after release
      // if currently ON → will go OFF → show red
      // if currently OFF → will go ON → show white
      return {
        backgroundColor: isOn ? "red" : "white",
        boxShadow: isOn ? "0 0 4px red" : "0 0 4px white",
      };
    }

    // not pressing
    return {
      backgroundColor: isOn ? "#00ff22ff" : "#333436",
      boxShadow: isOn ? "0 0 6px green" : "none",
    };
  };

  return (
    <div className="small-btn-wrapper">
      <button
        className="small-btn"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsPressing(false)} // cancel pressing if leaving
      >
        <span className="status-dot" style={getDotStyle()}></span>
      </button>
      <span className="btn-label">{label}</span>
    </div>
  );
};

export default SmallButton;
