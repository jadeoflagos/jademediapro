import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width="2rem"
    height="1.56rem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.286 1.778A1.778 1.778 0 0 1 2.063 0h28.445a1.778 1.778 0 1 1 0 3.556H2.063A1.778 1.778 0 0 1 .286 1.778Zm0 10.666a1.778 1.778 0 0 1 1.777-1.777h28.445a1.778 1.778 0 1 1 0 3.555H2.063a1.778 1.778 0 0 1-1.777-1.778Zm0 10.667a1.778 1.778 0 0 1 1.777-1.778h28.445a1.778 1.778 0 1 1 0 3.556H2.063A1.778 1.778 0 0 1 .286 23.11Z"
      fill={props.fillcolor ? props.fillcolor : "#fff"}
    />
  </svg>
);

export default SvgComponent;
