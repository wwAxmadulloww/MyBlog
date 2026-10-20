export const profile = {
  name: 'Axmadullo Abdurashidov',
  fullName: "Abdurashidov Axmadullo Mamatqul O‘g‘li",
  alternateNames: [
    'Axmadullo Abdurashidov',
    'Abdurashidov Axmadullo',
    "Abdurashidov Axmadullo Mamatqul O‘g‘li",
    "Axmadullo Mamatqul O‘g‘li Abdurashidov",
  ],
  role: 'FullStack dasturchisi · Dasturiy injiniring talabasi',
  siteUrl: 'https://axmadullo.uz',
  tagline:
    "Real muammolarni AI va web texnologiyalar bilan yechaman — foydali mahsulotlar uchun.",
  university:
    "Farg'ona davlat texnika universiteti — Telekommunikatsiya va kiberxavfsizlik fakulteti, Dasturiy injiniring",
  mission:
    "Texnologiyalar va sun’iy intellekt imkoniyatlaridan foydalangan holda insonlar va tashkilotlar uchun qulay, samarali va zamonaviy raqamli mahsulotlar yaratish.",
  about: [
    "2026-yildan Farg‘ona viloyati hokimligi Raqamlashtirish markazida frontend dasturchi sifatida faoliyat yuritaman. Asosiy yo‘nalishim — zamonaviy web-ilovalar ishlab chiqish.",
    "HTML, CSS, JavaScript, React.js va Vite yordamida responsiv, foydalanuvchiga qulay interfeyslar yarataman. Git va GitHub orqali loyihalarni boshqarish, REST API bilan ishlash hamda frontend va backend qismlarini integratsiya qilish tajribam bor.",
    "Sun’iy intellekt vositalarini real web-loyihalarga qo‘shish, jarayonlarni avtomatlashtirish va raqamlashtirishga qiziqaman. MongoDB, backend xizmatlari va deployment bilan ham amaliy loyihalar orqali ishlaganman.",
    "Muammoni tahlil qilish, mustaqil yechim topish va yangi texnologiyalarni tez o‘zlashtirish ko‘nikmalarimni rivojlantirib boraman. Jamoada ishlash va murakkab vazifalarni bosqichma-bosqich hal qilishni yoqtiraman.",
  ],
  values: [
    "Doimiy o'rganish va rivojlanish",
    'Jamoada ishlash (Teamwork)',
    'Sifatli va toza kod',
    'Mas’uliyat va intizom',
    'Muammolarga kreativ yechim topish',
    'Yangi texnologiyalarga ochiqlik',
  ],
  focus: [
    'Frontend dasturlash',
    'React.js va Vite',
    'JavaScript, HTML va CSS',
    'Responsiv UI/UX',
    'REST API integratsiyasi',
    'Git va GitHub',
    'MongoDB va backend asoslari',
    'AI integratsiyasi va avtomatlashtirish',
    'Prompt engineering',
    'Deployment jarayonlari',
    'Muammolarni tahlil qilish',
    'Jamoada ishlash',
  ],
}

export const skills = {
  Frontend: ['Frontend dasturlash'],
  Design: ['Figma', 'UI/UX dizayn'],
  Mobile: ['Android dasturlash', 'Flutter'],
  Backend: ['Java', 'SQL'],
  Tools: ['Docker', 'Project management', 'Teamwork'],
  AI: ['AI vositalari (ChatGPT, Gemini)', 'Prompt engineering', 'AI yordamida kodlash'],
}

