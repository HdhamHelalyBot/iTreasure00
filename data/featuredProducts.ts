
export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
}

export const featuredProducts: Product[] = [
  {
    id: 'gpu-01',
    name: { en: 'GeForce RTX 4090', ar: 'بطاقة GeForce RTX 4090' },
    description: { en: 'The ultimate GPU for gamers and creators. Unprecedented performance and realism.', ar: 'وحدة معالجة رسوميات فائقة للاعبين والمبدعين. أداء وواقعية لا مثيل لهما.' },
    image: 'https://images.unsplash.com/photo-1690132356892-9042c14041d6?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'cpu-01',
    name: { en: 'Intel Core i9-13900K', ar: 'معالج Intel Core i9-13900K' },
    description: { en: 'Push the limits of performance for gaming, streaming, and creating.', ar: 'تجاوز حدود الأداء للألعاب والبث المباشر والإبداع.' },
    image: 'https://images.unsplash.com/photo-1667993218016-865a7a9a6e2e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'devboard-01',
    name: { en: 'Raspberry Pi 4 Model B', ar: 'لوحة Raspberry Pi 4 Model B' },
    description: { en: 'A tiny, dual-display, desktop computer... and a whole lot more.', ar: 'جهاز كمبيوتر مكتبي صغير بشاشتين... وأكثر من ذلك بكثير.' },
    image: 'https://images.unsplash.com/photo-1561736778-92e52a77699c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'kit-01',
    name: { en: 'Arduino Starter Kit', ar: 'مجموعة أدوات Arduino للمبتدئين' },
    description: { en: 'The perfect introduction to electronics and programming with hundreds of components.', ar: 'المدخل المثالي لعالم الإلكترونيات والبرمجة مع مئات المكونات.' },
    image: 'https://images.unsplash.com/photo-1559383399-a42e1281a149?q=80&w=600&auto=format&fit=crop',
  },
   {
    id: 'psu-01',
    name: { en: '850W Power Supply', ar: 'وحدة تزويد طاقة 850 واط' },
    description: { en: 'Reliable and efficient power for high-performance PC builds.', ar: 'طاقة موثوقة وفعالة لتجميعات أجهزة الكمبيوتر عالية الأداء.' },
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop',
  },
   {
    id: 'soldering-01',
    name: { en: 'Soldering Iron Kit', ar: 'مجموعة أدوات اللحام' },
    description: { en: 'Everything you need for your next electronics soldering project.', ar: 'كل ما تحتاجه لمشروع اللحام الإلكتروني القادم.' },
    image: 'https://images.unsplash.com/photo-1628312068262-e64e70e9a56c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ram-01',
    name: { en: '32GB DDR5 RAM Kit', ar: 'مجموعة ذاكرة وصول عشوائي 32 جيجابايت DDR5' },
    description: { en: 'Blazing fast memory for multitasking and demanding applications.', ar: 'ذاكرة فائقة السرعة لتعدد المهام والتطبيقات الصعبة.' },
    image: 'https://images.unsplash.com/photo-1592534927825-9c41a4a44521?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'ssd-01',
    name: { en: '2TB NVMe M.2 SSD', ar: 'قرص SSD بسعة 2 تيرابايت NVMe M.2' },
    description: { en: 'Lightning-fast storage for your OS, games, and applications.', ar: 'تخزين فائق السرعة لنظام التشغيل والألعاب والتطبيقات.' },
    image: 'https://images.unsplash.com/photo-1629819208821-2e6f25455325?q=80&w=600&auto=format&fit=crop',
  }
];