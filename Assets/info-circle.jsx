import * as React from "react";
const SvgComponent = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    color={color}
    className="mr-4"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={color === "#fff" ? 1 : 0.67}
      strokeWidth={1.5}
      d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);

export default SvgComponent;
