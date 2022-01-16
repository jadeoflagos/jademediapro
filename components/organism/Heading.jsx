import React from "react";

const Heading = ({ text }) => {
  return (
    <p
      className="text-3xl lg:text-[6.5rem] font-semibold lg:leading-13 "
    >
      {text}
    </p>
  );
};

export default Heading;
