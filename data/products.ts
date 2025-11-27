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
    image: 'https://images.unsplash.com/photo-1543974352-9c4c7310a4fa?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    image: 'https://images.unsplash.com/photo-1550751827-4133d5e30b6d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    image: 'https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    image: 'https://images.unsplash.com/photo-1589254589531-3858117997b6?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    image: 'https://images.unsplash.com/photo-1567443024552-37bb2459e449?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    image: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3ef95a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    image: 'https://images.unsplash.com/photo-1601823135311-37d8b5a37250?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    image: 'https://images.unsplash.com/photo-1527807828732-b969b557d4a2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=400&auto=format&fit=crop',
  }
];