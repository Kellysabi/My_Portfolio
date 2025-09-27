const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: 'Innovations', imgPath: 'https://unpkg.com/lucide-static@latest/icons/lightbulb.svg' },
  { text: 'Solutions', imgPath: 'https://unpkg.com/lucide-static@latest/icons/puzzle.svg' },
  { text: 'Transformations', imgPath: 'https://unpkg.com/lucide-static@latest/icons/refresh-cw.svg' },
  { text: 'Breakthroughs', imgPath: 'https://unpkg.com/lucide-static@latest/icons/rocket.svg' },
  { text: 'Systems', imgPath: 'https://unpkg.com/lucide-static@latest/icons/cpu.svg' },
  { text: 'Innovations', imgPath: 'https://unpkg.com/lucide-static@latest/icons/lightbulb.svg' },
  { text: 'Solutions', imgPath: 'https://unpkg.com/lucide-static@latest/icons/puzzle.svg' },
  { text: 'Transformations', imgPath: 'https://unpkg.com/lucide-static@latest/icons/refresh-cw.svg' },
  { text: 'Breakthroughs', imgPath: 'https://unpkg.com/lucide-static@latest/icons/rocket.svg' },
  { text: 'Systems', imgPath: 'https://unpkg.com/lucide-static@latest/icons/cpu.svg' },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
  {
    imgPath: "/images/logos/company-logo-13.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
   {
    name: "Ui/Ux Designer",
    imgPath: "/images/web-design_13191231.png", // Docker/Kubernetes/AWS
  },


  {
    name: "Cloud & DevOps Engineer",
    imgPath: "/images/cloud-coding_2092401.png", // Docker/Kubernetes/AWS
  },
  {
    name: "Blockchain Developer",
    imgPath: "/images/blockchain_9423070.png", // Ethereum/Solidity
  },
  {
    name: "Cybersecurity Specialist",
    imgPath: "/images/cyber_12836946.png", // Security/Shield icon
  },

  {
    name: "Mobile App developer",
    imgPath: "/images/NicePng_react-logo-png_2224978.png", // Flutter/React Native
  },

];

