import React from 'react';

const BentoTile = ({ children, className = "", title, noPadding = false }) => {
  return (
    <div className={`relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-[#A3FF12]/10 to-white/5 shadow-[0_0_25px_rgba(163,255,18,0.06)] hover:shadow-[0_0_35px_rgba(163,255,18,0.18)] transition-all duration-700 ${className}`}>
      {/* Inner Glass Panel */}
      <div className={`relative h-full w-full bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 ${noPadding ? '' : 'p-6'} overflow-hidden flex flex-col`}>
        
        {/* Floating Blur Highlight (Top-left) */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#A3FF12]/15 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#A3FF12]/25 transition-all duration-700" />
        
        {/* Inner Lime Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A3FF12]/[0.03] to-transparent pointer-events-none" />

        {/* Hover Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:animate-[shimmer_4s_infinite] pointer-events-none" />

        {/* Title Indicator */}
        {title && (
          <div className="flex items-center gap-2 mb-5 relative z-10">
            <div className="w-1.5 h-1.5 bg-[#A3FF12] rounded-full shadow-[0_0_10px_#A3FF12]" />
            <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">{title}</span>
          </div>
        )}

        {/* Content Area */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          25% { transform: translateX(250%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
      `}</style>
    </div>
  );
};

export default BentoTile;
