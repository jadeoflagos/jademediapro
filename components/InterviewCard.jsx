import React from "react";

const InterviewCard = () => {
  return (
    <div
      className="text-white h-[13.84rem] interview-card cursor-pointer"
      style={{
        backgroundImage: `url("/images/Interview-thumbnail.png")`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      <div className="h-4/5"></div>
      <span className="interview-detail   h-1/5 flex items-center justify-center lg:text-[1.25rem text-center">
        60 minutes with Tolani of JadeMediaPro
      </span>
    </div>
  );
};

export default InterviewCard;
