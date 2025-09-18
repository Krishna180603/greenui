import React from "react";
import "../styles/text.css";

interface TextProps {
  children: React.ReactNode;
  variant?: "heading" | "b1" | "b2" | "b3";
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, variant = "b3", className }) => {
  return (
    <p className={`text ${variant} ${className || ""}`}>
      {children}
    </p>
  );
};

export default Text;
