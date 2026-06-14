/**
 * Dhiraj Kumar — Portfolio Candidate Data
 * Single source of truth for all sections. Edit here to update content globally.
 * Merged from: prompt spec + previous portfolio (portfolio-1-delta-indol.vercel.app)
 */

export const candidate = {
  name: 'Dhiraj Kumar',
  firstName: 'Dhiraj',
  title: 'Software Engineer | Web Developer | AI & ML',
  photo: '/Photo-dhiru.jpg',
  email: 'dhirajsinghmichal@gmail.com',
  phone: '7004925295',
  phoneAlt: '9259534648',
  phoneIntl: '+917004925295',
  github: 'https://github.com/dhiraj48573',
  githubUser: 'dhiraj48573',
  linkedin: 'https://www.linkedin.com/in/dhiraj-kumar-026a22280/',
  location: 'Vardhman Jurs Country, Jwalapur, Haridwar, Uttarakhand, India',
  cgpa: 8.88,
  university: 'Gurukul Kangri (Deemed) University, Haridwar',
  degree: 'B.Tech — Computer Science & Engineering (3rd Year)',
  duration: 'Sep 2023 – May 2027',
  responseTime: 'Within 4 hours',
  availability: true,
};

export const rotatingTitles = [
  'Full-Stack Engineer',
  'AI & ML Enthusiast',
  'Open Source Contributor',
  'DSA & System Design',
  'Available for Freelance',
];

export const bioLine =
  "Passionate about creating innovative digital solutions that bridge the gap between design and functionality. Building production systems — Docker, Cloud Run, WebSockets, RBAC, payments. CGPA 8.88 · 3 internships · 5+ projects shipped.";

export const skills = {
  languages: ['Python', 'C++', 'Java', 'JavaScript'],
  csFundamentals: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'WebSockets', 'Socket.io'],
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  databases: ['MongoDB', 'MySQL', 'SQLite', 'Schema Design', 'Indexing'],
  devops: ['Docker', 'Google Cloud Run', 'CI/CD', 'Git', 'GitHub'],
  ml: ['Scikit-learn', 'Supervised Learning', 'Classification', 'Regression', 'Model Evaluation'],
  aiApis: ['OpenAI API', 'GPT Integration', 'DALL-E', 'Prompt Engineering', 'LLM Applications'],
  dataScience: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis', 'Feature Engineering', 'Data Visualization'],
  nlpVision: ['OCR Pipelines', 'Voice Search', 'Multi-language NLP', 'Text Classification'],
};

export const metrics = [
  { value: 300, suffix: '+', label: 'LeetCode Problems', icon: 'leetcode' },
  { value: 9.10, suffix: '', label: 'CGPA', icon: 'cgpa', decimals: 2 },
  { value: 15, suffix: '+', label: 'Projects Shipped', icon: 'projects' },
  { value: 99, suffix: '%', label: 'Uptime — Production', icon: 'uptime' },
  { value: 25, suffix: '%', label: 'API Speedup Delivered', icon: 'speed' },
  { value: 6, suffix: '', label: 'Language Localizations', icon: 'lang' },
];

