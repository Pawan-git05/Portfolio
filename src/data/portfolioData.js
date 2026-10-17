// ==========================================================================
// PAWAN SINGH — PORTFOLIO DATA STORE & TELEMETRY
// ==========================================================================

export const personalInfo = {
  name: "Pawan Singh",
  firstName: "PAWAN",
  lastName: "SINGH",
  title: "AI Developer & Systems Engineer",
  roles: [
    "AI Developer",
    "Machine Learning Engineer",
    "Full-Stack Systems Architect",
    "DSA Specialist & Problem Solver",
    "Creative Technologist"
  ],
  bio: "An AI developer and full-stack systems engineer specializing in building intelligent systems, reinforcement learning runtimes, and high-performance web experiences. Backed by 1200+ solved algorithmic challenges and production-ready distributed architectures.",
  availability: "Open to Internships & Engineering Roles",
  location: "Delhi NCR, India",
  timezone: "IST (UTC +5:30)",
  email: "pawansingh.dev@gmail.com",
  socials: {
    github: "https://github.com/Pawan-git05",
    linkedin: "https://linkedin.com/in/pawan-singh-dev",
    twitter: "https://twitter.com/pawansingh_dev",
    email: "mailto:pawansingh.dev@gmail.com",
    resume: "/Pawan_Singh_ResumeA.docx"
  }
};

