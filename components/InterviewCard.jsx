import React from "react";

const InterviewCard = () => {
  return (
    <div
      className="text-white h-[13.84rem] interview-card cursor-pointer"
      style={{
        background: `url("/images/interview1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="h-4/5"></div>
      <span className="interview-detail   h-1/5 flex items-center justify-center lg:text-[1.25rem]">
        with Tola Alabi of TA Consulting
      </span>
    </div>
  );
};

export default InterviewCard;
