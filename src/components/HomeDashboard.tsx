import React from 'react';
import { useApp } from '../context/AppContext';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { 
  BookOpen, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Shield, 
  Crown, 
  Scale, 
  Landmark, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Share2,
  Headphones
} from 'lucide-react';

export const HomeDashboard: React.FC = () => {
  const { 
    language, 
    user, 
    courses, 
    setActiveTab, 
    setActiveCourse, 
    setActiveLesson,
    setIsAiModalOpen,
    claimCertificate
  } = useApp();

  const { playLesson, openAudioMode } = useAudioPlayer();

  // Find next lesson to continue
  const allLessons = courses.flatMap(c => c.lessons);
  const nextLesson = allLessons.find(l => !user.completedLessons.includes(l.id)) || allLessons[0];
  const activeCourse = courses.find(c => c.lessons.some(l => l.id === nextLesson?.id)) || courses[0];

  // Daily featured lesson
  const dailyLesson = courses[0].lessons[0];

  // Calculate overall progress percentage
  const totalLessons = allLessons.length;
  const completedCount = user.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  return (
    <div className="space-y-6 pb-20 md:pb-12">
      
      {/* Hero Welcome & Identity Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1838] via-[#12224d] to-[#0a1226] border border-amber-500/25 p-5 sm:p-7 shadow-2xl">
        {/* Decorative Golden Ambient Circles */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {language === 'hi' 
                  ? 'सत्य, संविधान और निष्पक्ष नागरिक शिक्षा' 
                  : 'Truth, Constitution & Non-Partisan Civic Education'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
              {language === 'hi' ? `जय हिन्द, ${user.name}!` : `Welcome, ${user.name}!`}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-xl leading-relaxed">
              {language === 'hi'
                ? 'राजनीति को एक दर्शक की तरह नहीं, बल्कि एक प्रबुद्ध नागरिक और सक्षम नेता की तरह समझें। शून्य से शिखर तक का सफर शुरू करें।'
                : 'Move from passive spectator to constitutional scholar and ethical civic leader. Your journey from Zero to Pro starts here.'}
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-slate-300 flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                <span>{user.streakDays} {language === 'hi' ? 'दिनों की स्ट्रीक' : 'Days Streak'}</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-amber-500/30 text-amber-300 flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{user.xp} XP</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-slate-300 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{completedCount}/{totalLessons} {language === 'hi' ? 'पाठ पूर्ण' : 'Lessons Done'}</span>
              </span>
            </div>
          </div>

          {/* Quick CTA to AI Teacher */}
          <div className="bg-[#0f1b3b]/90 border border-amber-500/20 rounded-xl p-4 flex flex-col justify-between md:min-w-[260px] shadow-lg">
            <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{language === 'hi' ? '24/7 एआई राजनीतिक शिक्षक' : '24/7 AI Political Teacher'}</span>
            </div>
            <p className="text-xs text-slate-300 mb-3 leading-snug">
              {language === 'hi'
                ? 'संविधान, संसद, या चुनाव से जुड़ा कोई भी कठिन सवाल तुरंत पूछें।'
                : 'Instant non-partisan answers grounded in constitutional law.'}
            </p>
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <span>{language === 'hi' ? 'सवाल पूछें' : 'Ask Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-1.5">
            <span>{language === 'hi' ? 'समग्र राजनीतिक ज्ञान प्रगति' : 'Overall Political Curriculum Progress'}</span>
            <span className="text-amber-300 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 transition-all duration-700 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Grid: Continue Learning + Daily Quiz Card */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Continue Learning Card (7 cols) */}
        <div className="lg:col-span-7 navy-card navy-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center space-x-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'hi' ? 'पढ़ाई जारी रखें' : 'Continue Learning'}</span>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {activeCourse.title[language]}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 leading-snug">
              {nextLesson.title[language]}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
              {nextLesson.summary[language]}
            </p>

            <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{nextLesson.readTimeMinutes} {language === 'hi' ? 'मिनट' : 'mins'}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-[10px] font-semibold uppercase">
                {nextLesson.level}
              </span>
              <span className="text-amber-400 font-semibold">+50 XP</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setActiveCourse(activeCourse);
                setActiveLesson(nextLesson);
                setActiveTab('courses');
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-amber-500/15"
            >
              <span>{language === 'hi' ? 'पाठ शुरू करें' : 'Resume Lesson'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playLesson(nextLesson, activeCourse);
                openAudioMode();
              }}
              className="py-2.5 px-3.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300 hover:text-white font-bold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shadow-sm"
              title="Listen in Audio Mode / चलते-फिरते ऑडियो सुनें"
            >
              <Headphones className="w-4 h-4 text-indigo-400" />
              <span>{language === 'hi' ? 'ऑडियो सुनें' : 'Audio Mode'}</span>
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              {language === 'hi' ? 'सभी कोर्स' : 'All Courses'}
            </button>
          </div>
        </div>

        {/* Daily Quiz of the Day (5 cols) */}
        <div className="lg:col-span-5 navy-card navy-card-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center space-x-1">
                <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
                <span>{language === 'hi' ? 'आज का दैनिक क्विज' : 'Daily Political Quiz'}</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/30">
                +100 XP
              </span>
            </div>

            <h3 className="text-base font-bold text-white mb-2">
              {language === 'hi' ? 'अपनी राजनीतिक समझ की त्वरित जांच करें' : 'Test Your Constitutional Quotient'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {language === 'hi'
                ? '5 वस्तुनिष्ठ प्रश्न जो रोज आपकी संवैधानिक और लोकतांत्रिक समझ को नया निखार देते हैं।'
                : '5 fresh daily questions to maintain your learning streak and climb the national leaderboard.'}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1 mb-4">
              <div className="flex items-center justify-between">
                <span>{language === 'hi' ? 'वर्तमान स्ट्रीक' : 'Current Streak'}:</span>
                <span className="font-bold text-orange-400 flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                  <span>{user.streakDays} {language === 'hi' ? 'दिन' : 'Days'}</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>{language === 'hi' ? 'क्विज हल किए' : 'Quizzes Attempted'}:</span>
                <span className="font-semibold text-white">{Object.keys(user.quizScores).length}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('quiz')}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-orange-500/15"
          >
            <span>{language === 'hi' ? 'क्विज शुरू करें' : 'Start Daily Quiz'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* Structured Courses Level Shortcuts */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif">
              {language === 'hi' ? 'राजनीति सीखने के तीन चरण' : 'Three Structured Learning Levels'}
            </h2>
            <p className="text-xs text-slate-400">
              {language === 'hi' ? 'शुरुआती समझ से लेकर चुनावी रणनीति और नीति निर्माण तक' : 'From zero basics to political strategy and governance'}
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('courses')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
          >
            <span>{language === 'hi' ? 'विस्तार से देखें' : 'View All'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Beginner Level Card */}
          <div 
            onClick={() => {
              setActiveCourse(courses[0]);
              setActiveTab('courses');
            }}
            className="navy-card navy-card-hover rounded-xl p-4 border border-amber-500/20 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                Level 1: Beginner
              </span>
              <span className="text-xs text-slate-400">7 {language === 'hi' ? 'पाठ' : 'Lessons'}</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
              {language === 'hi' ? 'बुनियादी समझ' : 'Foundations of Politics'}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
              {language === 'hi'
                ? 'राजनीति, लोकतंत्र, संविधान, संसद, लोकसभा vs राज्यसभा, विधायक vs सांसद और पंचायती राज।'
                : 'Democracy, Constitution, Parliament, Lok Sabha vs Rajya Sabha, MLA vs MP, and Panchayats.'}
            </p>
            <div className="flex items-center text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>{language === 'hi' ? 'कोर्स खोलें' : 'Explore Course'}</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Intermediate Level Card */}
          <div 
            onClick={() => {
              setActiveCourse(courses[1]);
              setActiveTab('courses');
            }}
            className="navy-card navy-card-hover rounded-xl p-4 border border-indigo-500/20 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
                Level 2: Intermediate
              </span>
              <span className="text-xs text-slate-400">7 {language === 'hi' ? 'पाठ' : 'Lessons'}</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
              {language === 'hi' ? 'चुनाव व शासन व्यवस्था' : 'Elections & Governance'}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
              {language === 'hi'
                ? 'चुनाव कैसे होते हैं, राजनीतिक दल, पीएम व सीएम की भूमिका, सरकार गठन, मौलिक अधिकार, कानून बनना।'
                : 'Elections in India, political parties, PM & CM roles, coalition math, and legislative drafting.'}
            </p>
            <div className="flex items-center text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>{language === 'hi' ? 'कोर्स खोलें' : 'Explore Course'}</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Advanced Level Card */}
          <div 
            onClick={() => {
              setActiveCourse(courses[2]);
              setActiveTab('courses');
            }}
            className="navy-card navy-card-hover rounded-xl p-4 border border-rose-500/20 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3 group-hover:scale-110 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/30">
                Level 3: Advanced
              </span>
              <span className="text-xs text-slate-400">7 {language === 'hi' ? 'पाठ' : 'Lessons'}</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-rose-300 transition-colors">
              {language === 'hi' ? 'रणनीति व जन-नेतृत्व' : 'Strategy & Leadership'}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
              {language === 'hi'
                ? 'वार रूम, बूथ मैनेजमेंट, भाषण कला, प्रेस व पीआर, कम्युनिटी एक्शन, नीति निर्माण और राजनीतिक विचारधाराएं।'
                : 'War rooms, booth strategy, oratory training, speechwriting, media management, and policy design.'}
            </p>
            <div className="flex items-center text-xs font-semibold text-rose-400 group-hover:translate-x-1 transition-transform">
              <span>{language === 'hi' ? 'कोर्स खोलें' : 'Explore Course'}</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

        </div>
      </section>

      {/* Trending Political Topics & Constitutional Library Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Trending Debates */}
        <div className="navy-card rounded-2xl p-5 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2 font-serif">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'चर्चित राजनीतिक विषय (तथ्यपरक)' : 'Trending Political Topics'}</span>
            </h3>
            <button
              onClick={() => setActiveTab('news')}
              className="text-xs text-amber-400 hover:underline cursor-pointer"
            >
              {language === 'hi' ? 'सभी देखें' : 'View All'}
            </button>
          </div>

          <div className="space-y-3">
            <div 
              onClick={() => setActiveTab('news')}
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-amber-400 font-semibold">{language === 'hi' ? 'संसद एवं परिसीमन' : 'Delimitation'}</span>
                <span className="text-slate-400 text-[10px]">2026 Mandate</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200 hover:text-white">
                {language === 'hi' 
                  ? 'परिसीमन आयोग: क्या 2026 के बाद लोकसभा सीटों की संख्या बढ़ेगी?' 
                  : 'Delimitation Commission: Will Lok Sabha seats increase post-2026?'}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {language === 'hi' 
                  ? 'जनसंख्या बनाम संघीय समानता के संवैधानिक तर्कों का निष्पक्ष विश्लेषण।' 
                  : 'Analysis of proportional representation vs federal stability.'}
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('news')}
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-indigo-400 font-semibold">{language === 'hi' ? 'चुनाव सुधार' : 'Electoral Reforms'}</span>
                <span className="text-slate-400 text-[10px]">ECI Transparency</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200 hover:text-white">
                {language === 'hi' 
                  ? 'फॉर्म 17C और EVM-VVPAT की कानूनी प्रमाणिकता' 
                  : 'Form 17C & EVM-VVPAT Statutory Verification'}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {language === 'hi' 
                  ? 'मतदान के दिन पोलिंग एजेंटों को मिलने वाली रसीद कैसे वोटों की सुरक्षा करती है।' 
                  : 'How statutory paper records guarantee vote integrity on polling day.'}
              </p>
            </div>

            <div 
              onClick={() => setActiveTab('news')}
              className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-emerald-400 font-semibold">{language === 'hi' ? 'संवैधानिक बहस' : 'Constitution'}</span>
                <span className="text-slate-400 text-[10px]">Simultaneous Polls</span>
              </div>
              <h4 className="text-xs font-bold text-slate-200 hover:text-white">
                {language === 'hi' 
                  ? 'एक राष्ट्र, एक चुनाव: पक्ष और विपक्ष के मुख्य कानूनी तर्क' 
                  : 'One Nation One Election: Arguments Pro and Con'}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {language === 'hi' 
                  ? 'राजकोषीय बचत बनाम राज्यों की स्वायत्तता का तुलनात्मक अध्ययन।' 
                  : 'Comparing fiscal savings with state legislative autonomy.'}
              </p>
            </div>
          </div>
        </div>

        {/* Indian Constitution Library Preview */}
        <div className="navy-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center space-x-2 font-serif">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'संविधान वाचनालय' : 'Constitution Library'}</span>
              </h3>
              <button
                onClick={() => setActiveTab('constitution')}
                className="text-xs text-amber-400 hover:underline cursor-pointer"
              >
                {language === 'hi' ? 'पूरा देखें' : 'Explore'}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                {language === 'hi' ? 'संविधान की प्रस्तावना' : 'The Preamble'}
              </span>
              <p className="text-xs text-amber-100/90 font-serif italic mt-1 leading-relaxed">
                {language === 'hi'
                  ? '"हम, भारत के लोग, भारत को एक सम्पूर्ण प्रभुत्व-सम्पन्न, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक गणराज्य बनाने के लिए..."'
                  : '"WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC..."'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div 
                onClick={() => setActiveTab('constitution')}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 cursor-pointer"
              >
                <span className="font-bold text-amber-300">Article 14 & 19</span>
                <p className="text-[11px] text-slate-400 truncate">{language === 'hi' ? 'समानता व 6 स्वतंत्रताएं' : 'Equality & 6 Freedoms'}</p>
              </div>
              <div 
                onClick={() => setActiveTab('constitution')}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 cursor-pointer"
              >
                <span className="font-bold text-amber-300">Article 21 & 32</span>
                <p className="text-[11px] text-slate-400 truncate">{language === 'hi' ? 'जीवन का अधिकार व 5 रिट' : 'Right to Life & 5 Writs'}</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('constitution')}
            className="w-full mt-4 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>{language === 'hi' ? 'संविधान पुस्तकालय खोलें' : 'Browse All Articles & Landmark Cases'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </section>

      {/* On-The-Go Audio Learning Spotlight Banner */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-[#0b1636] border border-indigo-500/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shrink-0">
            <Headphones className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {language === 'hi' ? 'नया फीचर' : 'New Feature'}
              </span>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? 'ऑन-द-गो ऑडियो मोड: चलते-फिरते राजनीति सीखें' : 'On-The-Go Audio Mode: Commute & Walk'}
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              {language === 'hi'
                ? 'ब्राउज़र के Web Speech API से संविधान और राजनीति के सभी 21 पाठ बिना स्क्रीन देखे आवाज में सुनें। स्क्रीन वेक-लॉक और ऑटो-प्ले समर्थित।'
                : 'Listen to all 21 political education modules hands-free while walking, driving, or commuting with continuous playback.'}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            playLesson(nextLesson, activeCourse);
            openAudioMode();
          }}
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer shrink-0"
        >
          <Headphones className="w-4 h-4" />
          <span>{language === 'hi' ? 'ऑडियो मोड शुरू करें' : 'Launch Audio Mode'}</span>
        </button>
      </section>

      {/* Leadership Hub Teaser */}
      <section className="rounded-2xl bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-indigo-900/30 border border-amber-500/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {language === 'hi' ? 'क्या आप भविष्य के राजनीतिक नेता बनना चाहते हैं?' : 'Aspiring to Enter Public Life & Politics?'}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {language === 'hi'
                ? 'भाषण लेखन टूल, जनसभा प्रबंधन और जमीनी जन-संगठन का विशेष लीडरशिप हब देखें।'
                : 'Access our practical political speechwriter, rally checklist, and community action blueprints.'}
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('leadership')}
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
        >
          <span>{language === 'hi' ? 'लीडरशिप हब खोलें' : 'Open Leadership Hub'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
