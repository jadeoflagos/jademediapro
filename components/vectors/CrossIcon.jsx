import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width="2.0rem"
    height="2.0rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.972 2.13a1.778 1.778 0 0 1 2.514 0L24.6 22.245a1.778 1.778 0 0 1-2.514 2.514L1.972 4.645a1.778 1.778 0 0 1 0-2.514Z"
      fill="#fff"
    />
    <path
      d="M1.972 24.758a1.778 1.778 0 0 1 0-2.514L22.085 2.13A1.778 1.778 0 1 1 24.6 4.645L4.486 24.758a1.778 1.778 0 0 1-2.514 0Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
