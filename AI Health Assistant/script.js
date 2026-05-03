(function () {
  "use strict";

  const LANGS = ["en", "ml", "hi"];

  const STR = {
    en: {
      welcome:
        "Hi — I’m your Health AI Assistant. Tell me how you feel, or tap a quick symptom below.",
      sectionSymptoms: "🩺 Symptoms",
      sectionRemedies: "🌿 Natural Remedies",
      sectionMedicines: "💊 Basic Medicines",
      sectionVideos: "🎥 Watch Remedy Videos",
      sectionAdvice: "⚠️ Advice",
      youtube: "YouTube",
      noSymptoms:
        "No specific symptoms were detected. Please describe what you are feeling (fever, pain, cough, etc.).",
      disclaimer:
        "Disclaimer: This assistant provides general health information only and is not a substitute for professional medical advice.",
      urgentLine: "Please seek immediate medical attention.",
      severeMedicineNote:
        "Do not rely on self-medication. Get urgent professional care first.",
      genericRemedies: [
        "Rest and drink plenty of fluids.",
        "Eat light, warm meals if you have appetite.",
        "Avoid smoking and alcohol while you recover.",
      ],
      adviceMild: [
        "Self-care at home is reasonable for mild symptoms.",
        "See a clinician if symptoms worsen or last longer than expected.",
      ],
      adviceModerate: [
        "Monitor your symptoms closely over the next 24–48 hours.",
        "Contact a healthcare provider if symptoms persist or get worse.",
      ],
      adviceSevereFollow: [
        "Call local emergency services or go to the nearest emergency department.",
        "Do not drive yourself if you feel faint or very unwell.",
      ],
      orsNote: "ORS can help if you may be dehydrated (loose stools, vomiting, or poor intake).",
      steamNote: "Steam inhalation may ease nasal congestion or throat irritation (use safe hot-water distance).",
      cetirizineNote:
        "Cetirizine may help mild allergy-type sneezing or itching — use only if you normally tolerate antihistamines.",
      paracetamolNote:
        "Paracetamol may help with fever or mild pain for many adults — follow pack instructions and avoid double dosing.",
      noOtc: "No specific OTC suggestion beyond rest and fluids for what you described.",
      listening: "Listening…",
      simulatedVoice: "Simulated voice input:",
      recording: "Recording… release to transcribe",
      voiceUnsupported:
        "Voice needs Chrome, Edge, or Safari (Web Speech). Serving a demo line instead.",
      voiceMicDenied: "Microphone blocked — allow mic for this site in the address bar.",
      voiceNoSpeech: "No speech detected — speak after release, or try again.",
      voiceNetwork: "Network error — check your connection and try again.",
      voiceGeneric: "Voice input failed — use http://localhost (not file://) and try again.",
      videoSearchLink: "YouTube search",
      videoWatch: "Watch on YouTube",
      sectionHospitals: "🏥 Nearby hospitals & clinics",
      hospitalBlurb:
        "If you allow location, we open Google Maps around you. You can also search Google for nearby hospitals.",
      hospitalMapsBtn: "Open Google Maps (near me)",
      hospitalGoogleBtn: "Search on Google",
    },
    ml: {
      welcome:
        "ഹായ് — ഞാൻ നിങ്ങളുടെ Health AI Assistant ആണ്. എങ്ങനെയുണ്ടെന്ന് പറയുക, അല്ലെങ്കിൽ ചുവടെയുള്ള ലക്ഷണങ്ങൾ തിരഞ്ഞെടുക്കുക.",
      sectionSymptoms: "🩺 ലക്ഷണങ്ങൾ",
      sectionRemedies: "🌿 പ്രകൃതിചികിത്സ",
      sectionMedicines: "💊 അടിസ്ഥാന മരുന്നുകൾ",
      sectionVideos: "🎥 ചികിത്സാ വീഡിയോകൾ",
      sectionAdvice: "⚠️ ഉപദേശം",
      youtube: "YouTube",
      noSymptoms:
        "തിരച്ചിലിൽ പ്രത്യേക ലക്ഷണങ്ങൾ കണ്ടെത്തിയില്ല. പനി, വേദന, ചുമ തുടങ്ങിയവ വിവരിക്കുക.",
      disclaimer:
        "നിരാകരണം: ഈ സഹായി പൊതുവായ ആരോഗ്യ വിവരങ്ങൾ മാത്രമാണ് നൽകുന്നത്; പ്രൊഫഷണൽ മെഡിക്കൽ ഉപദേശത്തിന് പകരമല്ല.",
      urgentLine: "ഉടൻ വൈദ്യസഹായം തേടുക.",
      severeMedicineNote:
        "സ്വയം മരുന്ന് ആശ്രയിക്കരുത്; ആദ്യം അടിയന്തര വൈദ്യസഹായം നേടുക.",
      genericRemedies: [
        "വിശ്രമിക്കുക, ധാരാളം വെള്ളം കുടിക്കുക.",
        "ഭക്ഷണക്ഷാമമുണ്ടെങ്കിൽ ലഘുവായ ചൂടുള്ള ഭക്ഷണം കഴിക്കുക.",
        "വീണ്ടെടുക്കൽ കാലത്ത് പുകവലിയും മദ്യവും ഒഴിവാക്കുക.",
      ],
      adviceMild: [
        "ലഘു ലക്ഷണങ്ങൾക്ക് വീട്ടിലെ സംരക്ഷണം മതിയാകും.",
        "ലക്ഷണങ്ങൾ മോശമാകുകയോ നീണ്ടുനിൽക്കുകയോ ചെയ്താൽ ഡോക്ടറെ കാണുക.",
      ],
      adviceModerate: [
        "അടുത്ത 24–48 മണിക്കൂറിൽ ലക്ഷണങ്ങൾ ശ്രദ്ധിക്കുക.",
        "തുടരുകയോ മോശമാകുകയോ ചെയ്താൽ ആരോഗ്യ പ്രൊഫഷണലുമായി ബന്ധപ്പെടുക.",
      ],
      adviceSevereFollow: [
        "അടിയന്തര സേവനങ്ങളെ വിളിക്കുക അല്ലെങ്കിൽ അടുത്ത ഇമർജൻസി വകുപ്പിൽ പോകുക.",
        "മയക്കം അല്ലെങ്കിൽ വളരെ ദുർബലത തോന്നിയാൽ സ്വയം വാഹനമോടിക്കരുത്.",
      ],
      orsNote: "വിറ്റിയോ വിശപ്പ് കുറവോ ഉണ്ടെങ്കിൽ ORS സഹായകരമായേക്കാം.",
      steamNote: "മൂക്കടപ്പോ തൊണ്ടവേദനയ്ക്ക് നീരാവി ശ്വസനം സഹായകരമായേക്കാം (സുരക്ഷിത ദൂരം പാലിക്കുക).",
      cetirizineNote:
        "ലഘു അലർജി തുമ്മലിനോ ചൊറിച്ചിലിനോ സെറ്റിറിസിൻ സഹായകരമായേക്കാം — നിങ്ങൾക്ക് അനുയോജ്യമാണെങ്കിൽ മാത്രം.",
      paracetamolNote:
        "പനിക്കോ ലഘു വേദനയ്ക്കോ പാരാസെറ്റമോൾ സഹായകരമായേക്കാം — പാക്കേജ് നിർദ്ദേശങ്ങൾ പാലിക്കുക.",
      noOtc: "വിവരിച്ചതിന് പുറമേ OTC നിർദ്ദേശമില്ല; വിശ്രമവും ദ്രാവകവും തുടരുക.",
      listening: "കേൾക്കുന്നു…",
      simulatedVoice: "സിമുലേറ്റഡ് വോയ്സ് ഇൻപുട്ട്:",
      recording: "റെക്കോർഡ് ചെയ്യുന്നു… വിട്ട് ട്രാൻസ്ക്രൈബ് ചെയ്യുക",
      voiceUnsupported:
        "വോയ്സിന് Chrome, Edge, Safari (Web Speech) വേണം. ഡെമോ വരി നൽകുന്നു.",
      voiceMicDenied: "മൈക്രോഫോൺ തടഞ്ഞു — സൈറ്റിന് മൈക്ക് അനുവദിക്കുക.",
      voiceNoSpeech: "സംസാരം കണ്ടില്ല — വിട്ട ശേഷം സംസാരിക്കുക അല്ലെങ്കിൽ വീണ്ടും ശ്രമിക്കുക.",
      voiceNetwork: "നെറ്റ് പിശക് — കണക്ഷൻ പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കുക.",
      voiceGeneric: "വോയ്സ് പരാജയം — file:// അല്ല, localhost ഉപയോഗിക്കുക.",
      videoSearchLink: "YouTube തിരയൽ",
      videoWatch: "YouTube-ൽ കാണുക",
      sectionHospitals: "🏥 അടുത്തുള്ള ആശുപത്രികളും ക്ലിനിക്കുകളും",
      hospitalBlurb:
        "ലൊക്കേഷൻ അനുവദിച്ചാൽ Google മാപ്പിൽ സമീപത്തുള്ള ആശുപത്രികൾ തുറക്കും. Google തിരയലും ഉപയോഗിക്കാം.",
      hospitalMapsBtn: "Google മാപ്പ് തുറക്കുക (സമീപം)",
      hospitalGoogleBtn: "Google-ൽ തിരയുക",
    },
    hi: {
      welcome:
        "नमस्ते — मैं आपका Health AI Assistant हूँ। बताइए आप कैसा महसूस कर रहे हैं, या नीचे लक्षण चुनें।",
      sectionSymptoms: "🩺 लक्षण",
      sectionRemedies: "🌿 घरेलू उपचार",
      sectionMedicines: "💊 बुनियादी दवाएँ",
      sectionVideos: "🎥 उपचार वीडियो",
      sectionAdvice: "⚠️ सलाह",
      youtube: "YouTube",
      noSymptoms:
        "कोई विशिष्ट लक्षण नहीं मिला। कृपया बताएँ कैसा महसूस हो रहा है (बुखार, दर्द, खाँसी आदि)।",
      disclaimer:
        "अस्वीकरण: यह सहायक केवल सामान्य स्वास्थ्य जानकारी देता है; पेशेवर चिकित्सा सलाह का विकल्प नहीं है।",
      urgentLine: "कृपया तुरंत चिकित्सा सहायता लें।",
      severeMedicineNote:
        "आत्म-दवा पर निर्भर न रहें; पहले तत्काल चिकित्सा सहायता लें।",
      genericRemedies: [
        "आराम करें और खूब पानी पिएँ।",
        "भूख हो तो हल्का गर्म खाना खाएँ।",
        "ठीक होने तक धूम्रपान और शराब से बचें।",
      ],
      adviceMild: [
        "हल्के लक्षणों के लिए घर पर देखभाल पर्याप्त हो सकती है।",
        "लक्षण बिगड़ें या असामान्य रूप से लंबे रहें तो डॉक्टर से मिलें।",
      ],
      adviceModerate: [
        "अगले 24–48 घंटों में लक्षणों पर नज़र रखें।",
        "लक्षण बने रहें या बिगड़ें तो स्वास्थ्य पेशेवर से संपर्क करें।",
      ],
      adviceSevereFollow: [
        "आपात सेवाओं को कॉल करें या नज़दीकी आपात कक्ष जाएँ।",
        "चक्कर या बहुत कमज़ोरी हो तो स्वयं गाड़ी न चलाएँ।",
      ],
      orsNote: "दस्त, उल्टी या कम पानी हो तो ORS मददगार हो सकता है।",
      steamNote: "नाक बंद या गले में जलन हो तो भाप लेना मदद कर सकता है (सुरक्षित दूरी रखें)।",
      cetirizineNote:
        "हल्की एलर्जी की छींक या खुजली में सेटिरिज़िन मदद कर सकता है — यदि आपको सूट करता है तभी।",
      paracetamolNote:
        "बुखार या हल्के दर्द में पैरासिटामोल मदद कर सकता है — पैक निर्देश पालन करें।",
      noOtc: "वर्णन के अनुसार OTC सुझाव नहीं; आराम और तरल पदार्थ जारी रखें।",
      listening: "सुन रहा हूँ…",
      simulatedVoice: "अनुकरण ध्वनि इनपुट:",
      recording: "रिकॉर्डिंग… छोड़कर ट्रांसक्राइब करें",
      voiceUnsupported:
        "आवाज़ के लिए Chrome, Edge, या Safari (Web Speech) चाहिए। डेमो पंक्ति दिखा रहे हैं।",
      voiceMicDenied: "माइक्रोफ़ोन ब्लॉक है — साइट के लिए माइक अनुमति दें।",
      voiceNoSpeech: "बोलना सुनाई नहीं दिया — छोड़ने के बाद बोलें या फिर कोशिश करें।",
      voiceNetwork: "नेटवर्क त्रुटि — कनेक्शन जाँचें।",
      voiceGeneric: "आवाज़ विफल — file:// नहीं, localhost इस्तेमाल करें।",
      videoSearchLink: "YouTube खोज",
      videoWatch: "YouTube पर देखें",
      sectionHospitals: "🏥 पास के अस्पताल और क्लिनिक",
      hospitalBlurb:
        "लोकेशन की अनुमति दें तो Google Maps आपके आसपास खुलेगा। Google पर खोज भी कर सकते हैं।",
      hospitalMapsBtn: "Google Maps (पास में)",
      hospitalGoogleBtn: "Google पर खोजें",
    },
  };

  const SYMPTOM_LABELS = {
    en: {
      fever: "fever",
      cold: "cold / congestion",
      headache: "headache",
      stomach_pain: "stomach pain",
      cough: "cough",
      body_pain: "body pain",
      allergy: "allergy-type symptoms",
    },
    ml: {
      fever: "പനി",
      cold: "തണുപ്പ് / മൂക്കൊലിപ്പ്",
      headache: "തലവേദന",
      stomach_pain: "വയറുവേദന",
      cough: "ചുമ",
      body_pain: "ശരീരവേദന",
      allergy: "അലർജി പോലുള്ള ലക്ഷണങ്ങൾ",
    },
    hi: {
      fever: "बुखार",
      cold: "जुकाम / नाक बहना",
      headache: "सिरदर्द",
      stomach_pain: "पेट दर्द",
      cough: "खाँसी",
      body_pain: "शरीर में दर्द",
      allergy: "एलर्जी जैसे लक्षण",
    },
  };

  const KEYWORDS = {
    fever: {
      en: ["fever", "temperature", "febrile", "feeling hot", "chills"],
      ml: [
        "പനി",
        "ചൂട്",
        "ജ്വരം",
        "നല്ല പനി",
        "നല്ല പനിയും",
        "പനിയും",
        "പനിയും ഉണ്ട്",
        "എനിക്ക് പനിയും",
        "പനി തലവേദന",
        "തലവേദനയും പനിയും",
        "pani",
        "panii",
        "panikuri",
        "peeni",
        "പനിയുണ്ട്",
        "enikku pani",
      ],
      hi: ["बुखार", "ताप", "ज्वर"],
    },
    cold: {
      en: ["cold", "runny nose", "congestion", "blocked nose", "sneezing", "flu-like"],
      ml: ["തണുപ്പ്", "മൂക്കൊലിപ്പ്", "തുമ്മൽ", "ജലദോഷം", "ജലദോഷം,പനി", "ജലദോഷവും", "jaladosham"],
      hi: ["जुकाम", "नाक बहना", "भारी नाक", "छींक"],
    },
    headache: {
      en: ["headache", "migraine", "head pain"],
      ml: ["തലവേദന", "തലയിൽ"],
      hi: ["सिरदर्द", "सिर में दर्द", "माइग्रेन"],
    },
    stomach_pain: {
      en: ["stomach pain", "stomach ache", "abdominal pain", "belly pain", "cramps", "nausea", "vomit", "loose stools", "diarrhea"],
      ml: ["വയറുവേദന", "വയറിൽ", "ഛർദ്ദി", "വയറിളക്കം"],
      hi: ["पेट दर्द", "पेट में दर्द", "उल्टी", "दस्त"],
    },
    cough: {
      en: ["cough", "coughing", "dry cough", "wet cough"],
      ml: ["ചുമ", "ചുമിക്കുന്നു"],
      hi: ["खाँसी", "कफ"],
    },
    body_pain: {
      en: ["body pain", "body ache", "muscle pain", "fatigue", "tiredness", "weakness", "more symptoms"],
      ml: ["ശരീരവേദന", "ക്ഷീണം", "ദുർബലത"],
      hi: ["शरीर में दर्द", "थकान", "कमजोरी"],
    },
    allergy: {
      en: ["allergy", "allergic", "itching", "rash", "hives", "sneezing fits"],
      ml: ["അലർജി", "ചൊറിച്ചിൽ"],
      hi: ["एलर्जी", "खुजली", "चकत्ते"],
    },
    chest_pain: {
      en: ["chest pain", "pain in chest", "heart pain", "crushing chest"],
      ml: ["മാറിടത്തിലെ വേദന", "ഇടത് മാറിൽ"],
      hi: ["छाती में दर्द", "सीने में दर्द"],
    },
    breath_difficulty: {
      en: ["difficulty breathing", "shortness of breath", "cannot breathe", "can't breathe", "breathless", "wheezing", "suffocat"],
      ml: ["ശ്വാസംമുട്ടൽ", "ശ്വാസകോശം"],
      hi: ["साँस लेने में तकलीफ", "दम फूलना", "सांस फूलना"],
    },
    unconscious: {
      en: ["unconscious", "passed out", "fainted", "blackout", "not waking"],
      ml: ["ബോധം കെട്ടു", "മയക്കം"],
      hi: ["बेहोश", "होश नहीं", "बेहोशी"],
    },
    severe_bleeding: {
      en: ["severe bleeding", "heavy bleeding", "blood loss", "hemorrhage"],
      ml: ["കടുത്ത രക്തസ്രാവം", "രക്തം കുറഞ്ഞു"],
      hi: ["भारी रक्तस्राव", "खून बह रहा"],
    },
    prolonged_high_fever: {
      en: ["fever for 3 days", "fever for 4 days", "fever for 5 days", "fever many days", "high fever for days", "fever more than 3 days", "fever since"],
      ml: ["പനി മൂന്ന് ദിവസം", "പനി നാല് ദിവസം", "ദിവസങ്ങളായി പനി"],
      hi: ["तीन दिन से बुखार", "कई दिनों से बुखार", "लंबे समय से बुखार"],
    },
  };

  const REMEDIES = {
    fever: {
      en: ["Drink warm fluids often.", "Rest in a cool, comfortable room.", "Use a light blanket if you feel cold."],
      ml: ["ചൂടുള്ള ദ്രാവകങ്ങൾ കുടിക്കുക.", "തണുപ്പുള്ള മുറിയിൽ വിശ്രമിക്കുക.", "തണുപ്പ് തോന്നിയാൽ ലഘു പുതപ്പ് ഉപയോഗിക്കുക."],
      hi: ["गर्म तरल पदार्थ पिएँ।", "ठंडे कमरे में आराम करें।", "ठंड लगे तो हल्का कम्बल ओढें।"],
    },
    cold: {
      en: ["Saline gargles may soothe the throat.", "Warm soups and herbal teas can help.", "Sleep with head slightly elevated if congested."],
      ml: ["ഉപ്പുവെള്ളം കൊണ്ട് ഗാർഗിൾ ചെയ്യാം.", "ചൂടുള്ള സൂപ്പും ഹർബൽ ചായയും സഹായിക്കും.", "മൂക്കടപ്പുണ്ടെങ്കിൽ തല ഉയർത്തി ഉറങ്ങുക."],
      hi: ["नमकीन गरारे से गला राहत पा सकता है।", "गर्म सूप और काढ़ा मदद कर सकते हैं।", "नाक बंद हो तो सिर थोड़ा उठाकर सोएँ।"],
    },
    headache: {
      en: ["Rest in a dark, quiet room.", "Apply a cool cloth to the forehead.", "Limit screen time and stay hydrated."],
      ml: ["ഇരുട്ടിലും നിശബ്ദതയിലും വിശ്രമിക്കുക.", "നെറ്റിയിൽ തണുത്ത തുണി വെക്കുക.", "സ്‌ക്രീൻ സമയം കുറയ്ക്കുക, വെള്ളം കുടിക്കുക."],
      hi: ["अँधेरे शांत कमरे में आराम करें।", "माथे पर ठंडा कपड़ा रखें।", "स्क्रीन कम करें और पानी पिएँ।"],
    },
    stomach_pain: {
      en: ["Try small, bland meals (rice, toast).", "Avoid spicy or greasy food for a short period.", "Gentle heat pad on the abdomen may help cramps."],
      ml: ["ചെറിയ ലഘു ഭക്ഷണം (ചോറ്, റൊട്ടി).", "കുറച്ചുനാൾ മസാലയും എണ്ണയും കുറയ്ക്കുക.", "വയറിൽ ചെറിയ ചൂട് സഹായകരമായേക്കാം."],
      hi: ["हल्का भोजन (चावल, टोस्ट) लें।", "कुछ दिन मसालेदार तला हुआ कम खाएँ।", "पेट पर हल्की गर्म सिकाई दर्द में मदद कर सकती है।"],
    },
    cough: {
      en: ["Honey (for adults) may soothe throat irritation — not for infants under 1 year.", "Warm water with salt gargle.", "Use a humidifier if air is very dry."],
      ml: ["തേൻ (പ്രായപൂർത്തിയായവർക്ക്) തൊണ്ടയ്ക്ക് ആശ്വാസം നൽകിയേക്കാം — ഒരു വയസ്സിന് താഴെയുള്ള കുഞ്ഞുങ്ങൾക്ക് അല്ല.", "ഉപ്പുവെള്ളം കൊണ്ട് ഗാർഗിൾ.", "വായു വരണ്ടെങ്കിൽ ഹ്യൂമിഡിഫയർ."],
      hi: ["शहद (वयस्कों के लिए) गले को आराम दे सकता है — 1 साल से कम बच्चों को न दें।", "नमकीन गरारे।", "हवा बहुत सूखी हो तो ह्यूमिडिफायर।"],
    },
    body_pain: {
      en: ["Gentle stretching and short walks if you can.", "Warm shower may relax muscles.", "Sleep on a supportive mattress."],
      ml: ["കഴിയുമെങ്കിൽ ലഘു വ്യായാമം, നടത്തം.", "ചൂടുകുളി പേശികളെ ശിഥിലമാക്കും.", "ആധാരവാതിലുള്ള കിടക്ക."],
      hi: ["हल्का खिंचाव और छोटी सैर करें।", "गर्म नहाने से मांसपेशियाँ ढीली हो सकती हैं।", "सहारे वाले गद्दे पर सोएँ।"],
    },
    allergy: {
      en: ["Avoid known triggers if you can identify them.", "Cool compress on itchy areas.", "Keep windows closed on high pollen days if relevant."],
      ml: ["ട്രിഗറുകൾ തിരിച്ചറിഞ്ഞാൽ ഒഴിവാക്കുക.", "ചൊറിച്ചിലുള്ള ഭാഗത്ത് തണുത്ത കംപ്രസ്.", "പരാഗണ ദിവസങ്ങളിൽ ജനലുകൾ അടയ്ക്കുക."],
      hi: ["ज्ञात एलर्जन से बचें।", "खुजली वाली जगह पर ठंडा सेक।", "पराग के दिन खिड़कियाँ बंद रखें।"],
    },
  };

  const VIDEO_PRESETS = [
    {
      img: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=600&auto=format&fit=crop&q=60",
      dur: "4:35",
    },
    {
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=60",
      dur: "5:10",
    },
  ];

  const VIDEO_TITLES = {
    fever: {
      en: ["Home Remedies for Fever and Cold", "Natural Ways to Reduce Fever at Home"],
      ml: ["പനിക്കുള്ള വീട്ടുവൈദ്യങ്ങൾ", "പ്രകൃതിദത്ത പനി നിയന്ത്രണം"],
      hi: ["बुखार के घरेलू उपाय", "प्राकृतिक तरीके से बुखार कम करना"],
    },
    headache: {
      en: ["Home Remedies for Headache Relief", "Natural Ways to Ease Severe Headache"],
      ml: ["തലവേദനയ്ക്കുള്ള വീട്ടുവൈദ്യങ്ങൾ", "തലവേദന കുറയ്ക്കാനുള്ള പ്രകൃതിദത്ത മാർഗങ്ങൾ"],
      hi: ["सिरदर्द में राहत के घरेलू उपाय", "तेज सिरदर्द कम करने के प्राकृतिक तरीके"],
    },
    cold: {
      en: ["Soothing Remedies for Cold and Congestion", "Steam and Fluids for a Stuffy Nose"],
      ml: ["ജലദോഷത്തിനുള്ള ആശ്വാസ ചികിത്സ", "മൂക്കടപ്പിന് നീരാവിയും ദ്രാവകവും"],
      hi: ["जुकाम और नाक बंद के लिए उपाय", "भाप और तरल पदार्थ से राहत"],
    },
    cough: {
      en: ["Home Care Tips for Cough", "Natural Relief for Dry and Wet Cough"],
      ml: ["ചുമയ്ക്കുള്ള വീട്ടുസംരക്ഷണ മാർഗങ്ങൾ", "വരണ്ട/കഫചുമയ്ക്ക് പ്രകൃതിദത്ത ആശ്വാസം"],
      hi: ["खांसी के लिए घरेलू देखभाल", "सूखी और बलगम वाली खांसी में प्राकृतिक राहत"],
    },
    stomach_pain: {
      en: ["Home Remedies for Stomach Pain", "Natural Relief for Stomach Cramps"],
      ml: ["വയറുവേദനയ്ക്കുള്ള വീട്ടുവൈദ്യങ്ങൾ", "വയറുമുറുക്കത്തിന് പ്രകൃതിദത്ത ആശ്വാസം"],
      hi: ["पेट दर्द के घरेलू उपाय", "पेट में मरोड़ के लिए प्राकृतिक राहत"],
    },
    allergy: {
      en: ["Allergy Relief at Home", "Natural Tips for Sneezing and Itching"],
      ml: ["അലർജിക്ക് വീട്ടിൽ ആശ്വാസം", "തുമ്മലും ചൊറിച്ചിലും കുറയ്ക്കാൻ പ്രകൃതിദത്ത നുറുങ്ങുകൾ"],
      hi: ["एलर्जी में घरेलू राहत", "छींक और खुजली के लिए प्राकृतिक सुझाव"],
    },
    body_pain: {
      en: ["Home Relief for Body Pain", "Gentle Stretch and Recovery Tips"],
      ml: ["ശരീരവേദനയ്ക്ക് വീട്ടിൽ ആശ്വാസം", "ലഘു വ്യായാമവും വീണ്ടെടുപ്പും"],
      hi: ["शरीर दर्द में घरेलू राहत", "हल्की स्ट्रेच और रिकवरी टिप्स"],
    },
    default: {
      en: ["Simple Home Wellness Tips", "Gentle Self-Care for Common Symptoms"],
      ml: ["ലഘു വീട്ടുവെൽനസ് നുറുങ്ങുകൾ", "പൊതുവായ ലക്ഷണങ്ങൾക്ക് സൗമ്യ സംരക്ഷണം"],
      hi: ["घरेलू सेहत के सरल उपाय", "सामान्य लक्षणों के लिए हल्की देखभाल"],
    },
  };

  const SIMULATED_TRANSCRIPTS = {
    en: [
      "I have fever and headache",
      "I have cough and cold",
      "Chest pain and difficulty breathing",
      "I have stomach pain since yesterday",
    ],
    ml: ["എനിക്ക് പനിയും തലവേദനയുമുണ്ട്", "എനിക്ക് ചുമയും മൂക്കൊലിപ്പുമുണ്ട്", "വയറുവേദന"],
    hi: ["मुझे बुखार और सिरदर्द है", "मुझे खाँसी और जुकाम है", "साँस लेने में तकलीफ है"],
  };

  /** Roman / Manglish words commonly typed instead of Malayalam script */
  const MANGlish_MALAYALAM = /\b(pani|panii|panikuri|peeni|enikku\s+pani|thalavedana|chumann|chumma|jedam|jedapeda|viralukal|vayaru\s*vedana)\b/i;

  function detectLanguage(text) {
    if (/[\u0D00-\u0D7F]/.test(text)) return "ml";
    if (/[\u0900-\u097F]/.test(text)) return "hi";
    if (MANGlish_MALAYALAM.test(text)) return "ml";
    return "en";
  }

  function resolveLang(text, selectValue) {
    if (selectValue && selectValue !== "auto") return selectValue;
    return detectLanguage(text);
  }

  function normalize(text) {
    const t = (text || "").trim();
    return t.normalize ? t.normalize("NFC") : t;
  }

  function extractSymptoms(text) {
    const n = normalize(text).toLowerCase();
    const found = new Set();
    for (const [id, langs] of Object.entries(KEYWORDS)) {
      for (const lang of LANGS) {
        const words = langs[lang] || langs.en;
        for (const w of words) {
          if (n.includes(w.toLowerCase())) {
            found.add(id);
            break;
          }
        }
      }
    }
    if (/\b(fever|പനി|बुखार)\b/i.test(text) && /\b(\d+)\s*(day|days|ദിവസ|दिन)/i.test(text)) {
      const m = text.match(/\b(\d+)\s*(day|days|ദിവസ|दिन)/i);
      if (m && Number(m[1]) >= 3) found.add("prolonged_high_fever");
    }
    return [...found];
  }

  function isSevereUrgent(ids) {
    const urgent = new Set([
      "chest_pain",
      "breath_difficulty",
      "unconscious",
      "severe_bleeding",
      "prolonged_high_fever",
    ]);
    return ids.some((id) => urgent.has(id));
  }

  function clinicalSymptoms(ids) {
    return ids.filter(
      (id) =>
        !["chest_pain", "breath_difficulty", "unconscious", "severe_bleeding", "prolonged_high_fever"].includes(id)
    );
  }

  function severityFor(ids, severe) {
    if (severe) return "severe";
    const c = clinicalSymptoms(ids);
    if (c.length >= 3) return "moderate";
    if (c.includes("fever") && c.includes("cough")) return "moderate";
    if (c.includes("stomach_pain") && ids.some((x) => ["fever", "cold"].includes(x))) return "moderate";
    if (c.length === 0) return "mild";
    return "mild";
  }

  function uniqRemedies(ids, lang) {
    const out = [];
    const seen = new Set();
    const clinical = clinicalSymptoms(ids);
    const keys = clinical.length ? clinical : [];
    for (const k of keys) {
      const block = REMEDIES[k];
      if (!block) continue;
      const lines = block[lang] || block.en;
      for (const line of lines) {
        if (!seen.has(line)) {
          seen.add(line);
          out.push(line);
        }
      }
    }
    if (out.length < 3) {
      for (const line of STR[lang].genericRemedies) {
        if (!seen.has(line)) {
          seen.add(line);
          out.push(line);
        }
        if (out.length >= 5) break;
      }
    }
    return out.slice(0, 6);
  }

  function buildMedicineLines(ids, lang, severe) {
    if (severe) return [STR[lang].severeMedicineNote];
    const c = clinicalSymptoms(ids);
    const lines = [];
    if (c.some((x) => ["fever", "headache", "body_pain", "cold"].includes(x))) {
      lines.push(STR[lang].paracetamolNote);
    }
    if (c.includes("allergy")) lines.push(STR[lang].cetirizineNote);
    if (c.includes("cold") || c.includes("cough")) lines.push(STR[lang].steamNote);
    if (c.includes("stomach_pain")) lines.push(STR[lang].orsNote);
    if (!lines.length) lines.push(STR[lang].noOtc);
    return lines;
  }

  function symptomSummaryLine(ids, lang) {
    const c = clinicalSymptoms(ids);
    if (!c.length) return STR[lang].noSymptoms;
    const labels = c.map((id) => SYMPTOM_LABELS[lang][id] || SYMPTOM_LABELS.en[id]).filter(Boolean);
    if (lang === "ml") {
      return `നിങ്ങൾ പറഞ്ഞത്: ${labels.join(", ")}.`;
    }
    if (lang === "hi") {
      return `आपने बताया: ${labels.join(", ")}।`;
    }
    return `You mentioned: ${labels.join(", ")}.`;
  }

  function pickVideoTitles(ids, lang) {
    const c = clinicalSymptoms(ids);
    let key = "default";
    if (c.includes("headache")) key = "headache";
    else if (c.includes("fever")) key = "fever";
    else if (c.includes("cold")) key = "cold";
    else if (c.includes("cough")) key = "cough";
    else if (c.includes("stomach_pain")) key = "stomach_pain";
    else if (c.includes("allergy")) key = "allergy";
    else if (c.includes("body_pain")) key = "body_pain";
    const pack = VIDEO_TITLES[key] || VIDEO_TITLES.default;
    return pack[lang] || pack.en;
  }

  function adviceLines(severity, lang, severe) {
    if (severe) {
      return [STR[lang].urgentLine, ...STR[lang].adviceSevereFollow];
    }
    if (severity === "moderate") return [...STR[lang].adviceModerate];
    return [...STR[lang].adviceMild];
  }

  function severityLabel(sev, lang) {
    if (lang === "ml") {
      if (sev === "severe") return "ഗുരുതരം";
      if (sev === "moderate") return "മിതം";
      return "ലഘു";
    }
    if (lang === "hi") {
      if (sev === "severe") return "गंभीर";
      if (sev === "moderate") return "मध्यम";
      return "हल्का";
    }
    if (sev === "severe") return "Severe";
    if (sev === "moderate") return "Moderate";
    return "Mild";
  }

  function buildResponse(userText, memoryTexts, selectValue) {
    const context = [...memoryTexts, userText].join(" ");
    const ids = extractSymptoms(context);
    const lang = resolveLang(userText, selectValue);
    const severe = isSevereUrgent(ids);
    const severity = severityFor(ids, severe);
    const L = STR[lang] || STR.en;
    const remedies = uniqRemedies(ids, lang);
    const meds = buildMedicineLines(ids, lang, severe);
    const titles = pickVideoTitles(ids, lang);
    const advice = adviceLines(severity, lang, severe);

    return {
      lang,
      ids,
      severe,
      severity,
      symptomsLine: symptomSummaryLine(ids, lang),
      remedies,
      medicines: meds,
      videoTitles: titles,
      advice,
      disclaimer: L.disclaimer,
      sections: L,
      sevLabel: severityLabel(severity, lang),
    };
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatTime(d) {
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  const YOUTUBE_API_KEY_STORAGE = "healthAssistantYoutubeApiKey";

  function getStoredYoutubeApiKey() {
    try {
      return (
        (typeof window !== "undefined" && window.HEALTH_ASSISTANT_YOUTUBE_API_KEY) ||
        localStorage.getItem(YOUTUBE_API_KEY_STORAGE) ||
        ""
      ).trim();
    } catch {
      return (typeof window !== "undefined" && window.HEALTH_ASSISTANT_YOUTUBE_API_KEY) || "";
    }
  }

  function formatISO8601Duration(iso) {
    if (!iso || typeof iso !== "string") return "";
    const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!m) return "";
    const h = Number(m[1] || 0);
    const mi = Number(m[2] || 0);
    const s = Number(m[3] || 0);
    if (h) return `${h}:${String(mi).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    return `${mi}:${String(s).padStart(2, "0")}`;
  }

  async function fetchYoutubeSearchSingle(q, apiKey, relevanceLang) {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("type", "video");
    url.searchParams.set("maxResults", "1");
    url.searchParams.set("q", q);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("safeSearch", "strict");
    if (relevanceLang) url.searchParams.set("relevanceLanguage", relevanceLang);
    const r = await fetch(url.toString());
    if (!r.ok) throw new Error("youtube_search");
    const j = await r.json();
    const item = j.items && j.items[0];
    if (!item || !item.id || !item.id.videoId) return null;
    const th =
      (item.snippet.thumbnails && item.snippet.thumbnails.medium && item.snippet.thumbnails.medium.url) ||
      (item.snippet.thumbnails && item.snippet.thumbnails.default && item.snippet.thumbnails.default.url) ||
      "";
    return {
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumb: th,
      channel: item.snippet.channelTitle || "YouTube",
    };
  }

  async function fetchYoutubeDurations(videoIds, apiKey) {
    if (!videoIds.length) return {};
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "contentDetails");
    url.searchParams.set("id", videoIds.join(","));
    url.searchParams.set("key", apiKey);
    const r = await fetch(url.toString());
    if (!r.ok) return {};
    const j = await r.json();
    const map = {};
    for (const it of j.items || []) {
      if (it.id && it.contentDetails) map[it.id] = it.contentDetails.duration;
    }
    return map;
  }

  function buildYoutubeQueriesFromResponse(data) {
    const t0 = data.videoTitles[0] || "home remedy health";
    const t1 = data.videoTitles[1] || data.videoTitles[0] || "natural wellness tips";
    const symptomLabels = clinicalSymptoms(data.ids || [])
      .map((id) => (SYMPTOM_LABELS[data.lang] || SYMPTOM_LABELS.en)[id] || SYMPTOM_LABELS.en[id])
      .filter(Boolean)
      .join(" ");
    const focus = symptomLabels || "common symptoms";
    const q1 = `${t0} ${focus} home remedy how to`;
    const q2 = `${t1} ${focus} natural remedy at home`;
    return [q1, q2];
  }

  function youtubeSearchUrl(query) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }

  function fallbackVideoSlots(data) {
    const L = data.sections;
    const titles = data.videoTitles;
    const [q1, q2] = buildYoutubeQueriesFromResponse(data);
    return [
      {
        href: youtubeSearchUrl(q1),
        thumb: VIDEO_PRESETS[0].img,
        title: titles[0] || "Home remedy",
        durationLabel: "",
        isSearchLink: true,
      },
      {
        href: youtubeSearchUrl(q2),
        thumb: VIDEO_PRESETS[1].img,
        title: titles[1] || titles[0] || "Natural remedy",
        durationLabel: "",
        isSearchLink: true,
      },
    ];
  }

  async function resolveYoutubeVideosForResponse(data) {
    const apiKey = getStoredYoutubeApiKey();
    const rel = data.lang === "ml" ? "ml" : data.lang === "hi" ? "hi" : "en";
    const [q1, q2] = buildYoutubeQueriesFromResponse(data);

    if (!apiKey) {
      return fallbackVideoSlots(data);
    }

    try {
      let first = await fetchYoutubeSearchSingle(q1, apiKey, rel);
      let second = await fetchYoutubeSearchSingle(q2, apiKey, rel);
      if (first && second && first.videoId === second.videoId) {
        second = await fetchYoutubeSearchSingle(`${q2} tips alternative`, apiKey, rel);
      }
      const raw = [first, second].filter(Boolean);
      const unique = [];
      const seen = new Set();
      for (const it of raw) {
        if (seen.has(it.videoId)) continue;
        seen.add(it.videoId);
        unique.push(it);
      }
      if (unique.length < 2) {
        const third = await fetchYoutubeSearchSingle("gentle home health self care tips", apiKey, "en");
        if (third && !seen.has(third.videoId)) unique.push(third);
      }
      if (!unique.length) return fallbackVideoSlots(data);

      const ids = unique.slice(0, 2).map((x) => x.videoId);
      const durMap = await fetchYoutubeDurations(ids, apiKey);
      const L = data.sections;

      return unique.slice(0, 2).map((it) => {
        const dur = formatISO8601Duration(durMap[it.videoId]);
        const thumb = it.thumb || `https://img.youtube.com/vi/${it.videoId}/mqdefault.jpg`;
        return {
          href: `https://www.youtube.com/watch?v=${it.videoId}`,
          thumb,
          title: it.title,
          durationLabel: dur || "—",
          metaLine: it.channel || L.videoWatch,
          isSearchLink: false,
        };
      });
    } catch {
      return fallbackVideoSlots(data);
    }
  }

  function renderVideoGridHtml(videos, L) {
    return videos
      .map((v) => {
        let meta = "";
        if (v.isSearchLink) {
          meta = `<span class="video-meta-search">${escapeHtml(L.videoSearchLink)}</span>`;
        } else {
          const dur = v.durationLabel ? `<b>${escapeHtml(v.durationLabel)}</b> · ` : "";
          meta = `${dur}<span>${escapeHtml(v.metaLine || L.youtube)}</span>`;
        }
        return `<a class="video-card" href="${escapeHtml(v.href)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(L.videoWatch)}">
      <img src="${escapeHtml(v.thumb)}" alt="" loading="lazy" />
      <span class="play" aria-hidden="true">▶</span>
      <p>${escapeHtml(v.title)} ${meta}</p>
    </a>`;
      })
      .join("");
  }

  function googleHospitalSearchUrl() {
    return `https://www.google.com/search?q=${encodeURIComponent("hospitals and clinics near me open now")}`;
  }

  function openNearbyHospitals() {
    const fallback = () => {
      window.open("https://www.google.com/maps/search/hospital+near+me/", "_blank", "noopener,noreferrer");
    };
    if (!navigator.geolocation) {
      fallback();
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        window.open(
          `https://www.google.com/maps/search/hospital+clinic/@${latitude},${longitude},14z`,
          "_blank",
          "noopener,noreferrer"
        );
      },
      fallback,
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }
    );
  }

  function renderBotCard(data) {
    const L = data.sections;
    const sevClass = data.severity === "severe" ? "severe" : data.severity === "moderate" ? "moderate" : "mild";
    const urgentBlock = data.severe
      ? `<p class="severe-banner">${escapeHtml(L.urgentLine)}</p>`
      : "";
    const remediesHtml = data.remedies.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
    const medsHtml = data.medicines.map((m) => `<p>${escapeHtml(m)}</p>`).join("");
    const videos = data.youtubeVideos || fallbackVideoSlots(data);
    const videoGridHtml = renderVideoGridHtml(videos, L);
    const adviceHtml = data.advice.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
    const gSearch = googleHospitalSearchUrl();
    const hospitalBlock = `
  <h5>${escapeHtml(L.sectionHospitals)}</h5>
  <p>${escapeHtml(L.hospitalBlurb)}</p>
  <div class="hospital-links">
    <a href="${escapeHtml(gSearch)}" class="hospital-link" target="_blank" rel="noopener noreferrer">${escapeHtml(
      L.hospitalGoogleBtn
    )}</a>
  </div>`;

    return `
<article class="bot-card glass-card fade-in" lang="${data.lang}">
  ${urgentBlock}
  <h4>${escapeHtml(L.sectionSymptoms)}</h4>
  <p>${escapeHtml(data.symptomsLine)}</p>
  <h5>${escapeHtml(L.sectionRemedies)}</h5>
  <ul>${remediesHtml}</ul>
  <h5>${escapeHtml(L.sectionMedicines)}</h5>
  ${medsHtml}
  <h5>${escapeHtml(L.sectionVideos)}</h5>
  <div class="video-grid">
    ${videoGridHtml}
  </div>
  ${hospitalBlock}
  <h5>${escapeHtml(L.sectionAdvice)} <span class="severity ${sevClass}">${escapeHtml(data.sevLabel)}</span></h5>
  <ul>${adviceHtml}</ul>
  <p class="disclaimer">${escapeHtml(data.disclaimer)}</p>
  <p class="card-time">${escapeHtml(formatTime(new Date()))}</p>
</article>`;
  }

  function renderUserBubble(text) {
    return `<div class="message user-msg">${escapeHtml(text)} <small>${escapeHtml(formatTime(new Date()))}</small></div>`;
  }

  function renderWelcomeCard(lang) {
    const L = STR[lang] || STR.en;
    return `<article class="bot-card glass-card welcome-card"><p>${escapeHtml(L.welcome)}</p></article>`;
  }

  /* ——— DOM & interactions ——— */

  const chatStream = document.getElementById("chatStream");
  const typingIndicator = document.getElementById("typingIndicator");
  const messageInput = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const micButton = document.getElementById("micButton");
  const recordingState = document.getElementById("recordingState");
  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const ttsBtn = document.getElementById("ttsBtn");
  const emojiBtn = document.getElementById("emojiBtn");
  const historyList = document.getElementById("historyList");
  const quickChips = document.getElementById("quickChips");
  const quickSuggestList = document.getElementById("quickSuggestList");
  const sideNav = document.getElementById("sideNav");

  let memoryUserTexts = [];
  const MAX_MEMORY = 6;
  let ttsEnabled = false;
  let micPressStart = 0;
  let recognition = null;
  let voiceCaptureBusy = false;
  let micPointerId = null;
  const MIC_HOLD_MS = 280;

  function setTyping(on) {
    if (!typingIndicator) return;
    typingIndicator.classList.toggle("hidden", !on);
    typingIndicator.setAttribute("aria-hidden", on ? "false" : "true");
  }

  function scrollChatToBottom() {
    const win = document.getElementById("chatWindow");
    if (win) win.scrollTop = win.scrollHeight;
  }

  function showToast(message, ms) {
    const el = document.getElementById("toast");
    if (!el) return;
    const dur = ms == null ? 3200 : ms;
    el.textContent = message;
    el.classList.add("visible");
    window.clearTimeout(showToast._hideTimer);
    showToast._hideTimer = window.setTimeout(() => el.classList.remove("visible"), dur);
  }

  function setNavActive(which) {
    sideNav?.querySelectorAll(".nav-item").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-nav") === which);
    });
  }

  function bindSideNav() {
    sideNav?.addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-item[data-nav]");
      if (!btn) return;
      const nav = btn.getAttribute("data-nav");
      setNavActive(nav || "chat");
      const chatWin = document.getElementById("chatWindow");
      const histPanel = document.getElementById("historyPanel");
      const ytPanel = document.querySelector(".youtube-api-panel");

      if (nav === "chat") {
        chatWin?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        messageInput?.focus();
        return;
      }
      if (nav === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast("Health AI Assistant — your daily wellness companion.");
        return;
      }
      if (nav === "history") {
        histPanel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        showToast("Chat history and recent topics are on the right.");
        return;
      }
      if (nav === "reminders") {
        showToast("Tip: use your phone calendar for medicine times and follow-up visits.");
        return;
      }
      if (nav === "nearby") {
        openNearbyHospitals();
        showToast("Opening Google Maps for hospitals near you…");
        return;
      }
      if (nav === "settings") {
        ytPanel?.setAttribute("open", "");
        ytPanel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        showToast("Options: YouTube API key below the quick chips. Use Dark Mode in the sidebar.");
        return;
      }
    });
  }

  function bindGlobalUi() {
    document.getElementById("nearbyHelpCard")?.addEventListener("click", () => {
      openNearbyHospitals();
    });
    document.getElementById("historyViewAll")?.addEventListener("click", (e) => {
      e.preventDefault();
      setNavActive("history");
      document.getElementById("historyPanel")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    chatStream?.addEventListener("click", (e) => {
      const a = e.target.closest("a.js-open-maps-hospitals");
      if (!a) return;
      e.preventDefault();
      openNearbyHospitals();
    });
  }

  function pushHistorySnippet(text) {
    if (!historyList) return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const small = document.createElement("small");
    const preview = text.length > 42 ? text.slice(0, 40) + "…" : text;
    span.textContent = preview;
    small.textContent = formatTime(new Date());
    li.appendChild(span);
    li.appendChild(small);
    historyList.insertBefore(li, historyList.firstChild);
    while (historyList.children.length > 12) {
      historyList.removeChild(historyList.lastChild);
    }
  }

  function speakBotReply(plainText, langCode) {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plainText);
    const map = { en: "en-IN", ml: "ml-IN", hi: "hi-IN" };
    u.lang = map[langCode] || "en-IN";
    window.speechSynthesis.speak(u);
  }

  function plainTextFromResponse(data) {
    const vids = data.youtubeVideos || [];
    const videoBits = vids.map((v) => `${v.title}. ${v.href}`);
    const L = data.sections;
    const parts = [
      data.symptomsLine,
      ...data.remedies,
      ...data.medicines,
      ...videoBits,
      L.sectionHospitals,
      L.hospitalBlurb,
      googleHospitalSearchUrl(),
      ...data.advice,
      data.disclaimer,
    ];
    return parts.join(". ");
  }

  function processUserMessage(rawText) {
    const text = normalize(rawText);
    if (!text) return;

    memoryUserTexts.push(text);
    if (memoryUserTexts.length > MAX_MEMORY) memoryUserTexts.shift();

    chatStream.insertAdjacentHTML("beforeend", renderUserBubble(text));
    messageInput.value = "";
    scrollChatToBottom();
    setTyping(true);

    const selectVal = languageSelect ? languageSelect.value : "auto";
    void (async () => {
      await new Promise((r) => setTimeout(r, 450));
      const data = buildResponse(text, memoryUserTexts.slice(0, -1), selectVal);
      if (languageSelect && languageSelect.value === "auto") {
        languageSelect.value = data.lang;
      }
      try {
        data.youtubeVideos = await resolveYoutubeVideosForResponse(data);
      } catch {
        data.youtubeVideos = fallbackVideoSlots(data);
      }
      chatStream.insertAdjacentHTML("beforeend", renderBotCard(data));
      setTyping(false);
      pushHistorySnippet(text);
      scrollChatToBottom();
      speakBotReply(plainTextFromResponse(data), data.lang);
    })();
  }

  function bindSend() {
    sendBtn?.addEventListener("click", () => processUserMessage(messageInput?.value || ""));
    messageInput?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        processUserMessage(messageInput.value);
      }
    });
  }

  function bindChips(container) {
    if (!container) return;
    container.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-query]");
      if (!btn) return;
      const q = btn.getAttribute("data-query");
      if (q) processUserMessage(q);
    });
  }

  function bindQuickSuggest() {
    if (!quickSuggestList) return;
    quickSuggestList.addEventListener("click", (e) => {
      const li = e.target.closest("li[data-query]");
      if (!li) return;
      processUserMessage(li.getAttribute("data-query") || "");
    });
    quickSuggestList.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const li = e.target.closest("li[data-query]");
      if (!li) return;
      e.preventDefault();
      processUserMessage(li.getAttribute("data-query") || "");
    });
  }

  themeToggle?.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
  });

  ttsBtn?.addEventListener("click", () => {
    ttsEnabled = !ttsEnabled;
    ttsBtn.classList.toggle("tts-on", ttsEnabled);
    ttsBtn.setAttribute("aria-pressed", ttsEnabled ? "true" : "false");
    if (!ttsEnabled) window.speechSynthesis?.cancel();
  });

  emojiBtn?.addEventListener("click", () => {
    if (!messageInput) return;
    messageInput.value += " 🙂 ";
    messageInput.focus();
  });

  function pickSimulatedTranscript() {
    const v = languageSelect?.value;
    const pool =
      v === "ml"
        ? SIMULATED_TRANSCRIPTS.ml
        : v === "hi"
          ? SIMULATED_TRANSCRIPTS.hi
          : v === "en"
            ? SIMULATED_TRANSCRIPTS.en
            : [...SIMULATED_TRANSCRIPTS.en, ...SIMULATED_TRANSCRIPTS.ml, ...SIMULATED_TRANSCRIPTS.hi];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function attachRecognitionHandlers(rec) {
    rec.interimResults = false;
    rec.continuous = false;
    rec.maxAlternatives = 1;
    rec.onresult = (ev) => {
      const t = ev.results[0][0].transcript;
      if (messageInput) messageInput.value = (messageInput.value + " " + t).trim();
      recordingState?.classList.add("hidden");
      micButton?.classList.remove("recording");
      voiceCaptureBusy = false;
    };
    rec.onerror = (ev) => {
      const err = ev.error || "";
      const uiLang = getUiLang();
      const UI = STR[uiLang] || STR.en;
      micButton?.classList.remove("recording");
      voiceCaptureBusy = false;
      recognition = null;
      if (err === "aborted") {
        recordingState?.classList.add("hidden");
        return;
      }
      let msg = UI.voiceGeneric;
      if (err === "not-allowed" || err === "service-not-allowed") msg = UI.voiceMicDenied;
      else if (err === "no-speech") msg = UI.voiceNoSpeech;
      else if (err === "network") msg = UI.voiceNetwork;
      if (recordingState) {
        recordingState.textContent = msg;
        recordingState.classList.remove("hidden");
      }
      window.setTimeout(() => recordingState?.classList.add("hidden"), 4500);
    };
    rec.onend = () => {
      micButton?.classList.remove("recording");
      voiceCaptureBusy = false;
    };
  }

  function startSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return false;
    if (!recognition) {
      recognition = new SR();
      attachRecognitionHandlers(recognition);
    }
    const langMap = { en: "en-IN", ml: "ml-IN", hi: "hi-IN" };
    const sel = languageSelect?.value;
    recognition.lang = sel && sel !== "auto" ? langMap[sel] || "en-IN" : "en-IN";
    try {
      recognition.start();
      return true;
    } catch (e) {
      try {
        recognition.abort();
      } catch (_) {}
      recognition = null;
      voiceCaptureBusy = false;
      return false;
    }
  }

  function runVoiceCapture() {
    if (voiceCaptureBusy) return;
    voiceCaptureBusy = true;
    const uiLang = getUiLang();
    const UI = STR[uiLang] || STR.en;
    const ok = startSpeechRecognition();
    if (!ok) {
      const sim = pickSimulatedTranscript();
      if (recordingState) {
        recordingState.textContent = `${UI.voiceUnsupported} ${sim}`;
        recordingState.classList.remove("hidden");
      }
      window.setTimeout(() => {
        if (messageInput) messageInput.value = sim;
        recordingState?.classList.add("hidden");
        micButton?.classList.remove("recording");
        voiceCaptureBusy = false;
      }, 700);
    } else if (recordingState) {
      recordingState.textContent = (STR[uiLang] || STR.en).listening;
      recordingState.classList.remove("hidden");
    }
  }

  function getUiLang() {
    if (!languageSelect || languageSelect.value === "auto") return "ml";
    return languageSelect.value;
  }

  function micDown() {
    micPressStart = Date.now();
    recordingState?.classList.remove("hidden");
    const uiLang = getUiLang();
    if (recordingState) recordingState.textContent = (STR[uiLang] || STR.en).recording;
    micButton?.classList.add("recording");
  }

  function micPointerEnd() {
    if (micPointerId == null) return;
    micPointerId = null;
    const held = Date.now() - micPressStart;
    if (held < MIC_HOLD_MS) {
      recordingState?.classList.add("hidden");
      micButton?.classList.remove("recording");
      return;
    }
    runVoiceCapture();
  }

  micButton?.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    micPointerId = e.pointerId;
    try {
      micButton?.setPointerCapture(e.pointerId);
    } catch (_) {}
    micDown();
  });
  micButton?.addEventListener("pointerup", (e) => {
    if (e.pointerId !== micPointerId) return;
    try {
      micButton?.releasePointerCapture(e.pointerId);
    } catch (_) {}
    micPointerEnd();
  });
  micButton?.addEventListener("pointercancel", (e) => {
    if (e.pointerId !== micPointerId) return;
    micPointerId = null;
    recordingState?.classList.add("hidden");
    micButton?.classList.remove("recording");
  });

  languageSelect?.addEventListener("change", () => {
    languageSelect.title =
      languageSelect.value === "auto"
        ? "Replies match the language you type"
        : `Replies forced to ${languageSelect.value}`;
  });

  function initYoutubeKeyPanel() {
    const input = document.getElementById("youtubeApiKeyInput");
    const saveBtn = document.getElementById("youtubeApiKeySave");
    const clearBtn = document.getElementById("youtubeApiKeyClear");
    if (input) {
      input.value = "";
      input.placeholder = getStoredYoutubeApiKey()
        ? "API key saved in this browser — paste a new key to replace"
        : "Paste YouTube Data API v3 key";
    }
    saveBtn?.addEventListener("click", () => {
      const v = (input?.value || "").trim();
      if (!v) return;
      try {
        localStorage.setItem(YOUTUBE_API_KEY_STORAGE, v);
      } catch (_) {}
      if (input) {
        input.value = "";
        input.placeholder = "API key saved — paste new to replace";
      }
    });
    clearBtn?.addEventListener("click", () => {
      try {
        localStorage.removeItem(YOUTUBE_API_KEY_STORAGE);
      } catch (_) {}
      if (input) {
        input.value = "";
        input.placeholder = "Paste YouTube Data API v3 key";
      }
    });
  }

  function init() {
    const startLang = languageSelect?.value && languageSelect.value !== "auto" ? languageSelect.value : "en";
    if (chatStream) {
      chatStream.innerHTML = renderWelcomeCard(startLang);
    }
    bindSend();
    bindChips(quickChips);
    bindQuickSuggest();
    initYoutubeKeyPanel();
    bindSideNav();
    bindGlobalUi();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
