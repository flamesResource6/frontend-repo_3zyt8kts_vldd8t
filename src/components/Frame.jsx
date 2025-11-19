import React from 'react'

// Mobile frame wrapper 390x844 with premium green gradient background
export default function Frame({ children, pattern = true }) {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center py-6">
      <div className="relative w-[390px] h-[844px] overflow-hidden rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-emerald-400/20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#064E3B] via-[#0B6B56] to-[#10B981]" />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_20%,rgba(255,255,255,0.12),transparent)] mix-blend-soft-light" />
        {/* Subtle geometric pattern */}
        {pattern && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px), radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
            backgroundSize: '24px 24px, 24px 24px',
            backgroundPosition: '0 0, 12px 12px'
          }} />
        )}
        {children}
      </div>
    </div>
  )
}
