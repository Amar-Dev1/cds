import { NewsArticle } from '../types';

interface Translations {
  navHome: string;
  navAbout: string;
  navServices: string;
  navNews: string;
  navResources: string;
  navContact: string;
  langToggle: string;
  homeHeroTitle: string;
  homeHeroSubtitle: string;
  homeBtnLearnMore: string;
  homeBtnContact: string;
  homeMissionTitle: string;
  homeMissionSubtitle: string;
  homeMissionText: string;
  homeSectorsTitle: string;
  homeSectorsSubtitle: string;
  homeSectorsText: string;
  sectors: { name: string; description: string; icon: string }[];
  aboutTitle: string;
  aboutSubtitle: string;
  aboutIntro: string;
  aboutVision: string;
  aboutVisionText: string;
  aboutMission: string;
  aboutMissionText: string;
  aboutObjective: string;
  aboutObjectiveText: string;
  aboutValues: string;
  coreValues: string[];
  servicesTitle: string;
  servicesSubtitle: string;
  servicesIntro: string;
  services: Record<string, string[]>;
  resourcesTitle: string;
  resourcesText1: string;
  resourcesText2: string;
  contactTitle: string;
  contactSubtitle: string;
  contactIntro: string;
  contactLocationsTitle: string;
  contactCurrentBase: string;
  contactCurrentBaseText: string;
  contactPlannedHQ: string;
  contactPlannedHQText: string;
  contactDetailsTitle: string;
  contactEmail: string;
  contactPhone1: string;
  contactPhone2: string;
  contactPartnershipTitle: string;
  contactPartnershipText1: string;
  contactPartnershipText2: string;
  newsTitle: string;
  newsSubtitle: string;
  newsError: string;
  newsEmpty: string;
  footerMotto: string;
  footerNav: string;
  footerSupport: string;
  footerContact: string;
  footerRights: string;
  newsArticles: NewsArticle[];
}

