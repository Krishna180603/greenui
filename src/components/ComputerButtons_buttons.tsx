import React from "react";
import RoundButton from "./PowerButton"; // make sure the path is correct

const WoprXPanelbtn: React.FC = () => {
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

        {/* Small buttons */}
        <div className="small-btn-group">
          <div className="small-btn-wrapper">
            <button className="small-btn">
              <span className="status-dot"></span>
            </button>
            <span className="btn-label">GLOW</span>
          </div>

          <div className="small-btn-wrapper">
            <button className="small-btn">
              <span className="status-dot"></span>
            </button>
            <span className="btn-label">MOTION</span>
          </div>
        </div>
      </div>

      {/* Center title */}
      <div className="title">WOPR-X</div>

      {/* Right side */}
      <div className="side-group">
        {/* Small buttons */}
        <div className="small-btn-group">
          <div className="small-btn-wrapper">
            <button className="small-btn">
              <span className="status-dot"></span>
            </button>
            <span className="btn-label">CONTRAST</span>
          </div>

          <div className="small-btn-wrapper">
            <button className="small-btn">
              <span className="status-dot"></span>
            </button>
            <span className="btn-label">CRT MODE</span>
          </div>
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

export default WoprXPanelbtn;
