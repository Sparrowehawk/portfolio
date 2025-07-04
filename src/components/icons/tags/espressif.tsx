import type { SVGProps } from 'react';

export const EspressifIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    // The original viewBox is kept for perfect scaling.
    viewBox="0 0 512 512"
    // Removed aria-label and role for component flexibility.
    // No width or height is set, allowing it to be sized by CSS.
  >
    {/*
      NOTE: The original hard-coded fill colors are preserved
      for both the background rectangle and the foreground path.
    */}
    <rect width="512" height="512" rx="15%" fill="#ff3034" />
    <path
      fill="#ffffff"
      d="M126 120.53a188.46 188.46 0 00266.53 266.52a7.69 7.69 0 1110.87 10.87a203.83 203.83 0 01-288.26-288.26A7.69 7.69 0 01126 120.53zm52.5 240.22a26 26 0 100 1M409 334a273 273 0 00-231.5-231.5A150 150 0 00139 130v26a216 216 0 01217 216h26a111 111 0 0027-39M240 83l-4 12a298 298 0 01181 180l11-4A172 172 0 00240 83zm5 342a118 118 0 00-95-171a10.61 10.61 0 013-21a140 140 0 01120 177l31 9l26.5-10a195 195 0 00-163-230a66.6 66.6 0 10-18 131.5a63 63 0 0142 95.5l21 14z"
    />
  </svg>
);