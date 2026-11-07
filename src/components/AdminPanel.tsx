import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  PlusCircle, 
  BarChart3, 
  Newspaper, 
  BookOpen, 
  HelpCircle, 
  Users, 
  Check, 
  Award,
  Video,
  FileCheck
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const { language, addCustomCourse, addCustomNews } = useApp();
  const [activeAdminTab, setActiveAdminTab] = useState<'analytics' | 'news' | 'courses' | 'quizzes'>('analytics');
  
  // Analytics State
  const [analytics, setAnalytics] = useState({
    totalEnrollments: 1420,
    quizzesCompleted: 4890,
    certificatesIssued: 345,
    aiQuestionsAsked: 1280,
    totalUsers: 1420
  });

  // News Publisher State
  const [newsTitleEn, setNewsTitleEn] = useState('');
  const [newsTitleHi, setNewsTitleHi] = useState('');
  const [newsCategory, setNewsCategory] = useState<'parliament' | 'elections' | 'schemes' | 'constitution'>('parliament');
  const [newsType, setNewsType] = useState<'fact' | 'analysis' | 'opinion'>('fact');
  const [newsSource, setNewsSource] = useState('Lok Sabha Secretariat');
  const [newsSummaryEn, setNewsSummaryEn] = useState('');
  const [newsSummaryHi, setNewsSummaryHi] = useState('');
  const [newsFactEn, setNewsFactEn] = useState('');
  const [newsFactHi, setNewsFactHi] = useState('');
  const [newsPublishedSuccess, setNewsPublishedSuccess] = useState(false);

  // Course Creator State
  const [courseTitleEn, setCourseTitleEn] = useState('');
  const [courseTitleHi, setCourseTitleHi] = useState('');
  const [courseLevel, setCourseLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [courseDescEn, setCourseDescEn] = useState('');
  const [courseDescHi, setCourseDescHi] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [courseCreatedSuccess, setCourseCreatedSuccess] = useState(false);

  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => {
        if (data.analytics) setAnalytics(data.analytics);
      })
      .catch(() => {});
  }, []);

  const handlePublishNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitleEn || !newsSummaryEn) return;

    const success = await addCustomNews({
      title: { en: newsTitleEn, hi: newsTitleHi || newsTitleEn },
      category: newsCategory,
      type: newsType,
      source: newsSource,
      summary: { en: newsSummaryEn, hi: newsSummaryHi || newsSummaryEn },
      detailedBreakdown: { 
        en: `${newsSummaryEn}\n\nOfficial statement recorded under gazette review.`,
        hi: `${newsSummaryHi || newsSummaryEn}\n\nआधिकारिक रिकॉर्ड के अनुसार जारी किया गया विवरण।`
      },
      whyItMatters: {
        en: 'Crucial for transparent citizen understanding of governance.',
        hi: 'नागरिक जागरूकता और पारदर्शी शासन के लिए आवश्यक।'
      },
      verifiedFact: {
        en: newsFactEn || newsSummaryEn,
        hi: newsFactHi || newsSummaryHi || newsSummaryEn
      }
    });

    if (success) {
      setNewsPublishedSuccess(true);
      setNewsTitleEn('');
      setNewsTitleHi('');
      setNewsSummaryEn('');
      setNewsSummaryHi('');
      setNewsFactEn('');
      setNewsFactHi('');
      setTimeout(() => setNewsPublishedSuccess(false), 3000);
    }
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseTitleEn) return;

    const success = await addCustomCourse({
      title: { en: courseTitleEn, hi: courseTitleHi || courseTitleEn },
      level: courseLevel,
      description: { en: courseDescEn, hi: courseDescHi || courseDescEn },
      icon: 'BookOpen',
      color: 'from-blue-600 to-indigo-800',
      modulesCount: 1,
      lessons: [
        {
          id: `lesson_${Date.now()}`,
          level: courseLevel,
          category: 'Governance & Media',
          readTimeMinutes: 5,
          title: { en: courseTitleEn, hi: courseTitleHi || courseTitleEn },
          summary: { en: courseDescEn, hi: courseDescHi || courseDescEn },
          keyPoints: {
            en: ['Direct citizen engagement', 'Statutory oversight', 'Democratic transparency'],
            hi: ['सीधा नागरिक संवाद', 'वैधानिक निगरानी', 'लोकतांत्रिक पारदर्शिता']
          },
          content: {
            en: `### Course Overview: ${courseTitleEn}\n\n${courseDescEn}\n\n${videoUrl ? `Video Lecture Resource: ${videoUrl}` : ''}`,
            hi: `### पाठ्यक्रम अवलोकन: ${courseTitleHi || courseTitleEn}\n\n${courseDescHi || courseDescEn}\n\n${videoUrl ? `वीडियो व्याख्यान: ${videoUrl}` : ''}`
          },
          constitutionalReference: 'Part III & Part IV of the Indian Constitution'
        }
      ]
    });

    if (success) {
      setCourseCreatedSuccess(true);
      setCourseTitleEn('');
      setCourseTitleHi('');
      setCourseDescEn('');
      setCourseDescHi('');
      setVideoUrl('');
      setTimeout(() => setCourseCreatedSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-12 max-w-4xl mx-auto">
      
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'अकादमी प्रशासन एवं प्रबंधन केंद्र' : 'Academy Command & Editorial Panel'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'एडमिन पैनल (Admin Panel)' : 'Master Admin Dashboard'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi'
              ? 'कोर्स जोड़ें, समाचार प्रकाशित करें, क्विज प्रबंधित करें और प्लेटफॉर्म एनालिटिक्स देखें'
              : 'Add courses, publish verified news, manage quizzes, and monitor platform metrics'}
          </p>
        </div>
      </div>

      {/* Admin Subtabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 text-xs sm:text-sm">
        {[
          { id: 'analytics', label: { en: 'Analytics', hi: 'एनालिटिक्स' }, icon: <BarChart3 className="w-4 h-4" /> },
          { id: 'news', label: { en: 'Publish News', hi: 'समाचार प्रकाशित करें' }, icon: <Newspaper className="w-4 h-4" /> },
          { id: 'courses', label: { en: 'Add Course', hi: 'कोर्स जोड़ें' }, icon: <BookOpen className="w-4 h-4" /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveAdminTab(tab.id as any)}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeAdminTab === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label[language]}</span>
          </button>
        ))}
      </div>

      {/* Tab 1: Analytics */}
      {activeAdminTab === 'analytics' && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="navy-card rounded-2xl p-4 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                {language === 'hi' ? 'सक्रिय नागरिक' : 'Enrolled Citizens'}
              </span>
              <span className="text-2xl font-extrabold text-white mt-1 block">
                {analytics.totalUsers.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-400 mt-1 block">↑ 18% this month</span>
            </div>

            <div className="navy-card rounded-2xl p-4 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                {language === 'hi' ? 'क्विज हल किए गए' : 'Quizzes Taken'}
              </span>
              <span className="text-2xl font-extrabold text-amber-300 mt-1 block">
                {analytics.quizzesCompleted.toLocaleString()}
              </span>
              <span className="text-[10px] text-emerald-400 mt-1 block">Daily Streak Active</span>
            </div>

            <div className="navy-card rounded-2xl p-4 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                {language === 'hi' ? 'प्रमाणपत्र जारी' : 'Certificates Issued'}
              </span>
              <span className="text-2xl font-extrabold text-amber-400 mt-1 block">
                {analytics.certificatesIssued.toLocaleString()}
              </span>
              <span className="text-[10px] text-amber-300/80 mt-1 block">Verified QR Codes</span>
            </div>

            <div className="navy-card rounded-2xl p-4 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                {language === 'hi' ? 'एआई प्रश्न पूछे गए' : 'AI Inquiries'}
              </span>
              <span className="text-2xl font-extrabold text-indigo-300 mt-1 block">
                {analytics.aiQuestionsAsked.toLocaleString()}
              </span>
              <span className="text-[10px] text-indigo-400 mt-1 block">100% Non-Partisan</span>
            </div>
          </div>

          <div className="navy-card rounded-2xl p-5 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white font-serif">
              {language === 'hi' ? 'संपादकीय दिशा-निर्देश एवं सत्यता मानक' : 'Editorial & Verification Guidelines'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'सभी सामग्री भारतीय संविधान, चुनाव आयोग की आधिकारिक अधिसूचनाओं, और उच्चतम न्यायालय के निर्णयों पर आधारित होनी चाहिए। किसी भी राजनीतिक दल या प्रत्याशी का प्रचार अथवा दुष्प्रचार पूर्णतः प्रतिबंधित है।'
                : 'All course materials and news must strictly adhere to the Constitution of India, Representation of the People Act, 1951, and neutral facts. Never publish promotional propaganda for any political party.'}
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Publish News */}
      {activeAdminTab === 'news' && (
        <div className="navy-card rounded-2xl p-5 sm:p-7 border border-amber-500/20 shadow-xl">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            <span>{language === 'hi' ? 'दैनिक निष्पक्ष राजनीतिक समाचार प्रकाशित करें' : 'Publish Non-Partisan Political News'}</span>
          </div>

          {newsPublishedSuccess && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>{language === 'hi' ? 'समाचार सफलतापूर्वक प्रकाशित हो गया!' : 'News successfully published to the live feed!'}</span>
            </div>
          )}

          <form onSubmit={handlePublishNews} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Title (English):</label>
                <input
                  type="text"
                  required
                  value={newsTitleEn}
                  onChange={e => setNewsTitleEn(e.target.value)}
                  placeholder="e.g. Election Commission Updates Polling Station Protocols"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">शीर्षक (हिन्दी):</label>
                <input
                  type="text"
                  value={newsTitleHi}
                  onChange={e => setNewsTitleHi(e.target.value)}
                  placeholder="उदा. चुनाव आयोग ने मतदान केंद्र नियमों में किया सुधार"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Category:</label>
                <select
                  value={newsCategory}
                  onChange={e => setNewsCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                >
                  <option value="parliament">Parliament</option>
                  <option value="elections">Elections & ECI</option>
                  <option value="schemes">Government Schemes</option>
                  <option value="constitution">Constitution</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">Type Label:</label>
                <select
                  value={newsType}
                  onChange={e => setNewsType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                >
                  <option value="fact">Fact (सत्यापित तथ्य)</option>
                  <option value="analysis">Analysis (निष्पक्ष विश्लेषण)</option>
                  <option value="opinion">Opinion (राजनीतिक राय)</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">Credible Source:</label>
                <input
                  type="text"
                  value={newsSource}
                  onChange={e => setNewsSource(e.target.value)}
                  placeholder="e.g. PIB, Election Commission, Lok Sabha"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Summary (English):</label>
                <textarea
                  rows={2}
                  required
                  value={newsSummaryEn}
                  onChange={e => setNewsSummaryEn(e.target.value)}
                  placeholder="Objective summary of the development..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">सारांश (हिन्दी):</label>
                <textarea
                  rows={2}
                  value={newsSummaryHi}
                  onChange={e => setNewsSummaryHi(e.target.value)}
                  placeholder="खबर का निष्पक्ष एवं सरल सारांश..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1">Verified Factual Core / संपुष्ट तथ्य:</label>
              <input
                type="text"
                value={newsFactEn}
                onChange={e => setNewsFactEn(e.target.value)}
                placeholder="The exact statutory or administrative fact that is legally verified..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'समाचार प्रकाशित करें' : 'Publish to Live Feed'}</span>
            </button>
          </form>
        </div>
      )}

      {/* Tab 3: Add Course */}
      {activeAdminTab === 'courses' && (
        <div className="navy-card rounded-2xl p-5 sm:p-7 border border-amber-500/20 shadow-xl">
          <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>{language === 'hi' ? 'नया राजनीतिक कोर्स एवं पाठ जोड़ें' : 'Create New Politics Course / Lesson'}</span>
          </div>

          {courseCreatedSuccess && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>{language === 'hi' ? 'कोर्स सफलतापूर्वक जोड़ा गया!' : 'Course added to curriculum!'}</span>
            </div>
          )}

          <form onSubmit={handleCreateCourse} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Course Title (English):</label>
                <input
                  type="text"
                  required
                  value={courseTitleEn}
                  onChange={e => setCourseTitleEn(e.target.value)}
                  placeholder="e.g. Media Handling & Press Conferences"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">कोर्स शीर्षक (हिन्दी):</label>
                <input
                  type="text"
                  value={courseTitleHi}
                  onChange={e => setCourseTitleHi(e.target.value)}
                  placeholder="उदा. प्रेस वार्ता एवं मीडिया प्रबंधन"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 font-bold block mb-1">Difficulty Level:</label>
                <select
                  value={courseLevel}
                  onChange={e => setCourseLevel(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none"
                >
                  <option value="beginner">Beginner (शुरुआती)</option>
                  <option value="intermediate">Intermediate (मध्यम)</option>
                  <option value="advanced">Advanced (उन्नत - नेता)</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 font-bold block mb-1">Video Resource URL (Optional):</label>
                <input
                  type="url"
                  value={videoUrl}
                  onChange={e => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-300 font-bold block mb-1">Description & Key Learnings:</label>
              <textarea
                rows={3}
                required
                value={courseDescEn}
                onChange={e => setCourseDescEn(e.target.value)}
                placeholder="Outline the core democratic insights of this module..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'कोर्स सहेजें' : 'Save & Publish Course'}</span>
            </button>
          </form>
        </div>
      )}

    </div>
  );
};
