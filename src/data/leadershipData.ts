import { LeadershipModule } from '../types';

export const LEADERSHIP_MODULES: LeadershipModule[] = [
  {
    id: 'lead_speech_writing',
    category: 'speech_writing',
    icon: 'Feather',
    title: {
      en: 'The 4-Part Political Speech Writing Formula',
      hi: 'राजनीतिक भाषण लेखन का 4-चरणीय अचूक फॉर्मूला'
    },
    subtitle: {
      en: 'Draft rousing, structured, and emotionally resonant public speeches in minutes.',
      hi: 'जनता के दिलों को छूने वाले, अनुशासित और प्रेरक भाषण तैयार करना सीखें।'
    },
    guide: {
      steps: [
        {
          title: { en: '1. The Hook (15-45 seconds)', hi: '1. द हुक (पहले 15-45 सेकंड)' },
          description: {
            en: 'Start with a local story, a proverb, or an urgent question. Do NOT waste time reading a list of 20 VIP names.',
            hi: 'स्थानीय मुहावरे, जनभावना के सवाल या किसी जमीनी घटना से शुरुआत करें। मंच पर बैठे 20 लोगों के नाम गिनाने में समय न गंवाएं।'
          }
        },
        {
          title: { en: '2. The Shared Grievance (2-4 minutes)', hi: '2. साझा संकट और जनवेदना (2-4 मिनट)' },
          description: {
            en: 'State the public problem with empathy. Never demean the citizens; focus on administrative failure or neglected promises.',
            hi: 'समस्या को संवेदना के साथ रखें। जनता को दोष न दें; नीतियों की विफलता और अधूरे वादों को उजागर करें।'
          }
        },
        {
          title: { en: '3. The Constructive Roadmap (3-5 minutes)', hi: '3. सकारात्मक समाधान और रोडमैप (3-5 मिनट)' },
          description: {
            en: 'Give 3 concrete, realistic pledges: What will you build, fix, or fund in your first 100 days?',
            hi: '3 स्पष्ट और व्यावहारिक वादे रखें: पहले 100 दिनों में आप कौन सा ठोस काम करेंगे?'
          }
        },
        {
          title: { en: '4. The Call to Action & Resolution (1-2 minutes)', hi: '4. जन-संकल्प और समापन (1-2 मिनट)' },
          description: {
            en: 'End on high energy. Ask the crowd to raise their hands or chant a unifying slogan for change.',
            hi: 'पूरी ऊर्जा के साथ समाप्त करें। जनता से हाथ उठवाकर बदलाव का संकल्प लें।'
          }
        }
      ],
      dosAndDonts: {
        dos: {
          en: [
            'Use short, punchy sentences of 8-12 words.',
            'Pause for 2-3 seconds after every major punchline.',
            'Connect local issues with constitutional rights and justice.'
          ],
          hi: [
            'छोटे और प्रभावशाली वाक्यों का प्रयोग करें।',
            'किसी भी दमदार बात के बाद 2-3 सेकंड का विराम लें।',
            'स्थानीय समस्याओं को संविधान के हक और न्याय से जोड़ें।'
          ]
        },
        donts: {
          en: [
            'Never make personal abusive remarks against opponents.',
            'Never yell continuously; let vocal modulation create drama.',
            'Never exceed your allotted speech time by more than 2 minutes.'
          ],
          hi: [
            'विरोधियों पर कभी भी अमर्यादित या व्यक्तिगत टिप्पणी न करें।',
            'माइक पर लगातार चिल्लाने से बचें; आवाज के उतार-चढ़ाव से प्रभाव बनाएं।',
            'तय समय से अधिक लंबा भाषण देकर जनता को न उबाएं।'
          ]
        }
      },
      templates: [
        {
          title: { en: 'Civic Development & Youth Employment Speech', hi: 'क्षेत्रीय विकास एवं युवा रोजगार भाषण प्रारूप' },
          content: {
            en: `[HOOK]
Brothers, sisters, and my energetic young friends of [Constituency Name],
When I walked through the market this morning, a young engineering graduate told me: "Sir, I have the degree, but the only job available is delivering groceries 14 hours a day."
That broke my heart. Because youth are not liabilities; youth are the supreme engine of India’s destiny!

[THE SHARED CRISIS]
For five long years, you were promised an IT park, promised clean drinking water, promised modern hospitals.
Where is that IT park today? Only thorny bushes and broken boundary walls remain. Our hard-earned tax money went somewhere, but not into your children's future!

[THE ROADMAP]
I am not here today to give you empty hollow promises. I give you three solemn constitutional commitments:
1. Within 60 days, we will set up a Youth Skill & Entrepreneurship Incubator with ₹10 Crore seed funding.
2. Every government school in our ward will have computer labs and safe toilets for our daughters.
3. Every single rupee of our MLA/MP development fund will be published live online in an open citizen ledger.

[CALL TO ACTION]
Change will not come from sitting at home. Change comes when honest people step forward!
Raise both your hands and pledge with me: For our children's future, for truth, and for real progress—we shall rise and win!
Jai Hind! Vande Mataram!`,
            hi: `[हुक / शुरुआत]
[क्षेत्र का नाम] के मेरे देवतुल्य भाइयों, माताओं-बहनों और ऊर्जावान युवा साथियों!
आज सुबह जब मैं मुख्य बाजार से गुजर रहा था, तो एक होनहार ग्रेजुएट युवा ने मुझसे नम आंखों से कहा: "भैया, हाथ में डिग्री है पर नौकरी नहीं, 14 घंटे मजदूरी करने को मजबूर हूँ।"
उसकी बात ने मेरे दिल को झकझोर दिया। क्योंकि इस देश का युवा बोझ नहीं, राष्ट्र के नवनिर्माण की सबसे बड़ी ताकत है!

[साझा संकट]
पिछले पाँच वर्षों में आपसे अस्पताल, डिग्री कॉलेज और रोजगार के बड़े-बड़े वादे किए गए थे।
कहाँ हैं वे वादे? आज भी हमारे बच्चों को सामान्य इलाज के लिए 50 किलोमीटर दूर जिला अस्पताल भागना पड़ता है। हमारा टैक्स गया कहाँ?

[समाधान और रोडमैप]
मैं यहाँ सिर्फ भाषण देने नहीं आया हूँ। मैं आपके सामने 3 ठोस संकल्प रखता हूँ:
1. पहले 60 दिनों में युवा उद्यमिता केंद्र की स्थापना होगी जहाँ स्थानीय प्रतिभाओं को स्वरोजगार मिलेगा।
2. क्षेत्र के हर सरकारी स्कूल में बेटियों के लिए सुरक्षित शौचालय और आधुनिक कंप्यूटर लैब बनेगी।
3. विधायक/सांसद निधि के एक-एक पैसे का हिसाब हर महीने सार्वजनिक किया जाएगा।

[जन-आह्वान]
साथियों, घर बैठकर व्यवस्था नहीं बदलती। जब अच्छे लोग मैदान में आते हैं, तभी लोकतंत्र जीतता है!
अपने दोनों हाथ उठाकर मेरे साथ संकल्प लीजिए—हक के लिए, सम्मान के लिए, और अपने बच्चों के सुनहरे भविष्य के लिए!
जय हिन्द! इंकलाब जिंदाबाद!`
          }
        }
      ]
    }
  },
  {
    id: 'lead_public_meetings',
    category: 'public_speaking',
    icon: 'Megaphone',
    title: {
      en: 'How to Organize & Address Public Meetings & Rallies',
      hi: 'जनसभा और रैली का सफल आयोजन एवं संबोधन'
    },
    subtitle: {
      en: 'End-to-end field playbook from police permissions, sound engineering, stage protocols to crowd safety.',
      hi: 'प्रशासनिक अनुमति, साउंड व्यवस्था, मंच अनुशासन और जनसुरक्षा का संपूर्ण फील्ड अनुभव।'
    },
    guide: {
      steps: [
        {
          title: { en: '1. Administrative Clearances (Suvidha Portal)', hi: '1. प्रशासनिक अनुमति (Suvidha पोर्टल)' },
          description: {
            en: 'Apply at least 7 days prior for sound, venue, and fire permissions. Never hold unauthorized gatherings.',
            hi: 'कम से कम 7 दिन पहले साउंड, मैदान और पुलिस क्लीयरेंस लें। बिना अनुमति के कोई भी सभा न करें।'
          }
        },
        {
          title: { en: '2. Acoustic & Stage Setup', hi: '2. साउंड और स्टेज की तैयारी' },
          description: {
            en: 'Test the microphone 1 hour before the crowd arrives. The stage should be 4-5 feet high so everyone has clear line of sight.',
            hi: 'भीड़ आने से 1 घंटे पहले साउंड चेक करें। स्टेज 4 से 5 फीट ऊंचा हो ताकि दूर खड़े व्यक्ति को भी आप साफ दिखें।'
          }
        },
        {
          title: { en: '3. Crowd Management & Warm-up', hi: '3. जनसहभागिता और वार्म-अप' },
          description: {
            en: 'Local folk singers or respected community elders should speak first to warm up the gathering before the main address.',
            hi: 'मुख्य भाषण से पहले स्थानीय कवियों या वरिष्ठ सामाजिक कार्यकर्ताओं के संबोधन से माहौल तैयार करें।'
          }
        }
      ],
      dosAndDonts: {
        dos: {
          en: [
            'Have dedicated drinking water stalls and first-aid kits on ground.',
            'Honor women, elderly, and differently-abled with reserved front seating.',
            'Record the entire speech in high-definition video from multiple angles.'
          ],
          hi: [
            'सभा स्थल पर पीने के पानी और प्राथमिक चिकित्सा की समुचित व्यवस्था रखें।',
            'माताओं-बहनों और बुजुर्गों के लिए आगे बैठने की अलग व्यवस्था करें।',
            'पूरे भाषण की उच्च गुणवत्ता वाली वीडियो रिकॉर्डिंग जरूर करवाएं।'
          ]
        },
        donts: {
          en: [
            'Do not allow 30 people to crowd the podium behind the speaker.',
            'Do not violate the 10:00 PM loudspeaker noise restriction deadline.',
            'Do not let rival group hecklers derail your composure; stay calm.'
          ],
          hi: [
            'माइक के पीछे 30 लोगों को जमा न होने दें, वक्ता को खुला स्थान दें।',
            'रात 10 बजे के बाद सुप्रीम कोर्ट की ध्वनि प्रदूषण गाइडलाइन का उल्लंघन न करें।',
            'यदि विरोधी नारेबाजी करें तो आप गुस्सा न हों, मुस्कुराकर शालीनता बनाए रखें।'
          ]
        }
      }
    }
  },
  {
    id: 'lead_community_action',
    category: 'community_action',
    icon: 'Users',
    title: {
      en: 'Organizing Ward Sabhas & Community Action',
      hi: 'वार्ड सभा और जनहित अभियानों का सफल संगठन'
    },
    subtitle: {
      en: 'How to build trust among 5000 families through systematic grassroots problem-solving.',
      hi: '5000 परिवारों का अटूट भरोसा जीतने के लिए जमीनी काम करने की व्यावहारिक पद्धति।'
    },
    guide: {
      steps: [
        {
          title: { en: '1. The Weekly Grievance Hearing (जनसुनवाई)', hi: '1. साप्ताहिक जनसुनवाई का आयोजन' },
          description: {
            en: 'Sit in a public chowk or community room every Sunday morning at a fixed time so citizens know you are always reachable.',
            hi: 'हर रविवार सुबह एक निश्चित समय पर सार्वजनिक स्थान पर बैठें ताकि जनता को पता हो कि आप हमेशा उपलब्ध हैं।'
          }
        },
        {
          title: { en: '2. Citizen Action Cards', hi: '2. नागरिक समस्या पर्ची' },
          description: {
            en: 'Give a carbon-copy token for every complaint with officer name, department, and expected turnaround time.',
            hi: 'हर शिकायत पर पीड़ित को एक रिसीविंग पर्ची दें जिस पर संबंधित अधिकारी का नाम और तारीख लिखी हो।'
          }
        },
        {
          title: { en: '3. Follow-up Escalation', hi: '3. निरंतर फॉलो-अप' },
          description: {
            en: 'If officials do not resolve the issue in 15 days, lead a delegation of 10 respected residents to meet the Collector.',
            hi: 'यदि 15 दिन में काम न हो, तो क्षेत्र के 10 संभ्रांत नागरिकों के प्रतिनिधिमंडल के साथ सीधे जिला कलेक्टर से मिलें।'
          }
        }
      ],
      dosAndDonts: {
        dos: {
          en: [
            'Maintain a WhatsApp broadcast group for civic announcements.',
            'Celebrate national festivals with all communities together.',
            'Be present during personal family tragedies (funerals/illness).'
          ],
          hi: [
            'क्षेत्रीय समस्याओं और सूचनाओं के लिए व्हाट्सएप ग्रुप या ब्रॉडकास्ट रखें।',
            'सभी धर्मों और वर्गों के त्योहारों में निष्ठा से शामिल हों।',
            'खुशी में कोई पहुंचे या न पहुंचे, किसी के दुख-विपदा में सबसे पहले पहुंचें।'
          ]
        },
        donts: {
          en: [
            'Do not promise things that are completely illegal or impossible.',
            'Do not display caste or religious bias in extending civic help.',
            'Do not switch off your phone when the public is in crisis.'
          ],
          hi: [
            'कभी ऐसे काम का वादा न करें जो गैर-कानूनी या असंभव हो।',
            'मदद करते समय कभी भी जाति या धर्म का भेदभाव न करें।',
            'संकट के समय अपना फोन कभी बंद न रखें।'
          ]
        }
      }
    }
  }
];
