/**
 * Festival Core Engine - Shared dynamic dates, countdown, viral share parameters, upcoming festival schedule, responsive side panels, floating background particles, and festival info
 */

const FESTIVAL_CONFIG = {
  rakhi: {
    key: 'rakhi',
    name: 'रक्षाबंधन',
    englishName: 'Raksha Bandhan',
    emoji: '🌸',
    bgParticles: ['🌸', '🎀', '✨', '💐', '💖', '🌼'],
    dates: {
      2025: [7, 9],    // Aug 9, 2025
      2026: [7, 28],   // Aug 28, 2026
      2027: [7, 17],   // Aug 17, 2027
      2028: [7, 5],    // Aug 5, 2028
      2029: [7, 24],   // Aug 24, 2029
      2030: [7, 13],   // Aug 13, 2030
      2031: [7, 3],    // Aug 3, 2031
      2032: [7, 21],   // Aug 21, 2032
      2033: [7, 10],   // Aug 10, 2033
      2034: [7, 29],   // Aug 29, 2034
      2035: [7, 18]    // Aug 18, 2035
    },
    defaultImage: 'rakhi1.jpg',
    images: ['rakhi1.jpg', 'rakhi2.jpg', 'rakhi3.jpg', 'rakhi4.jpg', 'rakhi5.jpg'],
    significance: 'रक्षाबंधन का त्योहार भाई-बहन के अटूट प्रेम, स्नेह और सुरक्षा के पवित्र संकल्प का प्रतीक है। इस दिन बहनें अपने भाइयों की कलाई पर रेशमी धागा (राखी) बांधकर उनकी दीर्घायु और सुख-समृद्धि की कामना करती हैं।',
    highlights: ['सदा प्रेम और सुरक्षा का वादा 🤝', 'मिठाइयों और उपहारों का त्योहार 🎁', 'भाई-बहन के पवित्र रिश्ते का उत्सव 💖'],
    wishes: (name) => [
      `🌸 रक्षाबंधन की हार्दिक शुभकामनाएं! यह त्योहार आपके जीवन में ढेरों खुशियाँ और सफलता लाए,\n\nआपका/आपकी ${name}\n\nशुभकामनाएं भेजने के लिए खोलें: `,
      `🌸 प्यारी बहना / प्यारे भैया, रक्षाबंधन की शुभकामनाएं! भगवान आपके हर सपने को पूरा करे,\n\nआपका/आपकी ${name}\n\nशुभकामनाएं भेजने के लिए खोलें: `,
      `🎀 राखी के इस पावन अवसर पर आपके लिए ढेरों दुआएँ और स्नेह,\n\nआपका/आपकी ${name}\n\nशुभकामनाएं भेजने के लिए खोलें: `
    ]
  },
  independence: {
    key: 'independence',
    name: 'स्वतंत्रता दिवस',
    englishName: 'Independence Day',
    emoji: '🇮🇳',
    bgParticles: ['🇮🇳', '⭐', '✨', '🕊️', '🧡', '💚'],
    fixed: [7, 15], // Aug 15
    defaultImage: '15_Aug/independence1.jpg',
    images: ['15_Aug/independence1.jpg', '15_Aug/independence2.jpg', '15_Aug/independence3.jpg', '15_Aug/independence4.jpg', '15_Aug/independence5.jpg'],
    significance: '15 अगस्त भारत की स्वतंत्रता का ऐतिहासिक दिन है। यह दिन हमारे देश के वीर स्वतंत्रता सेनानियों के त्याग, बलिदान और अदम्य साहस को नमन करने तथा राष्ट्रीय एकता का संकल्प लेने का पावन अवसर है।',
    highlights: ['आन-बान-शान से फहराता तिरंगा 🇮🇳', 'वीर शहीदों के बलिदान को सलाम 🙏', 'एकता और अखंडता का महाउत्सव 🤝'],
    wishes: (name) => [
      `🇮🇳 स्वतंत्रता दिवस की हार्दिक शुभकामनाएं! \nहमारे वीर शहीदों को नमन, तिरंगे को सलाम।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🇮🇳 गर्व से कहो हम भारतीय हैं! \nस्वतंत्रता दिवस की ढेरों शुभकामनाएं।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  sankranti: {
    key: 'sankranti',
    name: 'मकर संक्रांति',
    englishName: 'Makar Sankranti',
    emoji: '🪁',
    bgParticles: ['🪁', '☀️', '✨', '🍬', '🌾', '🟡'],
    fixed: [0, 14], // Jan 14
    defaultImage: 'sankranti1.jpg',
    images: ['sankranti1.jpg'],
    significance: 'मकर संक्रांति सूर्य देव के उत्तरायण होने का पावन पर्व है। यह त्योहार फसलों की कटाई, पतंगबाजी और तिल-गुड़ की मिठास के साथ पूरे भारत में बड़े ही उत्साह से मनाया जाता है।',
    highlights: ['आसमान में रंग-बिरंगी पतंगबाजी 🪁', 'तिल-गुड़ की मिठास और भाईचारा 🍬', 'सूर्य देव का उत्तरायण आगमन ☀️'],
    wishes: (name) => [
      `🪁 मकर संक्रांति की हार्दिक शुभकामनाएं! पतंग की तरह आपकी सफलता भी ऊंचाइयों को छुए।\n\n- ${name} ☀️\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🍬 मीठे तिल-गुड़ की तरह आपके जीवन में हमेशा मिठास बनी रहे। हैप्पी संक्रांति!\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  shivratri: {
    key: 'shivratri',
    name: 'महाशिवरात्रि',
    englishName: 'Maha Shivratri',
    emoji: '🔱',
    bgParticles: ['🔱', '🌙', '✨', '🔔', '🌿', '💙'],
    dates: {
      2025: [1, 26],   // Feb 26
      2026: [1, 15],   // Feb 15
      2027: [2, 6],    // Mar 6
      2028: [1, 23],   // Feb 23
      2029: [2, 13],   // Mar 13
      2030: [2, 3],    // Mar 3
      2031: [1, 21],   // Feb 21
      2032: [2, 9],    // Mar 9
      2033: [1, 27],   // Feb 27
      2034: [1, 17],   // Feb 17
      2035: [2, 8]     // Mar 8
    },
    defaultImage: 'shivratri1.jpg',
    images: ['shivratri1.jpg'],
    significance: 'महाशिवरात्रि देवाधिदेव महादेव शिव शंभू और माता पार्वती के दिव्य मिलन का महापर्व है। इस दिन जलाभिषेक और ॐ नमः शिवाय का जाप करने से मनोकामनाएं पूर्ण होती हैं।',
    highlights: ['हर-हर महादेव का जयघोष 🔱', 'शिवलिंग का पवित्र जलाभिषेक 🌿', 'भक्ति, ध्यान और आध्यात्मिक शांति 💙'],
    wishes: (name) => [
      `🔱 महाशिवरात्रि की हार्दिक शुभकामनाएं! भगवान भोलेनाथ आपकी हर मनोकामना पूरी करें। हर हर महादेव!\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🌿 ॐ नमः शिवाय! शिव शंभू का आशीर्वाद आप पर हमेशा बना रहे। शुभ महाशिवरात्रि!\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  holi: {
    key: 'holi',
    name: 'होली',
    englishName: 'Holi',
    emoji: '🎨',
    bgParticles: ['🎨', '🌈', '✨', '🔴', '🟡', '🔵', '🟢'],
    dates: {
      2025: [2, 14],   // Mar 14
      2026: [2, 3],    // Mar 3
      2027: [2, 22],   // Mar 22
      2028: [2, 11],   // Mar 11
      2029: [1, 28],   // Feb 28
      2030: [2, 19],   // Mar 19
      2031: [2, 9],    // Mar 9
      2032: [2, 27],   // Mar 27
      2033: [2, 15],   // Mar 15
      2034: [2, 5],    // Mar 5
      2035: [2, 24]    // Mar 24
    },
    defaultImage: 'holi1.jpg',
    images: ['holi1.jpg', 'holi2.jpg'],
    significance: 'होली रंगों, आपसी भाईचारे और उल्लास का त्योहार है। यह पर्व बुराई पर अच्छाई की जीत और वसंत ऋतु के रंगीन आगमन का उत्सव मनाता है।',
    highlights: ['गुलाल और रंगों की बौछार 🎨', 'आपसी भाईचारा और मिठास 🍬', 'बुराई पर सच्चाई की विजय 🌈'],
    wishes: (name) => [
      `🎨 रंग, उमंग और खुशियों के इस पावन पर्व की हार्दिक शुभकामनाएं! हैप्पी होली!\n\n- ${name} 🌈\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🌈 रंगों का यह त्योहार आपके जीवन में नई खुशियां और उमंग लेकर आए। होली मुबारक!\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  eid: {
    key: 'eid',
    name: 'ईद-उल-फ़ित्र',
    englishName: 'Eid',
    emoji: '🌙',
    bgParticles: ['🌙', '⭐', '✨', '🤲', '🕌', '💚'],
    dates: {
      2025: [2, 31],   // Mar 31
      2026: [2, 20],   // Mar 20
      2027: [2, 10],   // Mar 10
      2028: [1, 27],   // Feb 27
      2029: [1, 15],   // Feb 15
      2030: [1, 5],    // Feb 5
      2031: [0, 25],   // Jan 25
      2032: [0, 14],   // Jan 14
      2033: [0, 2],    // Jan 2
      2034: [11, 22],  // Dec 22
      2035: [11, 12]   // Dec 12
    },
    defaultImage: 'eid1.jpg',
    images: ['eid1.jpg'],
    significance: 'ईद-उल-फ़ित्र मोहब्बत, भाईचारे, दुआओं और सब्र की मिठास का पावन त्योहार है। रमजान के मुकद्दस महीने के बाद ईद की खुशियां हर दिल को आपस में जोड़ती हैं।',
    highlights: ['इबादत, दुआएं और खुशियां 🤲', 'ईदी और मीठी सेवइयों की मिठास 🌙', 'आपसी प्यार और अद्वैत भाईचारा ✨'],
    wishes: (name) => [
      `🌙 ईद मुबारक! अल्लाह आपकी हर दुआ कुबूल फरमाए और जिंदगी में खुशियां भर दे।\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`,
      `✨ आपको और आपके अहल-ए-खाना को ईद की दिली मुबारकबाद!\n\n- ${name} 🌙\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  janmashtami: {
    key: 'janmashtami',
    name: 'जन्माष्टमी',
    englishName: 'Janmashtami',
    emoji: '🪈',
    bgParticles: ['🪈', '🦚', '✨', '🍯', '🌸', '💫'],
    dates: {
      2025: [7, 16],   // Aug 16
      2026: [8, 4],    // Sep 4
      2027: [7, 25],   // Aug 25
      2028: [7, 13],   // Aug 13
      2029: [8, 1],    // Sep 1
      2030: [7, 21],   // Aug 21
      2031: [7, 10],   // Aug 10
      2032: [7, 28],   // Aug 28
      2033: [7, 18],   // Aug 18
      2034: [7, 7],    // Aug 7
      2035: [7, 26]    // Aug 26
    },
    defaultImage: 'janmashtami1.jpg',
    images: ['janmashtami1.jpg'],
    significance: 'कृष्ण जन्माष्टमी भगवान श्री कृष्ण के जन्मोत्सव का परम पावन पर्व है। इस दिन मटकी फोड़ प्रतियोगिता (दही हांडी) और बालगोपाल के झूले की मनमोहक छटा दर्शनीय होती है।',
    highlights: ['बालगोपाल श्री कृष्ण का जन्मोत्सव 🪈', 'दही-हांडी और मटकी फोड़ की उमंग 🍯', 'मोरपंख और बंसी की मधुर तान 🦚'],
    wishes: (name) => [
      `🪈 कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएं! नटखट कान्हा आपके जीवन में खुशियां और प्रेम भर दें।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🦚 जय श्री कृष्णा! भगवान कृष्ण का आशीर्वाद आपके और आपके परिवार पर सदा बना रहे।\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  ganesh: {
    key: 'ganesh',
    name: 'गणेश चतुर्थी',
    englishName: 'Ganesh Chaturthi',
    emoji: '🐘',
    bgParticles: ['🐘', '🌺', '✨', '🌕', '🌸', '🔱'],
    dates: {
      2025: [7, 27],   // Aug 27
      2026: [8, 14],   // Sep 14
      2027: [8, 4],    // Sep 4
      2028: [7, 23],   // Aug 23
      2029: [8, 11],   // Sep 11
      2030: [8, 1],    // Sep 1
      2031: [8, 20],   // Sep 20
      2032: [8, 8],    // Sep 8
      2033: [7, 28],   // Aug 28
      2034: [8, 16],   // Sep 16
      2035: [8, 6]     // Sep 6
    },
    defaultImage: 'ganesh1.jpg',
    images: ['ganesh1.jpg'],
    significance: 'गणेश चतुर्थी बुद्धि, रिद्धि-सिद्धि और विघ्नहर्ता भगवान श्री गणेश जी के जन्मोत्सव का पावन पर्व है। बप्पा का आगमन हर घर में खुशहाली, सुख-समृद्धि और सफलता का नया सवेरा लाता है।',
    highlights: ['विघ्नहर्ता गणपति बप्पा का आगमन 🐘', 'मोदक और लड्डू का महाप्रसाद 🍬', 'रिद्धि-सिद्धि और सुख-समृद्धि 🌟'],
    wishes: (name) => [
      `🐘 गणेश चतुर्थी की हार्दिक शुभकामनाएं! बप्पा आपके जीवन में सुख, समृद्धि और रिद्धि-सिद्धि लाएं।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `🌸 गणपति बप्पा मोरया! गणेश चतुर्थी की बहुत-बहुत बधाई।\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  navratri: {
    key: 'navratri',
    name: 'नवरात्रि',
    englishName: 'Navratri',
    emoji: '🔱',
    bgParticles: ['🔱', '🌺', '✨', '💃', '🏵️', '💫'],
    dates: {
      2025: [8, 22],   // Sep 22
      2026: [9, 11],   // Oct 11
      2027: [8, 30],   // Sep 30
      2028: [8, 19],   // Sep 19
      2029: [9, 8],    // Oct 8
      2030: [8, 27],   // Sep 27
      2031: [9, 16],   // Oct 16
      2032: [9, 5],    // Oct 5
      2033: [8, 24],   // Sep 24
      2034: [9, 12],   // Oct 12
      2035: [9, 1]     // Oct 1
    },
    defaultImage: 'navratri1.jpg',
    images: ['navratri1.jpg'],
    significance: 'नवरात्रि मां भगवती की शक्ति, भक्ति और आराधना का नौ दिवसीय महाउत्सव है। नवदुर्गा के नौ स्वरूपों की उपासना से जीवन में सुख, शांति, और सकारात्मक ऊर्जा का संचार होता है।',
    highlights: ['शक्ति स्वरूपा मां दुर्गा की आराधना 🔱', 'गरबा और डांडिया की उमंग 💃', 'सकारात्मक ऊर्जा और भक्ति 🌸'],
    wishes: (name) => [
      `🔱 शुभ नवरात्रि! मां दुर्गा आपके जीवन से सभी दुखों का नाश करें और सुख-शांति प्रदान करें।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `✨ नवरात्रि के इस पावन पर्व की हार्दिक शुभकामनाएं! जय माता दी!\n\n- ${name} 🌸\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  dussehra: {
    key: 'dussehra',
    name: 'दशहरा',
    englishName: 'Dussehra',
    emoji: '🏹',
    bgParticles: ['🏹', '✨', '🎆', '💥', '🌺', '👑'],
    dates: {
      2025: [9, 2],    // Oct 2
      2026: [9, 20],   // Oct 20
      2027: [9, 9],    // Oct 9
      2028: [8, 28],   // Sep 28
      2029: [9, 17],   // Oct 17
      2030: [9, 6],    // Oct 6
      2031: [9, 25],   // Oct 25
      2032: [9, 14],   // Oct 14
      2033: [9, 3],    // Oct 3
      2034: [9, 22],   // Oct 22
      2035: [9, 11]    // Oct 11
    },
    defaultImage: 'dussehra1.jpg',
    images: ['dussehra1.jpg'],
    significance: 'दशहरा (विजयादशमी) अधर्म पर धर्म और असत्य पर सत्य की विजय का महान पर्व है। इस दिन भगवान श्री राम ने रावण का वध कर धर्म की पुनर्स्थापना की थी।',
    highlights: ['अधर्म पर धर्म की विजय 🏹', 'सत्य और अच्छाई का प्रतीक ✨', 'रावण दहन और आतिशबाजी 🎆'],
    wishes: (name) => [
      `🏹 विजयादशमी (दशहरा) की हार्दिक शुभकामनाएं! आपके जीवन से सभी बुराइयों का नाश हो और विजय मिले।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
      `✨ सत्य और धर्म की जीत का यह पावन पर्व आपके जीवन में नई खुशियां लाए। शुभ दशहरा!\n\n- ${name} 🌟\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  },
  diwali: {
    key: 'diwali',
    name: 'दीपावली',
    englishName: 'Diwali',
    emoji: '🪔',
    bgParticles: ['🪔', '✨', '🌟', '💥', '🎆', '💛'],
    dates: {
      2025: [9, 20],   // Oct 20
      2026: [10, 8],   // Nov 8
      2027: [9, 29],   // Oct 29
      2028: [9, 17],   // Oct 17
      2029: [10, 5],   // Nov 5
      2030: [9, 26],   // Oct 26
      2031: [10, 14],  // Nov 14
      2032: [10, 2],   // Nov 2
      2033: [9, 22],   // Oct 22
      2034: [10, 10],  // Nov 10
      2035: [9, 30]    // Oct 30
    },
    defaultImage: 'diwali1.jpg',
    images: ['diwali1.jpg', 'diwali2.jpg'],
    significance: 'दीपावली रोशनी, खुशियों और समृद्धि का सबसे बड़ा त्योहार है। इस दिन भगवान श्री राम 14 वर्ष के वनवास के बाद अयोध्या लौटे थे। मां लक्ष्मी और भगवान गणेश जी की कृपा से हर घर में प्रकाश फैलता है।',
    highlights: ['दीपों का जगमगाता प्रकाश 🪔', 'मां लक्ष्मी एवं गणेश पूजन 🪙', 'सुख, शांति और समृद्धि 🌟'],
    wishes: (name) => [
      `🪔 दीपों के इस पावन पर्व पर आपके घर में सुख, समृद्धि और खुशियों का प्रकाश फैले। हैप्पी दिवाली!\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`,
      `✨ दीपावली की हार्दिक शुभकामनाएं! मां लक्ष्मी का आशीर्वाद आप पर हमेशा बना रहे।\n\n- ${name} 🪔\nशुभकामनाएं भेजने के लिए खोलें:`
    ]
  }
};

/**
 * Dynamically resolves target date for current year or automatically rolls over to next year
 */
function getFestivalTarget(key) {
  const cfg = FESTIVAL_CONFIG[key];
  const now = new Date();
  const currentYear = now.getFullYear();

  if (!cfg) return { year: currentYear, targetDate: now, isToday: false, cfg: null };

  function getDateObj(yr) {
    if (cfg.fixed) {
      return new Date(yr, cfg.fixed[0], cfg.fixed[1], 0, 0, 0);
    } else if (cfg.dates && cfg.dates[yr]) {
      const [m, d] = cfg.dates[yr];
      return new Date(yr, m, d, 0, 0, 0);
    } else {
      return new Date(yr, 7, 15, 0, 0, 0);
    }
  }

  let targetYear = currentYear;
  let targetDate = getDateObj(targetYear);
  const festivalEnd = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000);

  if (now > festivalEnd) {
    targetYear = currentYear + 1;
    targetDate = getDateObj(targetYear);
  }

  const isToday = (now >= targetDate && now <= festivalEnd);

  return { year: targetYear, targetDate, isToday, cfg };
}

/**
 * Renders viral greeting banner if ?from=SenderName query parameter is passed in URL
 */
function checkPersonalizedSenderGreeting(cfg) {
  const params = new URLSearchParams(window.location.search);
  const senderName = params.get('from');

  if (senderName) {
    const banner = document.createElement('div');
    banner.style.cssText = `
      background: linear-gradient(135deg, #ff4081, #d81b60);
      color: white;
      padding: 14px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      box-shadow: 0 4px 15px rgba(216, 27, 96, 0.35);
      position: relative;
      z-index: 101;
      border-bottom: 2px solid #fff;
      animation: pulseBanner 2s infinite alternate;
    `;
    banner.innerHTML = `🎁 <span>${decodeURIComponent(senderName)}</span> ने आपके लिए ${cfg.name} की खास शुभकामना भेजी है! 💖`;
    document.body.insertBefore(banner, document.body.firstChild);

    setTimeout(() => {
      triggerFestiveCelebration(cfg.key);
    }, 500);
  }
}

/**
 * Triggers interactive confetti & petal blast
 */
function triggerFestiveCelebration(key) {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.3 }
    });
  } else {
    alert('🎉 शुभकामना उत्सव मुबारक हो!');
  }
}

/**
 * Copies direct share link to clipboard with toast notification
 */
function copyWishLink(key) {
  const nameInput = document.getElementById('senderName');
  const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'आप';
  const baseUrl = window.location.href.split('?')[0].split('#')[0];
  const shareUrl = `${baseUrl}?from=${encodeURIComponent(name)}`;

  navigator.clipboard.writeText(shareUrl).then(() => {
    showToast('✅ लिंक कॉपी हो गया! दोस्तों के साथ शेयर करें!');
    playFestiveChime();
  }).catch(() => {
    prompt('यह लिंक कॉपी करें:', shareUrl);
  });
}

function copySideWishLink(key) {
  const nameInput = document.getElementById('sideNameInput');
  const name = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : 'आप';
  const baseUrl = window.location.href.split('?')[0].split('#')[0];
  const shareUrl = `${baseUrl}?from=${encodeURIComponent(name)}`;

  navigator.clipboard.writeText(shareUrl).then(() => {
    showToast('✅ विश लिंक कॉपी हो गया!');
    playFestiveChime();
  }).catch(() => {
    prompt('यह लिंक कॉपी करें:', shareUrl);
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.style.cssText = `
      position: fixed;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.85);
      color: #fff;
      padding: 12px 24px;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 600;
      z-index: 2000;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

/**
 * Spawns floating festive emojis across background
 */
function startFloatingParticles(symbols) {
  const particleContainer = document.createElement('div');
  particleContainer.id = 'floatingParticleContainer';
  particleContainer.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:0;overflow:hidden;';
  document.body.appendChild(particleContainer);

  const particleCount = 18;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('span');
    const symbol = symbols[i % symbols.length];
    p.textContent = symbol;
    p.style.cssText = `
      position: absolute;
      font-size: ${Math.random() * 18 + 18}px;
      left: ${Math.random() * 95}vw;
      top: ${Math.random() * 90}vh;
      opacity: ${Math.random() * 0.45 + 0.15};
      animation: floatAnim ${Math.random() * 8 + 8}s linear infinite alternate;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
    `;
    particleContainer.appendChild(p);
  }

  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes floatAnim {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(15deg); }
      100% { transform: translateY(0px) rotate(-15deg); }
    }
  `;
  document.head.appendChild(styleTag);
}

/**
 * Inject Responsive Grid & Panel CSS Layout
 */
function injectResponsiveLayoutStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .page-layout-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      width: 95%;
      max-width: 1280px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .left-panel, .right-panel {
      position: sticky;
      top: 70px;
    }
    @media (min-width: 992px) {
      .page-layout-wrapper {
        grid-template-columns: 310px 1fr 310px;
        align-items: start;
        margin-top: 15px;
      }
      .mobile-only-section {
        display: none !important;
      }
    }
    @media (max-width: 991px) {
      .left-panel, .right-panel {
        display: none !important;
      }
      .mobile-only-section {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * R&D Feature: Web Audio API Synthesizer - Plays a sweet 4-note festive chime
 */
function playFestiveChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.45);
    });
  } catch (e) {
    // Silent fail if browser audio policy blocks autoplay
  }
}

/**
 * R&D Feature: .ics Calendar Event File Generator for Google / Apple / Outlook Calendar
 */
function downloadFestivalCalendarEvent(key) {
  const target = getFestivalTarget(key);
  if (!target || !target.cfg) return;
  const cfg = target.cfg;
  const year = target.year;
  const d = target.targetDate;
  
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}${mm}${dd}`;

  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Festival Wishes Engine//IN',
    'BEGIN:VEVENT',
    `SUMMARY:${cfg.emoji} ${cfg.name} ${year} (${cfg.englishName})`,
    `DESCRIPTION:${cfg.significance.replace(/\n/g, ' ')}`,
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${cfg.key}-${year}-reminder.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast(`📅 ${cfg.name} ${year} कैलेंडर रिमाइंडर डाउनलोड हो गया!`);
  playFestiveChime();
}

/**
 * R&D Feature: Floating Virtual Diya & Fireworks Sparkler Button
 */
function initVirtualDiyaFloatingButton(cfg) {
  if (document.getElementById('floatingDiyaBtn')) return;

  const btn = document.createElement('button');
  btn.id = 'floatingDiyaBtn';
  btn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: linear-gradient(135deg, #ff9800, #e65100);
    color: white;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(230, 81, 0, 0.4);
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  `;
  btn.innerHTML = `<span>🪔</span> <span>दीप जलाएं & खुशियां मनाएं</span>`;
  btn.onmouseover = () => { btn.style.transform = 'scale(1.06)'; };
  btn.onmouseout = () => { btn.style.transform = 'scale(1)'; };
  btn.onclick = () => {
    triggerFestiveCelebration(cfg.key);
    spawnFloatingDiyas();
    playFestiveChime();
  };
  document.body.appendChild(btn);
}

/**
 * R&D Feature: Deep Resonant Temple Bell Web Audio Synth
 */
function playTempleBell() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 pitch
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2.5);
  } catch(e) {}
}

/**
 * R&D Feature: Interactive Blessing Fortune Wheel / Spinner
 */
const FESTIVAL_BLESSINGS = [
  "🌟 इस पर्व पर आपके जीवन में अपार सुख, सफलता और शांति का आगमन होगा!",
  "🌺 मां लक्ष्मी और ईश्वर का दिव्य आशीर्वाद आपके पूरे परिवार पर सदा बना रहेगा!",
  "💖 आपके घर में हमेशा आरोग्य, समृद्धि और असीम प्रेम की वर्षा होगी!",
  "🎯 इस वर्ष आपके सभी संकल्प सिद्ध होंगे और सफलता के नए द्वार खुलेंगे!",
  "🍬 मिठास और खुशियों से भर जाएगा आपका हर दिन, हर पल!",
  "☀️ प्रकाश और सकारात्मक ऊर्जा आपके जीवन से अंधकार दूर कर देगी!"
];

function spinLuckyFestivalBlessing(key) {
  const target = getFestivalTarget(key);
  const cfg = target ? target.cfg : { name: 'उत्सव', emoji: '🎉' };

  let modal = document.getElementById('blessingModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'blessingModal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center;
      z-index: 2100; padding: 20px; backdrop-filter: blur(5px);
    `;
    document.body.appendChild(modal);
  }

  const randomIdx = Math.floor(Math.random() * FESTIVAL_BLESSINGS.length);
  const blessing = FESTIVAL_BLESSINGS[randomIdx];

  modal.innerHTML = `
    <div style="background: white; border-radius: 20px; padding: 25px 20px; text-align: center; max-width: 380px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 2px solid #ff9800; animation: popIn 0.3s ease;">
      <h3 style="color: #e65100; font-size: 18px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <span>🎡</span> <span>लकी ${cfg.name} आशीर्वाद</span>
      </h3>
      <p style="font-size: 12px; color: #666; margin-bottom: 16px;">आपका विशेष शुभकामना भाग्य संदेश:</p>
      
      <div id="blessingCardBox" style="background: linear-gradient(135deg, #fff3e0, #ffe0b2); padding: 20px 15px; border-radius: 14px; border: 1px dashed #ff9800; margin-bottom: 18px;">
        <p style="font-size: 15px; color: #d81b60; font-weight: bold; line-height: 1.5; margin: 0;">
          "${blessing}"
        </p>
      </div>

      <button onclick="spinLuckyFestivalBlessing('${key}')" style="width: 100%; background: linear-gradient(135deg, #ff9800, #e65100); color: white; border: none; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 14px; margin-bottom: 10px; box-shadow: 0 4px 12px rgba(255,152,0,0.3);">
        🎲 फिर से स्पिन करें (Re-spin)
      </button>

      <button onclick="document.getElementById('blessingModal').style.display='none'" style="width: 100%; background: #757575; color: white; border: none; padding: 10px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 14px;">
        बंद करें
      </button>
    </div>
  `;

  modal.style.display = 'flex';
  triggerFestiveCelebration(key);
  playTempleBell();
}

/**
 * R&D Feature: Click & Tap Particle Splash Trail
 */
function initClickSplashParticles() {
  const emojis = ['✨', '🌸', '🪔', '🎨', '💖', '🌺', '⭐'];
  document.addEventListener('click', (e) => {
    // Ignore button clicks
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.tagName === 'INPUT') return;

    for (let i = 0; i < 5; i++) {
      const p = document.createElement('span');
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      const x = e.clientX + (Math.random() * 40 - 20);
      const y = e.clientY + (Math.random() * 40 - 20);

      p.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${Math.random() * 12 + 16}px;
        pointer-events: none;
        z-index: 3000;
        animation: clickSplashAnim 1s ease-out forwards;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  });

  if (!document.getElementById('clickSplashStyle')) {
    const st = document.createElement('style');
    st.id = 'clickSplashStyle';
    st.textContent = `
      @keyframes clickSplashAnim {
        0% { transform: scale(0.5) translateY(0); opacity: 1; }
        50% { transform: scale(1.3) translateY(-25px); opacity: 0.9; }
        100% { transform: scale(1) translateY(-50px); opacity: 0; }
      }
    `;
    document.head.appendChild(st);
  }
}

/**
 * Spawns glowing floating Diyas across the screen
 */
function spawnFloatingDiyas() {
  for (let i = 0; i < 8; i++) {
    const diya = document.createElement('div');
    diya.innerHTML = '🪔';
    diya.style.cssText = `
      position: fixed;
      bottom: -40px;
      left: ${Math.random() * 90 + 5}vw;
      font-size: ${Math.random() * 16 + 28}px;
      z-index: 1500;
      pointer-events: none;
      filter: drop-shadow(0 0 10px #ffb300);
      animation: floatDiyaUp ${Math.random() * 3 + 4}s ease-out forwards;
    `;
    document.body.appendChild(diya);
    setTimeout(() => { diya.remove(); }, 7000);
  }

  if (!document.getElementById('diyaAnimStyle')) {
    const style = document.createElement('style');
    style.id = 'diyaAnimStyle';
    style.textContent = `
      @keyframes floatDiyaUp {
        0% { transform: translateY(0) scale(0.6) rotate(0deg); opacity: 1; }
        50% { transform: translateY(-50vh) scale(1.2) rotate(10deg); opacity: 0.9; }
        100% { transform: translateY(-110vh) scale(1.5) rotate(-10deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * R&D Feature: Multi-Language Regional Wish Presets (Hindi, Sanskrit, Marathi, Gujarati, English)
 */
const REGIONAL_WISH_PRESETS = {
  hi: (name, cfg) => `${cfg.emoji} ${cfg.name} की हार्दिक शुभकामनाएं!\nयह पावन अवसर आपके जीवन में ढेरों खुशियाँ, उत्तम स्वास्थ्य और समृद्धि लाए।\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
  sa: (name, cfg) => `🕉️ ${cfg.name} पर्वणः हार्दिक्यः शुभकामनाः।\nसर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः॥\n\n- ${name} 🙏\nशुभकामनाएं भेजने के लिए खोलें:`,
  mr: (name, cfg) => `${cfg.emoji} ${cfg.name} च्या हार्दिक शुभेच्छा!\nतुमच्या आयुष्यात आनंद, आरोग्य आणि सुख-समृद्धी लाभो.\n\n- ${name} 🌸\nशुभकामनाएं भेजने के लिए खोलें:`,
  gu: (name, cfg) => `${cfg.emoji} ${cfg.name} ની હાર્દિક શુભકામનાઓ!\nઆ પવિત્ર તહેવાર તમારા જીવનમાં સુખ અને શાંતિ લાવે.\n\n- ${name} ✨\nशुभकामनाएं भेजने के लिए खोलें:`,
  en: (name, cfg) => `${cfg.emoji} Wishing you and your loved ones a joyful & blessed ${cfg.englishName || cfg.name}!\nMay happiness & prosperity light up your life.\n\n- Warm wishes from ${name} 💖\nOpen link to send wishes:`
};

/**
 * R&D Feature: HTML5 Canvas Festive Wish Card Generator & Image Exporter
 */
function downloadCustomCanvasCard(imgId, festivalKey, senderName) {
  const target = getFestivalTarget(festivalKey);
  const cfg = target ? target.cfg : { name: 'त्योहार', emoji: '🎉', key: 'festival' };
  const imgEl = document.getElementById(imgId) || document.getElementById('shareImage') || document.querySelector('.main-img-container img');
  const name = senderName || (document.getElementById('senderName') ? document.getElementById('senderName').value.trim() : '') || 'शुभचिंतक';

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 920;
  const ctx = canvas.getContext('2d');

  // Background Royal Festive Gradient
  const grad = ctx.createLinearGradient(0, 0, 800, 920);
  grad.addColorStop(0, '#1a0033');
  grad.addColorStop(0.5, '#4a004a');
  grad.addColorStop(1, '#800040');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 920);

  // Outer & Inner Gold Frames
  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, 760, 880);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.lineWidth = 2;
  ctx.strokeRect(32, 32, 736, 856);

  // Header Title Text
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${cfg.emoji} ${cfg.name} ${target.year} ${cfg.emoji}`, 400, 80);

  ctx.fillStyle = '#ffffff';
  ctx.font = '22px "Segoe UI", Arial, sans-serif';
  ctx.fillText('हार्दिक शुभकामनाएं एवं ढेरों बधाइयां', 400, 120);

  // Draw Main Graphic Image
  if (imgEl && imgEl.complete && imgEl.naturalWidth !== 0) {
    try {
      ctx.drawImage(imgEl, 60, 150, 680, 520);
    } catch (e) {
      // Fallback
    }
  }

  // Footer Banner Box for Personal Name Tag
  ctx.fillStyle = 'rgba(255, 215, 0, 0.18)';
  ctx.fillRect(60, 700, 680, 150);

  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 700, 680, 150);

  // Sender Name
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 30px "Segoe UI", Arial, sans-serif';
  ctx.fillText(`✨ प्रेषक: ${name} ✨`, 400, 755);

  ctx.fillStyle = '#ffffff';
  ctx.font = '18px "Segoe UI", Arial, sans-serif';
  ctx.fillText('शुभकामना संदेश बनाने एवं भेजने के लिए विज़िट करें', 400, 795);

  ctx.fillStyle = '#ff4081';
  ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
  ctx.fillText('fastival-wishes.vercel.app', 400, 825);

  // Trigger Download
  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `${cfg.key}-wish-card-${name}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast(`🎨 HD ${cfg.name} विश कार्ड डाउनलोड हो गया!`);
  playFestiveChime();
}

/**
 * R&D Feature: Mobile QR Code Generator Modal for Scan-to-Share
 */
function openQRCodeModal(shareUrl) {
  const url = shareUrl || window.location.href.split('?')[0];
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}&color=d81b60&bgcolor=ffffff`;

  let modal = document.getElementById('qrModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'qrModal';
    modal.style.cssText = `
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.75);
      display: flex; justify-content: center; align-items: center;
      z-index: 2000; padding: 20px; backdrop-filter: blur(4px);
    `;
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background: white; border-radius: 20px; padding: 25px; text-align: center; max-width: 340px; width: 100%; box-shadow: 0 10px 30px rgba(0,0,0,0.3); border: 2px solid #d81b60;">
      <h3 style="color: #222; font-size: 18px; margin-bottom: 8px;">📱 मोबाइल से स्कैन करें</h3>
      <p style="font-size: 13px; color: #666; margin-bottom: 16px;">अपने फोन कैमरा से QR कोड स्कैन करके सीधा विश लिंक खोलें!</p>
      <div style="background: #fdf0f5; padding: 15px; border-radius: 12px; display: inline-block; margin-bottom: 16px; border: 1px dashed #f48fb1;">
        <img src="${qrApiUrl}" alt="QR Code" style="width: 180px; height: 180px; display: block; border-radius: 8px;">
      </div>
      <button onclick="document.getElementById('qrModal').style.display='none'" style="width: 100%; background: #d81b60; color: white; border: none; padding: 10px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 14px;">
        बंद करें
      </button>
    </div>
  `;

  modal.style.display = 'flex';
  playFestiveChime();
}

/**
 * Interactive Festival Mini-Game Engine (Holi Gulal Blast, Diwali Fireworks, Modak Catcher, Matki Phod, Kite Fighter, etc.)
 */
const FESTIVAL_GAME_PRESETS = {
  holi: { title: '🎨 होली गुलाल & वॉटर बलून ब्लास्ट', targetText: 'गुलाल बलून पर टैप करें!', items: ['🔴', '🟡', '🔵', '🟢', '🟣', '🎈'], bg: 'linear-gradient(135deg, #4a148c, #880e4f)' },
  diwali: { title: '🪔 दिवाली रॉकेट & आतिशबाजी', targetText: 'रॉकेट को फोड़ें!', items: ['🚀', '🪔', '✨', '🎆', '💥'], bg: 'linear-gradient(135deg, #1a237e, #311b92)' },
  ganesh: { title: '🐘 बप्पा मोदक कैचर', targetText: 'मोदक पर टैप करें!', items: ['🍬', '🍯', '🌸', '🍎', '🔱'], bg: 'linear-gradient(135deg, #e65100, #bf360c)' },
  janmashtami: { title: '🪈 माखन मटकी फोड़ चेलेंज', targetText: 'मटकी फोड़ें!', items: ['🏺', '🍯', '🦚', '🪈'], bg: 'linear-gradient(135deg, #0d47a1, #006064)' },
  sankranti: { title: '🪁 पतंगबाज़ - काइट कटिंग फाइटर', targetText: 'पतंग काटें!', items: ['🪁', '☀️', '🌾', '🟡'], bg: 'linear-gradient(135deg, #004d40, #00695c)' },
  independence: { title: '🇮🇳 तिरंगा स्टार चेज़र', targetText: 'स्टार्स पकड़ें!', items: ['🧡', '🤍', '💚', '⭐', '🇮🇳'], bg: 'linear-gradient(135deg, #e65100, #1b5e20)' },
  rakhi: { title: '🌸 राखी & गिफ्ट बॉक्स कैचर', targetText: 'राखी पर क्लिक करें!', items: ['🌸', '🎀', '🎁', '💖', '💐'], bg: 'linear-gradient(135deg, #880e4f, #4a148c)' },
  shivratri: { title: '🔱 शिवलिंग जलाभिषेक & बेलपत्र', targetText: 'बेलपत्र चढ़ाएं!', items: ['🌿', '💧', '🔱', '🔔'], bg: 'linear-gradient(135deg, #1a237e, #004d40)' },
  navratri: { title: '💃 डांडिया बीट & गरबा टैप', targetText: 'डांडिया टैप करें!', items: ['🥢', '💃', '🏵️', '✨'], bg: 'linear-gradient(135deg, #b71c1c, #880e4f)' },
  dussehra: { title: '🏹 राम बाण रावण दहन', targetText: 'रावण पर निशाना साधें!', items: ['🏹', '🔥', '🎯', '💥'], bg: 'linear-gradient(135deg, #bf360c, #4a148c)' },
  eid: { title: '🌙 ईद का चांद & ईदी कैचर', targetText: 'चांद & ईदी पकड़ें!', items: ['🌙', '⭐', '🤲', '🎁'], bg: 'linear-gradient(135deg, #004d40, #1a237e)' }
};

let gameActiveTimer = null;
let gameSpawnInterval = null;

function openFestivalGameModal(key) {
  const target = getFestivalTarget(key);
  const cfg = target ? target.cfg : { name: 'उत्सव', key: 'holi' };
  const preset = FESTIVAL_GAME_PRESETS[key] || FESTIVAL_GAME_PRESETS['holi'];
  const highScoreKey = `game_highscore_${key}`;
  const savedHighScore = parseInt(localStorage.getItem(highScoreKey) || '0', 10);

  let modal = document.getElementById('festivalGameModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'festivalGameModal';
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center;
      z-index: 2200; padding: 15px; backdrop-filter: blur(8px);
    `;
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background: ${preset.bg}; border-radius: 20px; padding: 20px; text-align: center; max-width: 440px; width: 100%; box-shadow: 0 12px 35px rgba(0,0,0,0.5); border: 2px solid #ffd700; color: white; position: relative; overflow: hidden; animation: popIn 0.3s ease;">
      
      <button onclick="stopFestivalGame(); document.getElementById('festivalGameModal').style.display='none';" style="position: absolute; top: 12px; right: 14px; background: rgba(255,255,255,0.2); color: white; border: none; font-size: 18px; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold;">✕</button>

      <h3 style="font-size: 18px; margin-bottom: 4px; color: #ffd700; display: flex; align-items: center; justify-content: center; gap: 6px;">
        <span>🎮</span> <span>${preset.title}</span>
      </h3>
      <p style="font-size: 12px; color: rgba(255,255,255,0.85); margin-bottom: 12px;">${preset.targetText} (25 सेकंड का पावन चैलेंज!)</p>

      <div style="display: flex; justify-content: space-between; background: rgba(0,0,0,0.35); padding: 8px 14px; border-radius: 12px; margin-bottom: 12px; font-size: 13px; font-weight: bold; border: 1px solid rgba(255,215,0,0.3);">
        <div>🎯 स्कोर: <span id="gameCurrentScore" style="color: #00e676; font-size: 16px;">0</span></div>
        <div>⏱️ समय: <span id="gameTimer" style="color: #ffea00; font-size: 16px;">25s</span></div>
        <div>🏆 बेस्ट: <span id="gameHighScore" style="color: #ff4081; font-size: 16px;">${savedHighScore}</span></div>
      </div>

      <div id="gamePlayArea" style="height: 260px; background: rgba(0,0,0,0.25); border-radius: 14px; border: 2px dashed rgba(255,215,0,0.4); position: relative; overflow: hidden; margin-bottom: 12px; touch-action: manipulation;">
        <div id="gameStartOverlay" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background: rgba(0,0,0,0.5); border-radius:12px; padding:20px;">
          <p style="font-size: 14px; margin-bottom: 14px; line-height: 1.5;">स्क्रीन पर आने वाली वस्तुओं पर जल्दी-जल्दी टैप करके स्कोर बनाएं!</p>
          <button onclick="runFestivalGameEngine('${key}')" style="background: linear-gradient(135deg, #00c853, #64dd17); color: white; border: none; padding: 12px 28px; border-radius: 25px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(0,200,83,0.4);">
            ▶️ गेम शुरू करें (Start Game)
          </button>
        </div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="gameShareBtn" onclick="shareGameHighScore('${key}')" style="flex: 1; background: linear-gradient(135deg, #25D366, #128C7E); color: white; border: none; padding: 10px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 13px; display: none;">
          📱 स्कोर व्हाट्सएप पर शेयर करें
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  playFestiveChime();
}

function stopFestivalGame() {
  if (gameActiveTimer) clearInterval(gameActiveTimer);
  if (gameSpawnInterval) clearInterval(gameSpawnInterval);
  gameActiveTimer = null;
  gameSpawnInterval = null;
}

function runFestivalGameEngine(key) {
  stopFestivalGame();
  const preset = FESTIVAL_GAME_PRESETS[key] || FESTIVAL_GAME_PRESETS['holi'];
  const playArea = document.getElementById('gamePlayArea');
  const scoreEl = document.getElementById('gameCurrentScore');
  const timerEl = document.getElementById('gameTimer');
  const highScoreEl = document.getElementById('gameHighScore');
  const shareBtn = document.getElementById('gameShareBtn');

  if (!playArea || !scoreEl || !timerEl) return;

  let currentScore = 0;
  let timeLeft = 25;
  const highScoreKey = `game_highscore_${key}`;
  let highScore = parseInt(localStorage.getItem(highScoreKey) || '0', 10);

  playArea.innerHTML = '';
  scoreEl.textContent = '0';
  timerEl.textContent = '25s';
  if (shareBtn) shareBtn.style.display = 'none';

  gameSpawnInterval = setInterval(() => {
    if (timeLeft <= 0) return;
    const item = document.createElement('span');
    const symbol = preset.items[Math.floor(Math.random() * preset.items.length)];
    item.textContent = symbol;
    
    const size = Math.floor(Math.random() * 16) + 32;
    const left = Math.floor(Math.random() * 80) + 5;
    const duration = Math.random() * 1.5 + 1.2;

    item.style.cssText = `
      position: absolute;
      left: ${left}%;
      bottom: -50px;
      font-size: ${size}px;
      cursor: pointer;
      user-select: none;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
      animation: floatUpGame ${duration}s linear forwards;
    `;

    item.onclick = (e) => {
      e.stopPropagation();
      currentScore += 10;
      scoreEl.textContent = currentScore;
      playFestiveChime();

      item.textContent = '💥';
      item.style.transform = 'scale(1.5)';
      item.style.opacity = '0';
      item.style.transition = 'all 0.2s ease';
      setTimeout(() => item.remove(), 200);
    };

    playArea.appendChild(item);
    setTimeout(() => { if (item.parentNode) item.remove(); }, duration * 1000);
  }, 450);

  gameActiveTimer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      stopFestivalGame();
      let isNewRecord = false;
      if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem(highScoreKey, highScore);
        highScoreEl.textContent = highScore;
        isNewRecord = true;
      }

      playArea.innerHTML = `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background:rgba(0,0,0,0.65); border-radius:12px; padding:15px;">
          <h4 style="font-size: 22px; color: #ffd700; margin-bottom: 6px;">🎉 समय समाप्त (Game Over)!</h4>
          <p style="font-size: 16px; color: #fff; margin-bottom: 4px;">आपका कुल स्कोर: <strong style="color: #00e676; font-size: 20px;">${currentScore}</strong></p>
          ${isNewRecord ? '<p style="color: #ff4081; font-weight: bold; font-size: 14px; margin-bottom: 12px;">🏆 नया हाई स्कोर रिकॉर्ड बना!</p>' : `<p style="font-size: 13px; color: #ccc; margin-bottom: 12px;">आपका हाई स्कोर: ${highScore}</p>`}
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; width: 100%;">
            <button onclick="runFestivalGameEngine('${key}')" style="background: linear-gradient(135deg, #ff9800, #e65100); color: white; border: none; padding: 10px 18px; border-radius: 20px; font-weight: bold; cursor: pointer; font-size: 13px; box-shadow: 0 4px 12px rgba(255,152,0,0.3);">
              🔄 फिर से खेलें
            </button>
            <button onclick="shareGameHighScore('${key}')" style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; border: none; padding: 10px 18px; border-radius: 20px; font-weight: bold; cursor: pointer; font-size: 13px; box-shadow: 0 4px 12px rgba(37,211,102,0.3);">
              📱 व्हाट्सएप शेयर
            </button>
          </div>
        </div>
      `;

      if (shareBtn) shareBtn.style.display = 'block';
      triggerFestiveCelebration(key);
      playTempleBell();
    }
  }, 1000);

  if (!document.getElementById('gameAnimStyle')) {
    const st = document.createElement('style');
    st.id = 'gameAnimStyle';
    st.textContent = `
      @keyframes floatUpGame {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-310px) rotate(20deg); opacity: 0.8; }
      }
    `;
    document.head.appendChild(st);
  }
}

function shareGameHighScore(key) {
  const target = getFestivalTarget(key);
  const cfg = target ? target.cfg : { name: 'उत्सव' };
  const preset = FESTIVAL_GAME_PRESETS[key] || FESTIVAL_GAME_PRESETS['holi'];
  const highScoreKey = `game_highscore_${key}`;
  const score = localStorage.getItem(highScoreKey) || '0';

  // Read Player Name from input fields or localStorage
  let sideVal = document.getElementById('sideNameInput') ? document.getElementById('sideNameInput').value.trim() : '';
  let mainVal = document.getElementById('senderName') ? document.getElementById('senderName').value.trim() : '';
  let playerName = sideVal || mainVal || localStorage.getItem('user_sender_name') || '';

  if (playerName) {
    localStorage.setItem('user_sender_name', playerName);
  }

  const nameDisplay = playerName ? `*${playerName}*` : 'मैंने';
  const baseUrl = window.location.href.split('?')[0];
  const shareUrl = playerName ? `${baseUrl}?from=${encodeURIComponent(playerName)}` : baseUrl;

  const shareText = `🎮 ${nameDisplay} ने ${cfg.name} गेम (${preset.title}) में *${score}* अंक बनाए! 🎉\n\nक्या आप ${playerName ? nameDisplay + ' का' : 'यह'} हाई स्कोर रिकॉर्ड तोड़ सकते हैं? खेलें और अपनी शुभकामनाएं भेजें:\n👉 ${shareUrl}`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  
  // Directly open WhatsApp link
  window.open(waUrl, '_blank');

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).catch(() => {});
  }
  showToast(`✅ ${playerName ? playerName + ' का' : ''} स्कोर व्हाट्सएप पर शेयर हो रहा है!`);
  playFestiveChime();
}

