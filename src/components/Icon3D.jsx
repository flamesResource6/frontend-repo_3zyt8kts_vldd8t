import React from 'react'

// Simple 3D-like gold-edged Islamic icons using SVG with gradients
export function IconQuran({ className='' }){
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id="emerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A9851F" />
        </linearGradient>
      </defs>
      <rect x="10" y="8" width="40" height="48" rx="6" fill="url(#emerald)" stroke="url(#gold)" strokeWidth="3" />
      <path d="M20 24l12 8 12-8" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconQibla({ className='' }){
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id="gold2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A9851F" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="24" fill="#0f6d57" stroke="url(#gold2)" strokeWidth="4" />
      <polygon points="32,14 38,36 32,30 26,36" fill="#E4C667" stroke="#AA8B2E" strokeWidth="1" />
      <rect x="28" y="28" width="8" height="8" fill="#222" rx="2" />
    </svg>
  )
}

export function IconMosque({ className='' }){
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <linearGradient id="gold3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A9851F" />
        </linearGradient>
      </defs>
      <path d="M32 12c8 0 14 6 14 14v2h6v20H12V28h6v-2c0-8 6-14 14-14z" fill="#0f6d57" stroke="url(#gold3)" strokeWidth="3" />
      <circle cx="32" cy="26" r="6" fill="#E4C667" />
    </svg>
  )
}

export function IconCrescent({ className='' }){
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <defs>
        <radialGradient id="gold4" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="40%" stopColor="#EED27E" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#A9851F" />
        </radialGradient>
      </defs>
      <path d="M42 8c-14 0-26 12-26 26s12 26 26 26c5 0 9-1 13-4-5 6-13 10-21 10-16 0-30-14-30-30S18-4 34-4c8 0 16 4 21 10-4-3-8-4-13-4z" fill="url(#gold4)" />
    </svg>
  )
}
