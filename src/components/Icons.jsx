import React from 'react';

const svgProps = {
  className: "w-6 h-6 text-[#0F1E36]",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
  width: "24",
  height: "24"
};

export const EngineeringIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m9-7h1m-1 4h1m-4-4h1m-1 4h1m-5-10V3m0 8V9m0 4v2m7-2v2m-4-4v2m-4-4v2m-4-4v2" />
  </svg>
);

export const CapIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

export const TargetIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const VideoIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const GrowthIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const BookIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export const CreativeBrandIcon = () => (
  <svg {...svgProps}>
    {/* Upward Trajectory Path (Strategy) */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l7-7 3 3L22 4" />
    
    {/* Strategic Nodes on Path */}
    <circle cx="11" cy="13" r="1" className="text-[#D49E2D]" fill="currentColor" stroke="none" />
    <circle cx="14" cy="16" r="1" className="text-[#D49E2D]" fill="currentColor" stroke="none" />
    
    {/* Creative Spark Focal Point Apex */}
    <path strokeLinecap="round" className="text-[#D49E2D]" d="M22 4l-.5 2.5m-2.5-.5L22 4m-.5-2.5L22 4m2.5.5L22 4" />
    <circle cx="22" cy="4" r="1" className="text-[#D49E2D]" fill="currentColor" stroke="none" />
  </svg>
);

export const RealEstateIcon = () => (
  <svg {...svgProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H9a2 2 0 00-2 2v16m10 0h2M3 21h18M10 11h4m-4 4h4m-4 4h4" />
  </svg>
);