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
    image: 'https://source.unsplash.com/400x300/?usb-c-cable,hdmi-connector',
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    image: 'https://source.unsplash.com/400x300/?microprocessor,cpu-close-up',
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    image: 'https://source.unsplash.com/400x300/?resistors-capacitors-flat-lay',
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    image: 'https://source.unsplash.com/400x300/?arduino-board,raspberry-pi',
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    image: 'https://source.unsplash.com/400x300/?stepper-motor,servo-motor',
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    image: 'https://source.unsplash.com/400x300/?plc-controller,industrial-robot',
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    image: 'https://source.unsplash.com/400x300/?computer-tool-kit,precision-screwdrivers',
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    image: 'https://source.unsplash.com/400x300/?code-on-screen,developer-setup',
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    image: 'https://source.unsplash.com/400x300/?bench-power-supply,fuse-kit',
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    image: 'https://source.unsplash.com/400x300/?led-lights,laser-module',
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    image: 'https://source.unsplash.com/400x300/?cad-drawing,3d-render',
  }
];