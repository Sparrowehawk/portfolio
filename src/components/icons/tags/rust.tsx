import type { SVGProps } from 'react';

export const RustLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    // The viewBox is set to the original dimensions of the SVG for correct scaling.
    viewBox="0 0 106 106"
    xmlns="http://www.w3.org/2000/svg"
    // Hard-coded width and height have been removed to allow for dynamic sizing via CSS.
  >
    <defs>
      {/* The mask is defined here. It creates transparent holes in the gear shape.
        The <use> tags from the original SVG have been expanded into individual <circle> 
        elements for better compatibility with React.
      */}
      <mask id="holes">
        <rect x="-60" y="-60" width="120" height="120" fill="#CE422B" />
        <circle id="hole" cy="-40" r="3" fill="black" />
        <circle cy="-40" r="3" fill="black" transform="rotate(72)" />
        <circle cy="-40" r="3" fill="black" transform="rotate(144)" />
        <circle cy="-40" r="3" fill="black" transform="rotate(216)" />
        <circle cy="-40" r="3" fill="black" transform="rotate(288)" />
      </mask>
    </defs>
    <g transform="translate(53, 53)">
      <path
        id="r"
        transform="translate(0.5, 0.5)"
        stroke="black"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="#CE422B"
        d="M -9,-15 H 4 C 12,-15 12,-7 4,-7 H -9 Z M -40,22 H 0 V 11 H -9 V 3 H 1 C 12,3 6,22 15,22 H 40 V 3 H 34 V 5 C 34,13 25,12 24,7 C 23,2 19,-2 18,-2 C 33,-10 24,-26 12,-26 H -35 V -15 H -25 V 11 H -40 Z"
      />
      <g id="gear" mask="url(#holes)">
        <circle r="43" fill="none" stroke="black" strokeWidth="9" />
        {/*
          The <use> tags for the gear cogs have been manually expanded into individual <polygon>
          elements with their respective transforms. This ensures broader compatibility.
        */}
        <g id="cogs">
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(11.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(22.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(33.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(45)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(56.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(67.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(78.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(90)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(101.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(112.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(123.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(135)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(146.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(157.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(168.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(180)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(191.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(202.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(213.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(225)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(236.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(247.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(258.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(270)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(281.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(292.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(303.75)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(315)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(326.25)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(337.5)" />
          <polygon stroke="#CE422B" strokeWidth="3" strokeLinejoin="round" points="46,3 51,0 46,-3" transform="rotate(348.75)" />
        </g>
        {/* The mounting points on the gear, also expanded from <use> tags. */}
        <g id="mounts">
          <polygon stroke="#CE422B" strokeWidth="6" strokeLinejoin="round" points="-7,-42 0,-35 7,-42" />
          <polygon stroke="#CE422B" strokeWidth="6" strokeLinejoin="round" points="-7,-42 0,-35 7,-42" transform="rotate(72)" />
          <polygon stroke="#CE422B" strokeWidth="6" strokeLinejoin="round" points="-7,-42 0,-35 7,-42" transform="rotate(144)" />
          <polygon stroke="#CE422B" strokeWidth="6" strokeLinejoin="round" points="-7,-42 0,-35 7,-42" transform="rotate(216)" />
          <polygon stroke="#CE422B" strokeWidth="6" strokeLinejoin="round" points="-7,-42 0,-35 7,-42" transform="rotate(288)" />
        </g>
      </g>
    </g>
  </svg>
);