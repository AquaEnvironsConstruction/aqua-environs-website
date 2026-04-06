import React from 'react';

export const ShotcreteAwardLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a 
      href="https://drive.google.com/file/d/1G9_NuyG_bh1lW2bA2iIagXJhsuPOqgyi/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer ${className}`}
    >
      {/* Simplified Text Content - No Background Box */}
      <div className="text-center drop-shadow-md">
        <div className="flex items-center justify-center gap-1 mb-0.5">
          <span className="text-xl font-serif font-bold tracking-tighter text-white leading-none">asa</span>
          <div className="h-px w-4 bg-white/40" />
        </div>
        
        <div className="flex flex-col leading-none gap-0.5">
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white">Outstanding</span>
          <span className="text-[7px] font-medium uppercase tracking-[0.1em] text-white/80">Shotcrete Project</span>
        </div>
        
        <div className="flex items-center justify-center gap-1 mt-1">
          <div className="w-0.5 h-0.5 rounded-full bg-teal-aqua" />
          <span className="text-[10px] font-serif italic text-teal-aqua">Awards</span>
          <div className="w-0.5 h-0.5 rounded-full bg-teal-aqua" />
        </div>
      </div>
    </a>
  );
};
