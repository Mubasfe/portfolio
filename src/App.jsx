import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun, Moon, Menu, X, Download, Github, Linkedin, Mail,
  User, Rocket, Briefcase, GraduationCap, Code2, Server, Globe, Zap, Database, LayoutTemplate,
  ChevronLeft, ChevronRight, CheckCircle2, Phone, MapPin, Send
} from 'lucide-react';

// --- DATA ---
const NAV_LINKS = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Testimonials', 'Contact'];

const EDUCATION = [
  {
    id: 1,
    period: '2021 - 2025',
    title: 'Bachelor of Engineering in Software Engineering',
    institution: 'Mizan-Tepi University | Tepi Campus',
    description: 'Pursuing a comprehensive program focused on software engineering principles with strong emphasis on modern web development practices and technologies.',
  },
  {
    id: 2,
    period: 'March 2023 - June 2023',
    title: 'Senior Project | Website Developer',
    institution: 'Mizan-Tepi University',
    description: 'Developed a full-featured academic project website, focusing on frontend design and implementation.',
  }
];

const EXPERIENCE = [
  {
    id: 1,
    period: '2025 - Present',
    title: 'Full Stack Developer',
    institution: 'Self Employed',
    description: 'Building and deploying full-stack web applications independently, focusing on scalable backend systems and engaging frontend interfaces.',
  },
  {
    id: 2,
    period: 'March 2025 - June 2025',
    title: 'Web Developer | Internship',
    institution: 'Federal Civil Service Commission (FCSC) | Addis Ababa, Ethiopia',
    description: 'Assisted in the development of secure web applications, contributed to frontend and backend tasks, and gained exposure to real-world projects.',
  },
  {
    id: 3,
    period: 'December 2024 - February 2025',
    title: 'Project Manager',
    institution: 'Mizan-Tepi University',
    description: 'Led a student software development project, coordinated team efforts, managed timelines, and ensured successful delivery of project milestones.',
  }
];

const FRONTEND_SKILLS = [
  { name: 'HTML', percentage: 100, icon: <Globe size={16} />, proficient: true },
  { name: 'CSS', percentage: 95, icon: <Code2 size={16} />, proficient: true },
  { name: 'JavaScript', percentage: 95, icon: <Zap size={16} /> },
  { name: 'React', percentage: 90, icon: <Code2 size={16} /> },
  { name: 'Tailwind CSS', percentage: 90, icon: <LayoutTemplate size={16} /> },
];

const BACKEND_SKILLS = [
  { name: 'PHP', percentage: 90, icon: <Server size={16} /> },
  { name: 'MySQL', percentage: 85, icon: <Database size={16} /> },
  { name: 'Spring Boot', percentage: 80, icon: <Server size={16} /> },
  { name: 'Node.js', percentage: 85, icon: <Server size={16} /> },
  { name: 'MongoDB', percentage: 80, icon: <Database size={16} /> },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'Fullstack',
    image: '/project-1.jpg',
    description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
    tags: ['React', 'Tailwind CSS', 'Redux']
  },
  {
    id: 2,
    title: 'Ecommerce App',
    type: 'Frontend',
    image: '/project-2.jpg',
    description: 'A beautiful Ecommerce application with drag-and-drop functionality',
    tags: ['Vue.js', 'Vuex', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Task Management System',
    type: 'Backend',
    image: '/project-3.jpg',
    description: 'Robust backend API for managing organizational tasks and workflows',
    tags: ['Spring Boot', 'MySQL', 'JWT']
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateLabs',
    content: '"Mubarek is one of the most talented developers I have worked with. He not only writes clean code but also has great communication skills. Highly recommended!"',
    rating: 5,
    avatar: '/avatar-1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart',
    content: '"Delivered our project ahead of schedule with exceptional quality. His ability to understand our business needs and translate them into technical solutions is outstanding."',
    rating: 5,
    avatar: '/avatar-2.jpg'
  }
];

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- COMPONENTS ---

