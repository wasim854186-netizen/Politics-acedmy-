import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, UserProfile, UserRole, Course, Lesson, NewsItem, Certificate } from '../types';
import { INITIAL_COURSES } from '../data/coursesData';
import { INITIAL_NEWS } from '../data/newsData';

export type NavigationTab = 
  | 'home'
  | 'courses'
  | 'news'
  | 'quiz'
  | 'constitution'
  | 'leadership'
  | 'ai-teacher'
  | 'profile'
  | 'admin';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  courses: Course[];
  activeCourse: Course | null;
  setActiveCourse: (course: Course | null) => void;
  activeLesson: Lesson | null;
  setActiveLesson: (lesson: Lesson | null) => void;
  news: NewsItem[];
  completeLesson: (lessonId: string, xpReward?: number) => void;
  toggleBookmark: (lessonId: string) => void;
  recordQuizScore: (quizId: string, score: number, total: number) => void;
  claimCertificate: (courseId: string) => Certificate | null;
  selectedCertificate: Certificate | null;
  setSelectedCertificate: (cert: Certificate | null) => void;
  isAiModalOpen: boolean;
  setIsAiModalOpen: (open: boolean) => void;
  addCustomCourse: (course: any) => Promise<boolean>;
  addCustomNews: (news: any) => Promise<boolean>;
  switchUserRole: (role: UserRole) => void;
  updateUserName: (name: string) => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'user_default_1',
  name: 'Wasim Akram',
  email: 'wasim854186@gmail.com',
  role: 'aspiring_leader',
  avatar: '🏛️',
  xp: 320,
  streakDays: 4,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedLessons: ['lesson_what_is_politics', 'lesson_what_is_democracy'],
  bookmarkedLessons: ['lesson_what_is_constitution', 'lesson_campaign_strategy'],
  quizScores: { 'dq_1': 100 },
  completedCourses: [],
  certificates: [
    {
      id: 'CERT-DEM-9957',
      courseId: 'course_beg_1',
      courseTitle: {
        en: 'Foundations of Politics & Democracy',
        hi: 'राजनीति और लोकतंत्र की बुनियादी समझ'
      },
      userName: 'Wasim Akram',
      issueDate: '2026-11-04',
      verificationCode: 'PA-2026-IND-789',
      grade: 'Distinction (A+)'
    }
  ]
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pa_lang');
    return (saved as Language) || 'hi'; // Default Hindi for citizen education or English toggle
  });

  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('pa_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_USER;
      }
    }
    return DEFAULT_USER;
  });

  // Save language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pa_lang', lang);
  };

  // Save user profile & sync with backend API
  useEffect(() => {
    localStorage.setItem('pa_user', JSON.stringify(user));
    // Background sync to server
    fetch('/api/user/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        name: user.name,
        role: user.role,
        progress: {
          xp: user.xp,
          streakDays: user.streakDays,
          completedLessons: user.completedLessons,
          completedCourses: user.completedCourses,
          certificates: user.certificates,
          completedQuizzesCount: Object.keys(user.quizScores).length
        }
      })
    }).catch(() => {
      // offline silent fallback
    });
  }, [user]);

  // Fetch custom admin courses & news from server on load
  useEffect(() => {
    fetch('/api/courses/custom')
      .then(res => res.json())
      .then(data => {
        if (data.courses && Array.isArray(data.courses) && data.courses.length > 0) {
          setCourses(prev => [...prev, ...data.courses]);
        }
      })
      .catch(() => {});

    fetch('/api/news/custom')
      .then(res => res.json())
      .then(data => {
        if (data.news && Array.isArray(data.news) && data.news.length > 0) {
          setNews(prev => [...data.news, ...prev]);
        }
      })
      .catch(() => {});
  }, []);

  const completeLesson = (lessonId: string, xpReward: number = 50) => {
    setUser(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const updated = {
        ...prev,
        xp: prev.xp + xpReward,
        completedLessons: [...prev.completedLessons, lessonId],
      };
      return updated;
    });
  };

  const toggleBookmark = (lessonId: string) => {
    setUser(prev => {
      const isBookmarked = prev.bookmarkedLessons.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessons: isBookmarked
          ? prev.bookmarkedLessons.filter(id => id !== lessonId)
          : [...prev.bookmarkedLessons, lessonId]
      };
    });
  };

  const recordQuizScore = (quizId: string, score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    const xpGained = score * 20;

    setUser(prev => {
      const today = new Date().toISOString().split('T')[0];
      const isNewDay = prev.lastActiveDate !== today;
      const newStreak = isNewDay ? prev.streakDays + 1 : prev.streakDays;

      return {
        ...prev,
        xp: prev.xp + xpGained,
        streakDays: newStreak,
        lastActiveDate: today,
        quizScores: {
          ...prev.quizScores,
          [quizId]: Math.max(prev.quizScores[quizId] || 0, percentage)
        }
      };
    });
  };

  const claimCertificate = (courseId: string): Certificate | null => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return null;

    // Check if already claimed
    const existing = user.certificates.find(c => c.courseId === courseId);
    if (existing) {
      setSelectedCertificate(existing);
      return existing;
    }

    const newCert: Certificate = {
      id: `CERT-${Date.now().toString().slice(-6)}`,
      courseId: course.id,
      courseTitle: course.title,
      userName: user.name,
      issueDate: new Date().toISOString().split('T')[0],
      verificationCode: `PA-${new Date().getFullYear()}-IND-${Math.floor(100 + Math.random() * 900)}`,
      grade: 'Executive Honors (A+)'
    };

    setUser(prev => ({
      ...prev,
      xp: prev.xp + 150,
      certificates: [...prev.certificates, newCert],
      completedCourses: [...new Set([...prev.completedCourses, courseId])]
    }));

    setSelectedCertificate(newCert);
    return newCert;
  };

  const addCustomCourse = async (courseData: any): Promise<boolean> => {
    try {
      const res = await fetch('/api/courses/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData)
      });
      const data = await res.json();
      if (data.course) {
        setCourses(prev => [...prev, data.course]);
        return true;
      }
    } catch (e) {
      console.error('Error adding course:', e);
    }
    return false;
  };

  const addCustomNews = async (newsData: any): Promise<boolean> => {
    try {
      const res = await fetch('/api/news/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsData)
      });
      const data = await res.json();
      if (data.news) {
        setNews(prev => [data.news, ...prev]);
        return true;
      }
    } catch (e) {
      console.error('Error adding news:', e);
    }
    return false;
  };

  const switchUserRole = (role: UserRole) => {
    setUser(prev => ({ ...prev, role }));
  };

  const updateUserName = (name: string) => {
    setUser(prev => ({ ...prev, name }));
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        user,
        setUser,
        courses,
        activeCourse,
        setActiveCourse,
        activeLesson,
        setActiveLesson,
        news,
        completeLesson,
        toggleBookmark,
        recordQuizScore,
        claimCertificate,
        selectedCertificate,
        setSelectedCertificate,
        isAiModalOpen,
        setIsAiModalOpen,
        addCustomCourse,
        addCustomNews,
        switchUserRole,
        updateUserName
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
