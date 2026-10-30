export const personalInfo = {
  name: "Muzammal",
  title: "Senior Frontend Developer & Modern Web Specialist",
  tagline: "5+ Years of Crafting High-Performance, Pixel-Perfect Web Experiences",
  bio: "Experienced Frontend Developer with over 5 years of proven track record delivering responsive web applications, modern React/Next.js interfaces, and scalable WordPress & CMS platforms. Dedicated to clean architecture, WCAG accessibility, and sub-second page performance.",
  email: "muzammalkhaliloffical@gmail.com",
  location: "Lahore, Pakistan (Open to Remote Worldwide)",
  status: "Available for Full-time Roles & Contracts",
  yearsExperience: "5+",
  projectsCompleted: "45+",
  clientSatisfaction: "99%",
  socials: {
    github: "https://github.com/MuzammalKhalil",
    linkedin: "https://www.linkedin.com/in/muzammal-khalil-189b19317/",
    facebook: "https://www.facebook.com/muzammal.khalil.491578/",
    email: "mailto:muzammalkhaliloffical@gmail.com",
  }
};

export const skillsData = [
  {
    category: "Modern Frontend & Frameworks",
    description: "Core technologies used to build dynamic, interactive, and reactive single-page applications.",
    items: [
      { name: "React.js", level: "Expert", years: "4+ yrs", highlight: true },
      { name: "Next.js", level: "Advanced", years: "3+ yrs", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", years: "5+ yrs", highlight: true },
      { name: "TypeScript", level: "Proficient", years: "2+ yrs", highlight: false },
      { name: "HTML5 / Semantic Web", level: "Expert", years: "5+ yrs", highlight: true },
      { name: "CSS3 / Sass / SCSS", level: "Expert", years: "5+ yrs", highlight: true },
    ]
  },
  {
    category: "Styling & UI Design Systems",
    description: "Component styling, responsive design patterns, and accessible design systems.",
    items: [
      { name: "Tailwind CSS", level: "Expert", years: "4+ yrs", highlight: true },
      { name: "Bootstrap 5", level: "Expert", years: "5+ yrs", highlight: false },
      { name: "Responsive Layouts (Grid/Flex)", level: "Expert", years: "5+ yrs", highlight: true },
      { name: "Figma to Code", level: "Advanced", years: "4+ yrs", highlight: true },
      { name: "CSS Animations", level: "Advanced", years: "4+ yrs", highlight: false },
    ]
  },
  {
    category: "CMS & Visual Site Builders",
    description: "Enterprise CMS solutions, custom WordPress themes, client-manageable sites, and visual builders.",
    items: [
      { name: "WordPress Development", level: "Expert", years: "5+ yrs", highlight: true },
      { name: "WPBakery Page Builder", level: "Expert", years: "4+ yrs", highlight: true },
      { name: "Wix & Wix Studio", level: "Expert", years: "4+ yrs", highlight: true },
      { name: "Elementor Pro", level: "Expert", years: "5+ yrs", highlight: false },
      { name: "WooCommerce", level: "Advanced", years: "3+ yrs", highlight: false },
    ]
  },
  {
    category: "Performance, Tools & Workflow",
    description: "Developer tooling, version control, build optimizers, and web vitals tuning.",
    items: [
      { name: "Git & GitHub", level: "Advanced", years: "5+ yrs", highlight: true },
      { name: "Vite / Webpack", level: "Advanced", years: "3+ yrs", highlight: false },
      { name: "REST APIs & Fetch", level: "Advanced", years: "4+ yrs", highlight: true },
      { name: "Core Web Vitals & SEO", level: "Advanced", years: "4+ yrs", highlight: true },
      { name: "Chrome DevTools", level: "Expert", years: "5+ yrs", highlight: false },
    ]
  }
];

export const projectsData = [
  {
    id: "web-design-showcase",
    title: "Web Design & Agency Template",
    displayTitle: "Web Design",
    subtitle: "Modern Responsive Creative Portfolio & Agency UI",
    category: "Web Design",
    tag: "Featured Showcase",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    summary: "A sleek, highly converted web design project crafted with semantic HTML5, modern CSS3, and Tailwind CSS with smooth micro-interactions.",
    problem: "Outdated web layouts with high bounce rates and poor mobile navigation, failing to convert business prospects.",
    role: "Lead UI/UX & Frontend Designer — Created component layouts, color hierarchy, and mobile responsive breakpoints.",
    approach: "Designed pixel-perfect layouts from Figma with accessible typography, smooth hover effects, and lightweight assets.",
    outcome: "98% Lighthouse performance, instant page loads, and 100% mobile responsiveness across all devices.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Figma to Code"],
    demoUrl: "https://example.com/demo-web-design",
    githubUrl: "https://github.com/MuzammalKhalil",
  },
  {
    id: "nextestate",
    title: "NextEstate - Luxury Real Estate Portal",
    displayTitle: "Web Development",
    subtitle: "High-Performance Property Discovery Platform",
    category: "Next.js",
    tag: "Concept / Featured Project",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    summary: "A modern real estate discovery platform built with Next.js 14 and Tailwind CSS featuring dynamic filtering, server-side caching, and interactive map views.",
    problem: "Real estate platforms often suffer from slow initial load times, sluggish search filters, and poor mobile responsiveness, leading to high bounce rates.",
    role: "Lead Frontend Architect — Responsible for system design, component architecture, state management, and Core Web Vitals optimization.",
    approach: "Leveraged Next.js App Router for hybrid static & dynamic rendering, crafted a modular search filter system with URL sync, and utilized Tailwind CSS for a fluid, accessible UI.",
    outcome: "Achieved a 98/100 Lighthouse score, 65% faster initial render compared to benchmark legacy portals, and smooth mobile usability across all breakpoints.",
    technologies: ["Next.js 14", "React 18", "Tailwind CSS", "TypeScript", "REST API"],
    demoUrl: "https://example.com/demo-nextestate",
    githubUrl: "https://github.com/MuzammalKhalil",
  },
  {
    id: "saasmetric",
    title: "SaaSMetric - Revenue & Growth Analytics",
    displayTitle: "React Application",
    subtitle: "Interactive Data Visualizations & Telemetry Dashboard",
    category: "React.js",
    tag: "Production-Ready Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary: "A clean, modern SaaS analytics dashboard presenting financial metrics, user retention graphs, and cohort churn rates with intuitive filtering.",
    problem: "Financial metrics are often cluttered and unreadable on tablet and mobile screens, making on-the-go decisions difficult for founders.",
    role: "Frontend Engineer — Designed the UI layout, component hierarchy, responsive grid views, and client-side data calculations.",
    approach: "Constructed modular React components with pure Tailwind CSS. Implemented accessible tabular data views with fallback cards on mobile and snappy filter transitions.",
    outcome: "Delivered a lightweight dashboard bundle under 180kb gzipped, ensuring zero lag during rapid range switching and high-density data review.",
    technologies: ["React.js", "Tailwind CSS", "Lucide React", "Context API", "Responsive UI"],
    demoUrl: "https://example.com/demo-saasmetric",
    githubUrl: "https://github.com/MuzammalKhalil",
  },
  {
    id: "medicare",
    title: "ApexCare Health & Wellness Clinic",
    displayTitle: "WordPress Platform",
    subtitle: "Custom WordPress & Modern Client Experience",
    category: "WordPress",
    tag: "Production / Client Project",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    summary: "A comprehensive digital presence for a multi-specialty healthcare provider featuring appointment bookings, physician directory, and fast-loading service portals.",
    problem: "The client operated with a fragmented system where non-technical staff struggled to update medical departments, leading to customer confusion and lost booking leads.",
    role: "Full Frontend & CMS Developer — Built custom responsive components, configured custom post types, and trained client administrators.",
    approach: "Engineered a custom WordPress build utilizing tailored WPBakery visual modules and lightweight CSS overrides. Integrated structured medical schema markup for local SEO.",
    outcome: "Increased patient inquiry conversions by 45% within 3 months, zero plugin bloat, and achieved sub-1.2s page load speeds.",
    technologies: ["WordPress", "WPBakery", "Custom CSS3/PHP", "JavaScript", "Schema SEO", "Responsive Design"],
    demoUrl: "https://example.com/demo-apexcare",
    githubUrl: "https://github.com/MuzammalKhalil",
  },
  {
    id: "luxestudio",
    title: "LuxeStudio Interior & Architectural Design",
    displayTitle: "Wix Studio Project",
    subtitle: "High-End Visual Portfolio & Client Acquisition Site",
    category: "CMS & Design",
    tag: "Client Showcase",
    image: "https://images.unsplash.com/photo-1581291518655-9523c93269c4?auto=format&fit=crop&w=1200&q=80",
    summary: "An ultra-refined portfolio site for an award-winning architecture studio, combining high-resolution image galleries with smooth micro-interactions.",
    problem: "High-resolution architectural renders were causing severe page weight issues and layout shifts on mobile devices.",
    role: "Web Specialist & UI Integrator — Designed visual layouts, optimized asset delivery pipelines, and ensured cross-browser consistency.",
    approach: "Utilized Wix Studio platform combined with custom responsive CSS breakpoints, automated WebP image delivery, and lazy-loading transitions.",
    outcome: "Reduced overall page payload by 70% while maintaining crisp 4K visual fidelity for high-end clientele.",
    technologies: ["Wix Studio", "Custom CSS", "JavaScript", "Image Optimization", "Mobile-First Design"],
    demoUrl: "https://example.com/demo-luxestudio",
    githubUrl: "https://github.com/MuzammalKhalil",
  },
  {
    id: "e-commerce-portal",
    title: "ShopPulse - Headless E-Commerce Store",
    displayTitle: "E-Commerce Store",
    subtitle: "High-Speed Shopping & Product Catalog",
    category: "Next.js",
    tag: "Production Build",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary: "A lightning-fast headless e-commerce store with real-time cart state, instant product filtering, and seamless checkout experience.",
    problem: "Traditional monolithic stores suffered from slow checkout funnels, leading to high abandonment rates.",
    role: "Senior Frontend Developer — Created state stores, cart drawers, and responsive checkout views.",
    approach: "Integrated modern React hooks with Tailwind CSS styling, optimized web fonts, and sub-second asset hydration.",
    outcome: "Achieved 35% improvement in checkout completion and smooth 60fps animations.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "WooCommerce", "REST API"],
    demoUrl: "https://example.com/demo-shoppulse",
    githubUrl: "https://github.com/MuzammalKhalil",
  }
];

