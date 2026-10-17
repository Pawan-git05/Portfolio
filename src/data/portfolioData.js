// ==========================================================================
// PAWAN SINGH — PORTFOLIO DATA STORE & TELEMETRY
// ==========================================================================

export const personalInfo = {
  name: "Pawan Singh",
  firstName: "PAWAN",
  lastName: "SINGH",
  title: "Software Engineer & AI Developer",
  roles: [
    "Full-Stack Developer",
    "AI & ML Developer",
    "DSA Specialist & Problem Solver",
    "Systems & Compiler Builder"
  ],
  bio: "Computer Science undergraduate at Graphic Era Hill University (GEHU, 2027) with deep passion for building full-stack platforms, compiler architectures, and AI/ML solutions. Proven problem-solver with 200+ solved algorithmic challenges.",
  availability: "Open to Internships & Engineering Roles",
  location: "Dehradun / Delhi NCR, India",
  timezone: "IST (UTC +5:30)",
  email: "Singhbisht310@gmail.com",
  phone: "+91 8445606822",
  socials: {
    github: "https://github.com/Pawan-git05",
    linkedin: "https://www.linkedin.com/in/pawan-singh-a46876280/",
    email: "mailto:Singhbisht310@gmail.com",
    resume: "/Pawan_Resume.pdf"
  }
};

// 6 High-Impact Telemetry Stats
export const telemetryStats = [
  { label: "DSA Solved", value: 200, suffix: "+", icon: "Brain", color: "#A855F7" },
  { label: "Class XII", value: 84, suffix: "%", icon: "Trophy", color: "#FB923C" },
  { label: "GEHU CGPA", value: 7.6, suffix: "", icon: "Star", color: "#A855F7" },
  { label: "Certifications", value: 4, suffix: "+", icon: "Rocket", color: "#FB923C" },
  { label: "Core Projects", value: 3, suffix: "+", icon: "Zap", color: "#A855F7" },
  { label: "Team Velocity", value: 100, suffix: "%", icon: "Activity", color: "#FB923C" }
];

// 4 Core Architecture Domain Cards
export const coreDomains = [
  {
    title: "Intelligent AI Systems",
    icon: "Cpu",
    description: "Architecting custom neural networks, reinforcement learning pipelines, and LLM orchestration workflows. Experienced with PyTorch, model optimization, and low-latency inference.",
    color: "#A855F7"
  },
  {
    title: "Full-Stack Systems",
    icon: "Layers",
    description: "Developing highly responsive client UIs coupled with high-throughput backend services. Expertise in React architecture, asynchronous message queues, and TypeScript structures.",
    color: "#FB923C"
  },
  {
    title: "Data Structures & Algorithms",
    icon: "Brain",
    description: "Solving complex computational challenges with mastery in graph theory, dynamic programming, tree traversals, and asymptotic optimization across competitive platforms.",
    color: "#A855F7"
  },
  {
    title: "Cloud & Sandbox Architecture",
    icon: "Cloud",
    description: "Designing isolated Docker runtimes, CI/CD automated test pipelines, and Linux server orchestration for secure, scalable microservice hosting.",
    color: "#FB923C"
  }
];

// Categorized Skills Matrix
export const skillsData = {
  "AI & ML": [
    { name: "PyTorch", level: 90, icon: "🔥" },
    { name: "TensorFlow", level: 82, icon: "🧠" },
    { name: "Scikit-Learn", level: 88, icon: "📊" },
    { name: "OpenCV", level: 85, icon: "👁️" },
    { name: "LangChain / LLMs", level: 88, icon: "🤖" },
    { name: "NumPy & Pandas", level: 94, icon: "📈" }
  ],
  "Languages": [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "C++", level: 90, icon: "⚡" },
    { name: "JavaScript", level: 92, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "SQL", level: 88, icon: "🗄️" }
  ],
  "Frontend": [
    { name: "React", level: 92, icon: "⚛️" },
    { name: "Next.js", level: 86, icon: "▲" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "Three.js / WebGL", level: 80, icon: "🌐" },
    { name: "HTML5 / CSS3", level: 95, icon: "🌐" }
  ],
  "Backend & DB": [
    { name: "Node.js", level: 88, icon: "🟢" },
    { name: "Express.js", level: 85, icon: "🚂" },
    { name: "FastAPI", level: 90, icon: "⚡" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
    { name: "MongoDB", level: 84, icon: "🍃" },
    { name: "Redis", level: 80, icon: "🔴" }
  ],
  "DSA & Core": [
    { name: "Arrays & Strings", level: 95, icon: "📊" },
    { name: "Trees & Graphs", level: 88, icon: "🌳" },
    { name: "Dynamic Programming", level: 84, icon: "🧩" },
    { name: "Sorting & Searching", level: 92, icon: "🔍" },
    { name: "System Design", level: 82, icon: "📐" }
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 92, icon: "🐙" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "Linux / Shell", level: 88, icon: "🐧" },
    { name: "AWS Cloud", level: 75, icon: "☁️" },
    { name: "Postman / REST", level: 90, icon: "📬" }
  ]
};

