import React from "react";
import RoundButton from "./PowerButton"; // your existing round button
import SmallButton from "./SmallButton"; // the new small button component

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
          <SmallButton label="GLOW" initialOn={false} />
          <SmallButton label="MOTION" initialOn={false} />
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

export default WoprXPanelbtn;
