export interface Category {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  image: string;
}

export const categories: Category[] = [
  {
    id: 'connectors',
    name: { en: 'Connectors & Cables', ar: 'الموصلات والكابلات' },
    image: 'https://images.unsplash.com/photo-1543282999-c49f8a373f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    image: 'https://images.unsplash.com/photo-1627833595028-a3c3b48f2192?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    image: 'https://images.unsplash.com/photo-1628290745963-481358b3a1a9?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    image: 'https://images.unsplash.com/photo-1617752943224-113c51e06e23?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    image: 'https://images.unsplash.com/photo-1563729828284-073a6a96e2b6?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    image: 'https://images.unsplash.com/photo-1567704272583-835b6caad80d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    image: 'https://images.unsplash.com/photo-1614767359938-c1a705220a67?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    image: 'https://images.unsplash.com/photo-1618422168181-14f7d45e7e30?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    image: 'https://images.unsplash.com/photo-1620212030283-aeb81449a05e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    image: 'https://images.unsplash.com/photo-1599388136367-27a3c310b81a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop',
  }
];