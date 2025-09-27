import React, { useRef, useState, useEffect } from "react";
import { X, ExternalLink, Github, ArrowRight, Sparkles, Code, Palette, ChevronLeft, Plus, Eye, Calendar, Star } from "lucide-react";

// Safe animation utilities
const animateElement = (element, properties, duration = 1, delay = 0, ease = 'ease-out') => {
  if (!element || !element.style) return;
  
  element.style.transition = `all ${duration}s ${ease} ${delay}s`;
  
  setTimeout(() => {
    Object.keys(properties).forEach(prop => {
      if (prop === 'opacity') {
        element.style.opacity = properties[prop];
      } else if (prop === 'y') {
        const currentTransform = element.style.transform || '';
        const newTransform = currentTransform.replace(/translateY\([^)]*\)/g, '');
        element.style.transform = `${newTransform} translateY(${properties[prop]}px)`.trim();
      } else if (prop === 'x') {
        const currentTransform = element.style.transform || '';
        const newTransform = currentTransform.replace(/translateX\([^)]*\)/g, '');
        element.style.transform = `${newTransform} translateX(${properties[prop]}px)`.trim();
      } else if (prop === 'scale') {
        const currentTransform = element.style.transform || '';
        const newTransform = currentTransform.replace(/scale\([^)]*\)/g, '');
        element.style.transform = `${newTransform} scale(${properties[prop]})`.trim();
      }
    });
  }, delay * 1000);
};

// Mock GSAP implementation
const gsap = {
  timeline: () => ({
    fromTo: function(target, from, to) {
      if (!target) return this;
      const elements = Array.isArray(target) ? target : [target];
      
      elements.forEach(element => {
        if (!element || !element.style) return;
        
        Object.keys(from).forEach(prop => {
          if (prop === 'opacity') element.style.opacity = from[prop];
          else if (prop === 'y') element.style.transform = `translateY(${from[prop]}px)`;
          else if (prop === 'x') element.style.transform = `translateX(${from[prop]}px)`;
          else if (prop === 'scale') element.style.transform = `scale(${from[prop]})`;
        });
        
        animateElement(element, to, to.duration || 1, to.delay || 0, to.ease || 'ease-out');
      });
      return this;
    },
    to: function(target, vars) {
      if (!target) return this;
      const elements = Array.isArray(target) ? target : [target];
      
      elements.forEach(element => {
        if (!element || !element.style) return;
        animateElement(element, vars, vars.duration || 1, vars.delay || 0, vars.ease || 'ease-out');
      });
      return this;
    }
  }),
  
  to: function(target, vars) {
    if (!target) return;
    const elements = Array.isArray(target) ? target : [target];
    
    elements.forEach(element => {
      if (!element || !element.style) return;
      animateElement(element, vars, vars.duration || 1, vars.delay || 0, vars.ease || 'ease-out');
    });
  },
  
  set: function(target, vars) {
    if (!target) return;
    const elements = Array.isArray(target) ? target : [target];
    
    elements.forEach(element => {
      if (!element || !element.style) return;
      
      Object.keys(vars).forEach(prop => {
        if (prop === 'opacity') element.style.opacity = vars[prop];
        else if (prop === 'y') element.style.transform = `translateY(${vars[prop]}px)`;
        else if (prop === 'x') element.style.transform = `translateX(${vars[prop]}px)`;
        else if (prop === 'scale') element.style.transform = `scale(${vars[prop]})`;
      });
    });
  }
};

