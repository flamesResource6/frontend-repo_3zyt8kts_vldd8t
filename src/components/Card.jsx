import React from 'react'

export default function Card({ children, className='' }){
  return (
    <div className={`bg-white/95 backdrop-blur-sm border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.15)] rounded-2xl ${className}`}>
      {children}
    </div>
  )
}
