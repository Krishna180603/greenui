import React, { useState } from "react";
import "../styles/PowerButton.css";

interface RoundButtonProps {
  baseAlt?: string;
  overlayImg: string;
  overlayAlt?: string;
  initialVariant?: "on" | "off" | "dull";
  onClick?: (newState: "on" | "off") => void;
}

const PowerButton: React.FC<RoundButtonProps> = ({
  baseAlt = "",
  overlayImg,
  overlayAlt = "",
  initialVariant = "off",
  onClick,
}) => {
  const [variant, setVariant] = useState(initialVariant);

  const handleClick = () => {
    if (variant === "dull") return; // dull buttons don’t toggle
    const newVariant = variant === "on" ? "off" : "on";
    setVariant(newVariant);
    onClick?.(newVariant);
  };

  // Dynamically choose the image based on variant
  const getBaseImg = () => {
    switch (variant) {
      case "on":
        return "/button_on.png"; // green
      case "off":
        return "/roundbutton.png"; // gray
      case "dull":
        return "/roundbutton-dull.png"; // dimmed
      default:
        return "/roundbutton.png";
    }
  };

  return (
    <button className={`round-btn-wrapper ${variant}`} onClick={handleClick}>
      <img src={getBaseImg()} alt={baseAlt} className="round-btn-img" />
      <img src={overlayImg} alt={overlayAlt} className="icon-overlay" />
    </button>
  );
};

export default PowerButton;
