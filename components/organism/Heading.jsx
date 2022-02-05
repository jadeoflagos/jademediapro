import React from "react";

const Heading = ({ text }) => {
  return (
    <p className="text-3xl lg:max-w-[72rem] lg:text-[4.27rem] font-semibold lg:leading-[5.3rem] ">
      {text}
    </p>
  );
};

export default Heading;
