import React, { useState } from "react";
import NavButton from "./NavButton";

const NavButtonGroup: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const buttons = ["Home", "Settings", "Profile", "About", "Help", "Logout"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "12px",
        maxWidth: "480px",
      }}
    >
      {buttons.map((label, index) => (
        <NavButton
          key={index}
          label={label}
          active={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default NavButtonGroup;
