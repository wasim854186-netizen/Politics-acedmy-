import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sparkles, 
  Flame, 
  Award, 
  ShieldCheck, 
  Languages, 
  User, 
  Settings
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    user, 
    setActiveTab, 
    setIsAiModalOpen,
    activeTab
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-[#070b19]/90 backdrop-blur-md border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-1 ring-amber-300/30 group-hover:scale-105 transition-transform">
            <span className="text-xl font-serif text-slate-950 font-black tracking-tighter">PA</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-base font-bold tracking-tight text-white font-serif">
                Politics <span className="gold-gradient-text">Academy</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase tracking-widest">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden xs:block font-medium">
              {language === 'hi' ? 'शून्य से शिखर तक राजनीति सीखें' : 'Learn Politics from Zero to Pro'}
            </p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* AI Teacher Button */}
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-indigo-500/20 border border-amber-400/40 text-amber-200 hover:text-white hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transition-all text-xs font-semibold group cursor-pointer"
            title="Ask AI Political Teacher"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform animate-pulse" />
            <span className="hidden sm:inline">AI</span>
            <span>{language === 'hi' ? 'शिक्षक' : 'Teacher'}</span>
          </button>

          {/* Streak Indicator */}
          <div 
            onClick={() => setActiveTab('quiz')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-orange-500/30 text-orange-400 text-xs font-bold cursor-pointer hover:bg-orange-950/30 transition-colors"
            title="Daily Learning Streak"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-bounce" />
            <span>{user.streakDays}d</span>
          </div>

          {/* XP Badge */}
          <div 
            onClick={() => setActiveTab('profile')}
            className="hidden md:flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-bold cursor-pointer"
            title="Total XP Earned"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>{user.xp} XP</span>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
            title="Toggle Language / भाषा बदलें"
          >
            <Languages className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">{language === 'hi' ? 'English' : 'हिन्दी'}</span>
          </button>

          {/* Admin shortcut if admin role or toggle */}
          {user.role === 'admin' ? (
            <button
              onClick={() => setActiveTab('admin')}
              className={`p-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Admin Panel"
            >
              <Settings className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setActiveTab('admin')}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 text-slate-400 hover:text-amber-400 text-xs transition-colors cursor-pointer hidden lg:flex items-center space-x-1"
              title="Admin Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[11px]">Admin</span>
            </button>
          )}

          {/* Profile Avatar */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-8 h-8 rounded-full flex items-center justify-center border text-sm transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'border-amber-400 ring-2 ring-amber-400/40 bg-amber-500/20'
                : 'border-slate-700 hover:border-slate-500 bg-slate-800'
            }`}
            title="User Profile"
          >
            <span>{user.avatar || '🏛️'}</span>
          </button>

        </div>

      </div>
    </header>
  );
};