export const projects = [
  {
    id: 'egatavto',
    name: 'EgatAvto',
    icon: 'irrigation',
    year: 'Sug‘orish avtomatikasi · MVP simulyatori',
    accent: '#168bd2',
    description:
      'Dala va issiqxona sug‘orishini 3D muhitda sinaydigan web-simulyator va MicroPython firmware. Boshqaruv oqimi virtual — loyiha haqiqiy nasos yoki sensorga ulanmagan.',
    features: [
      '3D dala va issiqxona ko‘rinishi',
      'A/B yo‘nalishli klapan boshqaruvi',
      'Oqimni 200 ms mustaqil tasdiqlash',
      'Namlik chegarasi va sug‘orish oralig‘i',
      'Nosozlikda xavfsiz o‘chirish',
      'Sessiya jurnali va JSON eksporti',
    ],
    languages: ['TypeScript', 'MicroPython', 'Python'],
    stack: ['React', 'Vite', 'Three.js', '@react-three/fiber', 'Wokwi'],
    note: 'Sensor qiymatlari simulyatsiya qilinadi. Ochiq Wokwi sahifasi ham virtual qurilma demonstratsiyasi.',
    links: [
      { label: 'Demo sayt', href: 'https://egatavto.axmadullo.uz', tone: 'primary' },
      { label: 'Wokwi simulyatsiyasi', href: 'https://wokwi.com/projects/477735493050952705', tone: 'secondary' },
      { label: 'GitHub · private repo', href: 'https://github.com/wwAxmadulloww/EgatAvto', tone: 'secondary' },
    ],
  },
  {
    id: 'aquawater',
    name: 'AquaWater',
    icon: 'water',
    year: 'Full-stack · E-commerce',
    accent: '#168bd2',
    description:
      'Ichimlik suvi buyurtmasi va yetkazib berishni boshqaruvchi platforma. Mahsulot katalogi, savat va checkout, mijoz kabineti, obunalar hamda kuryer va admin panellari mavjud.',
    features: [
      'Mahsulotlar va buyurtmalar',
      'Obuna va checkout',
      'Kuryer boshqaruvi',
      'Mijoz kabineti',
      'Admin paneli',
    ],
    languages: ['TypeScript', 'JavaScript'],
    stack: ['React', 'Vite', 'Express', 'MongoDB', 'Mongoose'],
    note: 'Frontend va API kodlari GitHub’dagi alohida repolarda joylashgan.',
    links: [
      { label: 'Frontend GitHub', href: 'https://github.com/wwAxmadulloww/aquawater', tone: 'primary' },
      { label: 'Backend GitHub', href: 'https://github.com/wwAxmadulloww/aquawater-backend', tone: 'secondary' },
    ],
  },
  {
    id: 'tendermind',
    name: 'TenderMind',
    icon: 'tender',
    year: 'AI · GovTech',
    accent: '#345b91',
    description:
      'O‘zbekiston davlat xaridlari bo‘yicha lotlarni topish, sodda tilda tushunish va qatnashish imkoniyatini baholashga yordam beruvchi platforma.',
    features: [
      'Tender va lotlarni qidirish',
      'Lot mazmunini oddiy tilda izohlash',
      'Tajriba, litsenziya va hudud bo‘yicha moslik',
      '18 atamali lug‘at va 6 qadamli yo‘riqnoma',
      'PDF/DOCX hujjat tayyorlash',
      'UZ · RU · EN interfeys',
      'AI provayderlari zanjiri va Telegram bot',
    ],
    languages: ['JavaScript', 'HTML', 'CSS'],
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Groq', 'OpenAI', 'Gemini', 'Telegram Bot'],
    note: 'AI yo‘q holatda ham lot izohi ma’lumotlardan tuziladi; AI uni boyitadi. Tayyor public demo havolasi yo‘qligi uchun GitHub kodi berildi.',
    links: [
      { label: 'GitHub’da ko‘rish', href: 'https://github.com/wwAxmadulloww/TenderMind', tone: 'primary' },
    ],
  },
  {
    id: 'ruxsortv',
    name: 'RuxsorTV',
    icon: 'television',
    year: 'Media platforma · Full-stack',
    accent: '#6654d9',
    description:
      'Ko‘rsatuv, serial, yangilik va ijodkorlar uchun ko‘p tilli TV platformasi. Ommaviy sayt bilan birga kontent va foydalanuvchilarni boshqarish admin paneli ham bor.',
    features: [
      'Ko‘rsatuv va seriallar katalogi',
      'Yangiliklar va ijodkorlar sahifalari',
      'Onlayn efir va aloqa sahifasi',
      'UZ · RU · EN tilli sahifalar',
      'Kirish, foydalanuvchi va izohlar',
      'Admin: kontent, murojaat va sozlamalar',
    ],
    languages: ['JavaScript'],
    stack: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'React Query'],
    note: 'Frontend va backend kodi GitHub’da mavjud; kartada ochiq demo manzili topilmagani uchun repo havolasi berilgan.',
    links: [
      { label: 'GitHub’da ko‘rish', href: 'https://github.com/wwAxmadulloww/RuxsorTV', tone: 'primary' },
    ],
  },
  {
    id: 'workbridge',
    name: 'WorkBridge UZ',
    icon: 'work',
    year: 'Ish platformasi · Frontend prototip',
    accent: '#00b88a',
    description:
      'Ish qidiruvchi va ish beruvchiga mo‘ljallangan o‘zbekcha platforma prototipi. Bitta HTML faylda sahifalar almashinuvi va demo UI interaksiyalari yozilgan.',
    features: [
      'Ish o‘rinlarini qidirish va filtrlash',
      'Ish qidiruvchi va ish beruvchi ko‘rinishlari',
      'Ariza va intervyuga taklif oynalari',
      'Dashboard va AI tavsiya demo interfeysi',
    ],
    languages: ['HTML', 'CSS', 'JavaScript'],
    stack: [],
    note: 'Statik frontend prototip: haqiqiy vakansiyalar, server API va AI xizmati ulanmagan.',
    links: [
      { label: 'GitHub’da ko‘rish', href: 'https://github.com/wwAxmadulloww/WorkBridge', tone: 'primary' },
    ],
  },
  {
    id: 'kitobxon',
    name: 'Kitobxon',
    icon: 'books',
    year: 'Kitob o‘qish platformasi · Backend MVP',
    accent: '#c27a32',
    description:
      'Kitob o‘qish va rivojlanish platformasi uchun FastAPI backend: kitob katalogi, foydalanuvchi profili, o‘qish jarayoni, quiz va badge API’lari.',
    features: [
      'Kitoblarni janr, til va nom bo‘yicha izlash',
      'Akkaunt va foydalanuvchi profili',
      'O‘qish jarayoni va progress',
      'Quiz hamda yutuq nishonlari',
      'AI xulosa va quiz endpointlari (mock)',
    ],
    languages: ['Python'],
    stack: ['FastAPI', 'SQLAlchemy async', 'PostgreSQL', 'SQLite', 'Redis', 'JWT'],
    note: 'Ochiq repoda backend kodi bor; README’da ko‘rsatilgan frontend kodi repoda yo‘q. AI javoblari hozircha namuna/mock.',
    links: [
      { label: 'GitHub’da ko‘rish', href: 'https://github.com/wwAxmadulloww/Kitobxon', tone: 'primary' },
    ],
  },
  {
    id: 'tuproq-xaritasi',
    name: 'TuproqXarita',
    icon: 'soil',
    year: 'AgriTech · Lokal demo prototipi',
    accent: '#56875d',
    description:
      'Fermer xo‘jaliklari uchun GPS nuqtalari, laboratoriya ECe natijalari va agronom ko‘rigini bir xaritada jamlaydigan tuproq monitoring demo ilovasi.',
    features: [
      '2 ta xo‘jalik va 4 ta demo dala',
      'GPS, chuqurlik va dala chegarasini tekshirish',
      'ECe natijasi va agronom tasdig‘i',
      'Xaritada namuna va IDW qatlamini ko‘rish',
      'Qidiruv, holat filtri, CSV va chop etish/PDF',
      'O‘zgarishlarni brauzerda saqlash',
    ],
    languages: ['TypeScript'],
    stack: ['Next.js 16', 'React', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide'],
    note: 'Ma’lumotlar sintetik demo; real agronomik tavsiya emas. API yo‘q va GitHub repozitoriy private.',
    links: [
      { label: 'GitHub · private repo', href: 'https://github.com/wwAxmadulloww/TuproqXaritasi', tone: 'primary' },
    ],
  },
]

