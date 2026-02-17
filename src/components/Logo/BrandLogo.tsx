import React from 'react'

export const BrandLogo: React.FC = () => {
  return (
    <div className="brand-logo flex items-center gap-2 select-none">
      <div className="flex flex-col leading-none">
        {/* Logo Container with Mustard Background */}
        <div className="flex items-baseline bg-[#F39C12] px-3 py-1.5 rounded-sm shadow-sm">
          {/* 'ms.' part with white text and outline effect if needed */}
          <span className="text-white font-medium text-2xl mr-1 tracking-tighter" 
                style={{ 
                  fontFamily: 'var(--font-geist-sans), sans-serif',
                  textShadow: '0px 1px 2px rgba(0,0,0,0.1)'
                }}>
            ms.
          </span>
          
          {/* 'Media Sol' part with black text */}
          <span className="text-black font-bold text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
            Media Sol
          </span>
        </div>
      </div>
    </div>
  )
}
