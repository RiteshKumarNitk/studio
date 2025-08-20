import type { SVGProps } from "react";

const TireIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.34 2.16 4.93 4.93" />
    <path d="M17.66 21.84 19.07 19.07" />
    <path d="M2.16 6.34 4.93 4.93" />
    <path d="M21.84 17.66 19.07 19.07" />
    <path d="M2.16 17.66 4.93 19.07" />
    <path d="M21.84 6.34 19.07 4.93" />
    <path d="M6.34 21.84 4.93 19.07" />
    <path d="M17.66 2.16 19.07 4.93" />
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export default TireIcon;
