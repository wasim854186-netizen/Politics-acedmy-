/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeDashboard } from './components/HomeDashboard';
import { CourseViewer } from './components/CourseViewer';
import { ConstitutionLibrary } from './components/ConstitutionLibrary';
import { NewsSection } from './components/NewsSection';
import { QuizSection } from './components/QuizSection';
import { LeadershipHub } from './components/LeadershipHub';
import { UserProfileView } from './components/UserProfile';
import { AdminPanel } from './components/AdminPanel';
import { AiTeacherModal } from './components/AiTeacherModal';
import { CertificateModal } from './components/CertificateModal';
import { AudioMiniBar } from './components/AudioMiniBar';
import { AudioModeModal } from './components/AudioModeModal';
import { Shield } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">
      {activeTab === 'home' && <HomeDashboard />}
      {activeTab === 'courses' && <CourseViewer />}
      {activeTab === 'constitution' && <ConstitutionLibrary />}
      {activeTab === 'news' && <NewsSection />}
      {activeTab === 'quiz' && <QuizSection />}
      {activeTab === 'leadership' && <LeadershipHub />}
      {activeTab === 'profile' && <UserProfileView />}
      {activeTab === 'admin' && <AdminPanel />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AudioPlayerProvider>
        <div className="min-h-screen bg-[#080d1e] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
          <Navbar />
          <BottomNav />
          <div className="flex-1">
            <MainContent />
          </div>

          {/* Global Audio Mode Mini-Bar & Commute Modal */}
          <AudioMiniBar />
          <AudioModeModal />

          {/* Global Modals */}
          <AiTeacherModal />
          <CertificateModal />

          {/* Professional Footer */}
          <footer className="mt-auto border-t border-slate-800/80 bg-[#060a17] py-8 px-4 text-xs text-slate-400 mb-20 md:mb-12">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <span className="font-bold text-white font-serif">Politics Academy</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Non-Partisan EdTech
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 max-w-md">
                  Dedicated to universal political literacy, constitutional awareness, and ethical democratic leadership.
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-end text-[11px] space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-400/90 font-medium">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Strict Non-Partisan Education • Web Speech API Audio Mode</span>
                </div>
                <p className="text-slate-400">
                  Crafted for India's citizens, students, and next-generation leaders.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </AudioPlayerProvider>
    </AppProvider>
  );
}