/**
 * Renders Left Side Panel Widgets for Desktop Screens
 */
function renderLeftSidePanelWidgets(cfg) {
  const leftPanel = document.getElementById('leftSidePanel');
  if (!leftPanel) return;

  leftPanel.innerHTML = `
    <div style="background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: left; border: 1px solid rgba(0,0,0,0.06); margin-bottom: 20px; backdrop-filter: blur(5px);">
      <h3 style="font-size: 16px; color: #222; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
        <span>⚡</span> <span>त्वरित विश क्रिएटर (Quick Wish)</span>
      </h3>
      <p style="font-size: 13px; color: #555; margin-bottom: 12px; line-height: 1.4;">
        अपना नाम डालकर दोस्तों को तुरंत ${cfg.name} का विश लिंक भेजें!
      </p>
      <input type="text" id="sideNameInput" placeholder="अपना नाम दर्ज करें" value="${localStorage.getItem('user_sender_name') || ''}" oninput="localStorage.setItem('user_sender_name', this.value.trim())" style="width:100%; padding:10px 12px; border-radius:8px; border:1px solid #ccc; margin-bottom:12px; font-size:14px; outline:none;">
      
      <button onclick="copySideWishLink('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #25D366, #128C7E); color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:14px; box-shadow: 0 4px 10px rgba(37,211,102,0.3); margin-bottom: 8px;">
        📱 विश लिंक कॉपी करें
      </button>

      <button onclick="openFestivalGameModal('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #d32f2f, #c2185b); color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(211,47,47,0.3); margin-bottom: 8px; animation: pulse 2s infinite alternate;">
        🎮 ${cfg.name} स्पेशल गेम खेलें
      </button>

      <button onclick="downloadCustomCanvasCard(null, '${cfg.key}', document.getElementById('sideNameInput') ? document.getElementById('sideNameInput').value.trim() : '')" style="width:100%; background: linear-gradient(135deg, #e91e63, #ad1457); color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(233,30,99,0.25); margin-bottom: 8px;">
        🎨 HD विश कार्ड डाउनलोड करें (Canvas)
      </button>

      <button onclick="spinLuckyFestivalBlessing('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #ff9800, #e65100); color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(255,152,0,0.25); margin-bottom: 8px;">
        🎡 लकी आशीर्वाद स्पिनर (Fortune Wheel)
      </button>

      <button onclick="openQRCodeModal(window.location.href.split('?')[0] + '?from=' + encodeURIComponent(document.getElementById('sideNameInput') ? document.getElementById('sideNameInput').value.trim() || 'आप' : 'आप'))" style="width:100%; background: linear-gradient(135deg, #9c27b0, #6a1b9a); color:white; border:none; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(156,39,176,0.25); margin-bottom: 8px;">
        📱 QR कोड से शेयर करें
      </button>

      <button onclick="playTempleBell(); playFestiveChime();" style="width:100%; background: linear-gradient(135deg, #009688, #004d40); color:white; border:none; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(0,150,136,0.25); margin-bottom: 8px;">
        🔔 दिव्य मंदिर घंटी (Temple Bell Audio)
      </button>

      <button onclick="downloadFestivalCalendarEvent('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #3f51b5, #1a237e); color:white; border:none; padding:10px; border-radius:8px; font-weight:600; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(63,81,181,0.25);">
        🔔 कैलेंडर में जोड़ें (.ics)
      </button>
    </div>

    <div style="background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: left; border: 1px solid rgba(0,0,0,0.06); backdrop-filter: blur(5px);">
      <h3 style="font-size: 16px; color: #222; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <span>📜</span> <span>शुभ विचार (Festive Quotes)</span>
      </h3>
      <blockquote style="font-size: 13px; color: #444; font-style: italic; border-left: 3px solid #d81b60; padding-left: 10px; margin: 0; line-height: 1.6;">
        "${cfg.significance.substring(0, 140)}..."
      </blockquote>
    </div>
  `;
}

