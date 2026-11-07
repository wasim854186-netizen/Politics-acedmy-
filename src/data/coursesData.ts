import { Course } from '../types';

export const INITIAL_COURSES: Course[] = [
  // ==================== BEGINNER LEVEL ====================
  {
    id: 'course_beg_1',
    level: 'beginner',
    title: {
      en: 'Foundations of Politics & Democracy',
      hi: 'राजनीति और लोकतंत्र की बुनियादी समझ'
    },
    description: {
      en: 'Understand the true meaning of politics, citizen power, democratic systems, and the Indian Constitution.',
      hi: 'राजनीति का वास्तविक अर्थ, नागरिक शक्ति, लोकतांत्रिक प्रणाली और भारतीय संविधान की मूल भावना को समझें।'
    },
    icon: 'Scale',
    color: 'from-amber-500 to-amber-700',
    modulesCount: 7,
    lessons: [
      {
        id: 'lesson_what_is_politics',
        level: 'beginner',
        category: 'Political Science Basics',
        readTimeMinutes: 4,
        title: {
          en: 'What is Politics? (Beyond Party Feuds)',
          hi: 'राजनीति क्या है? (दलीय विवादों से परे)'
        },
        summary: {
          en: 'Politics is the collective process through which citizens and representatives make decisions about resources, public rules, and community welfare.',
          hi: 'राजनीति वह सामूहिक प्रक्रिया है जिसके जरिए नागरिक और उनके प्रतिनिधि समाज के संसाधनों, कानूनों और जनकल्याण के फैसले लेते हैं।'
        },
        keyPoints: {
          en: [
            'Derived from Greek "Polis" meaning city or community affairs.',
            'It is not merely elections; it determines public healthcare, schools, roads, water, and taxes.',
            'Without active citizen awareness, democracy becomes an oligarchy.'
          ],
          hi: [
            'यह यूनानी शब्द "पॉलिस" (Polis) से बना है, जिसका अर्थ है नागरिक समाज के मामले।',
            'राजनीति सिर्फ चुनाव नहीं है; यह आपके अस्पताल, सड़क, स्कूल, बिजली और करों का निर्धारण करती है।',
            'नागरिकों की सक्रिय भागीदारी के बिना लोकतंत्र कमजोर हो जाता है।'
          ]
        },
        content: {
          en: `Many people believe politics is merely dirty mudslinging between political parties. In reality, **politics is the art and science of collective decision-making**.

When a village decides where to dig a borewell, when a municipal corporation allocates budget for roads, or when Parliament passes a national education policy—that is politics at work.

### The Three Pillars of Political Power:
1. **The State (राज्य):** The enduring institution with defined territory, population, government, and sovereignty.
2. **The Government (सरकार):** The temporary executive administrative machinery chosen by citizens to run state affairs.
3. **The Citizens (नागरिक):** The ultimate sovereign power in a constitutional democracy (Article 326 universal adult suffrage).`,
          hi: `अधिकांश लोग राजनीति को केवल चुनावी रैलियों या नेताओं के आपसी आरोप-प्रत्यारोप तक सीमित समझते हैं। वास्तव में, **राजनीति समाज के सामूहिक जीवन को व्यवस्थित करने का विज्ञान है**।

जब कोई ग्राम पंचायत यह तय करती है कि सड़क कहाँ बनेगी, या जब संसद राष्ट्रीय शिक्षा नीति पारित करती है—यह सब राजनीति का ही हिस्सा है।

### राजनीतिक शक्ति के तीन प्रमुख अंग:
1. **राज्य (The State):** एक निश्चित भूभाग, जनसंख्या और संप्रभुता वाला स्थायी संस्थान।
2. **सरकार (The Government):** नागरिकों द्वारा सीमित समय के लिए चुनी गई व्यवस्था जो शासन चलाती है।
3. **नागरिक (The Citizens):** लोकतंत्र में संप्रभुता का वास्तविक स्रोत भारत की जनता है।`
        },
        constitutionalReference: 'Preamble of the Constitution of India ("WE, THE PEOPLE OF INDIA...")',
        practicalExample: {
          en: 'If clean drinking water is not reaching your ward, contacting your Ward Councilor or filing a grievance under Public Services Guarantee Act is everyday civic politics.',
          hi: 'यदि आपके मोहल्ले में साफ पीने का पानी नहीं आ रहा है, तो पार्षद से संपर्क करना या जनसुनवाई में जाना ही रोजमर्रा की लोकतांत्रिक राजनीति है।'
        },
        proTip: {
          en: 'Never be politically indifferent. Plato famously noted: "The price good men pay for indifference to public affairs is to be ruled by evil men."',
          hi: 'राजनीति से उदासीन मत रहिए। अरस्तू ने कहा था—मनुष्य स्वभाव से ही एक राजनीतिक प्राणी है।'
        },
        quizQuestion: {
          question: {
            en: 'In a constitutional democracy like India, who holds the ultimate sovereign power?',
            hi: 'भारत जैसे संवैधानिक लोकतंत्र में अंतिम संप्रभु शक्ति किसके पास है?'
          },
          options: {
            en: ['The Prime Minister', 'The Supreme Court', 'The Citizens of India', 'The Military'],
            hi: ['प्रधानमंत्री', 'सर्वोच्च न्यायालय', 'भारत के नागरिक (जनता)', 'सेना']
          },
          correctIndex: 2,
          explanation: {
            en: 'The Preamble starts with "We, the People of India", confirming that sovereignty originates from the citizens.',
            hi: 'संविधान की प्रस्तावना "हम, भारत के लोग" से शुरू होती है, जो स्पष्ट करती है कि सर्वोच्च शक्ति जनता में निहित है।'
          }
        }
      },
      {
        id: 'lesson_what_is_democracy',
        level: 'beginner',
        category: 'Governance Systems',
        readTimeMinutes: 5,
        title: {
          en: 'What is Democracy? (Direct vs Representative)',
          hi: 'लोकतंत्र क्या है? (प्रत्यक्ष बनाम प्रतिनिधि लोकतंत्र)'
        },
        summary: {
          en: 'Democracy is government of the people, by the people, for the people, built on constitutional supremacy and rule of law.',
          hi: 'लोकतंत्र जनता का, जनता द्वारा और जनता के लिए शासन है, जो विधि के शासन और संवैधानिक सर्वोच्चता पर आधारित है।'
        },
        keyPoints: {
          en: [
            'Direct democracy (referendums, Gram Sabhas) vs Representative democracy (MPs, MLAs).',
            'Rule of Law (Article 14): No individual is above the law, regardless of post.',
            'Protection of minority views alongside majority mandate.'
          ],
          hi: [
            'प्रत्यक्ष लोकतंत्र (ग्राम सभा) बनाम प्रतिनिधि लोकतंत्र (संसद/विधानसभा)।',
            'विधि का शासन (अनुच्छेद 14): कोई भी व्यक्ति, चाहे वह किसी भी पद पर हो, कानून से ऊपर नहीं है।',
            'बहुमत के शासन के साथ अल्पमत और असहमत आवाजों के अधिकारों की रक्षा।'
          ]
        },
        content: {
          en: `Democracy is far more than casting a vote once every 5 years. It is an everyday culture of questioning, accountability, and institutional checks and balances.

### Key Types of Democracy:
- **Direct Democracy:** Citizens vote directly on laws and policies (e.g., ancient Athens, Swiss cantonal referendums, and local Gram Sabha meetings in India).
- **Representative Parliamentary Democracy:** Citizens elect representatives (MPs and MLAs) who debate and enact statutes on their behalf (India, UK, Canada).

### Fundamental Principles of Healthy Democracy:
1. Periodic, free and fair elections administered by an autonomous body (Article 324).
2. Independent judiciary to safeguard constitutional rights.
3. Freedom of expression, peaceful assembly, and free press (Article 19).`,
          hi: `लोकतंत्र केवल 5 साल में एक बार वोट डालने का नाम नहीं है। यह संस्थागत जवाबदेही, प्रश्न पूछने के अधिकार और नागरिकों की निरंतर निगरानी की एक जीवंत व्यवस्था है।

### लोकतंत्र के प्रकार:
- **प्रत्यक्ष लोकतंत्र:** जहाँ नागरिक स्वयं नीतियों पर सीधा मतदान करते हैं (जैसे भारत में ग्राम सभा की खुली बैठक)।
- **प्रतिनिधि संसदीय लोकतंत्र:** जहाँ जनता अपने प्रतिनिधि (सांसद, विधायक) चुनती है, जो उनकी ओर से संसद और विधानसभा में कानून बनाते हैं।

### जीवंत लोकतंत्र की अनिवार्य शर्तें:
1. निष्पक्ष एवं स्वतंत्र चुनाव आयोग द्वारा चुनाव (अनुच्छेद 324)।
2. स्वतंत्र न्यायपालिका जो नागरिकों के मूल अधिकारों की रक्षा करे।
3. अभिव्यक्ति की स्वतंत्रता और निष्पक्ष मीडिया (अनुच्छेद 19)।`
        },
        constitutionalReference: 'Article 324 (Independent Election Commission) & Article 19 (Fundamental Freedoms)',
        practicalExample: {
          en: 'Gram Sabha meetings under Panchayati Raj are India’s living example of direct democracy where all adult villagers directly vote on village development plans.',
          hi: 'पंचायती राज के तहत ग्राम सभा प्रत्यक्ष लोकतंत्र का सबसे सशक्त उदाहरण है, जहाँ गाँव का हर वयस्क नागरिक विकास योजनाओं पर सीधे हाथ उठाकर निर्णय लेता है।'
        },
        proTip: {
          en: 'Healthy democracies require loyal opposition. Dissent is not treason; it is the safety valve of democracy.',
          hi: 'एक स्वस्थ लोकतंत्र में विपक्ष की भूमिका भी उतनी ही महत्वपूर्ण होती है जितनी सरकार की।'
        },
        quizQuestion: {
          question: {
            en: 'Which institution in an Indian village functions as direct democracy?',
            hi: 'भारतीय गाँव में कौन सी संस्था प्रत्यक्ष लोकतंत्र के रूप में कार्य करती है?'
          },
          options: {
            en: ['Police Thana', 'Gram Sabha (Assembly of all voters)', 'Block Development Office', 'District Court'],
            hi: ['पुलिस थाना', 'ग्राम सभा (समस्त मतदाताओं की सभा)', 'प्रखंड विकास कार्यालय (BDO)', 'जिला न्यायालय']
          },
          correctIndex: 1,
          explanation: {
            en: 'Gram Sabha consists of all registered voters in a village, making direct decisions on local matters.',
            hi: 'ग्राम सभा में गाँव के सभी पंजीकृत मतदाता सदस्य होते हैं जो स्थानीय योजनाओं पर सीधा फैसला लेते हैं।'
          }
        }
      },
      {
        id: 'lesson_what_is_constitution',
        level: 'beginner',
        category: 'Constitutional Law',
        readTimeMinutes: 5,
        title: {
          en: 'What is the Constitution? The Supreme Law',
          hi: 'संविधान क्या है? देश का सर्वोच्च कानून'
        },
        summary: {
          en: 'The Constitution is the supreme document that creates government branches, limits their powers, and guarantees citizen rights.',
          hi: 'संविधान वह सर्वोच्च पवित्र दस्तावेज है जो सरकार के अंगों का गठन करता है, उनकी शक्तियों को सीमित करता है और नागरिकों के अधिकारों की रक्षा करता है।'
        },
        keyPoints: {
          en: [
            'Adopted on 26 Nov 1949, enacted on 26 Jan 1950.',
            'Drafted by Constituent Assembly led by Dr. B.R. Ambedkar.',
            'Longest written constitution in the world, flexible yet rigid.'
          ],
          hi: [
            '26 नवंबर 1949 को अंगीकृत और 26 जनवरी 1950 को लागू हुआ।',
            'बाबासाहेब डॉ. बी.आर. आंबेडकर की अध्यक्षता वाली प्रारूप समिति द्वारा तैयार किया गया।',
            'दुनिया का सबसे लंबा लिखित संविधान, जो लचीला और कठोर दोनों है।'
          ]
        },
        content: {
          en: `The Constitution is not merely a legal book; it is the **social contract of the nation**.

Without a constitution, whoever holds military or political power could make arbitrary rules, jail critics without trial, and suppress individual freedoms.

### What Does the Constitution Do?
1. **Defines State Structure:** Creates Legislature (makes laws), Executive (implements laws), and Judiciary (adjudicates disputes).
2. **Sets Limits on Power:** Prevents tyrannical laws through Fundamental Rights (Part III).
3. **Outlines National Aspirations:** Sets socio-economic welfare goals through Directive Principles of State Policy (Part IV).
4. **Basic Structure Doctrine:** The Supreme Court (Kesavananda Bharati case, 1973) held that Parliament cannot destroy the core structure of the Constitution (democracy, secularism, rule of law, judicial review).`,
          hi: `संविधान केवल एक कानूनी किताब नहीं, बल्कि देश के 140 करोड़ नागरिकों का सामूहिक संकल्प-पत्र है।

संविधान के बिना कोई भी ताकतवर व्यक्ति या दल मनमाने नियम बना सकता था। संविधान सरकार की शक्तियों पर अंकुश लगाता है।

### संविधान के मुख्य कार्य:
1. **राज्य के अंगों का निर्माण:** विधायिका (कानून बनाना), कार्यपालिका (कानून लागू करना), और न्यायपालिका (समीक्षा व न्याय)।
2. **शक्तियों की सीमा तय करना:** मौलिक अधिकारों (भाग 3) के जरिए नागरिकों को राज्य के मनमानेपन से सुरक्षा देना।
3. **कल्याणकारी राज्य का विजन:** नीति निदेशक तत्व (भाग 4) सरकार को सामाजिक-आर्थिक न्याय के निर्देश देते हैं।
4. **मूल संरचना का सिद्धांत (Basic Structure):** 1973 के केशवानंद भारती मामले में सुप्रीम कोर्ट ने तय किया कि संसद संविधान के मूल ढांचे (लोकतंत्र, धर्मनिरपेक्षता, न्यायपालिका की स्वतंत्रता) को नष्ट नहीं कर सकती।`
        },
        constitutionalReference: 'Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225',
        practicalExample: {
          en: 'If Parliament passes an arbitrary law banning newspapers, the Supreme Court can strike it down as unconstitutional under Article 13 & 32.',
          hi: 'यदि संसद कोई ऐसा कानून बना दे जो नागरिकों के बोलने की आजादी छीने, तो सुप्रीम कोर्ट अनुच्छेद 32 के तहत उसे असंवैधानिक घोषित कर रद्द कर सकता है।'
        },
        proTip: {
          en: 'Constitutional Morality means respecting democratic conventions and institutions even when laws do not explicitly prohibit an action.',
          hi: 'संवैधानिक नैतिकता का अर्थ है केवल कानून का पालन नहीं, बल्कि लोकतांत्रिक संस्थाओं और मर्यादाओं का सम्मान करना।'
        },
        quizQuestion: {
          question: {
            en: 'In which landmark case did the Supreme Court establish the "Basic Structure Doctrine"?',
            hi: 'सर्वोच्च न्यायालय ने किस ऐतिहासिक मामले में "मूल संरचना सिद्धांत" (Basic Structure) प्रतिपादित किया?'
          },
          options: {
            en: ['Kesavananda Bharati case (1973)', 'Golaknath case (1967)', 'Shah Bano case (1985)', 'Minerva Mills case (1980)'],
            hi: ['केशवानंद भारती मामला (1973)', 'गोलकनाथ मामला (1967)', 'शाह बानो मामला (1985)', 'मिनर्वा मिल्स मामला (1980)']
          },
          correctIndex: 0,
          explanation: {
            en: 'The 13-judge constitutional bench ruled that Parliament cannot alter the basic framework of the Constitution.',
            hi: '13 जजों की संविधान पीठ ने फैसला दिया था कि संसद संविधान के मूल ढांचे को संशोधित नहीं कर सकती।'
          }
        }
      },
      {
        id: 'lesson_what_is_parliament',
        level: 'beginner',
        category: 'Legislature',
        readTimeMinutes: 4,
        title: {
          en: 'What is Parliament? The Temple of Democracy',
          hi: 'संसद क्या है? लोकतंत्र का सर्वोच्च सदन'
        },
        summary: {
          en: 'The Parliament of India consists of the President, Lok Sabha, and Rajya Sabha, functioning as the supreme lawmaking and executive-scrutiny body.',
          hi: 'भारतीय संसद राष्ट्रपति, लोकसभा और राज्यसभा से मिलकर बनती है, जो देश में कानून बनाने और सरकार की जवाबदेही तय करने का सर्वोच्च मंच है।'
        },
        keyPoints: {
          en: [
            'Article 79: Parliament = President + Council of States (Rajya Sabha) + House of the People (Lok Sabha).',
            'Controls national purse strings (Budget cannot be spent without parliamentary sanction).',
            'Accountability instruments: Question Hour, Zero Hour, Calling Attention Motions.'
          ],
          hi: [
            'अनुच्छेद 79: संसद में राष्ट्रपति, राज्यसभा और लोकसभा शामिल हैं।',
            'देश के खजाने पर नियंत्रण (संसद की मंजूरी के बिना सरकार एक रुपया भी खर्च नहीं कर सकती)।',
            'जवाबदेही के साधन: प्रश्नकाल, शून्यकाल, ध्यानाकर्षण प्रस्ताव और अविश्वास प्रस्ताव।'
          ]
        },
        content: {
          en: `India follows the Westminster parliamentary model. Under **Article 79**, the Parliament comprises:
1. **The President of India** (Constitutional Head who summons houses and signs bills into acts).
2. **Lok Sabha (House of the People)** - Directly elected by citizens.
3. **Rajya Sabha (Council of States)** - Represents Indian federal states.

### Core Functions of Parliament:
- **Lawmaking:** Debating, amending, and enacting statutes for the nation.
- **Financial Control:** Authorizing government expenditures through the Annual Financial Statement (Budget - Article 112).
- **Executive Oversight:** Ministers are directly answerable to MPs during Question Hour.`,
          hi: `भारत ने ब्रिटेन की वेस्टमिंस्टर संसदीय प्रणाली को अपनाया है। **अनुच्छेद 79** के अनुसार संसद के तीन अंग हैं:
1. **राष्ट्रपति:** देश के संवैधानिक प्रमुख जो सत्र बुलाते हैं और विधेयकों पर हस्ताक्षर करते हैं।
2. **लोकसभा:** जनता द्वारा प्रत्यक्ष रूप से चुने गए सांसदों का सदन।
3. **राज्यसभा:** राज्यों और केंद्र शासित प्रदेशों का प्रतिनिधित्व करने वाला स्थायी उच्च सदन।

### संसद के मुख्य कार्य:
- **कानून बनाना:** राष्ट्रीय विषयों पर बहस करना और कानून पारित करना।
- **बजट पर नियंत्रण (अनुच्छेद 112):** संसद की अनुमति के बिना कार्यपालिका कर नहीं लगा सकती और न ही जनता का पैसा खर्च कर सकती है।
- **सरकार से सवाल पूछना:** प्रश्नकाल में सांसद मंत्रियों से सीधे प्रश्न पूछते हैं।`
        },
        constitutionalReference: 'Articles 79, 80, 81, and 112 of the Constitution of India',
        practicalExample: {
          en: 'When your local MP asks the Railway Minister about delays in your city’s station modernization during Question Hour, that is parliamentary scrutiny.',
          hi: 'जब आपके क्षेत्र के सांसद प्रश्नकाल में रेल मंत्री से आपके शहर के स्टेशन के बारे में सवाल पूछते हैं, तो वह संसदीय जवाबदेही का प्रत्यक्ष रूप होता है।'
        },
        proTip: {
          en: 'Citizens can watch live Lok Sabha and Rajya Sabha proceedings on Sansad TV to see how their elected MPs represent their constituency.',
          hi: 'संसद टीवी पर सीधे प्रसारण देखकर आप जान सकते हैं कि आपके चुने हुए सांसद सदन में आपकी आवाज उठा रहे हैं या नहीं।'
        },
        quizQuestion: {
          question: {
            en: 'According to Article 79, which three components constitute the Parliament of India?',
            hi: 'अनुच्छेद 79 के अनुसार भारतीय संसद में कौन-से तीन घटक शामिल हैं?'
          },
          options: {
            en: [
              'Prime Minister, Chief Justice, Speaker',
              'President, Lok Sabha, Rajya Sabha',
              'Lok Sabha, Rajya Sabha, Supreme Court',
              'Cabinet, Governors, President'
            ],
            hi: [
              'प्रधानमंत्री, मुख्य न्यायाधीश, लोकसभा अध्यक्ष',
              'राष्ट्रपति, लोकसभा, राज्यसभा',
              'लोकसभा, राज्यसभा, सर्वोच्च न्यायालय',
              'मंत्रिमंडल, राज्यपाल, राष्ट्रपति'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'Article 79 explicitly defines Parliament as the President and the two Houses (Lok Sabha and Rajya Sabha).',
            hi: 'अनुच्छेद 79 के अनुसार संसद राष्ट्रपति और दोनों सदनों (लोकसभा व राज्यसभा) से मिलकर बनती है।'
          }
        }
      },
      {
        id: 'lesson_lok_sabha_vs_rajya_sabha',
        level: 'beginner',
        category: 'Legislature',
        readTimeMinutes: 5,
        title: {
          en: 'Lok Sabha vs Rajya Sabha: The Key Differences',
          hi: 'लोकसभा और राज्यसभा: क्या है दोनों में अंतर?'
        },
        summary: {
          en: 'Comparison between the directly elected Lower House (House of the People) and the permanent federal Upper House (Council of States).',
          hi: 'जनता द्वारा प्रत्यक्ष चुनी गई लोकसभा (निचला सदन) और राज्यों का प्रतिनिधित्व करने वाली स्थायी राज्यसभा (उच्च सदन) की विस्तृत तुलना।'
        },
        keyPoints: {
          en: [
            'Lok Sabha: 543 elected members, 5-year tenure (subject to dissolution), exclusive power over Money Bills.',
            'Rajya Sabha: 250 members max (238 elected by State MLAs + 12 nominated by President), permanent body (1/3 retire every 2 years).',
            'Government is responsible only to Lok Sabha (No-Confidence Motion only in Lok Sabha).'
          ],
          hi: [
            'लोकसभा: 543 निर्वाचित सदस्य, 5 वर्ष का कार्यकाल (भंग हो सकती है), धन विधेयक पर एकाधिकार।',
            'राज्यसभा: अधिकतम 250 सदस्य (238 राज्यों के विधायकों द्वारा चुने गए + 12 राष्ट्रपति द्वारा मनोनीत), स्थायी सदन (कभी भंग नहीं होता, 1/3 हर 2 साल में सेवानिवृत्त)।',
            'मंत्रिपरिषद केवल लोकसभा के प्रति सामूहिक रूप से उत्तरदायी होती है।'
          ]
        },
        content: {
          en: `India has a bicameral parliament to balance popular democracy with federal representation.

| Feature | Lok Sabha (Lower House) | Rajya Sabha (Upper House) |
|---|---|---|
| **Constitutional Term** | House of the People | Council of States |
| **Membership** | 543 elected from single-member constituencies | 245 current (elected by State MLAs + 12 nominated) |
| **Minimum Age** | 25 Years | 30 Years |
| **Tenure** | 5 Years (Can be dissolved earlier) | Permanent Body (Each member serves 6-year term) |
| **Presiding Officer** | Speaker (Elected by members) | Vice President of India (Ex-officio Chairman) |
| **Special Power** | Money Bills (Article 110), No-Confidence Motion | Authorizing Parliament to legislate on State List (Art 249), Creating All-India Services (Art 312) |`,
          hi: `भारतीय संसद द्विसदनीय है ताकि जनमत और संघीय संतुलन दोनों बने रहें।

| विशेषता | लोकसभा (निचला सदन) | राज्यसभा (उच्च सदन) |
|---|---|---|
| **संवैधानिक नाम** | जनता का सदन (House of the People) | राज्यों की परिषद (Council of States) |
| **सीटें** | 543 प्रत्यक्ष निर्वाचित | 245 (राज्यों के विधायकों द्वारा निर्वाचित + 12 मनोनीत) |
| **न्यूनतम आयु** | 25 वर्ष | 30 वर्ष |
| **कार्यकाल** | 5 वर्ष (समय से पहले भी भंग हो सकती है) | स्थायी सदन (सदस्य 6 वर्ष के लिए, 1/3 हर 2 वर्ष में सेवानिवृत्त) |
| **अध्यक्ष** | लोकसभा अध्यक्ष (स्पीकर) | भारत के उपराष्ट्रपति (पदेन सभापति) |
| **विशेष शक्तियाँ** | धन विधेयक (अनुच्छेद 110), अविश्वास प्रस्ताव | राज्य सूची पर कानून बनाने का अधिकार (अनुच्छेद 249), नई अखिल भारतीय सेवाएं बनाना (अनुच्छेद 312) |`
        },
        constitutionalReference: 'Articles 80, 81, 109, and 110 of the Constitution of India',
        practicalExample: {
          en: 'The Union Budget is introduced first in the Lok Sabha. Rajya Sabha can only discuss and suggest amendments within 14 days, but cannot reject it.',
          hi: 'केंद्रीय बजट सबसे पहले लोकसभा में पेश होता है। राज्यसभा केवल 14 दिनों तक चर्चा कर सुझाव दे सकती है, रोक नहीं सकती।'
        },
        proTip: {
          en: 'Rajya Sabha acts as a revising chamber to prevent hasty, ill-considered legislation passed in the heat of political majorities.',
          hi: 'राज्यसभा को एक परिपक्व सदन माना जाता है जो किसी भी जल्दबाजी में पारित कानून की गहन समीक्षा करता है।'
        },
        quizQuestion: {
          question: {
            en: 'What is the minimum age required to become a member of Rajya Sabha?',
            hi: 'राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु क्या है?'
          },
          options: {
            en: ['21 Years', '25 Years', '30 Years', '35 Years'],
            hi: ['21 वर्ष', '25 वर्ष', '30 वर्ष', '35 वर्ष']
          },
          correctIndex: 2,
          explanation: {
            en: 'Article 84 specifies 25 years for Lok Sabha and 30 years for Rajya Sabha.',
            hi: 'अनुच्छेद 84 के अनुसार लोकसभा के लिए 25 वर्ष तथा राज्यसभा के लिए 30 वर्ष की न्यूनतम आयु आवश्यक है।'
          }
        }
      },
      {
        id: 'lesson_mla_vs_mp',
        level: 'beginner',
        category: 'Elected Representatives',
        readTimeMinutes: 4,
        title: {
          en: 'MLA vs MP: Understanding Roles and Powers',
          hi: 'विधायक (MLA) और सांसद (MP): अधिकार और अंतर'
        },
        summary: {
          en: 'Learn who to approach for local state problems vs national union policies.',
          hi: 'समझें कि राज्य के मुद्दों (सड़क, अस्पताल, पुलिस) के लिए विधायक और राष्ट्रीय मुद्दों के लिए सांसद की क्या भूमिका है।'
        },
        keyPoints: {
          en: [
            'MLA (Member of Legislative Assembly): State laws, police, healthcare, agriculture, local roads.',
            'MP (Member of Parliament): National laws, defense, foreign policy, railways, banking, national highways.',
            'Funds: MLA-LAD fund (State) vs MPLADS fund (Central - ₹5 Cr per year).'
          ],
          hi: [
            'विधायक (MLA): राज्य विधानसभा का सदस्य—पुलिस, स्वास्थ्य, कृषि, राज्य सड़कें और कानून व्यवस्था।',
            'सांसद (MP): संसद का सदस्य—राष्ट्रीय सुरक्षा, विदेश नीति, रेलवे, बैंकिंग, नेशनल हाईवे।',
            'विकास निधि: विधायक निधि (MLA-LAD) बनाम सांसद निधि (MPLADS - ₹5 करोड़ प्रतिवर्ष)।'
          ]
        },
        content: {
          en: `Citizens often get confused about whether to take their civic grievances to their MLA or their MP.

### Division of Powers (7th Schedule of the Constitution):
1. **Union List (Central Domain - MP’s Arena):**
   - Defense, Foreign Affairs, Atomic Energy, Railways, National Highways, Telecommunications, Income Tax.
2. **State List (State Domain - MLA’s Arena):**
   - Police, Public Health & Sanitation, Hospitals, Agriculture, Land Revenue, Prisons, Local Transport.
3. **Concurrent List (Both Centre & State):**
   - Education, Forests, Criminal Law, Civil Procedure, Price Control.

### Practical Quick Guide:
- If a state road has potholes or government hospital medicines are missing: **Approach your MLA**.
- If railway station halt is needed or passport center issue occurs: **Approach your MP**.`,
          hi: `आम नागरिक अक्सर भ्रमित रहते हैं कि अपनी समस्या लेकर विधायक के पास जाएं या सांसद के पास।

### शक्तियों का विभाजन (संविधान की 7वीं अनुसूची):
1. **संघ सूची (सांसद / केंद्र सरकार का कार्यक्षेत्र):**
   - रक्षा, विदेश नीति, रेलवे, नेशनल हाईवे, बैंकिंग, दूरसंचार, आयकर।
2. **राज्य सूची (विधायक / राज्य सरकार का कार्यक्षेत्र):**
   - पुलिस एवं कानून व्यवस्था, सरकारी अस्पताल, स्वास्थ्य, कृषि, जल आपूर्ति, ग्रामीण सड़कें।
3. **समवर्ती सूची (दोनों का साझा क्षेत्र):**
   - शिक्षा, वन, वन्यजीव, नागरिक कानून, श्रम कल्याण।

### नागरिक मार्गदर्शिका:
- अगर आपके शहर में पुलिस सुनवाई नहीं कर रही या जिला अस्पताल में डॉक्टर नहीं हैं: **विधायक (MLA) से संपर्क करें**।
- अगर ट्रेन का स्टॉपेज चाहिए या राष्ट्रीय राजमार्ग का मुद्दा है: **सांसद (MP) से संपर्क करें**।`
        },
        constitutionalReference: 'Seventh Schedule (Union, State, and Concurrent Lists) & Articles 245-246',
        practicalExample: {
          en: 'Police is a State subject under Entry 2 of the State List; an MP cannot direct local police stations—that falls under the State Government and MLA jurisdiction.',
          hi: 'पुलिस राज्य सूची का विषय है। स्थानीय थाने का प्रशासन राज्य सरकार और विधायक के अधिकार क्षेत्र में आता है, सांसद के नहीं।'
        },
        proTip: {
          en: 'Both MPs and MLAs hold periodic "Janta Darbar" or public grievance meetings in their constituency offices. Keep written petitions concise with your voter ID.',
          hi: 'जनप्रतिनिधियों से मिलने जाते समय हमेशा अपनी समस्या का संक्षिप्त लिखित ज्ञापन और स्थानीय पते का प्रमाण साथ रखें।'
        },
        quizQuestion: {
          question: {
            en: 'Under the 7th Schedule of the Constitution, which level of government has jurisdiction over "Police"?',
            hi: '7वीं अनुसूची के तहत "पुलिस एवं कानून व्यवस्था" किस सरकार के अधिकार क्षेत्र में आती है?'
          },
          options: {
            en: ['Central Government (Union List)', 'State Government (State List)', 'Gram Panchayat only', 'Judiciary'],
            hi: ['केंद्र सरकार (संघ सूची)', 'राज्य सरकार (राज्य सूची)', 'केवल ग्राम पंचायत', 'न्यायपालिका']
          },
          correctIndex: 1,
          explanation: {
            en: 'Public order and police are State subjects under Entry 1 and 2 of List II (State List).',
            hi: 'पुलिस और लोक व्यवस्था 7वीं अनुसूची की राज्य सूची (List II) के विषय हैं।'
          }
        }
      },
      {
        id: 'lesson_panchayat_and_municipality',
        level: 'beginner',
        category: 'Local Governance',
        readTimeMinutes: 5,
        title: {
          en: 'Panchayat & Municipality: 3rd Tier of Governance',
          hi: 'पंचायती राज और नगर पालिका: स्थानीय स्वशासन'
        },
        summary: {
          en: 'The 73rd and 74th Constitutional Amendments brought governance directly to villages and cities through local self-government.',
          hi: '73वें और 74वें संविधान संशोधन ने सत्ता का विकेंद्रीकरण कर गाँवों और शहरों के हाथ में स्थानीय फैसले लेने का अधिकार सौंपा।'
        },
        keyPoints: {
          en: [
            '73rd Amendment (1992): 3-tier Panchayati Raj (Gram, Block/Panchayat Samiti, Zilla Parishad).',
            '74th Amendment (1992): Municipalities (Nagar Panchayat, Municipal Council, Municipal Corporation).',
            'Mandatory 33% reservation for women in local governance (many states now 50%).'
          ],
          hi: [
            '73वां संशोधन (1992): त्रिस्तरीय पंचायती राज (ग्राम पंचायत, पंचायत समिति/ब्लॉक, जिला परिषद)।',
            '74वां संशोधन (1992): शहरी निकाय (नगर पंचायत, नगर पालिका परिषद, नगर निगम)।',
            'महिलाओं के लिए कम से कम 33% आरक्षण अनिवार्य (कई राज्यों में 50% तक लागू)।'
          ]
        },
        content: {
          en: `Before 1992, India effectively had only two tiers of government: Centre and States.
The **73rd and 74th Amendments** added Part IX and Part IX-A to the Constitution, creating the third tier: **Local Self-Government**.

### Rural Local Governance (Panchayati Raj - 11th Schedule):
1. **Gram Panchayat (Village Level):** Headed by the Sarpanch / Mukhiya.
2. **Panchayat Samiti (Block Level):** Coordinates group of villages.
3. **Zilla Parishad (District Level):** District development planning.

### Urban Local Governance (Municipalities - 12th Schedule):
1. **Nagar Panchayat:** Transitional areas from rural to urban.
2. **Municipal Council (Nagar Palika):** Smaller urban cities.
3. **Municipal Corporation (Nagar Nigam):** Major metropolitan cities, headed by a Mayor and Municipal Commissioner.`,
          hi: `1992 से पहले भारत में शासन के केवल दो स्तर थे—केंद्र और राज्य।
**73वें और 74वें संविधान संशोधन** ने संविधान में भाग 9 और 9-A जोड़कर सत्ता को सीधे जनता के द्वार तक पहुंचाया।

### ग्रामीण स्थानीय निकाय (पंचायती राज - 11वीं अनुसूची, 29 विषय):
1. **ग्राम पंचायत:** मुखिया या प्रधान/सरपंच की अध्यक्षता में।
2. **पंचायत समिति (ब्लॉक स्तर):** कई पंचायतों का समन्वयक।
3. **जिला परिषद (जिला स्तर):** पूरे जिले के ग्रामीण विकास की नोडल संस्था।

### शहरी स्थानीय निकाय (नगर पालिकाएं - 12वीं अनुसूची, 18 विषय):
1. **नगर पंचायत:** ग्रामीण से शहरी बनते कस्बे।
2. **नगर पालिका परिषद:** छोटे शहर।
3. **नगर निगम:** बड़े महानगर, जिनका नेतृत्व मेयर (महापौर) और नगर आयुक्त करते हैं।`
        },
        constitutionalReference: 'Part IX (Articles 243-243O) & Part IX-A (Articles 243P-243ZG)',
        practicalExample: {
          en: 'Sanitation, streetlights, birth certificates, and drainage in your neighborhood are the direct constitutional responsibility of your municipal ward councilor.',
          hi: 'आपके मोहल्ले की नाली की सफाई, स्ट्रीट लाइट, जन्म प्रमाण पत्र और कचरा प्रबंधन का सीधा दायित्व नगर निगम वार्ड पार्षद का होता है।'
        },
        proTip: {
          en: 'The Gram Sabha is legally empowered to audit village welfare spending through "Social Audits", ensuring zero corruption in schemes like MGNREGA.',
          hi: 'ग्राम सभा को "सामाजिक अंकेक्षण" (Social Audit) का कानूनी अधिकार है, जिससे मनरेगा आदि योजनाओं के खर्च की खुली जांच हो सकती है।'
        },
        quizQuestion: {
          question: {
            en: 'Which Constitutional Amendments gave constitutional status to Panchayats and Municipalities in India?',
            hi: 'किन संविधान संशोधनों ने भारत में पंचायतों और नगर पालिकाओं को संवैधानिक दर्जा दिया?'
          },
          options: {
            en: ['42nd and 44th Amendments', '73rd and 74th Amendments', '86th and 91st Amendments', '101st and 103rd Amendments'],
            hi: ['42वां और 44वां संशोधन', '73वां और 74वां संशोधन', '86वां और 91वां संशोधन', '101वां और 103वां संशोधन']
          },
          correctIndex: 1,
          explanation: {
            en: 'The 73rd (Panchayats) and 74th (Municipalities) Amendments were enacted in 1992.',
            hi: '1992 के 73वें और 74वें संशोधनों ने स्थानीय निकायों को संविधान के भाग 9 और 9-A में मान्यता दी।'
          }
        }
      }
    ]
  },

  // ==================== INTERMEDIATE LEVEL ====================
  {
    id: 'course_int_1',
    level: 'intermediate',
    title: {
      en: 'Elections, Governance & Political Machinery',
      hi: 'चुनाव, शासन व्यवस्था और राजनीतिक कार्यप्रणाली'
    },
    description: {
      en: 'Deep dive into how elections are conducted, how coalitions form, how laws are crafted, and how to fact-check political news.',
      hi: 'जानें चुनाव कैसे होते हैं, सरकारें कैसे बनती हैं, कानून कैसे बनते हैं और राजनीतिक खबरों की सत्यता कैसे जांची जाती है।'
    },
    icon: 'Landmark',
    color: 'from-blue-600 to-indigo-800',
    modulesCount: 7,
    lessons: [
      {
        id: 'lesson_how_elections_work',
        level: 'intermediate',
        category: 'Electoral Systems',
        readTimeMinutes: 5,
        title: {
          en: 'How Elections Work in India: ECI, MCC, and EVMs',
          hi: 'भारत में चुनाव कैसे होते हैं: ECI, आचार संहिता और EVM'
        },
        summary: {
          en: 'Understand India’s massive electoral process, First-Past-The-Post system, Model Code of Conduct, and EVM-VVPAT integrity.',
          hi: 'समझें भारत की विशाल चुनावी प्रक्रिया, फर्स्ट-पास्ट-द-पोस्ट प्रणाली, आदर्श आचार संहिता और EVM-VVPAT सुरक्षा तंत्र।'
        },
        keyPoints: {
          en: [
            'First-Past-The-Post (FPTP): The candidate with the highest number of votes wins, even if below 50%.',
            'Model Code of Conduct (MCC): Enforced the minute election dates are declared by ECI.',
            'VVPAT (Voter Verifiable Paper Audit Trail): Physical paper slip displayed for 7 seconds to verify vote.'
          ],
          hi: [
            'फर्स्ट-पास्ट-द-पोस्ट (FPTP): जिसे सबसे ज्यादा वोट मिलते हैं वही जीतता है, चाहे उसे कुल 35% वोट ही मिले हों।',
            'आदर्श आचार संहिता (MCC): चुनाव की घोषणा होते ही लागू हो जाती है, सरकार नई घोषणाएं या तबादले नहीं कर सकती।',
            'VVPAT पर्ची: वोट डालने पर 7 सेकंड तक शीशे में दिखती है ताकि मतदाता सत्यापित कर सके कि उसका वोट सही उम्मीदवार को गया।'
          ]
        },
        content: {
          en: `India is the world's largest electoral exercise, with nearly 970 million eligible voters.

### 1. The First-Past-The-Post (FPTP) System:
In Lok Sabha and Vidhan Sabha elections, each constituency elects one representative. The candidate who gets the most votes wins, regardless of whether they achieved a 50%+ majority.

### 2. The Model Code of Conduct (MCC):
A set of non-statutory consensus guidelines that become binding once ECI announces elections:
- Ruling party cannot use government aircraft, cars, or official machinery for campaigning.
- No public policy announcements or inaugurations that could influence voters.
- Strict 48-hour "silence period" before voting where public campaigning stops.

### 3. EVM and VVPAT Integrity:
EVMs are standalone microprocessor units (never connected to internet, Bluetooth, or Wi-Fi). Since 2019, 100% of polling stations use VVPAT paper slips, with mandatory manual counting verification in randomly selected polling booths per constituency.`,
          hi: `भारत 97 करोड़ से अधिक मतदाताओं वाला दुनिया का सबसे बड़ा लोकतंत्र है।

### 1. फर्स्ट-पास्ट-द-पोस्ट (FPTP) प्रणाली:
लोकसभा और विधानसभा में हर सीट से एक प्रतिनिधि चुना जाता है। जिस प्रत्याशी को सबसे अधिक मत मिलते हैं, वह विजयी घोषित होता है।

### 2. आदर्श आचार संहिता (Model Code of Conduct):
चुनाव आयोग द्वारा तारीखों के ऐलान के साथ ही लागू हो जाती है:
- सत्तारूढ़ दल सरकारी वाहनों, विमानों या सरकारी विज्ञापनों का चुनावी लाभ नहीं ले सकता।
- मतदाताओं को लुभाने वाली नई योजनाओं या परियोजनाओं का शिलान्यास बंद हो जाता है।
- मतदान समाप्त होने के 48 घंटे पहले प्रचार का "साइलेंस पीरियड" शुरू होता है।

### 3. EVM और VVPAT की सुरक्षा:
EVM एक स्वतंत्र मशीन है जो इंटरनेट, ब्लूटूथ या वाई-फाई से कभी नहीं जुड़ती। 2019 से सभी बूथों पर VVPAT लगाया जाता है, और हर विधानसभा क्षेत्र के 5 यादृच्छिक बूथों की पर्चियों का अनिवार्य मिलान किया जाता है।`
        },
        constitutionalReference: 'Article 324 (Powers of ECI) and Representation of the People Act, 1951',
        practicalExample: {
          en: 'Citizens can report MCC violations, voter bribing, or illegal banners directly to the Election Commission using the cVIGIL mobile app with GPS coordinates.',
          hi: 'आचार संहिता के उल्लंघन या शराब-पैसे बांटने की शिकायत नागरिक सीधे चुनाव आयोग के "cVIGIL" ऐप पर फोटो और लोकेशन के साथ दर्ज कर सकते हैं।'
        },
        proTip: {
          en: 'NOTA (None of the Above) was introduced in 2013 by the Supreme Court (PUCL case) to protect the right of voters to register a peaceful protest vote.',
          hi: 'NOTA (उपरोक्त में से कोई नहीं) का विकल्प 2013 में सुप्रीम कोर्ट के आदेश से आया ताकि नागरिक अस्वीकृति दर्ज करा सकें।'
        },
        quizQuestion: {
          question: {
            en: 'For how many seconds does the VVPAT paper slip remain visible to the voter through the glass window?',
            hi: 'VVPAT की पर्ची मतदाता को शीशे के अंदर कितने सेकंड तक दिखाई देती है?'
          },
          options: {
            en: ['3 Seconds', '7 Seconds', '12 Seconds', '15 Seconds'],
            hi: ['3 सेकंड', '7 सेकंड', '12 सेकंड', '15 सेकंड']
          },
          correctIndex: 1,
          explanation: {
            en: 'The printed slip containing candidate symbol and name displays for exactly 7 seconds before dropping into the sealed ballot box.',
            hi: 'VVPAT की पर्ची ठीक 7 सेकंड तक दिखाई देती है और फिर कटकर सीलबंद डिब्बे में गिर जाती है।'
          }
        }
      },
      {
        id: 'lesson_how_political_parties_work',
        level: 'intermediate',
        category: 'Party Politics',
        readTimeMinutes: 5,
        title: {
          en: 'How Political Parties Work: Structure, Symbols & Whips',
          hi: 'राजनीतिक दल कैसे काम करते हैं: संगठन, चुनाव चिह्न और व्हिप'
        },
        summary: {
          en: 'Explore party recognition rules, national vs state party criteria, symbol allocation, and the anti-defection law.',
          hi: 'राष्ट्रीय और राज्य स्तरीय दलों की मान्यता के नियम, चुनाव चिह्न का आवंटन और दलबदल विरोधी कानून को समझें।'
        },
        keyPoints: {
          en: [
            'National Party status: Requires winning 2% Lok Sabha seats across 3 states OR 6% votes in 4 states + 4 Lok Sabha seats OR recognition as State Party in 4 states.',
            'Election Symbols (Reservation and Allotment) Order, 1968 governs reserved symbols.',
            'Party Whip: Directs legislators on how to vote; defying a three-line whip invites disqualification under the 10th Schedule.'
          ],
          hi: [
            'राष्ट्रीय दल का दर्जा: 4 राज्यों में राज्य स्तरीय दल की मान्यता, या 3 राज्यों में 2% लोकसभा सीटें, या 4 राज्यों में 6% वोट और 4 सांसद।',
            'चुनाव चिह्न आदेश, 1968 के तहत दलों को आरक्षित चुनाव चिह्न आवंटित किए जाते हैं।',
            'पार्टी व्हिप: सदन में पार्टी के निर्देशों के अनुसार मतदान अनिवार्य करता है; इसका उल्लंघन करने पर 10वीं अनुसूची के तहत सदस्यता जा सकती है।'
          ]
        },
        content: {
          en: `Political parties are the transmission belts of democracy, organizing citizen aspirations into policy programs.

### 1. National vs State Recognized Parties:
The Election Commission of India recognizes parties based on objective electoral performance thresholds. Recognition grants free airtime on national broadcasters, a permanent reserved election symbol across India, and free copies of electoral rolls.

### 2. The Internal Party Architecture:
- **National President & Working Committee / Politburo:** Highest decision-making executive council.
- **Parliamentary Board:** Selects election candidates and decides coalition alliances.
- **Frontal Organizations:** Youth Wing, Women Wing, Farmer Wing, Labor Union, and Student Wing (NSUI, ABVP, etc.).

### 3. The Party Whip and Disqualification:
A "Whip" is a written directive issued by a party’s chief whip in the legislature. Defying a party whip on a motion of confidence or finance bill leads to disqualification under the Anti-Defection Law (10th Schedule).`,
          hi: `राजनीतिक दल जनभावनाओं को नीतियों में बदलने वाली लोकतांत्रिक संस्थाएं हैं।

### 1. राष्ट्रीय और राज्य स्तरीय दल:
चुनाव आयोग निष्पक्ष चुनावी आंकड़ों (वोट शेयर और सीटों) के आधार पर दलों को मान्यता देता है। मान्यता प्राप्त दलों को पूरे देश में एक सुरक्षित चुनाव चिह्न और दूरदर्शन/रेडियो पर प्रचार का समय मिलता है।

### 2. दल की आंतरिक संरचना:
- **राष्ट्रीय अध्यक्ष और कार्यसमिति:** सर्वोच्च रणनीतिक और नीतिगत इकाई।
- **संसदीय बोर्ड:** टिकटों के वितरण और चुनावी गठबंधनों पर अंतिम मुहर लगाने वाली संस्था।
- **मोर्चे और संगठन:** युवा मोर्चा, महिला मोर्चा, किसान प्रकोष्ठ, छात्र संगठन और सोशल मीडिया सेल।

### 3. व्हिप (Whip) और दलबदल:
विधानसभा या संसद में पार्टी व्हिप का उल्लंघन करने पर स्पीकर द्वारा विधायक या सांसद की सदस्यता रद्द की जा सकती है (संविधान की 10वीं अनुसूची)।`
        },
        constitutionalReference: 'Tenth Schedule of the Constitution (Anti-Defection Law, 52nd Amendment 1985)',
        practicalExample: {
          en: 'If an MP votes against their party’s instructions on a budget bill without prior permission, the Speaker can disqualify them from Parliament under the Tenth Schedule.',
          hi: 'यदि कोई सांसद अपनी पार्टी के आदेश के खिलाफ जाकर बजट पर वोट करता है, तो 10वीं अनुसूची के तहत उसकी संसद सदस्यता रद्द हो सकती है।'
        },
        proTip: {
          en: 'Always read political manifestos with a critical eye: verify whether promises specify funding sources and timelines or remain vague rhetorical slogans.',
          hi: 'चुनावी घोषणापत्र (Manifesto) पढ़ते समय देखें कि किए गए वादों के लिए बजट कहाँ से आएगा, या वे केवल खोखले चुनावी वादे हैं।'
        },
        quizQuestion: {
          question: {
            en: 'Which Schedule of the Indian Constitution contains the Anti-Defection Law?',
            hi: 'भारतीय संविधान की कौन सी अनुसूची में "दलबदल विरोधी कानून" दिया गया है?'
          },
          options: {
            en: ['7th Schedule', '8th Schedule', '10th Schedule', '12th Schedule'],
            hi: ['7वीं अनुसूची', '8वीं अनुसूची', '10वीं अनुसूची', '12वीं अनुसूची']
          },
          correctIndex: 2,
          explanation: {
            en: 'The 10th Schedule was added by the 52nd Amendment in 1985 to curb opportunistic party-switching.',
            hi: '1985 में 52वें संशोधन द्वारा 10वीं अनुसूची जोड़ी गई थी ताकि विधायकों-सांसदों के दल बदलने पर रोक लगे।'
          }
        }
      },
      {
        id: 'lesson_role_of_pm_and_cm',
        level: 'intermediate',
        category: 'Executive Branch',
        readTimeMinutes: 5,
        title: {
          en: 'Role of Prime Minister and Chief Minister',
          hi: 'प्रधानमंत्री और मुख्यमंत्री की संवैधानिक भूमिका'
        },
        summary: {
          en: 'Learn why the PM is the de facto head of government while the President is the de jure constitutional head.',
          hi: 'जानिए क्यों प्रधानमंत्री वास्तविक शासनाध्यक्ष (de facto) होते हैं जबकि राष्ट्रपति केवल संवैधानिक प्रमुख (de jure) हैं।'
        },
        keyPoints: {
          en: [
            'President = Head of State (De Jure); Prime Minister = Head of Government (De Facto).',
            'Article 74: Council of Ministers with PM at the head aids and advises the President.',
            'Chief Minister heads state administration with similar relationship to the Governor.'
          ],
          hi: [
            'राष्ट्रपति = राष्ट्र के औपचारिक प्रमुख; प्रधानमंत्री = सरकार के वास्तविक प्रमुख।',
            'अनुच्छेद 74: राष्ट्रपति को सलाह देने के लिए प्रधानमंत्री की अध्यक्षता में मंत्रिपरिषद होगी, जिसकी सलाह बाध्यकारी है।',
            'राज्यों में ठीक इसी तरह मुख्यमंत्री वास्तविक प्रमुख और राज्यपाल संवैधानिक प्रमुख होते हैं।'
          ]
        },
        content: {
          en: `In India’s parliamentary democracy, the Prime Minister is described as "Primus Inter Pares" (First Among Equals) or the keystone of the cabinet arch.

### 1. Appointment:
Under Article 75, the President appoints the Prime Minister, but this is not arbitrary—the President MUST appoint the leader of the party or pre-poll/post-poll alliance that commands a majority in the Lok Sabha.

### 2. Core Powers of the PM:
- **Allocates Portfolios:** Decides which minister manages Home, Finance, Defense, External Affairs, etc.
- **Chairs Cabinet & NITI Aayog:** Sets the national policy and legislative agenda.
- **Principal Advisor to the President:** Communicates all decisions of the Council of Ministers (Article 78).
- **Crisis Leadership:** Directs national disaster management, atomic command, and defense council.

### 3. Chief Minister at the State Level:
Under Article 164, the Chief Minister performs an analogous executive role at the state level, advising the Governor on state ministries, budgets, and state policing.`,
          hi: `भारत की संसदीय प्रणाली में प्रधानमंत्री को "मंत्रिमंडल रूपी मेहराब की आधारशिला" कहा जाता है।

### 1. नियुक्ति प्रक्रिया:
अनुच्छेद 75 के अनुसार राष्ट्रपति प्रधानमंत्री की नियुक्ति करते हैं, परंतु राष्ट्रपति केवल उसी व्यक्ति को आमंत्रित कर सकते हैं जिसके पास लोकसभा में 272+ सांसदों का बहुमत हो।

### 2. प्रधानमंत्री की शक्तियाँ:
- **विभागों का बंटवारा:** गृह, वित्त, रक्षा, विदेश जैसे मंत्रालयों का आवंटन प्रधानमंत्री के निर्णय पर होता है।
- **मंत्रिमंडल और नीति आयोग की अध्यक्षता:** देश की नीतियों की दिशा तय करते हैं।
- **राष्ट्रपति और कैबिनेट के बीच सेतु (अनुच्छेद 78):** सरकार के सभी निर्णयों से राष्ट्रपति को अवगत कराते हैं।
- **राष्ट्रीय संकट में नेतृत्व:** आपदा प्रबंधन प्राधिकरण और सामरिक नीति के प्रमुख।

### 3. राज्य स्तर पर मुख्यमंत्री:
अनुच्छेद 164 के तहत मुख्यमंत्री राज्य सरकार के वास्तविक मुखिया होते हैं और राज्यपाल को राज्य के शासन पर सलाह देते हैं।`
        },
        constitutionalReference: 'Articles 74, 75, 78 (Centre) and Articles 163, 164, 167 (State)',
        practicalExample: {
          en: 'When a minister disagrees strongly with the Prime Minister, the minister must either accept the cabinet consensus or resign, under the principle of Collective Responsibility.',
          hi: 'सामूहिक उत्तरदायित्व के सिद्धांत के अनुसार, यदि कोई मंत्री प्रधानमंत्री की नीति से असहमत है, तो उसे मंत्रिमंडल से इस्तीफा देना पड़ता है।'
        },
        proTip: {
          en: 'Article 75(3) states that the Council of Ministers is collectively responsible to the Lok Sabha. If a no-confidence motion passes, the entire ministry must step down.',
          hi: 'अनुच्छेद 75(3) के अनुसार पूरी मंत्रिपरिषद लोकसभा के प्रति जवाबदेह होती है। यदि एक मंत्री के खिलाफ भी अविश्वास पारित हो, तो पूरी सरकार गिर जाती है।'
        },
        quizQuestion: {
          question: {
            en: 'Under Article 75(3) of the Indian Constitution, to which body is the Council of Ministers collectively responsible?',
            hi: 'संविधान के अनुच्छेद 75(3) के तहत मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?'
          },
          options: {
            en: ['The President', 'The Rajya Sabha', 'The Lok Sabha', 'The Supreme Court'],
            hi: ['राष्ट्रपति के प्रति', 'राज्यसभा के प्रति', 'लोकसभा के प्रति', 'सर्वोच्च न्यायालय के प्रति']
          },
          correctIndex: 2,
          explanation: {
            en: 'The Council of Ministers is collectively responsible solely to the Lok Sabha (House of the People).',
            hi: 'मंत्रिपरिषद केवल लोकसभा के प्रति सामूहिक रूप से उत्तरदायी होती है।'
          }
        }
      },
      {
        id: 'lesson_how_government_is_formed',
        level: 'intermediate',
        category: 'Governance Formation',
        readTimeMinutes: 5,
        title: {
          en: 'How Government is Formed: Majority, Coalitions & Floor Tests',
          hi: 'सरकार कैसे बनती है: बहुमत, गठबंधन और फ्लोर टेस्ट'
        },
        summary: {
          en: 'The mathematical reality of forming governments in India: 272 magic mark, post-poll pacts, and floor test precedents.',
          hi: 'सरकार बनाने का चुनावी गणित: 272 का जादुई आंकड़ा, त्रिशंकु संसद, गठबंधन की राजनीति और फ्लोर टेस्ट की कानूनी स्थिति।'
        },
        keyPoints: {
          en: [
            'Total Lok Sabha seats: 543. Magic majority mark = 272 seats.',
            'Hung Parliament / Assembly: When no single party reaches the halfway mark.',
            'S.R. Bommai case (1994): Majority must be tested on the floor of the House, not in Raj Bhavan.'
          ],
          hi: [
            'कुल 543 लोकसभा सीटें हैं। सरकार बनाने के लिए जादुई आंकड़ा 272 सीटें है।',
            'त्रिशंकु संसद/विधानसभा: जब किसी एक दल को अकेले बहुमत नहीं मिलता और गठबंधन बनाना पड़ता है।',
            'एस.आर. बोम्मई मामला (1994): बहुमत का फैसला राजभवन के कमरों में नहीं, बल्कि सदन के पटल (Floor Test) पर होना अनिवार्य है।'
          ]
        },
        content: {
          en: `How does an election victory actually translate into taking the oath of office?

### 1. The Magic Number:
In India's 543-member Lok Sabha, a party or coalition must secure at least **272 seats** (50% + 1) to form the Union Government.

### 2. Single Party vs Coalition Governments:
- **Single Party Majority:** One political party wins 272+ seats alone (e.g., 1984, 2014, 2019).
- **Coalition Government:** Multiple parties unite through a Common Minimum Program (e.g., National Front in 1989, NDA in 1999, UPA in 2004 & 2009, NDA in 2024).

### 3. What Happens in a Hung Assembly?
When no party has a clear majority, the President/Governor uses constitutional discretion guided by Sarkaria Commission recommendations:
1. First invite pre-poll alliance with largest seats.
2. If none, invite single largest party with other letters of support.
3. Order a **Floor Test (शक्ति परीक्षण)** within a strict time limit (usually 48-72 hours) where MLAs/MPs vote to prove confidence on live camera.`,
          hi: `चुनाव के नतीजों के बाद सरकार गठन की क्या संवैधानिक प्रक्रिया होती है?

### 1. जादुई आंकड़ा:
लोकसभा में 543 सीटों में से किसी भी दल या गठबंधन को सरकार बनाने के लिए कम से कम **272 सीटों** का समर्थन चाहिए।

### 2. पूर्ण बहुमत बनाम गठबंधन सरकार:
- **एकदलीय बहुमत:** जब किसी एक दल को अकेले 272+ सीटें मिल जाएं।
- **गठबंधन सरकार:** जब कोई अकेला दल बहुमत न पाए और कई दल मिलकर सरकार बनाएं (जैसे 1999 में वाजपेयी सरकार, 2004 व 2009 में मनमोहन सरकार, 2024 में एनडीए सरकार)।

### 3. त्रिशंकु स्थिति में क्या होता है?
जब किसी को स्पष्ट बहुमत न मिले, तो सरकारिया आयोग के नियमों के तहत:
1. चुनाव से पहले बने सबसे बड़े गठबंधन को पहले मौका मिलता है।
2. अथवा सबसे बड़े एकल दल को अन्य दलों के समर्थन पत्र के आधार पर आमंत्रित किया जाता है।
3. सदन के पटल पर **फ्लोर टेस्ट (Floor Test)** कराना अनिवार्य होता है, जहाँ कैमरे के सामने वोटिंग द्वारा बहुमत साबित करना होता है।`
        },
        constitutionalReference: 'S.R. Bommai v. Union of India (1994) 3 SCC 1',
        practicalExample: {
          en: 'During a Composite Floor Test in a state assembly, pro-tem Speaker conducts voice votes or division of votes on camera to see which leader commands more MLAs.',
          hi: 'विधानसभा में प्रोटेम स्पीकर की निगरानी में शक्ति परीक्षण होता है, जहाँ सभी विधायक हाथ उठाकर या पर्ची द्वारा अपना समर्थन दर्ज करते हैं।'
        },
        proTip: {
          en: 'A caretaker government cannot make major policy or fiscal decisions until the new government is sworn in and passes the floor test.',
          hi: 'कार्यवाहक सरकार केवल दैनिक प्रशासनिक कार्य चला सकती है, कोई बड़ा नीतिगत फैसला नहीं ले सकती।'
        },
        quizQuestion: {
          question: {
            en: 'In the Indian Lok Sabha of 543 members, what is the exact minimum number of seats required to form a majority government?',
            hi: '543 सदस्यों वाली भारतीय लोकसभा में बहुमत की सरकार बनाने के लिए न्यूनतम कितनी सीटों की आवश्यकता होती है?'
          },
          options: {
            en: ['250', '265', '272', '280'],
            hi: ['250', '265', '272', '280']
          },
          correctIndex: 2,
          explanation: {
            en: '543 / 2 = 271.5, so 272 seats represents the simple majority threshold.',
            hi: '543 का आधा 271.5 होता है, अतः पूर्ण बहुमत के लिए कम से कम 272 सीटों की आवश्यकता होती है।'
          }
        }
      },
      {
        id: 'lesson_fundamental_rights_and_duties',
        level: 'intermediate',
        category: 'Citizen Rights',
        readTimeMinutes: 5,
        title: {
          en: 'Fundamental Rights and Duties: The Citizen Shield',
          hi: 'मौलिक अधिकार और कर्तव्य: नागरिक का सुरक्षा कवच'
        },
        summary: {
          en: 'Deep exploration of Part III (Articles 12-35) and Part IVA (Article 51A): the soul of Indian citizenship.',
          hi: 'संविधान के भाग 3 (अनुच्छेद 12-35) और भाग 4-क (अनुच्छेद 51-क) का संपूर्ण विश्लेषण: भारतीय नागरिकता की आत्मा।'
        },
        keyPoints: {
          en: [
            '6 Fundamental Rights: Equality, Freedom, Against Exploitation, Freedom of Religion, Cultural & Educational, Constitutional Remedies.',
            'Article 32: Dr. Ambedkar called it the "Heart and Soul of the Constitution" (Right to approach Supreme Court directly).',
            '11 Fundamental Duties (Article 51A): Respect national flag, protect environment, develop scientific temper.'
          ],
          hi: [
            '6 मौलिक अधिकार: समानता का अधिकार, स्वतंत्रता का अधिकार, शोषण के विरुद्ध अधिकार, धार्मिक स्वतंत्रता, संस्कृति व शिक्षा, संवैधानिक उपचार।',
            'अनुच्छेद 32: बाबासाहेब आंबेडकर ने इसे "संविधान का हृदय और आत्मा" कहा (सीधे सुप्रीम कोर्ट जाने का अधिकार)।',
            '11 मौलिक कर्तव्य (अनुच्छेद 51-क): तिरंगे का सम्मान, पर्यावरण संरक्षण, वैज्ञानिक दृष्टिकोण का विकास।'
          ]
        },
        content: {
          en: `Fundamental Rights protect individuals from the tyranny of the state, while Fundamental Duties remind citizens of their national responsibility.

### The Six Fundamental Rights:
1. **Right to Equality (Articles 14-18):** Equality before law, prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.
2. **Right to Freedom (Articles 19-22):** Freedom of speech, assembly, movement, profession, and Right to Life (Article 21).
3. **Right against Exploitation (Articles 23-24):** Prohibits human trafficking, forced labor, and child labor in hazardous factories.
4. **Right to Freedom of Religion (Articles 25-28):** Freedom of conscience and free profession, practice, and propagation of religion.
5. **Cultural and Educational Rights (Articles 29-30):** Protection of minorities' script, language, and educational institutions.
6. **Right to Constitutional Remedies (Article 32):** Writs: Habeas Corpus, Mandamus, Prohibition, Quo-Warranto, Certiorari.

### Article 51A (Fundamental Duties):
Added by 42nd Amendment (1976), includes duties like:
- Cherish noble ideals of freedom struggle.
- Safeguard public property and abjure violence.
- **Article 51A(h): Develop scientific temper, humanism, and spirit of inquiry.**`,
          hi: `मौलिक अधिकार नागरिकों को राज्य की मनमानी से बचाते हैं, और मौलिक कर्तव्य समाज के प्रति जिम्मेदारी याद दिलाते हैं।

### 6 मौलिक अधिकार (भाग 3):
1. **समानता का अधिकार (अनुच्छेद 14-18):** कानून के समक्ष समानता, जाति-धर्म-लिंग के आधार पर भेदभाव का निषेध।
2. **स्वतंत्रता का अधिकार (अनुच्छेद 19-22):** अभिव्यक्ति, शांतिपूर्ण सभा, संगठन बनाने, कहीं भी घूमने की आजादी और जीवन का अधिकार (अनुच्छेद 21)।
3. **शोषण के विरुद्ध अधिकार (अनुच्छेद 23-24):** मानव तस्करी, बंधुआ मजदूरी और बच्चों से खतरनाक काम कराने पर रोक।
4. **धार्मिक स्वतंत्रता (अनुच्छेद 25-28):** अपनी पसंद के धर्म को मानने, आचरण और प्रचार करने की स्वतंत्रता।
5. **संस्कृति और शिक्षा संबंधी अधिकार (अनुच्छेद 29-30):** अल्पसंख्यकों की भाषा, लिपि और शिक्षण संस्थानों की रक्षा।
6. **संवैधानिक उपचारों का अधिकार (अनुच्छेद 32):** 5 रिट (बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, अधिकार पृच्छा, उत्प्रेषण)।

### मौलिक कर्तव्य (अनुच्छेद 51-क):
42वें संशोधन (1976) द्वारा जोड़े गए 11 कर्तव्य, जिनमें प्रमुख हैं:
- राष्ट्रध्वज और राष्ट्रगान का आदर करना।
- सार्वजनिक संपत्ति की रक्षा करना और हिंसा से दूर रहना।
- **वैज्ञानिक दृष्टिकोण (Scientific Temper), मानववाद और सुधार की भावना का विकास करना।**`
        },
        constitutionalReference: 'Part III (Articles 12-35) and Article 51A of the Constitution of India',
        practicalExample: {
          en: 'If a citizen is illegally detained by the police without presenting before a magistrate within 24 hours, their family can file a Habeas Corpus writ directly in High Court or Supreme Court.',
          hi: 'यदि पुलिस किसी नागरिक को 24 घंटे में मजिस्ट्रेट के सामने पेश किए बिना अवैध हिरासत में रखती है, तो उसका परिवार सीधे हाईकोर्ट या सुप्रीम कोर्ट में "बंदी प्रत्यक्षीकरण" (Habeas Corpus) रिट याचिका लगा सकता है।'
        },
        proTip: {
          en: 'Right to Privacy is now recognized as a Fundamental Right under Article 21 following the historic Justice K.S. Puttaswamy judgment (2017).',
          hi: '2017 के ऐतिहासिक पुट्टास्वामी फैसले में सुप्रीम कोर्ट ने "निजता के अधिकार" (Right to Privacy) को अनुच्छेद 21 के तहत मौलिक अधिकार माना है।'
        },
        quizQuestion: {
          question: {
            en: 'Which Article of the Constitution did Dr. B.R. Ambedkar describe as the "Heart and Soul of the Constitution"?',
            hi: 'डॉ. बी.आर. आंबेडकर ने संविधान के किस अनुच्छेद को "संविधान का हृदय और आत्मा" कहा था?'
          },
          options: {
            en: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
            hi: ['अनुच्छेद 14', 'अनुच्छेद 19', 'अनुच्छेद 21', 'अनुच्छेद 32']
          },
          correctIndex: 3,
          explanation: {
            en: 'Article 32 provides the Right to Constitutional Remedies, allowing citizens to approach the Supreme Court directly if fundamental rights are violated.',
            hi: 'अनुच्छेद 32 नागरिकों को मौलिक अधिकारों के हनन पर सीधे सर्वोच्च न्यायालय जाने का अधिकार देता है।'
          }
        }
      },
      {
        id: 'lesson_how_laws_are_made',
        level: 'intermediate',
        category: 'Legislative Process',
        readTimeMinutes: 5,
        title: {
          en: 'How Laws are Made: From Bill to Act',
          hi: 'कानून कैसे बनता है: विधेयक (Bill) से अधिनियम (Act) तक'
        },
        summary: {
          en: 'Step-by-step journey of a bill through First Reading, Standing Committee scrutiny, debates, voting, and Presidential Assent.',
          hi: 'संसद में विधेयक पेश होने, स्थायी समितियों की जांच, बहसों, मतदान और राष्ट्रपति की मंजूरी की पूरी चरणबद्ध प्रक्रिया।'
        },
        keyPoints: {
          en: [
            'Drafting -> Introduction (First Reading) -> Scrutiny by Departmental Parliamentary Standing Committee.',
            'Second Reading (Clause-by-clause debate and amendments) -> Third Reading (Final vote on the whole bill).',
            'Passage in second House -> Presidential Assent (Article 111) -> Notification in the Official Gazette.'
          ],
          hi: [
            'विधेयक का मसौदा -> प्रथम वाचन (सदन में पेश होना) -> संसदीय स्थायी समिति द्वारा बारीक जांच।',
            'द्वितीय वाचन (हर धारा पर बहस और संशोधन) -> तृतीय वाचन (समग्र विधेयक पर मतदान)।',
            'दूसरे सदन में पारित होना -> राष्ट्रपति की स्वीकृति (अनुच्छेद 111) -> भारत के राजपत्र (Gazette) में अधिसूचना।'
          ]
        },
        content: {
          en: `Every law you obey begins as a draft idea called a **Bill (विधेयक)**. It becomes an **Act (अधिनियम)** only after passing through rigorous stages.

### Stages of Lawmaking:
1. **Introduction (First Reading):** The concerned minister introduces the bill in either Lok Sabha or Rajya Sabha (Money Bills only in Lok Sabha).
2. **Committee Stage (Crucial Scrutiny):** Sent to Parliamentary Standing Committees where MPs across all political parties analyze clauses, consult civil society, and question bureaucrats behind closed doors without party whips.
3. **Second Reading (Detailed Debate):** House debates committee recommendations clause-by-clause. MPs propose amendments.
4. **Third Reading (Final Vote):** The bill is voted upon as a whole.
5. **Transmitted to the Other House:** Must pass through the second House.
6. **Presidential Assent (Article 111):** The President can give assent, withhold assent, or return it for reconsideration (except Money Bills). Once signed and published in the Gazette of India, it becomes enforceable law!`,
          hi: `हर कानून सबसे पहले संसद में एक प्रस्ताव के रूप में आता है जिसे **विधेयक (Bill)** कहते हैं।

### कानून बनने के 6 मुख्य चरण:
1. **प्रथम वाचन:** संबंधित मंत्री सदन में विधेयक पेश करते हैं और उसका उद्देश्य बताते हैं।
2. **संसदीय समिति चरण (सबसे महत्वपूर्ण):** सभी दलों के सांसदों वाली स्थायी समिति विधेयक के हर बिंदु की बारीकी से जांच करती है, जनता और विशेषज्ञों से सुझाव लेती है।
3. **द्वितीय वाचन (धारा-वार बहस):** सदन में हर धारा पर बहस होती है, सांसद संशोधन प्रस्ताव लाते हैं और मतदान होता है।
4. **तृतीय वाचन:** पूरे विधेयक को एक साथ स्वीकार या अस्वीकार करने के लिए अंतिम मतदान होता है।
5. **दूसरे सदन में प्रक्रिया:** विधेयक दूसरे सदन में जाता है जहाँ यही प्रक्रिया दोहराई जाती है।
6. **राष्ट्रपति की स्वीकृति (अनुच्छेद 111):** दोनों सदनों से पास होने के बाद राष्ट्रपति के हस्ताक्षर होते ही और भारत के राजपत्र में छपते ही यह **अधिनियम (कानून)** बन जाता है!`
        },
        constitutionalReference: 'Articles 107-111 of the Constitution of India',
        practicalExample: {
          en: 'The Digital Personal Data Protection Act, 2023 was scrutinized by a Joint Parliamentary Committee for months before being enacted into law.',
          hi: 'डिजिटल डेटा संरक्षण कानून को संसद में पारित करने से पहले कई महीनों तक संयुक्त संसदीय समिति में सभी दलों द्वारा परखा गया था।'
        },
        proTip: {
          en: 'You can read every pending bill and its Parliamentary Committee Report for free on the PRS Legislative Research website (prsindia.org).',
          hi: 'संसद में पेश किसी भी विधेयक और उस पर सांसदों की रिपोर्ट को आप PRS इंडिया (prsindia.org) पर निःशुल्क पढ़ सकते हैं।'
        },
        quizQuestion: {
          question: {
            en: 'Under which Article of the Constitution does the President give assent to Bills passed by Parliament?',
            hi: 'संसद द्वारा पारित विधेयकों पर राष्ट्रपति किस अनुच्छेद के तहत अपनी सहमति (Assent) देते हैं?'
          },
          options: {
            en: ['Article 72', 'Article 111', 'Article 123', 'Article 143'],
            hi: ['अनुच्छेद 72', 'अनुच्छेद 111', 'अनुच्छेद 123', 'अनुच्छेद 143']
          },
          correctIndex: 1,
          explanation: {
            en: 'Article 111 governs Presidential Assent to Bills passed by both Houses of Parliament.',
            hi: 'अनुच्छेद 111 के तहत राष्ट्रपति विधेयक पर हस्ताक्षर कर उसे कानून का रूप देते हैं।'
          }
        }
      },
      {
        id: 'lesson_how_to_understand_political_news',
        level: 'intermediate',
        category: 'Media & Fact-Checking',
        readTimeMinutes: 5,
        title: {
          en: 'How to Understand Political News: Facts vs Opinions',
          hi: 'राजनीतिक खबरों की समझ: तथ्य, राय और फैक्ट-चेक'
        },
        summary: {
          en: 'Develop media literacy to distinguish constitutional facts from political propaganda, sensation, and biased narratives.',
          hi: 'सच्ची राजनीतिक जागरूकता के लिए मीडिया साक्षरता सीखें: निष्पक्ष तथ्य, राजनीतिक प्रोपेगैंडा और सनसनीखेज बहसों में अंतर पहचानें।'
        },
        keyPoints: {
          en: [
            'Fact: An objective reality verifiable with official gazettes, court orders, or census data.',
            'Opinion: A subjective viewpoint or emotional judgment from a politician or commentator.',
            'Always verify with primary sources (PIB Fact Check, Supreme Court orders, PRS India, Election Commission).',
            'Beware of confirmation bias: Seek out diverse reputable perspectives.'
          ],
          hi: [
            'तथ्य (Fact): आधिकारिक गजट, कोर्ट ऑर्डर या सरकारी आंकड़ों द्वारा प्रमाणित सत्य।',
            'राय (Opinion): किसी नेता, दल या विश्लेषक का व्यक्तिगत दृष्टिकोण या राजनीतिक बयान।',
            'हमेशा मूल स्रोतों (PIB, सुप्रीम कोर्ट की वेबसाइट, PRS इंडिया, चुनाव आयोग) से जांच करें।',
            'पुष्टिकरण पूर्वाग्रह (Confirmation Bias) से बचें: केवल वही न सुनें जो आपकी पूर्व धारणा को सही ठहराए।'
          ]
        },
        content: {
          en: `In the age of 24/7 TV studio yelling and WhatsApp forwards, a responsible citizen must be a fact-checking detective.

### The 3-Layer News Filter:
1. **Layer 1: The Core Event (Fact):** What actually occurred? E.g., *"Parliament passed Bill X by 310 to 140 votes."* (Verifiable).
2. **Layer 2: Political Spin (Partisan Reaction):** *"Party A calls it historic progress; Party B calls it a black day for democracy."* (Both are political opinions designed to mobilize vote banks).
3. **Layer 3: Independent Impact Analysis:** What will this bill actually change on the ground for farmers, students, or taxpayers?

### Golden Rules of Political News Literacy:
- **Headline Traps:** Headlines are written to maximize outrage clicks, often distorting the nuance in paragraph 10.
- **Anonymous "Sources":** Treat "sources claim" with caution until backed by on-record statements.
- **Source Verification:** Always check if a viral political quote exists on the official Sansad TV feed or official press releases.`,
          hi: `सोशल मीडिया के दौर में एक जागरूक नागरिक का सबसे बड़ा हथियार उसकी मीडिया साक्षरता है।

### राजनीतिक खबर को परखने के 3 स्तर:
1. **स्तर 1: मूल घटना (तथ्य / Fact):** असल में क्या हुआ? जैसे—"संसद ने 310 के मुकाबले 140 वोटों से विधेयक पारित किया।" (यह जांचा जा सकता है)।
2. **स्तर 2: राजनीतिक बयानबाजी (राय / Opinion):** "सत्तारूढ़ दल ने इसे ऐतिहासिक बताया, जबकि विपक्ष ने इसे काला कानून कहा।" (यह दोनों दलों का अपना राजनीतिक नैरेटिव है)।
3. **स्तर 3: वास्तविक प्रभाव विश्लेषण (Analysis):** इस कानून से आम जनता, छात्रों या व्यापारियों के जीवन पर क्या वास्तविक असर पड़ेगा?

### फैक्ट-चेक के सुनहरे नियम:
- **क्लिकबेट हेडलाइन से बचें:** अक्सर हेडलाइन भड़काऊ होती है, जबकि खबर के अंदर तथ्य कुछ और होते हैं।
- **वायरल पोस्ट पर तुरंत यकीन न करें:** जब तक चुनाव आयोग, सुप्रीम कोर्ट या पीआईबी की आधिकारिक पुष्टि न हो, व्हाट्सएप संदेशों को सच न मानें।
- **विपरीत पक्ष का तर्क भी सुनें:** दोनों पक्षों के तर्कों को सुनकर ही अपना स्वतंत्र नजरिया बनाएं।`
        },
        constitutionalReference: 'Freedom of Speech and Expression under Article 19(1)(a) & Reasonable Restrictions under Article 19(2)',
        practicalExample: {
          en: 'When a viral post claims a state government has banned a welfare scheme, go to the official state finance department website or PIB Fact Check to verify the government order (G.O.) number.',
          hi: 'जब सोशल मीडिया पर दावा हो कि कोई योजना बंद कर दी गई है, तो सीधे सरकारी विभाग की वेबसाइट पर जाकर उसका शासनादेश (G.O.) संख्या देखें।'
        },
        proTip: {
          en: 'A true political thinker never falls for emotional rage-bait. Ask three questions: What is the primary source? What are the counter-arguments? Who benefits from this narrative?',
          hi: 'राजनीतिक रूप से परिपक्व व्यक्ति कभी उत्तेजित नहीं होता। वह तीन सवाल पूछता है: इसका असली स्रोत क्या है? दूसरा पक्ष क्या कह रहा है? और इस बयान से किसे चुनावी फायदा होगा?'
        },
        quizQuestion: {
          question: {
            en: 'Which of the following statements represents a verifiable "Constitutional Fact" rather than an opinion?',
            hi: 'निम्नलिखित में से कौन सा कथन व्यक्तिगत राय न होकर एक सत्यापित "संवैधानिक तथ्य" है?'
          },
          options: {
            en: [
              'Leader X gave the most powerful speech in parliamentary history.',
              'The Constitution of India came into effect on 26 January 1950.',
              'Party Y is the only party that truly cares about ordinary citizens.',
              'The new tax reform is disastrous for all small businesses.'
            ],
            hi: [
              'नेता X ने संसद के इतिहास का सबसे शक्तिशाली भाषण दिया।',
              'भारत का संविधान 26 जनवरी 1950 को लागू हुआ था।',
              'पार्टी Y ही एकमात्र ऐसी पार्टी है जो सच में आम जनता की चिंता करती है।',
              'नया टैक्स सुधार सभी छोटे व्यापारियों के लिए विनाशकारी है।'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'The date of constitutional enactment is an objective historical fact, whereas the others are subjective judgments or political opinions.',
            hi: 'संविधान के लागू होने की तिथि एक ऐतिहासिक एवं कानूनी तथ्य है, जबकि अन्य विकल्प व्यक्तिगत राय या राजनीतिक दावे हैं।'
          }
        }
      }
    ]
  },

  // ==================== ADVANCED LEVEL ====================
  {
    id: 'course_adv_1',
    level: 'advanced',
    title: {
      en: 'Political Strategy, Leadership & Governance',
      hi: 'राजनीतिक रणनीति, जन-नेतृत्व और सुशासन'
    },
    description: {
      en: 'For aspiring leaders, campaign managers, and active citizens: master election war rooms, speechwriting, media relations, and policy design.',
      hi: 'भावी नेताओं, चुनावी रणनीतिकारों और युवाओं के लिए: चुनावी वार रूम, भाषण लेखन, जनसंवाद, पीआर प्रबंधन और नीति निर्माण का संपूर्ण मार्गदर्शन।'
    },
    icon: 'Crown',
    color: 'from-amber-600 via-rose-700 to-indigo-900',
    modulesCount: 7,
    lessons: [
      {
        id: 'lesson_campaign_strategy',
        level: 'advanced',
        category: 'Campaign Management',
        readTimeMinutes: 6,
        title: {
          en: 'Political Strategy: War Rooms & Voter Segmentation',
          hi: 'चुनावी रणनीति: वार रूम, बूथ मैनेजमेंट और वोटर सेगमेंटेशन'
        },
        summary: {
          en: 'The science behind winning elections: micro-targeting, booth management, swing voter analysis, and data-driven war rooms.',
          hi: 'आधुनिक चुनावी रणनीति का विज्ञान: बूथ लेवल मैनेजमेंट, पन्ना प्रमुख प्रणाली, फ्लोटिंग वोटर्स की पहचान और डेटा वार रूम का संचालन।'
        },
        keyPoints: {
          en: [
            'Elections are won at the polling booth (typically 800-1200 voters per booth).',
            'Voter segmentation: Core base voters (motivate turnout) vs Swing/Floating voters (persuade with issues).',
            'Modern War Room verticals: Data analytics, Field operations, Media/PR, Social narrative, Legal/ECI compliance.'
          ],
          hi: [
            'चुनाव रैलियों से ज्यादा पोलिंग बूथ पर जीते जाते हैं (हर बूथ पर लगभग 800-1200 मतदाता)।',
            'मतदाता वर्गीकरण: कोर समर्थक (जिन्हें वोट डालने बूथ तक लाना है) बनाम स्विंग/फ्लोटिंग वोटर (जिन्हें स्थानीय मुद्दों से जोड़ना है)।',
            'वार रूम के प्रमुख अंग: डेटा व सर्वे, फील्ड ऑपरेशन्स, मीडिया व प्रेस, सोशल मीडिया और चुनाव आयोग लीगल सेल।'
          ]
        },
        content: {
          en: `Modern political campaigns combine ground-level grassroots sweat with sophisticated data strategy.

### 1. The Booth Management Doctrine:
In Indian elections, the slogan *"बूथ जीता, चुनाव जीता"* (Win the booth, win the election) is an operational truth.
- **Booth President & Panna Pramukh (Page In-Charge):** Assigning dedicated volunteers to every single page of the electoral roll (~30-60 voters).
- **Voter Categorization:**
  - Category A: Committed loyal supporters.
  - Category B: Neutral, undecided, issue-oriented swing voters.
  - Category C: Opponent loyalists (avoid wasting scarce resources here; focus on A & B).

### 2. The 5 Verticals of an Election War Room:
1. **Intelligence & Polling:** Running constituency baseline surveys and pulse tracking.
2. **Field Mobilization:** Padayatras, door-to-door leafleting, street corner meetings (nukkad sabhas).
3. **Media & Social Media Response Team:** Rapid response countering opponent claims within 30 minutes.
4. **Logistics & Materials:** Loudspeaker permissions, vehicles, stage setup, volunteer food.
5. **Election Day Machinery:** Voter slip distribution, booth polling agents, monitoring EVM mock polls at 6:00 AM.`,
          hi: `आधुनिक राजनीति में भावना और विज्ञान दोनों का तालमेल आवश्यक है।

### 1. बूथ प्रबंधन का सिद्धांत:
भारतीय राजनीति में "बूथ जीता तो चुनाव जीता" सबसे बड़ा जमीनी सच है।
- **पन्ना प्रमुख प्रणाली:** वोटर लिस्ट के हर एक पन्ने (लगभग 30-60 मतदाता) पर एक समर्पित कार्यकर्ता की जिम्मेदारी।
- **मतदाताओं का वर्गीकरण:**
  - श्रेणी क: पक्के समर्थक (इन्हें मतदान के दिन सुबह 11 बजे से पहले बूथ तक पहुंचाना)।
  - श्रेणी ख: निष्पक्ष, अनिर्णीत मतदाता (इन्हीं 10-15% वोटों से हार-जीत तय होती है; इन्हें स्थानीय विकास के तर्कों से जोड़ना)।
  - श्रेणी ग: विरोधी के पक्के समर्थक (इन पर ऊर्जा बर्बाद करने के बजाय श्रेणी ख पर ध्यान देना)।

### 2. चुनावी वार रूम के 5 प्रमुख विभाग:
1. **सर्वे और डेटा एनालिटिक्स:** क्षेत्र के जातिगत, सामाजिक और विकास के मुद्दों का वस्तुनिष्ठ अध्ययन।
2. **फील्ड ऑपरेशन्स:** पदयात्रा, घर-घर जनसंपर्क और नुक्कड़ सभाएं।
3. **रैपिड रिस्पॉन्स मीडिया सेल:** विरोधी के झूठे आरोपों का 30 मिनट के भीतर तथ्यों के साथ खंडन।
4. **लॉजिस्टिक्स और परमिशन सेल:** लाउडस्पीकर, रैली स्थल, चुनाव आयोग की Suvidha पोर्टल से समय पर अनुमति।
5. **मतदान दिवस (Polling Day):** सुबह 6 बजे ईवीएम के मॉक पोल की जांच से लेकर शाम 6 बजे तक वोटिंग प्रतिशत की निगरानी।`
        },
        constitutionalReference: 'Representation of the People Act, 1951 (Expenditure Monitoring & Poll Regulations)',
        practicalExample: {
          en: 'A candidate who tracks booth-wise turnout on polling day can deploy youth volunteers to mobilize lagging pro-candidate neighborhoods before the 5 PM cutoff.',
          hi: 'मतदान के दिन दोपहर 2 बजे तक किस बूथ पर कम मतदान हुआ है, यह देखकर वहां तुरंत बाइक सवार कार्यकर्ताओं को भेजकर मतदाताओं को प्रेरित करना।'
        },
        proTip: {
          en: 'Never rely on sycophants for campaign feedback. Have an independent third-party audit team tell you the harsh unvarnished ground truth.',
          hi: 'कभी भी चाटुकार कार्यकर्ताओं की वाहवाही पर भरोसा मत कीजिए। हमेशा एक निष्पक्ष टीम से जमीनी हकीकत का फीडबैक लें।'
        },
        quizQuestion: {
          question: {
            en: 'In Indian electoral strategy, what is the role of a "Panna Pramukh"?',
            hi: 'भारतीय चुनावी रणनीति में "पन्ना प्रमुख" की क्या भूमिका होती है?'
          },
          options: {
            en: [
              'Writing the party manifesto',
              'Being responsible for contact with voters on a single page of the voter list',
              'Managing the helicopter for campaign rallies',
              'Counting EVM machines after elections'
            ],
            hi: [
              'पार्टी का घोषणापत्र लिखना',
              'मतदाता सूची के एक विशिष्ट पन्ने (Page) के मतदाताओं से निरंतर संपर्क साधना',
              'चुनावी रैलियों के लिए हेलीकॉप्टर का प्रबंधन करना',
              'चुनाव के बाद ईवीएम मशीनों की गिनती करना'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'A Panna Pramukh is assigned to maintain direct personal touch with the 30 to 60 voters listed on a single page of the voter roll.',
            hi: 'पन्ना प्रमुख वोटर लिस्ट के एक पन्ने में दर्ज लगभग 30-60 मतदाताओं से सीधा संपर्क और समन्वय रखता है।'
          }
        }
      },
      {
        id: 'lesson_public_speaking_leadership',
        level: 'advanced',
        category: 'Leadership & Oratory',
        readTimeMinutes: 6,
        title: {
          en: 'Public Speaking: Mastering Political Oratory & Rallies',
          hi: 'जनसंवाद और नेतृत्व: भाषण कला और जनसभा प्रबंधन'
        },
        summary: {
          en: 'Learn the ancient Aristotelian rhetoric principles adapted for Indian political stages: Ethos, Pathos, Logos, voice modulation, and crowd connect.',
          hi: 'राजनीतिक मंचों पर प्रभावशाली भाषण देने की कला: अरस्तू के तीन स्तंभ (चरित्र, भावना, तर्क), आवाज का उतार-चढ़ाव और जनता से भावनात्मक जुड़ाव।'
        },
        keyPoints: {
          en: [
            'Ethos (Credibility of character), Pathos (Emotional resonance), Logos (Logical reasoning & evidence).',
            'The 3-Second Rule: Pause before speaking; silence commands crowd attention more than shouting.',
            'Connect local civic pain points with inspiring constitutional ideals.'
          ],
          hi: [
            'इथोस (चरित्र की विश्वसनीयता), पैथोस (जनता की भावना और दर्द से जुड़ाव), लोगोस (तर्क, तथ्य और योजना)।',
            '3-सेकंड का ठहराव नियम: माइक पर आकर तुरंत चिल्लाने के बजाय 3 सेकंड शांत खड़े रहें, भीड़ अपने आप शांत हो जाएगी।',
            'स्थानीय समस्याओं (सड़क, बेरोजगारी, पानी) को एक बड़े प्रेरणादायक समाधान से जोड़ें।'
          ]
        },
        content: {
          en: `Great political leaders are not born with a microphone; oratory is a rigorously trained craft.

### 1. Aristotle’s Three Rhetorical Pillars:
- **Ethos (आपकी विश्वसनीयता):** Why should people trust you? Highlight personal sacrifice, integrity, and track record.
- **Pathos (जनभावना):** Speak to people’s lived struggles—the mother worried about her child’s future, the farmer waiting for MSP, the youth preparing for exam leaks.
- **Logos (ठोस रोडमैप):** Do not just complain about darkness; show the switch. Present 3 clear, realistic actionable steps you will take.

### 2. Vocal Modulation & Stage Presence:
- **Pacing:** Beginners speak too fast due to adrenaline. Slow down by 30%. Speak at 110-130 words per minute.
- **The Power of the Dramatic Pause:** When making an important point, pause for 2 full seconds after delivering it. Let the audience absorb and applaud.
- **Body Language:** Open palms, grounded stance, sweeping eye contact across left, center, and right sections of the gathering.`,
          hi: `एक महान नेता मंच पर जन्मजात नहीं बनता, यह निरंतर अभ्यास से तराशी जाने वाली कला है।

### 1. प्रभावी भाषण के तीन स्वर्णिम सूत्र:
- **इथोस (Ethos - विश्वसनीयता):** लोग आपकी बात क्यों मानें? आपका अतीत, आपकी ईमानदारी और जनता के बीच बिताया गया समय।
- **पैथोस (Pathos - संवेदनशीलता):** जनता के दर्द को अपनी आवाज दें—बेरोजगार युवा की निराशा, अस्पताल के बाहर भटकते परिवार की लाचारी। जब आप उनका दर्द महसूस करेंगे, तभी वे आपको नेता मानेंगे।
- **लोगोस (Logos - तर्क व समाधान):** केवल कमियां गिनाने से कोई वोट नहीं देता। यह बताइए कि आपके पास क्या ठोस योजना है—3 स्पष्ट बिंदु रखें।

### 2. मंच पर आवाज और बॉडी लैंग्वेज का जादू:
- **गति पर नियंत्रण:** घबराहट में लोग बहुत तेज बोलने लगते हैं। अपनी गति को धीमा रखें (लगभग 120 शब्द प्रति मिनट)।
- **ठहराव (Pause) की ताकत:** कोई भी दमदार बात कहने के बाद 2 सेकंड चुप रहें। जनता को उस बात को पचाने और ताली बजाने का मौका दें।
- **दृष्टि संपर्क (Eye Contact):** केवल आगे बैठे VIPs को मत देखिए; दूर खड़े अंतिम व्यक्ति और महिलाओं की तरफ भी देखकर संवाद कीजिए।`
        },
        constitutionalReference: 'Article 19(1)(a) Freedom of Speech and Expression',
        practicalExample: {
          en: 'Instead of saying "Roads are bad", say: "Yesterday at 9 PM, I saw an ambulance carrying a pregnant sister stuck in the mud on Station Road for 45 minutes. That is not just a pothole; that is broken governance!"',
          hi: 'यह कहने के बजाय कि "सड़कें खराब हैं", यह कहिए: "परसों रात जब स्टेशन रोड पर गड्ढे के कारण एक एंबुलेंस 45 मिनट फंसी रही, तो वह केवल सड़क की खराबी नहीं थी, वह इस शहर के जनप्रतिनिधियों की संवेदनहीनता थी!"'
        },
        proTip: {
          en: 'Always end a political speech with an inclusive, actionable call-to-action that unites people rather than creating hostility.',
          hi: 'भाषण का समापन हमेशा जनता को जोड़ने वाले, भविष्योन्मुखी और ऊर्जावान आह्वान के साथ करें।'
        },
        quizQuestion: {
          question: {
            en: 'In classical rhetoric for leadership, which pillar represents "logical reasoning and evidence"?',
            hi: 'भाषण कला के तीन शास्त्रीय स्तंभों में से "तर्क, तथ्य और प्रमाण" को क्या कहा जाता है?'
          },
          options: {
            en: ['Ethos', 'Pathos', 'Logos', 'Mythos'],
            hi: ['इथोस (Ethos)', 'पैथोस (Pathos)', 'लोगोस (Logos)', 'मायथोस (Mythos)']
          },
          correctIndex: 2,
          explanation: {
            en: 'Logos represents appealing to logic, facts, and concrete arguments.',
            hi: 'लोगोस (Logos) का संबंध बौद्धिक तर्क, आंकड़ों और ठोस प्रमाणों से होता है।'
          }
        }
      },
      {
        id: 'lesson_speech_writing_mastery',
        level: 'advanced',
        category: 'Political Communication',
        readTimeMinutes: 5,
        title: {
          en: 'How to Write Political Speeches: The 4-Part Structure',
          hi: 'राजनीतिक भाषण लेखन: 4 चरणों का अचूक ढांचा'
        },
        summary: {
          en: 'Master the architectural template used by top political speechwriters: The Hook, The Shared Crisis, The Visionary Solution, and The Call to Action.',
          hi: 'दुनिया भर के शीर्ष भाषण लेखकों द्वारा प्रयुक्त 4-चरणीय संरचना: हुक (आकर्षक शुरुआत), साझा संकट, दूरदर्शी समाधान और क्रांतिकारी आह्वान।'
        },
        keyPoints: {
          en: [
            'Part 1: The Hook (Story, question, or cultural reference that grabs attention in 15 seconds).',
            'Part 2: The Shared Crisis (Naming the real obstacle without personal malice).',
            'Part 3: The Visionary Solution (Specific, hopeful roadmap grounded in constitutional values).',
            'Part 4: The Call to Action (Specific task for the audience: vote, volunteer, unite).'
          ],
          hi: [
            'भाग 1: हुक (Hook) - पहले 15 सेकंड में किसी स्थानीय किस्से, दोहे या सवाल से सबका ध्यान खींचना।',
            'भाग 2: साझा संकट - समस्या को ईमानदारी से रेखांकित करना।',
            'भाग 3: सकारात्मक समाधान - 3 ठोस बिंदुओं में विकास का रोडमैप।',
            'भाग 4: आह्वान (Call to Action) - जनता से स्पष्ट और उत्साहवर्धक संकल्प लेना।'
          ]
        },
        content: {
          en: `A political speech is not an essay to be read; it is a musical score meant to be performed.

### The 4-Part Architecture:
1. **The Hook (0:00 - 1:00):**
   - Do not spend 5 minutes reading a boring list of dignitaries on the dais.
   - Greet the crowd in their mother tongue or local dialect. Start with a vivid local story or a provoking question.
2. **The Shared Struggle (1:00 - 4:00):**
   - Frame the opponent not as an evil enemy, but as ineffective or indifferent.
   - Use the Rule of Three: *"Our schools lack teachers, our clinics lack medicines, and our youth lack employment."*
3. **The Blueprint for Transformation (4:00 - 8:00):**
   - Shift from critique to hope. What will change in the first 100 days?
   - Connect policies with real human dignity.
4. **The Crescendo & Call to Action (8:00 - 10:00):**
   - Rise in vocal pitch and rhythm.
   - Invite the audience to be partners in history, not passive spectators.`,
          hi: `एक राजनीतिक भाषण कोई निबंध नहीं है जिसे पढ़ा जाए; यह जनता के दिलों की धड़कन से जुड़ने का जरिया है।

### 4 चरणों का अचूक ढांचा:
1. **हुक (Hook - पहला 1 मिनट):**
   - मंच पर बैठे अतिथियों के नाम गिनाने में 5 मिनट बर्बाद न करें।
   - स्थानीय बोली या मुहावरे से शुरुआत करें। किसी स्थानीय घटना या संघर्ष से बात शुरू करें।
2. **साझा संकट (1 से 4 मिनट):**
   - विरोधियों पर निजी कीचड़ उछालने के बजाय उनकी नीतियों की विफलता उजागर करें।
   - तीन की लय (Rule of Three): *"न खेतों को पानी मिला, न युवाओं को रोजगार मिला, और न माताओं-बहनों को सुरक्षा मिली!"*
3. **उम्मीद का रोडमैप (4 से 8 मिनट):**
   - केवल शिकायत मत कीजिए, उम्मीद जगाइए। पहले 100 दिनों में आप क्या बदलेंगे?
   - अपनी योजनाओं को संविधान के समानता और न्याय के मूल्यों से जोड़िए।
4. **चरमोत्कर्ष और जन-आह्वान (8 से 10 मिनट):**
   - अपनी आवाज में ऊर्जा और आत्मविश्वास बढ़ाइए।
   - जनता से हाथ उठाकर बदलाव का संकल्प दिलवाइए।`
        },
        constitutionalReference: 'Preamble ideals of Justice (Social, Economic, and Political)',
        practicalExample: {
          en: 'Look at Martin Luther King Jr.’s "I Have a Dream" or Nehru’s "Tryst with Destiny"—neither attacked individuals; both painted an irresistible moral destiny.',
          hi: 'नेहरू का "ट्रिस्ट विद डेस्टिनी" भाषण याद कीजिए—उसमें किसी दल की बुराई नहीं थी, बल्कि स्वतंत्र भारत के नव-निर्माण का विराट संकल्प था।'
        },
        proTip: {
          en: 'Use our in-app "Political Speech Builder" in the Leadership Hub to generate your first custom speech draft in 3 minutes!',
          hi: 'हमारे लीडरशिप हब में दिए गए "स्पीच बिल्डर टूल" का उपयोग करके आप 3 मिनट में अपना पहला प्रभावशाली भाषण तैयार कर सकते हैं!'
        },
        quizQuestion: {
          question: {
            en: 'In political speechwriting, what is the recommended length of time to spend reading out dignitary names on stage?',
            hi: 'भाषण कला में मंच पर बैठे अतिथियों के नाम पढ़ने में कितना समय लगाना उचित माना जाता है?'
          },
          options: {
            en: [
              'Under 30 seconds (keep it swift and move straight to people)',
              'At least 5 to 7 minutes',
              'The entire first half of the speech',
              'Names should never be acknowledged'
            ],
            hi: [
              '30 सेकंड से कम (तुरंत जनता के मुख्य मुद्दे पर आएं)',
              'कम से कम 5 से 7 मिनट',
              'भाषण का पूरा पहला आधा हिस्सा',
              'कभी किसी का नाम नहीं लेना चाहिए'
            ]
          },
          correctIndex: 0,
          explanation: {
            en: 'Lengthy protocol salutations bore the audience; keep formal pleasantries under 30 seconds and respect the crowd’s time.',
            hi: 'लंबे औपचारिक अभिवादन से श्रोताओं का ध्यान भटक जाता है; 30 सेकंड में औपचारिकता पूरी कर सीधे जनता के सरोकार पर आना चाहिए।'
          }
        }
      },
      {
        id: 'lesson_public_relations_media',
        level: 'advanced',
        category: 'Media & Communications',
        readTimeMinutes: 5,
        title: {
          en: 'Public Relations & Crisis Management in Politics',
          hi: 'प्रेस और पीआर प्रबंधन: राजनीतिक संकट और मीडिया रणनीति'
        },
        summary: {
          en: 'How to manage press conferences, navigate hostile television debates, and handle political reputation crises under legal and ethical boundaries.',
          hi: 'प्रेस वार्ता का सफल आयोजन, तीखे सवालों का शालीनता से सामना, और सोशल मीडिया पर छवि के संकट (Crisis) का प्रभावी समाधान।'
        },
        keyPoints: {
          en: [
            'Golden Rule: If you do not tell your story, your political opponents will tell it for you.',
            'Press Release structure: Clear headline, inverted pyramid facts, quotes, media contact.',
            'Bridging Technique: Acknowledge the tough question, then bridge back to your core constructive message.'
          ],
          hi: [
            'पहला नियम: यदि आप अपनी कहानी खुद तथ्यों के साथ नहीं बताएंगे, तो आपके विरोधी उसे तोड़-मरोड़ कर पेश करेंगे।',
            'प्रेस नोट का सही प्रारूप: संक्षिप्त शीर्षक, मुख्य तथ्य पहले पैराग्राफ में, अधिकृत बयान और संपर्क सूत्र।',
            'ब्रिजिंग तकनीक (Bridging): पत्रकार के तीखे सवाल का शालीनता से सामना करते हुए अपनी मुख्य जनहितकारी बात पर लौटना।'
          ]
        },
        content: {
          en: `In the digital era, political reputations built over 20 years can be damaged in 20 minutes if crisis communications fail.

### 1. The Anatomy of a Successful Press Conference:
- Keep opening remarks strictly under 7 minutes.
- Provide a physical 1-page **Press Release (प्रेस विज्ञप्ति)** with verified figures and gazette notifications.
- Maintain emotional composure; never fight with reporters. Even hostile questions are opportunities to reach the broader public viewing the broadcast.

### 2. The Bridging Technique:
When faced with baiting questions designed for sensational clips:
- **Acknowledge:** *"That is a very fair question you raise..."*
- **Bridge:** *"However, what the citizens of our constituency are truly asking right now is..."*
- **Deliver:** State your solution and data-backed plan.`,
          hi: `आज के डिजिटल युग में सालों में बनी साख को 20 मिनट का एक गलत बयान बर्बाद कर सकता है।

### 1. प्रेस वार्ता (Press Conference) के नियम:
- अपनी शुरुआती बात 5 से 7 मिनट के अंदर पूरी करें।
- पत्रकारों को तथ्यों और सरकारी आदेशों वाला 1 पेज का स्पष्ट **प्रेस नोट** जरूर दें।
- कभी किसी पत्रकार से उलझें या गुस्सा न हों; कठिन सवाल भी आपके लिए अपना पक्ष रखने का अवसर होते हैं।

### 2. सवालों के जवाब की 'ब्रिजिंग तकनीक':
जब कोई भड़काऊ या फंसाने वाला सवाल आए:
- **स्वीकार करें:** *"आपका यह सवाल पूछना बिल्कुल स्वाभाविक है..."*
- **ब्रिज बनाएं:** *"लेकिन इस सवाल के पीछे जो असली दर्द हमारे क्षेत्र के युवाओं का है, वह यह है कि..."*
- **समाधान रखें:** अपनी सकारात्मक योजना और आंकड़े प्रस्तुत करें।`
        },
        constitutionalReference: 'Defamation exceptions under Section 499 IPC / BNS & Article 19(2)',
        practicalExample: {
          en: 'When a false rumor spreads on social media, issue a signed statement on official letterhead within 1 hour, accompanied by a 60-second direct video clarification.',
          hi: 'किसी भी फर्जी अफवाह के फैलने पर 1 घंटे के भीतर आधिकारिक लेटरहेड पर बयान और 1 मिनट का शांत, तथ्यपूर्ण वीडियो जारी करें।'
        },
        proTip: {
          en: 'Never say "No Comment" to the press. It makes you look guilty. Instead say: "We are verifying the official records and will release a verified factual statement shortly."',
          hi: 'कभी भी "नो कमेंट्स" कहकर मत भागिए। इसके बजाय कहें: "हम आधिकारिक तथ्यों की जांच कर रहे हैं और जल्द ही पूरा विवरण साझा करेंगे।"'
        },
        quizQuestion: {
          question: {
            en: 'In political media handling, what is the purpose of the "Bridging Technique"?',
            hi: 'राजनीतिक मीडिया प्रबंधन में "ब्रिजिंग तकनीक" का क्या उद्देश्य होता है?'
          },
          options: {
            en: [
              'To avoid facing journalists entirely',
              'To acknowledge a tough query and transition smoothly to your core substantive message',
              'To shout louder than the debate anchor',
              'To file a police complaint against reporters'
            ],
            hi: [
              'पत्रकारों से मिलने से पूरी तरह बचना',
              'कठिन सवाल को शालीनता से स्वीकार करते हुए अपनी मुख्य नीतिगत बात पर लौटना',
              'टीवी एंकर से भी तेज चिल्लाना',
              'पत्रकारों के खिलाफ एफआईआर दर्ज कराना'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'Bridging allows leaders to stay on message and address public concerns constructively without getting trapped in sensational bait.',
            hi: 'ब्रिजिंग नेता को बिना उत्तेजित हुए अपनी बात शालीनता से जनता तक पहुंचाने में मदद करती है।'
          }
        }
      },
      {
        id: 'lesson_community_organizing',
        level: 'advanced',
        category: 'Grassroots Leadership',
        readTimeMinutes: 5,
        title: {
          en: 'Community Organizing & Solving Public Issues',
          hi: 'जमीनी जन-संगठन और जनसमस्याओं का समाधान'
        },
        summary: {
          en: 'How to transition from a social worker to a respected community leader by building civic ward committees, blood donation camps, and grievance drives.',
          hi: 'सामाजिक कार्यकर्ता से सम्मानित जननेता बनने का सफर: वार्ड कमेटियां बनाना, जनसुनवाई आयोजित करना और सरकारी योजनाओं का लाभ दिलाना।'
        },
        keyPoints: {
          en: [
            'Earning social capital: True leadership begins years before election tickets are announced.',
            'RTI (Right to Information, 2005): Using public records to uncover fund leakages.',
            'Organizing constructive civic camps: Health checkups, voter ID registration, citizen welfare facilitation.'
          ],
          hi: [
            'सामाजिक पूंजी का निर्माण: असली नेतृत्व टिकट मिलने के बाद नहीं, जनता के बीच 5 साल पसीना बहाने से बनता है।',
            'सूचना का अधिकार (RTI Act, 2005): सरकारी फाइलों से विकास कार्यों के खर्च का सच निकालना।',
            'रचनात्मक कार्य: रक्तदान शिविर, मतदाता सूची में नाम जुड़वाना, राशन व पेंशन शिविर लगाना।'
          ]
        },
        content: {
          en: `Voters in India can easily smell a "seasonal politician" who only appears 2 months before voting day.
Long-term enduring political leadership requires building deep **Social Capital**.

### 1. The 3 Steps to Community Organizing:
1. **Identify the Hyper-Local Pain Point:**
   - Walk your ward/village street by street. What is hurting people daily? Contaminated water? Dangerous open drains? A bus stop without a shed?
2. **Citizen Petitions and Collective Representation:**
   - Gather 100 signatures from local residents.
   - Submit a formal stamped letter to the Sub-Divisional Magistrate (SDM) or Municipal Commissioner. Give a 15-day deadline.
3. **Peaceful Constitutional Advocacy:**
   - If officials do not respond, organize a peaceful Gandhian sit-in or clean the drain collectively with youth volunteers while streaming live. Real action shames apathy!`,
          hi: `भारतीय मतदाता बहुत समझदार हैं; वे उस "मौसमी नेता" को तुरंत पहचान लेते हैं जो सिर्फ चुनाव से दो महीने पहले हाथ जोड़कर निकलता है।
दीर्घकालिक नेतृत्व के लिए जनता के दिलों में जगह बनाना आवश्यक है।

### 1. जमीनी जन-संगठन के 3 चरण:
1. **स्थानीय समस्या की पहचान:**
   - अपने वार्ड या गाँव में पैदल घूमिए। लोगों की रोजमर्रा की तकलीफ क्या है? गंदा पानी? टूटी सड़क? या अस्पताल में डॉक्टर की गैरहाजिरी?
2. **सामूहिक हस्ताक्षर अभियान:**
   - मोहल्ले के 100 नागरिकों के हस्ताक्षर वाला ज्ञापन तैयार कीजिए।
   - एसडीएम या नगर आयुक्त को रिसीविंग के साथ सौंपिए।
3. **रचनात्मक और शांतिपूर्ण सत्याग्रह:**
   - यदि अधिकारी सुनवाई न करें, तो युवाओं के साथ मिलकर स्वयं श्रमदान करके उस नाले की सफाई कीजिए। जब अखबारों और सोशल मीडिया पर आपकी सकारात्मक पहल दिखेगी, तो प्रशासन को झुकना ही पड़ेगा!`
        },
        constitutionalReference: 'Right to Information Act, 2005 & Article 19(1)(b) Peaceful Assembly',
        practicalExample: {
          en: 'File an RTI asking for the sanction letter, contractor name, and expenditure bills for the road that washed away after two rains.',
          hi: 'पहली ही बारिश में बह गई सड़क के ठेकेदार का नाम और बिलों की कॉपी निकालने के लिए आरटीआई (RTI) लगाइए।'
        },
        proTip: {
          en: 'Keep a physical register in your public office. Note every citizen’s name, phone number, issue, and follow up till resolved. That builds an unshakeable voter family.',
          hi: 'अपने कार्यालय में एक रजिस्टर रखिए। हर पीड़ित का नाम, फोन और समस्या दर्ज कीजिए और जब तक काम न हो, उसका साथ मत छोड़िए।'
        },
        quizQuestion: {
          question: {
            en: 'In which year was the landmark Right to Information (RTI) Act enacted in India?',
            hi: 'भारत में ऐतिहासिक सूचना का अधिकार (RTI) अधिनियम किस वर्ष लागू हुआ था?'
          },
          options: {
            en: ['1998', '2002', '2005', '2010'],
            hi: ['1998', '2002', '2005', '2010']
          },
          correctIndex: 2,
          explanation: {
            en: 'The Right to Information Act was passed in 2005, giving ordinary citizens the power to inspect government records.',
            hi: '2005 में आरटीआई कानून लागू हुआ जिसने आम नागरिक को सरकारी रिकॉर्ड मांगने की शक्ति दी।'
          }
        }
      },
      {
        id: 'lesson_policy_making_governance',
        level: 'advanced',
        category: 'Public Policy',
        readTimeMinutes: 5,
        title: {
          en: 'Policy Making and Governance: From Promises to Reality',
          hi: 'नीति निर्माण और सुशासन: वादों से धरातल तक'
        },
        summary: {
          en: 'Understand how public policies are designed, cost-budgeted, monitored, and scaled across states to create lasting civic prosperity.',
          hi: 'समझें कि जनकल्याणकारी नीतियां कैसे बनती हैं, उनके लिए बजट का प्रबंध कैसे होता है और उन्हें धरातल पर कैसे लागू किया जाता है।'
        },
        keyPoints: {
          en: [
            'Policy Cycle: Problem Identification -> Agenda Setting -> Policy Formulation -> Budget Allocation -> Implementation -> Evaluation.',
            'Direct Benefit Transfer (DBT): Eliminating middlemen through digital governance (JAM trinity).',
            'Fiscal Prudence vs Freebies: Balancing welfare safety nets with state capital investment in roads and industry.'
          ],
          hi: [
            'नीति चक्र: समस्या की पहचान -> नीति का प्रारूप -> बजट आवंटन -> क्रियान्वयन -> सामाजिक मूल्यांकन।',
            'प्रत्यक्ष लाभ अंतरण (DBT): बिचौलियों को खत्म कर सीधे नागरिक के बैंक खाते में मदद पहुंचाना।',
            'वित्तीय अनुशासन बनाम लोकलुभावन वादे: जनकल्याणकारी योजनाओं और राज्य के विकास बजट में स्वस्थ संतुलन।'
          ]
        },
        content: {
          en: `Good politics is ultimately measured by **Good Governance (सुशासन)**. A leader who wins elections but cannot govern will be rejected at the next term.

### The Policy Formulation Cycle:
1. **Evidence-Based Design:** Reviewing NITI Aayog indices, NFHS health surveys, and CAG audit reports.
2. **Fiscal Feasibility:**
   - Where will the revenue come from? (State GST, property taxes, central grants under Article 282, market borrowing within FRBM Act limits).
3. **Implementation Bottlenecks:**
   - Training frontline workers (Anganwadi, Patwari, ASHA, Panchayat Secretary).
   - Establishing real-time digital monitoring dashboards to stop corruption.`,
          hi: `अच्छी राजनीति की अंतिम परीक्षा **सुशासन** है। जो नेता चुनाव जीतना जानता है पर शासन चलाना नहीं जानता, जनता उसे अगले चुनाव में नकार देती है।

### नीति निर्माण के महत्वपूर्ण चरण:
1. **आंकड़ों पर आधारित नीति:** नीति आयोग के सूचकांकों, स्वास्थ्य सर्वेक्षणों (NFHS) और जमीनी हकीकत का अध्ययन।
2. **वित्तीय व्यवहार्यता (बजट):**
   - योजना के लिए पैसा कहाँ से आएगा? (राज्य का अपना कर संग्रह, केंद्रीय अनुदान या कर्ज सीमा)।
3. **जमीनी क्रियान्वयन:**
   - ब्लॉक और ग्राम स्तर के कर्मचारियों (पटवारी, आशा वर्कर, पंचायत सचिव) की ट्रेनिंग और जवाबदेही।
   - भ्रष्टाचार रोकने के लिए डिजिटल डैशबोर्ड और सामाजिक अंकेक्षण।`
        },
        constitutionalReference: 'Directive Principles of State Policy (Articles 36-51)',
        practicalExample: {
          en: 'The Mid-Day Meal Scheme (now PM POSHAN) started as a state innovation in Tamil Nadu under K. Kamaraj and M.G. Ramachandran before the Supreme Court mandated it nationwide.',
          hi: 'मिड-डे मील योजना पहले तमिलनाडु में कामराज जी द्वारा शुरू की गई थी, जिसके शानदार परिणाम देखकर बाद में सुप्रीम कोर्ट ने इसे पूरे देश में लागू करवाया।'
        },
        proTip: {
          en: 'A great policymaker measures outcomes (reduction in infant mortality, improvement in learning levels), not just outlays (how many rupees were announced).',
          hi: 'सफल नीति निर्माता यह नहीं देखता कि कितना पैसा खर्च हुआ, बल्कि यह देखता है कि कितने बच्चों का कुपोषण दूर हुआ और कितने युवाओं को काम मिला।'
        },
        quizQuestion: {
          question: {
            en: 'Which part of the Indian Constitution contains the Directive Principles of State Policy guiding government lawmaking?',
            hi: 'भारतीय संविधान का कौन सा भाग राज्य के नीति निदेशक तत्वों को समाहित करता है?'
          },
          options: {
            en: ['Part I', 'Part II', 'Part III', 'Part IV'],
            hi: ['भाग 1', 'भाग 2', 'भाग 3', 'भाग 4']
          },
          correctIndex: 3,
          explanation: {
            en: 'Part IV (Articles 36 to 51) lays down the Directive Principles of State Policy as fundamental in the governance of the country.',
            hi: 'संविधान का भाग 4 (अनुच्छेद 36-51) राज्य के नीति निदेशक तत्वों से संबंधित है।'
          }
        }
      },
      {
        id: 'lesson_political_ideologies',
        level: 'advanced',
        category: 'Political Philosophy',
        readTimeMinutes: 6,
        title: {
          en: 'Understanding Political Ideologies: Left, Right & Centre',
          hi: 'राजनीतिक विचारधाराएं: वामपंथ, दक्षिणपंथ और मध्यमार्ग'
        },
        summary: {
          en: 'A neutral, balanced, academic breakdown of Left-wing, Right-wing, Centrist, Socialist, Liberal, and Nationalist philosophies in global and Indian contexts.',
          hi: 'वामपंथ, दक्षिणपंथ, मध्यमार्ग, समाजवाद और राष्ट्रवाद की निष्पक्ष, तटस्थ और शैक्षणिक समझ।'
        },
        keyPoints: {
          en: [
            'Origins: French National Assembly seating in 1789 (supporters of monarchy sat on the right; supporters of revolution on the left).',
            'Left-wing: Focus on economic equality, public sector, labor rights, wealth redistribution.',
            'Right-wing: Focus on free markets, deregulation, cultural traditions, strong national defense.',
            'Centre / Pragmatism: Mixed economy, balancing social welfare with private enterprise.',
            'India’s unique constitutional synthesis: Sovereign, Socialist, Secular, Democratic Republic.'
          ],
          hi: [
            'उत्पत्ति: 1789 की फ्रांसीसी क्रांति (राजा के समर्थक दाईं ओर बैठे—Right; बदलाव के समर्थक बाईं ओर—Left)।',
            'वामपंथ (Left): आर्थिक समानता, मजदूरों के अधिकार, सरकारी नियंत्रण और संसाधनों के पुनर्वितरण पर जोर।',
            'दक्षिणपंथ (Right): खुला बाजार, निजी उद्योग, सांस्कृतिक परंपराओं का संरक्षण और मजबूत राष्ट्रवाद।',
            'मध्यमार्ग (Centre): मिश्रित अर्थव्यवस्था, जहाँ कल्याणकारी योजनाओं के साथ निजी निवेश को भी बढ़ावा मिले।',
            'भारत का अनूठा संविधान: संप्रभु, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक गणराज्य।'
          ]
        },
        content: {
          en: `Labels like "Left" and "Right" are thrown around constantly in TV debates. An educated citizen should understand their academic roots without prejudice.

### The Political Spectrum:
1. **Left-Wing (वामपंथ):**
   - **Economic View:** Strong state regulation, progressive taxation, state-owned enterprises, universal public healthcare and education.
   - **Social View:** Progressive social reform, questioning traditional hierarchies.
2. **Right-Wing (दक्षिणपंथ):**
   - **Economic View:** Free market capitalism, lower taxes, deregulation, private enterprise driving growth.
   - **Social View:** Preservation of cultural identity, family values, national security focus, historical heritage.
3. **Centrism & Social Democracy (मध्यमार्ग):**
   - Seeks pragmatic middle ground. Believes in a vibrant market economy that generates wealth, combined with robust safety nets for the vulnerable.

### The Indian Context:
Indian politics does not fit neatly into western ideological boxes:
- Almost all major Indian parties support welfare safety nets (food security, farmer cash transfers, subsidized power).
- The Indian Constitution establishes a **Mixed Economy** where the public and private sectors coexist for the common good.`,
          hi: `टीवी बहसों में अक्सर "वामपंथी" या "दक्षिणपंथी" जैसे शब्द सुनाई देते हैं। एक गंभीर छात्र को इनके मूल वैचारिक अर्थ समझने चाहिए।

### राजनीतिक विचारधाराओं का स्पेक्ट्रम:
1. **वामपंथ (Left-Wing):**
   - **आर्थिक विचार:** सरकारी नियंत्रण, मजदूरों के अधिकार, अमीरों पर अधिक टैक्स, मुफ्त सरकारी शिक्षा और स्वास्थ्य।
   - **सामाजिक विचार:** सामाजिक बदलाव, पुरानी परंपराओं की समीक्षा।
2. **दक्षिणपंथ (Right-Wing):**
   - **आर्थिक विचार:** खुला बाजार, निजी उद्यमों को प्रोत्साहन, टैक्स में कमी, व्यापार में सरकारी दखल कम होना।
   - **सामाजिक विचार:** राष्ट्रीय सुरक्षा, सांस्कृतिक गौरव, ऐतिहासिक विरासत और परंपराओं का संरक्षण।
3. **मध्यमार्ग (Centrism):**
   - व्यावहारिकता और संतुलन। यह मानता है कि देश के विकास के लिए उद्योग भी चाहिए और गरीबों के लिए कल्याणकारी योजनाएं भी।

### भारतीय राजनीति की अनूठी विशेषता:
भारत की राजनीति पश्चिमी खांचों में पूरी तरह फिट नहीं बैठती।
यहाँ लगभग सभी प्रमुख दल गरीबों के लिए राशन, किसानों के लिए सम्मान निधि और लोककल्याणकारी योजनाओं का समर्थन करते हैं। भारतीय संविधान एक **मिश्रित अर्थव्यवस्था** और समावेशी लोकतंत्र की वकालत करता है।`
        },
        constitutionalReference: 'Preamble ("Socialist, Secular, Democratic Republic") & Article 39 (Distribution of Material Resources)',
        practicalExample: {
          en: 'When a government builds highways through public-private partnerships (PPP) while providing free grain to 80 crore citizens, it is operating a pragmatic mixed-economy model.',
          hi: 'जब सरकार निजी कंपनियों से हाईवे और एयरपोर्ट बनवाए, और साथ ही 80 करोड़ जरूरतमंदों को मुफ्त अनाज दे, तो वह एक व्यावहारिक मिश्रित मॉडल होता है।'
        },
        proTip: {
          en: 'Never become a dogmatic prisoner to any single ideology. As Dr. B.R. Ambedkar said: "Educate, Agitate, Organize" based on reason, empathy, and constitutional morality.',
          hi: 'किसी एक विचारधारा के कट्टर बंदी मत बनिए। हमेशा निष्पक्ष विवेक और संविधान के तराजू पर हर नीति को तौलिए।'
        },
        quizQuestion: {
          question: {
            en: 'Historically, where did the terms "Left" and "Right" in politics originate?',
            hi: 'ऐतिहासिक रूप से राजनीति में "वामपंथ" (Left) और "दक्षिणपंथ" (Right) शब्दों की शुरुआत कहाँ से हुई थी?'
          },
          options: {
            en: [
              'The British House of Commons in 1688',
              'The French National Assembly during the 1789 Revolution',
              'The US Constitutional Convention in 1787',
              'The Russian Duma in 1917'
            ],
            hi: [
              '1688 की ब्रिटिश संसद से',
              '1789 की फ्रांसीसी क्रांति के दौरान राष्ट्रीय सभा से',
              '1787 के अमेरिकी संविधान सम्मेलन से',
              '1917 की रूसी क्रांति से'
            ]
          },
          correctIndex: 1,
          explanation: {
            en: 'In the French National Assembly of 1789, supporters of the King sat on the right, and supporters of the revolution sat on the left.',
            hi: '1789 की फ्रांसीसी संसद में राजा के समर्थक दाईं तरफ और क्रांति व बदलाव के समर्थक बाईं तरफ बैठे थे।'
          }
        }
      }
    ]
  }
];
