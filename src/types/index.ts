export type Language = 'en' | 'hi';

export type UserRole = 'citizen' | 'student' | 'aspiring_leader' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedLessons: string[];
  bookmarkedLessons: string[];
  quizScores: Record<string, number>;
  certificates: Certificate[];
  completedCourses: string[];
}

export interface Certificate {
  id: string;
  courseId: string;
  courseTitle: { en: string; hi: string };
  userName: string;
  issueDate: string;
  verificationCode: string;
  grade: string;
}

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Lesson {
  id: string;
  title: { en: string; hi: string };
  readTimeMinutes: number;
  level: CourseLevel;
  category: string;
  summary: { en: string; hi: string };
  keyPoints: { en: string[]; hi: string[] };
  content: { en: string; hi: string };
  constitutionalReference?: string;
  practicalExample?: { en: string; hi: string };
  proTip?: { en: string; hi: string };
  quizQuestion?: {
    question: { en: string; hi: string };
    options: { en: string[]; hi: string[] };
    correctIndex: number;
    explanation: { en: string; hi: string };
  };
}

export interface Course {
  id: string;
  title: { en: string; hi: string };
  level: CourseLevel;
  description: { en: string; hi: string };
  icon: string;
  color: string;
  modulesCount: number;
  lessons: Lesson[];
}

export type NewsCategory = 'parliament' | 'elections' | 'schemes' | 'constitution' | 'governance';
export type NewsType = 'fact' | 'analysis' | 'opinion';

export interface NewsItem {
  id: string;
  title: { en: string; hi: string };
  category: NewsCategory;
  type: NewsType;
  source: string;
  sourceUrl?: string;
  publishedDate: string;
  summary: { en: string; hi: string };
  detailedBreakdown: { en: string; hi: string };
  whyItMatters: { en: string; hi: string };
  verifiedFact: { en: string; hi: string };
}

export interface QuizQuestion {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: { en: string; hi: string };
  options: { en: string[]; hi: string[] };
  correctIndex: number;
  explanation: { en: string; hi: string };
  articleReference?: string;
}

export interface QuizTest {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  category: string;
  durationMinutes: number;
  questions: QuizQuestion[];
}

export interface ConstitutionArticle {
  article: string;
  part: string;
  title: { en: string; hi: string };
  summary: { en: string; hi: string };
  fullTextExcerpt: { en: string; hi: string };
  simplifiedExplanation: { en: string; hi: string };
  landmarkCase?: { en: string; hi: string };
  tags: string[];
}

export interface LeadershipModule {
  id: string;
  title: { en: string; hi: string };
  subtitle: { en: string; hi: string };
  icon: string;
  category: 'public_speaking' | 'campaign_strategy' | 'speech_writing' | 'community_action';
  guide: {
    steps: { title: { en: string; hi: string }; description: { en: string; hi: string } }[];
    dosAndDonts: { dos: { en: string[]; hi: string[] }; donts: { en: string[]; hi: string[] } };
    templates?: { title: { en: string; hi: string }; content: { en: string; hi: string } }[];
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  sources?: string[];
  isFallback?: boolean;
}
