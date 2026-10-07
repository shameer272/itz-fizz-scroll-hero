import React, { forwardRef } from 'react';
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="scroll-indicator flex flex-col items-center space-y-1 text-slate-400 z-20 pointer-events-none select-none transition-opacity duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.3em] uppercase text-slate-400 leading-tight">
          SCROLL
        </span>
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.3em] uppercase text-slate-400 leading-tight">
          TO EXPLORE
        </span>
      </div>
      
      {/* Subtle animated indicator line with arrow */}
      <div className="flex flex-col items-center pt-0.5">
        <div className="w-[1px] h-3.5 bg-gradient-to-b from-cyan-400/80 to-transparent" />
        <ArrowDown className="w-3 h-3 text-cyan-400/70 -mt-1 animate-bounce" />
      </div>
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;
