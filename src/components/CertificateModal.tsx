import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Certificate } from '../types';
import { Award, X, Printer, Share2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CertificateModal: React.FC = () => {
  const { selectedCertificate, setSelectedCertificate, language } = useApp();
  const certRef = useRef<HTMLDivElement>(null);

  if (!selectedCertificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Politics Academy Certificate',
        text: `I just earned my official Political & Democratic Leadership Certificate from Politics Academy! Verification Code: ${selectedCertificate.verificationCode}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`Politics Academy Verified Certificate: ${selectedCertificate.courseTitle[language]} awarded to ${selectedCertificate.userName} (ID: ${selectedCertificate.verificationCode})`);
      alert(language === 'hi' ? 'प्रमाणपत्र विवरण क्लिपबोर्ड में कॉपी हो गया है!' : 'Certificate link & verification code copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#091124] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-8">
        
        {/* Top Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-white font-serif">
              {language === 'hi' ? 'सत्यापित डिजिटल प्रमाणपत्र' : 'Verified Digital Certificate'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'प्रिंट / सेव' : 'Print / Save'}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{language === 'hi' ? 'शेयर करें' : 'Share'}</span>
            </button>
            <button
              onClick={() => setSelectedCertificate(null)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas / Card */}
        <div 
          ref={certRef}
          className="my-4 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0c1630] via-[#091024] to-[#060a16] border-4 border-double border-amber-400/60 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle Guilloche / Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span className="text-[120px] font-serif font-black text-amber-300">PA</span>
          </div>

          {/* Header Seal */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 border-2 border-amber-200 flex items-center justify-center text-slate-950 mx-auto mb-4 shadow-lg shadow-amber-500/30">
            <Award className="w-9 h-9" />
          </div>

          <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-amber-400 font-sans block mb-1">
            POLITICS ACADEMY • राजनीति अकादमी
          </span>

          <h2 className="text-xl sm:text-3xl font-extrabold text-white font-serif tracking-tight mb-2">
            CERTIFICATE OF DEMOCRATIC SCHOLARSHIP
          </h2>
          <p className="text-xs text-slate-400 italic mb-6">
            {language === 'hi' ? 'संवैधानिक एवं लोकतांत्रिक नेतृत्व सम्मान पत्र' : 'Recognizing Excellence in Constitutional Awareness and Civic Leadership'}
          </p>

          <p className="text-xs text-slate-300 uppercase tracking-widest font-sans mb-1">
            THIS IS PROUDLY CONFERRED UPON
          </p>
          <div className="text-2xl sm:text-4xl font-extrabold text-amber-300 font-serif tracking-wide underline decoration-amber-500/40 underline-offset-8 my-3">
            {selectedCertificate.userName}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed my-4">
            {language === 'hi' 
              ? `जिन्होंने सफलतापूर्वक ${selectedCertificate.courseTitle[language]} के संपूर्ण संवैधानिक पाठ्यक्रम का अध्ययन पूरा कर लिया है तथा लोकतांत्रिक शासन की उच्च समझ प्रदर्शित की है।`
              : `for having successfully mastered the foundational and advanced curriculum of "${selectedCertificate.courseTitle[language]}" with dedication to constitutional morality and democratic citizenship.`}
          </p>

          <div className="flex flex-wrap items-center justify-around gap-4 pt-6 mt-6 border-t border-amber-500/20 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                {language === 'hi' ? 'जारी करने की तिथि' : 'Date of Issue'}
              </span>
              <span className="font-bold text-slate-200">{selectedCertificate.issueDate}</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                {language === 'hi' ? 'सत्यापन कोड' : 'Verification ID'}
              </span>
              <span className="font-mono font-bold text-amber-400">{selectedCertificate.verificationCode}</span>
            </div>

            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">
                {language === 'hi' ? 'संवैधानिक मोहर' : 'Status'}
              </span>
              <span className="font-bold text-emerald-400 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Non-Partisan</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