export const workProcess = [
  {
    step: "01",
    title: "Requirements & Discovery",
    desc: "Uncovering user pain points, business goals, and performance budgets before writing a single line of code.",
    tools: ["Figma", "User Flow Diagrams", "Spec Docs"]
  },
  {
    step: "02",
    title: "System & UI Architecture",
    desc: "Drafting semantic HTML structures, accessible component hierarchies, and a strict light-theme design system.",
    tools: ["Tailwind Config", "Component Atomic Design", "Type Specs"]
  },
  {
    step: "03",
    title: "Agile AI-Augmented Development",
    desc: "Using AI coding agents thoughtfully for rapid scaffolding, while manually inspecting, refactoring, and verifying every line of code.",
    tools: ["React / Next.js", "VS Code", "AI Pair Programming", "Strict Linting"]
  },
  {
    step: "04",
    title: "Rigorous QA & Performance Testing",
    desc: "Validating across Chrome, Safari, Firefox, iOS, and Android. Auditing Lighthouse scores, keyboard navigation, and zero console errors.",
    tools: ["Lighthouse", "BrowserStack", "WCAG Contrast Checker"]
  },
  {
    step: "05",
    title: "Deployment & Ongoing Iteration",
    desc: "Deploying via automated CI/CD pipelines to high-speed CDN edges with production-ready asset compression.",
    tools: ["Vercel", "GitHub Actions", "Web Vitals Monitor"]
  }
];

