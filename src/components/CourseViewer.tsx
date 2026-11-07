import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Course, Lesson, CourseLevel } from '../types';
import { 
  BookOpen, 
  CheckCircle, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  Award, 
  HelpCircle, 
  Clock, 
  Search, 
  Scale, 
  Landmark, 
  Crown,
  Sparkles,
  Headphones,
  Play,
  Pause,
  Maximize2
} from 'lucide-react';

export const CourseViewer: React.FC = () => {
  const { 
    language, 
    courses, 
    activeCourse, 
    setActiveCourse, 
    activeLesson, 
    setActiveLesson,
    user,
    completeLesson,
    toggleBookmark,
    claimCertificate,
    setSelectedCertificate
  } = useApp();

  const {
    playLesson,
    currentLesson: audioLesson,
    isPlaying: isAudioPlaying,
    togglePlayPause,
    openAudioMode
  } = useAudioPlayer();

  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [hasAnsweredQuiz, setHasAnsweredQuiz] = useState(false);
  const [showCertificateBanner, setShowCertificateBanner] = useState(false);

  useEffect(() => {
    setSelectedQuizOption(null);
    setHasAnsweredQuiz(false);
  }, [activeLesson]);

  // Filter courses by level
  const filteredCourses = courses.filter(c => {
    const matchesLevel = selectedLevel === 'all' || c.level === selectedLevel;
    const matchesSearch = searchQuery === '' || 
      c.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lessons.some(l => l.title[language].toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLevel && matchesSearch;
  });

  // Handle lesson completion
  const handleCompleteCurrentLesson = () => {
    if (activeLesson) {
      completeLesson(activeLesson.id, 50);
      if (activeCourse) {
        const remaining = activeCourse.lessons.filter(l => l.id !== activeLesson.id && !user.completedLessons.includes(l.id));
        if (remaining.length === 0) {
          setShowCertificateBanner(true);
        }
      }
    }
  };

  // If a specific lesson is active, render the dedicated Lesson Reading Room
  if (activeLesson) {
    const isCompleted = user.completedLessons.includes(activeLesson.id);
    const isBookmarked = user.bookmarkedLessons.includes(activeLesson.id);
    const isThisLessonPlaying = audioLesson?.id === activeLesson.id && isAudioPlaying;
    
    // Find previous and next lessons within current course
    const currentCourseLessons = activeCourse ? activeCourse.lessons : courses[0].lessons;
    const currentIndex = currentCourseLessons.findIndex(l => l.id === activeLesson.id);
    const prevLesson = currentIndex > 0 ? currentCourseLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < currentCourseLessons.length - 1 ? currentCourseLessons[currentIndex + 1] : null;

    return (
      <div className="space-y-6 pb-28 md:pb-16 max-w-4xl mx-auto">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <button
            onClick={() => setActiveLesson(null)}
            className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'कोर्स पर वापस जाएं' : 'Back to Curriculum'}</span>
          </button>

          <div className="flex items-center space-x-2">
            
            {/* Audio Mode Action Button */}
            <button
              onClick={() => {
                if (audioLesson?.id === activeLesson.id) {
                  openAudioMode();
                } else {
                  playLesson(activeLesson, activeCourse || undefined);
                  openAudioMode();
                }
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-indigo-500/20 border border-amber-400/40 text-amber-300 hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              title="Launch On-The-Go Audio Mode"
            >
              <Headphones className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{language === 'hi' ? 'ऑडियो मोड (Commute)' : 'Audio Mode'}</span>
            </button>

            {/* Quick Play/Pause Button */}
            <button
              onClick={() => {
                if (audioLesson?.id === activeLesson.id) {
                  togglePlayPause();
                } else {
                  playLesson(activeLesson, activeCourse || undefined);
                }
              }}
              className={`p-2 rounded-lg border text-xs flex items-center space-x-1.5 transition-all cursor-pointer ${
                isThisLessonPlaying 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' 
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
              }`}
              title={isThisLessonPlaying ? 'Pause Audio' : 'Listen with Web Speech API'}
            >
              {isThisLessonPlaying ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              <span className="hidden sm:inline">
                {isThisLessonPlaying 
                  ? (language === 'hi' ? 'रोकें' : 'Pause') 
                  : (language === 'hi' ? 'ऑडियो सुनें' : 'Listen')}
              </span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark(activeLesson.id)}
              className={`p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' 
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
              title="Bookmark Lesson"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Audio Mode Hero Banner inside Lesson */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0d1c44] via-[#091430] to-[#060c1d] border border-amber-500/30 flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center space-x-1.5">
                <span>{language === 'hi' ? 'चलते-फिरते सुनें: ऑन-द-गो ऑडियो मोड' : 'Hands-Free Audio Mode (Commute Ready)'}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                  TTS
                </span>
              </h4>
              <p className="text-[11px] text-slate-300 mt-0.5">
                {language === 'hi'
                  ? 'ड्राइविंग, वॉक या यात्रा के दौरान पूरे पाठ को आवाज में सुनें। स्क्रीन वेक-लॉक और ऑटो-प्ले समर्थित।'
                  : 'Listen hands-free while walking or commuting with auto-advance and screen wake-lock.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playLesson(activeLesson, activeCourse || undefined);
              openAudioMode();
            }}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 shrink-0 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span className="hidden sm:inline">{language === 'hi' ? 'ऑडियो प्लेयर खोलें' : 'Open Audio Player'}</span>
            <span className="sm:hidden">{language === 'hi' ? 'प्लेयर' : 'Play'}</span>
          </button>
        </div>

        {/* Lesson Header Card */}
        <div className="navy-card rounded-2xl p-5 sm:p-7 border border-amber-500/20 shadow-xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
              {activeLesson.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{activeLesson.readTimeMinutes} {language === 'hi' ? 'मिनट पाठ' : 'mins read'}</span>
            </span>
            {isCompleted && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>{language === 'hi' ? 'पूर्ण' : 'Completed'}</span>
              </span>
            )}
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-serif mb-3">
            {activeLesson.title[language]}
          </h1>

          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed bg-amber-500/5 border-l-4 border-amber-400 p-3 rounded-r-lg">
            {activeLesson.summary[language]}
          </p>
        </div>

        {/* Key Takeaways Box */}
        <div className="navy-card rounded-xl p-5 border border-slate-800">
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'मुख्य सीख (Key Points)' : 'Core Insights to Remember'}</span>
          </h3>
          <ul className="space-y-2">
            {activeLesson.keyPoints[language].map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deep Constitutional Content */}
        <div className="navy-card rounded-2xl p-5 sm:p-7 border border-slate-800 space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
          <div className="whitespace-pre-line prose prose-invert max-w-none">
            {activeLesson.content[language]}
          </div>

          {/* Constitutional Reference Badge */}
          {activeLesson.constitutionalReference && (
            <div className="mt-5 p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-start space-x-3">
              <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  {language === 'hi' ? 'संवैधानिक एवं विधिक संदर्भ' : 'Constitutional & Legal Foundation'}
                </span>
                <span className="text-xs text-slate-300">
                  {activeLesson.constitutionalReference}
                </span>
              </div>
            </div>
          )}

          {/* Real-World Citizen Example */}
          {activeLesson.practicalExample && (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start space-x-3">
              <Landmark className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                  {language === 'hi' ? 'दैनिक जीवन में वास्तविक उदाहरण' : 'Real-World Practical Example'}
                </span>
                <span className="text-xs text-indigo-100">
                  {activeLesson.practicalExample[language]}
                </span>
              </div>
            </div>
          )}

          {/* Pro Leadership Tip */}
          {activeLesson.proTip && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start space-x-3">
              <Crown className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  {language === 'hi' ? 'नेताओं और प्रबुद्ध नागरिकों के लिए प्रो टिप' : 'Leadership & Pro Insight'}
                </span>
                <span className="text-xs text-amber-200/90">
                  {activeLesson.proTip[language]}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Checkpoint Quiz */}
        {activeLesson.quizQuestion && (
          <div className="navy-card rounded-2xl p-5 border border-amber-500/20 shadow-lg">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'ज्ञान जांच चेकपॉइंट' : 'Knowledge Checkpoint Quiz'}</span>
            </div>

            <h4 className="text-base font-bold text-white mb-3">
              {activeLesson.quizQuestion.question[language]}
            </h4>

            <div className="space-y-2 mb-3">
              {activeLesson.quizQuestion.options[language].map((option, idx) => {
                const isSelected = selectedQuizOption === idx;
                const isCorrect = idx === activeLesson.quizQuestion?.correctIndex;
                let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                if (hasAnsweredQuiz) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  }
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-300';
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnsweredQuiz}
                    onClick={() => {
                      setSelectedQuizOption(idx);
                      setHasAnsweredQuiz(true);
                      if (idx === activeLesson.quizQuestion?.correctIndex) {
                        handleCompleteCurrentLesson();
                      }
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {hasAnsweredQuiz && isCorrect && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {hasAnsweredQuiz && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-amber-400 block mb-1">
                  {language === 'hi' ? 'संवैधानिक व्याख्या:' : 'Explanation:'}
                </span>
                <p>{activeLesson.quizQuestion.explanation[language]}</p>
              </div>
            )}
          </div>
        )}

        {/* Action Button: Mark Completed */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <button
            onClick={handleCompleteCurrentLesson}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>
              {isCompleted
                ? (language === 'hi' ? 'पाठ पूर्ण हो चुका है (+50 XP)' : 'Lesson Completed (+50 XP)')
                : (language === 'hi' ? 'पाठ पूर्ण चिह्नित करें (+50 XP)' : 'Mark Lesson as Completed (+50 XP)')}
            </span>
          </button>

          {/* Next / Previous Buttons */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            {prevLesson && (
              <button
                onClick={() => setActiveLesson(prevLesson)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center justify-center space-x-1 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'hi' ? 'पिछला पाठ' : 'Previous'}</span>
              </button>
            )}

            {nextLesson && (
              <button
                onClick={() => setActiveLesson(nextLesson)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-md shadow-amber-500/15"
              >
                <span>{language === 'hi' ? 'अगला पाठ' : 'Next Lesson'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Certificate Ready Modal Banner */}
        {showCertificateBanner && activeCourse && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-indigo-900/30 border border-amber-400/50 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Award className="w-10 h-10 text-amber-400 animate-bounce" />
              <div>
                <h4 className="text-base font-bold text-white">
                  {language === 'hi' ? 'बधाई! आपने इस स्तर के सभी पाठ पूरे कर लिए हैं!' : 'Congratulations! You completed all lessons!'}
                </h4>
                <p className="text-xs text-amber-200">
                  {language === 'hi' ? 'अपना आधिकारिक राजनीति अकादमी प्रमाणपत्र तुरंत प्राप्त करें।' : 'Your official verified certificate is ready to claim.'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                const cert = claimCertificate(activeCourse.id);
                if (cert) setSelectedCertificate(cert);
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-all shadow-lg shadow-amber-400/20 cursor-pointer whitespace-nowrap"
            >
              <Award className="w-4 h-4" />
              <span>{language === 'hi' ? 'प्रमाणपत्र प्राप्त करें' : 'Claim Certificate'}</span>
            </button>
          </div>
        )}

      </div>
    );
  }

  // Curriculum Overview View
  return (
    <div className="space-y-6 pb-24 md:pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'राजनीति शिक्षण पाठ्यक्रम' : 'Politics Learning Curriculum'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi' 
              ? 'शून्य स्तर से लेकर चुनावी रणनीति और नीति निर्माण तक के 21 संरचित पाठ — टेक्स्ट और ऑडियो दोनों में उपलब्ध' 
              : '21 comprehensive modules from foundations to campaign management — available in text and Web Speech audio mode'}
          </p>
        </div>

        {/* Action Shortcuts */}
        <div className="flex items-center space-x-2 self-start sm:self-auto">
          {audioLesson && (
            <button
              onClick={openAudioMode}
              className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'ऑडियो प्लेयर' : 'Audio Player'}</span>
            </button>
          )}

          <button
            onClick={() => {
              const cert = user.certificates[0] || claimCertificate(courses[0].id);
              if (cert) setSelectedCertificate(cert);
            }}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/40 text-amber-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-amber-500/10"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'मेरा प्रमाणपत्र' : 'View Certificates'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Level Filters */}
        <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          {[
            { id: 'all', label: { en: 'All Levels', hi: 'सभी स्तर' } },
            { id: 'beginner', label: { en: 'Beginner', hi: 'शुरुआती' } },
            { id: 'intermediate', label: { en: 'Intermediate', hi: 'मध्यम' } },
            { id: 'advanced', label: { en: 'Advanced', hi: 'उन्नत (नेता)' } },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedLevel(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                selectedLevel === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label[language]}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'पाठ या विषय खोजें...' : 'Search lessons or topics...'}
            className="w-full sm:w-64 pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-6">
        {filteredCourses.map((course) => {
          const completedInCourse = course.lessons.filter(l => user.completedLessons.includes(l.id)).length;
          const coursePercent = Math.round((completedInCourse / course.lessons.length) * 100);

          return (
            <div 
              key={course.id}
              className="navy-card rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl"
            >
              {/* Course Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {course.level} Level
                    </span>
                    <span className="text-xs text-slate-400">
                      {course.lessons.length} {language === 'hi' ? 'पाठ' : 'Modules'}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white font-serif">
                    {course.title[language]}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 max-w-2xl">
                    {course.description[language]}
                  </p>
                </div>

                {/* Progress & Claim Cert */}
                <div className="sm:text-right shrink-0">
                  <div className="text-xs font-semibold text-slate-400 mb-1">
                    {completedInCourse} / {course.lessons.length} {language === 'hi' ? 'पूर्ण' : 'Completed'} ({coursePercent}%)
                  </div>
                  <div className="w-36 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${coursePercent}%` }}
                    />
                  </div>
                  {coursePercent === 100 && (
                    <button
                      onClick={() => {
                        const cert = claimCertificate(course.id);
                        if (cert) setSelectedCertificate(cert);
                      }}
                      className="mt-2 text-xs font-bold text-amber-300 hover:text-white flex items-center space-x-1 cursor-pointer sm:justify-end"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'hi' ? 'प्रमाणपत्र देखें' : 'View Certificate'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Lessons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {course.lessons.map((lesson, idx) => {
                  const isDone = user.completedLessons.includes(lesson.id);
                  const isSaved = user.bookmarkedLessons.includes(lesson.id);
                  const isCurrentlyPlaying = audioLesson?.id === lesson.id && isAudioPlaying;

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-xl border transition-all flex items-start justify-between group ${
                        isCurrentlyPlaying
                          ? 'bg-amber-500/10 border-amber-400 shadow-md shadow-amber-500/10'
                          : isDone
                            ? 'bg-slate-900/40 border-slate-800/80 hover:border-amber-500/30'
                            : 'bg-slate-900/90 border-slate-800 hover:border-amber-400/50 hover:bg-slate-800/70'
                      }`}
                    >
                      {/* Left: Click to Open Lesson Text */}
                      <div 
                        onClick={() => {
                          setActiveCourse(course);
                          setActiveLesson(lesson);
                        }}
                        className="space-y-1.5 flex-1 pr-3 cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold flex items-center justify-center group-hover:border-amber-500/40">
                            {idx + 1}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {lesson.readTimeMinutes} {language === 'hi' ? 'मिनट' : 'mins'}
                          </span>
                          {isSaved && (
                            <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          )}
                        </div>

                        <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                          {lesson.title[language]}
                        </h3>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {lesson.summary[language]}
                        </p>
                      </div>

                      {/* Right Controls: Audio Mode Launcher & Open Lesson */}
                      <div className="shrink-0 flex items-center space-x-2">
                        
                        {/* Audio Mode Listen Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playLesson(lesson, course);
                            openAudioMode();
                          }}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                            isCurrentlyPlaying
                              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/25 animate-pulse'
                              : 'bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border-amber-500/30'
                          }`}
                          title="Listen in Audio Mode / ऑडियो सुनें"
                        >
                          <Headphones className="w-4 h-4" />
                        </button>

                        {/* Open Lesson Text */}
                        <button
                          onClick={() => {
                            setActiveCourse(course);
                            setActiveLesson(lesson);
                          }}
                          className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-slate-700 text-slate-400 flex items-center justify-center transition-colors cursor-pointer"
                          title="Read Lesson"
                        >
                          {isDone ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
