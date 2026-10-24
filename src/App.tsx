import { useEffect, useState, type ReactNode } from 'react'

/* ---------------------------------- data ---------------------------------- */

const LINKS = {
  github: 'https://github.com/rohitkrchandoliya',
  linkedin: 'https://www.linkedin.com/in/rohitkrchandoliya',
  youtube: 'https://www.youtube.com/@ByteShieldTV',
  instagram: 'https://www.instagram.com/rohitkrchandoliya',
  instagramChannel: 'https://www.instagram.com/byteshieldtv',
  store: 'https://payhip.com/securethefuture',
  email: 'rohitkrchandoliya@gmail.com',
}

type Project = {
  title: string
  category: string
  status: string
  description: string
  tags: string[]
  url?: string
  flagship?: boolean
}

const flagshipProjects: Project[] = [
  {
    title: 'AI Bug Hunter',
    category: 'AI · APPLICATION SECURITY',
    status: 'FLAGSHIP BUILD',
    description:
      'An automated AI security scanner that takes a target from recon and mapping through testing and verification to a detailed report — technical evidence, severity, potential impact and practical fixes, not just a list. AI triage reduces false positives and prioritises genuine issues.',
    tags: ['Python', 'AI', 'Recon → Verify → Report'],
    flagship: true,
  },
  {
    title: 'Bug Hunter — King Edition',
    category: 'AI · SECURITY TOOLING',
    status: 'FLAGSHIP BUILD',
    description:
      'The King Edition of the AI Bug Hunter: modular engines for any target type — URL, IP, file, folder or codebase — with a local admin dashboard and end-to-end automated reporting, from code analysis through vulnerability verification.',
    tags: ['Python', 'Local AI (Ollama)', 'Dashboard', 'Reporting'],
    flagship: true,
  },
  {
    title: 'CSRE — CheakStar Reverse Engineering',
    category: 'REVERSE ENGINEERING',
    status: 'DELIVERED',
    description:
      'A reverse-engineering suite built under Cheakstar: a documented source package plus a Windows build that was executed and verified on a real machine.',
    tags: ['Reverse Engineering', 'Windows', 'Cheakstar'],
    flagship: true,
  },
]

const repoProjects: Project[] = [
  {
    title: 'AI AppSec Platform',
    category: 'APPLICATION SECURITY',
    status: 'EARLY MVP',
    description:
      'Developer-first static checks for Python and JavaScript/TypeScript, secret-pattern detection with redacted evidence, dependency inventory, optional OSV advisory audits, CycloneDX SBOM export, risk scoring, and JSON/SARIF reports.',
    tags: ['Python', 'SAST', 'SARIF', 'SBOM'],
    url: 'https://github.com/rohitkrchandoliya/ai-appsec-platform',
  },
  {
    title: 'Self Learning AI Assistant',
    category: 'AI · AUTOMATION',
    status: 'PROJECT',
    description:
      'An AI assistant built around learning, interaction, and useful task automation.',
    tags: ['Python', 'AI Assistant', 'Automation'],
    url: 'https://github.com/rohitkrchandoliya/CS--Ai-Assistant',
  },
  {
    title: 'Autonomous YouTube Factory',
    category: 'AI · CONTENT SYSTEMS',
    status: 'IN PROGRESS',
    description:
      'A cloud-first pipeline for research-led video and Shorts production — research collection, scheduling, a durable queue, script/storyboard models, quality gates and analytics.',
    tags: ['Python', 'Automation', 'PostgreSQL', 'QA'],
    url: 'https://github.com/rohitkrchandoliya/autonomous-youtube-factory',
  },
  {
    title: 'Certificate Automation System',
    category: 'AUTOMATION · TEAM LEAD',
    status: 'AWARD-WINNING PROJECT',
    description:
      'A team-led system for generating and managing digital certificates. This project achieved 2nd place at a UEM international conference.',
    tags: ['Automation', 'Team Lead', 'Digital Certificates'],
    url: 'https://github.com/rohitkrchandoliya/Event-Certificates-Automation',
  },
  {
    title: 'Smart-Scan: Smart Contract Analyzer',
    category: 'WEB3 · SECURITY',
    status: 'HACKATHON PROJECT',
    description:
      'A Web3 security project from AceHack 4.0 focused on smart-contract and wallet analysis, with secure API-key handling.',
    tags: ['Web3', 'Security', 'API Integration'],
    url: 'https://github.com/rohitkrchandoliya/Smart-Contract-Analyzer---AceHack-4.0',
  },
  {
    title: 'AI Resume Analyzer & Job Matcher',
    category: 'AI · CAREER TOOLS',
    status: 'PROJECT',
    description:
      'A project focused on connecting resume information with suitable job opportunities.',
    tags: ['AI', 'Resume Analysis', 'Job Matching'],
    url: 'https://github.com/rohitkrchandoliya/AI-Resume-Analyzer-Job-Matcher',
  },
]