// 6 High-Impact Telemetry Stats
export const telemetryStats = [
  { label: "Problems Solved", value: 1200, suffix: "+", icon: "Brain", color: "#A855F7" },
  { label: "Projects Built", value: 18, suffix: "+", icon: "Rocket", color: "#FB923C" },
  { label: "Certifications", value: 10, suffix: "", icon: "Trophy", color: "#A855F7" },
  { label: "Hackathons Won", value: 6, suffix: "+", icon: "Zap", color: "#FB923C" },
  { label: "GitHub Stars", value: 120, suffix: "+", icon: "Star", color: "#A855F7" },
  { label: "Contributions", value: 1200, suffix: "+", icon: "Activity", color: "#FB923C" }
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

// Projects & Case Studies
export const projectsData = [
  {
    id: 1,
    title: "NeuroVision AI",
    subtitle: "Real-Time Multi-Modal Computer Vision & Intelligence Engine",
    description: "A high-performance neural vision pipeline that processes multi-stream camera feeds, executes object classification, and runs edge inference with ultra-low latency.",
    longDescription: "NeuroVision AI is an end-to-end computer vision platform designed for real-time video telemetry, gesture recognition, and anomaly detection. Engineered using PyTorch and FastAPI with hardware-accelerated batching, it achieves sub-100ms end-to-end inference.",
    tech: ["PyTorch", "FastAPI", "React", "OpenCV", "Docker", "Redis", "Tailwind CSS"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: true,
    color: "#A855F7",
    category: "AI / Machine Learning",
    stats: {
      inferences: "50K+",
      latency: "< 85ms",
      accuracy: "98.4%"
    },
    problem: "Real-time edge video processing suffers from bottlenecked inference queues and GPU memory fragmentation under multi-stream workloads.",
    solution: "Engineered an asynchronous processing pipeline utilizing FastAPI background workers, tensor batching, and Redis pub/sub streams to achieve real-time throughput.",
    challenges: [
      "Mitigating GPU memory fragmentation during continuous streaming",
      "Dynamic frame skipping algorithm for network bandwidth fluctuations",
      "WebSocket connection pool load balancing across cluster nodes"
    ],
    learnings: [
      "PyTorch TorchScript JIT compilation for production deployment",
      "Zero-copy frame decoding with OpenCV and shared memory",
      "Asynchronous backpressure management in distributed stream ingestion"
    ],
    mockFileName: "inference_engine.py",
    mockCodeLines: [
      "@app.websocket('/ws/stream/{stream_id}')",
      "async def stream_inference(websocket: WebSocket, stream_id: str):",
      "    tensor_batch = await frame_buffer.dequeue_batch(max_size=32)",
      "    predictions = torch_jit_model(tensor_batch.to(device))",
      "    await websocket.send_json({'detections': predictions.tolist()})"
    ]
  },
  {
    id: 2,
    title: "CodePrepX Sandbox",
    subtitle: "Isolated Sandbox Compilation Engine & Evaluation Runtime",
    description: "A secure online code execution engine hosting isolated micro-containers to evaluate multi-language submissions with security containment and real-time socket streaming.",
    tech: ["Node.js", "Docker SDK", "React", "Redis", "BullMQ", "PostgreSQL"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: false,
    color: "#0EA5E9",
    category: "Systems / Full Stack",
    mockFileName: "sandbox_runner.js",
    mockCodeLines: [
      "const container = await docker.createContainer({",
      "  Image: 'sandbox-runtime:latest',",
      "  HostConfig: { Memory: 256 * 1024 * 1024, CpuQuota: 50000 },",
      "  Cmd: ['python3', 'user_submission.py']",
      "});"
    ]
  },
  {
    id: 3,
    title: "CSV Query Compiler",
    subtitle: "SQL-to-Python Query Compilation & AST Translation Pipeline",
    description: "A SQL-like compiler that translates structured queries over CSV datasets into optimized executable Python code with semantic validation and an interactive IDE.",
    tech: ["Python", "AST Parser", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: false,
    color: "#10B981",
    category: "Compiler Design",
    mockFileName: "compiler_ast.py",
    mockCodeLines: [
      "def compile_sql_to_python(query: str) -> str:",
      "    tokens = tokenize(query)",
      "    ast_node = parse_expression(tokens)",
      "    return generate_python_bytecode(ast_node)"
    ]
  },
  {
    id: 4,
    title: "AlgoViz Pro",
    subtitle: "Interactive Data Structures & Algorithm Visualizer",
    description: "An interactive visualization engine animating graph traversals, dynamic programming matrices, and sorting algorithms with step-by-step state space breakdown.",
    tech: ["React", "TypeScript", "D3.js", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: false,
    color: "#FB923C",
    category: "Frontend"
  },
  {
    id: 5,
    title: "EduStream Cloud",
    subtitle: "Distributed Video Streaming & LMS Platform",
    description: "A scalable educational platform with video transcoding, real-time code evaluation, quiz checkpoints, and certificate generation for modern learners.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3", "FFmpeg", "Redis"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: false,
    color: "#A855F7",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "WeatherAI Forecast",
    subtitle: "AI-Powered Climate Intelligence Dashboard",
    description: "Smart meteorological dashboard integrating machine learning weather prediction models, interactive radar overlays, and historical anomaly analysis.",
    tech: ["React", "Python", "FastAPI", "OpenAI API", "Leaflet.js"],
    github: "https://github.com/Pawan-git05/Portfolio",
    demo: "https://portfolio-six-theta-62b23sl6uq.vercel.app/",
    featured: false,
    color: "#FB923C",
    category: "AI / Machine Learning"
  }
];

// Coding Profiles Telemetry
export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "pawan_singh",
    url: "https://leetcode.com",
    stats: { solved: 540, easy: 210, medium: 260, hard: 70, rating: 1720 },
    color: "#FFA116",
    bgColor: "rgba(255, 161, 22, 0.08)",
    borderColor: "rgba(255, 161, 22, 0.25)",
    description: "Consistent problem solver with focus on graphs, dynamic programming, and systems algorithms"
  },
  {
    platform: "GitHub",
    username: "Pawan-git05",
    url: "https://github.com/Pawan-git05",
    stats: { stars: 120, contributions: "1,200+", repos: 25 },
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    description: "Active open-source contributor, building AI pipelines, compilers, and web tools"
  },
  {
    platform: "GeeksforGeeks",
    username: "pawan_dev",
    url: "https://geeksforgeeks.org",
    stats: { solved: 380, score: 1420, rank: "Institute Rank 3", streak: 65 },
    color: "#2F8D46",
    bgColor: "rgba(47, 141, 70, 0.08)",
    borderColor: "rgba(47, 141, 70, 0.25)",
    description: "Top rank in college coding chapter with daily problem-solving consistency"
  },
  {
    platform: "CodeChef",
    username: "pawan_05",
    url: "https://codechef.com",
    stats: { solved: 220, rating: 1650, stars: 3, globalRank: "12K" },
    color: "#9F7AEA",
    bgColor: "rgba(159, 122, 234, 0.08)",
    borderColor: "rgba(159, 122, 234, 0.25)",
    description: "3-star rated algorithmic competitive programmer in Division 2 contests"
  },
  {
    platform: "Coding Ninjas",
    username: "pawan_singh",
    url: "https://naukri.com/code360",
    stats: { solved: 310, rating: 2200, rank: "Expert", streak: 80 },
    color: "#E65C00",
    bgColor: "rgba(230, 92, 0, 0.08)",
    borderColor: "rgba(230, 92, 0, 0.25)",
    description: "Expert level candidate with deep mastery of tree algorithms and recursion"
  }
];

// Academic Background
export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your University / Institute Name",
    year: "2022 — 2026",
    current: "3rd Year (6th Semester)",
    cgpa: "8.6 / 10.0",
    courses: [
      "Data Structures & Algorithms",
      "Artificial Intelligence & Machine Learning",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Compiler Design",
      "Cloud Computing",
      "Object-Oriented Design"
    ],
    highlights: [
      "Core Technical Lead at Computer Science Society",
      "Organized university-level Hackathons with 500+ participants",
      "Winner of 3 inter-college AI & Coding Competitions"
    ]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Senior Secondary School",
    year: "2020 — 2022",
    score: "93.4%",
    stream: "Science (Physics, Chemistry, Mathematics & Computer Science)"
  }
];

// Achievements & Milestones
export const achievementsData = [
  {
    title: "1st Place — National AI Innovation Hackathon",
    category: "Hackathon Championship",
    date: "2024",
    description: "Built an autonomous multi-modal edge diagnostic platform utilizing lightweight neural networks, winning top honor among 120+ teams.",
    badge: "🏆 1st Prize",
    color: "#FB923C"
  },
  {
    title: "Top 3% — Global LeetCode Biweekly Contest",
    category: "Competitive Programming",
    date: "2024",
    description: "Achieved global top 3% percentile ranking among 25,000+ international algorithmic competitors.",
    badge: "⚡ Top 3%",
    color: "#A855F7"
  },
  {
    title: "Open Source Contributor Milestone",
    category: "Open Source",
    date: "2023 — Present",
    description: "Merged 30+ pull requests across open-source developer tooling, documentation, and web visual frameworks.",
    badge: "🐙 1.2K+ Commits",
    color: "#38BDF8"
  },
  {
    title: "Smart India Hackathon Finalist",
    category: "National Level",
    date: "2023",
    description: "Shortlisted among national top contenders for building a distributed cloud data orchestration prototype.",
    badge: "⭐ Finalist",
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
