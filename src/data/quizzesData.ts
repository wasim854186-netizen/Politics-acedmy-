import { QuizTest, QuizQuestion } from '../types';

export const DAILY_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'dq_1',
    category: 'Constitution Basics',
    difficulty: 'easy',
    question: {
      en: 'Who was the Chairman of the Drafting Committee of the Indian Constitution?',
      hi: 'भारतीय संविधान की प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?'
    },
    options: {
      en: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
      hi: ['डॉ. राजेंद्र प्रसाद', 'डॉ. बी.आर. आंबेडकर', 'जवाहरलाल नेहरू', 'सरदार वल्लभभाई पटेल']
    },
    correctIndex: 1,
    explanation: {
      en: 'Dr. B.R. Ambedkar was appointed Chairman of the Drafting Committee on 29 August 1947.',
      hi: 'बाबासाहेब डॉ. बी.आर. आंबेडकर 29 अगस्त 1947 को प्रारूप समिति के अध्यक्ष चुने गए थे।'
    },
    articleReference: 'Constituent Assembly of India Records'
  },
  {
    id: 'dq_2',
    category: 'Elections & Democracy',
    difficulty: 'medium',
    question: {
      en: 'What is the maximum permissible limit of candidates listed on a single Ballot Unit of an EVM before attaching another unit?',
      hi: 'EVM की एक बैलेट यूनिट में अधिकतम कितने उम्मीदवारों के नाम दर्ज किए जा सकते हैं?'
    },
    options: {
      en: ['12 Candidates', '16 Candidates (including NOTA)', '24 Candidates', '32 Candidates'],
      hi: ['12 उम्मीदवार', '16 उम्मीदवार (NOTA सहित)', '24 उम्मीदवार', '32 उम्मीदवार']
    },
    correctIndex: 1,
    explanation: {
      en: 'Each EVM Ballot Unit accommodates up to 16 candidate buttons including NOTA. If there are more candidates, additional Ballot Units are linked in series.',
      hi: 'ईवीएम की एक बैलेट यूनिट में नोटा सहित 16 नाम होते हैं। अधिक प्रत्याशी होने पर दूसरी बैलेट यूनिट जोड़ी जाती है।'
    },
    articleReference: 'ECI Handbook for Returning Officers'
  },
  {
    id: 'dq_3',
    category: 'Parliamentary Procedures',
    difficulty: 'medium',
    question: {
      en: 'What is the minimum number of MPs required to admit a "No-Confidence Motion" in the Lok Sabha?',
      hi: 'लोकसभा में सरकार के खिलाफ "अविश्वास प्रस्ताव" स्वीकार करने के लिए न्यूनतम कितने सांसदों का समर्थन आवश्यक है?'
    },
    options: {
      en: ['25 MPs', '50 MPs', '100 MPs', '10% of total strength'],
      hi: ['25 सांसद', '50 सांसद', '100 सांसद', 'कुल संख्या का 10%']
    },
    correctIndex: 1,
    explanation: {
      en: 'Under Rule 198 of the Rules of Procedure of Lok Sabha, at least 50 members must stand in their seats to support the leave for a No-Confidence Motion.',
      hi: 'लोकसभा प्रक्रिया नियम 198 के तहत कम से कम 50 सांसदों का समर्थन मिलने पर ही अविश्वास प्रस्ताव स्वीकार किया जाता है।'
    },
    articleReference: 'Lok Sabha Rules of Procedure (Rule 198)'
  },
  {
    id: 'dq_4',
    category: 'Fundamental Rights',
    difficulty: 'easy',
    question: {
      en: 'Which Article guarantees the Right to Protection against arrest and detention in certain cases?',
      hi: 'संविधान का कौन सा अनुच्छेद कुछ मामलों में गिरफ्तारी और निरोध से संरक्षण प्रदान करता है?'
    },
    options: {
      en: ['Article 20', 'Article 21', 'Article 22', 'Article 23'],
      hi: ['अनुच्छेद 20', 'अनुच्छेद 21', 'अनुच्छेद 22', 'अनुच्छेद 23']
    },
    correctIndex: 2,
    explanation: {
      en: 'Article 22 mandates that every arrested person must be informed of the grounds of arrest, has the right to consult a legal practitioner, and must be produced before a magistrate within 24 hours.',
      hi: 'अनुच्छेद 22 के अनुसार गिरफ्तार व्यक्ति को 24 घंटे के भीतर निकटतम मजिस्ट्रेट के सामने पेश करना अनिवार्य है।'
    },
    articleReference: 'Article 22 of the Constitution of India'
  },
  {
    id: 'dq_5',
    category: 'Local Governance',
    difficulty: 'medium',
    question: {
      en: 'How many functional items are placed within the purview of Panchayats under the Eleventh Schedule?',
      hi: '11वीं अनुसूची के तहत पंचायतों के अधिकार क्षेत्र में कितने विषय सौंपे गए हैं?'
    },
    options: {
      en: ['18 subjects', '21 subjects', '29 subjects', '33 subjects'],
      hi: ['18 विषय', '21 विषय', '29 विषय', '33 विषय']
    },
    correctIndex: 2,
    explanation: {
      en: 'The 11th Schedule (added by 73rd Amendment) contains 29 functional subjects for Panchayats, while the 12th Schedule has 18 for Municipalities.',
      hi: '11वीं अनुसूची में पंचायतों के लिए 29 विषय और 12वीं अनुसूची में नगर पालिकाओं के लिए 18 विषय निर्धारित हैं।'
    },
    articleReference: 'Eleventh Schedule & Article 243G'
  }
];

