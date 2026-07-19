export const profile = {
  name: 'Rajpreet Gill',
  title: 'AWS Community Builder (AI Engineering)',
  subtitle: 'Cloud & Infrastructure Engineer · DevSecOps · AI Solutions',
  bio: '6+ years building secure, scalable cloud systems. AWS Community Builder on the AI Engineering track — hands-on with AWS, Kubernetes, Linux, and LLM-powered solutions at production scale.',
  location: 'Edmonton, Alberta, Canada',
  email: 'rajpreet2015@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/rajpreet-gill-devop',
  avatar: '/avatar.png',
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajpreet-gill-devop', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Rajpreet12', icon: 'github' },
  { label: 'Medium', href: 'https://medium.com/@rajpreet-gill', icon: 'medium' },
  { label: 'Dev.to', href: 'https://dev.to/rajpreet-gill', icon: 'devto' },
  { label: 'AWS Community', href: 'https://community.aws/@rajpreetgill', icon: 'aws' },
  { label: 'Upwork', href: 'https://www.upwork.com', icon: 'upwork' },
];

export const summaryPillars = [
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    body: 'Hands-on with AWS (EC2, IAM, ALB, S3, Auto Scaling), Kubernetes, and Linux (RHEL) at production scale.',
  },
  {
    icon: '🔐',
    title: 'Security-First Mindset',
    body: 'Implements governance via AWS Organizations, SCPs, and IAM permission boundaries to enforce least-privilege access.',
  },
  {
    icon: '🤖',
    title: 'AI Engineering',
    body: 'Selected as an AWS Community Builder (AI Engineering track) — contributing to the global cloud and AI community and working as a freelancer on Upwork.',
  },
  {
    icon: '📜',
    title: 'Certified',
    body: 'AWS CCP, Solutions Architect, Developer Associate, RHCSA, CKA, IBM AI SkillsBuild — backed by continuous learning and published writing.',
  },
];

export const skills = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      'AWS: EC2, S3, IAM, VPC, ALB, Auto Scaling, CloudWatch',
      'Kubernetes (CKA certified) · Docker · Microservices',
      'Linux / RHEL (RHCSA certified)',
    ],
  },
  {
    category: 'DevSecOps & Automation',
    items: [
      'Terraform · CloudFormation (IaC)',
      'GitHub Actions · Jenkins · CodePipeline',
      'Python · Bash scripting',
    ],
  },
  {
    category: 'Security & Governance',
    items: [
      'AWS Organizations · Service Control Policies (SCPs)',
      'IAM permission boundaries · Least-privilege access',
      'Encryption · Compliance auditing',
    ],
  },
  {
    category: 'AI & Observability',
    items: [
      'LLMs · Chatbots · Machine Learning workflows',
      'Prometheus · Grafana · CloudWatch monitoring',
      'Vector databases · NLP',
    ],
  },
];

export const experience = [
  {
    role: 'Cloud & Infrastructure Support Engineer',
    company: 'Tech With Engineers',
    period: 'Sep 2025 – Present',
    location: '',
    description:
      'Led AWS Organizations governance, SCPs, IAM permission boundaries, and security-integrated architecture. Integrated AI solutions for infrastructure optimization and intelligent monitoring. Supported distributed engineering teams with deployments, monitoring, and incident resolution using AI-enhanced tools.',
  },
  {
    role: 'Freelance AI Engineer',
    company: 'Upwork',
    period: 'Oct 2025 – May 2026',
    location: '',
    description:
      'Delivered AI-driven solutions using LLMs and data processing. Built production-ready applications beyond prototypes, working directly with clients from requirements to delivery.',
  },
  {
    role: 'Software Engineer',
    company: 'Numpy Ninja',
    period: 'Aug 2023 – May 2025',
    location: 'Edmonton, AB',
    description:
      'Supported application deployments, Linux environments, CI/CD pipelines, and cross-functional production issue resolution.',
  },
  {
    role: 'IT Support Engineer',
    company: 'Vinfotech',
    period: 'Sep 2021 – Mar 2023',
    location: 'India',
    description:
      'End-user IT support, system troubleshooting, access management, and ticket documentation.',
  },
  {
    role: 'CCTV Security Engineer',
    company: 'GardaWorld',
    period: 'Mar 2019 – Aug 2021',
    location: 'Edmonton, AB',
    description:
      'Installed and maintained security systems, managed access control, and supported incident response operations.',
  },
];

