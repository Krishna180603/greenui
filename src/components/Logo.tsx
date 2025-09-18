import React from "react";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string; // for Tailwind or custom CSS
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = "auto", className }) => {
  return (
    <img
      src="/logo/logo.svg"
      alt="App Logo"
      width={width}
      height={height}
      className={className}
      style={{ display: "block" }}
    />
  );
};

export default Logo;
