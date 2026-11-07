import { ConstitutionArticle } from '../types';

export const PREAMBLE_DATA = {
  title: {
    en: 'The Preamble to the Constitution of India',
    hi: 'भारतीय संविधान की उद्देशिका (प्रस्तावना)'
  },
  text: {
    en: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:
JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;
IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`,
    hi: `हम, भारत के लोग, भारत को एक सम्पूर्ण प्रभुत्व-सम्पन्न, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक गणराज्य बनाने के लिए, तथा उसके समस्त नागरिकों को:
सामाजिक, आर्थिक और राजनीतिक न्याय;
विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता;
प्रतिष्ठा और अवसर की समता
प्राप्त कराने के लिए,
तथा उन सब में
व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता सुनिश्चित करने वाली बंधुता बढ़ाने के लिए
दृढ़संकल्प होकर अपनी इस संविधान सभा में आज तारीख 26 नवम्बर, 1949 ईस्वी को एतद्द्वारा इस संविधान को अंगीकृत, अधिनियमित और आत्मार्पित करते हैं।`
  },
  keyKeywords: [
    {
      term: { en: 'Sovereign (संप्रभु)', hi: 'संप्रभु' },
      explanation: {
        en: 'India has independent authority, not subject to the control of any external power or nation.',
        hi: 'भारत आंतरिक और बाह्य मामलों में पूरी तरह स्वतंत्र है, किसी विदेशी शक्ति का नियंत्रण नहीं है।'
      }
    },
    {
      term: { en: 'Socialist (समाजवादी)', hi: 'समाजवादी' },
      explanation: {
        en: 'Democratic socialism aiming to end poverty, ignorance, and inequality of opportunity through public welfare.',
        hi: 'लोकतांत्रिक समाजवाद, जिसका उद्देश्य गरीबी, असमानता और अभाव को दूर कर जनकल्याण करना है।'
      }
    },
    {
      term: { en: 'Secular (पंथनिरपेक्ष)', hi: 'पंथनिरपेक्ष' },
      explanation: {
        en: 'The State has no official religion; all religions enjoy equal status, respect, and protection.',
        hi: 'राज्य का अपना कोई धर्म नहीं है; सभी धर्मों को समान आदर और संरक्षण प्राप्त है।'
      }
    },
    {
      term: { en: 'Democratic (लोकतंत्रात्मक)', hi: 'लोकतंत्रात्मक' },
      explanation: {
        en: 'Government derives its authority from the will of the people expressed in periodic free elections.',
        hi: 'सरकार की वैधता जनता की सहमति और नियमित निष्पक्ष चुनावों पर आधारित है।'
      }
    },
    {
      term: { en: 'Republic (गणराज्य)', hi: 'गणराज्य' },
      explanation: {
        en: 'The head of the state (President) is elected by the people, not a hereditary monarch.',
        hi: 'राष्ट्र का प्रमुख (राष्ट्रपति) जनता द्वारा चुना जाता है, कोई वंशानुगत राजा नहीं होता।'
      }
    }
  ]
};

export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    article: 'Article 14',
    part: 'Part III - Fundamental Rights',
    title: {
      en: 'Equality Before Law & Equal Protection of the Laws',
      hi: 'विधि के समक्ष समता एवं विधियों का समान संरक्षण'
    },
    summary: {
      en: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
      hi: 'राज्य भारत के राज्यक्षेत्र में किसी व्यक्ति को कानून के समक्ष समानता या कानूनों के समान संरक्षण से वंचित नहीं करेगा।'
    },
    fullTextExcerpt: {
      en: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
      hi: 'राज्य, भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।'
    },
    simplifiedExplanation: {
      en: 'No citizen or foreigner is above the law. Whether a Prime Minister or an ordinary worker, both are judged by the same legal standards. Equal protection also allows positive affirmative action (like reservations for disadvantaged classes) to create real equality.',
      hi: 'देश में कोई भी व्यक्ति कानून से ऊपर नहीं है—चाहे वह कोई उच्च पदस्थ नेता हो या साधारण नागरिक। साथ ही, समाज के वंचित वर्गों को आगे लाने के लिए विशेष योजनाएं और आरक्षण भी इसी समानता के उद्देश्य को पूरा करने के लिए वैध हैं।'
    },
    landmarkCase: {
      en: 'E.P. Royappa v. State of Tamil Nadu (1974) - Established that equality is antithetical to arbitrariness.',
      hi: 'ई.पी. रोयप्पा मामला (1974) - सुप्रीम कोर्ट ने तय किया कि समानता और मनमानापन एक-दूसरे के विरोधी हैं।'
    },
    tags: ['Equality', 'Rule of Law', 'Fundamental Rights']
  },
  {
    article: 'Article 19',
    part: 'Part III - Fundamental Rights',
    title: {
      en: 'Protection of Six Freedoms of Citizens',
      hi: 'नागरिकों की 6 बुनियादी स्वतंत्रताओं का संरक्षण'
    },
    summary: {
      en: 'Guarantees freedom of speech, peaceful assembly, forming associations, free movement, residence, and trade.',
      hi: 'भाषण व अभिव्यक्ति, शांतिपूर्ण सभा, संगठन बनाने, भारत में कहीं भी घूमने, बसने और आजीविका की स्वतंत्रता।'
    },
    fullTextExcerpt: {
      en: 'All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions; to move freely throughout India; to reside and settle in any part of India; and to practice any profession, trade or business.',
      hi: 'सभी नागरिकों को वाक्-स्वतंत्रता और अभिव्यक्ति-स्वतंत्रता, शांतिपूर्ण और निरायुध सम्मेलन, संगम या संघ बनाने, भारत के राज्यक्षेत्र में सर्वत्र अबाध संचरण, किसी भाग में निवास करने और कोई वृत्ति, उपजीविका, व्यापार या कारबार करने का अधिकार होगा।'
    },
    simplifiedExplanation: {
      en: 'Gives citizens the right to express their views, write in newspapers, run blogs, protest peacefully, join trade unions, and work anywhere in India. These freedoms have reasonable restrictions under Article 19(2) (e.g. sovereignty of India, public order, decency).',
      hi: 'हर नागरिक को अपने विचार व्यक्त करने, शांतिपूर्ण विरोध प्रदर्शन करने, संगठन बनाने और देश में कहीं भी व्यापार व नौकरी करने का अधिकार है। ये अधिकार असीमित नहीं हैं; देश की संप्रभुता और लोक व्यवस्था के हित में उचित प्रतिबंध लगाए जा सकते हैं।'
    },
    landmarkCase: {
      en: 'Shreya Singhal v. Union of India (2015) - Struck down Section 66A of IT Act protecting online speech.',
      hi: 'श्रेया सिंघल मामला (2015) - सोशल मीडिया पर पोस्ट करने की आजादी की रक्षा करते हुए आईटी एक्ट की धारा 66A को रद्द किया गया।'
    },
    tags: ['Free Speech', 'Assembly', 'Protest Rights']
  },
  {
    article: 'Article 21',
    part: 'Part III - Fundamental Rights',
    title: {
      en: 'Protection of Life and Personal Liberty',
      hi: 'प्राण और दैहिक स्वतंत्रता का संरक्षण'
    },
    summary: {
      en: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
      hi: 'किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा, अन्यथा नहीं।'
    },
    fullTextExcerpt: {
      en: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
      hi: 'किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अनुसार ही वंचित किया जाएगा।'
    },
    simplifiedExplanation: {
      en: 'The most expansive article in the Constitution. The Supreme Court has interpreted "Life" not as mere animal existence, but living with human dignity. It encompasses Right to Clean Environment, Right to Privacy, Right to Speedy Trial, Right to Livelihood, and Right to Medical Care.',
      hi: 'यह संविधान का सबसे व्यापक और जादुई अनुच्छेद है। सुप्रीम कोर्ट के अनुसार "जीवन" का मतलब केवल सांस लेना नहीं, बल्कि मानवीय गरिमा के साथ जीना है। इसमें स्वच्छ पर्यावरण, निजता (Privacy), त्वरित न्याय, आजीविका और चिकित्सा सहायता का अधिकार शामिल है।'
    },
    landmarkCase: {
      en: 'Maneka Gandhi v. Union of India (1978) & K.S. Puttaswamy (2017 - Right to Privacy).',
      hi: 'मेनका गांधी मामला (1978) एवं जस्टिस पुट्टास्वामी मामला (2017 - निजता का अधिकार)।'
    },
    tags: ['Life', 'Liberty', 'Privacy', 'Human Dignity']
  },
  {
    article: 'Article 21A',
    part: 'Part III - Fundamental Rights',
    title: {
      en: 'Right to Free and Compulsory Education',
      hi: 'शिक्षा का मौलिक अधिकार (मुफ्त और अनिवार्य शिक्षा)'
    },
    summary: {
      en: 'The State shall provide free and compulsory education to all children aged 6 to 14 years.',
      hi: 'राज्य 6 से 14 वर्ष की आयु वाले सभी बच्चों के लिए नि:शुल्क और अनिवार्य शिक्षा का प्रबंध करेगा।'
    },
    fullTextExcerpt: {
      en: 'The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.',
      hi: 'राज्य छह से चौदह वर्ष तक की आयु वाले सभी बालकों के लिए विधि द्वारा नि:शुल्क और अनिवार्य शिक्षा उपलब्ध कराएगा।'
    },
    simplifiedExplanation: {
      en: 'Inserted by the 86th Constitutional Amendment in 2002. Enforced through the RTE Act, 2009. Guarantees that every child in India has the legal right to elementary schooling in neighborhood schools without financial barriers.',
      hi: '2002 में 86वें संविधान संशोधन द्वारा जोड़ा गया। यह गारंटी देता है कि भारत के हर 6 से 14 वर्ष के बच्चे को प्राथमिक शिक्षा पाना उसका मौलिक अधिकार है, जिसके लिए कोई भी स्कूल उससे फीस नहीं मांग सकता।'
    },
    landmarkCase: {
      en: 'Society for Unaided Private Schools v. Union of India (2012) - Upheld 25% quota for disadvantaged children in private schools.',
      hi: 'सोसायटी फॉर अनएडेड प्राइवेट स्कूल्स मामला (2012) - निजी स्कूलों में 25% सीटें वंचित बच्चों के लिए आरक्षित रखने को वैध ठहराया।'
    },
    tags: ['Education', 'Children', 'RTE']
  },
  {
    article: 'Article 32',
    part: 'Part III - Fundamental Rights',
    title: {
      en: 'Remedies for Enforcement of Fundamental Rights',
      hi: 'संवैधानिक उपचारों का अधिकार (रिट अधिकारिता)'
    },
    summary: {
      en: 'Empowers citizens to move the Supreme Court directly by appropriate proceedings for enforcement of Part III rights.',
      hi: 'मौलिक अधिकारों के हनन पर नागरिकों को सीधे सुप्रीम कोर्ट में रिट याचिका दायर करने की शक्ति देता है।'
    },
    fullTextExcerpt: {
      en: 'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. The Supreme Court shall have power to issue directions or orders or writs...',
      hi: 'इस भाग द्वारा प्रदत्त अधिकारों को प्रवर्तित कराने के लिए समुचित कार्यवाहियों द्वारा उच्चतम न्यायालय में समावेदन करने का अधिकार प्रत्याभूत किया जाता है।'
    },
    simplifiedExplanation: {
      en: 'Without a remedy, rights are mere words on paper. Article 32 gives the Supreme Court power to issue five powerful Constitutional Writs: Habeas Corpus (release illegal detainee), Mandamus (order public official to perform duty), Prohibition (halt lower court exceeding power), Quo-Warranto (question illegal public office occupation), and Certiorari (quash unlawful lower court order).',
      hi: 'यदि अधिकारों को लागू करवाने का उपाय न हो तो वे केवल कागज का टुकड़ा रह जाते हैं। अनुच्छेद 32 सुप्रीम कोर्ट को 5 शक्तिशाली रिट जारी करने का अधिकार देता है: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, अधिकार पृच्छा, और उत्प्रेषण।'
    },
    landmarkCase: {
      en: 'Romesh Thappar v. State of Madras (1950) - Supreme Court confirmed it is the protector and guarantor of fundamental rights.',
      hi: 'रमेश थापर मामला (1950) - सुप्रीम कोर्ट ने स्वयं को नागरिकों के मूल अधिकारों का सजग प्रहरी घोषित किया।'
    },
    tags: ['Writs', 'Supreme Court', 'Constitutional Remedy']
  },
  {
    article: 'Article 324',
    part: 'Part XV - Elections',
    title: {
      en: 'Superintendence, Direction and Control of Elections',
      hi: 'चुनावों का अधीक्षण, निर्देशन और नियंत्रण (चुनाव आयोग)'
    },
    summary: {
      en: 'Vests the conduct of all elections to Parliament and state legislatures in an independent Election Commission.',
      hi: 'संसद, राज्य विधानसभाओं, राष्ट्रपति और उपराष्ट्रपति के चुनावों के संचालन का अधिकार एक स्वतंत्र चुनाव आयोग को देता है।'
    },
    fullTextExcerpt: {
      en: 'The superintendence, direction and control of the preparation of the electoral rolls for, and the conduct of, all elections to Parliament and to the Legislature of every State... shall be vested in a Commission...',
      hi: 'संसद और प्रत्येक राज्य के विधान-मंडल के लिए कराए जाने वाले सभी निर्वाचनों के लिए निर्वाचक-नामावली तैयार कराने और उन सभी निर्वाचनों के संचालन का अधीक्षण, निर्देशन और नियंत्रण... एक आयोग में निहित होगा...'
    },
    simplifiedExplanation: {
      en: 'Guarantees the autonomous status of the Election Commission of India. Commissioners have constitutional security of tenure (can only be removed like a Supreme Court judge) so they can conduct free, fearless elections without pressure from the ruling party.',
      hi: 'यह भारत निर्वाचन आयोग को स्वतंत्र दर्जा देता है। मुख्य चुनाव आयुक्त को केवल महाभियोग जैसी कठिन प्रक्रिया से ही हटाया जा सकता है, ताकि वे बिना किसी सत्ताधारी दल के दबाव के निष्पक्ष चुनाव करा सकें।'
    },
    landmarkCase: {
      en: 'Mohinder Singh Gill v. Chief Election Commissioner (1978) - Confirmed plenary inherent powers of ECI to ensure fair polls.',
      hi: 'मोहिंदर सिंह गिल मामला (1978) - निष्पक्ष चुनाव के लिए चुनाव आयोग की व्यापक अंतर्निहित शक्तियों पर मुहर।'
    },
    tags: ['Elections', 'ECI', 'Democracy']
  },
  {
    article: 'Article 356',
    part: 'Part XVIII - Emergency Provisions',
    title: {
      en: 'Provisions in Case of Failure of Constitutional Machinery in States (President’s Rule)',
      hi: 'राज्यों में संवैधानिक तंत्र विफल होने पर राष्ट्रपति शासन'
    },
    summary: {
      en: 'Allows the President to assume executive functions of a state if governance cannot be carried on in accordance with the Constitution.',
      hi: 'यदि किसी राज्य में सरकार संविधान के अनुसार चलने में असमर्थ हो, तो केंद्र सरकार राष्ट्रपति शासन लगा सकती है।'
    },
    fullTextExcerpt: {
      en: 'If the President, on receipt of a report from the Governor of a State or otherwise, is satisfied that a situation has arisen in which the government of the State cannot be carried on in accordance with the provisions of this Constitution, the President may by Proclamation...',
      hi: 'यदि राष्ट्रपति का, किसी राज्य के राज्यपाल से प्रतिवेदन मिलने पर या अन्यथा, यह समाधान हो जाता है कि ऐसी स्थिति उत्पन्न हो गई है जिसमें उस राज्य का शासन इस संविधान के उपबंधों के अनुसार नहीं चलाया जा सकता, तो राष्ट्रपति उद्घोषणा द्वारा...'
    },
    simplifiedExplanation: {
      en: 'Historically misused by central governments to dismiss opposition state governments. The historic S.R. Bommai judgment (1994) restricted its misuse by making Presidential proclamation subject to judicial review and requiring a mandatory floor test.',
      hi: 'अतीत में केंद्र सरकारें इस अनुच्छेद का दुरुपयोग विरोधी दलों की राज्य सरकारें गिराने के लिए करती थीं। 1994 के ऐतिहासिक एस.आर. बोम्मई फैसले ने यह तय किया कि राष्ट्रपति शासन की न्यायिक समीक्षा होगी और विधानसभा में फ्लोर टेस्ट के बिना सरकार नहीं गिराई जा सकती।'
    },
    landmarkCase: {
      en: 'S.R. Bommai v. Union of India (1994) - Ended arbitrary dismissal of elected state governments.',
      hi: 'एस.आर. बोम्मई मामला (1994) - चुनी हुई राज्य सरकारों को मनमाने ढंग से बर्खास्त करने पर पूर्ण अंकुश।'
    },
    tags: ['Federalism', 'Presidents Rule', 'State Rights']
  },
  {
    article: 'Article 368',
    part: 'Part XX - Amendment of the Constitution',
    title: {
      en: 'Power of Parliament to Amend the Constitution and Procedure',
      hi: 'संविधान में संशोधन करने की संसद की शक्ति और प्रक्रिया'
    },
    summary: {
      en: 'Prescribes the mechanism for amending constitutional provisions by special majority and state ratifications.',
      hi: 'विशेष बहुमत और राज्यों के अनुसमर्थन द्वारा संविधान में संशोधन करने की प्रक्रिया तय करता है।'
    },
    fullTextExcerpt: {
      en: 'Notwithstanding anything in this Constitution, Parliament may in exercise of its constituent power amend by way of addition, variation or repeal any provision of this Constitution in accordance with the procedure laid down in this article...',
      hi: 'इस संविधान में किसी बात के होते हुए भी, संसद अपनी संविधायी शक्ति का प्रयोग करते हुए इस अनुच्छेद में अधिकथित प्रक्रिया के अनुसार इस संविधान के किसी उपबंध का परिवर्धन, परिवर्तन या निरसन के रूप में संशोधन कर सकेगी...'
    },
    simplifiedExplanation: {
      en: 'Constitutions must evolve with time. Article 368 allows amendments via Special Majority (2/3 members present and voting + majority of total membership in each House). For federal provisions (like GST or election of President), at least half of the state assemblies must also ratify it.',
      hi: 'समय के साथ संविधान को प्रासंगिक बनाए रखने के लिए संशोधन की शक्ति जरूरी है। इसके लिए दोनों सदनों में विशेष बहुमत (उपस्थित और मतदान करने वालों का 2/3 और कुल सदस्यों का बहुमत) चाहिए होता है। संघीय मामलों में आधे राज्यों की विधानसभाओं की मंजूरी भी जरूरी होती है।'
    },
    landmarkCase: {
      en: 'Kesavananda Bharati (1973) - Parliament’s power under Article 368 is wide, but cannot alter the "Basic Structure".',
      hi: 'केशवानंद भारती (1973) - अनुच्छेद 368 के तहत संसद संविधान बदल सकती है, लेकिन उसकी "मूल संरचना" को नहीं छू सकती।'
    },
    tags: ['Amendments', 'Parliament', 'Basic Structure']
  }
];

export const IMPORTANT_AMENDMENTS = [
  {
    number: '42nd Amendment (1976)',
    knownAs: 'The Mini-Constitution',
    title: {
      en: 'Addition of Secular, Socialist & Fundamental Duties',
      hi: 'पंथनिरपेक्ष, समाजवादी शब्द और मौलिक कर्तव्यों का समावेश'
    },
    description: {
      en: 'Added the words "Socialist", "Secular", and "Integrity" to the Preamble. Inserted Part IVA (Fundamental Duties Article 51A).',
      hi: 'प्रस्तावना में "समाजवादी", "पंथनिरपेक्ष" और "अखंडता" शब्द जोड़े गए। भाग 4-क (मौलिक कर्तव्य - अनुच्छेद 51-क) को संविधान में जोड़ा गया।'
    }
  },
  {
    number: '44th Amendment (1978)',
    knownAs: 'Restoration of Civil Liberties',
    title: {
      en: 'Safeguards Against Internal Emergency',
      hi: 'आपातकाल के दुरुपयोग पर संवैधानिक अंकुश'
    },
    description: {
      en: 'Replaced "internal disturbance" with "armed rebellion" for invoking Emergency. Removed Right to Property from Fundamental Rights (made a legal right under Art 300A).',
      hi: 'आपातकाल लगाने के लिए "आंतरिक अशांति" के स्थान पर "सशस्त्र विद्रोह" शब्द जोड़ा। संपत्ति के अधिकार को मौलिक अधिकारों से हटाकर कानूनी अधिकार (अनुच्छेद 300-क) बनाया।'
    }
  },
  {
    number: '73rd & 74th Amendments (1992)',
    knownAs: 'Decentralization of Power',
    title: {
      en: 'Constitutional Status to Panchayats & Municipalities',
      hi: 'पंचायती राज और नगर पालिकाओं को संवैधानिक दर्जा'
    },
    description: {
      en: 'Created a 3-tier local self-governance model with mandatory elections every 5 years and reservation for women (Part IX & IX-A).',
      hi: 'गाँवों में पंचायतों और शहरों में नगर पालिकाओं के लिए हर 5 साल में नियमित चुनाव और महिलाओं के लिए न्यूनतम 33% आरक्षण अनिवार्य किया।'
    }
  },
  {
    number: '86th Amendment (2002)',
    knownAs: 'Universal Primary Education',
    title: {
      en: 'Right to Education made a Fundamental Right',
      hi: 'शिक्षा को मौलिक अधिकार का दर्जा'
    },
    description: {
      en: 'Inserted Article 21A guaranteeing free and compulsory education for all children aged 6 to 14 years.',
      hi: 'अनुच्छेद 21-क जोड़कर 6 से 14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य स्कूली शिक्षा को मौलिक अधिकार बनाया।'
    }
  },
  {
    number: '101st Amendment (2016)',
    knownAs: 'Goods and Services Tax (GST)',
    title: {
      en: 'One Nation One Tax - Fiscal Federalism Reform',
      hi: 'वस्तु एवं सेवा कर (जीएसटी) - अप्रत्यक्ष कर सुधार'
    },
    description: {
      en: 'Created the constitutional GST Council (Article 279A) where Centre and States jointly decide indirect tax rates.',
      hi: 'अनुच्छेद 279-क के तहत जीएसटी परिषद का गठन किया, जिसमें केंद्र और राज्य मिलकर अप्रत्यक्ष करों की दरें तय करते हैं।'
    }
  },
  {
    number: '106th Amendment (2023)',
    knownAs: 'Nari Shakti Vandan Adhiniyam',
    title: {
      en: '33% Women Reservation in Lok Sabha & State Assemblies',
      hi: 'लोकसभा और विधानसभाओं में महिलाओं के लिए 33% आरक्षण'
    },
    description: {
      en: 'Provides one-third reservation for women in the House of the People and State Legislative Assemblies for 15 years.',
      hi: 'लोकसभा और राज्य विधानसभाओं में महिलाओं के लिए एक-तिहाई (33%) सीटें आरक्षित करने का ऐतिहासिक प्रावधान किया।'
    }
  }
];
