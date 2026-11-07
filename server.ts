import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Persistence storage file
const DB_FILE = path.resolve(__dirname, 'academy-data.json');

// Default initial state
interface AppDatabase {
  customCourses: any[];
  customNews: any[];
  customQuizzes: any[];
  users: Record<string, any>;
  analytics: {
    totalEnrollments: number;
    quizzesCompleted: number;
    certificatesIssued: number;
    aiQuestionsAsked: number;
  };
}

let db: AppDatabase = {
  customCourses: [],
  customNews: [],
  customQuizzes: [],
  users: {},
  analytics: {
    totalEnrollments: 1420,
    quizzesCompleted: 4890,
    certificatesIssued: 345,
    aiQuestionsAsked: 1280,
  },
};

function loadDb() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      db = { ...db, ...JSON.parse(data) };
    }
  } catch (err) {
    console.error('Failed to load DB file, using default memory state', err);
  }
}

function saveDb() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save DB file', err);
  }
}

loadDb();

// ----------------- API ROUTES -----------------

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Politics Academy API', timestamp: new Date().toISOString() });
});

// AI Political Teacher Endpoint
app.post('/api/ai-teacher', async (req, res) => {
  try {
    const { message, language = 'en', history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    db.analytics.aiQuestionsAsked += 1;
    saveDb();

    if (!process.env.GEMINI_API_KEY) {
      // Fallback offline political tutor response if API key is temporarily absent
      const fallbackReplies: Record<string, { en: string; hi: string }> = {
        default: {
          en: "In Indian constitutional democracy, every citizen possesses fundamental rights under Part III of the Constitution and democratic voting power under Article 326. Political institutions like Parliament (Lok Sabha & Rajya Sabha), the Executive headed by the Prime Minister and Council of Ministers, and the independent Judiciary balance each other under the doctrine of Separation of Powers.",
          hi: "भारतीय संवैधानिक लोकतंत्र में, संविधान के भाग 3 के तहत प्रत्येक नागरिक को मौलिक अधिकार और अनुच्छेद 326 के तहत मताधिकार प्राप्त है। संसद (लोकसभा और राज्यसभा), कार्यपालिका तथा स्वतंत्र न्यायपालिका शक्ति-पृथक्करण के सिद्धांत के तहत एक-दूसरे को संतुलित करती हैं।"
        }
      };
      const text = language === 'hi' ? fallbackReplies.default.hi : fallbackReplies.default.en;
      return res.json({
        reply: text,
        sources: ['Constitution of India (Articles 12-35, 326)', 'PRS Legislative Research'],
        isFallback: true
      });
    }

    const systemInstruction = `You are the master AI Political Teacher for "Politics Academy – Learn Politics from Zero to Pro" (राजनीति अकादमी).
Your purpose is to provide clear, neutral, educational, non-partisan, and legally verified political education to students, citizens, and aspiring political leaders.

CRITICAL RULES:
1. Strict Neutrality: Never promote or criticize any specific political party (e.g. BJP, Congress, AAP, regional parties) or any individual living politician.
2. Verified Constitutional Foundation: Base all answers on the Constitution of India, parliamentary procedures, Representation of the People Act, 1951, Supreme Court landmark cases, and standard political science theory.
3. Clarity for Beginners to Pro: Explain complex political concepts (e.g. anti-defection law, delimitation, no-confidence motion, fiscal federalism, coalition politics, election campaigning) simply, with relatable examples.
4. Structure: Use concise bullet points, clear headings, and highlight "Constitutional Fact" vs "Diverse Perspectives".
5. Language: Respond in ${language === 'hi' ? 'clear Hindi (हिन्दी) with English constitutional terms in brackets where helpful' : 'clear, accessible English'}.
6. Sources: Conclude your answer with 1-3 credible reference sources (e.g. Article 75, Supreme Court SR Bommai case, ECI Model Code of Conduct).`;

    const contents = [
      ...history.slice(-6).map((h: { role: string; content: string }) => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.content }]
      })),
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents as any,
      config: {
        systemInstruction,
      },
    });

    const replyText = response.text || (language === 'hi' ? 'उत्तर तैयार करने में असमर्थ। कृपया पुनः प्रयास करें।' : 'Could not generate explanation. Please try again.');

    res.json({
      reply: replyText,
      sources: ['Constitution of India', 'Election Commission of India Guidelines', 'PRS Legislative Research']
    });
  } catch (error: any) {
    console.error('AI Teacher error:', error);
    res.status(500).json({
      error: 'Failed to contact AI Political Teacher',
      details: error.message,
      reply: req.body.language === 'hi'
        ? 'संवैधानिक डेटाबेस से जुड़ने में समस्या हुई। कृपया पुनः प्रयास करें।'
        : 'Could not connect to constitutional knowledge base. Please try again.'
    });
  }
});