const skills = [
  {
    title: 'Cybersecurity & Bug Bounty',
    text: 'Vulnerability assessment · Web application security · Recon & mapping · Evidence-based reporting',
    glyph: 'shield',
  },
  {
    title: 'AI Agents & Automation',
    text: 'Python · AI assistants & agents · Local LLMs (Ollama) · Workflow automation · Prompt engineering',
    glyph: 'bot',
  },
  {
    title: 'Software & Web Development',
    text: 'TypeScript · JavaScript · React · C / C++ · Java · HTML · CSS · REST APIs · Next.js',
    glyph: 'code',
  },
  {
    title: 'Security Tooling & Data',
    text: 'SAST · SBOM / SARIF · Burp Suite · SQL · Supabase · Git & GitHub · n8n',
    glyph: 'wrench',
  },
]

const techCloud = [
  'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Java', 'HTML', 'CSS', 'SQL',
  'React', 'Next.js', 'REST APIs', 'TensorFlow', 'AI Agents', 'Ollama', 'n8n',
  'Supabase', 'Git / GitHub', 'Burp Suite', 'Cybersecurity', 'Bug Bounty',
]

const githubAchievements = ['Pull Shark ×4', 'Galaxy Brain ×4', 'Starstruck', 'YOLO', 'Quickdraw']

type Book = { title: string; note: string; url?: string }

const trilogy: Book[] = [
  {
    title: 'Secure The Future — Vol. 1 (2023 Edition, Expanded)',
    note: 'Level 1 · Basic — the beginner-friendly foundation of cybersecurity, expanded to 15 chapters.',
    url: 'https://payhip.com/b/J42Le',
  },
  {
    title: 'Secure The Future — Vol. 2 (2025 Edition)',
    note: 'Level 2 · Intermediate — deeper practice across security and everyday digital life.',
    url: 'https://payhip.com/b/Gwnq1',
  },
  {
    title: 'Secure The Future — Vol. 3 (2027 Edition)',
    note: 'Level 3 · Advanced — the final volume of the trilogy, completing the journey.',
    url: 'https://payhip.com/b/xRmnW',
  },
]

const featuredBooks: Book[] = [
  {
    title: 'The Honest Report',
    note: 'How to write bug bounty reports that get accepted — evidence, severity, impact and fixes.',
    url: 'https://payhip.com/b/viqzZ',
  },
  {
    title: 'Bug Bounty from Scratch',
    note: 'Your first 90 days as a security researcher — a full-edition, start-to-finish guide.',
    url: 'https://payhip.com/b/5xBDz',
  },
  {
    title: 'Cybersecurity from Zero',
    note: "A student's first guide to cybersecurity — from the basics to a working foundation.",
    url: 'https://payhip.com/b/lWHCt',
  },
]

const moreBooks: string[] = [
  'Stay Safe Online',
  'Networking for Security Beginners',
  'How Hackers Think',
  'Digital Privacy in Daily Life',
  'Web Hacking Practice',
  'API Security for Beginners',
  'Recon & Mapping',
  'Python for Security',
  'Linux for Students & Hackers',
  'AI Agents for Beginners',
  'Git, GitHub & Achievements',
  'Burp Suite & Browser Tools',
  'Career Roadmap for Indian Students',
  'Certificates, CEH or Skills? — A Straight Talk',
  'Building in Public',
  'Side Income for Tech Students',
]

type JourneyItem = { period: string; role: string; detail: string }