// Projects & Case Studies (From Resume & Live GitHub)
export const projectsData = [
  {
    id: 1,
    title: "CloudLearn",
    subtitle: "Full-Stack Learning & Coding Practice Platform (Ongoing)",
    description: "Full-stack learning platform with role-based dashboards, coding practice, and LLM-assisted DSA problem generation using TypeScript, Prisma ORM, and PostgreSQL.",
    longDescription: "Built a full-stack learning platform with role-based dashboards, coding practice, and LLM-assisted DSA problem generation using TypeScript, Prisma ORM, and PostgreSQL. Designed scalable REST APIs and optimized PostgreSQL queries for personalized recommendations and efficient submission analytics.",
    tech: ["TypeScript", "Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Three.js"],
    github: "https://github.com/Pawan-git05/CloudLearn",
    demo: "https://github.com/Pawan-git05/CloudLearn",
    featured: true,
    color: "#A855F7",
    category: "Full Stack / AI",
    stats: {
      queries: "Optimized",
      architecture: "Prisma+Postgres",
      features: "LLM Assisted"
    },
    problem: "Traditional coding platforms lack personalized DSA problem generation and integrated role-based dashboards with real-time analytics.",
    solution: "Designed scalable REST APIs, role-based access control, and integrated LLM workflows for dynamic problem generation and submission evaluation.",
    challenges: [
      "Optimizing complex PostgreSQL queries for personalized recommendation metrics",
      "Dynamic Three.js & Framer Motion interactive UI performance",
      "Prisma schema relational modeling across submissions and user roles"
    ],
    learnings: [
      "Advanced Prisma schema migrations and relation queries",
      "Next.js App Router performance tuning and server actions",
      "Full-stack state management with TypeScript end-to-end typing"
    ],
    mockFileName: "problem_generator.ts",
    mockCodeLines: [
      "export async function generateDSAProblem(topic: string, difficulty: Difficulty) {",
      "  const prompt = buildStructuredPrompt(topic, difficulty);",
      "  const problem = await llmClient.generateStructuredJSON(prompt);",
      "  return await prisma.dSAProblem.create({ data: { ...problem } });",
      "}"
    ]
  },
  {
    id: 2,
    title: "DonorChain",
    subtitle: "Real-Time Emergency Donation & Spatial Indexing Network",
    description: "Emergency donation platform using PostGIS spatial indexing for efficient donor matching and nearby pharmacy discovery with Polygon-based verification.",
    tech: ["React", "Node.js", "PostgreSQL", "PostGIS", "Polygon", "Twilio", "Firebase"],
    github: "https://github.com/Pawan-git05/Donarchain",
    demo: "https://github.com/Pawan-git05/Donarchain",
    featured: false,
    color: "#0EA5E9",
    category: "Full Stack / Web3",
    mockFileName: "spatial_matcher.js",
    mockCodeLines: [
      "const donors = await db.query(`",
      "  SELECT id, ST_Distance(geom, ST_MakePoint($1, $2)::geography) AS distance",
      "  FROM donor_locations WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 10000)",
      "  ORDER BY distance ASC LIMIT 10;`, [longitude, latitude]);"
    ]
  },
  {
    id: 3,
    title: "CSV Query Compiler (CQL)",
    subtitle: "Recursive Descent Parsing & Abstract Syntax Tree (AST) Compiler",
    description: "A SQL-like compiler that translates structured queries on CSV datasets into executable Python code through lexical analysis, parsing, semantic validation, and code generation.",
    tech: ["Python", "Recursive Descent Parsing", "CSV", "Dataclasses", "AST"],
    github: "https://github.com/Pawan-git05/CQL",
    demo: "https://github.com/Pawan-git05/CQL",
    featured: false,
    color: "#10B981",
    category: "Compiler Design",
    mockFileName: "compiler_ast.py",
    mockCodeLines: [
      "class SQLCompiler(ASTVisitor):",
      "    def visit_SelectNode(self, node: SelectNode) -> str:",
      "        filtered = self.visit(node.where_clause)",
      "        grouped = self.visit(node.group_by) if node.group_by else filtered",
      "        return self.codegen.generate_executor(grouped, node.projections)"
    ]
  }
];