/**
 * Renders Right Side Panel & Mobile Info & Upcoming Schedule Widgets
 */
function renderScheduleAndInfoWidgets(cfg, currentKey, isInSubfolder = false) {
  const now = new Date();
  const prefix = isInSubfolder ? '../' : '';

  const festivalList = Object.keys(FESTIVAL_CONFIG).map(k => {
    const t = getFestivalTarget(k);
    const diffDays = Math.ceil((t.targetDate - now) / (1000 * 60 * 60 * 24));
    return {
      key: k,
      name: t.cfg.name,
      emoji: t.cfg.emoji,
      targetYear: t.year,
      targetDate: t.targetDate,
      diffDays,
      link: k === 'independence' ? `${prefix}15_Aug/independence_day.html` : `${prefix}${k}.html`
    };
  }).sort((a, b) => a.targetDate - b.targetDate);

  const scheduleHTML = festivalList.map(f => {
    const activeStyle = (f.key === currentKey) ? 'background: #fff3e0; border-left: 4px solid #ff9800; font-weight: bold;' : '';
    const dateFormatted = f.targetDate.toLocaleDateString('hi-IN', { month: 'short', day: 'numeric', year: 'numeric' });
    return `
      <a href="${f.link}" style="text-decoration: none; color: #222; display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; margin: 6px 0; border-radius: 8px; border: 1px solid #eee; transition: all 0.2s ease; ${activeStyle}">
        <span style="font-size: 13px; display: flex; align-items: center; gap: 6px;">
          <span>${f.emoji}</span> <span>${f.name} ${f.targetYear}</span>
        </span>
        <span style="font-size: 11px; color: #d81b60; font-weight: 600;">${dateFormatted} (${f.diffDays} दिन शेष)</span>
      </a>
    `;
  }).join('');

  const scheduleWidgetContent = `
    <div style="background: rgba(255,255,255,0.95); border-radius: 16px; padding: 18px 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: left; border: 1px solid rgba(0,0,0,0.06); margin-bottom: 20px;">
      <h3 style="color: #111; font-size: 16px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <span>📅</span> <span>आगामी त्योहार कैलेंडर</span>
      </h3>
      <div style="max-height: 240px; overflow-y: auto; padding-right: 4px;">
        ${scheduleHTML}
      </div>
    </div>
  `;

  let highlightsHTML = cfg.highlights.map(h => `<li style="margin: 6px 0; font-size: 13px; display: flex; align-items: center; gap: 8px;"><span>✦</span> <span>${h}</span></li>`).join('');

  const infoWidgetContent = `
    <div style="background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: left; border: 1px solid rgba(0,0,0,0.06); backdrop-filter: blur(5px);">
      <h3 style="color: #222; font-size: 17px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
        <span>${cfg.emoji}</span> <span>${cfg.name} का पावन महत्त्व</span>
      </h3>
      <p style="font-size: 13px; color: #444; line-height: 1.6; margin-bottom: 14px;">
        ${cfg.significance}
      </p>
      <div style="border-top: 1px dashed #ddd; padding-top: 10px; margin-bottom: 14px;">
        <h4 style="font-size: 13px; color: #555; margin-bottom: 8px;">मुख्य विशेषताएं:</h4>
        <ul style="list-style: none; padding: 0; color: #333;">
          ${highlightsHTML}
        </ul>
      </div>

      <button onclick="openFestivalGameModal('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #d32f2f, #c2185b); color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(211,47,47,0.3); margin-bottom: 8px;">
        🎮 ${cfg.name} स्पेशल मिनी-गेम खेलें
      </button>

      <button onclick="downloadFestivalCalendarEvent('${cfg.key}')" style="width:100%; background: linear-gradient(135deg, #0288d1, #0097a7); color:white; border:none; padding:10px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:13px; box-shadow: 0 4px 10px rgba(2,136,209,0.3);">
        🔔 कैलेंडर में रिमाइंडर जोड़ें (.ics)
      </button>
    </div>
  `;

  // Render into right panel for desktop
  const rightPanel = document.getElementById('rightSidePanel');
  if (rightPanel) {
    rightPanel.innerHTML = scheduleWidgetContent + infoWidgetContent;
  }

  // Render into mobile section for mobile viewports
  const infoBoxMobile = document.getElementById('festivalInfoBoxMobile');
  if (infoBoxMobile) infoBoxMobile.innerHTML = infoWidgetContent;

  const scheduleBoxMobile = document.getElementById('upcomingScheduleBoxMobile');
  if (scheduleBoxMobile) scheduleBoxMobile.innerHTML = scheduleWidgetContent;
}