const journeyNow: JourneyItem[] = [
  {
    period: 'OCT 2023 — PRESENT',
    role: 'Founder · Cheakstar Private Limited',
    detail:
      'Building my own work: AI agents, automation, software development and cybersecurity products under my own company.',
  },
  {
    period: '2023 — 2026',
    role: 'BCA Graduate · UEM Jaipur',
    detail: 'Bachelor of Computer Applications — the formal foundation under everything I build.',
  },
  {
    period: 'MAR 2025 — JUL 2026',
    role: 'Operations & Challenge Lead · HackSec',
    detail: 'Running CTF-style challenges and events for the cybersecurity community at UEM Jaipur.',
  },
  {
    period: 'JAN 2025 — JUL 2026',
    role: 'Club Head · PICXL Photography Club',
    detail: 'Leading the university photography club — team, events and creative direction.',
  },
  {
    period: 'SEP 2025 — JUL 2026',
    role: 'Event Coordinator · The CIRCLE Design Studio, UEM Jaipur',
    detail: 'Coordinating design and creative events on campus.',
  },
  {
    period: 'SEP 2020 — PRESENT',
    role: 'Office Associate · The Last Hope',
    detail: 'Supporting operations, relief drives and community initiatives at a social welfare organisation.',
  },
]

const journeyEarlier: JourneyItem[] = [
  { period: 'MAY 2024 — OCT 2024', role: 'Cyber Security Intern · JPMorgan Chase & Co.', detail: 'Cybersecurity internship, as listed on my LinkedIn profile.' },
  { period: 'JUL 2024 — SEP 2024', role: 'Investment Banking Intern · Bank of America', detail: 'Experience entry as listed on my LinkedIn profile.' },
  { period: 'FEB 2024 — JUL 2024', role: 'IAM Developer · Tata Group', detail: 'Identity and access management development, as listed on my LinkedIn profile.' },
  { period: 'DEC 2023 — MAY 2024', role: 'Software & Web Developer · Tata Group', detail: 'Web applications, backend functionality, REST API integration, database work, debugging and deployment.' },
  { period: 'APR 2023 — JUN 2023', role: 'Software Engineer Intern · Walmart', detail: 'Software engineering internship, as listed on my LinkedIn profile.' },
  { period: 'JUL 2022 — DEC 2022', role: 'EV Engineering · Ford Technology Services India', detail: 'Experience entry as listed on my LinkedIn profile.' },
  { period: 'FEB 2022 — JUN 2023', role: 'Social Media Manager · ZEE5', detail: 'Experience entry as listed on my LinkedIn profile.' },
  { period: '2020 — 2023', role: 'B.Sc · University of Rajasthan', detail: 'Science, as listed on my LinkedIn profile.' },
  { period: '2020', role: 'RS-CIT · Vardhman Mahaveer Open University', detail: 'Computer Information Technology.' },
]

/* ---------------------------------- icons --------------------------------- */

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'shield':
      return (<svg {...common}><path d="M12 3l7 2.8v5.4c0 4.4-2.9 7.4-7 9.3-4.1-1.9-7-4.9-7-9.3V5.8z" /><polyline points="9 11.5 11.2 13.7 15.2 9.7" /></svg>)
    case 'bot':
      return (<svg {...common}><rect x="4" y="8" width="16" height="11" rx="2.5" /><line x1="12" y1="8" x2="12" y2="4" /><circle cx="12" cy="3.4" r="1" /><circle cx="9" cy="13" r="0.6" fill="currentColor" /><circle cx="15" cy="13" r="0.6" fill="currentColor" /><line x1="9" y1="16.4" x2="15" y2="16.4" /></svg>)
    case 'code':
      return (<svg {...common}><polyline points="8 7 3.5 12 8 17" /><polyline points="16 7 20.5 12 16 17" /><line x1="13.6" y1="5" x2="10.4" y2="19" /></svg>)
    case 'wrench':
      return (<svg {...common}><path d="M14.7 6.3a4.2 4.2 0 0 1 5.6-3.9L17.6 5l1 1 2.7-2.7a4.2 4.2 0 0 1-5.5 5.6L8 16.7a2 2 0 0 1-2.8 0l-2.4-2.4a2 2 0 0 1 0-2.8z" transform="translate(-1.6 1.6) scale(0.94)" /></svg>)
    case 'play':
      return (<svg {...common} fill="currentColor" stroke="none"><polygon points="7 4.5 19 12 7 19.5" /></svg>)
    case 'book':
      return (<svg {...common}><path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z" /><path d="M5 19.5A1.5 1.5 0 0 1 6.5 18H19v3H6.5" /></svg>)
    case 'mail':
      return (<svg {...common}><rect x="3" y="5.5" width="18" height="13" rx="2" /><polyline points="3.5 7 12 13 20.5 7" /></svg>)
    case 'arrow':
      return (<svg {...common}><line x1="6" y1="18" x2="18" y2="6" /><polyline points="9 6 18 6 18 15" /></svg>)
    case 'award':
      return (<svg {...common}><circle cx="12" cy="9" r="5.5" /><polyline points="8.8 13.5 7.5 20.5 12 17.8 16.5 20.5 15.2 13.5" /></svg>)
    default:
      return (<svg {...common}><circle cx="12" cy="12" r="8" /></svg>)
  }
}