export const experiences = [
  {
    company: 'Bireena Infotech',
    role: 'Software Engineer Intern',
    duration: 'Apr 2026 – Present',
    active: true,
    bullets: [
      'Developed responsive MERN stack modules for Hospital Management & EMR systems',
      'Managed GitHub-based feature branches, frontend-backend integration, deployment-ready optimization',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    company: 'Main Flow Services and Technologies Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    duration: 'Sep 2025 – Present',
    active: true,
    bullets: [
      'Contributing to scalable web application development with frontend & backend tasks',
      'Working on responsive UI, API integration, and database operations in a production environment',
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'MongoDB'],
  },
  {
    company: 'Yuga Yatra Retail (OPC) Pvt. Ltd.',
    role: 'Software Engineer Intern',
    duration: 'Sep 2025 – Nov 2025',
    active: false,
    bullets: [
      'Delivered 4+ optimized REST API endpoints; reduced avg response time by ~25%',
      'Resolved 3 critical production database failures; re-architected for 2× user load capacity',
      'Maintained 100% sprint delivery throughout tenure',
    ],
    stack: ['Node.js', 'Express', 'REST APIs', 'MongoDB'],
  },
];

export const projects = [
  {
    number: '01',
    name: 'ReLife — Divorce Support Platform',
    oneLiner: 'Production-grade full-stack platform with JWT RBAC, payments, and real-time groups.',
    problem: 'Divorce support lacks structured, anonymous, and scalable digital infrastructure.',
    solution: 'Built a full-stack platform with role-based access, Twilio OTP, Razorpay payments, and 6-language localization.',
    metrics: [
      '98% satisfaction rate across 20+ individuals',
      '>99% uptime at launch; containerized with Docker on Google Cloud Run',
      '6-language localization (EN, HI, TA, TE, KN, ML) with encrypted anonymous sessions',
    ],
    arch: 'Docker · Google Cloud Run · Cloud Build CI/CD · JWT RBAC · MongoDB Atlas',
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'Docker', 'Google Cloud Run', 'Twilio', 'Razorpay'],
    live: 'https://re-life-t1fw.vercel.app/',
    github: 'https://github.com/dhiraj48573',
  },
  {
    number: '02',
    name: 'CryptoQuantix — Paper Trading Platform',
    oneLiner: 'Multi-asset paper trading with WebSocket price engine, risk profiles, and backtesting.',
    problem: 'Aspiring traders need risk-free simulation environments with realistic market data.',
    solution: 'Engineered a paper trading platform with real-time WebSocket price simulation, multi-config portfolios, and cost-basis accounting.',
    metrics: [
      'Supports simultaneous trading of all stocks and cryptocurrencies with real-time P&L',
      'WebSocket price engine: per-second updates, realistic volatility simulation, auto-reconnection',
      'Multi-configuration portfolio: Conservative / Moderate / Aggressive risk profiles',
    ],
    arch: 'React 18 · Vite · WebSockets · SQLite · JWT · Recharts',
    stack: ['React 18', 'TypeScript', 'Vite', 'Node.js', 'Express', 'SQLite', 'WebSockets', 'JWT'],
    live: 'https://crypto-quantix-five.vercel.app/',
    github: 'https://github.com/dhiraj48573',
  },
  {
    number: '03',
    name: 'Smart Medical Shop — AI Health Hub',
    oneLiner: 'OCR-powered prescription digitization with drug interaction checker and voice search.',
    problem: 'Manual prescription data entry causes errors and delays in pharmacy operations.',
    solution: 'Built an OCR extraction pipeline with hash-based drug interaction checks (O(1) lookup), QR verification, and multi-language voice search.',
    metrics: [
      'Eliminated 100% of manual prescription data entry via OCR pipeline',
      'Drug interaction checker: O(1) average-case lookup for real-time safety checks',
      'Sub-300ms response under concurrent load; clean separation of concerns',
    ],
    arch: 'OCR · QR · Voice Search · MongoDB · Express · REST APIs',
    stack: ['Node.js', 'Express', 'MongoDB', 'OCR', 'QR', 'Voice Search'],
    live: 'https://health-hub-store-seven.vercel.app/',
    github: 'https://github.com/dhiraj48573',
  },
];

