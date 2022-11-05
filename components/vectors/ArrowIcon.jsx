import * as React from "react";

function ArrowIcon(props) {
  return (
    <svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.292 17.869H4.467M19.358 26.803l10.129-8.324a.82.82 0 00.217-.275.767.767 0 000-.669.82.82 0 00-.217-.274l-10.13-8.327"
        stroke="#161616"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
