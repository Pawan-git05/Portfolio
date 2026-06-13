export const projects = [
  {
    id: "donarchain",
    title: "DonorChain",
    tagline: "AI-assisted emergency donor matching platform with blockchain verification and geospatial donor ranking.",
    techStack: ["React", "Node.js", "PostgreSQL", "PostGIS", "Polygon", "Twilio", "Firebase Cloud Messaging"],
    githubLink: "https://github.com/Pawan-git05/Donarchain",
    screenshots: [
      "assets/donorchain-hero.png",
      "assets/donorchain-how-it-works.png",
      "assets/donorchain-features.png",
      "assets/donorchain-cta.png",
      "assets/donorchain-footer.png"
    ],
    overview: "An emergency donor matching platform designed to connect critical-need patients with compatible blood donors in real time.",
    problemStatement: "During medical emergencies, finding compatible blood donors quickly is highly challenging. Existing systems lack spatial matching logic, leading to delay, and lack transparency regarding consent and donor identity.",
    features: [
      "Intelligent geospatial donor matching within radius threshold.",
      "Severity-based urgency queue reordering.",
      "Real-time SMS alerts and FCM push notifications.",
      "Tamper-resistant identity verification hashes anchored to the Polygon blockchain."
    ],
    implementationDetails: {
      ranking: "Calculated via Python backend, evaluating compatibility, availability, and travel distance.",
      postgis: "Uses PostGIS spatial indexing (ST_DWithin and ST_DistanceSphere) to compute proximity and rank candidate donors by geographic distance.",
      blockchain: "Generates cryptographic hashes of donor consent/identity records and posts them to Polygon blockchain transactions for auditable proof of process.",
      alerts: "Dispatches SMS notifications using Twilio API and instant browser notifications via Firebase Cloud Messaging within seconds of emergency request creation."
    },
    challenges: "Handling rapid notification delivery under high concurrency and managing Polygon RPC nodes connection reliability during network congestion.",
    results: "Reduced average matching and alerting latency to under 30 seconds across 100+ test records."
  },
  {
    id: "pathforge-ai",
    title: "PathForge AI",
    tagline: "Intelligent Route Optimization system powered by Q-Learning and hybrid A* pathfinding algorithms.",
    techStack: ["Python", "Flask", "Reinforcement Learning", "Q-Learning", "A* Algorithm", "Dijkstra"],
    githubLink: "https://github.com/Pawan-git05/Pathforge_AI",
    screenshots: [
      "assets/pathforge-landing.png",
      "assets/pathforge-generation.png",
      "assets/pathforge-solved-no-path.png",
      "assets/pathforge-algorithms.png",
      "assets/pathforge-solved-path.png",
      "assets/pathforge-performance.png"
    ],
    overview: "An AI-powered routing framework that trains reinforcement learning agents to navigate complex grid environments while avoiding obstacles.",
    problemStatement: "Traditional pathfinding algorithms struggle in dynamic environments where costs change on the fly, while pure RL agents require long training times to converge to optimal paths.",
    rlApproach: "Uses Q-Learning where an agent learns action-value policies by exploring states and updating Q-values based on reward feedback.",
    qLearningLogic: "A grid-world environment where rewards are updated iteratively: Q(s, a) = Q(s, a) + alpha * [reward + gamma * max(Q(s', a')) - Q(s, a)].",
    aStarIntegration: "Incorporates a hybrid approach by combining Q-learning's learned path selection policies with A* search heuristic (Manhattan distance) for accelerated convergence.",
    rewardFunction: "Rewards target arrival (+100), penalizes obstacle collision (-50), and adds step costs (-1) to encourage efficiency.",
    results: "Cut average route exploration steps by ~18% versus a random-walk baseline, converging to near-optimal routes ~13% faster.",
    futureApplications: ["Warehouse robotics path planning", "Autonomous delivery navigation", "Smart city traffic routing"]
  }
];
