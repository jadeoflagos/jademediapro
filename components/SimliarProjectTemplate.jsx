import React from "react";

const SimilarProjectTemplate = ({ text = "", bg }) => {
  return (
    <div
      className="text-white h-[28rem]"
      style={{
        width: "50%",
        background: "rgba(128,128,128,0.2)",
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-4/5"></div>
      <span className="bg-[#161616] bg-opacity-70 h-1/5 flex items-center justify-center lg:text-2xl">
        {text}
      </span>
    </div>
  );
};

export default SimilarProjectTemplate;
