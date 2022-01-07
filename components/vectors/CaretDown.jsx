import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 1 2.5 2.5L6 6M11 1 8.5 3.5 6 6"
      stroke="#fff"
      strokeLinecap="square"
    />
  </svg>
);

export default SvgComponent;