// Coding Profiles Telemetry
export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "pawan_singh",
    url: "https://leetcode.com",
    stats: { solved: "200+", focus: "DSA & Problem Solving", rating: "Active" },
    color: "#FFA116",
    bgColor: "rgba(255, 161, 22, 0.08)",
    borderColor: "rgba(255, 161, 22, 0.25)",
    description: "Solved 200+ DSA algorithmic challenges focusing on Arrays, Trees, Graphs, and DP"
  },
  {
    platform: "GitHub",
    username: "Pawan-git05",
    url: "https://github.com/Pawan-git05",
    stats: { repos: "Active", branch: "main", stars: "Rising" },
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    description: "Full-stack web projects, AST compiler architectures, and spatial networking codebases"
  },
  {
    platform: "LinkedIn",
    username: "pawan-singh-a46876280",
    url: "https://www.linkedin.com/in/pawan-singh-a46876280/",
    stats: { network: "Tech Community", connections: "Active", status: "Open to Roles" },
    color: "#0A66C2",
    bgColor: "rgba(10, 102, 194, 0.08)",
    borderColor: "rgba(10, 102, 194, 0.25)",
    description: "Professional updates, software engineering projects, and certifications"
  }
];

// Academic Background
export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Graphic Era Hill University (GEHU), Dehradun",
    year: "2023 — 2027",
    current: "2027 Batch",
    cgpa: "7.6 / 10.0",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ],
    highlights: [
      "Led a 4-member team to 100% on-time delivery of OS, DBMS, and AI course projects",
      "Introduced structured code-review workflows reducing rework cycles by 20%",
      "Specializing in modern full-stack engineering and cloud-native systems"
    ]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Senior Secondary School",
    year: "2022 — 2023",
    score: "84%",
    stream: "Science"
  }
];

// Achievements & Milestones (Directly from Resume)
export const achievementsData = [
  {
    title: "Oracle OCI 2025 Certified AI Foundations Associate",
    category: "Professional Certification",
    date: "2025",
    description: "Demonstrated foundation competence in AI, machine learning frameworks, neural architectures, and Oracle Cloud AI infrastructure.",
    badge: "🏅 Oracle Certified",
    color: "#FB923C"
  },
  {
    title: "AWS ML Fundamentals & Generative AI Solutions",
    category: "AWS Cloud & GenAI",
    date: "2025",
    description: "Certified in machine learning paradigms, model deployment on AWS, and generative AI design patterns.",
    badge: "☁️ AWS AI/ML",
    color: "#A855F7"
  },
  {
    title: "Solutions Architecture Job Simulation — Forage",
    category: "Industry Simulation",
    date: "Jan 2026",
    description: "Completed rigorous real-world scenario simulations in distributed system architecture, scalability design, and secure enterprise integration.",
    badge: "🏛️ Solutions Architect",
    color: "#38BDF8"
  },
  {
    title: "200+ DSA Problems Solved",
    category: "Algorithmic Mastery",
    date: "Ongoing",
    description: "Consistent problem solver across LeetCode mastering data structures, graph traversals, and dynamic programming.",
    badge: "⚡ 200+ DSA",
    color: "#4ADE80"
  }
];

// Navigation Links
export const navLinks = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "coding-profiles", label: "Profiles", num: "05" },
  { id: "education", label: "Education", num: "06" },
  { id: "achievements", label: "Awards", num: "07" },
  { id: "contact", label: "Contact", num: "08" }
];
