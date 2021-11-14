import React from "react";

const InterviewCard = () => {
  return (
    <div
      className="text-white h-64"
      style={{
        background: `url("/images/interview1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-4/5"></div>
      <span className="bg-[#161616] bg-opacity-70 h-1/5 flex items-center justify-center text-2xl">
        with Tola Alabi of TA Consulting
      </span>
    </div>
  );
};

export default InterviewCard;