const techStackIcons = [

    {
    name: "Full-Stack Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Backend & API Engineer",
    modelPath: "/models/node-transformed.glb", // Node.js / Express.js
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python & AI/ML Developer",
    modelPath: "/models/python-transformed.glb", // Python for AI/ML
    scale: 0.8,
    rotation: [0, 0, 0],
  },
 
   {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [

  {
    review:
      "Kelechi demonstrated exceptional academic prowess and a passion for innovation throughout his studies. His leadership in data-driven projects and commitment to technical excellence positioned him as a standout scholar.",
    imgPath: "/images/Veritas_university_logo.png",
    logoPath: "/images/Veritas_university_logo.png",
    title: "Bachelor of Science in Computer Science",
    date: "2021 – 2025",
    responsibilities: [
      "Earned a Bachelor of Science in Computer Science with a strong technical foundation and academic excellence at Veritas University, Abuja.",
      "Specialized in Data Science and Data Engineering, focusing on data analysis, predictive modeling, and advanced analytics.",
      "Obtained Cisco Certified Professional certifications, enhancing skills in data analysis, machine learning, and generating actionable insights.",
      "Gained proficiency in data pipeline optimization, database architecture, ETL processes, and data warehouse management.",
      "Developed expertise in enterprise network design, security protocols, threat mitigation, and infrastructure performance optimization.",
      "Led innovative data science and engineering projects, building scalable infrastructure and predictive models to drive business insights.",
      "Pursued continuous professional development through extracurricular technical courses and practical application of knowledge.",
    ],
  },

   {
    review:
      "Kelechi’s contributions as a full stack and mobile developer were outstanding. His ability to integrate modern frameworks with responsive design principles made a significant impact on our products.",
    imgPath: "/images/ProCity.svg",
    logoPath: "/images/ProCity.svg",
    title: "Full Stack Developer | Mobile App Developer Intern",
    date: "March 2022 – October 2022",
    responsibilities: [
      "Developed 7 responsive web and cross-platform mobile applications using React, React Native, and Flutter.",
      "Enhanced user engagement by 32% through responsive design and accessibility compliance.",
      "Integrated 14 RESTful APIs and third-party SDKs, improving application functionality and data efficiency by 28%.",
      "Optimized app performance with code refactoring, reducing load times by 35%.",
      "Implemented unit, integration, and automated testing within CI/CD pipelines, increasing deployment reliability by 45%.",
    ],
  },
  {
    review:
      "Kelechi brought creativity, technical depth, and leadership to the team. His ability to deliver secure, scalable applications while also streamlining DevOps processes was invaluable to our success.",
    imgPath: "/images/Harvox.png",
    logoPath: "/images/Harvox.png",
    title: "Software Engineer | Cybersecurity Specialist | DevOps Engineer | AI/ML Developer Intern",
    date: "August 2023 – January 2025",
    responsibilities: [
      "Engineered and deployed 8 secure, scalable full-stack web applications leveraging React, Node.js, Python, and AWS, serving 1000+ users.",
      "Performed 15 vulnerability assessments and penetration tests, resolving 23 critical security issues and reducing incidents by 85%.",
      "Orchestrated automation of 12 CI/CD pipelines with Jenkins, Docker, and Kubernetes, accelerating deployment cycles by 40%.",
      "Designed and managed cloud infrastructure on AWS for 6 enterprise projects, achieving 99.5% uptime.",
      "Developed and fine-tuned 5 ML models with TensorFlow for predictive analytics, improving forecasting accuracy by 18%.",
    ],
  },
 
    {
    review:
      "Kelechi consistently delivered high-quality freelance projects across web, mobile, blockchain, and AI. His ability to adapt to client needs and manage end-to-end delivery has made him a trusted partner for startups and businesses.",
    imgPath: "/images/freelancer.png",
    logoPath: "/images/freelancer.png",
    title: "Freelance Software Engineer",
    date: "2023 – Present",
    responsibilities: [
      "Built and deployed 5+ production-grade web and mobile applications for clients using React, Next.js, and Flutter.",
      "Delivered a decentralized freelance marketplace (DappWorks) using Solidity and Web3.js, ensuring secure payments via smart contracts.",
      "Developed AI-powered applications such as ResumePro AI, an intelligent resume builder leveraging OpenAI GPT APIs.",
      "Created e-commerce platforms (ShopSwift) with Stripe integration, enabling small businesses to generate revenue online.",
      "Managed cloud deployment pipelines and hosting for client projects on AWS, Vercel, and Firebase.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logos/logo4.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },

];

const testimonials = [
  {
    name: "Amina Yusuf",
    mentions: "@aminayusuf",
    company: "PayNaija",
    industry: "Fintech",
    review:
      "Kelechi transformed our fintech idea into a flawless platform. His problem-solving skills delivered results that grew our Lagos customer base by 300%.",
    imgPath: "https://ui-avatars.com/api/?name=Amina+Yusuf",
  },
  {
    name: "Lucas Bennett",
    mentions: "@lucasbennett",
    company: "CloudSphere",
    industry: "SaaS",
    review:
      "Kelechi nailed our requirements and delivered beyond expectations. His frontend and backend skills are elite—perfect for SaaS businesses worldwide.",
    imgPath: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Chinedu Okeke",
    mentions: "@chineduokeke",
    company: "NaijaBrands",
    industry: "Retail / E-commerce",
    review:
      "Kelechi's professionalism shone through every step. He elevated our Abuja-based brand with innovative solutions that now serve users across Africa and Europe.",
    imgPath: "https://ui-avatars.com/api/?name=Chinedu+Okeke",
  },
  {
    name: "Sophia Martinez",
    mentions: "@sophiamartinez",
    company: "ShopGlobal",
    industry: "E-commerce",
    review:
      "From outdated to cutting-edge: Kelechi revamped our e-commerce store into a modern powerhouse, boosting global conversions by 50%.",
    imgPath: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Wanjiru Mwangi",
    mentions: "@wanjirumwangi",
    company: "AfriMarket",
    industry: "Marketplace / Startups",
    review:
      "Kelechi's web development mastery scaled our online marketplace to new heights, helping us expand across East Africa and beyond.",
    imgPath: "https://ui-avatars.com/api/?name=Wanjiru+Mwangi",
  },
  {
    name: "Hiroshi Tanaka",
    mentions: "@hiroshitanaka",
    company: "NipponTech",
    industry: "Tech Startups",
    review:
      "Kelechi delivered a seamless, high-performance application for our Japanese startup. His code quality and attention to detail impressed our entire team.",
    imgPath: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nkechi Eze",
    mentions: "@nkechieze",
    company: "SmartAI Africa",
    industry: "Artificial Intelligence",
    review:
      "Working with Kelechi was transformative. His AI-integrated solutions optimized our operations, saving us millions annually in both ₦ and $.",
    imgPath: "https://ui-avatars.com/api/?name=Nkechi+Eze",
  },
  {
    name: "Robert Fox",
    mentions: "@robertfox",
    company: "BlockSecure",
    industry: "Blockchain / Security",
    review:
      "Kelechi's blockchain expertise secured our platform while enabling new features. His work positioned us as leaders in the international digital economy.",
    imgPath: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/yourusername",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/yourusername",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/yourusername",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/kelechi-akwara-8a7862248",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Kellysabi",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
}; 