export const data: Record<'ar' | 'en', Translations> = {
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "ماذا نقدم",
    navNews: "الأخبار",
    navResources: "المصادر",
    navContact: "اتصل بنا",
    langToggle: "English",
    homeHeroTitle: "مركز استراتيجيات التنمية",
    homeHeroSubtitle: "تمهيد الطريق للمواطنة والحكم الرشيد من خلال الشراكة وتمكين المجتمع.",
    homeBtnLearnMore: "اعرف المزيد",
    homeBtnContact: "تواصل معنا",
    homeMissionTitle: "رسالتنا",
    homeMissionSubtitle: "شريك للتقدم",
    homeMissionText: "العمل والشراكة مع الآخرين لخلق بيئة مواتية على مستوى الهيئات الحكومية والمجتمعات ومنظمات المجتمع المدني والأحزاب السياسية لتحقيق رؤية دولة قائمة على المواطنة والحكم الرشيد.",
    homeSectorsTitle: "ماذا نقدم",
    homeSectorsSubtitle: "مجالات تركيزنا",
    homeSectorsText: "يعمل المركز عبر قطاعات متعددة لمواجهة التحديات الجذرية وتمكين المجتمعات.",
    sectors: [
      { name: 'التثقيف المدني', description: 'تعزيز الممارسات الديمقراطية والحكم الرشيد وقيادة الشباب.', icon: 'academic-cap' },
      { name: 'بناء القدرات', description: 'تعزيز مهارات العاملين في مجال المياه والمجتمعات ومنظمات المجتمع المدني.', icon: 'users' },
      { name: 'المياه والصرف الصحي/الصحة', description: 'تحسين الوصول إلى المياه والصرف الصحي والنظافة والخدمات الصحية الأساسية.', icon: 'heart' },
      { name: 'الاستدامة', description: 'التركيز على الحفاظ على البيئة والتكيف مع تغير المناخ.', icon: 'globe-alt' },
      { name: 'الاستشارات', description: 'تقديم تقييمات وتدريبات وورش عمل متخصصة.', icon: 'briefcase' },
    ],
    aboutTitle: "من نحن",
    aboutSubtitle: "قصتنا وقيمنا",
    aboutIntro: "مركز استراتيجيات التنمية هو منظمة اجتماعية غير ربحية مسجلة في الدائرة التجارية بوزارة العدل، مكرسة لتقديم الدراسات والتقييمات وبناء القدرات والمشاريع المتعلقة بالخدمات الاجتماعية الأساسية.",
    aboutVision: "رؤيتنا",
    aboutVisionText: "تمهيد الأرضية الاجتماعية والسياسية والمهنية لتكون على وعي والتزام عالٍ بمفهوم الحقوق والواجبات، مما سيؤدي حتماً إلى دولة المواطنة ومؤسسات الحكم الرشيد.",
    aboutMission: "رسالتنا",
    aboutMissionText: "العمل والشراكة مع الآخرين لخلق بيئة مواتية على مستوى الهيئات الحكومية والمجتمعات ومنظمات المجتمع المدني والأحزاب السياسية لتحقيق الرؤية.",
    aboutObjective: "هدفنا",
    aboutObjectiveText: "هدفنا الأسمى هو المساهمة في عملية تحول تركز على السياسات واللوائح والاستراتيجيات والتخطيط طويل الأجل وبناء القدرات وتمكين المجتمع.",
    aboutValues: "قيمنا الأساسية",
    coreValues: [
        "الحياد السياسي والنزاهة",
        "المهنية",
        "العمل التطوعي",
        "الالتزام بالممارسات الديمقراطية",
        "عدم التمييز لأي سبب",
        "الابتكار والإبداع",
        "المشاركة والمساءلة والشفافية"
    ],
    servicesTitle: "ماذا نقدم",
    servicesSubtitle: "خدماتنا وقطاعاتنا",
    servicesIntro: "يعمل مركز استراتيجيات التنمية مع الدوائر الحكومية ومنظمات المجتمع المدني والمنظمات غير الحكومية والأمم المتحدة والجهات الفاعلة الأخرى في القطاعات التالية لدفع التغيير الهادف.",
    services: {
      "التثقيف المدني": [
        "نشر الوعي حول الممارسات والعمليات الديمقراطية والحكم الرشيد وسيادة القانون",
        "قيادة الشباب",
        "تنفيذ أنشطة وفعاليات حول السلام والتماسك الاجتماعي والمواطنة والنوع الاجتماعي",
        "أهداف التنمية المستدامة"
      ],
      "بناء القدرات": [
        "بناء قدرات العاملين في مجال المياه والمجتمعات ومنظمات المجتمع المدني والمنظمات المجتمعية",
        "الحوكمة والسياسات والاستراتيجيات والخطط"
      ],
      "الوصول إلى الخدمات الأساسية": [
        "المياه والصرف الصحي والنظافة/الإدارة المتكاملة للموارد المائية",
        "الأمن الغذائي وسبل العيش",
        "الصحة"
      ],
      "الاستدامة": [
        "التكيف القائم على النظام البيئي والقدرة على الصمود",
        "الحفاظ على البيئة",
        "تغير المناخ",
        "إدارة الموارد الطبيعية"
      ],
      "الخدمات الاستشارية": [
        "التقييم والمتابعة",
        "التدريب وورش العمل",
        "المؤتمرات"
      ]
    },
    resourcesTitle: "المصادر",
    resourcesText1: "ستكون تقاريرنا ومنشوراتنا ومصادرنا الأخرى متاحة هنا قريبًا.",
    resourcesText2: "يرجى التحقق مرة أخرى لاحقًا للحصول على التحديثات.",
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل معنا",
    contactIntro: "نرحب بالشراكات والتعاون. تواصل معنا لمعرفة المزيد عن عملنا أو لمناقشة الفرص المحتملة.",
    contactLocationsTitle: "مواقعنا",
    contactCurrentBase: "المقر الحالي",
    contactCurrentBaseText: "مدينة كوستي، ولاية النيل الأبيض، السودان",
    contactPlannedHQ: "المقر المخطط له",
    contactPlannedHQText: "الخرطوم، السودان",
    contactDetailsTitle: "تفاصيل الاتصال",
    contactEmail: "البريد الإلكتروني:",
    contactPhone1: "الهاتف ١:",
    contactPhone2: "الهاتف ٢:",
    contactPartnershipTitle: "معلومات الشراكة",
    contactPartnershipText1: "يوفر المركز موارده المالية من الأنشطة المنفذة من خلال الشراكة مع الكيانات الحكومية وغير الحكومية مثل الأمم المتحدة والاتحاد الأوروبي وبنك التنمية الأفريقي والبنك الإسلامي للتنمية والسفارات والوكالات الثنائية والمؤسسات والمنظمات غير الحكومية والمجتمعات.",
    contactPartnershipText2: "إذا كنت مهتمًا بالشراكة معنا، فيرجى إرسال بريد إلكتروني إلينا. نتطلع إلى التعاون لمواجهة التحديات الجذرية وتمكين المجتمعات.",
    newsTitle: "الأخبار والتحديثات",
    newsSubtitle: "آخر الأخبار من المركز",
    newsError: "فشل تحميل الأخبار. يرجى المحاولة مرة أخرى لاحقًا.",
    newsEmpty: "لا توجد أخبار حاليًا.",
    footerMotto: "مركز استراتيجيات التنمية - مواجهة التحديات الجذرية من أجل مستقبل أفضل في السودان.",
    footerNav: "التنقل",
    footerSupport: "الدعم",
    footerContact: "اتصل بنا",
    footerRights: `جميع الحقوق محفوظة © ${new Date().getFullYear()} مركز استراتيجيات التنمية.`,
    newsArticles: [
      { id: 1, created_at: '2023-10-26T10:00:00Z', title: 'إطلاق ورشة عمل حول بناء قدرات المجتمع', content: 'نظم مركز استراتيجيات التنمية ورشة عمل ناجحة في كوستي، ركزت على تمكين القادة المحليين بأدوات لإدارة المشاريع المستدامة.', image_url: 'https://picsum.photos/seed/news1/600/400' },
      { id: 2, created_at: '2023-10-22T14:30:00Z', title: 'مبادرة جديدة للمياه النظيفة في قرى النيل الأبيض', content: 'بالشراكة مع المنظمات الدولية، أطلق المركز مشروعًا يهدف إلى توفير الوصول إلى مياه الشرب النظيفة لأكثر من 5000 أسرة.', image_url: 'https://picsum.photos/seed/news2/600/400' },
    ],
  },
  en: {
    navHome: "Home",
    navAbout: "Who We Are",
    navServices: "What We Do",
    navNews: "News",
    navResources: "Resources",
    navContact: "Contact",
    langToggle: "العربية",
    homeHeroTitle: "Centre for Development Strategies",
    homeHeroSubtitle: "Paving the way for citizenship and good governance through partnership and community empowerment.",
    homeBtnLearnMore: "Learn More",
    homeBtnContact: "Get In Touch",
    homeMissionTitle: "Our Mission",
    homeMissionSubtitle: "A Partner for Progress",
    homeMissionText: "To work and partner with others to create a conducive environment at the level of government agencies, communities, CSOs, and political parties in order to achieve the vision of a state built on citizenship and good governance.",
    homeSectorsTitle: "What We Do",
    homeSectorsSubtitle: "Our Areas of Focus",
    homeSectorsText: "CDS works across multiple sectors to address root challenges and empower communities.",
    sectors: [
      { name: 'Civic Education', description: 'Promoting democratic practices, good governance, and youth leadership.', icon: 'academic-cap' },
      { name: 'Capacity Building', description: 'Strengthening skills for water practitioners, communities, and CSOs.', icon: 'users' },
      { name: 'WASH/Health', description: 'Improving access to Water, Sanitation, Hygiene, and basic health services.', icon: 'heart' },
      { name: 'Sustainability', description: 'Focusing on environmental conservation and climate change adaptation.', icon: 'globe-alt' },
      { name: 'Consultancy', description: 'Providing expert assessment, evaluation, training, and workshops.', icon: 'briefcase' },
    ],
    aboutTitle: "Who We Are",
    aboutSubtitle: "Our Story and Values",
    aboutIntro: "CDS is a social not-for-profit organization registered at the Commercial Department, Ministry of Justice, dedicated to providing studies, assessments, capacity building, and projects on basic social services.",
    aboutVision: "Our Vision",
    aboutVisionText: "To pave the social ground, political sphere, and professional sector to be highly aware and committed to the Rights-Duties concept, which inevitably shall result in a state of citizenship and good governance institutions.",
    aboutMission: "Our Mission",
    aboutMissionText: "To work and partner with others to create a conducive environment at the level of government agencies, communities, CSOs, and political parties in order to achieve the vision.",
    aboutObjective: "Our Objective",
    aboutObjectiveText: "Our overarching goal is to contribute to a transformation process that focuses on policies & regulation, strategies, long term planning, capacity building & community empowerment.",
    aboutValues: "Our Core Values",
    coreValues: [
      "Political impartiality and neutrality",
      "Professionalism",
      "Volunteerism",
      "Commitment to democratic practices",
      "No discrimination for any reason",
      "Innovation and creativity",
      "Participation, accountability, and transparency"
    ],
    servicesTitle: "What We Do",
    servicesSubtitle: "Our Services and Sectors",
    servicesIntro: "CDS works together with government departments, CSOs, NGOs, UN, and other actors on the following sectors to drive meaningful change.",
    services: {
      "Civic Education": [
        "Dissemination and awareness on democratic practices and processes, good governance, rule of law",
        "Youth leadership",
        "Conduct activities and events on peace, social cohesion, citizenship, and gender",
        "SDGs"
      ],
      "Capacity Building": [
        "Capacity building for water practitioners, communities, CSOs & CBOs",
        "Governance, policies, strategies and plans"
      ],
      "Access to Basic Services": [
        "WASH/IWRM",
        "FSL",
        "Health"
      ],
      "Sustainability": [
        "Eco-system-based adaptation and resilience",
        "Environment conservation",
        "Climate change",
        "Natural resources management"
      ],
      "Consultancy Services": [
        "Assessment and evaluation",
        "Training and workshop",
        "Conferences"
      ]
    },
    resourcesTitle: "Resources",
    resourcesText1: "Our reports, publications, and other resources will be available here soon.",
    resourcesText2: "Please check back later for updates.",
    contactTitle: "Contact Us",
    contactSubtitle: "Get in Touch",
    contactIntro: "We welcome partnerships and collaborations. Reach out to us to learn more about our work or discuss potential opportunities.",
    contactLocationsTitle: "Our Locations",
    contactCurrentBase: "Current Base",
    contactCurrentBaseText: "Kosti Town, White Nile, Sudan",
    contactPlannedHQ: "Planned Headquarters",
    contactPlannedHQText: "Khartoum, Sudan",
    contactDetailsTitle: "Contact Details",
    contactEmail: "Email:",
    contactPhone1: "Phone 1:",
    contactPhone2: "Phone 2:",
    contactPartnershipTitle: "Partnership Information",
    contactPartnershipText1: "CDS avails its financial resources from implemented activities through partnership with government and non-government/state entities such as UN, EU, AFDB, IsDB, Embassies, bilateral agencies, foundations, NGOs, and communities.",
    contactPartnershipText2: "If you are interested in partnering with us, please send us an email. We look forward to collaborating to address root challenges and empower communities.",
    newsTitle: "News & Updates",
    newsSubtitle: "Latest From CDS",
    newsError: "Failed to load news articles. Please try again later.",
    newsEmpty: "No news articles found.",
    footerMotto: "Centre for Development Strategies - Addressing root challenges for a better future in Sudan.",
    footerNav: "Navigation",
    footerSupport: "Support",
    footerContact: "Contact Us",
    footerRights: `© ${new Date().getFullYear()} Centre for Development Strategies. All rights reserved.`,
    newsArticles: [
      { id: 1, created_at: '2023-10-26T10:00:00Z', title: 'Community Capacity-Building Workshop Launched', content: 'CDS held a successful workshop in Kosti, focusing on empowering local leaders with tools for sustainable project management.', image_url: 'https://picsum.photos/seed/news1/600/400' },
      { id: 2, created_at: '2023-10-22T14:30:00Z', title: 'New Clean Water Initiative in White Nile Villages', content: 'In partnership with international organizations, CDS has launched a project to provide clean drinking water access to over 5,000 households.', image_url: 'https://picsum.photos/seed/news2/600/400' },
    ],
  },
};
