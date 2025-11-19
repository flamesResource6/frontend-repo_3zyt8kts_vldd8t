import React from 'react'

// Combined Makkah (Kaaba) + Madinah (Green Dome) silhouettes
export default function Silhouette({ className = '', align = 'center' }) {
  return (
    <svg className={className} viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="silk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4C667" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g fill="url(#silk)" opacity="0.45">
        {/* Kaaba block */}
        <rect x="140" y="120" width="120" height="120" rx="6" />
        <rect x="140" y="110" width="120" height="10" />
        {/* Dome and minarets */}
        <path d="M520 170c0-55 45-100 100-100s100 45 100 100v70H520v-70z" />
        <rect x="480" y="90" width="18" height="150" rx="4" />
        <rect x="742" y="90" width="18" height="150" rx="4" />
        {/* Skyline accents */}
        <rect x="300" y="100" width="40" height="140" rx="6" />
        <rect x="360" y="140" width="28" height="100" rx="6" />
        <rect x="410" y="160" width="18" height="80" rx="6" />
      </g>
    </svg>
  )
}
