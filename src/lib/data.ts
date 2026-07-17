// ═══════════════════════════════════════════════════════════
//  TYPES
// ═══════════════════════════════════════════════════════════

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  tech: string[];
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
  badge?: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface WhyHireMeItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

// ═══════════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════════

export const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
] as const;

// ═══════════════════════════════════════════════════════════
//  HERO
// ═══════════════════════════════════════════════════════════

export const heroRoles = [
  'Software Engineer',
  'Backend Developer',
  'Full Stack Developer',
  'Java Developer',
  'AWS Certified Cloud Practitioner',
];

export const heroHighlights = [
  { label: 'CGPA', value: '9.19' },
  { label: 'Internships', value: '4' },
  { label: 'Hackathon Winner', value: '🏆' },
  { label: 'AWS Certified', value: '☁️' },
  { label: '2026 Graduate', value: '🎓' },
];

// ═══════════════════════════════════════════════════════════
//  ABOUT
// ═══════════════════════════════════════════════════════════

export const aboutText = [
  "I'm a Computer Engineering graduate from MIT Academy of Engineering, Pune, with a 9.19 CGPA and a sharp focus on building backend systems that scale. Over the course of four engineering internships — including stints at Amdocs and BMC Software — I've shipped production-grade automation frameworks, designed REST API testing pipelines, and built monitoring tools that actually helped teams debug faster.",
  "My core strength is Java and the Spring Boot ecosystem, where I've built everything from order-processing workflows to sidecar log collectors. I'm equally comfortable spinning up React frontends, containerizing services with Docker, or configuring CI/CD pipelines on Jenkins. I recently cleared the AWS Cloud Practitioner certification, and I'm deepening my cloud-native architecture skills.",
  "Outside of work, I've won the Amdocs 'AI for Everyday Use' Hackathon, contributed to brain tumor detection research using deep learning, and built full-stack platforms like WeCare for elderly healthcare management. I'm looking for a role where I can contribute to complex distributed systems at scale — the kind of engineering challenges that keep you thinking long after the IDE is closed.",
];

export const aboutHighlights = [
  { icon: '🎯', label: 'Backend Engineering', desc: 'Java, Spring Boot, REST APIs' },
  { icon: '☁️', label: 'Cloud & DevOps', desc: 'AWS, Docker, Jenkins, Linux' },
  { icon: '⚡', label: 'Full Stack', desc: 'React, TypeScript, Node.js' },
  { icon: '🧠', label: 'Problem Solver', desc: '400+ DSA problems solved' },
];

// ═══════════════════════════════════════════════════════════
//  EXPERIENCES
// ═══════════════════════════════════════════════════════════

