import React from 'react';
import { useApp, NavigationTab } from '../context/AppContext';
import { 
  Home, 
  BookOpen, 
  BookMarked, 
  Newspaper, 
  HelpCircle, 
  Crown, 
  User, 
  Sparkles
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, language, setIsAiModalOpen } = useApp();

  const navItems: { id: NavigationTab; label: { en: string; hi: string }; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: { en: 'Home', hi: 'होम' },
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'courses',
      label: { en: 'Courses', hi: 'कोर्स' },
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'constitution',
      label: { en: 'Constitution', hi: 'संविधान' },
      icon: <BookMarked className="w-5 h-5" />
    },
    {
      id: 'news',
      label: { en: 'News', hi: 'समाचार' },
      icon: <Newspaper className="w-5 h-5" />
    },
    {
      id: 'quiz',
      label: { en: 'Quiz', hi: 'क्विज' },
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      id: 'leadership',
      label: { en: 'Leader', hi: 'नेता बनें' },
      icon: <Crown className="w-5 h-5" />
    },
    {
      id: 'profile',
      label: { en: 'Profile', hi: 'प्रोफाइल' },
      icon: <User className="w-5 h-5" />
    }
  ];

  return (
    <>
      {/* Mobile Floating Action / Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#070b1a]/95 backdrop-blur-xl border-t border-amber-500/20 safe-pb md:hidden">
        <div className="grid grid-cols-7 items-center h-16 px-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center py-1 transition-all relative ${
                  isActive 
                    ? 'text-amber-400 font-bold scale-105' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 w-6 h-1 bg-amber-400 rounded-full shadow-sm shadow-amber-400/80 animate-pulse" />
                )}
                <div className={`${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] mt-0.5 tracking-tight truncate max-w-[50px]">
                  {item.label[language]}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sub-navigation Header Bar */}
      <nav className="hidden md:block bg-[#0a1126]/80 border-b border-slate-800/80 px-4 py-2 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                    {item.icon}
                  </span>
                  <span>{item.label[language]}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium cursor-pointer transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'hi' ? 'राजनीतिक एआई से पूछें' : 'Consult AI Political Guru'}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
