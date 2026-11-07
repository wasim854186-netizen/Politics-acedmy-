import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PREAMBLE_DATA, CONSTITUTION_ARTICLES, IMPORTANT_AMENDMENTS } from '../data/constitutionData';
import { ConstitutionArticle } from '../types';
import { 
  BookMarked, 
  Search, 
  Scale, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ConstitutionLibrary: React.FC = () => {
  const { language, setIsAiModalOpen } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'articles' | 'preamble' | 'amendments'>('articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [expandedArticle, setExpandedArticle] = useState<string | null>('Article 14');

  // Filter articles
  const filteredArticles = CONSTITUTION_ARTICLES.filter(art => {
    const matchesSearch = searchQuery === '' ||
      art.article.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.simplifiedExplanation[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === 'all' || art.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = ['all', 'Fundamental Rights', 'Equality', 'Free Speech', 'Life', 'Writs', 'Elections', 'Amendments'];

  return (
    <div className="space-y-6 pb-20 md:pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'भारत का सर्वोच्च कानून' : 'The Supreme Law of India'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'भारतीय संविधान पुस्तकालय' : 'Indian Constitution Library'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi'
              ? 'अनुच्छेद, प्रस्तावना, ऐतिहासिक संशोधन और सुप्रीम कोर्ट के युगांतकारी निर्णय सरल भाषा में'
              : 'Articles, Preamble, Amendments, and Landmark Judicial Precedents simplified for citizens'}
          </p>
        </div>

        <button
          onClick={() => setIsAiModalOpen(true)}
          className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-200 text-xs font-semibold transition-all cursor-pointer self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>{language === 'hi' ? 'संविधान पर सवाल पूछें' : 'Ask AI About Articles'}</span>
        </button>
      </div>

      {/* Main Sub-Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
        {[
          { id: 'articles', label: { en: 'Key Articles & Writs', hi: 'प्रमुख अनुच्छेद व रिट' } },
          { id: 'preamble', label: { en: 'The Preamble (प्रस्तावना)', hi: 'संविधान की प्रस्तावना' } },
          { id: 'amendments', label: { en: 'Historic Amendments', hi: 'प्रमुख संविधान संशोधन' } },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>

      {/* Tab 1: Articles Directory */}
      {activeSubTab === 'articles' && (
        <div className="space-y-4">
          
          {/* Search & Tag Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={language === 'hi' ? 'अनुच्छेद नंबर, अधिकार या कीवर्ड खोजें (जैसे Article 21, समानता, रिट)...' : 'Search Article (e.g. Article 21, equality, writ)...'}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {tag === 'all' ? (language === 'hi' ? 'सभी विषय' : 'All') : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Accordion List */}
          <div className="space-y-3">
            {filteredArticles.map(article => {
              const isExpanded = expandedArticle === article.article;

              return (
                <div
                  key={article.article}
                  className={`navy-card rounded-2xl border transition-all ${
                    isExpanded 
                      ? 'border-amber-500/40 shadow-xl' 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Article Accordion Header */}
                  <button
                    onClick={() => setExpandedArticle(isExpanded ? null : article.article)}
                    className="w-full p-4 sm:p-5 flex items-start justify-between text-left cursor-pointer"
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-wide">
                          {article.article}
                        </span>
                        <span className="text-slate-400 text-xs">
                          {article.part}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {article.title[language]}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {article.summary[language]}
                      </p>
                    </div>

                    <div className="shrink-0 p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm">
                      
                      {/* Simplified Citizen Explanation */}
                      <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-200 leading-relaxed">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1.5 flex items-center space-x-1.5">
                          <Info className="w-4 h-4 text-amber-400" />
                          <span>{language === 'hi' ? 'सरल हिन्दी व्याख्या (नागरिक समझ)' : 'Simplified Citizen Meaning'}</span>
                        </span>
                        <p>{article.simplifiedExplanation[language]}</p>
                      </div>

                      {/* Official Text Excerpt */}
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1 font-sans">
                          {language === 'hi' ? 'संविधान का मूल पाठ (उद्धरण)' : 'Constitutional Text Excerpt'}
                        </span>
                        <p className="italic">{article.fullTextExcerpt[language]}</p>
                      </div>

                      {/* Landmark Judicial Case */}
                      {article.landmarkCase && (
                        <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 flex items-start space-x-2.5">
                          <Scale className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                              {language === 'hi' ? 'सर्वोच्च न्यायालय का ऐतिहासिक निर्णय' : 'Landmark Supreme Court Precedent'}
                            </span>
                            <span className="text-xs text-indigo-100">
                              {article.landmarkCase[language]}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {article.tags.map(t => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            #{t}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* Tab 2: The Preamble */}
      {activeSubTab === 'preamble' && (
        <div className="space-y-6">
          <div className="navy-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                {language === 'hi' ? 'संविधान की आत्मा' : 'The Soul of the Constitution'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {PREAMBLE_DATA.title[language]}
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
              <p className="text-sm sm:text-base text-amber-100/90 font-serif leading-relaxed italic whitespace-pre-line p-4 sm:p-6 bg-slate-900/60 rounded-2xl border border-amber-500/20 text-left sm:text-center">
                {PREAMBLE_DATA.text[language]}
              </p>
            </div>
          </div>

          {/* Core Keywords Explained */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>{language === 'hi' ? 'प्रस्तावना के 5 मूल स्तंभों का अर्थ' : 'The Five Sovereign Pillars Explained'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PREAMBLE_DATA.keyKeywords.map((kw, i) => (
                <div key={i} className="navy-card rounded-xl p-4 border border-slate-800">
                  <span className="text-sm font-bold text-amber-300 block mb-1">
                    {kw.term[language]}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {kw.explanation[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Important Amendments */}
      {activeSubTab === 'amendments' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            {language === 'hi'
              ? 'संविधान में समय-समय पर अनुच्छेद 368 के तहत हुए वे बड़े संशोधन जिन्होंने भारतीय राजनीति और समाज की दिशा बदली:'
              : 'Key constitutional amendments under Article 368 that reshaped India’s democratic and federal landscape:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {IMPORTANT_AMENDMENTS.map(amd => (
              <div key={amd.number} className="navy-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    {amd.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {amd.knownAs}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {amd.title[language]}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {amd.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
