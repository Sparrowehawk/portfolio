import type { SVGProps } from 'react';

export const LinuxLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    version="1.1"
    viewBox="0 0 216 256"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>Tux</title>
    {/*
      This <defs> block contains all the reusable definitions for gradients,
      filters, and clipping paths that give the icon its detailed appearance.
      All SVG attributes have been converted to their JSX equivalents (e.g., stop-color to stopColor).
    */}
    <defs id="tux_fx">
      <linearGradient id="gradient_belly_shadow">
        <stop offset="0" stopColor="#000000" />
        <stop offset="1" stopColor="#000000" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="gradient_wing_tip_right_shadow">
        <stop offset="0" stopColor="#110800" />
        <stop offset="0.59" stopColor="#a65a00" stopOpacity="0.8" />
        <stop offset="1" stopColor="#ff921e" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_wing_tip_right_glare_1">
        <stop offset="0" stopColor="#7c7c7c" />
        <stop offset="1" stopColor="#7c7c7c" stopOpacity="0.33" />
      </linearGradient>
      <linearGradient id="gradient_wing_tip_right_glare_2">
        <stop offset="0" stopColor="#7c7c7c" />
        <stop offset="1" stopColor="#7c7c7c" stopOpacity="0.33" />
      </linearGradient>
      <linearGradient id="gradient_foot_left_layer_1">
        <stop offset="0" stopColor="#b98309" />
        <stop offset="1" stopColor="#382605" />
      </linearGradient>
      <linearGradient id="gradient_foot_left_glare">
        <stop offset="0" stopColor="#ebc40c" />
        <stop offset="1" stopColor="#ebc40c" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_foot_right_shadow">
        <stop offset="0" stopColor="#000000" />
        <stop offset="1" stopColor="#000000" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_foot_right_layer_1">
        <stop offset="0" stopColor="#3e2a06" />
        <stop offset="1" stopColor="#ad780a" />
      </linearGradient>
      <linearGradient id="gradient_foot_right_glare">
        <stop offset="0" stopColor="#f3cd0c" />
        <stop offset="1" stopColor="#f3cd0c" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_eyeball">
        <stop offset="0" stopColor="#fefefc" />
        <stop offset="0.75" stopColor="#fefefc" />
        <stop offset="1" stopColor="#d4d4d4" />
      </linearGradient>
      <linearGradient id="gradient_pupil_left_glare">
        <stop offset="0" stopColor="#757574" stopOpacity="0" />
        <stop offset="0.25" stopColor="#757574" />
        <stop offset="0.5" stopColor="#757574" />
        <stop offset="1" stopColor="#757574" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_pupil_right_glare_2">
        <stop offset="0" stopColor="#949494" stopOpacity="0.39" />
        <stop offset="0.5" stopColor="#949494" />
        <stop offset="1" stopColor="#949494" stopOpacity="0.39" />
      </linearGradient>
      <linearGradient id="gradient_eyelid_left">
        <stop offset="0" stopColor="#c8c8c8" />
        <stop offset="1" stopColor="#797978" />
      </linearGradient>
      <linearGradient id="gradient_eyelid_right">
        <stop offset="0" stopColor="#747474" />
        <stop offset="0.13" stopColor="#8c8c8c" />
        <stop offset="0.25" stopColor="#a4a4a4" />
        <stop offset="0.5" stopColor="#d4d4d4" />
        <stop offset="0.62" stopColor="#d4d4d4" />
        <stop offset="1" stopColor="#7c7c7c" />
      </linearGradient>
      <linearGradient id="gradient_eyebrow">
        <stop offset="0" stopColor="#646464" stopOpacity="0" />
        <stop offset="0.31" stopColor="#646464" stopOpacity="0.58" />
        <stop offset="0.47" stopColor="#646464" />
        <stop offset="0.73" stopColor="#646464" stopOpacity="0.26" />
        <stop offset="1" stopColor="#646464" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient_beak_base">
        <stop offset="0" stopColor="#020204" />
        <stop offset="0.73" stopColor="#020204" />
        <stop offset="1" stopColor="#5c5c5c" />
      </linearGradient>
      <linearGradient id="gradient_mandible_lower">
        <stop offset="0" stopColor="#d2940a" />
        <stop offset="0.75" stopColor="#d89c08" />
        <stop offset="0.87" stopColor="#b67e07" />
        <stop offset="1" stopColor="#946106" />
      </linearGradient>
      <linearGradient id="gradient_mandible_upper">
        <stop offset="0" stopColor="#ad780a" />
        <stop offset="0.12" stopColor="#d89e08" />
        <stop offset="0.25" stopColor="#edb80b" />
        <stop offset="0.39" stopColor="#ebc80d" />
        <stop offset="0.53" stopColor="#f5d838" />
        <stop offset="0.77" stopColor="#f6d811" />
        <stop offset="1" stopColor="#f5cd31" />
      </linearGradient>
      <linearGradient id="gradient_nares">
        <stop offset="0" stopColor="#3a2903" />
        <stop offset="0.55" stopColor="#735208" />
        <stop offset="1" stopColor="#ac8c04" />
      </linearGradient>
      <linearGradient id="gradient_beak_corner">
        <stop offset="0" stopColor="#f5ce2d" />
        <stop offset="1" stopColor="#d79b08" />
      </linearGradient>
      <radialGradient
        id="fill_belly_shadow_left"
        href="#gradient_belly_shadow"
        xlinkHref="#gradient_belly_shadow"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(61.18,121.19) scale(19,18)"
      />
      <radialGradient
        id="fill_belly_shadow_right"
        href="#gradient_belly_shadow"
        xlinkHref="#gradient_belly_shadow"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(125.74,131.6) scale(23.6,18)"
      />
      <radialGradient
        id="fill_belly_shadow_middle"
        href="#gradient_belly_shadow"
        xlinkHref="#gradient_belly_shadow"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(94.21,127.47) scale(9.35,10)"
      />
      <linearGradient
        id="fill_foot_left_base"
        href="#gradient_foot_left_layer_1"
        xlinkHref="#gradient_foot_left_layer_1"
        gradientUnits="userSpaceOnUse"
        x1="23.18"
        y1="193.01"
        x2="64.31"
        y2="262.02"
      />
      <linearGradient
        id="fill_foot_left_glare"
        href="#gradient_foot_left_glare"
        xlinkHref="#gradient_foot_left_glare"
        gradientUnits="userSpaceOnUse"
        x1="64.47"
        y1="210.83"
        x2="77.41"
        y2="235.21"
      />
      <linearGradient
        id="fill_foot_right_shadow"
        href="#gradient_foot_right_shadow"
        xlinkHref="#gradient_foot_right_shadow"
        gradientUnits="userSpaceOnUse"
        x1="146.93"
        y1="211.96"
        x2="150.2"
        y2="235.73"
      />
      <linearGradient
        id="fill_foot_right_base"
        href="#gradient_foot_right_layer_1"
        xlinkHref="#gradient_foot_right_layer_1"
        gradientUnits="userSpaceOnUse"
        x1="151.5"
        y1="253.02"
        x2="192.94"
        y2="185.84"
      />
      <linearGradient
        id="fill_foot_right_glare"
        href="#gradient_foot_right_glare"
        xlinkHref="#gradient_foot_right_glare"
        gradientUnits="userSpaceOnUse"
        x1="162.81"
        y1="180.67"
        x2="161.59"
        y2="191.64"
      />
      <radialGradient
        id="fill_wing_tip_right_shadow_lower"
        href="#gradient_wing_tip_right_shadow"
        xlinkHref="#gradient_wing_tip_right_shadow"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(169.71,194.53) rotate(15) scale(19.66,20.64)"
      />
      <radialGradient
        id="fill_wing_tip_right_shadow_upper"
        href="#gradient_wing_tip_right_shadow"
        xlinkHref="#gradient_wing_tip_right_shadow"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(169.71,189.89) rotate(-2.42) scale(19.74,14.86)"
      />
      <radialGradient
        id="fill_wing_tip_right_glare_1"
        href="#gradient_wing_tip_right_glare_1"
        xlinkHref="#gradient_wing_tip_right_glare_1"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(184.65,176.62) rotate(23.5) scale(6.95,3.21)"
      />
      <linearGradient
        id="fill_wing_tip_right_glare_2"
        href="#gradient_wing_tip_right_glare_2"
        xlinkHref="#gradient_wing_tip_right_glare_2"
        gradientUnits="userSpaceOnUse"
        x1="165.69"
        y1="173.58"
        x2="168.27"
        y2="173.47"
      />
      <radialGradient
        id="fill_eyeball_left"
        href="#gradient_eyeball"
        xlinkHref="#gradient_eyeball"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(86.49,51.41) rotate(-0.6) scale(10.24,15.68)"
      />
      <linearGradient
        id="fill_pupil_left_glare"
        href="#gradient_pupil_left_glare"
        xlinkHref="#gradient_pupil_left_glare"
        gradientUnits="userSpaceOnUse"
        x1="84.29"
        y1="46.64"
        x2="89.32"
        y2="55.63"
      />
      <radialGradient
        id="fill_eyelid_left"
        href="#gradient_eyelid_left"
        xlinkHref="#gradient_eyelid_left"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(84.89,43.74) rotate(-9.35) scale(6.25,5.77)"
      />
      <linearGradient
        id="fill_eyebrow_left"
        href="#gradient_eyebrow"
        xlinkHref="#gradient_eyebrow"
        gradientUnits="userSpaceOnUse"
        x1="83.59"
        y1="32.51"
        x2="94.48"
        y2="43.63"
      />
      <radialGradient
        id="fill_eyeball_right"
        href="#gradient_eyeball"
        xlinkHref="#gradient_eyeball"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(118.06,51.41) rotate(-1.8) scale(13.64,15.68)"
      />
      <linearGradient
        id="fill_pupil_right_glare"
        href="#gradient_pupil_right_glare_2"
        xlinkHref="#gradient_pupil_right_glare_2"
        gradientUnits="userSpaceOnUse"
        x1="117.87"
        y1="47.25"
        x2="123.66"
        y2="54.11"
      />
      <linearGradient
        id="fill_eyelid_right"
        href="#gradient_eyelid_right"
        xlinkHref="#gradient_eyelid_right"
        gradientUnits="userSpaceOnUse"
        x1="112.9"
        y1="36.23"
        x2="131.32"
        y2="47.01"
      />
      <linearGradient
        id="fill_eyebrow_right"
        href="#gradient_eyebrow"
        xlinkHref="#gradient_eyebrow"
        gradientUnits="userSpaceOnUse"
        x1="119.16"
        y1="31.56"
        x2="131.42"
        y2="43.14"
      />
      <radialGradient
        id="fill_beak_base"
        href="#gradient_beak_base"
        xlinkHref="#gradient_beak_base"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(97.64,60.12) rotate(-36) scale(11.44,10.38)"
      />
      <radialGradient
        id="fill_mandible_lower_base"
        href="#gradient_mandible_lower"
        xlinkHref="#gradient_mandible_lower"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(109.77,70.61) rotate(-22.4) scale(27.15,19.07)"
      />
      <linearGradient
        id="fill_mandible_upper_base"
        href="#gradient_mandible_upper"
        xlinkHref="#gradient_mandible_upper"
        gradientUnits="userSpaceOnUse"
        x1="78.09"
        y1="69.26"
        x2="126.77"
        y2="68.88"
      />
      <radialGradient
        id="fill_naris_left"
        href="#gradient_nares"
        xlinkHref="#gradient_nares"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(92.11,59.88) scale(1.32,1.42)"
      />
      <radialGradient
        id="fill_naris_right"
        href="#gradient_nares"
        xlinkHref="#gradient_nares"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(104.65,59.7) scale(2.78,1.62)"
      />
      <linearGradient
        id="fill_beak_corner"
        href="#gradient_beak_corner"
        xlinkHref="#gradient_beak_corner"
        gradientUnits="userSpaceOnUse"
        x1="126.74"
        y1="67.49"
        x2="126.74"
        y2="71.09"
      />
      <filter id="blur_belly_shadow_left">
        <feGaussianBlur stdDeviation="0.64 0.55" />
      </filter>
      <filter id="blur_belly_shadow_right">
        <feGaussianBlur stdDeviation="0.98" />
      </filter>
      <filter id="blur_belly_shadow_middle">
        <feGaussianBlur stdDeviation="0.68" />
      </filter>
      <filter id="blur_belly_shadow_lower" x="-0.8" width="2.6" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="1.25" />
      </filter>
      <filter id="blur_belly_glare" x="-0.8" width="2.6" y="-0.5" height="2">
        <feGaussianBlur stdDeviation="1.78 2.19" />
      </filter>
      <filter id="blur_head_glare" x="-0.3" width="1.6" y="-0.3" height="1.6">
        <feGaussianBlur stdDeviation="1.73" />
      </filter>
      <filter id="blur_neck_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.78" />
      </filter>
      <filter id="blur_wing_left_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.98" />
      </filter>
      <filter id="blur_wing_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="1.19 1.17" />
      </filter>
      <filter id="blur_foot_left_layer_1" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="3.38" />
      </filter>
      <filter id="blur_foot_left_layer_2">
        <feGaussianBlur stdDeviation="2.1 2.06" />
      </filter>
      <filter id="blur_foot_left_glare">
        <feGaussianBlur stdDeviation="0.32" />
      </filter>
      <filter id="blur_foot_right_shadow">
        <feGaussianBlur stdDeviation="1.95 1.9" />
      </filter>
      <filter id="blur_foot_right_layer_1" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="4.12" />
      </filter>
      <filter id="blur_foot_right_layer_2" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="3.12 3.37" />
      </filter>
      <filter id="blur_foot_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.41" />
      </filter>
      <filter id="blur_wing_tip_right_shadow_lower" x="-0.3" width="1.6" y="-0.3" height="1.6">
        <feGaussianBlur stdDeviation="2.45" />
      </filter>
      <filter id="blur_wing_tip_right_shadow_upper" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="1.12 0.81" />
      </filter>
      <filter id="blur_wing_tip_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.88" />
      </filter>
      <filter id="blur_pupil_left_glare" x="-0.3" width="1.6" y="-0.3" height="1.6">
        <feGaussianBlur stdDeviation="0.44" />
      </filter>
      <filter id="blur_eyebrow_left">
        <feGaussianBlur stdDeviation="0.12" />
      </filter>
      <filter id="blur_pupil_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.45" />
      </filter>
      <filter id="blur_eyebrow_right">
        <feGaussianBlur stdDeviation="0.13" />
      </filter>
      <filter id="blur_beak_shadow_lower" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="1.75" />
      </filter>
      <filter id="blur_beak_shadow_upper">
        <feGaussianBlur stdDeviation="0.8 0.74" />
      </filter>
      <filter id="blur_mandible_lower_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.77" />
      </filter>
      <filter id="blur_mandible_upper_shadow">
        <feGaussianBlur stdDeviation="0.65" />
      </filter>
      <filter id="blur_mandible_upper_glare" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.73" />
      </filter>
      <filter id="blur_naris_left" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.1" />
      </filter>
      <filter id="blur_naris_right">
        <feGaussianBlur stdDeviation="0.1" />
      </filter>
      <filter id="blur_beak_corner" x="-0.2" width="1.4" y="-0.2" height="1.4">
        <feGaussianBlur stdDeviation="0.23" />
      </filter>
      <clipPath id="clip_body">
        <use href="#body_base" xlinkHref="#body_base" />
      </clipPath>
      <clipPath id="clip_wing_left">
        <use href="#wing_left_base" xlinkHref="#wing_left_base" />
      </clipPath>
      <clipPath id="clip_wing_right">
        <use href="#wing_right_base" xlinkHref="#wing_right_base" />
      </clipPath>
      <clipPath id="clip_foot_left">
        <use href="#foot_left_base" xlinkHref="#foot_left_base" />
      </clipPath>
      <clipPath id="clip_foot_right">
        <use href="#foot_right_base" xlinkHref="#foot_right_base" />
      </clipPath>
      <clipPath id="clip_wing_tip_right">
        <use href="#wing_tip_right_base" xlinkHref="#wing_tip_right_base" />
      </clipPath>
      <clipPath id="clip_eye_left">
        <use href="#eyeball_left" xlinkHref="#eyeball_left" />
      </clipPath>
      <clipPath id="clip_pupil_left">
        <use href="#pupil_left_base" xlinkHref="#pupil_left_base" />
      </clipPath>
      <clipPath id="clip_eye_right">
        <use href="#eyeball_right" xlinkHref="#eyeball_right" />
      </clipPath>
      <clipPath id="clip_pupil_right">
        <use href="#pupil_right_base" xlinkHref="#pupil_right_base" />
      </clipPath>
      <clipPath id="clip_mandible_lower">
        <use href="#mandible_lower_base" xlinkHref="#mandible_lower_base" />
      </clipPath>
      <clipPath id="clip_mandible_upper">
        <use href="#mandible_upper_base" xlinkHref="#mandible_upper_base" />
      </clipPath>
      <clipPath id="clip_beak">
        <use href="#mandible_lower_base" xlinkHref="#mandible_lower_base" />
        <use href="#mandible_upper_base" xlinkHref="#mandible_upper_base" />
      </clipPath>
    </defs>
    <g id="tux">
      <g id="body">
        <path
          id="body_base"
          fill="#020204"
          d="m 106.95,0 c -6,0 -12.02,1.18 -17.46,4.12 -5.78,3.11 -10.52,8.09 -13.43,13.97 -2.92,5.88 -4.06,12.16 -4.24,19.08 -0.33,13.14 0.3,26.92 1.29,39.41 0.26,3.8 0.74,6.02 0.25,9.93 -1.62,8.3 -8.88,13.88 -12.76,21.17 -4.27,8.04 -6.07,17.13 -9.29,25.65 -2.95,7.79 -7.09,15.1 -9.88,22.95 -3.91,10.97 -5.08,23.03 -2.5,34.39 1.97,8.66 6.08,16.78 11.62,23.73 -0.8,1.44 -1.58,2.91 -2.4,4.34 -2.57,4.43 -5.71,8.64 -7.17,13.55 -0.73,2.45 -1.02,5.07 -0.55,7.59 0.47,2.52 1.75,4.93 3.75,6.53 1.31,1.04 2.9,1.72 4.53,2.1 1.63,0.37 3.32,0.46 5,0.43 6.37,-0.14 12.55,-2.07 18.71,-3.69 3.66,-0.96 7.34,-1.81 11.03,-2.58 13.14,-2.69 27.8,-1.61 39.99,0.15 4.13,0.63 8.23,1.44 12.29,2.43 6.36,1.54 12.69,3.5 19.23,3.69 1.72,0.05 3.46,-0.03 5.14,-0.4 1.68,-0.38 3.31,-1.06 4.65,-2.13 2.01,-1.6 3.29,-4.02 3.76,-6.54 0.47,-2.52 0.18,-5.15 -0.56,-7.61 -1.48,-4.92 -4.65,-9.11 -7.27,-13.52 -1.04,-1.75 -2,-3.53 -3.03,-5.28 7.9,-8.87 14.26,-19.13 17.94,-30.4 4.01,-12.3 4.75,-25.55 3.06,-38.38 -1.69,-12.83 -5.76,-25.27 -11.11,-37.05 -6.72,-14.76 -12.37,-20.1 -16.47,-33.07 -4.42,-14.02 -0.77,-30.61 -4.06,-43.32 -1.17,-4.32 -3.04,-8.45 -5.45,-12.23 -2.82,-4.43 -6.4,-8.39 -10.65,-11.47 -6.78,-4.92 -15.3,-7.54 -23.96,-7.54 z"
        />
        <path
          id="belly"
          fill="#fdfdfb"
          d="m 83.13,74 c -0.9,1.13 -1.48,2.49 -1.84,3.89 -0.35,1.4 -0.48,2.85 -0.54,4.3 -0.11,2.89 0.07,5.83 -0.7,8.62 -0.82,2.98 -2.65,5.57 -4.44,8.08 -3.11,4.36 -6.25,8.84 -7.78,13.97 -0.93,3.1 -1.24,6.39 -0.91,9.62 -3.47,5.1 -6.48,10.53 -8.98,16.18 -3.78,8.57 -6.37,17.69 -7.28,27.01 -1.12,11.41 0.34,23.15 4.85,33.69 3.25,7.63 8.11,14.6 14.38,20.04 3.18,2.76 6.72,5.11 10.5,6.97 13.11,6.45 29.31,6.46 42.2,-0.41 6.74,-3.59 12.43,-8.84 17.91,-14.15 3.3,-3.2 6.59,-6.48 9.11,-10.32 4.85,-7.41 6.54,-16.41 7.59,-25.2 1.83,-15.36 1.89,-31.6 -4.85,-45.53 -2.32,-4.8 -5.41,-9.22 -9.12,-13.05 -0.98,-6.7 -2.93,-13.27 -5.76,-19.42 -2.05,-4.45 -4.54,-8.68 -6.44,-13.18 -0.78,-1.85 -1.46,-3.75 -2.32,-5.56 -0.87,-1.81 -1.93,-3.55 -3.39,-4.94 -1.48,-1.42 -3.33,-2.43 -5.28,-3.07 -1.95,-0.65 -4.01,-0.94 -6.06,-1.04 -4.11,-0.21 -8.22,0.33 -12.33,0.16 -3.27,-0.13 -6.53,-0.7 -9.8,-0.51 -1.63,0.1 -3.26,0.39 -4.78,1.01 -1.52,0.61 -2.92,1.56 -3.94,2.84 z"
        />
        <g id="body_self_shadows">
          <path
            id="belly_shadow_left"
            opacity="0.25"
            fill="url(#fill_belly_shadow_left)"
            filter="url(#blur_belly_shadow_left)"
            clipPath="url(#clip_body)"
            d="m 68.67,115.18 c 0.87,1.31 -0.55,5.84 19.86,2.94 0,0 -3.59,0.39 -7.12,1.21 -5.49,1.84 -10.27,3.89 -13.97,6.61 -3.65,2.7 -6.33,6.21 -9.68,9.22 0,0 5.43,-9.92 6.78,-12.91 1.36,-2.99 -0.22,-2.85 0.85,-7.25 1.07,-4.4 3.69,-8.63 3.69,-8.63 0,0 -2.14,6.22 -0.41,8.81 z"
          />
          <path
            id="belly_shadow_right"
            opacity="0.42"
            fill="url(#fill_belly_shadow_right)"
            filter="url(#blur_belly_shadow_right)"
            clipPath="url(#clip_body)"
            d="m 134.28,113.99 c -4.16,2.9 -6.6,2.56 -11.64,3.12 -5.05,0.57 -18.7,0.36 -18.7,0.36 0,0 1.97,-0.03 6.36,0.78 4.38,0.82 13.31,1.6 18.34,3.51 5.04,1.92 6.87,2.47 9.93,4.4 4.35,2.75 7.55,7.06 11.71,10.08 0,0 0.2,-4 -1.48,-6.99 -1.68,-2.99 -6.2,-7.7 -7.53,-12.1 -1.32,-4.4 -1.96,-13.04 -1.96,-13.04 0,0 -0.88,6.99 -5.03,9.88 z"
          />
          <path
            id="belly_shadow_middle"
            opacity="0.2"
            fill="url(#fill_belly_shadow_middle)"
            filter="url(#blur_belly_shadow_middle)"
            clipPath="url(#clip_body)"
            d="m 95.17,107.81 c -0.16,1.25 -0.36,2.5 -0.6,3.74 -0.12,0.61 -0.26,1.22 -0.48,1.8 -0.23,0.58 -0.56,1.14 -1.02,1.55 -0.41,0.37 -0.9,0.62 -1.4,0.85 -1.94,0.88 -4.01,1.47 -6.12,1.74 0.84,0.06 1.68,0.14 2.53,0.23 0.53,0.06 1.06,0.12 1.57,0.25 0.52,0.14 1.03,0.34 1.46,0.65 0.47,0.35 0.84,0.82 1.12,1.34 0.55,1.02 0.73,2.2 0.83,3.37 0.13,1.48 0.14,2.98 0.03,4.46 0.1,-0.99 0.31,-1.98 0.62,-2.92 0.57,-1.72 1.47,-3.32 2.69,-4.65 0.49,-0.52 1.02,-1.01 1.6,-1.42 1.79,-1.26 4.07,-1.81 6.24,-1.51 -2.21,0.09 -4.44,-0.6 -6.2,-1.93 -0.9,-0.68 -1.68,-1.52 -2.22,-2.5 -0.84,-1.52 -1.08,-3.37 -0.65,-5.05 z"
          />
          <path
            id="belly_shadow_lower"
            opacity="0.11"
            fill="#000000"
            filter="url(#blur_belly_shadow_lower)"
            clipPath="url(#clip_body)"
            d="m 89.85,137.14 c -1.06,4.03 -1.79,8.15 -2.17,12.31 -0.55,5.87 -0.42,11.78 -0.74,17.67 -0.26,4.99 -0.85,10.04 0.02,14.97 0.41,2.35 1.15,4.64 2.2,6.78 0.16,-0.82 0.29,-1.64 0.36,-2.47 0.37,-4 -0.3,-8.01 -0.53,-12.01 -0.4,-7.02 0.57,-14.04 0.97,-21.06 0.3,-5.39 0.27,-10.8 -0.11,-16.19 z"
          />
        </g>
        <g id="body_glare">
          <path
            id="belly_glare"
            opacity="0.75"
            fill="#7c7c7c"
            filter="url(#blur_belly_glare)"
            clipPath="url(#clip_body)"
            d="m 160.08,131.23 c 1.03,-0.16 7.34,5.21 6.48,7.21 -0.86,1.99 -2.49,0.79 -3.65,0.8 -1.16,0.02 -4.33,1.46 -4.86,0.55 -0.54,-0.91 1.4,-3.03 2.41,-4.81 0.82,-1.43 -1.4,-3.59 -0.38,-3.75 z"
          />
          <path
            id="head_glare"
            fill="#7c7c7c"
            filter="url(#blur_head_glare)"
            clipPath="url(#clip_body)"
            d="m 121.52,11.12 c -2.21,1.56 -1.25,3.51 -0.3,5.46 0.95,1.96 -2.09,7.59 -2.12,7.83 -0.03,0.24 5.98,-2.85 7.62,-4.87 1.94,-2.37 6.83,3.22 6.56,2.37 0.01,-1.52 -9.55,-12.34 -11.76,-10.79 z"
          />
          <path
            id="neck_glare"
            fill="#838384"
            filter="url(#blur_neck_glare)"
            clipPath="url(#clip_body)"
            d="m 138.27,76.63 c -1.86,1.7 0.88,4.25 2.17,7.24 0.81,1.86 3.04,4.49 5.2,4.07 1.63,-0.32 2.63,-2.66 2.48,-4.3 -0.3,-3.18 -2.98,-3.93 -4.93,-5.02 -1.54,-0.86 -3.61,-3.18 -4.92,-1.99 z"
          />
        </g>
      </g>
      <g id="wings">
        <g id="wing_left">
          <path
            id="wing_left_base"
            fill="#020204"
            d="m 63.98,100.91 c -6.1,6.92 -12.37,13.63 -15.81,21.12 -1.71,3.8 -2.51,7.93 -3.68,11.93 -1.32,4.54 -3.12,8.94 -5.14,13.22 -1.87,3.95 -3.93,7.81 -5.98,11.66 -1.5,2.81 -3.02,5.67 -3.54,8.81 -0.41,2.48 -0.18,5.04 0.46,7.47 0.63,2.43 1.64,4.75 2.79,6.98 4.88,9.55 12.21,17.77 20.89,24.07 3.94,2.85 8.15,5.32 12.58,7.35 2.4,1.09 4.92,2.07 7.56,2.11 1.32,0.03 2.65,-0.19 3.86,-0.72 1.2,-0.53 2.28,-1.38 3,-2.49 0.88,-1.36 1.18,-3.05 1,-4.66 -0.18,-1.61 -0.81,-3.15 -1.65,-4.53 -2.06,-3.38 -5.31,-5.83 -8.44,-8.25 -6.76,-5.23 -13.29,-10.76 -19.55,-16.58 -1.76,-1.65 -3.53,-3.34 -4.76,-5.42 -1.2,-2.02 -1.85,-4.32 -2.29,-6.63 -1.21,-6.33 -0.9,-12.99 1.25,-19.07 0.85,-2.38 1.96,-4.65 3.04,-6.93 1.86,-3.95 3.62,-7.98 6.07,-11.6 3.05,-4.51 7.13,-8.33 9.61,-13.17 2.1,-4.09 2.95,-8.68 3.76,-13.2 0.64,-3.54 1.85,-7 2.47,-10.54 -1.21,2.3 -5.11,6.07 -7.5,9.07 z"
          />
          <path
            id="wing_left_glare"
            opacity="0.95"
            fill="#7c7c7c"
            filter="url(#blur_wing_left_glare)"
            clipPath="url(#clip_wing_left)"
            d="m 56.96,126.1 c -2,1.84 -3.73,3.97 -5.13,6.31 -2.3,3.84 -3.65,8.16 -5.33,12.31 -1.24,3.09 -2.69,6.2 -2.86,9.53 -0.09,1.71 0.16,3.42 0.22,5.13 0.06,1.71 -0.1,3.49 -0.94,4.98 -0.7,1.25 -1.87,2.23 -3.22,2.71 1.83,0.61 3.45,1.79 4.6,3.33 0.96,1.3 1.58,2.81 2.41,4.18 0.68,1.12 1.51,2.16 2.54,2.97 1.02,0.82 2.25,1.4 3.54,1.56 1.79,0.23 3.65,-0.36 4.97,-1.58 -1.66,-15.55 -0.14,-31.42 4.44,-46.37 0.29,-0.94 0.59,-1.89 0.67,-2.87 0.07,-0.99 -0.12,-2.03 -0.72,-2.81 -0.31,-0.42 -0.74,-0.75 -1.23,-0.96 -0.48,-0.2 -1.02,-0.28 -1.54,-0.21 -0.52,0.06 -1.03,0.26 -1.45,0.57 -0.42,0.32 -0.76,0.74 -0.97,1.22 z"
          />
        </g>
        <g id="wing_right">
          <path
            id="wing_right_base"
            fill="#020204"
            d="m 162.76,127.12 c 5.24,4.22 8.57,10.59 9.6,17.24 0.8,5.18 0.28,10.51 -0.89,15.62 -1.17,5.12 -2.97,10.06 -4.77,15 -0.71,1.96 -1.43,3.95 -1.71,6.02 -0.29,2.08 -0.11,4.27 0.89,6.11 1.15,2.11 3.29,3.56 5.59,4.24 2.27,0.68 4.72,0.66 7.02,0.09 2.3,-0.57 6.17,-1.31 8.04,-2.77 4.75,-3.69 5.88,-10.1 7.01,-15.72 1.17,-5.87 0.6,-12.02 -0.43,-17.95 -1.41,-8.09 -3.78,-15.99 -6.79,-23.62 -2.22,-5.62 -5.06,-10.98 -8.44,-15.96 -3.32,-4.89 -8.02,-8.7 -11.5,-13.48 -1.21,-1.66 -2.66,-3.38 -3.84,-5.06 -2.56,-3.62 -1.98,-2.94 -3.57,-5.29 -1.15,-1.7 -2.97,-2.28 -4.88,-3.02 -1.92,-0.74 -4.06,-0.96 -6.04,-0.41 -2.6,0.73 -4.73,2.79 -5.86,5.24 -1.13,2.46 -1.33,5.28 -0.89,7.95 0.57,3.44 2.14,6.64 3.92,9.64 2,3.39 4.32,6.66 7.35,9.18 3.16,2.63 6.98,4.37 10.19,6.95 z"
          />
          <path
            id="wing_right_glare"
            fill="#838384"
            filter="url(#blur_wing_right_glare)"
            clipPath="url(#clip_wing_right)"
            d="m 150.42,118.99 c 0.42,0.4 0.86,0.81 1.31,1.19 3.22,2.63 4.93,5.58 8.2,8.16 5.34,4.22 10.75,11.5 11.8,18.15 0.82,5.19 -0.26,8.01 -1.58,14.12 -1.32,6.12 -5.06,14.78 -7.09,20.68 -0.8,2.35 1.64,1.38 1.32,3.86 -0.16,1.22 -0.18,2.45 -0.03,3.67 0.02,-0.23 0.03,-0.48 0.06,-0.71 0.39,-3.38 1.42,-6.63 2.55,-9.82 2.17,-6.13 4.66,-12.15 6.38,-18.45 1.72,-6.29 1.53,-10.82 0.63,-16.23 -1.13,-6.81 -5.09,-13.09 -10.69,-17.24 -3.97,-2.93 -8.64,-4.81 -12.86,-7.38 z"
          />
        </g>
      </g>
      <g id="feet">
        <g id="foot_left">
          <path
            id="foot_left_base"
            fill="url(#fill_foot_left_base)"
            d="m 34.98,175.33 c 1.38,-0.57 2.93,-0.68 4.39,-0.41 1.47,0.27 2.86,0.91 4.09,1.74 2.47,1.68 4.3,4.12 6.05,6.54 4.03,5.54 7.9,11.2 11.42,17.08 2.85,4.78 5.46,9.71 8.76,14.18 2.15,2.93 4.57,5.64 6.73,8.55 2.16,2.92 4.07,6.08 5.03,9.58 1.25,4.55 0.76,9.56 -1.4,13.75 -1.52,2.95 -3.86,5.48 -6.7,7.19 -2.84,1.71 -5.83,2.47 -9.15,2.47 -5.27,0 -10.42,-2.83 -15.32,-4.78 -9.98,-3.98 -20.82,-5.22 -31.11,-8.32 -3.16,-0.95 -6.27,-2.08 -9.45,-2.95 -1.42,-0.39 -2.85,-0.73 -4.19,-1.34 -1.34,-0.6 -2.59,-1.51 -3.33,-2.77 -0.57,-0.98 -0.8,-2.13 -0.8,-3.26 0,-1.14 0.28,-2.26 0.67,-3.32 0.77,-2.13 2.02,-4.06 2.86,-6.17 1.37,-3.44 1.62,-7.23 1.43,-10.93 -0.18,-3.69 -0.78,-7.36 -1.03,-11.05 -0.12,-1.65 -0.16,-3.32 0.16,-4.95 0.31,-1.62 1.01,-3.21 2.2,-4.35 1.1,-1.06 2.55,-1.69 4.05,-2 1.49,-0.31 3.03,-0.32 4.55,-0.29 1.52,0.03 3.05,0.12 4.57,-0.01 1.52,-0.12 3.05,-0.46 4.37,-1.22 1.26,-0.72 2.29,-1.79 3.14,-2.96 0.85,-1.17 1.54,-2.45 2.25,-3.72 0.7,-1.26 1.43,-2.52 2.36,-3.64 0.92,-1.12 2.06,-2.09 3.4,-2.64 z"
          />
          <path
            id="foot_left_layer_1"
            fill="#d99a03"
            filter="url(#blur_foot_left_layer_1)"
            clipPath="url(#clip_foot_left)"
            d="m 37.16,177.7 c 1.25,-0.5 2.67,-0.56 3.98,-0.26 1.32,0.3 2.55,0.94 3.61,1.77 2.14,1.65 3.62,3.97 5.05,6.26 3.42,5.54 6.76,11.15 9.92,16.86 2.4,4.31 4.68,8.7 7.62,12.65 1.95,2.62 4.18,5.03 6.17,7.62 1.99,2.59 3.76,5.41 4.64,8.56 1.14,4.05 0.68,8.54 -1.28,12.26 -1.42,2.68 -3.58,4.96 -6.2,6.48 -2.61,1.52 -5.67,2.28 -8.69,2.14 -4.82,-0.22 -9.23,-2.63 -13.77,-4.26 -8.71,-3.16 -18.14,-3.59 -27.08,-6.05 -3.2,-0.87 -6.32,-2.03 -9.53,-2.84 -1.43,-0.36 -2.88,-0.66 -4.23,-1.23 -1.35,-0.57 -2.62,-1.45 -3.36,-2.72 -0.54,-0.95 -0.76,-2.06 -0.73,-3.15 0.04,-1.09 0.31,-2.17 0.7,-3.19 0.78,-2.04 2,-3.88 2.78,-5.92 1.19,-3.08 1.34,-6.47 1.12,-9.76 -0.22,-3.29 -0.8,-6.56 -1,-9.85 -0.08,-1.48 -0.1,-2.97 0.2,-4.41 0.3,-1.45 0.93,-2.85 1.98,-3.89 1.14,-1.13 2.7,-1.74 4.29,-1.99 1.58,-0.24 3.19,-0.13 4.78,0.01 1.6,0.14 3.2,0.32 4.8,0.23 1.6,-0.1 3.22,-0.49 4.54,-1.39 1.2,-0.81 2.1,-2 2.79,-3.27 0.69,-1.27 1.18,-2.64 1.71,-3.98 0.52,-1.35 1.09,-2.69 1.91,-3.89 0.82,-1.19 1.93,-2.24 3.28,-2.79 z"
          />
          <path
            id="foot_left_layer_2"
            fill="#f5bd0c"
            filter="url(#blur_foot_left_layer_2)"
            clipPath="url(#clip_foot_left)"
            d="m 35.99,174.57 c 1.22,-0.6 2.65,-0.72 3.98,-0.45 1.33,0.27 2.57,0.92 3.62,1.77 2.09,1.7 3.43,4.13 4.67,6.51 2.84,5.46 5.5,11.04 8.9,16.19 2.48,3.73 5.33,7.2 7.83,10.92 3.39,5.03 6.15,10.57 7.29,16.5 0.76,4 0.74,8.31 -1.18,11.9 -1.27,2.37 -3.32,4.31 -5.75,5.52 -2.42,1.22 -5.21,1.71 -7.92,1.47 -4.27,-0.37 -8.14,-2.47 -12.16,-3.94 -7.13,-2.59 -14.84,-3.22 -22.18,-5.18 -3.09,-0.82 -6.13,-1.89 -9.26,-2.54 -1.39,-0.29 -2.8,-0.5 -4.12,-1 -1.32,-0.5 -2.57,-1.33 -3.25,-2.55 -0.47,-0.86 -0.63,-1.86 -0.56,-2.84 0.07,-0.97 0.36,-1.92 0.74,-2.83 0.77,-1.8 1.9,-3.46 2.49,-5.32 0.88,-2.75 0.52,-5.72 -0.14,-8.53 -0.65,-2.8 -1.6,-5.55 -1.89,-8.41 -0.13,-1.27 -0.13,-2.57 0.17,-3.82 0.29,-1.25 0.88,-2.45 1.81,-3.34 1.2,-1.15 2.88,-1.73 4.56,-1.89 1.67,-0.16 3.35,0.06 5.01,0.3 1.66,0.24 3.34,0.5 5.01,0.42 1.68,-0.07 3.39,-0.51 4.7,-1.54 1.3,-1.02 2.12,-2.53 2.59,-4.09 0.47,-1.57 0.62,-3.2 0.81,-4.82 0.19,-1.62 0.43,-3.26 1.06,-4.77 0.63,-1.51 1.69,-2.9 3.17,-3.64 z"
          />
          <path
            id="foot_left_glare"
            fill="url(#fill_foot_left_glare)"
            filter="url(#blur_foot_left_glare)"
            clipPath="url(#clip_foot_left)"
            d="m 51.2,188.21 c 2.25,4.06 3.62,8.72 5.85,12.82 2.05,3.77 4.38,7.65 6.46,11.12 0.93,1.55 3.09,3.93 5.27,7.62 1.98,3.34 3.98,8.01 5.1,9.58 -0.64,-1.84 -1.96,-6.77 -3.54,-10.28 -1.47,-3.28 -3.19,-5.15 -4.24,-6.92 -2.08,-3.47 -4.33,-6.6 -6.47,-9.91 -2.95,-4.57 -5.2,-9.68 -8.43,-14.03 z"
          />
        </g>
        <g id="foot_right">
          <path
            id="foot_right_shadow"
            opacity="0.2"
            fill="url(#fill_foot_right_shadow)"
            filter="url(#blur_foot_right_shadow)"
            clipPath="url(#clip_body)"
            d="m 198.7,215.61 c -0.4,1.33 -1.02,2.62 -1.81,3.8 -1.75,2.59 -4.3,4.55 -6.84,6.35 -4.33,3.07 -8.85,5.89 -12.89,9.38 -2.7,2.34 -5.17,4.97 -7.45,7.73 -1.95,2.36 -3.79,4.84 -6.02,6.94 -2.25,2.12 -4.89,3.84 -7.74,4.77 -3.47,1.13 -7.13,1.08 -10.47,0.22 -2.34,-0.6 -4.63,-1.64 -6.08,-3.53 -1.45,-1.89 -1.92,-4.44 -2.09,-6.94 -0.3,-4.42 0.23,-8.93 0.71,-13.42 0.4,-3.73 0.77,-7.46 0.92,-11.18 0.27,-6.77 -0.18,-13.47 -1.09,-20.05 -0.16,-1.11 -0.32,-2.22 -0.23,-3.35 0.09,-1.14 0.47,-2.32 1.27,-3.2 0.74,-0.81 1.77,-1.29 2.79,-1.52 1.02,-0.24 2.06,-0.25 3.09,-0.28 2.43,-0.06 4.86,-0.21 7.25,0.01 1.51,0.13 2.99,0.41 4.49,0.55 2.51,0.24 5.12,0.12 7.64,-0.62 2.71,-0.8 5.29,-2.29 8.05,-2.7 1.13,-0.17 2.26,-0.15 3.36,0.01 1.12,0.15 2.24,0.46 3.1,1.15 0.66,0.52 1.14,1.23 1.51,1.99 0.56,1.14 0.9,2.39 1.1,3.68 0.17,1.14 0.24,2.31 0.53,3.41 0.48,1.81 1.58,3.35 2.89,4.6 1.32,1.25 2.85,2.24 4.39,3.22 1.53,0.97 3.07,1.93 4.7,2.73 0.77,0.38 1.56,0.72 2.29,1.15 0.74,0.44 1.42,0.97 1.91,1.67 0.66,0.95 0.92,2.2 0.72,3.43 z"
          />
          <path
            id="foot_right_base"
            fill="url(#fill_foot_right_base)"
            d="m 213.47,222.92 c -2.26,2.68 -5.4,4.45 -8.53,6.05 -5.33,2.71 -10.86,5.1 -15.87,8.37 -3.36,2.19 -6.46,4.76 -9.36,7.53 -2.48,2.37 -4.83,4.9 -7.61,6.91 -2.81,2.03 -6.05,3.5 -9.48,4.01 -0.95,0.14 -1.9,0.21 -2.86,0.21 -3.24,0 -6.48,-0.78 -9.46,-2.08 -2.7,-1.17 -5.3,-2.86 -6.86,-5.36 -1.56,-2.52 -1.92,-5.59 -1.92,-8.56 -0.01,-5.23 0.96,-10.41 1.87,-15.57 0.76,-4.29 1.48,-8.58 1.95,-12.91 0.85,-7.86 0.84,-15.81 0.28,-23.71 -0.1,-1.32 -0.21,-2.65 -0.01,-3.96 0.2,-1.31 0.74,-2.62 1.74,-3.48 0.93,-0.8 2.17,-1.16 3.4,-1.22 1.22,-0.07 2.44,0.12 3.65,0.3 2.85,0.42 5.73,0.74 8.52,1.48 1.76,0.46 3.48,1.08 5.23,1.56 2.94,0.79 6.01,1.17 9.02,0.82 3.25,-0.38 6.41,-1.6 9.68,-1.52 1.34,0.03 2.67,0.28 3.95,0.69 1.3,0.41 2.59,1 3.55,1.98 0.73,0.74 1.24,1.67 1.62,2.64 0.57,1.44 0.88,2.98 1.01,4.52 0.11,1.37 0.09,2.76 0.35,4.11 0.43,2.21 1.6,4.24 3.04,5.97 1.45,1.74 3.18,3.21 4.91,4.66 1.73,1.45 3.46,2.89 5.32,4.16 0.87,0.6 1.77,1.16 2.6,1.81 0.83,0.66 1.59,1.42 2.11,2.34 0.45,0.81 0.69,1.72 0.69,2.65 0,0.52 -0.07,1.04 -0.23,1.56 -0.45,1.43 -1.28,2.82 -2.3,4.04 z"
          />
          <path
            id="foot_right_layer_1"
            fill="#cd8907"
            filter="url(#blur_foot_right_layer_1)"
            clipPath="url(#clip_foot_right)"
            d="m 213.21,216.12 c -0.53,1.33 -1.28,2.58 -2.22,3.67 -2.07,2.42 -4.93,4.01 -7.78,5.44 -4.88,2.44 -9.92,4.58 -14.5,7.52 -3.06,1.97 -5.9,4.28 -8.55,6.78 -2.26,2.13 -4.41,4.41 -6.95,6.21 -2.57,1.83 -5.53,3.14 -8.65,3.6 -3.8,0.56 -7.72,-0.16 -11.25,-1.67 -2.46,-1.06 -4.84,-2.56 -6.27,-4.83 -1.42,-2.26 -1.75,-5.02 -1.75,-7.69 -0.02,-4.71 0.87,-9.37 1.71,-14 0.7,-3.85 1.36,-7.71 1.78,-11.6 0.76,-7.08 0.73,-14.22 0.25,-21.32 -0.08,-1.19 -0.17,-2.39 0.01,-3.57 0.18,-1.18 0.67,-2.35 1.57,-3.13 0.85,-0.73 1.99,-1.05 3.11,-1.1 1.11,-0.06 2.22,0.12 3.33,0.28 2.61,0.38 5.23,0.67 7.78,1.33 1.61,0.42 3.18,0.98 4.78,1.4 2.68,0.72 5.49,1.06 8.24,0.74 2.97,-0.34 5.85,-1.44 8.83,-1.37 1.23,0.03 2.44,0.26 3.61,0.62 1.19,0.37 2.37,0.9 3.25,1.78 0.66,0.67 1.11,1.51 1.48,2.38 0.53,1.29 0.89,2.67 0.91,4.07 0.03,1.46 -0.28,2.92 -0.09,4.37 0.16,1.17 0.66,2.28 1.3,3.28 0.63,1 1.4,1.91 2.17,2.81 1.48,1.75 2.96,3.53 4.82,4.87 2.11,1.53 4.62,2.43 6.8,3.85 0.65,0.43 1.28,0.91 1.74,1.54 0.78,1.06 0.98,2.5 0.54,3.74 z"
          />
          <path
            id="foot_right_layer_2"
            fill="#f5c021"
            filter="url(#blur_foot_right_layer_2)"
            clipPath="url(#clip_foot_right)"
            d="m 212.91,214.61 c -0.6,1.35 -1.37,2.6 -2.28,3.71 -2.12,2.58 -4.99,4.35 -8,5.49 -4.97,1.88 -10.39,2.13 -15.26,4.27 -2.97,1.3 -5.65,3.26 -8.36,5.12 -2.18,1.49 -4.42,2.94 -6.82,3.98 -2.72,1.19 -5.6,1.85 -8.5,2.32 -1.84,0.29 -3.71,0.51 -5.57,0.41 -1.86,-0.1 -3.72,-0.54 -5.37,-1.49 -1.24,-0.72 -2.36,-1.75 -3.03,-3.1 -0.73,-1.49 -0.86,-3.24 -0.85,-4.94 0.05,-4.5 1.02,-8.96 0.99,-13.47 -0.03,-3.93 -0.81,-7.8 -1.03,-11.72 -0.43,-7.54 1.19,-15.2 -0.24,-22.59 -0.22,-1.19 -0.53,-2.37 -0.52,-3.58 0.01,-0.6 0.1,-1.21 0.31,-1.77 0.22,-0.55 0.56,-1.06 1.01,-1.42 0.39,-0.29 0.84,-0.47 1.31,-0.56 0.46,-0.08 0.94,-0.06 1.41,0.01 0.93,0.15 1.82,0.51 2.73,0.78 2.6,0.78 5.35,0.76 8,1.35 1.66,0.36 3.26,0.97 4.91,1.41 2.75,0.76 5.63,1.08 8.46,0.75 3.04,-0.36 6.01,-1.46 9.07,-1.38 1.26,0.03 2.5,0.26 3.71,0.62 1.21,0.36 2.42,0.87 3.34,1.8 0.65,0.67 1.13,1.52 1.51,2.4 0.57,1.29 0.96,2.69 0.95,4.11 -0.01,0.74 -0.12,1.47 -0.19,2.21 -0.06,0.74 -0.08,1.49 0.09,2.2 0.18,0.72 0.55,1.37 0.97,1.96 0.42,0.59 0.9,1.12 1.34,1.7 1.22,1.61 2.1,3.49 3.05,5.3 0.95,1.81 2.02,3.6 3.53,4.91 2.05,1.77 4.7,2.48 6.99,3.89 0.67,0.41 1.31,0.89 1.78,1.55 0.38,0.52 0.63,1.15 0.73,1.81 0.09,0.65 0.03,1.34 -0.17,1.96 z"
          />
          <path
            id="foot_right_glare"
            fill="url(#fill_foot_right_glare)"
            filter="url(#blur_foot_right_glare)"
            clipPath="url(#clip_foot_right)"
            d="m 148.08,181.58 c 2.82,-0.76 5.22,1.38 7.27,2.99 1.32,1.13 3.24,0.85 4.86,0.9 2.69,-0.09 5.36,0.45 8.05,0.12 5.3,-0.45 10.49,-1.75 15.81,-1.97 2.54,-0.16 5.4,-0.31 7.59,1.17 0.89,0.62 2.2,3.23 3.07,2.25 -0.36,-2.74 -2.39,-5.39 -5.11,-6.12 -2.14,-0.34 -4.3,0.25 -6.46,0.06 -6.39,-0.15 -12.75,-1.34 -19.16,-1 -4.46,0.04 -8.91,-0.17 -13.37,-0.34 -1.75,-0.36 -2.37,1.19 -3.32,1.79 0.25,0.19 0.34,0.25 0.77,0.15 z"
          />
        </g>
      </g>
      <g id="wing_tip_right">
        <g id="wing_tip_right_shadow">
          <path
            id="wing_tip_right_shadow_lower"
            opacity="0.35"
            fill="url(#fill_wing_tip_right_shadow_lower)"
            filter="url(#blur_wing_tip_right_shadow_lower)"
            clipPath="url(#clip_foot_right)"
            d="m 185.49,187.61 c -0.48,-0.95 -1.36,-1.66 -2.35,-2.07 -0.98,-0.41 -2.06,-0.55 -3.13,-0.54 -2.13,0.02 -4.25,0.57 -6.38,0.39 -1.79,-0.16 -3.49,-0.83 -5.24,-1.26 -1.81,-0.44 -3.73,-0.61 -5.52,-0.12 -1.92,0.52 -3.61,1.81 -4.67,3.49 -0.94,1.48 -1.38,3.23 -1.52,4.98 -0.14,1.75 0.01,3.5 0.19,5.25 0.12,1.26 0.27,2.52 0.57,3.75 0.31,1.23 0.78,2.43 1.52,3.46 1.07,1.48 2.66,2.54 4.37,3.17 2.8,1.03 5.98,0.98 8.73,-0.15 4.88,-2.12 9.01,-5.92 11.52,-10.6 0.91,-1.68 1.61,-3.47 2.06,-5.31 0.18,-0.74 0.32,-1.49 0.32,-2.25 0.01,-0.75 -0.12,-1.52 -0.47,-2.19 z"
          />
          <path
            id="wing_tip_right_shadow_upper"
            opacity="0.35"
            fill="url(#fill_wing_tip_right_shadow_upper)"
            filter="url(#blur_wing_tip_right_shadow_upper)"
            clipPath="url(#clip_foot_right)"
            d="m 185.49,184.89 c -0.48,-0.69 -1.36,-1.2 -2.35,-1.5 -0.98,-0.3 -2.06,-0.39 -3.13,-0.39 -2.13,0.02 -4.25,0.42 -6.38,0.28 -1.79,-0.11 -3.49,-0.6 -5.24,-0.9 -1.81,-0.32 -3.73,-0.45 -5.52,-0.09 -1.92,0.37 -3.61,1.3 -4.67,2.52 -0.94,1.07 -1.38,2.34 -1.52,3.6 -0.14,1.26 0.01,2.53 0.19,3.79 0.12,0.91 0.27,1.83 0.57,2.72 0.31,0.89 0.78,1.76 1.52,2.5 1.07,1.07 2.66,1.83 4.37,2.29 2.8,0.75 5.98,0.71 8.73,-0.11 4.88,-1.53 9.01,-4.28 11.52,-7.66 0.91,-1.22 1.61,-2.51 2.06,-3.84 0.18,-0.54 0.32,-1.08 0.32,-1.62 0.01,-0.55 -0.12,-1.11 -0.47,-1.59 z"
          />
        </g>
        <path
          id="wing_tip_right_base"
          fill="#020204"
          d="m 189.55,178.72 c -0.35,-0.95 -0.97,-1.79 -1.72,-2.47 -0.75,-0.68 -1.64,-1.2 -2.57,-1.6 -1.86,-0.79 -3.89,-1.09 -5.89,-1.46 -1.87,-0.35 -3.74,-0.78 -5.62,-1.1 -1.96,-0.33 -3.98,-0.55 -5.92,-0.11 -1.69,0.38 -3.26,1.26 -4.54,2.43 -1.28,1.17 -2.28,2.63 -3,4.21 -1.27,2.79 -1.67,5.92 -1.43,8.97 0.18,2.27 0.76,4.61 2.25,6.32 1.21,1.39 2.92,2.26 4.68,2.78 3.04,0.9 6.35,0.85 9.36,-0.13 4.97,-1.67 9.37,-4.98 12.35,-9.29 0.98,-1.43 1.82,-2.98 2.2,-4.66 0.29,-1.28 0.3,-2.66 -0.15,-3.89 z"
        />
        <g id="wing_tip_right_glare">
          <defs>
            <path
              id="path_wing_tip_right_glare"
              d="m 168.89,171.07 c -0.47,0.03 -0.93,0.08 -1.4,0.17 -2.99,0.53 -5.73,2.42 -7.27,5.03 -1.09,1.85 -1.58,4.03 -1.43,6.17 0.07,-1.5 0.46,-2.97 1.19,-4.28 1.23,-2.23 3.47,-3.91 5.98,-4.37 1.54,-0.28 3.13,-0.11 4.68,0.08 1.5,0.19 3,0.39 4.47,0.7 2.28,0.5 4.53,1.26 6.44,2.59 0.44,0.31 0.86,0.66 1.21,1.08 0.35,0.41 0.62,0.89 0.73,1.42 0.15,0.78 -0.07,1.6 -0.46,2.29 -0.39,0.7 -0.92,1.3 -1.48,1.86 -0.46,0.46 -0.94,0.89 -1.43,1.32 2.21,-0.43 4.44,-1.03 6.28,-2.31 0.77,-0.55 1.48,-1.2 1.94,-2.02 0.46,-0.83 0.65,-1.83 0.43,-2.75 -0.16,-0.62 -0.5,-1.19 -0.92,-1.67 -0.42,-0.48 -0.93,-0.87 -1.45,-1.24 -2.31,-1.62 -5.01,-2.65 -7.81,-2.99 -1.8,-0.33 -3.61,-0.61 -5.42,-0.83 -1.41,-0.18 -2.86,-0.33 -4.28,-0.25 z"
            />
          </defs>
          <use
            id="wing_tip_right_glare_1"
            href="#path_wing_tip_right_glare"
            xlinkHref="#path_wing_tip_right_glare"
            fill="url(#fill_wing_tip_right_glare_1)"
            filter="url(#blur_wing_tip_right_glare)"
            clipPath="url(#clip_wing_tip_right)"
          />
          <use
            id="wing_tip_right_glare_2"
            href="#path_wing_tip_right_glare"
            xlinkHref="#path_wing_tip_right_glare"
            fill="url(#fill_wing_tip_right_glare_2)"
            filter="url(#blur_wing_tip_right_glare)"
            clipPath="url(#clip_wing_tip_right)"
          />
        </g>
      </g>
      <g id="face">
        <g id="eyes">
          <g id="eye_left">
            <path
              id="eyeball_left"
              fill="url(#fill_eyeball_left)"
              d="m 84.45,38.28 c -1.53,0.08 -3,0.79 -4.12,1.84 -1.13,1.05 -1.92,2.43 -2.41,3.88 -0.97,2.92 -0.75,6.08 -0.53,9.15 0.2,2.77 0.41,5.6 1.45,8.18 0.52,1.3 1.25,2.51 2.22,3.51 0.97,0.99 2.2,1.76 3.55,2.09 1.26,0.32 2.62,0.26 3.86,-0.13 1.25,-0.4 2.38,-1.11 3.32,-2.02 1.36,-1.33 2.27,-3.07 2.8,-4.9 0.53,-1.83 0.68,-3.75 0.65,-5.66 -0.04,-2.38 -0.35,-4.77 -1.09,-7.03 -0.75,-2.26 -1.94,-4.4 -3.6,-6.11 -0.8,-0.83 -1.72,-1.55 -2.75,-2.06 -1.04,-0.51 -2.2,-0.8 -3.35,-0.74 z"
            />
            <g id="pupil_left">
              <path
                id="pupil_left_base"
                fill="#020204"
                d="m 80.75,50.99 c -0.32,1.94 -0.33,3.97 0.33,5.81 0.44,1.22 1.17,2.33 2.05,3.28 0.57,0.62 1.23,1.18 1.99,1.55 0.77,0.37 1.65,0.52 2.48,0.32 0.76,-0.19 1.42,-0.68 1.91,-1.29 0.49,-0.61 0.82,-1.34 1.05,-2.09 0.69,-2.21 0.58,-4.62 -0.11,-6.83 -0.49,-1.61 -1.32,-3.16 -2.6,-4.24 -0.62,-0.52 -1.34,-0.93 -2.12,-1.11 -0.78,-0.19 -1.63,-0.14 -2.36,0.19 -0.81,0.37 -1.44,1.07 -1.85,1.86 -0.41,0.79 -0.62,1.67 -0.77,2.55 z"
              />
              <path
                id="pupil_left_glare"
                fill="url(#fill_pupil_left_glare)"
                filter="url(#blur_pupil_left_glare)"
                clipPath="url(#clip_pupil_left)"
                d="m 84.84,49.59 c 0.21,0.55 0.91,0.75 1.3,1.19 0.37,0.42 0.76,0.87 0.97,1.4 0.39,1.01 -0.39,2.51 0.43,3.23 0.25,0.22 0.77,0.23 1.02,0 0.99,-0.9 0.77,-2.71 0.38,-3.99 -0.36,-1.15 -1.23,-2.25 -2.31,-2.8 -0.5,-0.26 -1.25,-0.47 -1.68,-0.11 -0.27,0.24 -0.24,0.74 -0.11,1.08 z"
              />
            </g>
            <path
              id="eyelid_left"
              fill="url(#fill_eyelid_left)"
              clipPath="url(#clip_eye_left)"
              d="m 81.14,44.46 c 2.32,-1.38 5.13,-1.7 7.82,-1.45 2.68,0.26 5.27,1.04 7.87,1.75 1.91,0.52 3.84,1 5.63,1.84 1.78,0.84 3.44,2.08 4.43,3.8 0.16,0.27 0.29,0.56 0.46,0.83 0.17,0.27 0.37,0.52 0.62,0.71 0.25,0.19 0.57,0.32 0.88,0.3 0.16,-0.01 0.32,-0.05 0.45,-0.13 0.14,-0.08 0.26,-0.2 0.33,-0.34 0.08,-0.16 0.11,-0.35 0.1,-0.53 -0.01,-0.18 -0.05,-0.36 -0.1,-0.54 -0.65,-2.37 -2.19,-4.38 -3.35,-6.55 -0.7,-1.3 -1.28,-2.66 -1.98,-3.96 -2.43,-4.45 -6.42,-7.94 -10.95,-10.21 -4.53,-2.27 -9.59,-3.36 -14.65,-3.65 -5.86,-0.35 -11.73,0.35 -17.51,1.37 -2.51,0.44 -5.06,0.96 -7.27,2.21 -1.11,0.62 -2.13,1.42 -2.92,2.42 -0.8,0.99 -1.36,2.18 -1.55,3.44 -0.17,1.22 0.01,2.47 0.44,3.62 0.42,1.15 1.08,2.2 1.86,3.15 1.54,1.91 3.53,3.39 5.36,5.03 1.83,1.63 3.52,3.44 5.57,4.79 1.02,0.68 2.13,1.24 3.31,1.57 1.18,0.33 2.44,0.42 3.64,0.17 1.24,-0.25 2.4,-0.86 3.41,-1.64 1.01,-0.77 1.88,-1.7 2.71,-2.66 1.66,-1.93 3.21,-4.04 5.39,-5.34 z"
            />
            <path
              id="eyebrow_left"
              fill="url(#fill_eyebrow_left)"
              filter="url(#blur_eyebrow_left)"
              d="m 90.77,36.57 c 2.16,2.02 3.76,4.52 4.85,7.16 -0.48,-2.91 -1.23,-5.26 -3.13,-7.16 -1.16,-1.09 -2.49,-2.05 -3.98,-2.72 -1.32,-0.59 -2.77,-0.96 -3.61,-0.97 -0.83,-0.02 -1.03,0 -1.2,0.01 -0.18,0.01 -0.31,0.01 0.23,0.08 0.54,0.06 1.75,0.39 3.05,0.97 1.3,0.58 2.62,1.54 3.79,2.63 z"
            />
          </g>
          <g id="eye_right">
            <path
              id="eyeball_right"
              fill="url(#fill_eyeball_right)"
              d="m 111.61,38.28 c -2.39,1.65 -4.4,3.94 -5.38,6.68 -1.24,3.45 -0.77,7.31 0.43,10.77 1.22,3.55 3.27,6.93 6.36,9.06 1.54,1.07 3.33,1.8 5.19,2.02 1.87,0.22 3.8,-0.09 5.47,-0.95 2.02,-1.06 3.57,-2.91 4.53,-4.98 0.96,-2.08 1.37,-4.37 1.5,-6.66 0.16,-2.9 -0.12,-5.86 -1.08,-8.61 -1.04,-2.99 -2.92,-5.75 -5.58,-7.47 -1.32,-0.86 -2.83,-1.45 -4.4,-1.67 -1.57,-0.22 -3.19,-0.05 -4.67,0.52 -0.84,0.33 -1.62,0.78 -2.37,1.29 z"
            />
            <g id="pupil_right">
              <path
                id="pupil_right_base"
                fill="#020204"
                d="m 117.14,45.52 c -0.9,0.06 -1.78,0.37 -2.55,0.85 -0.76,0.48 -1.41,1.13 -1.92,1.88 -1.03,1.49 -1.48,3.31 -1.55,5.12 -0.05,1.35 0.1,2.72 0.55,4 0.45,1.28 1.2,2.47 2.25,3.33 1.07,0.89 2.42,1.42 3.81,1.49 1.39,0.06 2.79,-0.34 3.93,-1.13 0.91,-0.63 1.64,-1.5 2.16,-2.48 0.52,-0.97 0.84,-2.05 0.98,-3.15 0.25,-1.93 -0.03,-3.95 -0.93,-5.69 -0.89,-1.74 -2.41,-3.17 -4.24,-3.84 -0.8,-0.29 -1.65,-0.44 -2.49,-0.38 z"
              />
              <path
                id="pupil_right_glare"
                fill="url(#fill_pupil_right_glare)"
                filter="url(#blur_pupil_right_glare)"
                clipPath="url(#clip_pupil_right)"
                d="m 122.71,53.36 c 1,-1 -0.71,-3.65 -2.05,-4.74 -0.97,-0.78 -3.78,-1.61 -3.66,-0.75 0.12,0.85 1.39,1.95 2.23,2.79 1.05,1.03 3,3.18 3.48,2.7 z"
              />
            </g>
            <path
              id="eyelid_right"
              fill="url(#fill_eyelid_right)"
              clipPath="url(#clip_eye_right)"
              d="m 102.56,47.01 c 2.06,-1.71 4.45,-3.01 7,-3.8 5.25,-1.62 11.2,-0.98 15.84,1.97 1.6,1.01 3.03,2.27 4.52,3.45 1.48,1.17 3.06,2.27 4.85,2.9 0.97,0.34 2,0.54 3.02,0.43 0.92,-0.09 1.81,-0.44 2.57,-0.96 0.76,-0.53 1.4,-1.23 1.88,-2.02 0.96,-1.58 1.27,-3.5 1.1,-5.34 -0.33,-3.69 -2.41,-6.94 -4.15,-10.21 -0.55,-1.02 -1.07,-2.06 -1.73,-3.01 -2.01,-2.93 -5.23,-4.86 -8.6,-5.99 -3.37,-1.13 -6.93,-1.54 -10.46,-1.98 -1.58,-0.2 -3.17,-0.41 -4.74,-0.22 -1.81,0.22 -3.51,0.95 -5.28,1.4 -0.84,0.22 -1.69,0.37 -2.52,0.61 -0.83,0.24 -1.65,0.57 -2.33,1.11 -0.98,0.79 -1.6,1.98 -1.87,3.21 -0.27,1.24 -0.21,2.52 -0.01,3.77 0.39,2.5 1.33,4.93 1.24,7.46 -0.06,1.73 -0.61,3.44 -0.54,5.17 0.02,0.51 0.12,1.55 0.21,2.05 z"
            />
            <path
              id="eyebrow_right"
              fill="url(#fill_eyebrow_right)"
              filter="url(#blur_eyebrow_right)"
              d="m 119.93,31.18 c -0.41,0.52 -0.78,1.08 -1.07,1.7 1.85,0.4 3.61,1.16 5.19,2.21 3.06,2.03 5.38,4.99 7.01,8.29 0.38,-0.42 0.72,-0.87 1.02,-1.37 -1.64,-3.44 -4,-6.55 -7.16,-8.65 -1.52,-1 -3.21,-1.77 -4.99,-2.18 z"
            />
          </g>
        </g>
        <g id="beak">
          <g id="beak_shadow">
            <path
              id="beak_shadow_lower"
              fill="#000000"
              fillOpacity="0.258824"
              filter="url(#blur_beak_shadow_lower)"
              clipPath="url(#clip_body)"
              d="m 81.12,89.33 c 1.47,4.26 4.42,7.89 7.92,10.72 1.16,0.95 2.39,1.82 3.76,2.43 1.36,0.62 2.87,0.97 4.36,0.84 1.46,-0.12 2.85,-0.7 4.13,-1.42 1.28,-0.72 2.46,-1.59 3.7,-2.37 2.12,-1.35 4.39,-2.44 6.6,-3.64 2.65,-1.45 5.23,-3.1 7.46,-5.14 1.03,-0.93 1.98,-1.95 3.11,-2.75 1.13,-0.81 2.49,-1.39 3.87,-1.29 1.04,0.07 2.01,0.51 3.03,0.73 0.51,0.11 1.03,0.16 1.55,0.08 0.51,-0.08 1.01,-0.29 1.37,-0.67 0.44,-0.46 0.64,-1.12 0.61,-1.76 -0.02,-0.63 -0.24,-1.25 -0.54,-1.81 -0.59,-1.13 -1.49,-2.1 -1.89,-3.31 -0.36,-1.08 -0.29,-2.24 -0.26,-3.37 0.03,-1.14 0.01,-2.32 -0.51,-3.33 -0.4,-0.76 -1.07,-1.37 -1.83,-1.77 -0.76,-0.41 -1.62,-0.62 -2.48,-0.7 -1.72,-0.16 -3.44,0.18 -5.17,0.27 -2.28,0.13 -4.58,-0.15 -6.87,-0.02 -2.85,0.18 -5.65,1 -8.51,1.01 -3.26,0.01 -6.52,-1.06 -9.74,-0.55 -1.39,0.22 -2.71,0.72 -4.03,1.16 -1.33,0.45 -2.7,0.84 -4.1,0.82 -1.59,-0.03 -3.13,-0.58 -4.72,-0.69 -0.79,-0.06 -1.6,0 -2.35,0.28 -0.74,0.28 -1.41,0.79 -1.78,1.5 -0.21,0.4 -0.31,0.86 -0.33,1.31 -0.02,0.46 0.04,0.91 0.15,1.36 0.22,0.88 0.63,1.71 0.96,2.55 1.2,3.07 1.46,6.42 2.53,9.53 z"
            />
            <path
              id="beak_shadow_upper"
              opacity="0.3"
              fill="#000000"
              filter="url(#blur_beak_shadow_upper)"
              clipPath="url(#clip_body)"
              d="m 77.03,77.2 c 2.85,1.76 5.41,3.93 7.56,6.39 1.99,2.29 3.68,4.89 6.29,6.58 1.83,1.2 4.04,1.87 6.28,2.08 2.63,0.24 5.29,-0.15 7.83,-0.84 2.35,-0.63 4.62,-1.53 6.7,-2.71 3.97,-2.25 7.28,-5.55 11.65,-7.03 0.95,-0.33 1.94,-0.56 2.86,-0.96 0.92,-0.39 1.79,-0.99 2.23,-1.83 0.42,-0.82 0.4,-1.75 0.54,-2.64 0.15,-0.96 0.48,-1.88 0.66,-2.83 0.18,-0.95 0.2,-1.96 -0.24,-2.83 -0.37,-0.72 -1.04,-1.29 -1.81,-1.66 -0.77,-0.36 -1.64,-0.52 -2.51,-0.56 -1.72,-0.08 -3.43,0.33 -5.16,0.47 -2.28,0.19 -4.58,-0.08 -6.87,-0.01 -2.85,0.08 -5.66,0.67 -8.51,0.8 -3.25,0.14 -6.49,-0.34 -9.74,-0.44 -1.41,-0.05 -2.83,-0.03 -4.21,0.2 -1.39,0.22 -2.75,0.65 -3.91,1.37 -1.14,0.69 -2.07,1.64 -3.11,2.45 -0.52,0.41 -1.08,0.78 -1.68,1.07 -0.61,0.28 -1.28,0.48 -1.96,0.51 -0.35,0.01 -0.71,-0.01 -1.05,0.04 -0.59,0.08 -1.13,0.39 -1.47,0.83 -0.34,0.45 -0.47,1.02 -0.36,1.55 z"
            />
          </g>
          <path
            id="beak_base"
            fill="url(#fill_beak_base)"
            d="m 91.66,58.53 c 1.53,-1.71 2.57,-3.8 4.03,-5.56 0.73,-0.88 1.58,-1.69 2.57,-2.26 0.99,-0.57 2.15,-0.89 3.29,-0.79 1.27,0.11 2.46,0.74 3.39,1.61 0.93,0.87 1.62,1.97 2.17,3.12 0.53,1.11 0.95,2.28 1.71,3.24 0.81,1.02 1.94,1.71 2.97,2.52 0.51,0.4 1.01,0.83 1.41,1.34 0.41,0.51 0.72,1.1 0.86,1.74 0.13,0.65 0.06,1.33 -0.16,1.95 -0.23,0.62 -0.61,1.18 -1.09,1.64 -0.95,0.92 -2.25,1.42 -3.56,1.6 -2.62,0.37 -5.27,-0.41 -7.92,-0.34 -2.67,0.08 -5.29,1.02 -7.97,0.93 -1.33,-0.05 -2.69,-0.38 -3.79,-1.14 -0.55,-0.39 -1.03,-0.88 -1.38,-1.45 -0.34,-0.57 -0.55,-1.23 -0.58,-1.9 -0.02,-0.64 0.13,-1.28 0.39,-1.86 0.25,-0.59 0.61,-1.12 1.01,-1.62 0.81,-0.99 1.8,-1.81 2.65,-2.77 z"
          />
          <g id="mandible_lower">
            <path
              id="mandible_lower_base"
              fill="url(#fill_mandible_lower_base)"
              d="m 77.14,75.05 c 0.06,0.26 0.15,0.5 0.28,0.73 0.23,0.38 0.57,0.69 0.93,0.95 0.36,0.27 0.75,0.49 1.13,0.72 2.01,1.27 3.65,3.04 5.11,4.92 1.95,2.52 3.68,5.31 6.29,7.14 1.84,1.3 4.04,2.03 6.28,2.26 2.63,0.26 5.29,-0.16 7.83,-0.91 2.35,-0.69 4.62,-1.66 6.7,-2.95 3.97,-2.44 7.28,-6.02 11.65,-7.63 0.95,-0.35 1.94,-0.6 2.86,-1.03 0.92,-0.44 1.79,-1.08 2.23,-2 0.42,-0.88 0.4,-1.9 0.54,-2.87 0.15,-1.03 0.48,-2.03 0.66,-3.06 0.18,-1.03 0.2,-2.13 -0.24,-3.08 -0.37,-0.78 -1.04,-1.4 -1.81,-1.79 -0.77,-0.4 -1.64,-0.58 -2.51,-0.62 -1.72,-0.08 -3.43,0.36 -5.16,0.52 -2.28,0.21 -4.58,-0.09 -6.87,-0.02 -2.85,0.09 -5.66,0.73 -8.51,0.87 -3.25,0.15 -6.49,-0.35 -9.74,-0.48 -1.41,-0.06 -2.83,-0.04 -4.22,0.2 -1.39,0.23 -2.75,0.71 -3.91,1.51 -1.13,0.78 -2.03,1.84 -3.07,2.74 -0.52,0.45 -1.08,0.86 -1.7,1.16 -0.61,0.3 -1.29,0.49 -1.98,0.47 -0.35,-0.01 -0.72,-0.06 -1.05,0.04 -0.21,0.07 -0.4,0.2 -0.56,0.35 -0.16,0.16 -0.29,0.34 -0.41,0.52 -0.29,0.42 -0.54,0.87 -0.75,1.34 z"
            />
            <path
              id="mandible_lower_glare"
              fill="#d9b30d"
              filter="url(#blur_mandible_lower_glare)"
              clipPath="url(#clip_mandible_lower)"
              d="m 89.9,78.56 c -0.33,1.37 -0.13,2.87 0.56,4.11 0.68,1.24 1.84,2.2 3.19,2.65 1.7,0.57 3.62,0.29 5.21,-0.54 0.93,-0.48 1.77,-1.16 2.3,-2.06 0.27,-0.44 0.46,-0.94 0.53,-1.46 0.06,-0.51 0.02,-1.05 -0.16,-1.54 -0.2,-0.53 -0.56,-1 -0.99,-1.37 -0.44,-0.37 -0.95,-0.64 -1.5,-0.82 -1.08,-0.36 -2.77,-0.66 -3.91,-0.68 -2.02,-0.04 -4.9,0.34 -5.23,1.71 z"
            />
          </g>
          <g id="mandible_upper">
            <path
              id="mandible_upper_shadow"
              fill="#604405"
              filter="url(#blur_mandible_upper_shadow)"
              clipPath="url(#clip_mandible_lower)"
              d="m 84.31,67.86 c -1.16,0.68 -2.27,1.43 -3.36,2.2 -0.57,0.41 -1.15,0.84 -1.45,1.47 -0.21,0.44 -0.26,0.94 -0.27,1.43 0,0.5 0.03,0.99 -0.04,1.48 -0.04,0.33 -0.13,0.66 -0.14,0.99 -0.01,0.17 0,0.34 0.04,0.5 0.05,0.16 0.13,0.32 0.24,0.44 0.15,0.16 0.35,0.26 0.56,0.32 0.21,0.06 0.42,0.09 0.64,0.14 1.01,0.24 1.89,0.86 2.66,1.56 0.77,0.69 1.47,1.48 2.28,2.13 2.18,1.78 5.07,2.52 7.89,2.56 2.82,0.05 5.61,-0.54 8.36,-1.16 2.16,-0.49 4.32,-0.99 6.39,-1.76 3.2,-1.18 6.16,-2.96 8.72,-5.19 1.17,-1.01 2.26,-2.12 3.57,-2.94 1.15,-0.73 2.44,-1.21 3.62,-1.9 0.11,-0.06 0.21,-0.13 0.3,-0.2 0.1,-0.08 0.18,-0.18 0.24,-0.28 0.09,-0.19 0.09,-0.42 0.03,-0.62 -0.06,-0.2 -0.18,-0.38 -0.31,-0.55 -0.15,-0.18 -0.31,-0.34 -0.49,-0.5 -1.23,-1.05 -2.89,-1.43 -4.51,-1.56 -1.61,-0.12 -3.24,-0.03 -4.83,-0.3 -1.5,-0.25 -2.92,-0.81 -4.37,-1.27 -1.52,-0.49 -3.07,-0.87 -4.64,-1.13 -3.71,-0.61 -7.52,-0.49 -11.19,0.27 -3.49,0.73 -6.87,2.05 -9.94,3.87 z"
            />
            <path
              id="mandible_upper_base"
              fill="url(#fill_mandible_upper_base)"
              d="m 83.94,63.95 c -1.66,1.12 -3.16,2.49 -4.43,4.04 -0.72,0.89 -1.38,1.86 -1.74,2.94 -0.29,0.86 -0.39,1.76 -0.57,2.65 -0.07,0.33 -0.15,0.66 -0.14,1 0,0.16 0.02,0.33 0.07,0.5 0.05,0.16 0.14,0.31 0.25,0.43 0.2,0.2 0.47,0.31 0.74,0.37 0.28,0.05 0.56,0.06 0.84,0.09 1.25,0.15 2.4,0.75 3.44,1.47 1.04,0.71 2,1.55 3.07,2.22 2.35,1.49 5.16,2.15 7.95,2.26 2.78,0.11 5.56,-0.31 8.3,-0.86 2.17,-0.43 4.33,-0.95 6.39,-1.76 3.16,-1.25 6.01,-3.16 8.72,-5.19 1.24,-0.92 2.46,-1.87 3.57,-2.94 0.37,-0.37 0.74,-0.74 1.14,-1.08 0.4,-0.33 0.85,-0.62 1.35,-0.78 0.76,-0.24 1.58,-0.17 2.37,-0.04 0.59,0.1 1.18,0.23 1.78,0.21 0.3,-0.02 0.6,-0.07 0.88,-0.18 0.28,-0.11 0.54,-0.28 0.73,-0.52 0.25,-0.3 0.38,-0.7 0.38,-1.09 0,-0.4 -0.12,-0.79 -0.32,-1.13 -0.4,-0.68 -1.09,-1.14 -1.81,-1.46 -0.99,-0.44 -2.06,-0.65 -3.11,-0.91 -3.23,-0.78 -6.37,-1.93 -9.34,-3.41 -1.48,-0.73 -2.92,-1.54 -4.37,-2.32 -1.5,-0.8 -3.02,-1.57 -4.64,-2.07 -3.64,-1.1 -7.6,-0.74 -11.19,0.51 -3.98,1.38 -7.58,3.84 -10.31,7.05 z"
            />
            <path
              id="mandible_upper_glare"
              fill="#f6da4a"
              filter="url(#blur_mandible_upper_glare)"
              clipPath="url(#clip_mandible_upper)"
              d="m 109.45,64.75 c -0.2,-0.24 -0.48,-0.42 -0.78,-0.51 -0.3,-0.09 -0.62,-0.09 -0.93,-0.04 -0.62,0.11 -1.18,0.44 -1.7,0.8 -1.47,1.01 -2.77,2.26 -3.91,3.64 -1.5,1.83 -2.74,3.94 -3.16,6.27 -0.07,0.39 -0.11,0.8 -0.07,1.19 0.05,0.4 0.2,0.79 0.49,1.07 0.24,0.25 0.58,0.4 0.92,0.45 0.35,0.05 0.71,0 1.04,-0.11 0.66,-0.22 1.21,-0.69 1.74,-1.15 2.87,-2.58 5.47,-5.66 6.51,-9.38 0.1,-0.37 0.19,-0.75 0.19,-1.14 0,-0.39 -0.1,-0.78 -0.34,-1.09 z"
            />
            <path
              id="naris_left"
              opacity="0.8"
              fill="url(#fill_naris_left)"
              filter="url(#blur_naris_left)"
              d="m 92.72,59.06 c -0.77,-0.25 -2.03,1.1 -1.62,1.79 0.11,0.19 0.46,0.43 0.7,0.3 0.35,-0.19 0.64,-0.89 1.02,-1.16 0.25,-0.18 0.2,-0.84 -0.1,-0.93 z"
            />
            <path
              id="naris_right"
              opacity="0.8"
              fill="url(#fill_naris_right)"
              filter="url(#blur_naris_right)"
              d="m 102.56,59.42 c 0.2,0.64 1.23,0.53 1.83,0.84 0.52,0.27 0.94,0.86 1.53,0.88 0.56,0.01 1.44,-0.2 1.51,-0.76 0.09,-0.73 -0.98,-1.2 -1.67,-1.47 -0.89,-0.34 -2.03,-0.52 -2.86,-0.06 -0.19,0.11 -0.4,0.36 -0.34,0.57 z"
            />
          </g>
          <path
            id="beak_corner"
            fill="url(#fill_beak_corner)"
            filter="url(#blur_beak_corner)"
            clipPath="url(#clip_beak)"
            d="m 129.27,69.15 a 2.42,3.1 16.94 0 1 -2.81,3.04 2.42,3.1 16.94 0 1 -2.12,-3.04 2.42,3.1 16.94 0 1 2.81,-3.05 2.42,3.1 16.94 0 1 2.12,3.05 z"
          />
        </g>
      </g>
    </g>
  </svg>
);