// Admin & Course endpoints
app.get('/api/courses/custom', (req, res) => {
  res.json({ courses: db.customCourses });
});

app.post('/api/courses/custom', (req, res) => {
  const newCourse = {
    id: `custom_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...req.body
  };
  db.customCourses.push(newCourse);
  saveDb();
  res.status(201).json({ success: true, course: newCourse });
});

// Admin & News endpoints
app.get('/api/news/custom', (req, res) => {
  res.json({ news: db.customNews });
});

app.post('/api/news/custom', (req, res) => {
  const newsItem = {
    id: `news_${Date.now()}`,
    publishedAt: new Date().toISOString().split('T')[0],
    ...req.body
  };
  db.customNews.unshift(newsItem);
  saveDb();
  res.status(201).json({ success: true, news: newsItem });
});

// Admin & Quiz endpoints
app.get('/api/quizzes/custom', (req, res) => {
  res.json({ quizzes: db.customQuizzes });
});

app.post('/api/quizzes/custom', (req, res) => {
  const quizItem = {
    id: `quiz_${Date.now()}`,
    ...req.body
  };
  db.customQuizzes.push(quizItem);
  saveDb();
  res.status(201).json({ success: true, quiz: quizItem });
});

// User Progress & Sync
app.post('/api/user/sync', (req, res) => {
  const { userId, progress, name, role } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  db.users[userId] = {
    ...db.users[userId],
    userId,
    name: name || db.users[userId]?.name || 'Citizen Learner',
    role: role || db.users[userId]?.role || 'learner',
    progress: progress || db.users[userId]?.progress || {},
    lastActive: new Date().toISOString(),
  };

  if (progress?.completedQuizzesCount) {
    db.analytics.quizzesCompleted += 1;
  }
  if (progress?.certificates?.length) {
    db.analytics.certificatesIssued = Math.max(db.analytics.certificatesIssued, 345 + Object.keys(db.users).length);
  }

  saveDb();
  res.json({ success: true, user: db.users[userId] });
});

// Analytics
app.get('/api/analytics', (req, res) => {
  res.json({
    analytics: {
      ...db.analytics,
      totalUsers: Math.max(Object.keys(db.users).length, 1420),
      customCoursesCount: db.customCourses.length,
      customNewsCount: db.customNews.length,
      customQuizzesCount: db.customQuizzes.length,
    }
  });
});

// Leaderboard
app.get('/api/leaderboard', (req, res) => {
  const baseLeaderboard = [
    { rank: 1, name: 'Aarav Sharma', xp: 4850, badge: 'Constitutional Scholar', avatar: '👨‍💼', state: 'Delhi' },
    { rank: 2, name: 'Priya Patel', xp: 4420, badge: 'Policy Architect', avatar: '👩‍💼', state: 'Gujarat' },
    { rank: 3, name: 'Rohan Deshmukh', xp: 4100, badge: 'Grassroots Leader', avatar: '🧑‍💼', state: 'Maharashtra' },
    { rank: 4, name: 'Ananya Mukherjee', xp: 3950, badge: 'Parliament Watcher', avatar: '👩‍🎓', state: 'West Bengal' },
    { rank: 5, name: 'Vikramaditya Rao', xp: 3720, badge: 'Electoral Analyst', avatar: '👨‍🏫', state: 'Karnataka' },
    { rank: 6, name: 'Fatima Zafar', xp: 3500, badge: 'Democracy Defender', avatar: '👩‍💻', state: 'Uttar Pradesh' },
    { rank: 7, name: 'Gurpreet Singh', xp: 3310, badge: 'Civic Activist', avatar: '🧔', state: 'Punjab' },
  ];

  // Merge registered active users
  const activeUserList = Object.values(db.users)
    .filter(u => u.progress?.xp)
    .map(u => ({
      name: u.name,
      xp: u.progress.xp || 100,
      badge: u.progress.badge || 'Rising Leader',
      avatar: '🌟',
      state: 'India'
    }));

  const all = [...baseLeaderboard, ...activeUserList]
    .sort((a, b) => b.xp - a.xp)
    .map((item, index) => ({ ...item, rank: index + 1 }));

  res.json({ leaderboard: all.slice(0, 15) });
});

// ----------------- VITE MIDDLEWARE / STATIC FILES -----------------

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Politics Academy server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
