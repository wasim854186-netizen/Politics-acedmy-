import React from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useApp } from '../context/AppContext';
import { 
  Play, 
  Pause, 
  X, 
  Maximize2, 
  SkipForward, 
  Volume2, 
  Headphones,
  Flame
} from 'lucide-react';

export const AudioMiniBar: React.FC = () => {
  const { 
    currentLesson, 
    isPlaying, 
    isPaused, 
    togglePlayPause, 
    stop, 
    openAudioMode, 
    nextSection, 
    progressPercent,
    currentSectionIndex,
    sections,
    playbackRate
  } = useAudioPlayer();

  const { language } = useApp();

  if (!currentLesson) return null;

  const currentSec = sections[currentSectionIndex];

  return (
    <div className="fixed bottom-16 md:bottom-3 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="navy-card rounded-2xl border border-amber-500/40 shadow-2xl p-2.5 sm:p-3 flex items-center justify-between gap-3 backdrop-blur-xl bg-[#091124]/95">
          
          {/* Left: Soundwave Animation & Title */}
          <div 
            onClick={openAudioMode}
            className="flex items-center space-x-3 flex-1 min-w-0 cursor-pointer group"
          >
            {/* Animated Soundwave / Vinyl Disk */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              {isPlaying ? (
                <div className="flex items-end space-x-0.5 h-4">
                  <span className="w-1 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                  <span className="w-1 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.15s] h-4" />
                  <span className="w-1 bg-slate-950 rounded-full animate-bounce h-2" />
                  <span className="w-1 bg-slate-950 rounded-full animate-bounce [animation-delay:-0.25s] h-3.5" />
                </div>
              ) : (
                <Headphones className="w-5 h-5 text-slate-950" />
              )}
            </div>

            {/* Titles */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">
                  {language === 'hi' ? 'ऑडियो मोड' : 'Audio Mode'} • {playbackRate}x
                </span>
                {currentSec && (
                  <span className="text-[10px] text-slate-400 truncate hidden xs:inline">
                    ({currentSec.title})
                  </span>
                )}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                {currentLesson.title[language]}
              </h4>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition-all shadow-md shadow-amber-500/25 cursor-pointer active:scale-95"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950 ml-0.5" />}
            </button>

            {/* Next Section Button */}
            <button
              onClick={nextSection}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              title="Next Section"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Expand into Commute Mode */}
            <button
              onClick={openAudioMode}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
              title="Open Fullscreen Commute Audio Mode"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Stop / Close */}
            <button
              onClick={stop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close Audio Player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Thin bottom progress line */}
        <div className="w-full h-1 bg-slate-800/80 rounded-b-2xl overflow-hidden -mt-1">
          <div 
            className="h-full bg-amber-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
