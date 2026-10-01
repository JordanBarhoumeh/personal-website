export interface Experience {
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  skills?: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  tags: string[];
  association?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const name = "Jordan Barhoumeh";
export const title = "AI/ML Engineer";
export const company = "News Corp Australia";
export const location = "Australia";

export const heroSubtitles = ["AI/ML Engineer", "Data Scientist", "Problem Solver"];

export const about = `As a Data Science graduate with a strong foundation in data analysis, statistical modelling and machine learning, I'm driven by curiosity and a desire to solve real-world problems through practical, data-driven solutions.

Currently working in an AI/ML role, I'm gaining hands-on experience applying data science techniques to real systems and learning how analytical work translates into meaningful outcomes. I enjoy understanding problems deeply, exploring data, and contributing to solutions that create tangible value.

With experience in customer engagement, team leadership and industry projects, I thrive in collaborative environments where I can continue to learn, grow and make a meaningful impact.`;

export const experiences: Experience[] = [
  {
    company: "News Corp Australia",
    role: "Graduate AI/ML Engineer",
    type: "Full-time",
    startDate: "Sep 2025",
    endDate: "Present",
    description:
      "Applying data science and machine learning techniques to real production systems. Working on AI-driven solutions that translate analytical work into meaningful business outcomes across News Corp's portfolio.",
  },
  {
    company: "News Corp Australia",
    role: "Tech Data Intern",
    type: "Internship",
    startDate: "Jul 2025",
    endDate: "Sep 2025",
    description:
      "Completed a data-focused internship that led to a full-time graduate role. Gained hands-on experience with the data infrastructure and ML pipelines supporting News Corp's technology division.",
  },
  {
    company: "WEZCO PTY LTD",
    role: "Assistant Manager",
    type: "Part-time",
    startDate: "Oct 2024",
    endDate: "Jul 2025",
    description:
      "Returned to a leadership role overseeing daily operations, team coordination, and customer service excellence while completing final year of university.",
  },
  {
    company: "Domain",
    role: "Customer Experience Partner",
    type: "Contract",
    startDate: "Jan 2024",
    endDate: "Oct 2024",
    location: "Sydney, New South Wales, Australia",
    description:
      "Delivered customer engagement and support for one of Australia's leading property platforms. Developed strong communication and problem-solving skills in a fast-paced, data-informed environment.",
  },
  {
    company: "WEZCO PTY LTD",
    role: "Assistant Manager",
    type: "Part-time",
    startDate: "Jul 2020",
    endDate: "Jan 2024",
    location: "Sydney, New South Wales, Australia",
    description:
      "Managed team operations and customer-facing responsibilities over 3.5 years. Built strong foundations in leadership, time management, and balancing work with full-time studies.",
  },
];

export const education: Education = {
  institution: "Macquarie University",
  degree: "Bachelor of Technology (BTech), Data Science",
  startDate: "Feb 2022",
  endDate: "Nov 2025",
  skills: ["Analytical Skills", "R", "Python"],
};

export const projects: Project[] = [
  {
    title: "Intelligent Document Analysis & Query System",
    date: "Jul 2025 – Aug 2025",
    description:
      "An end-to-end system that transforms static documents into an interactive, AI-powered search application with natural language querying and a Deep Research mode for complex analysis.",
    fullDescription:
      "This end-to-end system transforms a library of static documents into an interactive, AI-powered search application. It functions as a specialized question-answering tool whose knowledge is strictly limited to the provided source documents, ensuring all responses are verifiable.\n\nThe Data Preparation phase is automated by a pipeline of custom scripts that store documents in a database, convert them into machine-readable text using AI-powered image analysis and OCR, then enrich metadata with AI-generated summaries, categories, authors, and keywords.\n\nThe User Application provides a web interface where users ask questions in natural language. An AI search service returns synthesized answers with clickable citations. For complex queries, a Deep Research mode automates multi-step analysis, generating follow-up questions and compiling findings into structured reports with executive summaries, key findings, and actionable insights.",
    highlights: [
      "Scales across thousands of documents",
      "Deep Research mode for multi-step complex analysis",
      "AI-powered OCR with image analysis fallback",
      "Verifiable answers with clickable source citations",
    ],
    tags: ["Generative AI", "LLMs", "RAG", "OCR", "Python", "NLP"],
  },
  {
    title: "IoT Fire Detector Data Analysis",
    date: "Mar 2025 – Jun 2025",
    description:
      "Industry capstone project improving reliability of IoT fire detection systems through machine learning-based fault prediction and anomaly detection.",
    fullDescription:
      "As part of my capstone at Macquarie University, I collaborated with FiftyFive Group on a Data Science project aimed at improving reliability of IoT fire detection systems.\n\nOver the course of the project, I worked with a large dataset of detector event logs to uncover patterns in faults, isolations, and alarms. I applied machine learning models, including Random Forest for fault prediction and Isolation Forest for anomaly detection, to support early identification of potential issues and help reduce false positives.\n\nThe work was guided by weekly engagement with industry stakeholders and focused on translating data insights into practical recommendations that aligned with operational and confidentiality requirements.",
    highlights: [
      "Random Forest for fault prediction",
      "Isolation Forest for anomaly detection",
      "Weekly stakeholder engagement with industry partners",
      "Reduced false positive rates in detection systems",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Anomaly Detection",
      "Data Analysis",
      "IoT",
    ],
    association: "Macquarie University & FiftyFive Group",
  },
];

export const certifications: Certification[] = [
  {
    name: "Data Visualization for Data Analysts and Analytics",
    issuer: "LinkedIn",
    date: "Jul 2025",
  },
  {
    name: "Analyze and Visualize Looker Data",
    issuer: "Google",
    date: "Jul 2025",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "2024",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
  },
  {
    name: "Python for Data Science and AI",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "SQL for Data Science",
    issuer: "UC Davis",
    date: "2023",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
  },
  {
    name: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
  },
  {
    name: "Data Science Methodology",
    issuer: "IBM",
    date: "2023",
  },
];

export const volunteering: Volunteering[] = [
  {
    role: "Treasurer",
    organization: "Saints Peter and Paul Antiochian Orthodox Church",
    startDate: "Nov 2024",
    endDate: "Present",
    description:
      "Full ownership of financial management and strategic oversight for youth events and programs. Preparing budgets, monitoring expenses, maintaining financial records, and working closely with leadership to allocate resources effectively and build long-term financial sustainability.",
  },
  {
    role: "Team Leader",
    organization: "Saints Peter and Paul Antiochian Orthodox Church",
    startDate: "Oct 2020",
    endDate: "Present",
    description:
      "Leading educational programs for children in the community, teaching communication, prayer, and activities that foster personal and spiritual growth. Over 5 years of consistent volunteer leadership.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "ML & AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "NLP",
      "Computer Vision",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Statistical Data Analysis",
      "Data Visualization",
      "Data Modelling",
      "Analytical Skills",
      "Data Cleaning",
      "Feature Engineering",
      "A/B Testing",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Looker",
      "Git",
      "Jupyter",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Docker",
      "Azure",
      "VS Code",
    ],
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/jordan-barhoumeh/",
  email: "mailto:jordanbarhoumeh@gmail.com",
};

export const heroLines = [
  ["Data", "is"],
  ["my", "craft"],
];

export const heroSubline = "turning complexity into clarity";
