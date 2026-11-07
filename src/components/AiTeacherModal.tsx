import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ChatMessage } from '../types';
import { 
  Sparkles, 
  Send, 
  X, 
  Scale, 
  Bot, 
  User, 
  HelpCircle, 
  RotateCcw, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const AiTeacherModal: React.FC = () => {
  const { isAiModalOpen, setIsAiModalOpen, language } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init_1',
      sender: 'ai',
      text: language === 'hi'
        ? 'नमस्ते! मैं आपका एआई राजनीतिक शिक्षक (AI Political Teacher) हूँ। भारतीय संविधान, संसद, चुनाव, कानूनों और राजनीतिक नेतृत्व से जुड़े किसी भी प्रश्न को यहाँ पूछें। मैं पूर्णतः निष्पक्ष, तथ्यपरक और संवैधानिक संदर्भों के साथ उत्तर दूंगा।'
        : 'Welcome! I am your AI Political Teacher. Ask any question regarding the Indian Constitution, parliamentary procedures, election rules, governance, or ethical leadership. I provide strictly neutral, non-partisan, and legally grounded explanations.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sources: ['Constitution of India', 'Election Commission of India Guidelines']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = language === 'hi' ? [
    'लोकसभा और राज्यसभा में क्या अंतर है?',
    'अविश्वास प्रस्ताव (No-Confidence Motion) कैसे काम करता है?',
    'संसद में "शून्यकाल" (Zero Hour) क्या होता है?',
    'विपक्ष के नेता (Leader of Opposition) का क्या संवैधानिक महत्व है?',
    'ईवीएम और वीवीपैट की निष्पक्षता कैसे तय होती है?'
  ] : [
    'What is the difference between Lok Sabha and Rajya Sabha?',
    'How does a No-Confidence Motion work in Parliament?',
    'What is Zero Hour in Indian Parliamentary proceedings?',
    'What is the statutory role of the Leader of Opposition?',
    'How do EVM and VVPAT ensure mathematical voting integrity?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isAiModalOpen]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          language,
          history: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text
          }))
        })
      });

      const data = await response.json();

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: data.reply || (language === 'hi' ? 'उत्तर प्राप्त करने में असमर्थ।' : 'Could not retrieve answer.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources || ['Constitution of India', 'PRS Legislative Research'],
        isFallback: data.isFallback
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: 'ai',
        text: language === 'hi'
          ? 'संवैधानिक सर्वर से संपर्क नहीं हो सका। कृपया पुनः प्रयास करें।'
          : 'Could not connect to AI Political Teacher server. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAiModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl h-[90vh] max-h-[700px] flex flex-col bg-[#0b132b] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-[#0d1b3e] to-[#070d1e] border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-serif flex items-center space-x-1.5">
                <span>{language === 'hi' ? 'एआई राजनीतिक शिक्षक' : 'AI Political Teacher'}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                  Gemini 3.8
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'hi' ? 'तटस्थ, निष्पक्ष और संवैधानिक संदर्भों सहित उत्तर' : 'Non-partisan explanations citing Indian Constitutional Articles'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAiModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start space-x-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-indigo-900 border border-indigo-500/30 text-indigo-300'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-4 leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                    : 'bg-slate-900/90 text-slate-100 border border-slate-800 rounded-tl-none shadow-md'
                }`}
              >
                <div className="whitespace-pre-line prose prose-invert max-w-none text-xs sm:text-sm">
                  {msg.text}
                </div>

                {/* Sources & Time */}
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[10px] text-slate-400 gap-2">
                  {msg.sources && msg.sources.length > 0 && (
                    <span className="flex items-center space-x-1 text-amber-400/90 font-medium">
                      <Scale className="w-3 h-3 text-amber-400" />
                      <span>{language === 'hi' ? 'संदर्भ:' : 'Sources:'} {msg.sources.join(', ')}</span>
                    </span>
                  )}
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-amber-300 p-3 bg-slate-900/80 rounded-xl border border-slate-800 w-fit">
              <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
              <span>{language === 'hi' ? 'संवैधानिक ज्ञानकोष से निष्पक्ष उत्तर तैयार हो रहा है...' : 'Synthesizing verified constitutional response...'}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        {messages.length <= 3 && (
          <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-900/50 flex items-center space-x-1.5 overflow-x-auto text-[11px]">
            <span className="text-slate-400 whitespace-nowrap">{language === 'hi' ? 'सुझाव:' : 'Suggested:'}</span>
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#090f22] border-t border-slate-800">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={language === 'hi' ? 'राजनीति या संविधान से जुड़ा सवाल पूछें...' : 'Ask any question on politics or constitution...'}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              <span>{language === 'hi' ? 'भेजें' : 'Send'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
