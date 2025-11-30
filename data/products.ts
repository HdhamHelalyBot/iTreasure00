
import React from 'react';
import { 
  ConnectorsIcon, SemiconductorsIcon, ComponentsIcon, ElectronicsIcon, 
  ElectromechanicalIcon, AutomationIcon, ComputerToolsIcon, SoftwareIcon, 
  PowerIcon, OptoIcon, EngineeringIcon 
} from '../components/icons/CategoryIcons';

export interface Category {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: {
    en: string;
    ar: string;
  };
}

export const categories: Category[] = [
  {
    id: 'connectors',
    name: { en: 'Connectors & Cables', ar: 'الموصلات والكابلات' },
    icon: ConnectorsIcon,
    description: {
      en: 'High-quality connectors and durable cables for reliable signal and power transmission.',
      ar: 'موصلات عالية الجودة وكابلات متينة لنقل الإشارة والطاقة بشكل موثوق.',
    },
  },
  {
    id: 'semiconductors',
    name: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    icon: SemiconductorsIcon,
    description: {
      en: 'Advanced semiconductor devices such as ICs, microchips, and transistors.',
      ar: 'أجهزة أشباه الموصلات المتقدمة مثل الدوائر المتكاملة والرقائق الدقيقة والترانزستورات.',
    },
  },
  {
    id: 'components',
    name: { en: 'Components', ar: 'مكونات' },
    icon: ComponentsIcon,
    description: {
      en: 'Essential electronic parts including resistors, capacitors, sensors, and switches.',
      ar: 'أجزاء إلكترونية أساسية تشمل المقاومات والمكثفات والحساسات والمفاتيح.',
    },
  },
  {
    id: 'electronics',
    name: { en: 'Electronics', ar: 'الالكترونيات' },
    icon: ElectronicsIcon,
    description: {
      en: 'Modern electronic products delivering performance, efficiency, and smart functionality.',
      ar: 'منتجات إلكترونية حديثة تقدم أداءً وكفاءة ووظائف ذكية.',
    },
  },
  {
    id: 'electromechanical',
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    icon: ElectromechanicalIcon,
    description: {
      en: 'Precision electromechanical parts including motors, relays, and motion-control devices.',
      ar: 'أجزاء كهروميكانيكية دقيقة تشمل المحركات والمرحلات وأجهزة التحكم في الحركة.',
    },
  },
  {
    id: 'automation',
    name: { en: 'Automation & Control', ar: 'الأتمتة والتحكم' },
    icon: AutomationIcon,
    description: {
      en: 'Industrial automation solutions including PLCs, sensors, controllers, and monitoring systems.',
      ar: 'حلول الأتمتة الصناعية التي تشمل وحدات التحكم المنطقية القابلة للبرمجة والحساسات ووحدات التحكم وأنظمة المراقبة.',
    },
  },
  {
    id: 'computer-tools',
    name: { en: 'Computer Tools', ar: 'أدوات الكمبيوتر' },
    icon: ComputerToolsIcon,
    description: {
      en: 'Reliable computer tools and accessories designed for productivity and performance.',
      ar: 'أدوات وملحقات كمبيوتر موثوقة مصممة للإنتاجية والأداء.',
    },
  },
  {
    id: 'software',
    name: { en: 'Development & Software', ar: 'التطوير والبرمجيات' },
    icon: SoftwareIcon,
    description: {
        en: 'Software and tools for developers and engineers.',
        ar: 'برامج وأدوات للمطورين والمهندسين.',
    },
  },
  {
    id: 'power',
    name: { en: 'Power & Circuit Protection', ar: 'الطاقة وحماية الدوائر' },
    icon: PowerIcon,
    description: {
      en: 'Power supplies and safety components ensuring stable and protected electrical operation.',
      ar: 'وحدات تزويد الطاقة ومكونات السلامة التي تضمن التشغيل الكهربائي المستقر والمحمي.',
    },
  },
  {
    id: 'optoelectronics',
    name: { en: 'Optoelectronics', ar: 'الإلكترونيات الضوئية' },
    icon: OptoIcon,
    description: {
        en: 'Components that source, detect, and control light.',
        ar: 'مكونات تقوم بإصدار وكشف والتحكم في الضوء.',
    },
  },
  {
    id: 'engineering-software',
    name: { en: 'Engineering Software', ar: 'برمجيات الهندسة' },
    icon: EngineeringIcon,
    description: {
        en: 'Powerful software for engineering design, simulation, and analysis.',
        ar: 'برامج قوية للتصميم الهندسي والمحاكاة والتحليل.',
    },
  }
];