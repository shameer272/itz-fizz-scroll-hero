import React, { forwardRef } from 'react';

const statsData = [
  {
    value: '85%',
    label: 'DIGITAL REACH',
    sub: 'Spatial neural immersion',
  },
  {
    value: '92%',
    label: 'ENGAGEMENT',
    sub: 'Scroll-linked retention',
  },
  {
    value: '78%',
    label: 'GROWTH',
    sub: 'Measurable performance',
  },
];

const Stats = forwardRef(({ statsContainerRef }, _ref) => {
  return (
    <div
      ref={statsContainerRef}
      className="stats-container w-full max-w-3xl mx-auto px-4 z-20 pointer-events-auto"
    >
      <div className="grid grid-cols-3 gap-3 sm:gap-8 pt-2.5 sm:pt-3 border-t border-white/[0.08]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="stat-item flex flex-col items-center sm:items-start text-center sm:text-left group"
          >
            <div className="flex items-baseline space-x-1.5">
              <span className="font-display font-light text-xl sm:text-2xl lg:text-3xl text-white/95 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                {stat.value}
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-60"></span>
            </div>

            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.22em] text-slate-300 uppercase mt-0.5">
              {stat.label}
            </span>

            <p className="hidden sm:block font-sans text-[10px] text-slate-500 font-light mt-0.5 max-w-[160px] line-clamp-1">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
