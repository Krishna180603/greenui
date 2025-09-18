import React from "react";
import "../styles/Loading.css";

interface LoadingProps {
  percent: number; 
  blocks?: number; 
  showBar?: boolean; 
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  percent,
  blocks = 35,
  className = "",
}) => {
  const clamped = Math.max(0, Math.min(100, Math.round(percent)));
  const filledCount = Math.round((clamped / 100) * blocks);
  const blockArray = Array.from({ length: blocks });

  return (
    <div
      className={`loading-root ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={`Loading ${clamped} percent`}
    >
      <div className="loading-blocks" aria-hidden="false">
        {blockArray.map((_, i) => (
          <span
            key={i}
            className={`block ${i < filledCount ? "filled" : "empty"}`}
          >
            {i < filledCount ? "█" : "░"}
          </span>
        ))}
        <span className="percent-text">{` ${clamped}%`}</span>
      </div>
    </div>
  );
};

export default Loading;