export const timeline = [
  {
    year: '2024',
    title: "10-sonli umumiy o'rta ta'lim maktabi",
    text: "Farg'ona shahar 10-sonli umumiy o'rta ta'lim maktabini muvaffaqiyatli tamomladim.",
  },
  {
    year: '2024 — Hozir',
    title: "Farg'ona davlat texnika universiteti",
    text: "Telekommunikatsiya va kiberxavfsizlik fakultetida Dasturiy injiniring yo'nalishining 3-kursida kunduzgi bakalavr ta'limida o'qiyman.",
  },
  {
    year: '2025 — 2026',
    title: "Coursera & iTeach xalqaro sertifikatlari",
    text: "Google Cloud 'Introduction to Generative AI', Scrimba 'Build AI Apps with ChatGPT, Dall-E, and GPT-4' hamda iTeach 'Mobil Dasturlash' kurslarini tamomlab sertifikatlar oldim.",
  },
  {
    year: '2026 — Hozir',
    title: "Frontend Dasturchi",
    text: "Farg‘ona viloyati hokimligi Raqamlashtirish markazida Frontend dasturchi sifatida faoliyat olib bormoqdaman.",
  },
]

export const certificates = [
  {
    title: 'Introduction to Generative AI — Google Cloud',
    file: '/certificate/google-cloud-introduction-to-generative-ai.pdf',
    category: 'AI',
  },
  {
    title: 'Build AI Apps with ChatGPT, Dall-E, and GPT-4 — Scrimba',
    file: '/certificate/scrimba-build-ai-apps-chatgpt-dall-e-gpt4.pdf',
    category: 'AI',
  },
  {
    title: 'Mobil Dasturlash — iTeach Academy',
    file: '/certificate/iteach-mobile-development.jpg',
    category: 'Mobile',
  },
]