export const experiences: Experience[] = [
  {
    company: 'Amdocs',
    role: 'Software Engineer Intern',
    duration: 'Jan 2026 – Jun 2026',
    location: 'Pune, India',
    type: 'Enterprise Telecom',
    tech: ['Java', 'TestNG', 'REST APIs', 'Jenkins', 'Selenium'],
    bullets: [
      'Engineered backend automation framework for telecom order workflows using Java and TestNG, reducing manual regression testing effort by 40%.',
      'Built reusable API validation utilities and data-driven test modules, enabling the QA team to create new test scenarios 3x faster.',
      'Implemented intelligent retry and polling mechanisms for asynchronous backend processes, cutting flaky test failures by 60%.',
      'Collaborated with cross-functional teams on enterprise integration pipelines handling 10K+ daily order transactions.',
    ],
  },
  {
    company: 'BMC Software',
    role: 'R&D Engineering Intern',
    duration: 'Jan 2025 – Jun 2025',
    location: 'Pune, India',
    type: 'Platform Engineering',
    tech: ['Java', 'Spring Boot', 'Linux', 'Docker', 'Shell Scripting'],
    bullets: [
      'Automated thread dump and log collection using a sidecar monitoring pattern, reducing production diagnostic time from hours to minutes.',
      'Developed a lightweight logging framework for Long Running APIs (LRAs), improving system observability across distributed services.',
      'Optimized OSGi bundle flattening for AR server startup, improving boot time performance.',
      'Worked on the Helix platform infrastructure supporting enterprise ITSM operations.',
    ],
  },
  {
    company: 'GKD 619 Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Pune, India',
    type: 'Web Development',
    tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    bullets: [
      'Developed responsive full-stack web applications with PHP backend and MySQL database integration.',
      'Designed and implemented RESTful data management interfaces serving 500+ concurrent users.',
    ],
  },
  {
    company: 'CodeAstu Technologies',
    role: 'Web Development Intern',
    duration: 'Jul 2022 – Aug 2022',
    location: 'Pune, India',
    type: 'Frontend Development',
    tech: ['Bootstrap', 'Tailwind CSS', 'JavaScript', 'Apache Tomcat'],
    bullets: [
      'Built interactive, responsive web applications using modern CSS frameworks and vanilla JavaScript.',
      'Configured and deployed applications on Apache Tomcat server, managing end-to-end deployment lifecycle.',
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  EDUCATION
// ═══════════════════════════════════════════════════════════

export const education: Education[] = [
  {
    institution: 'MIT Academy of Engineering',
    degree: 'B.Tech in Computer Engineering',
    duration: '2022 – 2026',
    grade: 'CGPA: 9.19',
    location: 'Alandi, Pune',
    highlights: [
      'Specialized in backend engineering and distributed systems',
      'Won Amdocs AI Hackathon during final year',
      'Published research on brain tumor detection using deep learning',
    ],
  },
  {
    institution: 'Government Polytechnic Pune',
    degree: 'Diploma in Computer Engineering',
    duration: '2019 – 2022',
    grade: '93.09%',
    location: 'Pune, India',
    highlights: [
      'Secured distinction with 93.09% aggregate',
      'Built foundational skills in programming and system design',
    ],
  },
  {
    institution: 'Z.P. High School',
    degree: 'SSC (Secondary School Certificate)',
    duration: '2018 – 2019',
    grade: '90.60%',
    location: 'Maharashtra, India',
  },
];

// ═══════════════════════════════════════════════════════════
//  SKILLS
// ═══════════════════════════════════════════════════════════

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Node.js', level: 72 },
      { name: 'Flask', level: 68 },
      { name: 'Express.js', level: 70 },
    ],
  },
  {
    title: 'Frontend & UI',
    icon: '🎨',
    skills: [
      { name: 'React', level: 82 },
      { name: 'TypeScript', level: 78 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Framer Motion', level: 72 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Docker', level: 75 },
      { name: 'Linux', level: 82 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Jenkins', level: 72 },
      { name: 'Maven', level: 78 },
      { name: 'Postman', level: 85 },
      { name: 'Apache Tomcat', level: 70 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════════════════════

export const projects: Project[] = [
  {
    title: 'Infinite Helix',
    tagline: 'DNA Sequence Analysis & Bioinformatics Platform',
    problem: 'Bioinformatics researchers needed an accessible tool to analyze DNA sequences without relying on expensive commercial software or complex command-line tools.',
    solution: 'Built a full-stack bioinformatics platform with an intuitive React frontend and a Python/Flask backend that performs DNA sequence alignment, mutation detection, and phylogenetic analysis in real-time.',
    impact: 'Enabled researchers to perform complex genomic analyses through a browser interface, reducing analysis setup time from hours to minutes.',
    tech: ['React', 'Python', 'Flask', 'MongoDB', 'REST APIs', 'BioPython'],
    features: [
      'Real-time DNA sequence alignment and comparison',
      'Interactive phylogenetic tree visualization',
      'Mutation detection and annotation engine',
      'Export results in standard bioinformatics formats',
    ],
    github: 'https://github.com/riyagarasangi/',
    live: '#',
    image: '/projects/infinite-helix.png',
    badge: 'Featured',
  },
  {
    title: 'Brain Tumor Detection',
    tagline: 'Deep Learning Medical Imaging Classifier',
    problem: 'Manual diagnosis of brain tumors from MRI scans is time-consuming, subjective, and prone to human error — especially in under-resourced hospitals.',
    solution: 'Developed a CNN-based deep learning model trained on 3,000+ MRI images that classifies brain tumors into four categories (glioma, meningioma, pituitary, no tumor) with 96% accuracy.',
    impact: 'Demonstrated potential to assist radiologists in early detection, reducing diagnostic turnaround time and improving patient outcomes in clinical settings.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'NumPy'],
    features: [
      'Multi-class tumor classification (4 categories)',
      'Image preprocessing and augmentation pipeline',
      'Web interface for uploading and analyzing MRI scans',
      '96% classification accuracy on test dataset',
    ],
    github: 'https://github.com/riyagarasangi/',
    live: '#',
    image: '/projects/brain-tumor.png',
    badge: 'Research',
  },
  {
    title: 'WeCare',
    tagline: 'Elderly Healthcare Management Platform',
    problem: 'Elderly patients and their caregivers lacked a centralized platform to manage medication schedules, doctor appointments, and health records — leading to missed doses and fragmented care.',
    solution: 'Built a full-stack healthcare platform with medication reminders, appointment scheduling, emergency SOS alerts, and a caregiver dashboard for remote health monitoring.',
    impact: 'Streamlined healthcare management for elderly users, reducing missed medication doses and providing caregivers with real-time health visibility.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT Auth'],
    features: [
      'Medication tracking with smart reminders',
      'Doctor appointment scheduling and history',
      'Emergency SOS alert system',
      'Role-based access for patients and caregivers',
    ],
    github: 'https://github.com/riyagarasangi/',
    live: '#',
    image: '/projects/wecare.png',
  },
  {
 title: 'Fake News Detection System',

tagline: 'AI-Powered Fake News Detection Using Machine Learning',

problem: 'The rapid spread of fake news and misinformation across online platforms makes it difficult for users to identify trustworthy information, leading to confusion and the spread of false content.',

solution: 'Built a machine learning-powered web application that analyzes news articles using Natural Language Processing (NLP) and predicts whether the content is real or fake using TF-IDF vectorization and Logistic Regression.',

impact: 'Achieved 97.67% prediction accuracy, providing users with a fast and reliable way to verify news articles while helping reduce the spread of misinformation.',

tech: ['Python', 'Flask', 'Scikit-learn', 'NLTK', 'Machine Learning', 'HTML/CSS'],

features: [
  'Real-time fake news prediction',
  'Natural Language Processing (NLP)',
  'TF-IDF text vectorization',
  'Logistic Regression classification',
  'Interactive web-based interface',
  'High accuracy news verification'
    ],
    github: 'https://github.com/riyagarasangi/',
    live: '#',
    image: '/projects/job-radar.png',
  },
];

// ═══════════════════════════════════════════════════════════
//  ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════

export const achievements: Achievement[] = [
  {
    icon: '🏆',
    title: 'Amdocs AI Hackathon Winner',
    description: 'Won the "AI for Everyday Use" hackathon at Amdocs, competing against 50+ teams to build an innovative AI-powered solution for enterprise workflow automation.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: '☁️',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Earned the AWS Cloud Practitioner certification, validating foundational knowledge of AWS cloud services, architecture, security, and pricing models.',
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    icon: '🎓',
    title: 'CGPA 9.19 — Academic Excellence',
    description: 'Maintained a 9.19 CGPA throughout B.Tech in Computer Engineering at MIT Academy of Engineering, consistently ranking among the top performers.',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: '💼',
    title: '4 Software Engineering Internships',
    description: 'Completed four progressive internships at CodeAstu, GKD619, BMC Software, and Amdocs — growing from frontend development to enterprise backend engineering.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

// ═══════════════════════════════════════════════════════════
//  CERTIFICATIONS
// ═══════════════════════════════════════════════════════════

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    icon: '☁️',
    link: '#',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: '2024',
    icon: '🎓',
    link: '#',
  },
  {
    title: 'CCNA',
    issuer: 'Cisco',
    date: '2024',
    icon: '📡',
    link: '#',
  },
];


// ═══════════════════════════════════════════════════════════
//  STATS
// ═══════════════════════════════════════════════════════════

export const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Internships', decimals: 0 },
  { value: 20, suffix: '+', label: 'Technologies', decimals: 0 },
  { value: 4, suffix: '', label: 'Major Projects', decimals: 0 },
  { value: 1, suffix: '', label: 'Hackathon Win', decimals: 0 },
  { value: 9.19, suffix: '', label: 'CGPA', decimals: 2 },
];

// ═══════════════════════════════════════════════════════════
//  WHY HIRE ME
// ═══════════════════════════════════════════════════════════

export const whyHireMe: WhyHireMeItem[] = [
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    description: 'Deep experience building scalable backend systems with Java, Spring Boot, and microservices architecture.',
  },
  {
    icon: '☕',
    title: 'Java Expertise',
    description: 'Strong command of Java ecosystem — OOP, multithreading, collections, streams, and enterprise patterns.',
  },
  {
    icon: '🔌',
    title: 'REST API Design',
    description: 'Designed and tested RESTful APIs at Amdocs and BMC Software, handling enterprise-grade transaction volumes.',
  },
  {
    icon: '☁️',
    title: 'AWS & Cloud',
    description: 'AWS Certified Cloud Practitioner with hands-on experience in cloud-native deployment and architecture.',
  },
  {
    icon: '🤖',
    title: 'Automation',
    description: 'Built backend automation frameworks that reduced manual testing effort by 40% at Amdocs.',
  },
  {
    icon: '🧠',
    title: 'Problem Solving',
    description: 'Strong analytical mindset honed through competitive programming, DSA practice, and hackathon wins.',
  },
  {
    icon: '⚡',
    title: 'Fast Learner',
    description: 'Consistently ramped up on new tech stacks within weeks — from Docker to Spring Boot to AWS in internships.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Thrived in cross-functional teams at enterprise companies, collaborating with QA, DevOps, and product.',
  },
  {
    icon: '🚀',
    title: 'Ship-Ready Code',
    description: 'Focused on writing production-quality code with proper testing, logging, and documentation from day one.',
  },
];

// ═══════════════════════════════════════════════════════════
//  TESTIMONIALS
// ═══════════════════════════════════════════════════════════

export const testimonials: Testimonial[] = [
  {
    name: 'Engineering Manager',
    role: 'Backend Automation Team',
    company: 'Amdocs',
    text: "Riya demonstrated exceptional ownership of the automation framework. She independently designed the retry mechanism for async workflows, which significantly improved our test reliability. Her Java skills and attention to detail are well beyond her experience level.",
    avatar: 'AM',
  },
  {
    name: 'Technical Mentor',
    role: 'Platform Engineering',
    company: 'BMC Software',
    text: "Riya's work on the sidecar monitoring tool and the LRA logging framework showed a mature understanding of distributed systems. She took initiative to optimize the OSGi bundle loading, which was outside her assigned scope — that's the kind of engineer you want on your team.",
    avatar: 'BM',
  },
  {
    name: 'Project Supervisor',
    role: 'Department of Computer Engineering',
    company: 'MIT Academy of Engineering',
    text: "Riya consistently performed at the top of her class and her project work — particularly the brain tumor detection system — demonstrated both strong technical fundamentals and the ability to tackle real-world problems with innovative solutions.",
    avatar: 'PS',
  },
];

// ═══════════════════════════════════════════════════════════
//  SOCIAL LINKS
// ═══════════════════════════════════════════════════════════

export const socialLinks = {
  github: 'https://github.com/riyagarasangi/',
  linkedin: 'https://www.linkedin.com/in/riya-garasangi-0917ba2ab',
  instagram: 'https://www.instagram.com/riyagarasangi?utm_source=qr&igsh=YzFjb2M4cnJ3ZnZ5',
  email: 'riyagarasangi@gmail.com',
  resume: '/Riya_Garasangi_resume.pdf',
  resumeLatest: '/Riya_Garasangi_resume.pdf',
};