export const CATEGORY_TESTS: QuizTest[] = [
  {
    id: 'test_constitution_master',
    title: {
      en: 'Constitution Scholar Championship Test',
      hi: 'भारतीय संविधान विद्वान महापरीक्षा'
    },
    description: {
      en: 'Test your mastery of Articles, Fundamental Rights, Writs, and Constitutional Amendments.',
      hi: 'अनुच्छेदों, मौलिक अधिकारों, रिट और संविधान संशोधनों पर अपनी पकड़ का आकलन करें।'
    },
    category: 'Constitution',
    durationMinutes: 10,
    questions: [
      {
        id: 'cqt_1',
        category: 'Constitution',
        difficulty: 'medium',
        question: {
          en: 'Which Constitutional Amendment is popularly referred to as the "Mini-Constitution"?',
          hi: 'किस संविधान संशोधन को लोकप्रिय रूप से "लघु संविधान" (Mini-Constitution) कहा जाता है?'
        },
        options: {
          en: ['24th Amendment', '42nd Amendment (1976)', '44th Amendment', '73rd Amendment'],
          hi: ['24वां संशोधन', '42वां संशोधन (1976)', '44वां संशोधन', '73वां संशोधन']
        },
        correctIndex: 1,
        explanation: {
          en: 'The 42nd Amendment of 1976 brought sweeping changes to the Preamble, Fundamental Rights, and Parliament powers.',
          hi: '1976 के 42वें संशोधन द्वारा व्यापक परिवर्तन किए गए थे, इसलिए इसे लघु संविधान कहते हैं।'
        },
        articleReference: '42nd Constitutional Amendment Act, 1976'
      },
      {
        id: 'cqt_2',
        category: 'Constitution',
        difficulty: 'hard',
        question: {
          en: 'Which writ is issued by the Supreme Court to prevent an inferior court or tribunal from exceeding its jurisdiction?',
          hi: 'अधीनस्थ न्यायालय को अपने अधिकार क्षेत्र से बाहर जाने से रोकने के लिए कौन सी रिट जारी की जाती है?'
        },
        options: {
          en: ['Habeas Corpus', 'Mandamus', 'Prohibition', 'Quo-Warranto'],
          hi: ['बंदी प्रत्यक्षीकरण', 'परमादेश', 'प्रतिषेध (Prohibition)', 'अधिकार पृच्छा']
        },
        correctIndex: 2,
        explanation: {
          en: 'Writ of Prohibition is issued by a higher court to a lower court to prevent it from usurping jurisdiction not vested in it.',
          hi: 'प्रतिषेध रिट उच्च न्यायालय द्वारा निचली अदालत को अधिकार क्षेत्र का अतिक्रमण करने से रोकने के लिए दी जाती है।'
        },
        articleReference: 'Article 32 & 226'
      },
      {
        id: 'cqt_3',
        category: 'Constitution',
        difficulty: 'medium',
        question: {
          en: 'Right to Privacy was declared a Fundamental Right under which Article of the Constitution?',
          hi: 'निजता के अधिकार को संविधान के किस अनुच्छेद के तहत मौलिक अधिकार घोषित किया गया?'
        },
        options: {
          en: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
          hi: ['अनुच्छेद 14', 'अनुच्छेद 19', 'अनुच्छेद 21', 'अनुच्छेद 25']
        },
        correctIndex: 2,
        explanation: {
          en: 'In Justice K.S. Puttaswamy (2017), a 9-judge bench unanimously held privacy is protected under Article 21.',
          hi: 'के.एस. पुट्टास्वामी फैसले (2017) में 9 जजों की पीठ ने निजता को अनुच्छेद 21 का अभिन्न अंग माना।'
        },
        articleReference: 'Article 21 (Puttaswamy Judgment)'
      }
    ]
  },
  {
    id: 'test_election_machinery',
    title: {
      en: 'Indian Electoral System & Campaign Master Test',
      hi: 'भारतीय चुनाव प्रणाली एवं अभियान दक्षता परीक्षा'
    },
    description: {
      en: 'Evaluate your understanding of election laws, Model Code of Conduct, and booth level mechanics.',
      hi: 'चुनाव नियमों, आचार संहिता और मतदान बूथ प्रबंधन पर अपनी समझ परखें।'
    },
    category: 'Elections',
    durationMinutes: 8,
    questions: [
      {
        id: 'eqt_1',
        category: 'Elections',
        difficulty: 'easy',
        question: {
          en: 'How many hours prior to the close of polling does the public election campaign silence period begin?',
          hi: 'मतदान समाप्त होने से कितने घंटे पहले सार्वजनिक चुनाव प्रचार पर पाबंदी (Silence Period) लग जाती है?'
        },
        options: {
          en: ['24 Hours', '36 Hours', '48 Hours', '72 Hours'],
          hi: ['24 घंटे', '36 घंटे', '48 घंटे', '72 घंटे']
        },
        correctIndex: 2,
        explanation: {
          en: 'Section 126 of the Representation of the People Act, 1951 mandates silence period of 48 hours before close of poll.',
          hi: 'जनप्रतिनिधित्व अधिनियम 1951 की धारा 126 के तहत मतदान समाप्त होने से 48 घंटे पहले प्रचार बंद हो जाता है।'
        },
        articleReference: 'Section 126, RP Act 1951'
      },
      {
        id: 'eqt_2',
        category: 'Elections',
        difficulty: 'medium',
        question: {
          en: 'What is the required minimum deposit forfeiture threshold for a candidate in an election in India?',
          hi: 'भारत में चुनाव लड़ने वाले प्रत्याशी की जमानत राशि कब जब्त मानी जाती है?'
        },
        options: {
          en: ['Fails to secure 1/10th of valid votes', 'Fails to secure 1/6th of valid votes', 'Fails to secure 1/4th of valid votes', 'Fails to secure 1000 votes'],
          hi: ['वैध मतों का 1/10 भाग न मिलने पर', 'वैध मतों का 1/6 भाग (16.6%) न मिलने पर', 'वैध मतों का 1/4 भाग न मिलने पर', '1000 से कम वोट मिलने पर']
        },
        correctIndex: 1,
        explanation: {
          en: 'A candidate forfeits their security deposit if they fail to secure more than one-sixth (16.66%) of the total valid votes polled in the constituency.',
          hi: 'यदि किसी प्रत्याशी को कुल वैध मतों का 1/6 भाग से अधिक वोट नहीं मिलता, तो उसकी जमानत राशि जब्त हो जाती है।'
        },
        articleReference: 'Section 158, RP Act 1951'
      }
    ]
  }
];
