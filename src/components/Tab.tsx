import React from "react";

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  style?:string;
}

const Tab: React.FC<TabProps> = ({ children, className = "", src = "/whitetab.svg" }) => {
  return (
    <div
      className={`tab-container ${className}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <img
        src={src}
        alt="Tab"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      {children && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Tab;
