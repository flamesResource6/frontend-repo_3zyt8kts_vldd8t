import React from 'react'

export default function GoldCrescent({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="goldGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="40%" stopColor="#EED27E" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A9851F" />
        </radialGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path
          d="M130 20c-46 0-84 38-84 84s38 84 84 84c16 0 31-4 44-12-18 22-46 36-77 36-55 0-100-45-100-100S86-8 141-8c31 0 59 14 77 36-13-8-28-12-44-12z"
          fill="url(#goldGrad)"
        />
      </g>
    </svg>
  )
}