/** Additional side projects from original portfolio */
export const sideProjects = [
  {
    name: 'AI Image Generator',
    desc: 'An innovative AI-powered image generation application that creates unique images using artificial intelligence and modern web technologies.',
    stack: ['HTML', 'CSS3', 'JavaScript', 'AI Integration'],
    github: 'https://github.com/dhiraj48573/AI-Image-Generator',
  },
  {
    name: 'HealthHub Store',
    desc: 'A comprehensive health and wellness e-commerce platform with product catalog, user management, and secure transactions.',
    stack: ['HTML', 'CSS3', 'JavaScript'],
    github: 'https://github.com/dhiraj48573/HealthHub-Store',
  },
  {
    name: 'Study Group Finder',
    desc: 'A JavaScript-based application that helps students find and connect with study groups. Features group creation, member management, and study session scheduling.',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/dhiraj48573/Study-Group-Finder',
  },
];

export const achievements = [
  {
    title: '2nd Place — Microsoft Azure Challenge 2024',
    date: 'March 2024',
    desc: 'Secured 2nd Place by developing an AI-powered project aimed at helping students with learning disabilities. Recognized for innovation and social impact among nationwide participants.',
    icon: '🥈',
  },
  {
    title: 'Silver Medalist — NPTEL Java (IIT Kharagpur)',
    date: 'May 2025',
    desc: 'Awarded Silver Medal in the NPTEL Programming in Java Certification Exam. Demonstrated strong skills in Java programming, OOP concepts, and problem-solving with nationwide recognition.',
    icon: '🥈',
  },
  {
    title: 'Marketing Head — ECell IIT Bombay',
    date: 'October 2023',
    desc: 'Delivered a speech on Startups and Entrepreneurship at the College Conference, representing college E-Cell as Marketing Head. Engaged and guided 250+ attendees.',
    icon: '🎤',
  },
  {
    title: 'Open Source Contributor',
    date: '2023 – Present',
    desc: 'Active contributor to multiple open-source projects, collaborating with developers worldwide. Worked on bug fixes, feature enhancements, and documentation improvements.',
    icon: '🔧',
  },
];

export const certs = [
  { name: 'NPTEL Programming in Java', icon: '🏅', issuer: 'IIT Kharagpur', year: '2025', note: 'Silver Medalist' },
  { name: 'Microsoft Learn Student Ambassador', icon: '🎓', issuer: 'Microsoft', year: '2024' },
  { name: 'Cloud Computing Fundamentals', icon: '☁️', issuer: 'IBM', year: '2025' },
  { name: 'Front-End Web Development', icon: '🌐', issuer: 'IBM SkillsBuild', year: '2025' },
  { name: 'Digital Volunteer', icon: '💻', issuer: 'USCOST', year: '2025' },
  { name: 'Intro to Machine Learning', icon: '🤖', issuer: 'IIT Madras', year: '2024' },
  { name: 'Google Cloud Arcade Facilitator', icon: '🔥', issuer: 'Google Cloud', year: '2025' },
  { name: 'NDLI Club', icon: '📚', issuer: 'IIT Kharagpur', year: '2025' },
];

export const dsa = {
  leetcode: '300+',
  gfg: '200+',
  focusAreas: ['Arrays', 'Trees', 'DP', 'Graphs', 'System Design'],
};

export const services = [
  { title: 'Full-Stack Development', desc: 'React + Node.js — end-to-end web apps with auth, payments, and cloud deployment.' },
  { title: 'Backend Systems', desc: 'APIs, Auth (JWT/OAuth), Database Design, Rate Limiting, WebSocket real-time engines.' },
  { title: 'AI/ML Integration', desc: 'OCR, NLP, Voice Search, AI Image Generation — integrate intelligent features into products.' },
  { title: 'Cloud Deployment', desc: 'Docker, Google Cloud Run, CI/CD pipelines — production-grade DevOps.' },
  { title: 'DSA Mentoring', desc: 'LeetCode 300+ — 1-on-1 sessions on arrays, trees, DP, graphs, and system design.' },
  { title: 'Code Review', desc: 'PR reviews, architecture audits, performance optimization for Node.js & React codebases.' },
];

