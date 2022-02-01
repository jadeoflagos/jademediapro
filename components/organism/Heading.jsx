import React from "react";

const Heading = ({ text }) => {
  return (
    <p className="text-3xl lg:text-[6rem] font-semibold lg:leading-[7.3rem] ">
      {text}
    </p>
  );
};

export default Heading;