export const contacts = [
  {
    label: 'Telefon',
    value: '+998 94 829 31 00',
    href: 'tel:+998948293100',
    icon: 'phone' as const,
  },
  {
    label: 'Email',
    value: 'axmadullo101@gmail.com',
    href: 'mailto:axmadullo101@gmail.com',
    icon: 'email' as const,
  },
  {
    label: 'Telegram',
    value: '@Axmadullo_77',
    href: 'https://t.me/Axmadullo_77',
    icon: 'telegram' as const,
  },
  {
    label: 'GitHub',
    value: '@wwAxmadulloww',
    href: 'https://github.com/wwAxmadulloww',
    icon: 'github' as const,
  },
  {
    label: 'Instagram',
    value: '@fstu.24',
    href: 'https://www.instagram.com/fstu.24/',
    icon: 'instagram' as const,
  },
  {
    label: 'LinkedIn',
    value: 'Axmadullo Abdurashidov',
    href: 'https://www.linkedin.com/in/axmadullo-abdurashidov-82a2452a0',
    icon: 'linkedin' as const,
  },
]

export const blogPosts = [
  {
    slug: 'generative-ai-amaliyotda',
    title: 'Generative AI: Sun’iy intellekt bilan zamonaviy ilovalar yaratish',
    excerpt:
      "Google Cloud va Scrimba AI kurslaridan olgan tajribalarim: ChatGPT va GPT-4 yordamida real loyihalarni avtomatlashtirish.",
    date: '2026-03-25',
    tag: 'AI · Web',
    certificateUrl: '/certificate/google-cloud-introduction-to-generative-ai.pdf',
  },
  {
    slug: 'frontend-dasturlash-va-ui-ux',
    title: "Frontend va UI/UX: Foydalanuvchilar yoqtiradigan interfeys siri",
    excerpt:
      "Figma dizaynlaridan boshlab toza va qulay web interfeyslarni kodga aylantirish jarayoni.",
    date: '2026-02-15',
    tag: 'Frontend',
    certificateUrl: '/certificate/scrimba-build-ai-apps-chatgpt-dall-e-gpt4.pdf',
  },
  {
    slug: 'flutter-mobil-dasturlash-tajribasi',
    title: "Flutter bilan cross-platform ilovalar yaratish",
    excerpt:
      "Mobil dasturlashni o'rganishdagi asosiy bosqichlar va samarali arxitektura tuzish usullari.",
    date: '2026-02-11',
    tag: 'Mobile',
    certificateUrl: '/certificate/iteach-mobile-development.jpg',
  },
]
