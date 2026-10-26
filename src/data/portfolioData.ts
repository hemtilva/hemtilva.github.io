export interface ExperienceEntry {
  id: string;
  index: string;
  organization: string;
  titlePlaceholder: string;
  datesPlaceholder: string;
  locationPlaceholder: string;
  summary: string;
  responsibilitiesPlaceholder: string[];
  isPlaceholderNote: string;
}

export type ProjectCategory = 'All' | 'Data Structures' | 'OS Kernel' | 'Systems & Web';

export interface ProjectEntry {
  id: string;
  index: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  gridAlignment: 'left-heavy' | 'right-offset' | 'wide-asymmetric';
  conciseDescription: string;
  technicalDetails: {
    label: string;
    value: string;
  }[];
  engineeringTradeoffs: string;
  stack: string[];
  githubUrlPlaceholder: string;
  githubLabelPlaceholder: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  period: string;
  cpi: string;
  cpiScale: string;
  honors: {
    title: string;
    term: string;
    academicYear: string;
  }[];
  focusAreas: string[];
}

export interface ContactData {
  heading: string;
  subcopy: string;
  emailPlaceholder: string;
  emailHref: string;
  links: {
    platform: string;
    handlePlaceholder: string;
    hrefPlaceholder: string;
  }[];
}

export const PORTFOLIO_SECTIONS = [
  { id: 'hero', number: '01', label: 'Overview' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'education', number: '04', label: 'Education' },
  { id: 'contact', number: '05', label: 'Contact' },
] as const;

export const HERO_DATA = {
  name: 'Hem Tilva',
  roleKicker: 'SYSTEMS & SOFTWARE ENGINEERING · IIT GANDHINAGAR',
  headline: 'Building software from first principles with deliberate engineering trade-offs.',
  lead: 'I am a software engineer focused on low-level systems, operating system internals, and space-efficient data structures. I care deeply about how abstractions map to hardware—balancing memory footprint, cache locality, concurrency, and maintainability.',
  primaryCta: {
    label: 'Explore Selected Projects',
    href: '#projects',
  },
  secondaryCta: {
    label: 'Initiate Contact',
    href: '#contact',
  },
};

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: 'deshaw-internship',
    index: '01',
    organization: 'D. E. Shaw & Co.',
    titlePlaceholder: '[Role Title Placeholder — e.g., Software Engineering Intern]',
    datesPlaceholder: '[Dates Placeholder — e.g., Summer 2026]',
    locationPlaceholder: '[Location Placeholder — e.g., Hyderabad / Bengaluru]',
    summary:
      'Upcoming or unconfirmed internship details reserved with explicit placeholders for dates, formal title, and specific project deliverables.',
    responsibilitiesPlaceholder: [
      '[Responsibility Placeholder 01 — Systems architecture, low-latency infrastructure, or core platform engineering scope to be updated]',
      '[Responsibility Placeholder 02 — Design trade-offs, throughput/reliability engineering, and internal tooling contributions to be updated]',
      '[Responsibility Placeholder 03 — Cross-team technical collaboration and production deployment milestones to be updated]',
    ],
    isPlaceholderNote: 'PLACEHOLDER RECORD · AWAITING CONFIRMED DATES, TITLE & SCOPE',
  },
];

