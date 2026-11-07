import { NewsItem } from '../types';

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'news_parliament_delimitation',
    category: 'parliament',
    type: 'analysis',
    publishedDate: '2026-11-06',
    source: 'Lok Sabha Secretariat & Census Commission',
    sourceUrl: 'https://loksabha.nic.in',
    title: {
      en: 'Delimitation Commission & Future Lok Sabha Seat Reorganization: Neutral Analysis',
      hi: 'परिसीमन आयोग और भविष्य में लोकसभा सीटों का पुनर्गठन: निष्पक्ष विश्लेषण'
    },
    summary: {
      en: 'Understanding the constitutional freeze on parliamentary constituencies until post-2026 census and the debate between population-based representation vs federal fairness.',
      hi: '2026 के बाद होने वाली जनगणना पर आधारित परिसीमन की संवैधानिक स्थिति और जनसंख्या बनाम संघीय संतुलन की निष्पक्ष पड़ताल।'
    },
    detailedBreakdown: {
      en: `Under Article 82, Parliament enacts a Delimitation Act after every census to redraw constituency boundaries. However, the 84th Constitutional Amendment (2001) froze the total number of Lok Sabha seats (543) until the first census taken after the year 2026.

### The Two Viewpoints:
- **Perspective A (Proportional Representation):** Every citizen’s vote should have equal weight. Fast-growing states argue that under-representation hurts democratic equality.
- **Perspective B (Federal Incentive):** Southern states argue they diligently implemented national family planning programs and should not be penalized with reduced parliamentary representation.`,
      hi: `अनुच्छेद 82 के अनुसार प्रत्येक जनगणना के बाद सीटों का परिसीमन होना चाहिए। किंतु 84वें संविधान संशोधन (2001) ने 2026 के बाद होने वाली पहली जनगणना तक सीटों की कुल संख्या (543) को फ्रीज कर दिया था।

### दोनों पक्षों का दृष्टिकोण:
- **पक्ष 1 (समानुपातिक प्रतिनिधित्व):** हर नागरिक के वोट का मूल्य बराबर होना चाहिए। अधिक आबादी वाले राज्यों का तर्क है कि पर्याप्त सीटें न मिलने से लोकतांत्रिक समानता प्रभावित होती है।
- **पक्ष 2 (संघीय न्याय):** दक्षिणी राज्यों का तर्क है कि उन्होंने राष्ट्रीय परिवार नियोजन नीतियों का ईमानदारी से पालन किया, अतः सीटें कम कर उन्हें दंडित नहीं किया जाना चाहिए।`
    },
    verifiedFact: {
      en: 'Article 82 and 84th Amendment explicitly froze the reallocation of parliamentary seats until the first census after 2026.',
      hi: 'अनुच्छेद 82 और 84वें संविधान संशोधन द्वारा लोकसभा सीटों की कुल संख्या को 2026 के बाद की जनगणना तक यथावत रखने का स्पष्ट प्रावधान है।'
    },
    whyItMatters: {
      en: 'Determines the balance of political power between different regions of India for the next 50 years.',
      hi: 'यह तय करेगा कि आने वाले 50 वर्षों में भारतीय संसद में किस राज्य की कितनी विधायी भागीदारी होगी।'
    }
  },
  {
    id: 'news_eci_voter_turnout',
    category: 'elections',
    type: 'fact',
    publishedDate: '2026-11-05',
    source: 'Election Commission of India (ECI Press Note)',
    sourceUrl: 'https://eci.gov.in',
    title: {
      en: 'ECI Enhances Booth-Level Real-Time Voter Turnout Data Protocol',
      hi: 'चुनाव आयोग ने बूथ-वार रियल-टाइम वोटिंग प्रतिशत जारी करने का नया प्रोटोकॉल तय किया'
    },
    summary: {
      en: 'ECI mandates Form 17C copy distribution to all polling agents immediately at the close of poll to ensure absolute mathematical transparency.',
      hi: 'मतदान समाप्त होते ही सभी पोलिंग एजेंटों को फॉर्म 17C की प्रमाणित प्रति तुरंत सौंपने का नियम सख्त किया गया।'
    },
    detailedBreakdown: {
      en: `The Election Commission of India has re-emphasized that Form 17C (Part I) is the foundational statutory record of votes recorded in each EVM.
Under Rule 49S of the Conduct of Elections Rules, 1961, the Presiding Officer must hand over a signed duplicate copy of Form 17C to every political candidate’s booth agent at 6 PM. During counting day, counting agents compare the EVM display count directly with this signed paper receipt.`,
      hi: `चुनाव आयोग ने स्पष्ट किया है कि फॉर्म 17C (भाग I) हर ईवीएम में दर्ज मतों का सबसे विश्वसनीय कानूनी दस्तावेज है।
चुनाव संचालन नियम, 1961 के नियम 49S के तहत पीठासीन अधिकारी शाम को मतदान समाप्त होते ही सभी दलों के पोलिंग एजेंटों को हस्ताक्षरित फॉर्म 17C की कॉपी सौंपते हैं। मतगणना के दिन इसी पर्ची से मशीन के वोटों का मिलान किया जाता है।`
    },
    verifiedFact: {
      en: 'Form 17C is a statutory document given to every candidate agent on voting day, preventing any alteration of vote counts.',
      hi: 'फॉर्म 17C एक वैधानिक दस्तावेज है जो मतदान के दिन ही हर उम्मीदवार के एजेंट को मिलता है, जिससे वोटों में हेरफेर असंभव हो जाता है।'
    },
    whyItMatters: {
      en: 'Protects citizen faith in the integrity of secret ballot counting and institutional transparency.',
      hi: 'यह चुनावी प्रक्रिया और जनमत की निष्पक्षता में जनता का विश्वास सुदृढ़ करता है।'
    }
  },
  {
    id: 'news_welfare_scheme_dbt',
    category: 'schemes',
    type: 'fact',
    publishedDate: '2026-11-04',
    source: 'Ministry of Finance & DBT Mission',
    sourceUrl: 'https://dbtbharat.gov.in',
    title: {
      en: 'Union Finance Ministry Releases Annual Direct Benefit Transfer (DBT) Efficiency Report',
      hi: 'केंद्रीय वित्त मंत्रालय ने जारी की प्रत्यक्ष लाभ अंतरण (DBT) की वार्षिक रिपोर्ट'
    },
    summary: {
      en: 'Over 300+ welfare schemes across 50 ministries now operate on Aadhaar-enabled bank accounts, reducing ghost beneficiaries.',
      hi: '50 मंत्रालयों की 300 से अधिक जनकल्याणकारी योजनाओं का पैसा सीधे नागरिकों के बैंक खातों में पहुंचा, बिचौलियों की भूमिका समाप्त।'
    },
    detailedBreakdown: {
      en: `The DBT Mission report highlights that cumulative savings from eliminating duplicate and fake ration cards, ghost scholarship entries, and bogus pension accounts have crossed ₹2.8 lakh crore since inception.
Key components:
1. Public Financial Management System (PFMS) for automated disbursements.
2. Direct farmer payments under PM-KISAN.
3. Subsidies for cooking gas, maternity assistance, and student stipends.`,
      hi: `डीबीटी मिशन रिपोर्ट के अनुसार जाली राशन कार्डों, फर्जी छात्रवृत्तियों और बिचौलियों को हटाने से सरकारी खजाने के 2.8 लाख करोड़ रुपये से अधिक की बचत हुई है।
मुख्य बिंदु:
1. पीएफएमएस (PFMS) पोर्टल द्वारा पारदर्शी भुगतान।
2. पीएम-किसान योजना के तहत सीधे किसानों के खाते में सम्मान निधि।
3. रसोई गैस सब्सिडी और मातृत्व सहायता का सीधा डिजिटल अंतरण।`
    },
    verifiedFact: {
      en: 'DBT transactions are executed directly from the consolidated fund through RBI-regulated payment gateways into beneficiary Aadhaar-linked accounts.',
      hi: 'डीबीटी का पैसा बिना किसी मध्यस्थ अधिकारी के सीधे आरबीआई द्वारा विनियमित बैंक खातों में जमा होता है।'
    },
    whyItMatters: {
      en: 'Shows how digital governance transforms policy delivery from paper files into tangible citizen bank balances.',
      hi: 'यह दर्शाता है कि डिजिटल तकनीक कैसे सरकारी फाइलों से निकलकर सीधे नागरिक के बैंक खाते तक राहत पहुंचाती है।'
    }
  },
  {
    id: 'news_one_nation_one_election',
    category: 'constitution',
    type: 'opinion',
    publishedDate: '2026-11-03',
    source: 'High-Level Committee on Simultaneous Elections',
    sourceUrl: 'https://onoe.gov.in',
    title: {
      en: 'Simultaneous Elections Debate: Arguments For and Against',
      hi: 'एक राष्ट्र, एक चुनाव: पक्ष और विपक्ष के प्रमुख संवैधानिक तर्क'
    },
    summary: {
      en: 'A non-partisan summary of the proposal to hold Lok Sabha and State Assembly elections together, examining fiscal savings vs federal autonomy.',
      hi: 'लोकसभा और विधानसभा चुनाव एक साथ कराने के प्रस्ताव पर दोनों पक्षों के तर्कों का निष्पक्ष विश्लेषण।'
    },
    detailedBreakdown: {
      en: `The proposal suggests aligning the electoral cycles of the Lok Sabha and all State Legislative Assemblies.

### Arguments in Favor:
1. **Financial Savings:** Hundreds of crores spent repeatedly on deploying security forces, setting up polling stations, and election logistics would be reduced.
2. **Governance Continuity:** The Model Code of Conduct halts developmental decisions for 2-3 months every year across various states.

### Arguments in Opposition:
1. **Federal Autonomy:** State elections revolve around local regional problems; simultaneous polls may allow national issues to overshadow regional grievances.
2. **Mid-term Instability:** If a state government falls within 1 year due to a no-confidence motion, how will the remainder of the term be managed constitutionally?`,
      hi: `लोकसभा और सभी राज्यों की विधानसभाओं के चुनाव एक साथ कराने के प्रस्ताव पर देश भर में बहस जारी है।

### पक्ष में प्रमुख तर्क:
1. **राजकोषीय बचत:** हर कुछ महीनों में सेना की तैनाती, मतदान केंद्रों और चुनावी मशीनरी पर होने वाले भारी खर्च में कमी आएगी।
2. **नीतिगत निरंतरता:** बार-बार आचार संहिता लगने से विकास कार्य और सरकारी निर्णय महीनों तक ठप नहीं होंगे।

### विरोध में प्रमुख तर्क:
1. **संघीय स्वायत्तता:** राज्यों के चुनाव स्थानीय मुद्दों पर होते हैं; राष्ट्रीय चुनावों के साथ होने पर स्थानीय समस्याएं दब सकती हैं।
2. **संवैधानिक जटिलता:** यदि किसी राज्य में 1-2 साल में ही सरकार गिर जाए, तो क्या वहां दोबारा चुनाव होंगे या राष्ट्रपति शासन रहेगा?`
    },
    verifiedFact: {
      en: 'India actually conducted simultaneous general and assembly elections in 1951-52, 1957, 1962, and 1967 before premature dissolutions disrupted the cycle.',
      hi: 'भारत में 1952, 1957, 1962 और 1967 के पहले चार आम चुनावों में लोकसभा और राज्यों के चुनाव एक साथ ही हुए थे।'
    },
    whyItMatters: {
      en: 'Implementing this requires constitutional amendments to Articles 83, 85, 172, 174, and 356, along with state ratifications.',
      hi: 'इसे लागू करने के लिए संविधान के अनुच्छेद 83, 85, 172 और 356 में संशोधन और आधे राज्यों की सहमति की आवश्यकता होगी।'
    }
  }
];