/* ------------------------------- components ------------------------------- */

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {lead ? <p>{lead}</p> : null}
      </div>
    </Reveal>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className={`card project-card${project.flagship ? ' is-flagship' : ''}`}>
        <div className="card-top">
          <span className="card-category">{project.category}</span>
          <span className={`status-pill${project.flagship ? ' gold' : ''}`}>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {project.url ? (
          <a className="card-link" href={project.url} target="_blank" rel="noreferrer">
            View on GitHub <Icon name="arrow" />
          </a>
        ) : (
          <span className="card-note">Private build · details on request</span>
        )}
      </article>
    </Reveal>
  )
}

function BookCard({ book, delay, label }: { book: Book; delay: number; label: string }) {
  return (
    <Reveal delay={delay}>
      <article className="card book-card">
        <span className="card-category">{label}</span>
        <h3>{book.title}</h3>
        <p>{book.note}</p>
        {book.url ? (
          <a className="card-link" href={book.url} target="_blank" rel="noreferrer">
            Get the book <Icon name="arrow" />
          </a>
        ) : null}
      </article>
    </Reveal>
  )
}

/* ----------------------------------- app ----------------------------------- */

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('in'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-words">ROHIT<small>KUMAR CHANDOLIYA</small></span>
        </a>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#books" onClick={closeMenu}>Books</a>
          <a href="#byteshield" onClick={closeMenu}>ByteShield</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        {/* ------------------------------- HERO ------------------------------- */}
        <section className="hero" id="home">
          <div className="hero-glow glow-one" aria-hidden="true" />
          <div className="hero-glow glow-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <Reveal>
                <span className="eyebrow light"><span className="live-dot" /> FOUNDER @ CHEAKSTAR · JAIPUR, INDIA</span>
              </Reveal>
              <Reveal delay={90}>
                <h1>Rohit Kumar <em>Chandoliya</em></h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="hero-headline">
                  Founder @ Cheakstar | Bug Bounty Hunter &amp; Cybersecurity Researcher |
                  AI Agents &amp; Automation | Building AI Security Tools
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="hero-text">
                  I build my own work: AI security tools that hunt bugs end-to-end, a cybersecurity
                  book series read by students, and ByteShield — a channel teaching Python and
                  security to the world. No boss, no shortcuts — just building, testing and shipping.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="hero-actions">
                  <a className="btn btn-gold" href="#projects">Explore my work</a>
                  <a className="btn btn-ghost" href={LINKS.store} target="_blank" rel="noreferrer">
                    <Icon name="book" /> My bookstore
                  </a>
                </div>
              </Reveal>
              <Reveal delay={420}>
                <div className="hero-facts">
                  <span>BCA Graduate</span><i />
                  <span>Author — Secure The Future series</span><i />
                  <span>30 GitHub repositories</span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={240} className="hero-visual-wrap">
              <figure className="hero-visual">
                <img src="images/portfolio-hero.webp" alt="Rohit Kumar Chandoliya — Founder @ Cheakstar" width={1280} height={1600} />
                <figcaption>
                  <span><Icon name="shield" /> Bug Bounty</span>
                  <span><Icon name="bot" /> AI Agents</span>
                  <span><Icon name="book" /> Author</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <a className="scroll-hint" href="#about">SCROLL<span>↓</span></a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {['BUG BOUNTY', 'AI SECURITY TOOLS', 'CYBERSECURITY RESEARCH', 'AI AGENTS', 'AUTOMATION', 'PYTHON', 'BOOKS', 'BYTESHIELD'].map((w) => (
              <span key={`a-${w}`}>{w}<b>◆</b></span>
            ))}
            {['BUG BOUNTY', 'AI SECURITY TOOLS', 'CYBERSECURITY RESEARCH', 'AI AGENTS', 'AUTOMATION', 'PYTHON', 'BOOKS', 'BYTESHIELD'].map((w) => (
              <span key={`b-${w}`}>{w}<b>◆</b></span>
            ))}
          </div>
        </div>

        {/* ------------------------------- ABOUT ------------------------------ */}
        <section className="section" id="about">
          <SectionHead eyebrow="ABOUT" title={<>Building my own <em>road.</em></>} />
          <div className="about-grid">
            <Reveal>
              <div className="about-copy">
                <p>
                  I&apos;m Rohit Kumar Chandoliya — a BCA graduate and the founder of
                  <strong> Cheakstar Private Limited</strong>. Instead of waiting for a job, I chose
                  to build my own work from home: bug bounty hunting, AI security tooling, and
                  cybersecurity books that teach students the way I wish I had been taught.
                </p>
                <p>
                  My main weapon is the <strong>AI Bug Hunter</strong> — an automated system that
                  analyses software and authorised targets the way an experienced ethical hacker
                  would: recon, mapping, testing, verification, and reports with real evidence.
                  Alongside it, I run the <strong>Secure The Future</strong> book programme and
                  the <strong>ByteShield</strong> channel.
                </p>
                <p>
                  The rule behind everything: a vulnerability counts only with sufficient
                  evidence, a claim counts only when it is verified, and security work happens
                  only where there is permission.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="fact-panel">
                <div className="fact"><span>EDUCATION</span><strong>BCA · UEM Jaipur</strong></div>
                <div className="fact"><span>COMPANY</span><strong>Founder · Cheakstar Private Limited</strong></div>
                <div className="fact"><span>CERTIFICATE</span><strong>Certified Ethical Hacker (CEH)</strong></div>
                <div className="fact"><span>BASED IN</span><strong>Jaipur, India</strong></div>
                <div className="fact"><span>LANGUAGES</span><strong>Hindi (Native) · English (Elementary)</strong></div>
                <div className="achievement">
                  <Icon name="award" />
                  <p><strong>2nd Place</strong><small>UEM International Conference · Certificate Automation System</small></p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="badge-row">
              <span className="badge-label">GITHUB ACHIEVEMENTS</span>
              {githubAchievements.map((b) => <span className="badge" key={b}>{b}</span>)}
            </div>
          </Reveal>
        </section>

        {/* ------------------------------- SKILLS ------------------------------ */}
        <section className="section alt" id="skills">
          <SectionHead
            eyebrow="SKILLS"
            title={<>The <em>toolkit.</em></>}
            lead="Depth varies by project — the work itself is the evidence."
          />
          <div className="grid grid-4">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card skill-card">
                  <span className="skill-icon"><Icon name={s.glyph} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="tech-cloud">
              {techCloud.map((t) => <span key={t}>{t}</span>)}
            </div>
          </Reveal>
        </section>

        {/* ------------------------------ PROJECTS ----------------------------- */}
        <section className="section" id="projects">
          <SectionHead
            eyebrow="PROJECTS"
            title={<>Things I have <em>built.</em></>}
            lead="The flagship security tools come first — then the public repositories. No invented metrics, no inflated claims."
          />
          <div className="grid grid-3">
            {flagshipProjects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 80} />)}
          </div>
          <div className="grid grid-3 second-row">
            {repoProjects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 60} />)}
          </div>
          <Reveal delay={60}>
            <p className="section-foot">
              More experiments live on GitHub →{' '}
              <a href={LINKS.github} target="_blank" rel="noreferrer">github.com/rohitkrchandoliya</a>
            </p>
          </Reveal>
        </section>

        {/* -------------------------------- BOOKS ------------------------------ */}
        <section className="section alt" id="books">
          <SectionHead
            eyebrow="BOOKS · SECURE THE FUTURE"
            title={<>Books I have <em>written.</em></>}
            lead="Original cybersecurity books — from a beginner's first steps to honest, evidence-based bug bounty reporting. All titles are available in my Payhip store."
          />
          <div className="grid grid-3">
            {trilogy.map((b, i) => <BookCard key={b.title} book={b} delay={i * 80} label="THE TRILOGY" />)}
          </div>
          <div className="grid grid-3 second-row">
            {featuredBooks.map((b, i) => <BookCard key={b.title} book={b} delay={i * 80} label="FEATURED" />)}
          </div>
          <Reveal delay={80}>
            <div className="more-books">
              <span className="badge-label">ALSO IN THE STORE — FULL-EDITION TITLES</span>
              <div className="more-books-list">
                {moreBooks.map((t) => <span key={t}>{t}</span>)}
              </div>
              <p>
                Plus the Bug Bounty Report Template Pack and Cybersecurity Starter Notes.{' '}
                <a href={LINKS.store} target="_blank" rel="noreferrer">Visit the bookstore →</a>
              </p>
            </div>
          </Reveal>
        </section>

        {/* ----------------------------- BYTESHIELD ---------------------------- */}
        <section className="section" id="byteshield">
          <div className="byteshield-panel">
            <Reveal>
              <div className="byteshield-copy">
                <span className="eyebrow">YOUTUBE · BYTESHIELD</span>
                <h2>ByteShield — learn security, <em>one video at a time.</em></h2>
                <p>
                  ByteShield is my YouTube channel: evergreen Python and cybersecurity how-tos in
                  English, made for a worldwide audience. A new Short goes out every day, with
                  long-form lessons twice a week — researched from official sources and
                  triple-checked before anything is published.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-gold" href={LINKS.youtube} target="_blank" rel="noreferrer">
                    <Icon name="play" /> Watch on YouTube
                  </a>
                  <a className="btn btn-ghost" href={LINKS.instagramChannel} target="_blank" rel="noreferrer">
                    @byteshieldtv on Instagram
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="byteshield-stats">
                <div><strong>Daily</strong><span>Shorts on YouTube, Instagram &amp; Facebook</span></div>
                <div><strong>2× / week</strong><span>Long-form Python &amp; security lessons</span></div>
                <div><strong>English</strong><span>Made for a worldwide audience</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ------------------------------- JOURNEY ----------------------------- */}
        <section className="section alt" id="journey">
          <SectionHead eyebrow="JOURNEY" title={<>Experience &amp; <em>education.</em></>} />
          <div className="timeline">
            {journeyNow.map((item, i) => (
              <Reveal key={item.role} delay={Math.min(i * 60, 240)}>
                <div className="timeline-item">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-body">
                    <strong>{item.role}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={60}>
            <h3 className="timeline-subhead">Earlier experience &amp; education (as listed on LinkedIn)</h3>
          </Reveal>
          <div className="timeline">
            {journeyEarlier.map((item, i) => (
              <Reveal key={item.role} delay={Math.min(i * 40, 200)}>
                <div className="timeline-item muted">
                  <span className="timeline-period">{item.period}</span>
                  <div className="timeline-body">
                    <strong>{item.role}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ------------------------------- CONTACT ----------------------------- */}
        <section className="section contact" id="contact">
          <Reveal>
            <span className="eyebrow">CONTACT</span>
            <h2>Let&apos;s build something <em>that matters.</em></h2>
            <p>
              For bug bounty collaboration, security questions, book enquiries or Cheakstar —
              the fastest way to reach me is email or LinkedIn.
            </p>
            <div className="hero-actions center">
              <a className="btn btn-gold" href={`mailto:${LINKS.email}`}>
                <Icon name="mail" /> Email me
              </a>
              <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn btn-ghost" href={LINKS.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="btn btn-ghost" href={LINKS.youtube} target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-words">ROHIT<small>KUMAR CHANDOLIYA</small></span>
        </a>
        <span className="footer-mid">JAIPUR, INDIA · © {new Date().getFullYear()} ROHIT KUMAR CHANDOLIYA · CHEAKSTAR</span>
        <div className="footer-links">
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={LINKS.github} target="_blank" rel="noreferrer">GITHUB</a>
          <a href={LINKS.store} target="_blank" rel="noreferrer">BOOKSTORE</a>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