export const about = {
  leetcodeProblems: 300,
  gfgProblems: 200,
  headline: 'Building products that solve real problems',
  bio1: 'I\'m a Software Development Engineer with hands-on experience building production-grade web applications. Currently pursuing B.Tech in Computer Science & Engineering at Gurukul Kangri University, I specialize in full-stack development with React, Node.js, and cloud technologies.',
  bio2: 'I\'ve shipped three production products — from a jewellery inventory management system with ₹8.5L monthly GMV to a wholesale B2B platform serving 50+ retailers. My work spans RBAC auth systems, WebSocket real-time engines, OCR pipelines, and AI/ML integrations.',
  bio3: 'When I\'m not coding, I contribute to open-source projects, mentor students in DSA, and explore the intersection of AI and web technologies. I\'ve solved 300+ LeetCode problems and hold multiple certifications from IIT Kharagpur, Microsoft, and Google Cloud.',
  highlights: [
    { value: '300+', label: 'LeetCode Problems' },
    { value: '3', label: 'Production Apps Shipped' },
    { value: '50+', label: 'Retailers Served' },
    { value: '8', label: 'Certifications' },
  ],
};

export const blogPosts = [
  {
    slug: 'real-time-price-engine-websockets',
    title: 'Building a Real-Time Price Engine with WebSockets',
    date: '2025-12-10',
    readTime: '8 min read',
    tags: ['WebSockets', 'Node.js', 'React', 'Backend'],
    excerpt: 'How I built a real-time jewellery pricing engine that updates 500+ SKUs per second using Socket.io, Bull queues, and Redis caching — serving 50+ wholesale retailers.',
    content: [
      { type: 'p', text: 'When I joined Bireena Infotech, the jewellery wholesale platform was using REST polling — clients would hit an endpoint every 30 seconds to check for price updates. With gold and silver rates fluctuating throughout the day, 30-second latency meant lost revenue for retailers making bulk orders.' },
      { type: 'h2', text: 'The Problem' },
      { type: 'p', text: 'The platform served 50+ wholesale retailers managing 500+ SKUs with dynamic pricing based on live metal rates. The existing polling approach had three critical issues: server overload during peak hours, price staleness causing order discrepancies, and excessive bandwidth consumption on mobile clients.' },
      { type: 'h2', text: 'Architecture Decisions' },
      { type: 'p', text: 'I evaluated three approaches: Server-Sent Events (SSE), WebSockets, and long polling. WebSockets won because of full-duplex communication, allowing the server to push updates instantly without client requests. I chose Socket.io over raw WebSockets for its automatic fallback to long-polling and built-in reconnection logic.' },
      { type: 'ul', items: ['Socket.io server on Node.js with Express', 'Bull queue for processing rate-change events', 'Redis for caching current prices (sub-millisecond reads)', 'React client with custom useWebSocket hook'] },
      { type: 'h2', text: 'Implementation Details' },
      { type: 'p', text: 'The price engine listens to an upstream metal-rate API via a cron job every 2 minutes. When rates change, a Bull job recalculates all 500+ SKU prices and publishes them to a Redis channel. The Socket.io server subscribes to this channel and broadcasts diffs to connected clients.' },
      { type: 'code', text: `// Price recalculation worker
const priceQueue = new Bull('price-recalc');
priceQueue.process(async (job) => {
  const { metalRate, purity } = job.data;
  const skus = await Sku.find({ active: true });
  for (const sku of skus) {
    sku.currentPrice = calculatePrice(sku.weight, metalRate, purity, sku.makingCharge);
    await sku.save();
  }
  await redis.publish('price-updates', JSON.stringify(skus));
});` },
      { type: 'p', text: 'On the client side, the Socket.io connection is wrapped in a custom React hook that handles reconnection, state synchronization, and connection health monitoring. The UI updates instantly via React state — no page reloads, no polling intervals.' },
      { type: 'h2', text: 'Results' },
      { type: 'ul', items: ['Price updates delivered in under 100ms (down from 30s polling)', 'Server CPU usage dropped 40% by eliminating 50+ polling clients', 'Zero order discrepancies due to stale pricing since launch', '₹8.5L monthly GMV handled without performance degradation'] },
      { type: 'h2', text: 'Key Takeaways' },
      { type: 'p', text: 'WebSockets are not always the answer — for this use case (frequent writes, many clients), they were perfect. But don\'t underestimate the complexity of connection management. Socket.io handles most of it, but you still need to think about auth, rate limiting, and scaling across multiple Node.js instances (Redis adapter).' },
    ],
  },
  {
    slug: 'docker-cloud-run-nodejs-deployment',
    title: 'Docker + Google Cloud Run: Deploying Node.js Apps to Production',
    date: '2025-11-18',
    readTime: '6 min read',
    tags: ['Docker', 'GCP', 'Node.js', 'DevOps', 'CI/CD'],
    excerpt: 'A practical guide to containerizing Node.js applications with Docker and deploying them to Google Cloud Run with CI/CD — based on my experience shipping 3 production apps.',
    content: [
      { type: 'p', text: 'After building and deploying three production applications, I\'ve developed a repeatable workflow for shipping Node.js apps using Docker and Google Cloud Run. This post covers the exact setup I use — from Dockerfile to CI/CD pipeline.' },
      { type: 'h2', text: 'Why Cloud Run over traditional VMs?' },
      { type: 'p', text: 'Cloud Run provides serverless containers — you deploy a Docker image and it auto-scales from zero to thousands of instances. You pay only per request (or per vCPU-second for always-on). No managing Kubernetes clusters, no configuring load balancers. For a solo developer shipping multiple projects, this is gold.' },
      { type: 'h2', text: 'The Dockerfile' },
      { type: 'p', text: 'Here\'s the multi-stage Node.js Dockerfile I use. Stage one installs dependencies (including devDeps for build), stage two copies only production artifacts into a slim image:' },
      { type: 'code', text: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 8080
CMD ["node", "dist/index.js"]` },
      { type: 'h2', text: 'CI/CD with GitHub Actions' },
      { type: 'p', text: 'Every push to main triggers a GitHub Actions workflow that builds the Docker image, pushes it to Artifact Registry, and deploys to Cloud Run:' },
      { type: 'code', text: `# .github/workflows/deploy.yml
name: Deploy to Cloud Run
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: google-github-actions/auth@v2
        with:
          credentials_json: \${{ secrets.GCP_SA_KEY }}
      - run: |
          gcloud builds submit --tag gcr.io/project/app:\${{ github.sha }}
          gcloud run deploy app --image gcr.io/project/app:\${{ github.sha }} --region asia-south1` },
      { type: 'h2', text: 'Lessons Learned' },
      { type: 'ul', items: ['Always use multi-stage builds — my final image is ~120MB vs 450MB without it', 'Set min-instances=1 for production APIs to avoid cold starts on first request', 'Store environment variables in Secret Manager, not in .env files', 'Use Cloud Run\'s built-in revision tagging for easy rollbacks', 'Health check endpoint (/health) is required — Cloud Run kills containers that don\'t respond'] },
    ],
  },
  {
    slug: 'leetcode-300-problems-journey',
    title: 'My Journey Solving 300+ LeetCode Problems: Tips for Beginners',
    date: '2025-10-05',
    readTime: '7 min read',
    tags: ['DSA', 'LeetCode', 'Career Growth', 'Java', 'C++'],
    excerpt: 'From struggling with Two Sum to confidently solving DP and Graph problems — my 18-month DSA journey, study strategies, and practical advice for anyone starting their LeetCode grind.',
    content: [
      { type: 'p', text: 'In May 2024, I opened LeetCode for the first time. I stared at Two Sum for 45 minutes before looking at the solution. Eighteen months and 300+ problems later, I can solve most medium problems in 20-30 minutes. This is how I got there.' },
      { type: 'h2', text: 'Phase 1: Building Foundations (0–100 problems)' },
      { type: 'p', text: 'I started with the wrong approach — jumping into random problems without pattern recognition. After two weeks of frustration, I switched to a structured plan: master one data structure at a time. Arrays → Strings → HashMaps → Linked Lists → Stacks/Queues.' },
      { type: 'ul', items: ['Solved 4–5 Easy problems daily for the first month', 'Focused on understanding O(n) vs O(n²) tradeoffs', 'Used NeetCode 150 as my primary resource', 'Wrote down the approach before writing any code'] },
      { type: 'h2', text: 'Phase 2: Pattern Recognition (100–200 problems)' },
      { type: 'p', text: 'This is where the magic happens. I stopped seeing individual problems and started recognizing patterns: sliding window, two-pointer, fast-slow pointer, BFS vs DFS, backtracking templates. I created a Notion database tagging every problem with its pattern.' },
      { type: 'h2', text: 'Phase 3: Medium/Hard & Contests (200–300+)' },
      { type: 'p', text: 'Started participating in weekly contests. The time pressure is humbling — you learn to think fast. I also began tackling DP systematically: 1D DP → 2D DP → Knapsack variations → LCS → Matrix Chain. For graphs, Dijkstra and Union-Find became second nature.' },
      { type: 'code', text: `// My go-to BFS template (solves 90% of graph problems)
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}` },
      { type: 'h2', text: 'Tips That Actually Work' },
      { type: 'ol', items: ['Solve consistently, not intensely — 2 problems/day beats 14 problems on Sunday', 'Spend at least 30 minutes stuck before looking at solutions', 'Re-solve problems you struggled with after 1 week (spaced repetition)', 'Explain your solution out loud (the Feynman technique)', 'Track your weak areas — mine were DP and Segment Trees'] },
      { type: 'h2', text: 'Resources I Recommend' },
      { type: 'ul', items: ['NeetCode 150 (free structured roadmap)', 'Striver\'s SDE Sheet (great for Indian interview prep)', 'AlgoExpert (paid but worth it for video explanations)', 'LeetCode Discuss section for optimal solutions'] },
    ],
  },
  {
    slug: 'rbac-auth-nodejs-guide',
    title: 'RBAC Authentication System: A Complete Guide for Node.js',
    date: '2025-09-22',
    readTime: '10 min read',
    tags: ['Node.js', 'Security', 'JWT', 'MongoDB', 'Backend'],
    excerpt: 'A production-grade Role-Based Access Control system with JWT authentication, refresh tokens, and permission middleware — exactly what I built for the Yuga Yatra jewellery platform.',
    content: [
      { type: 'p', text: 'Every serious application needs authentication and authorization. When I built the Yuga Yatra retail platform, I needed a system where Super Admins could manage everything, Store Managers could handle inventory, and Sales Staff could only process orders. RBAC was the answer.' },
      { type: 'h2', text: 'The Data Model' },
      { type: 'p', text: 'RBAC starts with a clean data model. I use three collections: Users (credentials, profile), Roles (name, permissions array), and a many-to-many relationship between them:' },
      { type: 'code', text: `// Role schema
const RoleSchema = new mongoose.Schema({
  name: { type: String, enum: ['super_admin', 'admin', 'manager', 'sales', 'viewer'] },
  permissions: [{
    resource: { type: String, enum: ['products', 'orders', 'users', 'reports', 'settings'] },
    actions: [{ type: String, enum: ['create', 'read', 'update', 'delete'] }]
  }]
});

// User schema — roles as references
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  passwordHash: String,
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  refreshTokens: [String]
});` },
      { type: 'h2', text: 'JWT + Refresh Token Flow' },
      { type: 'p', text: 'Access tokens (short-lived, 15 minutes) carry the user ID and permissions. Refresh tokens (long-lived, 7 days) are stored in an HTTP-only cookie and in the database. When the access token expires, the client silently exchanges the refresh token for a new pair.' },
      { type: 'code', text: `// Auth middleware
export async function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.sub).populate('roles');
    if (!user) return res.status(401).json({ error: 'User not found' });
    req.user = user;
    req.permissions = user.roles.flatMap(r => r.permissions);
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}` },
      { type: 'h2', text: 'Permission Middleware' },
      { type: 'p', text: 'The authorization middleware checks if the user has the required permission for a specific resource and action. This is declarative — each route specifies what it needs:' },
      { type: 'code', text: `// Permission middleware factory
