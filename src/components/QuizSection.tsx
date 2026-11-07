import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DAILY_QUIZ_QUESTIONS, CATEGORY_TESTS } from '../data/quizzesData';
import { QuizQuestion, QuizTest } from '../types';
import { 
  HelpCircle, 
  Flame, 
  Award, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  ShieldCheck, 
  Clock, 
  Scale
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const { language, user, recordQuizScore, setActiveTab } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'daily' | 'tests' | 'leaderboard'>('daily');
  
  // Daily Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Active Category Test State
  const [activeTest, setActiveTest] = useState<QuizTest | null>(null);
  const [testQuestionIndex, setTestQuestionIndex] = useState(0);
  const [testSelectedAnswer, setTestSelectedAnswer] = useState<number | null>(null);
  const [testShowExplanation, setTestShowExplanation] = useState(false);
  const [testScore, setTestScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);

  // Leaderboard data
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        if (data.leaderboard) setLeaderboard(data.leaderboard);
      })
      .catch(() => {});
  }, [user.xp]);

  const currentDailyQ = DAILY_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectDailyAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === currentDailyQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextDailyQuestion = () => {
    if (currentQuestionIndex < DAILY_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
      recordQuizScore('daily_quiz', score + (selectedAnswer === currentDailyQ.correctIndex ? 1 : 0), DAILY_QUIZ_QUESTIONS.length);
    }
  };

  const resetDailyQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6 pb-20 md:pb-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-2">
            <Flame className="w-3.5 h-3.5 fill-orange-400" />
            <span>{language === 'hi' ? `${user.streakDays} दिनों की दैनिक स्ट्रीक` : `${user.streakDays} Days Daily Learning Streak`}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'क्विज एवं राजनीतिक ज्ञान परीक्षा' : 'Quizzes & Political Assessments'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi'
              ? 'दैनिक प्रश्नोत्तरी, संविधान परीक्षा और राष्ट्रीय लीडरबोर्ड'
              : 'Daily MCQs, category mastery tests, and citizen leaderboard'}
          </p>
        </div>

        {/* Total XP Score Box */}
        <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
              {language === 'hi' ? 'कुल अर्जित अंक' : 'Total XP Score'}
            </span>
            <span className="text-lg font-bold text-amber-300">
              {user.xp} XP
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 text-xs sm:text-sm">
        {[
          { id: 'daily', label: { en: 'Daily Quiz Challenge', hi: 'आज का दैनिक क्विज' } },
          { id: 'tests', label: { en: 'Category Master Tests', hi: 'विशेष विषय परीक्षाएं' } },
          { id: 'leaderboard', label: { en: 'National Leaderboard', hi: 'राष्ट्रीय लीडरबोर्ड' } },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeSubTab === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>

      {/* Tab 1: Daily Quiz */}
      {activeSubTab === 'daily' && (
        <div className="space-y-4">
          {!quizFinished ? (
            <div className="navy-card rounded-2xl p-5 sm:p-7 border border-amber-500/20 shadow-2xl">
              
              {/* Progress & Category */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  {currentDailyQ.category}
                </span>
                <div className="text-xs font-bold text-amber-400">
                  {language === 'hi' ? `प्रश्न ${currentQuestionIndex + 1} / ${DAILY_QUIZ_QUESTIONS.length}` : `Question ${currentQuestionIndex + 1} of ${DAILY_QUIZ_QUESTIONS.length}`}
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
                {currentDailyQ.question[language]}
              </h2>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {currentDailyQ.options[language].map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentDailyQ.correctIndex;
                  let style = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60';

                  if (showExplanation) {
                    if (isCorrect) {
                      style = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected) {
                      style = 'bg-rose-950/70 border-rose-500 text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showExplanation}
                      onClick={() => handleSelectDailyAnswer(idx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${style}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs flex items-center justify-center font-bold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {showExplanation && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {showExplanation && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400 flex items-center space-x-1">
                      <Scale className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'hi' ? 'संवैधानिक तथ्य एवं संदर्भ' : 'Constitutional Reference'}</span>
                    </span>
                    {currentDailyQ.articleReference && (
                      <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {currentDailyQ.articleReference}
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed">{currentDailyQ.explanation[language]}</p>
                </div>
              )}

              {/* Action: Next */}
              {showExplanation && (
                <button
                  onClick={handleNextDailyQuestion}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <span>
                    {currentQuestionIndex < DAILY_QUIZ_QUESTIONS.length - 1
                      ? (language === 'hi' ? 'अगला प्रश्न' : 'Next Question')
                      : (language === 'hi' ? 'परिणाम देखें' : 'View Results')}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            // Quiz Result Screen
            <div className="navy-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 text-center space-y-5 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 animate-bounce" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {language === 'hi' ? 'दैनिक क्विज पूर्ण' : 'Daily Quiz Complete!'}
                </span>
                <h2 className="text-2xl font-extrabold text-white">
                  {language === 'hi' ? `आपका स्कोर: ${score} / ${DAILY_QUIZ_QUESTIONS.length}` : `Your Score: ${score} / ${DAILY_QUIZ_QUESTIONS.length}`}
                </h2>
                <p className="text-xs text-slate-300">
                  {score >= 4 
                    ? (language === 'hi' ? 'शानदार! आपकी संवैधानिक समझ बहुत परिपक्व है।' : 'Outstanding! Your constitutional awareness is top notch.')
                    : (language === 'hi' ? 'अच्छा प्रयास! नियमित अभ्यास से आपकी राजनीतिक समझ और बढ़ेगी।' : 'Good effort! Daily practice strengthens civic mastery.')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto flex items-center justify-around text-xs">
                <div>
                  <span className="text-slate-400 block">{language === 'hi' ? 'अंक (XP)' : 'XP Earned'}</span>
                  <span className="text-base font-bold text-amber-400">+{score * 20} XP</span>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="text-slate-400 block">{language === 'hi' ? 'दैनिक स्ट्रीक' : 'Streak'}</span>
                  <span className="text-base font-bold text-orange-400 flex items-center justify-center space-x-1">
                    <Flame className="w-4 h-4 fill-orange-400" />
                    <span>{user.streakDays}d</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={resetDailyQuiz}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{language === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}</span>
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <span>{language === 'hi' ? 'कोर्स पढ़ना जारी रखें' : 'Continue Courses'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Category Master Tests */}
      {activeSubTab === 'tests' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORY_TESTS.map(test => (
              <div key={test.id} className="navy-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {test.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{test.durationMinutes} mins</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {test.title[language]}
                  </h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {test.description[language]}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveTest(test);
                    setTestQuestionIndex(0);
                    setTestSelectedAnswer(null);
                    setTestShowExplanation(false);
                    setTestScore(0);
                    setTestFinished(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>{language === 'hi' ? 'परीक्षा शुरू करें' : 'Start Assessment'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Render Active Category Test if Selected */}
          {activeTest && (
            <div className="navy-card rounded-2xl p-5 sm:p-7 border border-indigo-500/40 shadow-2xl mt-6">
              {!testFinished ? (
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-indigo-300">{activeTest.title[language]}</span>
                    <span className="text-xs text-slate-400">
                      {testQuestionIndex + 1} / {activeTest.questions.length}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4">
                    {activeTest.questions[testQuestionIndex].question[language]}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {activeTest.questions[testQuestionIndex].options[language].map((opt, i) => {
                      const isCorrect = i === activeTest.questions[testQuestionIndex].correctIndex;
                      let s = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800';

                      if (testShowExplanation) {
                        if (isCorrect) s = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold';
                        else if (testSelectedAnswer === i) s = 'bg-rose-950/70 border-rose-500 text-rose-200';
                      }

                      return (
                        <button
                          key={i}
                          disabled={testShowExplanation}
                          onClick={() => {
                            setTestSelectedAnswer(i);
                            setTestShowExplanation(true);
                            if (isCorrect) setTestScore(prev => prev + 1);
                          }}
                          className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer ${s}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {testShowExplanation && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-4">
                      <p>{activeTest.questions[testQuestionIndex].explanation[language]}</p>
                    </div>
                  )}

                  {testShowExplanation && (
                    <button
                      onClick={() => {
                        if (testQuestionIndex < activeTest.questions.length - 1) {
                          setTestQuestionIndex(prev => prev + 1);
                          setTestSelectedAnswer(null);
                          setTestShowExplanation(false);
                        } else {
                          setTestFinished(true);
                          recordQuizScore(activeTest.id, testScore + 1, activeTest.questions.length);
                        }
                      }}
                      className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-1"
                    >
                      <span>{language === 'hi' ? 'अगला' : 'Continue'}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center space-y-3 py-4">
                  <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">
                    {language === 'hi' ? `परीक्षा समाप्त! आपका स्कोर: ${testScore} / ${activeTest.questions.length}` : `Test Complete! Score: ${testScore} / ${activeTest.questions.length}`}
                  </h3>
                  <button
                    onClick={() => setActiveTest(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold cursor-pointer"
                  >
                    {language === 'hi' ? 'बंद करें' : 'Close Test'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: National Leaderboard */}
      {activeSubTab === 'leaderboard' && (
        <div className="navy-card rounded-2xl p-5 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'अखिल भारतीय प्रबुद्ध नागरिक लीडरबोर्ड' : 'All-India Civic Scholars Leaderboard'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'hi' ? 'दैनिक क्विज और कोर्स पूरे करके देश भर में अपनी रैंक बढ़ाएं' : 'Ranked by verified quiz scores and course completions'}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {leaderboard.map((item, index) => {
              const isCurrentUser = item.name === user.name;
              let rankBadge = 'bg-slate-800 text-slate-400';
              if (index === 0) rankBadge = 'bg-amber-400 text-slate-950 font-black';
              else if (index === 1) rankBadge = 'bg-slate-300 text-slate-950 font-bold';
              else if (index === 2) rankBadge = 'bg-amber-700 text-white font-bold';

              return (
                <div
                  key={index}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-colors ${
                    isCurrentUser 
                      ? 'bg-amber-500/10 border-amber-500/40 shadow-sm' 
                      : 'bg-slate-900/70 border-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center shrink-0 ${rankBadge}`}>
                      {index + 1}
                    </span>
                    <span className="text-lg">{item.avatar || '🧑‍💼'}</span>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {item.name}
                        </span>
                        {isCurrentUser && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-bold">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                        <span>{item.badge}</span>
                        <span>•</span>
                        <span>{item.state}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-bold text-amber-300">
                      {item.xp} XP
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
