export interface SocialLink {
  id: string;
  label: string;
  href: string;
  platform: 'github' | 'linkedin' | 'dribbble' | 'email';
}

export interface NavSectionLink {
  id: string;
  label: string;
  targetId: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  stack: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  outcome: string;
  imageSrc: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string;
}

export const PROFILE = {
  name: 'Clara Hayes',
  role: 'Frontend Engineer & UI Architect',
  location: 'Seattle, WA',
  avatarSrc: '/src/assets/images/avatar_clara_hayes_1795594005081.jpg',
  avatarAlt: 'Studio portrait of Clara Hayes, Frontend Engineer and UI Architect',
  headline: 'Designing resilient interfaces and expressive web software.',
  bio: 'I specialize in React, TypeScript, and accessible design systems. Over the past six years, I have partnered with product and editorial teams to ship fast, tactile web applications where typography, motion, and engineering rigor work in concert.',
  metrics: [
    { label: 'Production Systems', value: '18+' },
    { label: 'Open Source Downloads', value: '420k/mo' },
    { label: 'Accessibility Target', value: 'WCAG AA' },
    { label: 'Core Focus', value: 'React & UI' },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com',
    platform: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    platform: 'linkedin',
  },
  {
    id: 'dribbble',
    label: 'Dribbble',
    href: 'https://dribbble.com',
    platform: 'dribbble',
  },
  {
    id: 'email',
    label: 'Email Clara Hayes',
    href: 'mailto:hello@clarahayes.dev',
    platform: 'email',
  },
];

export const NAV_LINKS: NavSectionLink[] = [
  { id: 'nav-about', label: 'Overview', targetId: 'landing-section' },
  { id: 'nav-projects', label: 'Projects', targetId: 'projects-section' },
  { id: 'nav-contact', label: 'Contact Me', targetId: 'contactme-section' },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'architect-ui',
    title: 'Architect UI System',
    category: 'Design Systems',
    year: '2025',
    stack: 'React · TypeScript · Tailwind',
    shortDescription:
      'A multi-theme component library and semantic token architecture powering twelve enterprise web workspaces with zero-runtime CSS variables.',
    fullDescription:
      'Architect UI System unifies typography scales, accessible keyboard-first primitives, and automated contrast verification across twelve product teams. Built from the ground up with strict WCAG AA conformance and modular tree-shakeable exports.',
    highlights: [
      '48 accessible primitives including combobox, dialog, and virtualized data grid',
      'Automated Figma-to-CSS token pipeline reducing style drift across 12 teams',
      'Zero-runtime theme switching with sub-16ms interaction budgets',
    ],
    outcome: '38% faster UI delivery across partner product squads',
    imageSrc: '/src/assets/images/project_design_system_1795594004524.jpg',
    imageAlt: 'Architect UI System documentation displayed on an aluminum studio monitor',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'soundwave-studio',
    title: 'Soundwave Studio',
    category: 'Creative Tools',
    year: '2025',
    stack: 'Web Audio API · Canvas · React',
    shortDescription:
      'A browser-native multi-track audio workstation and real-time spectral analyzer engineered for low-latency acoustic sketching.',
    fullDescription:
      'Soundwave Studio brings desktop-grade spectral visualization and non-destructive stem editing straight into the browser using AudioWorklet processors and hardware-accelerated 2D canvas rendering.',
    highlights: [
      'Custom AudioWorklet DSP pipeline achieving sub-10ms monitoring latency',
      '60fps FFT spectral waterfall and zoomable multi-track timeline',
      'Offline-ready project persistence via IndexedDB binary chunking',
    ],
    outcome: '14,000+ monthly active independent sound designers',
    imageSrc: '/src/assets/images/project_audio_workspace_1795594005231.jpg',
    imageAlt: 'Soundwave Studio waveform analyzer running on a matte black laptop beside reference headphones',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'cascadia-atlas',
    title: 'Cascadia Climate Atlas',
    category: 'Geospatial Web',
    year: '2024',
    stack: 'TypeScript · SVG · GeoJSON',
    shortDescription:
      'An interactive atmospheric telemetry platform plotting Pacific Northwest barometric pressure, wind shear, and station trends.',
    fullDescription:
      'Designed in collaboration with regional environmental researchers, Cascadia Climate Atlas transforms dense sensor telemetry into crisp topographic contour layers and 24-hour synchronized sparkline comparisons.',
    highlights: [
      'Vector topographic contour rendering with smooth viewport pan and zoom',
      'Synchronized multi-station 24-hour barometric and wind trend inspection',
      'Keyboard-navigable station directory with accessible tabular figures',
    ],
    outcome: 'Adopted by 9 regional hydrology and coastal research labs',
    imageSrc: '/src/assets/images/project_climate_atlas_1795594005903.jpg',
    imageAlt: 'Cascadia Climate Atlas topographic telemetry dashboard displayed on a frameless studio screen',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'folio-reader',
    title: 'Folio Monograph Reader',
    category: 'Editorial Publishing',
    year: '2024',
    stack: 'React · Markdown AST · CSS Grid',
    shortDescription:
      'A distraction-free long-form publishing and manuscript workspace crafted for architectural essays and technical monographs.',
    fullDescription:
      'Folio Monograph Reader pairs optical measure constraints with live markdown AST parsing, footnote margin previews, and print-ready CSS paged media output for independent writers and studios.',
    highlights: [
      'Live bidirectional outline sync with zero layout shift while typing',
      'Optical serif and sans typography presets tuned for long-form legibility',
      'One-click static bundle export and print-grade PDF stylesheet',
    ],
    outcome: 'Featured in independent web typography and publishing showcases',
    imageSrc: '/src/assets/images/project_editorial_reader_1795594006476.jpg',
    imageAlt: 'Folio Monograph Reader interface displayed on a tablet resting on pale travertine stone',
    liveUrl: 'https://github.com',
    repoUrl: 'https://github.com',
  },
];
