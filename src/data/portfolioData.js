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
    leetcode: "https://leetcode.com/u/PawanSIngh12T/",
    email: "mailto:Singhbisht310@gmail.com",
    resume: "/Pawan_Resume.pdf"
  }
};

// 6 High-Impact Telemetry Stats
export const telemetryStats = [
  { label: "DSA Solved", value: 200, suffix: "+", icon: "Brain", color: "#FFA116", link: "https://leetcode.com/u/PawanSIngh12T/" },
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

// Categorized Skills Matrix (Strictly from Pawan_Resume.pdf)
export const skillsData = {
  "Languages": [
    { name: "Java", level: 90, icon: "☕" },
    { name: "C++", level: 92, icon: "⚡" },
    { name: "C", level: 85, icon: "🔷" },
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 88, icon: "🟨" }
  ],
  "Web Technologies": [
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 92, icon: "🎨" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "REST APIs", level: 88, icon: "🔌" },
    { name: "JSON", level: 95, icon: "📄" }
  ],
  "Databases": [
    { name: "MySQL", level: 88, icon: "🐬" },
    { name: "PostgreSQL", level: 86, icon: "🐘" },
    { name: "SQLite", level: 84, icon: "💾" },
    { name: "MongoDB", level: 82, icon: "🍃" },
    { name: "SQL", level: 90, icon: "🗄️" }
  ],
  "Tools & Platforms": [
    { name: "Git", level: 90, icon: "🌿" },
    { name: "GitHub", level: 92, icon: "🐙" },
    { name: "Postman", level: 88, icon: "🚀" },
    { name: "IntelliJ IDEA", level: 85, icon: "💡" },
    { name: "VS Code", level: 95, icon: "💻" }
  ],
  "Core CS": [
    { name: "Data Structures & Algorithms", level: 92, icon: "📊" },
    { name: "Object-Oriented Programming", level: 90, icon: "🧱" },
    { name: "Database Management Systems", level: 88, icon: "🗄️" },
    { name: "Operating Systems", level: 85, icon: "⚙️" },
    { name: "Computer Networks", level: 84, icon: "🌐" }
  ]
};

