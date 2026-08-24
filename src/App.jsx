import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Cpu, 
  Globe, 
  Database, 
  Terminal, 
  Code, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Award, 
  FileText, 
  Send 
} from 'lucide-react';
import './App.css';
import profileImg from './assets/profile.jpg';
import avatarImg from './assets/avatar.jpg';

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "20"}
    height={props.size || "20"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "20"}
    height={props.size || "20"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const roles = [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Computer Vision Specialist",
    "CSE Student at IIIT"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Custom typing effect for Hero section
  useEffect(() => {
    let timer;
    const currentFullRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedRole(prev => currentFullRole.slice(0, prev.length + 1));
      }, 100);
    }
    
    if (!isDeleting && typedRole === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedRole === '') {
      setIsDeleting(false);
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }
    
    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, currentRoleIndex]);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 5000);
  };

  return (
    <div className="portfolio-container">
      {/* Decorative Radial Glows */}
      <div className="radial-glow-1"></div>
      <div className="radial-glow-2"></div>

      {/* Glass Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <Terminal size={22} />
          <span>ayushman.dev</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <button 
          className="nav-contact-btn" 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-info">
            <div className="hero-tagline">
              <Cpu size={16} />
              <span>AI/ML & FULL-STACK DEVELOPMENT</span>
            </div>
            <h1 className="hero-name">Ayushman Sahani</h1>
            <div className="hero-title-scroll">
              <span>I'm a</span>
              <span className="typed-role">{typedRole || '\u00A0'}</span>
            </div>
            <p className="hero-description">
              Final year Computer Science and Engineering student at IIIT Bhubaneswar. I design and build intelligent, 
              scalable full-stack applications leveraging Computer Vision, Dense Vector Retrieval (RAG), and modern JavaScript.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                View My Work <ExternalLink size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk <Mail size={18} />
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ayushman-40020220" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ayushmansahani639@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <img src={avatarImg} alt="Ayushman Sahani Coding Avatar" className="avatar-img" />
              <div className="laser-line"></div>
              <div className="glow-ring"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a final-year B.Tech Computer Science and Engineering student at the{' '}
              <span className="about-highlight">International Institute of Information Technology, Bhubaneswar</span>. 
              My expertise spans hands-on experience in building scalable software systems, machine learning models, 
              and user-centric application designs.
            </p>
            <p>
              I am highly passionate about solving real-world problems. Whether designing AI-powered screening systems 
              for medical risk assessment, building real-time multi-camera tracking systems with YOLO, or deploying 
              responsive React logistics applications with backend API integration, I focus on performance, reliability, and code quality.
            </p>
            <p>
              Skilled in combining rule-based heuristics with advanced Retrieval-Augmented Generation (RAG), database 
              architectures (PostgreSQL, Firebase), and modern developer workflows.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="about-image-wrapper">
              <img src={profileImg} alt="Ayushman Sahani" className="about-profile-img" />
            </div>
            <div className="about-stats" style={{ width: '100%' }}>
              <div className="glass-card stat-box">
                <div className="stat-number">5+</div>
                <div className="stat-label">AI & Web Projects</div>
              </div>
              <div className="glass-card stat-box">
                <div className="stat-number">99.2%+</div>
                <div className="stat-label">Face Verification Rate</div>
              </div>
              <div className="glass-card stat-box">
                <div className="stat-number">sub-50ms</div>
                <div className="stat-label">RAG Retrieval Latency</div>
              </div>
              <div className="glass-card stat-box">
                <div className="stat-number">2027</div>
                <div className="stat-label">CSE Graduation Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {/* Project 1 - LearnScreen */}
          <div className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <Globe size={24} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayushman-40020220" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">LearnScreen</h3>
            <p className="project-desc">
              An AI-powered screening platform combining rule-based evaluation and Retrieval-Augmented Generation (RAG) 
              to generate contextual reports for early ADHD and Dyslexia risk assessment. Integrates FAISS vector 
              search with Groq LLMs to provide grounded responses and includes an automated fallback report mechanism.
            </p>
            <ul className="project-tech">
              <li>Python</li>
              <li>Streamlit</li>
              <li>FAISS</li>
              <li>Sentence Transformers</li>
              <li>Groq</li>
              <li>FastAPI</li>
            </ul>
          </div>

          {/* Project 2 - OmniSight AI */}
          <div className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <Terminal size={24} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayushman-40020220/-omnisight-ai" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://omnisight-ai-frontend.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">OmniSight AI</h3>
            <p className="project-desc">
              Enterprise multimodal video intelligence and temporal RAG platform. Combines YOLOv8 tracking, 
              FAISS Inner Product indexing, and Groq LLaMA-3.3 70B inference to analyze and semantically search 
              live security feeds. Built with a dark glassmorphic React interface and FastAPI.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>FastAPI</li>
              <li>YOLOv8</li>
              <li>FAISS</li>
              <li>SQLite</li>
            </ul>
          </div>

          {/* Project 3 - AI Object Detection System */}
          <div className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <Cpu size={24} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayushman-40020220" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">AI Object Detection System</h3>
            <p className="project-desc">
              Real-time object detection application capable of identifying multiple objects from live video streams. 
              Implements YOLO and OpenCV with optimized inference pipelines to maintain high prediction accuracy 
              and frame rates across diverse local environments.
            </p>
            <ul className="project-tech">
              <li>Python</li>
              <li>OpenCV</li>
              <li>YOLO</li>
            </ul>
          </div>

          {/* Project 4 - Fill-It-Web */}
          <div className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <Database size={24} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayushman-40020220" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">Fill-It-Web</h3>
            <p className="project-desc">
              A full-stack logistics management platform enabling users to coordinate transport requests, 
              handle secure user authentication, and monitor shipment workflows. Features responsive React 
              views, custom FastAPI REST endpoints, and PostgreSQL schemas.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>FastAPI</li>
              <li>Firebase Auth</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Project 5 - AI Interview & Placement Copilot */}
          <div className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <Terminal size={24} />
              </div>
              <div className="project-links">
                <a href="https://github.com/Ayushman-40020220" target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
            <h3 className="project-title">AI Interview Copilot</h3>
            <p className="project-desc">
              Interactive placement preparation system simulating technical coding panels and viva sessions. 
              Features real-time voice-response transcription, automated vector-based evaluation scoring, 
              and custom resume auditing models to benchmark student capabilities.
            </p>
            <ul className="project-tech">
              <li>React</li>
              <li>FastAPI</li>
              <li>Groq LLM</li>
              <li>Whisper Speech</li>
              <li>FAISS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {/* Category 1 */}
          <div className="glass-card skill-category">
            <h3 className="category-title">
              <Code size={20} /> Languages & Frontend
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Python</span>
                  <span className="skill-percent">95%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript & ES6+</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">React & Material UI</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">SQL, HTML5, CSS3</span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="glass-card skill-category">
            <h3 className="category-title">
              <Cpu size={20} /> AI & Machine Learning
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">YOLO & Object Detection</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">OpenCV Image Processing</span>
                  <span className="skill-percent">92%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">FAISS & Text Embeddings</span>
                  <span className="skill-percent">88%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Groq LLM & RAG Systems</span>
                  <span className="skill-percent">88%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="glass-card skill-category">
            <h3 className="category-title">
              <Database size={20} /> Backend & Databases
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">FastAPI & REST APIs</span>
                  <span className="skill-percent">92%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">PostgreSQL & SQLite</span>
                  <span className="skill-percent">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Firebase Auth & Database</span>
                  <span className="skill-percent">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JWT Security tokens</span>
                  <span className="skill-percent">88%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title">Leadership & Experience</h2>
        <div className="timeline">
          {/* Experience Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <div className="timeline-date">Jul 2021 - Present (Part-time)</div>
              <h3 className="timeline-title">Joint Director – Medical Department</h3>
              <h4 className="timeline-subtitle">SAITED / SAI International School</h4>
              <p className="timeline-desc">
                Coordinated logistics, workflows, and operations for one of the school's largest annual student-led 
                science festivals. Managed cross-functional student divisions, handled event scheduling, and ensured 
                seamless departmental coordination under rigorous timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {/* Education Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <div className="timeline-date">2023 - 2027</div>
              <h3 className="timeline-title">Bachelor of Technology in Computer Science & Engineering</h3>
              <h4 className="timeline-subtitle">International Institute of Information Technology, Bhubaneswar</h4>
              <p className="timeline-desc">
                Engaging in coursework covering Object-Oriented Programming, Data Structures & Algorithms, Computer Vision, 
                and Database Management. Combining theoretical CSE foundations with building and deploying full-stack software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements / Certifications Section */}
      <section id="achievements">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Award size={32} style={{ color: 'hsl(var(--accent-cyan))', shrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'hsl(var(--text-primary))', marginBottom: '4px' }}>Deloitte Australia Technology Simulation</h3>
              <p style={{ fontSize: '0.95rem' }}>Completed the Technology Job Simulation (Forage, 2025), gaining practical hands-on exposure to software engineering workflows and technology consulting operations.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <FileText size={32} style={{ color: 'hsl(var(--accent-purple))', shrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'hsl(var(--text-primary))', marginBottom: '4px' }}>AI & Full-Stack Deployment Portfolio</h3>
              <p style={{ fontSize: '0.95rem' }}>Built, integrated, and deployed multiple full-stack architectures combining RAG retrieval pipelines, YOLOv8 vision feeds, FastAPI backends, and responsive React/Streamlit frontends.</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Github size={32} style={{ color: 'hsl(var(--accent-cyan))', shrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'hsl(var(--text-primary))', marginBottom: '4px' }}>Active Open Source Contributor</h3>
              <p style={{ fontSize: '0.95rem' }}>Maintains an active GitHub profile, sharing structured applications and source repositories across AI computer vision, temporal RAG, and logistics platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ paddingBottom: '100px' }}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="glass-card contact-card">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">ayushmansahani639@gmail.com</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91-7735521162</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Bhubaneswar, Odisha, India</div>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required className="form-input" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required className="form-input" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" required className="form-textarea" placeholder="How can I help you?"></textarea>
            </div>
            
            {formSubmitted ? (
              <div className="form-success-msg">
                Thank you! Your message has been sent successfully.
              </div>
            ) : (
              <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                Send Message <Send size={18} />
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Ayushman Sahani. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
