import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserRole } from '../types';
import { 
  User, 
  Award, 
  Flame, 
  CheckCircle, 
  Bookmark, 
  Settings, 
  Edit3, 
  Save, 
  ExternalLink, 
  Shield, 
  Crown, 
  Clock, 
  BookOpen
} from 'lucide-react';

export const UserProfileView: React.FC = () => {
  const { 
    user, 
    language, 
    courses, 
    switchUserRole, 
    updateUserName, 
    setSelectedCertificate,
    setActiveLesson,
    setActiveCourse,
    setActiveTab
  } = useApp();

  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user.name);

  const avatars = ['🏛️', '👨‍💼', '👩‍💼', '🧑‍🎓', '👩‍⚖️', '👨‍🏫', '🇮🇳', '🌟'];

  const handleSaveName = () => {
    if (tempName.trim()) {
      updateUserName(tempName.trim());
      setIsEditingName(false);
    }
  };

  const allLessons = courses.flatMap(c => c.lessons);
  const completedLessonItems = allLessons.filter(l => user.completedLessons.includes(l.id));
  const bookmarkedLessonItems = allLessons.filter(l => user.bookmarkedLessons.includes(l.id));

  const roleLabels: Record<UserRole, { en: string; hi: string }> = {
    citizen: { en: 'Informed Citizen', hi: 'जागरूक नागरिक' },
    student: { en: 'Political Science Student', hi: 'राजनीति विज्ञान विद्यार्थी' },
    aspiring_leader: { en: 'Aspiring Political Leader', hi: 'भावी जन-नेता' },
    admin: { en: 'Academy Administrator', hi: 'अकादमी प्रशासक' }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-12 max-w-4xl mx-auto">
      
      {/* Profile Overview Card */}
      <div className="navy-card rounded-3xl p-6 sm:p-8 border border-amber-500/25 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          
          {/* Avatar & Selection */}
          <div className="relative group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-indigo-900/40 border-2 border-amber-400/60 flex items-center justify-center text-4xl sm:text-5xl shadow-xl shadow-amber-500/15">
              <span>{user.avatar || '🏛️'}</span>
            </div>
          </div>

          {/* User Details */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                {isEditingName ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={e => setTempName(e.target.value)}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-amber-400 text-white font-bold text-lg focus:outline-none"
                    />
                    <button
                      onClick={handleSaveName}
                      className="p-1.5 rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-white font-serif">
                      {user.name}
                    </h1>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="text-slate-400 hover:text-amber-400 transition-colors p-1"
                      title="Edit Name"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
              </div>

              {/* Role Switcher Pill */}
              <div className="self-center sm:self-auto">
                <select
                  value={user.role}
                  onChange={e => switchUserRole(e.target.value as UserRole)}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-bold text-xs focus:outline-none cursor-pointer"
                >
                  <option value="citizen">{roleLabels.citizen[language]}</option>
                  <option value="student">{roleLabels.student[language]}</option>
                  <option value="aspiring_leader">{roleLabels.aspiring_leader[language]}</option>
                  <option value="admin">{roleLabels.admin[language]}</option>
                </select>
              </div>
            </div>

            {/* Badges / Metrics */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{user.xp} XP</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-orange-500/30 text-orange-400 text-xs font-bold flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 fill-orange-400" />
                <span>{user.streakDays} {language === 'hi' ? 'दिनों की स्ट्रीक' : 'Days Streak'}</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{user.completedLessons.length} {language === 'hi' ? 'पाठ पूर्ण' : 'Lessons Completed'}</span>
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="navy-card rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'अर्जित डिजिटल प्रमाणपत्र' : 'Earned Digital Certificates'}</span>
          </h3>
          <span className="text-xs text-slate-400">
            {user.certificates.length} {language === 'hi' ? 'प्रमाणपत्र' : 'Issued'}
          </span>
        </div>

        {user.certificates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {user.certificates.map(cert => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)}
                className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-indigo-950/30 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer group flex items-start justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {cert.verificationCode}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cert.courseTitle[language]}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {language === 'hi' ? 'जारी तिथि:' : 'Issued on:'} {cert.issueDate} • {cert.grade}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                  <Award className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">
            {language === 'hi' 
              ? 'कोर्स के सभी पाठ पूरे करने पर यहाँ आपका सत्यापित प्रमाणपत्र दिखाई देगा।' 
              : 'Complete all modules in any level to claim your verified certificate.'}
          </p>
        )}
      </div>

      {/* Saved / Bookmarked Lessons */}
      <div className="navy-card rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'सहेजे गए पाठ (Bookmarked Lessons)' : 'Saved / Bookmarked Lessons'}</span>
          </h3>
          <span className="text-xs text-slate-400">{bookmarkedLessonItems.length} {language === 'hi' ? 'सहेजे' : 'Saved'}</span>
        </div>

        {bookmarkedLessonItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bookmarkedLessonItems.map(lesson => (
              <div
                key={lesson.id}
                onClick={() => {
                  const parentCourse = courses.find(c => c.lessons.some(l => l.id === lesson.id));
                  if (parentCourse) setActiveCourse(parentCourse);
                  setActiveLesson(lesson);
                  setActiveTab('courses');
                }}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/40 transition-colors cursor-pointer group flex items-start justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] text-amber-400 font-bold uppercase">
                    {lesson.category}
                  </span>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {lesson.title[language]}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {lesson.summary[language]}
                  </p>
                </div>
                <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-amber-400 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-400 italic">
            {language === 'hi'
              ? 'किसी भी पाठ को पढ़ते समय बुकमार्क आइकन दबाकर यहाँ सुरक्षित करें।'
              : 'Tap the bookmark icon on any lesson to save it here for quick revision.'}
          </p>
        )}
      </div>

      {/* Completed Lessons Record */}
      <div className="navy-card rounded-2xl p-5 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>{language === 'hi' ? 'सफलतापूर्वक पूर्ण किए गए पाठ' : 'Completed Modules Record'}</span>
          </h3>
          <span className="text-xs font-bold text-emerald-400">
            {completedLessonItems.length} / {allLessons.length}
          </span>
        </div>

        <div className="space-y-2">
          {completedLessonItems.map(lesson => (
            <div
              key={lesson.id}
              onClick={() => {
                const parentCourse = courses.find(c => c.lessons.some(l => l.id === lesson.id));
                if (parentCourse) setActiveCourse(parentCourse);
                setActiveLesson(lesson);
                setActiveTab('courses');
              }}
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 flex items-center justify-between text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-slate-200 hover:text-white">
                  {lesson.title[language]}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase">{lesson.level}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
