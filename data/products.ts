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
    image: 'https://images.unsplash.com/photo-1616440336283-45a550de6d3a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    image: 'https://images.unsplash.com/photo-1529602263124-72535f28b49e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    image: 'https://images.unsplash.com/photo-1617893915433-e3a46a6f6b55?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    image: 'https://images.unsplash.com/photo-1653185386953-7313a3e144d8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    image: 'https://images.unsplash.com/photo-1581092916218-b22035b8a5d3?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    image: 'https://images.unsplash.com/photo-1550009158-94ae7625c697?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    image: 'https://images.unsplash.com/photo-1580920469262-b99b244e138a?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    image: 'https://images.unsplash.com/photo-1533285952928-86f77a83d3b3?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    image: 'https://images.unsplash.com/photo-1581093450021-4a73620939a3?q=80&w=400&auto=format&fit=crop',
  }
];