export const experienceData = [
  {
    period: "2022 — Present",
    role: "Senior Frontend & Web Specialist",
    company: "Freelance & Digital Agency Engagements",
    location: "Remote / Hybrid",
    description: "Spearheading end-to-end frontend development for high-growth businesses. Architecting modern web apps with React.js, Next.js, and custom enterprise WordPress/Wix solutions.",
    highlights: [
      "Built 20+ responsive web projects achieving average 95+ Google PageSpeed scores.",
      "Migrated monolithic websites into modern headless and component-driven architectures.",
      "Collaborated with international clients to deliver custom WordPress & WPBakery theme systems."
    ]
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Creative Web Studio",
    location: "On-site / Hybrid",
    description: "Developed user interfaces, customer portals, and visual CMS sites for diverse retail, medical, and corporate clients.",
    highlights: [
      "Engineered pixel-perfect layouts from Figma designs using HTML5, CSS3/Sass, and JavaScript.",
      "Customized WPBakery, Elementor, and custom WordPress post types for easy non-tech client edits.",
      "Reduced client site loading times by up to 50% via asset optimization and script deferral."
    ]
  },
  {
    period: "2019 — 2020",
    role: "Junior Web Developer",
    company: "Tech Solutions Hub",
    location: "Lahore, Pakistan",
    description: "Started professional career focusing on fundamental web standards, responsive web design, cross-browser compatibility, and WordPress maintenance.",
    highlights: [
      "Constructed 30+ responsive static landing pages and client sites.",
      "Troubleshot CSS bugs, mobile view glitches, and plugin conflicts across legacy websites.",
      "Mastered Git version control and modern web development workflows."
    ]
  }
];

export const educationData = [
  {
    year: "2015 — 2019",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Recognized University / Institute",
    details: "Foundational coursework in Data Structures, Algorithms, Software Engineering, Object-Oriented Programming, and Web Technologies."
  },
  {
    year: "Certifications",
    degree: "Professional Frontend & Modern Web Certifications",
    institution: "Industry Standards & Online Academies",
    details: "Advanced React & Next.js Design Patterns, Modern JavaScript Deep Dive, Core Web Vitals & Web Performance Optimization."
  }
];