const SectionHeading = ({ title, icon, highlightIndex = -1 }) => (
  <motion.div variants={fadeUp} className="flex flex-col items-center mb-16 px-4">
    <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-900 dark:text-white text-center">
      {icon && <span className="text-blue-600 dark:text-accent-cyan">{icon}</span>}
      {highlightIndex >= 0 ? (
        <span>
          {title.split(' ')[0]} <span className="text-blue-600 dark:text-accent-cyan">{title.split(' ')[1]}</span>
        </span>
      ) : (
        title
      )}
    </h2>
    <div className="w-16 h-1 bg-accent-cyan mt-4 rounded-full"></div>
  </motion.div>
);

const TimelineCard = ({ data, isLeft }) => {
  return (
    <motion.div 
      variants={fadeUp}
      className={`relative w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right md:ml-auto md:float-left' : 'md:pl-12 md:mr-auto md:float-right'} clear-both mb-12 flex justify-${isLeft ? 'end' : 'start'} px-4 md:px-0`}
    >
      {/* Node Dot */}
      <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full border-4 border-slate-50 dark:border-[#0f1624] bg-accent-cyan z-10 ${isLeft ? 'right-[-8px]' : 'left-[-8px]'}`}></div>
      
      {/* Card Content */}
      <div className="relative group w-full">
        {/* Glow Hover Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-cyan rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        <div className="relative p-6 rounded-2xl bg-white dark:bg-[#161d2d] border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/50 dark:hover:border-accent-cyan/50 transition-colors duration-300 z-10 text-left shadow-sm dark:shadow-none">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-blue-50 dark:bg-[#1a233a] text-accent-cyan">
            {data.period}
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{data.title}</h3>
          <div className="flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
            {data.institution.includes('University') ? <GraduationCap size={16} /> : <Briefcase size={16} />}
            <span>{data.institution}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {data.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill }) => (
  <motion.div variants={fadeUp} className="p-5 rounded-2xl bg-white dark:bg-[#161d2d] border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/30 transition-all shadow-sm dark:shadow-none">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-3 font-semibold text-sm text-slate-900 dark:text-white">
        <div className="text-accent-cyan bg-blue-50 dark:bg-[#1a233a] p-2 rounded-lg">
          {skill.icon}
        </div>
        {skill.name}
      </div>
      <div className="flex items-center gap-3">
        {skill.proficient && (
          <span className="text-xs flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <CheckCircle2 size={12} className="text-accent-cyan" /> <span className="hidden sm:inline">Proficient</span>
          </span>
        )}
        <div className="text-accent-cyan font-bold text-sm">
          {skill.percentage}%
        </div>
      </div>
    </div>
    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-[#0f1624] overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-accent to-accent-cyan rounded-full"
      ></motion.div>
    </div>
  </motion.div>
);

// --- MAIN APP ---

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [projectFilter, setProjectFilter] = useState('All');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Scroll Spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle side effect
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    
    // Enable native smooth scrolling and offset for fixed header
    document.documentElement.classList.add('scroll-smooth', 'scroll-pt-20');
  }, [darkMode]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    
    // Close mobile menu immediately
    setMobileMenuOpen(false);
    
    // Defer the scroll until after the React re-render completes
    // to prevent the re-render from aborting the browser's smooth scroll animation
    setTimeout(() => {
      if (link.toLowerCase() === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const filteredProjects = PROJECTS.filter(p => projectFilter === 'All' || p.type === projectFilter);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-slate-100 dark:bg-[#0f1624] text-slate-800 dark:text-slate-300 transition-colors duration-300">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-[#0f1624]/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">Mubarek</span>
            </div>
            
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Desktop Nav */}
              <div className="hidden lg:flex space-x-8">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link} 
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-accent-cyan ${activeSection === link ? 'text-blue-600 dark:text-accent-cyan' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-[#161d2d] text-slate-600 dark:text-slate-400 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Hamburger Menu (Mobile) */}
              <button 
                className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white dark:bg-[#161d2d] border-b border-slate-200 dark:border-slate-800 overflow-hidden absolute left-0 right-0 top-full w-full shadow-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_LINKS.map(link => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${activeSection === link ? 'bg-slate-100 dark:bg-[#0f1624] text-blue-600 dark:text-accent-cyan' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[100svh] flex items-center justify-center pt-20 px-4">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-16 w-full"
          >
            {/* Text Content */}
            <motion.div variants={fadeUp} className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-blue-600 dark:text-accent-cyan">Mubarek</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-600 dark:text-slate-400">
                Full Stack Developer
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-500 max-w-lg mx-auto lg:mx-0">
                I build exceptional and accessible digital experiences for the web. Passionate about creating intuitive and responsive user interfaces.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 lg:pt-4">
                <a href="/mubarek.PDF" download="mubarek.PDF" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all">
                  <Download size={18} /> Download CV
                </a>
                <a href="#contact" className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold transition-all border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white">
                  Contact Me
                </a>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 pt-2 lg:pt-4">
                {[<Github size={20}/>, <Linkedin size={20}/>, <Mail size={20}/>].map((icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-full bg-slate-100 dark:bg-[#1a233a] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#253250] transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div variants={fadeUp} className="flex-1 flex justify-center lg:justify-end">
              <div className="relative p-1.5 rounded-full bg-gradient-to-r from-accent-cyan to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.2)] dark:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="p-2 rounded-full bg-white dark:bg-[#0f1624]">
                  <img 
                    src="/profile.jpg" 
                    alt="Mubarek" 
                    className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-12 md:py-20 px-4">
          <SectionHeading title="About Me" icon={<User size={28} />} />
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            <motion.div variants={fadeUp} className="flex-1 w-full">
              <img 
                src="/about.jpg" 
                alt="About Mubarek" 
                className="w-full max-w-sm lg:max-w-md mx-auto rounded-[2rem] object-cover shadow-xl dark:shadow-2xl dark:shadow-black/50"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex-1 space-y-6 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-3 text-slate-900 dark:text-white">
                <Rocket className="text-accent-cyan" size={24} /> Who is Mubarek?
              </h3>
              <h4 className="text-base sm:text-lg font-bold flex items-center justify-center lg:justify-start gap-2 text-accent">
                <Briefcase size={20} /> Software Developer
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                I'm a passionate and self-motivated Software Developer with a strong foundation in both front-end and back-end technologies. I enjoy translating complex problems into simple, elegant solutions and collaborating with teams to bring impactful ideas to life. Whether it's crafting responsive UIs or designing powerful APIs, I am dedicated to creating high-quality software that makes a difference.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* EDUCATION SECTION (Timeline) */}
        <section id="education" className="py-12 md:py-20 px-4">
          <SectionHeading title="Education" icon={<GraduationCap size={32} />} />
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-accent-cyan/30 transform -translate-x-1/2"></div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 w-full overflow-hidden">
              {EDUCATION.map((item, index) => (
                <TimelineCard key={item.id} data={item} isLeft={index % 2 === 0} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION (Timeline) */}
        <section id="experience" className="py-12 md:py-20 px-4">
          <SectionHeading title="Experience" icon={<Briefcase size={28} />} />
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-accent-cyan/30 transform -translate-x-1/2"></div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative z-10 w-full overflow-hidden">
              {EXPERIENCE.map((item, index) => (
                <TimelineCard key={item.id} data={item} isLeft={index % 2 === 0} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION (2-Column) */}
        <section id="skills" className="py-12 md:py-20 px-4">
          <SectionHeading title="My Skills" highlightIndex={1} />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16 text-sm sm:text-base">
            I've mastered a variety of technologies in the web development world, from backend systems to interactive frontend experiences. My skills evolve with the industry to deliver cutting-edge solutions.
          </p>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {/* Frontend Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-8">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-[#161d2d] text-accent-cyan border border-slate-200 dark:border-slate-800">
                  <Code2 size={24} />
                </div>
                Frontend Skills
              </h3>
              {FRONTEND_SKILLS.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* Backend Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-8">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-[#161d2d] text-accent-cyan border border-slate-200 dark:border-slate-800">
                  <Server size={24} />
                </div>
                Backend Skills
              </h3>
              {BACKEND_SKILLS.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-12 md:py-20 px-4">
          <SectionHeading title="My Projects" highlightIndex={1} />
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
            Here are some of my recent projects. Each project represents my skills and passion for development.
          </p>

          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
            {['All', 'Frontend', 'Backend', 'Fullstack'].map(filter => (
              <button 
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${projectFilter === filter ? 'bg-accent text-white border-transparent' : 'bg-white dark:bg-[#161d2d] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-white dark:bg-[#161d2d] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-accent-cyan/50 dark:hover:border-accent-cyan/50 transition-colors shadow-sm dark:shadow-none"
                >
                  <div className="overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-accent/10 text-accent-cyan rounded-full text-xs font-medium border border-blue-100 dark:border-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-12 md:py-20 px-4">
          <SectionHeading title="Testimonials" />
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-xs sm:text-sm uppercase tracking-widest font-semibold">
            What clients and colleagues say about working with me.
          </p>

          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 sm:gap-6">
            <button 
              onClick={() => setTestimonialIndex(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1)}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-[#161d2d] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-transparent hidden sm:block shadow-sm dark:shadow-none"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex-1 bg-white dark:bg-[#161d2d] p-8 sm:p-10 md:p-14 rounded-3xl border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden shadow-sm dark:shadow-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img 
                      src={TESTIMONIALS[testimonialIndex].avatar} 
                      alt={TESTIMONIALS[testimonialIndex].name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-accent-cyan"
                    />
                  </div>
                  <div className="flex justify-center gap-1 text-yellow-400 mb-4 sm:mb-6">
                    {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 italic mb-6 sm:mb-8">
                    {TESTIMONIALS[testimonialIndex].content}
                  </p>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">{TESTIMONIALS[testimonialIndex].name}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">{TESTIMONIALS[testimonialIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setTestimonialIndex(prev => prev === TESTIMONIALS.length - 1 ? 0 : prev + 1)}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-[#161d2d] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-transparent hidden sm:block shadow-sm dark:shadow-none"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center gap-3 mt-6 sm:mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${idx === testimonialIndex ? 'bg-accent-cyan' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-1000'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Mobile Carousel Controls (Visible only on very small screens if needed) */}
          <div className="flex justify-center gap-6 mt-6 sm:hidden">
            <button onClick={() => setTestimonialIndex(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1)} className="p-2 rounded-full bg-white dark:bg-[#161d2d] border border-slate-200 dark:border-slate-800">
               <ChevronLeft size={20} className="text-slate-600 dark:text-slate-400" />
            </button>
            <button onClick={() => setTestimonialIndex(prev => prev === TESTIMONIALS.length - 1 ? 0 : prev + 1)} className="p-2 rounded-full bg-white dark:bg-[#161d2d] border border-slate-200 dark:border-slate-800">
               <ChevronRight size={20} className="text-slate-600 dark:text-slate-400" />
            </button>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-12 md:py-20 relative px-4">
          
          {/* Ambient Glows (Only prominent in Dark Mode to match aesthetics) */}
          <div className="hidden dark:block absolute top-1/4 left-0 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-accent-cyan/20 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none"></div>
          <div className="hidden dark:block absolute bottom-10 right-0 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none"></div>

          <SectionHeading title="Get In Touch" highlightIndex={2} />
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-lg mx-auto text-sm sm:text-base">
            Have a project in mind? Let's work together to create something amazing.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/80 dark:bg-[#161d2d]/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-10">Contact Information</h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                    <a href="mailto:mubasoftware430@gmail.com" className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-accent-cyan transition-colors truncate block">mubasoftware430@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                    <a href="tel:+251926817550" className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-accent-cyan transition-colors">+251 9 26 81 75 50</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                    <p className="text-slate-900 dark:text-white font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/80 dark:bg-[#161d2d]/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-10">Send a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Your Name</label>
                  <input type="text" placeholder="Mubarek" className="w-full bg-slate-100 dark:bg-[#0f1624] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Email Address</label>
                  <input type="email" placeholder="mubasoftware430@gmail.com" className="w-full bg-slate-100 dark:bg-[#0f1624] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Your Message</label>
                  <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-slate-100 dark:bg-[#0f1624] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 dark:text-white focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none text-sm sm:text-base"></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-cyan hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all shadow-lg shadow-accent-cyan/20 text-sm sm:text-base mt-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
