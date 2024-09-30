import React from 'react';

export function TrashCycle({
  width = 56,
  height = 56,
  className = '',
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={56} height={56} rx={28} fill="white" fillOpacity="0.3" />
      <path
        d="M40 19.9714C35.56 19.5314 31.0933 19.3047 26.64 19.3047C24 19.3047 21.36 19.438 18.72 19.7047L16 19.9714"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3359 18.6241L23.6293 16.8774C23.8426 15.6107 24.0026 14.6641 26.2559 14.6641H29.7493C32.0026 14.6641 32.1759 15.6641 32.3759 16.8907L32.6693 18.6241"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1339 24.1875L36.2672 37.6142C36.1205 39.7075 36.0005 41.3342 32.2805 41.3342H23.7205C20.0005 41.3342 19.8805 39.7075 19.7339 37.6142L18.8672 24.1875"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.7734 34H30.2134"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6641 28.6641H31.3307"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
