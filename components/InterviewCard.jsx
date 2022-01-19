import React from "react";

const InterviewCard = () => {
  return (
    <div
      className="text-white h-64 interview-card cursor-pointer"
      style={{
        background: `url("/images/interview1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-4/5"></div>
      <span className="interview-detail   h-1/5 flex items-center justify-center lg:text-[1.75rem]">
        with Tola Alabi of TA Consulting
      </span>
    </div>
  );
};

export default InterviewCard;
