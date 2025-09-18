import React from "react";
import "../styles/ComputerButtons_empty.css";
import RoundButton from "./PowerButton"; // adjust the path as needed

const WoprXPanelemp: React.FC = () => {
  return (
    <div className="wopr-panel">
      {/* Left side */}
      <div className="side-group">
        {/* Volume button */}
        <RoundButton
          overlayImg="/powerandmute/download.svg"
          overlayAlt="mute"
          initialVariant="off"
          onClick={(state) => console.log("Volume button:", state)}
        />
      </div>

      {/* Center title */}
      <div className="title">WOPR-X</div>

      {/* Right side */}
       <RoundButton
          overlayImg="/powerandmute/poweroff.svg"
          overlayAlt="power"
          initialVariant="off"
          onClick={(state) => console.log("Power button:", state)}
        />
    </div>
  );
};

export default WoprXPanelemp;
