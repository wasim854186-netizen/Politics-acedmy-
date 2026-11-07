import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NewsCategory, NewsType } from '../types';
import { 
  Newspaper, 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle, 
  HelpCircle, 
  AlertTriangle, 
  Clock, 
  Landmark, 
  Calendar,
  Layers
} from 'lucide-react';

export const NewsSection: React.FC = () => {
  const { news, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<NewsType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedNewsId, setExpandedNewsId] = useState<string | null>(news[0]?.id || null);

  // Filter news items
  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = searchQuery === '' ||
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  const getTypeBadge = (type: NewsType) => {
    switch (type) {
      case 'fact':
        return {
          bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
          icon: <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />,
          label: { en: 'VERIFIED FACT', hi: 'संपुष्ट तथ्य' }
        };
      case 'analysis':
        return {
          bg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300',
          icon: <Layers className="w-3.5 h-3.5 text-indigo-400" />,
          label: { en: 'NEUTRAL ANALYSIS', hi: 'निष्पक्ष विश्लेषण' }
        };
      case 'opinion':
        return {
          bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
          icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />,
          label: { en: 'POLITICAL OPINION', hi: 'राजनीतिक राय' }
        };
    }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'सत्यापित एवं निष्पक्ष राजनीतिक समाचार' : 'Verified & Non-Partisan Political Feed'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'दैनिक राजनीतिक समाचार व विश्लेषण' : 'Daily Political News & Facts'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi'
              ? 'संसद अपडेट, सरकारी योजनाएं और चुनाव सुधार—तथ्यों (Facts) और राय (Opinions) को अलग करके समझें'
              : 'Parliamentary updates, welfare schemes, and election news clearly segregated into Facts vs Opinions'}
          </p>
        </div>
      </div>

      {/* Fact vs Opinion Explainer Alert */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/25 flex items-start space-x-3 text-xs">
        <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-slate-300">
          <span className="font-bold text-white block">
            {language === 'hi' ? 'निष्पक्षता का सिद्धांत: तथ्य और राय में अंतर' : 'Strict Neutrality Standard: Separating Facts from Opinions'}
          </span>
          <p className="text-slate-400 leading-relaxed">
            {language === 'hi'
              ? 'हम किसी भी राजनीतिक दल या नेता का पक्ष नहीं लेते। संपुष्ट तथ्य (गजट, चुनाव आयोग, संसद रिकॉर्ड) को हरे रंग में और विविध राजनीतिक दृष्टिकोणों को अलग लेबल से दर्शाया जाता है।'
              : 'Politics Academy operates on 100% neutrality. We cite official sources (Gazettes, ECI, PIB, Supreme Court) and clearly separate constitutional reality from partisan spin.'}
          </p>
        </div>
      </div>

      {/* Filter Bars & Type Pills */}
      <div className="space-y-3">
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'all', label: { en: 'All News', hi: 'सभी समाचार' } },
            { id: 'parliament', label: { en: 'Parliament', hi: 'संसद अपडेट' } },
            { id: 'elections', label: { en: 'Elections & ECI', hi: 'चुनाव व आयोग' } },
            { id: 'schemes', label: { en: 'Government Schemes', hi: 'सरकारी योजनाएं' } },
            { id: 'constitution', label: { en: 'Constitution & Courts', hi: 'संविधान व न्यायपालिका' } },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tab.label[language]}
            </button>
          ))}
        </div>

        {/* Fact vs Analysis vs Opinion Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400 font-semibold">{language === 'hi' ? 'प्रकार:' : 'Type:'}</span>
            {[
              { id: 'all', label: { en: 'All', hi: 'सभी' } },
              { id: 'fact', label: { en: 'Facts Only', hi: 'केवल तथ्य' } },
              { id: 'analysis', label: { en: 'Analysis', hi: 'विश्लेषण' } },
              { id: 'opinion', label: { en: 'Opinions', hi: 'राजनीतिक राय' } },
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as any)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedType === type.id
                    ? 'bg-slate-800 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {type.label[language]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'समाचार खोजें...' : 'Search news...'}
              className="w-full sm:w-60 pl-9 pr-4 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>
      </div>

      {/* News Feed Cards */}
      <div className="space-y-4">
        {filteredNews.map(item => {
          const badge = getTypeBadge(item.type);
          const isExpanded = expandedNewsId === item.id;

          return (
            <article 
              key={item.id}
              className={`navy-card rounded-2xl border transition-all ${
                isExpanded ? 'border-amber-500/40 shadow-xl' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="p-5">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase ${badge.bg}`}>
                      {badge.icon}
                      <span>{badge.label[language]}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{item.publishedDate}</span>
                    </span>
                  </div>

                  <span className="text-[11px] font-medium text-slate-400 flex items-center space-x-1 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    <Landmark className="w-3 h-3 text-amber-400" />
                    <span>{item.source}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {item.title[language]}
                </h2>

                {/* Short Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.summary[language]}
                </p>

                {/* Verified Core Fact Box */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 mb-4 flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-300 uppercase tracking-wider block mb-0.5">
                      {language === 'hi' ? 'सत्यापित संवैधानिक तथ्य (Verified Fact):' : 'Verified Statutory / Factual Record:'}
                    </span>
                    <span>{item.verifiedFact[language]}</span>
                  </div>
                </div>

                {/* Expand Toggle */}
                <button
                  onClick={() => setExpandedNewsId(isExpanded ? null : item.id)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>{isExpanded ? (language === 'hi' ? 'संक्षिप्त करें' : 'Show Less') : (language === 'hi' ? 'पूरा विश्लेषण व नागरिक प्रभाव पढ़ें' : 'Read Full Analysis & Impact')}</span>
                </button>

                {/* Detailed Analysis Section */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 text-xs sm:text-sm">
                    {/* Detailed Breakdown */}
                    <div className="whitespace-pre-line text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                      {item.detailedBreakdown[language]}
                    </div>

                    {/* Why It Matters Box */}
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start space-x-2.5">
                      <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-300 block mb-0.5 uppercase tracking-wider text-xs">
                          {language === 'hi' ? 'यह आम नागरिक के लिए क्यों महत्वपूर्ण है?' : 'Why This Matters to Citizens:'}
                        </span>
                        <span className="text-slate-300">{item.whyItMatters[language]}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