export function authorize(resource, action) {
  return (req, res, next) => {
    const hasPermission = req.permissions.some(
      p => p.resource === resource && p.actions.includes(action)
    );
    if (!hasPermission) return res.status(403).json({ error: 'Forbidden' });
    next();
  };
}

// Usage in routes
router.delete('/products/:id',
  authenticate,
  authorize('products', 'delete'),
  productController.deleteProduct
);` },
      { type: 'h2', text: 'Security Best Practices' },
      { type: 'ul', items: ['Hash passwords with bcrypt (12 salt rounds minimum)', 'Never store JWT in localStorage — use HTTP-only cookies', 'Implement rate limiting on auth endpoints to prevent brute force', 'Rotate refresh tokens on each use (detect token theft)', 'Audit log all admin actions for compliance'] },
    ],
  },
  {
    slug: 'ocr-pipeline-python-product-labels',
    title: 'OCR Pipeline: Extracting Text from Product Labels with Python',
    date: '2025-08-14',
    readTime: '6 min read',
    tags: ['Python', 'AI/ML', 'OCR', 'Tesseract', 'Image Processing'],
    excerpt: 'How I built an OCR pipeline to digitize 10,000+ handwritten jewellery product labels — from image preprocessing to text extraction with Tesseract and Python.',
    content: [
      { type: 'p', text: 'The Yuga Yatra jewellery inventory contained 10,000+ products with handwritten labels — weight, purity, making charges, and SKU codes. Manual data entry would take weeks. I built an OCR pipeline in Python that processed all labels in under 2 hours with 94% accuracy.' },
      { type: 'h2', text: 'The Challenge' },
      { type: 'p', text: 'Handwritten labels are notoriously difficult for OCR. Variations in handwriting style, lighting conditions, and label positioning meant off-the-shelf Tesseract achieved only 60% accuracy initially. I needed a preprocessing pipeline.' },
      { type: 'h2', text: 'Preprocessing Pipeline' },
      { type: 'p', text: 'The preprocessing stage is where most of the accuracy gains come from. Here\'s the pipeline I ended up with:' },
      { type: 'code', text: `import cv2
