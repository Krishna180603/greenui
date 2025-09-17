import React from "react";
import "../styles/ComputerButtons_volume.css";
import RoundButton from "./PowerButton"; // adjust path as needed
import SmallButton from "./SmallButton"; // new small button component

const WoprXPanelvol: React.FC = () => {
  return (
    <div className="wopr-panel">
      {/* Left side */}
      <div className="side-group">
        {/* Volume button */}
        <RoundButton
          overlayImg="/download.svg"
          overlayAlt="mute"
          initialVariant="off"
          onClick={(state) => console.log("Volume button:", state)}
        />

        {/* Volume control small buttons */}
        <div className="volume-control">
          <button className="small-btn">-</button>
          <span className="volume-label">VOLUME</span>
          <button className="small-btn">+</button>
        </div>
      </div>

      {/* Center title */}
      <div className="title">WOPR-X</div>

      {/* Right side */}
      <div className="side-group">
        {/* Small buttons */}
        <div className="small-btn-group">
          <SmallButton label="CONTRAST" initialOn={false} />
          <SmallButton label="CRT MODE" initialOn={false} />
        </div>

        {/* Power button */}
        <RoundButton
          overlayImg="/poweroff.svg"
          overlayAlt="power"
          initialVariant="off"
          onClick={(state) => console.log("Power button:", state)}
        />
      </div>
    </div>
  );
};

export default WoprXPanelvol;
