export const translations = {
  en: {
    'iTreasure': 'iTreasure',
    'searchPlaceholder': 'Search for motherboards, cables, components...',
    'ourBusiness': 'Our Business',
    'aboutUs': 'About Us',
    'articles': 'Blog',
    'heroTitle': 'Your Ultimate Source for IT & Electronics',
    'heroSubtitle': 'Find everything from motherboards to microchips. The treasure trove for every tech specialist.',
    'browseCategories': 'Browse Categories',
    'productCategories': 'Product Categories',
    'featuredArticles': 'From the Blog',
    'article1Title': 'The Best Websites for IT and Electronics Products',
    'article1Content': 'Discover the top online destinations for sourcing high-quality IT components and electronics. We review the best in the business.',
    'article2Title': 'Choosing the Right Semiconductor for Your Project',
    'article2Content': 'A deep dive into the world of semiconductors. Learn how to select the perfect component for performance and efficiency.',
    'article3Title': '2024\'s Must-Have PC Building Tools',
    'article3Content': 'Upgrade your toolkit with these essential instruments for PC building and repair. From anti-static wristbands to precision screwdrivers.',
    'aboutUsTitle': 'About iTreasure',
    'aboutUsContent': 'iTreasure was founded by a group of passionate IT professionals who saw the need for a centralized, reliable source for electronic components and computer hardware. We aim to be the treasure chest for every tinkerer, developer, and IT specialist, providing high-quality products and expert knowledge.',
    'ourBusinessTitle': 'What We Do',
    'ourBusinessContent': 'We specialize in sourcing and distributing a vast array of IT and electronic products. Our catalog includes everything from basic components like semiconductors and connectors to advanced automation devices and engineering software. We are committed to quality, reliability, and excellent customer service.',
    'companyDescription': 'iTreasure: The specialist\'s choice for IT components and electronics. Quality and reliability in every product.',
    'termsAndConditions': 'Terms & Conditions',
    'privacyPolicy': 'Privacy Policy',
    'allRightsReserved': 'All Rights Reserved.',
  },
  ar: {
    'iTreasure': 'iTreasure',
    'searchPlaceholder': 'ابحث عن اللوحات الأم، الكابلات، المكونات...',
    'ourBusiness': 'طبيعة عملنا',
    'aboutUs': 'من نحن',
    'articles': 'المدونة',
    'heroTitle': 'مصدرك الأول لتقنية المعلومات والإلكترونيات',
    'heroSubtitle': 'ابحث عن كل شيء من اللوحات الأم إلى الرقائق الدقيقة. الكنز الدفين لكل متخصص في التكنولوجيا.',
    'browseCategories': 'تصفح الفئات',
    'productCategories': 'فئات المنتجات',
    'featuredArticles': 'من المدونة',
    'article1Title': 'أفضل المواقع لمنتجات تكنولوجيا المعلومات والإلكترونيات',
    'article1Content': 'اكتشف أفضل الوجهات عبر الإنترنت للحصول على مكونات تكنولوجيا المعلومات والإلكترونيات عالية الجودة. نستعرض الأفضل في هذا المجال.',
    'article2Title': 'اختيار شبه الموصل المناسب لمشروعك',
    'article2Content': 'نظرة عميقة في عالم أشباه الموصلات. تعلم كيفية اختيار المكون المثالي للأداء والكفاءة.',
    'article3Title': 'الأدوات التي لا غنى عنها لتجميع أجهزة الكمبيوتر في 2024',
    'article3Content': 'قم بترقية مجموعة أدواتك بهذه الأدوات الأساسية لتجميع وإصلاح أجهزة الكمبيوتر. من الأساور المضادة للكهرباء الساكنة إلى المفكات الدقيقة.',
    'aboutUsTitle': 'عن iTreasure',
    'aboutUsContent': 'تأسست iTreasure على يد مجموعة من محترفي تكنولوجيا المعلومات الشغوفين الذين رأوا الحاجة إلى مصدر مركزي وموثوق للمكونات الإلكترونية وأجهزة الكمبيوتر. نهدف إلى أن نكون صندوق الكنز لكل هاوٍ ومطور ومتخصص في تكنولوجيا المعلومات، ونوفر منتجات عالية الجودة ومعرفة خبيرة.',
    'ourBusinessTitle': 'ماذا نفعل',
    'ourBusinessContent': 'نحن متخصصون في توفير وتوزيع مجموعة واسعة من منتجات تكنولوجيا المعلومات والإلكترونيات. يشمل كتالوجنا كل شيء من المكونات الأساسية مثل أشباه الموصلات والموصلات إلى أجهزة الأتمتة المتقدمة وبرامج الهندسة. نحن ملتزمون بالجودة والموثوقية وخدمة العملاء الممتازة.',
    'companyDescription': 'iTreasure: اختيار المتخصصين لمكونات تكنولوجيا المعلومات والإلكترونيات. جودة وموثوقية في كل منتج.',
    'termsAndConditions': 'الشروط والأحكام',
    'privacyPolicy': 'سياسة الخصوصية',
    'allRightsReserved': 'جميع الحقوق محفوظة.',
  },
};

export type TranslationKey = keyof typeof translations.en;

export const useTranslation = () => {
  const { language } = useAppContext();
  return (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
};

import { useAppContext } from '../context/AppContext';