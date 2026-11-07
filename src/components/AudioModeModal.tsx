import React, { useRef, useEffect } from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useApp } from '../context/AppContext';
import { 
  Play, 
  Pause, 
  X, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Headphones, 
  FastForward, 
  CheckCircle, 
  Scale, 
  Clock, 
  Minimize2,
  Sparkles,
  Repeat
} from 'lucide-react';

export const AudioModeModal: React.FC = () => {
  const { 
    currentLesson, 
    currentCourse, 
    isPlaying, 
    isPaused, 
    playbackRate, 
    currentSectionIndex, 
    sections, 
    progressPercent, 
    isAudioModeOpen, 
    autoAdvance, 
    setAutoAdvance, 
    togglePlayPause, 
    changeRate, 
    jumpToSection, 
    nextSection, 
    previousSection, 
    closeAudioMode 
  } = useAudioPlayer();

  const { language } = useApp();
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Auto-scroll transcript to active section
  useEffect(() => {
    if (transcriptRef.current) {
      const activeEl = transcriptRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentSectionIndex]);

  if (!isAudioModeOpen || !currentLesson) return null;

  const currentSec = sections[currentSectionIndex];
  const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060b18] text-slate-100 overflow-hidden animate-fade-in">
      
      {/* Top Header Bar */}
      <div className="px-4 sm:px-8 py-4 border-b border-amber-500/15 flex items-center justify-between bg-[#080e22]/90 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
            <Headphones className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {language === 'hi' ? 'ऑन-द-गो ऑडियो मोड' : 'On-The-Go Audio Mode'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Web Speech API
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {currentCourse?.title[language] || 'Politics Academy Curriculum'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Continuous Play Toggle */}
          <button
            onClick={() => setAutoAdvance(!autoAdvance)}
            className={`hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              autoAdvance 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
            title="Auto-Advance to Next Lesson"
          >
            <Repeat className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'निरंतर वाचन (Auto-Play)' : 'Continuous Play'}</span>
          </button>

          {/* Minimize / Close */}
          <button
            onClick={closeAudioMode}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Minimize to Bottom Bar"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
        
        {/* Animated Soundwave & Lesson Title Display */}
        <div className="text-center space-y-4 py-2 sm:py-6">
          
          {/* Big Soundwave Equalizer Circle */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full bg-gradient-to-br from-amber-500/20 via-[#0d1c44] to-[#080f24] border-2 border-amber-400/40 flex items-center justify-center shadow-2xl shadow-amber-500/15">
            {isPlaying ? (
              <div className="flex items-end space-x-1 sm:space-x-1.5 h-12">
                <span className="w-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.4s] h-8" />
                <span className="w-1.5 bg-amber-300 rounded-full animate-bounce [animation-delay:-0.2s] h-12" />
                <span className="w-1.5 bg-yellow-400 rounded-full animate-bounce [animation-delay:-0.5s] h-6" />
                <span className="w-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.1s] h-11" />
                <span className="w-1.5 bg-yellow-300 rounded-full animate-bounce [animation-delay:-0.3s] h-7" />
                <span className="w-1.5 bg-amber-500 rounded-full animate-bounce h-10" />
              </div>
            ) : (
              <Headphones className="w-12 h-12 text-amber-400/80" />
            )}
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              {currentLesson.category} • {currentLesson.readTimeMinutes} min listen
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white font-serif max-w-xl mx-auto leading-tight">
              {currentLesson.title[language]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              {currentSec ? currentSec.title : currentLesson.summary[language]}
            </p>
          </div>
        </div>

        {/* Live Audio Transcript Box */}
        <div 
          ref={transcriptRef}
          className="my-3 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 max-h-48 sm:max-h-56 overflow-y-auto space-y-3 shadow-inner"
        >
          {sections.map((sec, idx) => {
            const isActive = idx === currentSectionIndex;
            return (
              <div
                key={idx}
                data-active={isActive}
                onClick={() => jumpToSection(idx)}
                className={`p-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/15 border-l-4 border-amber-400 text-amber-100 font-medium shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 text-xs'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                    {idx + 1}. {sec.title}
                  </span>
                  {isActive && (
                    <span className="text-[10px] text-amber-300 font-normal animate-pulse flex items-center space-x-1">
                      <Volume2 className="w-3 h-3" />
                      <span>{language === 'hi' ? 'वाचन जारी...' : 'Speaking...'}</span>
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {sec.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Progress Timeline Scrubber */}
        <div className="space-y-1.5 py-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>
              {language === 'hi' ? 'अध्याय' : 'Section'} {currentSectionIndex + 1} / {sections.length}
            </span>
            <span className="font-bold text-amber-400">{progressPercent}%</span>
          </div>

          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Touch-Friendly Big Audio Controls */}
        <div className="space-y-4 pt-2">
          
          {/* Main Transport Buttons */}
          <div className="flex items-center justify-center space-x-5 sm:space-x-8">
            
            {/* Previous Section Button */}
            <button
              onClick={previousSection}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-lg border border-slate-700"
              title="Previous Chapter"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Huge Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 flex items-center justify-center transition-all shadow-xl shadow-amber-500/30 cursor-pointer active:scale-95"
              title={isPlaying ? 'Pause Audio' : 'Play Audio'}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950" />
              ) : (
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-slate-950 ml-1" />
              )}
            </button>

            {/* Next Section Button */}
            <button
              onClick={nextSection}
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-lg border border-slate-700"
              title="Next Chapter"
            >
              <SkipForward className="w-5 h-5" />
            </button>

          </div>

          {/* Speed Presets & Mobile Continuous Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
            {/* Speed Presets */}
            <div className="flex items-center space-x-1.5 text-xs">
              <span className="text-slate-400 font-semibold mr-1">{language === 'hi' ? 'गति:' : 'Speed:'}</span>
              {speeds.map(sp => (
                <button
                  key={sp}
                  onClick={() => changeRate(sp)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    playbackRate === sp
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {sp}x
                </button>
              ))}
            </div>

            {/* Commute Wake Notice */}
            <div className="text-[11px] text-slate-400 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'hi' ? 'हैंड्स-फ्री ड्राइव / वॉक मोड सक्रिय' : 'Hands-Free Commute Mode Active'}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