// Projects & Case Studies (Strictly From Pawan_Resume.pdf)
export const projectsData = [
  {
    id: 1,
    title: "CloudLearn",
    subtitle: "Full-Stack Learning & Coding Practice Platform (Ongoing)",
    category: "Full Stack & AI",
    featured: true,
    color: "#A855F7",
    github: "https://github.com/Pawan-git05/CloudLearn",
    demo: "https://github.com/Pawan-git05/CloudLearn",
    description: "Built a full-stack learning platform with role-based dashboards, coding practice, and LLM-assisted DSA problem generation using TypeScript, Prisma ORM, and PostgreSQL.",
    
    // Categorized Tech Stack
    techStackCategorized: {
      "Frontend": ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
      "Backend & ORM": ["Prisma ORM", "REST APIs", "Node.js runtime"],
      "Database": ["PostgreSQL"],
      "AI / Intelligence": ["LLM API Integration", "Structured Prompt Engineering"]
    },
    tech: ["TypeScript", "Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Three.js"],

    // Interactive Slider Points (Step-by-step presentation)
    slides: [
      {
        step: "01",
        title: "Role-Based Architecture & Dynamic Practice",
        subtitle: "Enterprise Access Control & Dashboards",
        description: "Built a full-stack learning platform with customized role-based dashboards (Admin, Mentor, Student) providing tailored views, problem curation workflows, and real-time coding practice environments.",
        highlight: "Enterprise RBAC + Next.js App Router"
      },
      {
        step: "02",
        title: "LLM-Assisted DSA Problem Generation",
        subtitle: "Automated Algorithmic Problem Synthesis",
        description: "Engineered an AI-assisted pipeline that leverages Large Language Models to formulate fresh Data Structures & Algorithms challenges with difficulty parameters, test fixtures, and constraints.",
        highlight: "Structured JSON Output + Automated Test Case Generation"
      },
      {
        step: "03",
        title: "Database Optimization & High-Throughput APIs",
        subtitle: "Scalable REST APIs & Analytical Querying",
        description: "Designed scalable REST endpoints and optimized relational PostgreSQL queries with indexed lookups via Prisma ORM for personalized learning recommendations and high-throughput submission analytics.",
        highlight: "Sub-50ms API Latency + Optimized Relation Queries"
      },
      {
        step: "04",
        title: "Modern Interactive UI with 3D Graphics",
        subtitle: "Three.js & Smooth Motion Engineering",
        description: "Coupled responsive Tailwind styling with fluid Framer Motion micro-interactions and lightweight Three.js canvas visualizations to engage learners and provide clean telemetry.",
        highlight: "60 FPS Render Pipeline + Zero-Layout-Shift Design"
      }
    ],

    // Technical Keywords & Concepts
    keywords: [
      { term: "Prisma ORM", definition: "Type-safe database client and automated migration tooling for PostgreSQL" },
      { term: "LLM Integration", definition: "AI-powered automated generation of DSA problems and solution verifications" },
      { term: "RBAC", definition: "Role-Based Access Control ensuring secure user authorization across dashboards" },
      { term: "Query Optimization", definition: "Indexing and efficient join execution to maintain fast response times under load" },
      { term: "Three.js & Framer", definition: "WebGL accelerated 3D graphics and spring-physics UI animation sequences" }
    ],

    stats: {
      architecture: "Prisma + Postgres",
      latency: "< 50ms APIs",
      features: "LLM Assisted DSA"
    },
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
    subtitle: "Real-Time Emergency Donation Network",
    category: "Full Stack & Web3",
    featured: false,
    color: "#0EA5E9",
    github: "https://github.com/Pawan-git05/Donarchain",
    demo: "https://github.com/Pawan-git05/Donarchain",
    description: "Developed a real-time emergency donation platform using PostGIS spatial indexing for efficient donor matching and nearby pharmacy discovery with Polygon verification.",
    
    // Categorized Tech Stack
    techStackCategorized: {
      "Frontend": ["React", "CSS3 / Modern UI"],
      "Backend & Cloud": ["Node.js", "Express REST APIs"],
      "Spatial Database": ["PostgreSQL", "PostGIS Spatial Indexing"],
      "Verification & Web3": ["Polygon Network Smart Contracts"],
      "Messaging & Notifications": ["Twilio SMS API", "Firebase Cloud Messaging (FCM)"]
    },
    tech: ["React", "Node.js", "PostgreSQL", "PostGIS", "Polygon", "Twilio", "Firebase"],

    // Interactive Slider Points
    slides: [
      {
        step: "01",
        title: "PostGIS Spatial Indexing & Proximity Discovery",
        subtitle: "Geospatial Distance Calculations in Milliseconds",
        description: "Implemented PostGIS spatial queries (ST_DWithin, ST_Distance) on PostgreSQL coordinates to calculate real-time proximity and find available blood/organ donors and nearby pharmacies instantly.",
        highlight: "O(log N) Geospatial Index Matching via R-Tree GiST"
      },
      {
        step: "02",
        title: "Polygon-Based Decentralized Verification",
        subtitle: "Immutable Audit Trails & Fraud Mitigation",
        description: "Integrated lightweight Polygon blockchain smart contracts to verify emergency donations and medical transactions, establishing an immutable and transparent verification audit trail.",
        highlight: "Low-Fee Cryptographic Validation on Polygon"
      },
      {
        step: "03",
        title: "Instant Multi-Channel Emergency Dispatch",
        subtitle: "Twilio SMS & Firebase Push Notifications",
        description: "Combined Twilio SMS gateway with Firebase Cloud Messaging (FCM) to trigger critical alerts to matching donors within seconds of an urgent emergency request.",
        highlight: "Sub-Second Push Dispatch to Donors & Medical Centers"
      }
    ],

    // Technical Keywords & Concepts
    keywords: [
      { term: "PostGIS", definition: "Spatial database extender for PostgreSQL enabling geographical objects and distance queries" },
      { term: "Spatial Indexing", definition: "GiST index structures allowing immediate geographic bounding box and radius queries" },
      { term: "Polygon Network", definition: "Ethereum Layer 2 scaling protocol offering fast, tamper-proof transaction audits" },
      { term: "Twilio Gateway", definition: "Telephony API for automated high-priority SMS alerts during critical shortages" },
      { term: "Firebase FCM", definition: "Cross-platform messaging solution for instant mobile and web push notifications" }
    ],

    stats: {
      matching: "PostGIS Radius",
      verification: "Polygon Audit",
      alerts: "Twilio + FCM"
    },
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
    category: "Compiler & Systems",
    featured: false,
    color: "#10B981",
    github: "https://github.com/Pawan-git05/CQL",
    demo: "https://github.com/Pawan-git05/CQL",
    description: "Developed a SQL-like compiler that translates queries on CSV datasets into executable Python code through lexical analysis, parsing, semantic validation, and code generation.",
    
    // Categorized Tech Stack
    techStackCategorized: {
      "Core Language": ["Python 3"],
      "Parsing Theory": ["Recursive Descent Parsing", "Lexical Tokenizer", "Grammar Grammar Rules"],
      "AST & Structures": ["Abstract Syntax Tree (AST)", "Python Dataclasses", "Visitor Pattern"],
      "Supported SQL Clauses": ["SELECT", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "LIMIT", "DISTINCT"],
      "Interactive Interface": ["Integrated Web-Based SQL Workspace"]
    },
    tech: ["Python", "Recursive Descent Parsing", "CSV", "Dataclasses", "AST", "Compiler Design"],

    // Interactive Slider Points
    slides: [
      {
        step: "01",
        title: "Lexical Analysis & Tokenizer Engine",
        subtitle: "Converting Raw SQL Strings to Structured Token Streams",
        description: "Built a robust lexical analyzer in Python that categorizes SQL queries into deterministic keywords, operators, literals, and identifiers while gracefully handling syntax errors.",
        highlight: "Deterministic Token Stream + Accurate Line/Column Error Reporting"
      },
      {
        step: "02",
        title: "Recursive Descent Parser & Abstract Syntax Trees",
        subtitle: "Building the Hierarchical AST Model",
        description: "Implemented a custom recursive descent parser that maps grammar rules into typed Python Dataclass AST nodes (SelectNode, FilterNode, AggregateNode, OrderNode) with semantic validation.",
        highlight: "Clean AST Structure with Python Dataclasses"
      },
      {
        step: "03",
        title: "Full SQL Feature Set & Bytecode / Code Generation",
        subtitle: "SELECT, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, AGGREGATES",
        description: "Engineered code-generation visitors that compile parsed AST nodes directly into optimized, executable Python comprehension and aggregation algorithms on raw CSV datasets.",
        highlight: "Complete SQL Query Pipeline Executable on Any CSV"
      },
      {
        step: "04",
        title: "Integrated Web-Based SQL Workspace",
        subtitle: "Live Query Execution & Tabular Visualization",
        description: "Delivered an integrated web workspace allowing users to upload custom CSV files, write SQL queries, and visualize the generated results and intermediate AST representations in real-time.",
        highlight: "Real-Time Visual Validation + Instant Result Tables"
      }
    ],

    // Technical Keywords & Concepts
    keywords: [
      { term: "Recursive Descent", definition: "Top-down parsing technique that executes grammar productions through recursive function calls" },
      { term: "Abstract Syntax Tree", definition: "Hierarchical tree representation of the syntactic structure of source SQL queries" },
      { term: "Lexical Analysis", definition: "Breaking character streams into meaningful tokens (IDENTIFIER, OPERATOR, KEYWORD)" },
      { term: "Semantic Validation", definition: "Checking column types, aggregation constraints, and scope rules prior to code generation" },
      { term: "Code Generation", definition: "Synthesizing high-speed Python data processing instructions directly from the AST" }
    ],

    stats: {
      parser: "Recursive Descent",
      clauses: "7+ SQL Clauses",
      speed: "Direct Py CodeGen"
    },
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
    username: "PawanSIngh12T",
    url: "https://leetcode.com/u/PawanSIngh12T/",
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
