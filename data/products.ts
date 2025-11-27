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
    image: 'https://images.unsplash.com/photo-1542978728-4001d8935812?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    image: 'https://images.unsplash.com/photo-1629283924991-af2d3c52435b?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    image: 'https://images.unsplash.com/photo-1627854619438-06756960c201?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    image: 'https://images.unsplash.com/photo-1606562013188-e22e9a3b83b4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    image: 'https://images.unsplash.com/photo-1633483188094-cce8b34336c2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    image: 'https://images.unsplash.com/photo-1620050635951-c3a59341d3b9?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    image: 'https://images.unsplash.com/photo-1620192133827-3c3f91ef38a2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    image: 'https://images.unsplash.com/photo-1517856497829-3047e32f359c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    image: 'https://images.unsplash.com/photo-1617791160536-595cf124215a?q=80&w=400&auto=format&fit=crop',
  }
];