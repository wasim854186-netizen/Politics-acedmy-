import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Lesson, Course, Language } from '../types';
import { useApp } from './AppContext';

export interface AudioSection {
  title: string;
  text: string;
}

interface AudioPlayerContextType {
  currentLesson: Lesson | null;
  currentCourse: Course | null;
  isPlaying: boolean;
  isPaused: boolean;
  playbackRate: number;
  currentSectionIndex: number;
  sections: AudioSection[];
  progressPercent: number;
  isAudioModeOpen: boolean;
  autoAdvance: boolean;
  setAutoAdvance: (val: boolean) => void;
  playLesson: (lesson: Lesson, course?: Course, startSection?: number) => void;
  pause: () => void;
  resume: () => void;
  togglePlayPause: () => void;
  stop: () => void;
  changeRate: (rate: number) => void;
  jumpToSection: (index: number) => void;
  nextSection: () => void;
  previousSection: () => void;
  openAudioMode: () => void;
  closeAudioMode: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, courses, completeLesson } = useApp();
  
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [sections, setSections] = useState<AudioSection[]>([]);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [isAudioModeOpen, setIsAudioModeOpen] = useState<boolean>(false);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const wakeLockRef = useRef<any>(null);
  const timerRef = useRef<any>(null);

  // Parse a lesson into distinct audio sections for smooth speaking & tracking
  const buildSections = (lesson: Lesson, lang: Language): AudioSection[] => {
    const list: AudioSection[] = [];

    // Section 1: Title and Category
    list.push({
      title: lang === 'hi' ? 'पाठ का परिचय' : 'Lesson Overview',
      text: `${lesson.title[lang]}. ${lesson.category}.`
    });

    // Section 2: Summary
    list.push({
      title: lang === 'hi' ? 'मूल सारांश' : 'Executive Summary',
      text: lesson.summary[lang]
    });

    // Section 3: Key Points
    if (lesson.keyPoints[lang]?.length) {
      list.push({
        title: lang === 'hi' ? 'मुख्य बिंदु' : 'Key Principles',
        text: (lang === 'hi' ? 'मुख्य बिंदु: ' : 'Key takeaways: ') + lesson.keyPoints[lang].join('. ')
      });
    }

    // Section 4: Constitutional Reference
    if (lesson.constitutionalReference) {
      list.push({
        title: lang === 'hi' ? 'संवैधानिक आधार' : 'Constitutional Authority',
        text: (lang === 'hi' ? 'संवैधानिक संदर्भ: ' : 'Constitutional basis: ') + lesson.constitutionalReference
      });
    }

    // Section 5: Core Content
    if (lesson.content[lang]) {
      // Clean markdown tags like ### or ** for natural spoken audio
      const cleanContent = lesson.content[lang]
        .replace(/#{1,6}\s?/g, '')
        .replace(/\*\*/g, '')
        .replace(/\|.*?\|/g, '') // remove markdown table lines
        .trim();

      list.push({
        title: lang === 'hi' ? 'विस्तृत व्याख्या' : 'In-Depth Analysis',
        text: cleanContent
      });
    }

    // Section 6: Practical Example
    if (lesson.practicalExample) {
      list.push({
        title: lang === 'hi' ? 'दैनिक जीवन में उदाहरण' : 'Real-World Application',
        text: (lang === 'hi' ? 'दैनिक जीवन का उदाहरण: ' : 'Real-world example: ') + lesson.practicalExample[lang]
      });
    }

    // Section 7: Pro Leadership Tip
    if (lesson.proTip) {
      list.push({
        title: lang === 'hi' ? 'नेताओं के लिए प्रो टिप' : 'Leadership Master Tip',
        text: (lang === 'hi' ? 'नेताओं के लिए सलाह: ' : 'Leadership tip: ') + lesson.proTip[lang]
      });
    }

    return list;
  };

  // Find appropriate Hindi or English voice
  const getPreferredVoice = (lang: Language): SpeechSynthesisVoice | null => {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (lang === 'hi') {
      const hiVoice = voices.find(v => v.lang.startsWith('hi') || v.name.includes('Hindi') || v.lang.includes('IN'));
      return hiVoice || voices[0] || null;
    } else {
      const enVoice = voices.find(v => v.lang === 'en-IN' || v.lang === 'en-US' || v.lang.startsWith('en'));
      return enVoice || voices[0] || null;
    }
  };

  // Speak a specific section index
  const speakSection = (secIndex: number, currentSecs: AudioSection[], lesson: Lesson) => {
    if (!('speechSynthesis' in window)) return;
    if (secIndex < 0 || secIndex >= currentSecs.length) return;

    window.speechSynthesis.cancel();

    const sec = currentSecs[secIndex];
    const utterance = new SpeechSynthesisUtterance(sec.text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
    utterance.rate = playbackRate;
    utterance.pitch = 1.0;

    const voice = getPreferredVoice(language);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentSectionIndex(secIndex);
      const progress = Math.round(((secIndex + 1) / currentSecs.length) * 100);
      setProgressPercent(progress);
    };

    utterance.onend = () => {
      if (secIndex + 1 < currentSecs.length) {
        // Continue to next section in this lesson
        speakSection(secIndex + 1, currentSecs, lesson);
      } else {
        // Lesson finished!
        completeLesson(lesson.id, 50);
        setProgressPercent(100);

        if (autoAdvance) {
          // Play next lesson in curriculum if available
          playNextLessonAfterCurrent(lesson);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
        }
      }
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error or cancel:', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    // Chrome TTS pause workaround: keep speech alive
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 12000);
  };

  // Auto-advance helper
  const playNextLessonAfterCurrent = (finishedLesson: Lesson) => {
    const allLessons = courses.flatMap(c => c.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === finishedLesson.id);
    if (currentIndex !== -1 && currentIndex + 1 < allLessons.length) {
      const nextL = allLessons[currentIndex + 1];
      const parentC = courses.find(c => c.lessons.some(l => l.id === nextL.id));
      playLesson(nextL, parentC, 0);
    } else {
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  // Play Lesson Entry Point
  const playLesson = (lesson: Lesson, course?: Course, startSection: number = 0) => {
    const parentCourse = course || courses.find(c => c.lessons.some(l => l.id === lesson.id)) || courses[0];
    const parsedSections = buildSections(lesson, language);

    setCurrentLesson(lesson);
    setCurrentCourse(parentCourse);
    setSections(parsedSections);
    setCurrentSectionIndex(startSection);

    // Request wake lock for mobile commute listening
    requestWakeLock();

    speakSection(startSection, parsedSections, lesson);
  };

  const pause = () => {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const resume = () => {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    } else if (currentLesson && sections.length > 0) {
      speakSection(currentSectionIndex, sections, currentLesson);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const stop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    clearInterval(timerRef.current);
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentSectionIndex(0);
    setProgressPercent(0);
    releaseWakeLock();
  };

  const changeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying && currentLesson && sections.length > 0) {
      // Re-trigger current section at new speed
      speakSection(currentSectionIndex, sections, currentLesson);
    }
  };

  const jumpToSection = (index: number) => {
    if (currentLesson && sections.length > 0) {
      speakSection(index, sections, currentLesson);
    }
  };

  const nextSection = () => {
    if (currentLesson && currentSectionIndex + 1 < sections.length) {
      jumpToSection(currentSectionIndex + 1);
    } else if (currentLesson) {
      playNextLessonAfterCurrent(currentLesson);
    }
  };

  const previousSection = () => {
    if (currentLesson && currentSectionIndex > 0) {
      jumpToSection(currentSectionIndex - 1);
    } else if (currentLesson) {
      jumpToSection(0);
    }
  };

  const openAudioMode = () => setIsAudioModeOpen(true);
  const closeAudioMode = () => setIsAudioModeOpen(false);

  // Wake Lock API helpers for on-the-go screen stay awake
  const requestWakeLock = async () => {
    try {
      if ('wakeLock' in navigator) {
        wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
      }
    } catch (e) {
      // Ignore wake lock error
    }
  };

  const releaseWakeLock = () => {
    try {
      if (wakeLockRef.current) {
        wakeLockRef.current.release();
        wakeLockRef.current = null;
      }
    } catch (e) {}
  };

  // Re-build sections if language changed while player is active
  useEffect(() => {
    if (currentLesson) {
      const parsed = buildSections(currentLesson, language);
      setSections(parsed);
      if (isPlaying) {
        speakSection(currentSectionIndex, parsed, currentLesson);
      }
    }
  }, [language]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      clearInterval(timerRef.current);
      releaseWakeLock();
    };
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentLesson,
        currentCourse,
        isPlaying,
        isPaused,
        playbackRate,
        currentSectionIndex,
        sections,
        progressPercent,
        isAudioModeOpen,
        autoAdvance,
        setAutoAdvance,
        playLesson,
        pause,
        resume,
        togglePlayPause,
        stop,
        changeRate,
        jumpToSection,
        nextSection,
        previousSection,
        openAudioMode,
        closeAudioMode
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