// Extended Projects data
const projectsData = [
  {
    id: 1,
    title: "Ryde - On-Demand Rides Made Simple",
    shortTitle: "Ryde App",
    description: "Revolutionary ride-sharing app with real-time tracking and seamless user experience",
    detailedDescription: "A comprehensive ride-sharing application featuring real-time GPS tracking, secure payment processing, driver-rider matching algorithms, and an intuitive user interface. Built with modern mobile development practices for optimal performance and user satisfaction. The app includes features like ride scheduling, fare estimation, driver ratings, and multi-language support.",
    image: "/images/project1.png",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["React Native", "Expo", "TailwindCSS", "Node.js", "Socket.io", "MongoDB", "AWS"],
    liveUrl: "https://ryde-app.com",
    githubUrl: "https://github.com/yourusername/ryde-app",
    featured: true,
    status: "Live",
    year: "2024",
    category: "Mobile App",
    duration: "6 months",
    team: "4 developers"
  },
  {
    id: 2,
    title: "Library Management Platform",
    shortTitle: "Library Hub",
    description: "Smart library system with AI-powered book recommendations and digital cataloging",
    detailedDescription: "Full-stack library management system with features including book cataloging, user management, borrowing/returning system, late fee calculations, AI-powered recommendations, and detailed analytics dashboard. Built with modern web technologies for librarians and patrons.",
    image: "/images/project2.png",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "Python"],
    liveUrl: "https://library-platform.com",
    githubUrl: "https://github.com/yourusername/library-management",
    featured: false,
    status: "Live",
    year: "2024",
    category: "Web App",
    duration: "4 months",
    team: "Solo"
  },
  {
    id: 3,
    title: "YC Directory - Startup Showcase",
    shortTitle: "YC Directory",
    description: "Interactive startup discovery platform with advanced filtering and analytics",
    detailedDescription: "An interactive directory of Y Combinator startups featuring advanced search and filtering, company profiles, founder information, funding details, growth metrics, and market insights. Designed to help investors and entrepreneurs discover emerging companies and market trends.",
    image: "/images/project3.png",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel", "TailwindCSS"],
    liveUrl: "https://yc-directory.com",
    githubUrl: "https://github.com/yourusername/yc-directory",
    featured: false,
    status: "Live",
    year: "2023",
    category: "Web Platform",
    duration: "3 months",
    team: "2 developers"
  },
  {
    id: 4,
    title: "E-Commerce Analytics Dashboard",
    shortTitle: "Analytics Pro",
    description: "Comprehensive analytics platform for e-commerce businesses",
    detailedDescription: "Advanced analytics dashboard providing real-time insights into e-commerce performance, customer behavior, sales trends, and inventory management. Features include predictive analytics, automated reporting, and integration with major e-commerce platforms.",
    image: "/api/placeholder/600/400",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis", "Docker"],
    liveUrl: "https://analytics-pro.com",
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    featured: false,
    status: "Development",
    year: "2024",
    category: "Dashboard",
    duration: "5 months",
    team: "3 developers"
  },
  {
    id: 5,
    title: "Crypto Trading Bot",
    shortTitle: "TradeBot AI",
    description: "Automated cryptocurrency trading bot with machine learning algorithms",
    detailedDescription: "Intelligent trading bot that uses machine learning algorithms to analyze market trends and execute trades automatically. Features include risk management, portfolio optimization, backtesting capabilities, and real-time market data integration.",
    image: "/api/placeholder/600/400",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["Python", "TensorFlow", "WebSocket", "REST API", "PostgreSQL", "Docker"],
    liveUrl: "https://tradebot-ai.com",
    githubUrl: "https://github.com/yourusername/trading-bot",
    featured: false,
    status: "Beta",
    year: "2023",
    category: "AI/ML",
    duration: "8 months",
    team: "Solo"
  },
  {
    id: 6,
    title: "Social Media Management Tool",
    shortTitle: "SocialSync",
    description: "All-in-one social media management and analytics platform",
    detailedDescription: "Comprehensive social media management tool that allows businesses to schedule posts, analyze engagement, monitor mentions, and manage multiple social media accounts from a single dashboard. Includes AI-powered content suggestions and automated reporting.",
    image: "/api/placeholder/600/400",
    bgColor: "bg-gradient-to-br from-red-600/20 via-gray-900/50 to-black/30",
    cardBg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "GraphQL", "AWS"],
    liveUrl: "https://socialsync.com",
    githubUrl: "https://github.com/yourusername/social-sync",
    featured: false,
    status: "Live",
    year: "2023",
    category: "SaaS",
    duration: "7 months",
    team: "5 developers"
  }
];

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      if (modalRef.current && modalContentRef.current) {
        gsap.set(modalRef.current, { opacity: 0 });
        gsap.set(modalContentRef.current, { scale: 0.8, y: 50, opacity: 0 });
        
        gsap.to(modalRef.current, { opacity: 1, duration: 0.3 });
        gsap.to(modalContentRef.current, { 
          scale: 1, 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          delay: 0.1
        });
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current && modalContentRef.current) {
      gsap.to(modalContentRef.current, { 
        scale: 0.8, 
        y: 50, 
        opacity: 0, 
        duration: 0.3 
      });
      gsap.to(modalRef.current, { 
        opacity: 0, 
        duration: 0.3, 
        delay: 0.1
      });
      setTimeout(onClose, 400);
    } else {
      onClose();
    }
  };

  // Handle escape key and click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const statusConfig = {
    Live: { color: 'bg-green-500', text: 'text-green-400', border: 'border-green-500' },
    Beta: { color: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500' },
    Development: { color: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500' },
    'In Progress': { color: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500' }
  };

  const currentStatus = statusConfig[project.status] || statusConfig.Live;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
    >
      <div 
        ref={modalContentRef}
        className="bg-gray-900 border border-gray-700 rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Header with Multiple Close Options */}
        <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleClose}
              className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              aria-label="Back to projects"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline text-sm font-medium">Back to Projects</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${currentStatus.color} animate-pulse`}></div>
              <span className="text-sm font-medium text-gray-300">{project.status} • {project.year}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleClose}
                className="group bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
                aria-label="Cancel and close"
              >
                Cancel
              </button>
              <button
                onClick={handleClose}
                className="group bg-gray-800 hover:bg-red-500/20 hover:text-red-400 text-gray-300 rounded-lg p-2 transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Project Image */}
        <div className={`${project.bgColor} p-4 sm:p-8 lg:p-12`}>
          <div className="relative group">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Project Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-red-600/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {project.category}
              </span>
            </div>
          </div>
        </div>
        
        {/* Project Details */}
        <div className="p-4 sm:p-8 lg:p-12">
          {/* Title and Meta Info */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {project.featured && <Sparkles className="text-red-500 animate-pulse" size={28} />}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  {project.title}
                </h2>
              </div>
              
              {/* Project Meta */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Star size={16} />
                  <span className="text-sm">{project.team}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Eye size={16} />
                  <span className="text-sm">{project.category}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="prose prose-gray max-w-none mb-10">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Code className="text-red-500" size={20} />
              <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-red-500/20 hover:to-red-600/20 border border-gray-600 hover:border-red-500/50 rounded-lg text-sm font-medium text-gray-300 hover:text-red-300 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              View Live Project
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 hover:border-gray-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Source Code
            </a>
            <button
              onClick={handleClose}
              className="group flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick, className = "", index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { 
        y: 60, 
        opacity: 0, 
        scale: 0.9 
      });
      
      setTimeout(() => {
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1
          });
        }
      }, 100);
    }
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      animateElement(cardRef.current, { y: -8, scale: 1.02 }, 0.3);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      animateElement(cardRef.current, { y: 0, scale: 1 }, 0.3);
    }
  };

  const statusConfig = {
    Live: { color: 'bg-green-500', text: 'text-green-400' },
    Beta: { color: 'bg-yellow-500', text: 'text-yellow-400' },
    Development: { color: 'bg-blue-500', text: 'text-blue-400' },
    'In Progress': { color: 'bg-orange-500', text: 'text-orange-400' }
  };

  const currentStatus = statusConfig[project.status] || statusConfig.Live;
  
  return (
    <div 
      ref={cardRef}
      className={`group cursor-pointer ${className}`}
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${project.cardBg} rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border border-gray-700 hover:border-red-500/30 backdrop-blur-sm overflow-hidden h-full flex flex-col`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status and Category */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${currentStatus.color} animate-pulse`}></div>
            <span className="text-xs font-medium text-gray-400">{project.year}</span>
          </div>
          <span className="text-xs bg-gray-800/70 text-gray-300 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        {/* Project Image */}
        <div className={`image-wrapper mb-4 rounded-xl overflow-hidden transition-transform duration-500 ${isHovered ? 'scale-105' : ''} bg-gray-800/30`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2 flex-1">
              {project.shortTitle}
            </h3>
            <ArrowRight 
              size={18} 
              className={`text-gray-500 group-hover:text-red-400 transition-all duration-300 flex-shrink-0 ${isHovered ? 'translate-x-1' : ''}`} 
            />
          </div>
          
          <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>
          
          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-800/70 border border-gray-600/50 text-gray-300 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-700/50 border border-gray-500/50 text-gray-400 rounded-md text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-2">
            <span className={`text-xs font-medium ${currentStatus.text}`}>
              {project.status}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-red-400 group-hover:text-red-300">
              <span>View Details</span>
              <ArrowRight size={14} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingElement = ({ children, delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.animation = `float 4s ease-in-out infinite ${delay}s`;
    }
  }, [delay]);

  return (
    <div ref={elementRef} className="animate-float">
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation-name: float;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation-delay: ${delay}s;
        }
      `}</style>
    </div>
  );
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featuredRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);
  const displayedOtherProjects = showMore ? otherProjects : otherProjects.slice(0, 3);

  useEffect(() => {
    const animateEntrance = () => {
      if (headerRef.current) {
        const children = Array.from(headerRef.current.children);
        children.forEach((child, index) => {
          if (child && child.style) {
            child.style.opacity = '0';
            child.style.transform = 'translateY(40px)';
            setTimeout(() => {
              if (child && child.style) {
                child.style.transition = 'all 0.8s ease-out';
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
              }
            }, index * 150);
          }
        });
      }

      if (featuredRef.current) {
        featuredRef.current.style.opacity = '0';
        featuredRef.current.style.transform = 'translateX(-60px)';
        setTimeout(() => {
          if (featuredRef.current) {
            featuredRef.current.style.transition = 'all 1s ease-out';
            featuredRef.current.style.opacity = '1';
            featuredRef.current.style.transform = 'translateX(0)';
          }
        }, 600);
      }
    };

    setTimeout(animateEntrance, 100);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.classList.contains('animate-on-scroll')) {
            el.style.transition = 'all 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.project-card');
      items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.classList.add('animate-on-scroll');
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <>
      <section id="work" ref={sectionRef} className="relative min-h-screen bg-gray-900 py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement delay={0}>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-600/10 to-gray-800/20 rounded-full blur-3xl"></div>
          </FloatingElement>
          <FloatingElement delay={1.5}>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-red-600/10 to-gray-800/20 rounded-full blur-3xl"></div>
          </FloatingElement>
          <FloatingElement delay={0.8}>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-red-600/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </FloatingElement>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16 lg:mb-24">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Palette className="text-white-500" size={24} />
              <span className="text-red-500 font-medium text-sm uppercase tracking-wider"></span>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore my professional Jorney of innovative projects built with cutting-edge technologies.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Featured Project */}
            {featuredProject && (
              <article ref={featuredRef} className="group">
                <div 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-1 border border-gray-700 cursor-pointer hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  onClick={() => handleProjectClick(featuredProject)}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className={`lg:w-1/2 ${featuredProject.bgColor} p-8 lg:p-12 flex items-center justify-center relative`}>
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <Sparkles className="text-red-500" size={20} />
                        <span className="text-xs font-bold uppercase text-white bg-red-500/20 px-3 py-1 rounded-full">Featured</span>
                      </div>
                      <img 
                        src={featuredProject.image} 
                        alt={featuredProject.title}
                        className="max-w-full h-48 lg:h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-3 h-3 rounded-full ${featuredProject.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                        <span className="text-sm font-medium text-gray-400">{featuredProject.status} • {featuredProject.year}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                        {featuredProject.title}
                      </h2>
                      <p className="text-gray-400 mb-6 leading-relaxed">{featuredProject.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                        {featuredProject.technologies.length > 4 && (
                          <span className="px-3 py-2 bg-gray-600/50 text-gray-500 rounded-lg text-sm">+{featuredProject.technologies.length - 4}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-red-500 font-semibold">
                        <span className="text-lg">View Project</span>
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Other Projects */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Additional Projects</h2>
                <p className="text-gray-400">A selection of my recent work demonstrating technical expertise</p>
              </div>
              
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayedOtherProjects.map((project, index) => (
                  <div key={project.id} className="project-card">
                    <ProjectCard project={project} onClick={handleProjectClick} index={index} />
                  </div>
                ))}
              </div>

              {otherProjects.length > 3 && (
                <div className="text-center mt-12">
                  <button
                    onClick={toggleShowMore}
                    className="group inline-flex items-center gap-2 bg-white-500 bg-white-700 px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                  >
                    <span>{showMore ? 'Show Less Projects' : 'See More Projects'}</span>
                    <ArrowRight 
                      size={18} 
                      className={`transition-transform duration-300 ${
                        showMore ? 'rotate-180' : 'group-hover:translate-x-1'
                      }`} 
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AppShowcase;