export const spotlightRole = {
  role: 'Technical Support Engineer',
  company: 'Tech With Engineers',
  period: 'January 2025 – Present',
  highlights: [
    {
      icon: '🎓',
      title: 'Mentorship at Scale',
      body: 'Mentored 15+ engineers on CI/CD, Infrastructure as Code, and DevSecOps practices — improving deployment efficiency by 30%.',
    },
    {
      icon: '🛠️',
      title: 'Hands-On Training',
      body: 'Designed and delivered training content on GitHub Actions, secure pipelines, and cloud-native applications. Facilitated hackathons on Terraform and observability.',
    },
    {
      icon: '🎬',
      title: 'Video Content Creator',
      body: 'Produced high-quality tutorial videos on Cloud and DevOps topics, offering step-by-step technical guidance to the broader engineering community.',
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Multi-Agent AI Platform',
    description:
      'A production-grade multi-agent orchestration platform built on AWS. Coordinates autonomous AI agents for complex task delegation, with observability, retry logic, and modular agent design patterns.',
    tags: ['Multi-Agent', 'LLMs', 'AWS', 'Python', 'Orchestration'],
    github: 'https://github.com/Rajpreet12/multi-agent-platform',
    demo: '',
    featured: true,
    highlights: ['Agent orchestration', 'AWS-native', 'Modular design'],
  },
  {
    id: 2,
    title: 'CloudOps AI Assistant',
    description:
      'AI-powered cloud operations assistant that uses LLMs to interpret infrastructure state, surface anomalies, and suggest remediation steps — integrated with AWS CloudWatch and Prometheus.',
    tags: ['AI', 'CloudWatch', 'Prometheus', 'Python', 'LLMs'],
    github: 'https://github.com/Rajpreet12/cloudops-ai-assistant',
    demo: '',
    featured: false,
    highlights: ['Anomaly detection', 'LLM-driven ops', 'CloudWatch integrated'],
  },
  {
    id: 3,
    title: 'MLOps Pipeline on AWS',
    description:
      'End-to-end MLOps platform on AWS for training, versioning, and deploying machine learning models. Includes CI/CD for models, data versioning, and automated retraining triggers.',
    tags: ['MLOps', 'AWS', 'CI/CD', 'Python', 'Docker'],
    github: 'https://github.com/Rajpreet12/ML-ops',
    demo: '',
    featured: false,
    highlights: ['Automated retraining', 'Model versioning', 'CI/CD for ML'],
  },
  {
    id: 4,
    title: 'Terraform AWS VPC Module',
    description:
      'Production-ready Terraform module for provisioning a secure, multi-tier AWS VPC with public/private subnets, NAT gateways, flow logs, and security group best practices.',
    tags: ['Terraform', 'AWS', 'VPC', 'IaC', 'Security'],
    github: 'https://github.com/Rajpreet12/terraform-aws-vpcexample',
    demo: '',
    featured: false,
    highlights: ['Multi-tier networking', 'Least-privilege SGs', 'Reusable module'],
  },
  {
    id: 5,
    title: 'AI-Powered RAG Chatbot',
    description:
      'Intelligent chatbot using a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB vector search and embedding models. Streamlit interface with prompt tuning for real-time product recommendations.',
    tags: ['RAG', 'ChromaDB', 'Streamlit', 'LLMs', 'Python'],
    github: 'https://github.com/Rajpreet12',
    demo: '',
    featured: false,
    highlights: ['Real-time responses', 'Vector search', 'Prompt tuning'],
  },
  {
    id: 6,
    title: 'DevSecOps CI/CD Pipeline',
    description:
      'End-to-end secure CI/CD pipeline using GitHub Actions and AWS CodePipeline with automated security scanning, IaC validation, container image scanning, and policy enforcement gates.',
    tags: ['GitHub Actions', 'CodePipeline', 'Terraform', 'Docker', 'Security'],
    github: 'https://github.com/Rajpreet12',
    demo: '',
    featured: false,
    highlights: ['Security gates', 'IaC validated', 'Zero manual deploys'],
  },
];

export const blogs = [
  {
    id: 1,
    title: 'Two Roads to the Same Platform — What Building It By Hand Taught Me, Compared to a Colleague Who Used Kiro with AI Multi-Agent',
    summary:
      'A candid comparison of building a cloud platform manually versus using Kiro with AI multi-agent workflows — what each approach teaches, where each excels, and what it means for the future of engineering.',
    date: '2026-06-01',
    readTime: '10 min read',
    tags: ['AI', 'Kiro', 'Multi-Agent'],
    href: 'https://medium.com/@rajpreet-gill',
  },
  {
    id: 2,
    title: 'Building an AI-Powered FIFA World Cup Analytics Platform',
    summary:
      'How I combined machine learning, AWS, and a Streamlit dashboard to surface real-time analytics from World Cup data — from data pipeline design to model deployment.',
    date: '2026-04-10',
    readTime: '9 min read',
    tags: ['AI', 'AWS', 'Data Analytics'],
    href: 'https://medium.com/@rajpreet-gill',
  },
  {
    id: 3,
    title: 'The AI Earthquake: How Artificial Intelligence Rewired the World',
    summary:
      'A broad look at how AI has fundamentally shifted industries, workflows, and engineering practices — and what cloud builders need to understand about the shift.',
    date: '2025-11-05',
    readTime: '11 min read',
    tags: ['AI', 'Thought Leadership'],
    href: 'https://medium.com/@rajpreet-gill',
  },
  {
    id: 4,
    title: 'ECS vs EKS: Which AWS Container Service is Right for You?',
    summary:
      'A practical comparison of AWS container orchestration options for engineering teams choosing their cloud-native stack — tradeoffs, use cases, and decision criteria.',
    date: '2025-09-10',
    readTime: '8 min read',
    tags: ['ECS', 'EKS', 'Containers', 'AWS'],
    href: 'https://dev.to/rajpreet-gill',
  },
  {
    id: 5,
    title: 'Cloud-Native vs. Traditional Architecture: A Comparative Deep Dive',
    summary:
      'A structured breakdown of architectural tradeoffs to help teams modernize with confidence — covering scalability, cost, operational complexity, and migration paths.',
    date: '2025-03-15',
    readTime: '9 min read',
    tags: ['Architecture', 'Cloud-Native', 'AWS'],
    href: 'https://dev.to/rajpreet-gill',
  },
  {
    id: 6,
    title: 'CrowdStrike Chaos: How a Software Update Brought Airports and Banks to Their Knees',
    summary:
      'Analysis of the 2024 global outage — lessons on resilience, change management, and incident response for cloud and DevOps teams.',
    date: '2024-07-22',
    readTime: '7 min read',
    tags: ['Incident Response', 'Resilience', 'SRE'],
    href: 'https://medium.com/@rajpreet-gill',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect – Associate',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    year: 2024,
    badgeColor: '#FF9900',
    level: 'Associate',
  },
  {
    id: 2,
    name: 'AWS Certified Developer – Associate',
    code: 'DVA-C02',
    issuer: 'Amazon Web Services',
    year: 2024,
    badgeColor: '#FF9900',
    level: 'Associate',
  },
  {
    id: 3,
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    issuer: 'Amazon Web Services',
    year: 2023,
    badgeColor: '#FF9900',
    level: 'Foundational',
  },
  {
    id: 4,
    name: 'AWS AI Practitioner',
    code: 'AIF-C01',
    issuer: 'Amazon Web Services',
    year: 2025,
    badgeColor: '#FF9900',
    level: 'Foundational',
  },
  {
    id: 5,
    name: 'Certified Kubernetes Administrator',
    code: 'CKA',
    issuer: 'CNCF',
    year: 2024,
    badgeColor: '#326CE5',
    level: 'Professional',
  },
  {
    id: 6,
    name: 'RHCSA – Red Hat Certified System Administrator',
    code: 'RHCSA',
    issuer: 'Red Hat',
    year: 2023,
    badgeColor: '#EE0000',
    level: 'Professional',
  },
  {
    id: 7,
    name: 'IaC with Terraform',
    code: 'TF-DCT',
    issuer: 'Digital Cloud Training',
    year: 2025,
    badgeColor: '#7B42BC',
    level: 'Associate',
  },
  {
    id: 8,
    name: 'NLP & LLM – IBM SkillsBuild AI Accelerator',
    code: 'IBM-NLP',
    issuer: 'IBM',
    year: 2025,
    badgeColor: '#1261FE',
    level: 'Specialty',
  },
];

export const communityStats = [
  { label: 'AWS Community Builder', value: 'AI Track', icon: '🏅' },
  { label: 'Engineers Mentored', value: '15+', icon: '🎓' },
  { label: 'Blog Posts Published', value: '60+', icon: '✍️' },
  { label: 'CloudHer · WIICA Countries', value: '25+', icon: '🌍' },
  { label: 'Upnotch Mentor', value: 'Worldwide', icon: '🚀' },
  { label: 'Deployment Efficiency Gain', value: '30%', icon: '📈' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