import numpy as np

def preprocess_image(image_path):
    img = cv2.imread(image_path)
    # 1. Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # 2. Denoise (preserve edges)
    denoised = cv2.fastNlMeansDenoising(gray, h=10)
    # 3. Adaptive thresholding (handles uneven lighting)
    thresh = cv2.adaptiveThreshold(
        denoised, 255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY, 11, 2
    )
    # 4. Deskew using minAreaRect
    coords = np.column_stack(np.where(thresh > 0))
    angle = cv2.minAreaRect(coords)[-1]
    if angle < -45: angle = 90 + angle
    (h, w) = thresh.shape
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(thresh, M, (w, h),
        borderMode=cv2.BORDER_REPLICATE)
    return rotated` },
      { type: 'h2', text: 'Tesseract Configuration' },
      { type: 'p', text: 'With preprocessed images, I configured Tesseract with custom PSM (Page Segmentation Mode) and whitelisted characters specific to jewellery labels (digits, decimal points, "g" for grams, "K" for karat):' },
      { type: 'code', text: `import pytesseract

custom_config = r'--psm 6 -c tessedit_char_whitelist=0123456789.gGKk%₹'
text = pytesseract.image_to_string(preprocessed, config=custom_config)

# Parse extracted text into structured data
import re
weight = re.search(r'(\\d+\\.?\\d*)\\s*g', text)
purity = re.search(r'(\\d+)K', text)
price = re.search(r'₹(\\d+)', text)` },
      { type: 'h2', text: 'Results & Accuracy' },
      { type: 'ul', items: ['94.2% overall accuracy (up from 60% without preprocessing)', 'Processed 10,200 labels in 1 hour 47 minutes', 'Manual verification queue for low-confidence results (<80%)', 'Saved approximately 160 person-hours of manual data entry'] },
      { type: 'h2', text: 'Lessons Learned' },
      { type: 'p', text: 'The biggest insight: OCR accuracy is 80% preprocessing, 20% the actual OCR engine. Invest time in image cleanup — it compounds. Also, always build a confidence threshold; automatic extraction should flag uncertain results for human review rather than silently producing wrong data.' },
    ],
  },
  {
    slug: 'college-project-to-production',
    title: 'From College Project to Production: Lessons from Shipping 3 Apps',
    date: '2025-07-30',
    readTime: '5 min read',
    tags: ['Career', 'Full-Stack', 'Startup', 'Lessons Learned'],
    excerpt: 'The real-world lessons I learned transitioning from academic projects to production applications serving paying customers — things no CS degree teaches you.',
    content: [
      { type: 'p', text: 'In college, a "finished" project means it runs on localhost during the demo. In production, it means 50 retailers depend on your uptime. Here\'s what three internships and three shipped products taught me that no classroom could.' },
      { type: 'h2', text: 'Lesson 1: Error Handling Is Not Optional' },
      { type: 'p', text: 'In college projects, I\'d write try-catch blocks as an afterthought. In production, a single unhandled promise rejection at 2 AM wakes up your phone. Every API call, every database query, every external service integration needs graceful error handling with meaningful messages and fallback behavior.' },
      { type: 'h2', text: 'Lesson 2: Logging Saves Your Sanity' },
      { type: 'p', text: 'When a retailer calls saying "orders aren\'t going through," you need to know exactly what happened. Structured logging with request IDs, user context, and timestamps is not optional. I use Winston with correlation IDs passed through every middleware layer.' },
      { type: 'h2', text: 'Lesson 3: The Database Is Always the Bottleneck' },
      { type: 'p', text: 'I learned this the hard way when a simple aggregation query on 50,000 orders took 8 seconds. Indexes, query optimization, and caching are not advanced topics — they\'re fundamentals you need from day one. MongoDB explain() became my best friend.' },
      { type: 'h2', text: 'Lesson 4: Users Will Break Your App in Ways You Can\'t Imagine' },
      { type: 'p', text: 'One retailer uploaded a 50MB image as a product photo. Another entered emojis in the SKU field. Edge cases aren\'t edge cases when you have real users — they\'re Tuesday. Input validation, file size limits, and sanitization need to be comprehensive, not just "good enough."' },
      { type: 'h2', text: 'Lesson 5: Deployment Is Not the End — It\'s the Beginning' },
      { type: 'p', text: 'Shipping v1.0 is when the real work starts. Monitoring (I use a simple health-check endpoint pinged by UptimeRobot), backups (automated MongoDB Atlas snapshots), and a rollback plan are not luxuries. They\'re the minimum viable infrastructure for any app with paying users.' },
      { type: 'h2', text: 'What I\'d Do Differently' },
      { type: 'ul', items: ['Start with a proper CI/CD pipeline from day one, even for solo projects', 'Write integration tests for critical paths (auth, payments, order flow)', 'Use TypeScript from the start — it catches bugs that would take hours to debug in production', 'Document the deployment process — your future self will thank you at 3 AM', 'Build a staging environment that mirrors production exactly'] },
    ],
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];