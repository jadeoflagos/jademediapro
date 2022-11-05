import React from "react";

const LearnMoreArrow = ({ text }) => {
  return (
    <div className="arrow">
      <span className="mr-2">{text || "Learn more"}</span>
      <svg className="arr">
        <defs>
          <marker
            id="m"
            markerWidth="4"
            markerHeight="8"
            refX="0"
            refY="1"
            viewBox="0 0 1 2"
          >
            <polygon points="0,0 1,1 0,2" fill="black" />
          </marker>
        </defs>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          strokeWidth="2"
          markerEnd="url(#m)"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default LearnMoreArrow;