export const PROJECTS_DATA: ProjectEntry[] = [
  {
    id: 'spatial-bloom-filters',
    index: '01',
    title: 'Spatial Optimization of Bloom Filters',
    category: 'Data Structures',
    gridAlignment: 'left-heavy',
    conciseDescription:
      'Investigation and implementation of space-efficient probabilistic membership structures optimized for spatial compactness, cache-line locality, and controlled false-positive trade-offs.',
    technicalDetails: [
      {
        label: 'Core Mechanism',
        value: 'Bit-array partitioning and hash function evaluation tailored to minimize bit-level redundancy and cache misses during high-throughput membership queries.',
      },
      {
        label: 'Trade-off Axis',
        value: 'Balances bits-per-element memory budget against false-positive probability (ε) and CPU cycle cost of k independent hash evaluations.',
      },
      {
        label: 'System Focus',
        value: 'Memory hierarchy alignment, bitwise manipulation, and deterministic parameterization for bounded-memory environments.',
      },
    ],
    engineeringTradeoffs:
      'Prioritized cache-resident block access and compact bit-packing over unaligned multi-probe scattering to reduce memory bus traffic on negative lookups.',
    stack: ['C / C++', 'Probabilistic Data Structures', 'Bitwise Optimization', 'Memory Hierarchy'],
    githubUrlPlaceholder: 'https://github.com/your-username/spatial-bloom-filters-placeholder',
    githubLabelPlaceholder: 'github.com/your-username/spatial-bloom-filters-placeholder',
  },
  {
    id: 'xv6-ksm',
    index: '02',
    title: 'Kernel Samepage Merging (KSM) in xv6',
    category: 'OS Kernel',
    gridAlignment: 'right-offset',
    conciseDescription:
      'Kernel-level memory deduplication subsystem for the xv6 RISC-V / x86 teaching operating system, scanning physical pages to merge identical frames into shared copy-on-write mappings.',
    technicalDetails: [
      {
        label: 'Page Deduplication',
        value: 'Identifies content-identical physical pages across process address spaces and consolidates page table entries (PTEs) to reference a single physical frame.',
      },
      {
        label: 'Copy-on-Write (CoW) Trap',
        value: 'Marks merged PTEs read-only with custom kernel flags; intercepts write page faults in trap handling to allocate a private copy on mutation.',
      },
      {
        label: 'Reference Accounting',
        value: 'Maintains synchronized physical frame reference counts in the kernel allocator to guarantee safe reclamation and prevent use-after-free faults.',
      },
    ],
    engineeringTradeoffs:
      'Traded background kernel scanning CPU cycles and page-fault trap latency on writes for reduced physical RAM consumption across processes sharing identical memory pages.',
    stack: ['C', 'xv6 Kernel', 'Virtual Memory & PTEs', 'Copy-on-Write', 'OS Internals'],
    githubUrlPlaceholder: 'https://github.com/your-username/xv6-ksm-placeholder',
    githubLabelPlaceholder: 'github.com/your-username/xv6-ksm-placeholder',
  },
  {
    id: 'academic-doubt-platform',
    index: '03',
    title: 'Academic Doubt Resolution Platform',
    category: 'Systems & Web',
    gridAlignment: 'wide-asymmetric',
    conciseDescription:
      'Structured peer-to-peer and instructor-assisted academic Q&A system designed for course-level thread organization, low-friction technical formatting, and reliable resolution tracking.',
    technicalDetails: [
      {
        label: 'Domain Modeling',
        value: 'Relational schema organizing courses, topic taxonomies, question lifecycles, and verified instructor/TA endorsements.',
      },
      {
        label: 'State & Resolution Workflow',
        value: 'Explicit state transitions between open queries, peer responses, and canonically resolved answers to prevent duplicate questions.',
      },
      {
        label: 'Access & Concurrency',
        value: 'Role-scoped permissions separating student submissions from moderator verification while keeping search and thread retrieval responsive.',
      },
    ],
    engineeringTradeoffs:
      'Chose strict relational normalization and explicit thread resolution states over unstructured chat streams to preserve long-term searchability across academic semesters.',
    stack: ['Full-Stack Architecture', 'Relational Data Modeling', 'REST APIs', 'Role-Based Access'],
    githubUrlPlaceholder: 'https://github.com/your-username/academic-doubt-platform-placeholder',
    githubLabelPlaceholder: 'github.com/your-username/academic-doubt-platform-placeholder',
  },
];

export const EDUCATION_DATA: EducationData = {
  degree: 'B.Tech. in Computer Science & Engineering',
  institution: 'Indian Institute of Technology (IIT) Gandhinagar',
  period: '2024 – Present',
  cpi: '9.34',
  cpiScale: '10.00',
  honors: [
    {
      title: 'Dean’s List Award',
      term: 'Semester I',
      academicYear: 'AY 2025–26',
    },
  ],
  focusAreas: [
    'Operating Systems',
    'Data Structures & Algorithms',
    'Computer Architecture',
    'Systems Programming',
  ],
};

export const CONTACT_DATA: ContactData = {
  heading: 'Have something interesting to build?',
  subcopy:
    'Available for systems engineering discussions, research collaborations, and software engineering opportunities. Direct correspondence via email or GitHub.',
  emailPlaceholder: 'your.email@placeholder.com',
  emailHref: 'mailto:your.email@placeholder.com',
  links: [
    {
      platform: 'GitHub',
      handlePlaceholder: 'github.com/your-username-placeholder',
      hrefPlaceholder: 'https://github.com/your-username-placeholder',
    },
    {
      platform: 'LinkedIn',
      handlePlaceholder: 'linkedin.com/in/your-profile-placeholder',
      hrefPlaceholder: 'https://linkedin.com/in/your-profile-placeholder',
    },
  ],
};

export function filterProjectsByCategory(
  projects: ProjectEntry[],
  category: ProjectCategory
): ProjectEntry[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function validatePortfolioIntegrity() {
  const sectionIds = PORTFOLIO_SECTIONS.map((s) => s.id);
  const expectedOrder = ['hero', 'experience', 'projects', 'education', 'contact'];
  const isOrderValid =
    sectionIds.length === expectedOrder.length &&
    sectionIds.every((id, idx) => id === expectedOrder[idx]);

  const hasExactThreeProjects = PROJECTS_DATA.length === 3;
  const hasVerifiedEducation =
    EDUCATION_DATA.cpi === '9.34' &&
    EDUCATION_DATA.institution.includes('IIT') &&
    EDUCATION_DATA.honors.some(
      (h) => h.title === 'Dean’s List Award' && h.term === 'Semester I' && h.academicYear === 'AY 2025–26'
    );

  return {
    isOrderValid,
    hasExactThreeProjects,
    hasVerifiedEducation,
  };
}
