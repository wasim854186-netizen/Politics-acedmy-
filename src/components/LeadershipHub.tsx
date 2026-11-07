import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LEADERSHIP_MODULES } from '../data/leadershipData';
import { 
  Crown, 
  Feather, 
  Megaphone, 
  Users, 
  CheckCircle, 
  XCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from 'lucide-react';

export const LeadershipHub: React.FC = () => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'speechwriter' | 'guides' | 'checklist'>('speechwriter');
  
  // Interactive Speechwriter state
  const [constituency, setConstituency] = useState('');
  const [issueTopic, setIssueTopic] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [generatedSpeech, setGeneratedSpeech] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Generate speech draft
  const handleGenerateSpeech = (e: React.FormEvent) => {
    e.preventDefault();
    const area = constituency.trim() || (language === 'hi' ? 'हमारे प्रिय क्षेत्र' : 'our respected constituency');
    const issue = issueTopic.trim() || (language === 'hi' ? 'सड़क, पानी, रोजगार और स्वास्थ्य' : 'roads, healthcare, youth jobs, and clean water');
    const name = candidateName.trim() || (language === 'hi' ? 'आपका सेवक' : 'Your servant');

    if (language === 'hi') {
      const speech = `[हुक / प्रेरणादायी शुरुआत - 0:00 से 1:00]
${area} के मेरे देवतुल्य भाइयों, बुजुर्गों, माताओं-बहनों और ऊर्जावान युवा साथियों!
आज जब मैं आपके बीच आया हूँ, तो किसी राजनीतिक दल के अहंकार के साथ नहीं, बल्कि इस पावन मिट्टी के बेटे और सेवक के रूप में आपका आशीर्वाद लेने आया हूँ।
मुझे आज भी याद है जब दो दिन पहले एक बुजुर्ग माता जी ने मेरे हाथ थामकर कहा था: "बेटा, हमने नेताओं को बहुत वादे करते देखा, पर हमारे बच्चों का दर्द किसी ने नहीं समझा।"

[साझा संकट और जनपीड़ा - 1:00 से 4:00]
आज सवाल यह है कि आज़ादी के 75 साल बाद भी ${area} में ${issue} की समस्या क्यों बनी हुई है?
क्या हमारे बच्चों को अच्छी शिक्षा और युवाओं को सम्मानजनक रोजगार पाने का हक नहीं है?
जब चुनाव आते हैं तो विरोधी दल केवल खोखले वादे लेकर आते हैं, और चुनाव बीतते ही जनता को उनके हाल पर छोड़ देते हैं। यह सिर्फ लापरवाही नहीं, जनमत के साथ विश्वासघात है!

[सकारात्मक समाधान और 3 ठोस संकल्प - 4:00 से 7:00]
मैं यहाँ सिर्फ आलोचना करने नहीं आया हूँ। संविधान के मूल्यों की शपथ लेकर मैं ${area} की जनता के सामने 3 पवित्र संकल्प रखता हूँ:
1. पहले 100 दिनों के भीतर ${issue} के स्थाई समाधान के लिए विशेष टास्क फोर्स गठित कर काम शुरू किया जाएगा।
2. विधायक/सांसद विकास निधि के एक-एक पैसे का मासिक ऑडिट जनता के सामने सार्वजनिक चौपाल पर रखा जाएगा।
3. युवाओं और महिलाओं के लिए निःशुल्क कौशल विकास केंद्र और जनसुनवाई केंद्र 24x7 सक्रिय रहेगा।

[जन-आह्वान और संकल्प - 7:00 से 9:00]
साथियों! बाबासाहेब आंबेडकर ने कहा था कि अधिकार मांगे नहीं जाते, संगठित होकर छीने जाते हैं!
आइए, एक नए, विकसित और स्वाभिमानी ${area} के निर्माण के लिए एकजुट हों। अपने दोनों हाथ उठाकर मेरे साथ संकल्प लें—हक के लिए, सम्मान के लिए, और आने वाली पीढ़ी के सुनहरे भविष्य के लिए!
जय हिन्द! जय भारत! इन्कलाब जिंदाबाद!
— ${name}`;
      setGeneratedSpeech(speech);
    } else {
      const speech = `[THE HOOK - 0:00 to 1:00]
Respected elders, mothers, sisters, and my dynamic young friends of ${area}!
I stand before you today not with political arrogance, but with the humble heart of a citizen who shares your daily pain and walks your very streets.
Just yesterday, a young graduate in our market asked me: "When will ordinary citizens finally be heard instead of forgotten after voting day?"

[THE SHARED CRISIS - 1:00 to 4:00]
Why is it that in ${area}, the crisis of ${issue} continues to hold back our families?
For years, our public funds were spent, yet basic civic dignity remains an uphill struggle. When elections come, seasoned politicians bring glossy manifestos, yet disappear the minute the results are sealed. That is not democracy—that is an insult to the sovereign citizen!

[THE 3 CONSTRUCTIVE PLEDGES - 4:00 to 7:00]
I do not offer empty slogans; I offer a verifiable constitutional roadmap:
1. Within our first 100 days, we will launch an immediate emergency overhaul targeting ${issue} with strict public accountability.
2. Every single rupee of our development funds will be published online in an open, transparent citizen ledger.
3. A permanent 24/7 Citizen Grievance Redressal Center will ensure that no resident waits more than 7 days for administrative relief.

[THE CALL TO ACTION - 7:00 to 9:00]
Brothers and sisters, real change never comes from comfortable armchairs; it comes when citizens stand together with courage!
Raise both your hands and pledge with me today: For truth, for our children's future, and for the rebirth of ${area}—we shall rise, we shall organize, and we shall win!
Jai Hind!
— ${name}`;
      setGeneratedSpeech(speech);
    }
  };

  const copyToClipboard = () => {
    if (generatedSpeech) {
      navigator.clipboard.writeText(generatedSpeech);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6 pb-20 md:pb-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'भावी जन-नेताओं का प्रशिक्षण केंद्र' : 'Civic & Political Leadership Academy'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            {language === 'hi' ? 'राजनीतिक नेतृत्व और जनसंवाद हब' : 'Political Leadership & Oratory Hub'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {language === 'hi'
              ? 'भाषण लेखन टूल, जनसभा प्रबंधन, जनसुनवाई और जमीनी जन-संगठन का व्यावहारिक प्रशिक्षण'
              : 'Interactive speechwriting tool, rally management, public grievance redressing, and grassroots leadership'}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 text-xs sm:text-sm">
        {[
          { id: 'speechwriter', label: { en: 'AI Speech Builder Tool', hi: 'राजनीतिक भाषण बिल्डर टूल' } },
          { id: 'guides', label: { en: 'Leadership Frameworks', hi: 'नेतृत्व मार्गदर्शिका' } },
          { id: 'checklist', label: { en: 'Rally & Sabha Checklist', hi: 'जनसभा व रैली चेकलिस्ट' } },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {tab.label[language]}
          </button>
        ))}
      </div>

      {/* Tab 1: Interactive Speechwriter */}
      {activeTab === 'speechwriter' && (
        <div className="space-y-6">
          <div className="navy-card rounded-2xl p-5 sm:p-7 border border-amber-500/25 shadow-2xl">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              <Feather className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'कस्टम राजनीतिक भाषण जनरेटर' : 'Custom Political Speech Crafting Engine'}</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-white mb-2">
              {language === 'hi' ? '3 मिनट में तैयार करें ओजस्वी, तथ्यपूर्ण और प्रभावी भाषण' : 'Generate an Inspiring 4-Part Public Rally Speech'}
            </h2>
            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              {language === 'hi'
                ? 'अपना क्षेत्र और प्रमुख जनसमस्या दर्ज करें। यह टूल हुक, साझा संकट, 3 ठोस वादे और जन-आह्वान से युक्त भाषण तैयार करेगा।'
                : 'Enter your constituency and core public grievances. The tool applies Aristotelian oratory architecture.'}
            </p>

            <form onSubmit={handleGenerateSpeech} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  {language === 'hi' ? 'विधानसभा / लोकसभा / शहर का नाम:' : 'Constituency / City Name:'}
                </label>
                <input
                  type="text"
                  required
                  value={constituency}
                  onChange={e => setConstituency(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. गोरखपुर, वाराणसी, इंदौर...' : 'e.g. North Delhi, Pune, Patna...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  {language === 'hi' ? 'मुख्य स्थानीय जनसमस्या:' : 'Primary Local Civic Grievance:'}
                </label>
                <input
                  type="text"
                  required
                  value={issueTopic}
                  onChange={e => setIssueTopic(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. जलभराव, बेरोजगारी, अस्पताल...' : 'e.g. youth employment, water shortage...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">
                  {language === 'hi' ? 'वक्ता / आपका नाम:' : 'Speaker Name:'}
                </label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={e => setCandidateName(e.target.value)}
                  placeholder={language === 'hi' ? 'उदा. राहुल शर्मा, प्रिया पटेल...' : 'e.g. Candidate Name...'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="sm:col-span-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'hi' ? 'भाषण का मसौदा तैयार करें' : 'Generate Structured Speech Draft'}</span>
                </button>
              </div>
            </form>

            {/* Generated Speech Display */}
            {generatedSpeech && (
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 flex items-center space-x-1.5">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>{language === 'hi' ? 'आपका तैयार भाषण (4 चरणों में)' : 'Your Complete 4-Part Rally Speech'}</span>
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? (language === 'hi' ? 'कॉपी हुआ!' : 'Copied!') : (language === 'hi' ? 'कॉपी करें' : 'Copy Text')}</span>
                  </button>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-slate-100 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans shadow-inner max-h-[500px] overflow-y-auto">
                  {generatedSpeech}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Leadership Frameworks */}
      {activeTab === 'guides' && (
        <div className="space-y-4">
          {LEADERSHIP_MODULES.map(module => (
            <div key={module.id} className="navy-card rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {module.title[language]}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {module.subtitle[language]}
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {module.guide.steps.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs font-bold text-amber-300 block mb-1">
                      {st.title[language]}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {st.description[language]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Do's and Don'ts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs">
                  <span className="font-bold text-emerald-300 flex items-center space-x-1.5 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{language === 'hi' ? 'क्या करें (Golden Do’s):' : 'Golden Do’s:'}</span>
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {module.guide.dosAndDonts.dos[language].map((d, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 text-xs">
                  <span className="font-bold text-rose-300 flex items-center space-x-1.5 mb-2">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>{language === 'hi' ? 'क्या न करें (Crucial Don’ts):' : 'Crucial Don’ts:'}</span>
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    {module.guide.dosAndDonts.donts[language].map((d, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-rose-400">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Rally & Sabha Checklist */}
      {activeTab === 'checklist' && (
        <div className="navy-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white font-serif flex items-center space-x-2">
            <Users className="w-5 h-5 text-amber-400" />
            <span>{language === 'hi' ? 'जनसभा और रैली आयोजन की संपूर्ण 10-सूत्रीय चेकलिस्ट' : '10-Point Public Meeting Field Checklist'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {language === 'hi' 
              ? 'किसी भी जनसभा से पहले इन 10 बिंदुओं की पुष्टि जरूर करें ताकि प्रशासन और जनता दोनों का विश्वास बना रहे:' 
              : 'Ensure these operational checkpoints before addressing any public gathering:'}
          </p>

          <div className="space-y-2 text-xs sm:text-sm text-slate-200">
            {[
              {
                en: '1. Administrative clearance obtained via ECI Suvidha portal / local SDM office with receipt.',
                hi: '1. चुनाव आयोग के Suvidha पोर्टल या स्थानीय एसडीएम कार्यालय से मैदान और लाउडस्पीकर की लिखित अनुमति।'
              },
              {
                en: '2. Podium and sound testing completed at least 90 minutes before scheduled start.',
                hi: '2. सभा शुरू होने से कम से कम 90 मिनट पहले साउंड और माइक की स्पष्ट टेस्टिंग।'
              },
              {
                en: '3. Drinking water stations and basic first-aid medical kits installed at venue entrance.',
                hi: '3. मैदान के मुख्य द्वार पर स्वच्छ पेयजल स्टॉल और प्राथमिक चिकित्सा किट की तैनाती।'
              },
              {
                en: '4. Dedicated front-row seating reserved for women, senior citizens, and differently-abled.',
                hi: '4. माताओं-बहनों, बुजुर्गों और दिव्यांगों के लिए आगे की पंक्तियों में सुरक्षित बैठने की व्यवस्था।'
              },
              {
                en: '5. Press release (1-page summary with verified data points) printed for media correspondents.',
                hi: '5. उपस्थित पत्रकारों के लिए 1 पेज का प्रमाणित प्रेस नोट और तथ्य पत्रक उपलब्ध रखना।'
              },
              {
                en: '6. Supreme Court 10:00 PM loudspeaker restriction strictly respected.',
                hi: '6. सुप्रीम कोर्ट की रात 10:00 बजे लाउडस्पीकर बंद करने की समयसीमा का कड़ाई से सम्मान।'
              },
              {
                en: '7. Multi-angle HD video recording arranged for social media clips and legal record.',
                hi: '7. भाषण की मल्टी-एंगल वीडियो रिकॉर्डिंग ताकि तथ्यों को कोई तोड़-मरोड़ न सके।'
              },
              {
                en: '8. 15 designated youth volunteers wearing identifiable badges for crowd coordination.',
                hi: '8. भीड़ नियंत्रण और जनसहायता के लिए पहचान पत्र पहने 15 समर्पित युवा स्वयंसेवक।'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{item[language]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