/**
 * Initializes layout grid, side panels, countdown, dynamic text, schedule, and particles
 */
function initFestivalPage(key, isInSubfolder = false) {
  const targetInfo = getFestivalTarget(key);
  const { year, targetDate, isToday, cfg } = targetInfo;

  const festivalTitle = `${cfg.emoji} ${cfg.name} ${year} की हार्दिक शुभकामनाएं ${cfg.emoji}`;
  document.title = `${cfg.name} ${year} शुभकामनाएं`;

  const headingEl = document.getElementById('festivalHeading');
  if (headingEl) {
    headingEl.textContent = festivalTitle;
  }

  const metaTitleEl = document.querySelector('meta[property="og:title"]');
  if (metaTitleEl) {
    metaTitleEl.setAttribute('content', `${cfg.name} ${year} की हार्दिक शुभकामनाएं`);
  }

  injectResponsiveLayoutStyles();
  checkPersonalizedSenderGreeting(cfg);
  renderLeftSidePanelWidgets(cfg);
  renderScheduleAndInfoWidgets(cfg, key, isInSubfolder);
  initVirtualDiyaFloatingButton(cfg);
  initClickSplashParticles();

  if (cfg.bgParticles) {
    startFloatingParticles(cfg.bgParticles);
  }

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const statusTextEl = document.getElementById('countdownStatus');

    if (isToday || diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      if (statusTextEl) {
        statusTextEl.textContent = `🎉 आज का दिन खास है! ${cfg.name} की हार्दिक शुभकामनाएं! 🎉`;
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');

    if (statusTextEl) {
      statusTextEl.textContent = `${cfg.name} ${year} आने में बचा समय:`;
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  return targetInfo;
}

window.FESTIVAL_CONFIG = FESTIVAL_CONFIG;
window.REGIONAL_WISH_PRESETS = REGIONAL_WISH_PRESETS;
window.getFestivalTarget = getFestivalTarget;
window.initFestivalPage = initFestivalPage;
window.copyWishLink = copyWishLink;
window.copySideWishLink = copySideWishLink;
window.triggerFestiveCelebration = triggerFestiveCelebration;
window.playFestiveChime = playFestiveChime;
window.playTempleBell = playTempleBell;
window.spinLuckyFestivalBlessing = spinLuckyFestivalBlessing;
window.downloadFestivalCalendarEvent = downloadFestivalCalendarEvent;
window.spawnFloatingDiyas = spawnFloatingDiyas;
window.downloadCustomCanvasCard = downloadCustomCanvasCard;
window.openQRCodeModal = openQRCodeModal;
window.openFestivalGameModal = openFestivalGameModal;
window.stopFestivalGame = stopFestivalGame;
window.runFestivalGameEngine = runFestivalGameEngine;
window.shareGameHighScore = shareGameHighScore;

