import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2,
  Command, Github, Layers3, Menu, ShieldCheck, Sparkles, X, Zap,
} from 'lucide-react'

type Project = {
  number: string
  title: string
  category: string
  status: string
  summary: string
  detail: string
  stack: string[]
  tone: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI Desktop Assistant',
    category: 'AI / AUTOMATION',
    status: 'In development',
    summary: 'A desktop companion concept focused on voice and text commands, everyday workflows, and productivity automation.',
    detail: 'The goal is to bring common desktop actions into one assistant experience: interpret a command, select an appropriate action, and make the result clear to the user. The next step is to document the implemented capabilities and add a verifiable demo.',
    stack: ['Python', 'AI / NLP', 'Automation'],
    tone: 'violet',
  },
  {
    number: '02',
    title: 'AI Security Assistant',
    category: 'CYBERSECURITY',
    status: 'Research project',
    summary: 'An AI-assisted workflow for web security research and bug-hunting support, designed around responsible testing.',
    detail: 'This project explores how AI can help organize findings, explain security signals, and support a repeatable research workflow. Testing should only be performed on systems where permission has been granted.',
    stack: ['AI', 'Web Security', 'Research'],
    tone: 'red',
  },
  {
    number: '03',
    title: 'Secure Web Application',
    category: 'APPSEC',
    status: 'Security-focused build',
    summary: 'A web application project centered on defensive handling of common injection risks, including XSS and SQL injection.',
    detail: 'The portfolio will be updated with implementation notes, validation steps, and repository links once the relevant code and tests have been reviewed.',
    stack: ['Web Development', 'XSS', 'SQL Injection'],
    tone: 'blue',
  },
  {
    number: '04',
    title: 'CTFverse',
    category: 'CYBERSECURITY EDUCATION',
    status: 'Platform project',
    summary: 'A cybersecurity learning-platform concept built around hands-on challenges and practical skill development.',
    detail: 'The intended experience makes security practice approachable through structured challenges. A public walkthrough and live demo can be added after the current repository and deployment are verified.',
    stack: ['Web Development', 'CTF', 'Learning'],
    tone: 'green',
  },
  {
    number: '05',
    title: 'YouTube Automation System',
    category: 'CREATOR TOOLS',
    status: 'In progress',
    summary: 'A workflow project exploring how repeatable content-production tasks can be organized and automated.',
    detail: 'The focus is a reliable workflow with clear review points, rather than publishing unchecked content. Current implementation status and integrations will be documented as they are verified.',
    stack: ['Automation', 'Content Workflow', 'AI'],
    tone: 'orange',
  },
  {
    number: '06',
    title: 'Bug Bounty Research Lab',
    category: 'CHEAKSTAR · R&D',
    status: 'Research lab',
    summary: 'An in-house research track for practicing web security analysis, documenting findings, and improving testing discipline.',
    detail: 'Research is intended for authorized environments, controlled labs, and programs whose rules explicitly permit testing. Individual findings and outcomes will be published only when safe and appropriate.',
    stack: ['Security Research', 'Testing', 'Documentation'],
    tone: 'silver',
  },
]

const skills = [
  { name: 'AI & Automation', note: 'Assistants · Workflow design', icon: Sparkles },
  { name: 'Web Development', note: 'Frontend · Application building', icon: Code2 },
  { name: 'Cybersecurity', note: 'AppSec · Authorized testing', icon: ShieldCheck },
  { name: 'Product Thinking', note: 'Research · Iteration · Delivery', icon: Layers3 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const motionProps = reduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.16 }, variants: fadeUp, transition: { duration: 0.55 } }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Rohit home" onClick={closeMenu}>
          <span className="mark">R<span>.</span></span>
          <span className="wordmark-text">ROHIT <small>THE BUILDER</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Capabilities</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="eyebrow"><span className="status-dot" /> ENGINEERING · AI · SECURITY</div>
            <h1>Ideas are<br />cheap. <em>Build</em><br />the thing.</h1>
            <p className="hero-subtitle">I’m Rohit Kumar Chandoliya — an engineer-in-the-making building at the intersection of AI, software, and cybersecurity.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile <ArrowUpRight size={14} /></a>
            </div>
            <div className="hero-footnote"><span>JAIPUR, INDIA</span><span className="footnote-line" /><span>CURIOUS BY DEFAULT</span></div>
          </motion.div>
          <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={reduceMotion ? {} : { opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
            <div className="art-label label-top">SYSTEMS / 001</div>
            <div className="monolith">
              <div className="monolith-top" />
              <div className="monolith-face"><span>R</span><i /></div>
              <div className="monolith-side" />
            </div>
            <div className="art-code"><span>01</span> BUILD / TEST / LEARN</div>
            <div className="art-label label-bottom">ALWAYS IN PROGRESS</div>
          </motion.div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {['BUILD WITH INTENT', 'AI & AUTOMATION', 'SECURITY MINDED', 'SHIP. LEARN. REPEAT.', 'BUILD WITH INTENT', 'AI & AUTOMATION', 'SECURITY MINDED', 'SHIP. LEARN. REPEAT.'].map((item, i) => (
              <span key={i}>{item}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <motion.div className="section-heading" {...motionProps}>
            <div><span className="section-index">01 / SELECTED WORK</span><h2>Curiosity, <em>in motion.</em></h2></div>
            <p>A growing collection of builds, experiments, and research tracks. Project status is labeled honestly; verified demos and repositories will be linked as they’re ready.</p>
          </motion.div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.button className={`project-card tone-${project.tone}`} key={project.number} onClick={() => setSelected(project)} aria-label={`View details for ${project.title}`} {...motionProps} transition={{ duration: 0.45, delay: index % 3 * 0.08 }}>
                <div className="project-visual">
                  <div className="visual-noise" />
                  {project.number === '01' && <div className="visual-assistant"><Command size={40} strokeWidth={1.1} /><span>LISTENING<span className="blink">_</span></span><div className="sound-bars">{Array.from({ length: 15 }, (_, i) => <i key={i} style={{ height: `${12 + (i * 17 % 42)}px` }} />)}</div></div>}
                  {project.number === '02' && <div className="visual-shield"><ShieldCheck size={80} strokeWidth={0.8} /><span>DEFEND / ANALYZE</span></div>}
                  {project.number === '03' && <div className="visual-terminal"><span>~/secure-app</span><p><b>$</b> validate_input()</p><p><b>$</b> encode_output()</p><p className="terminal-ok">✓ defensive checks</p></div>}
                  {project.number === '04' && <div className="visual-ctf"><span>CTF<span>VERSE</span></span><div className="ctf-grid">{Array.from({ length: 9 }, (_, i) => <i key={i}>{['⌘', '⌁', '⌖', '01', '∴', '⌬', '∆', '∿', '↗'][i]}</i>)}</div></div>}
                  {project.number === '05' && <div className="visual-play"><div className="play-circle">▶</div><div className="play-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span>CREATE / REVIEW / PUBLISH</span></div>}
                  {project.number === '06' && <div className="visual-lab"><div className="lab-ring"><span>LAB</span></div><div className="lab-cross">+</div><span className="lab-label">AUTHORIZED RESEARCH ONLY</span></div>}
                  <span className="project-number">{project.number}</span>
                  <span className="project-open"><ArrowUpRight size={18} /></span>
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-bottom"><span>VIEW CASE NOTES</span><ArrowRight size={15} /></div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-stamp"><span>MADE TO</span><strong>FIGURE<br />IT OUT.</strong><span>NOT TO STAND STILL ↗</span></div>
          <motion.div className="about-copy" {...motionProps}>
            <span className="section-index">02 / THE PERSON BEHIND THE BUILDS</span>
            <h2>Learn fast.<br />Think clearly.<br /><em>Make it real.</em></h2>
            <p>I’m Rohit, an engineering student and builder interested in turning complex ideas into practical tools. My work spans AI-assisted workflows, software development, and defensive security research.</p>
            <p>I value honest progress, readable systems, and learning by making. I’m looking for opportunities where I can contribute, get challenged, and ship useful work with a team.</p>
            <a className="text-link" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
          </motion.div>
        </section>

        <section className="section skills-section" id="skills">
          <motion.div className="section-heading" {...motionProps}>
            <div><span className="section-index">03 / CAPABILITIES</span><h2>Built on <em>curiosity.</em></h2></div>
            <p>A practical mix of interests that guide the projects I choose and the problems I want to solve.</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon
              return <motion.div className="skill-card" key={skill.name} {...motionProps} transition={{ duration: 0.45, delay: i * 0.07 }}>
                <div className="skill-top"><span>0{i + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{skill.name}</h3><p>{skill.note}</p><div className="skill-line" />
              </motion.div>
            })}
          </div>
          <div className="principles"><span><Check size={15} /> Document the work</span><span><Check size={15} /> Test the assumptions</span><span><Check size={15} /> Respect the boundaries</span><span><Check size={15} /> Keep improving</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <motion.div className="contact-inner" {...motionProps}>
            <span className="section-index">04 / NEXT CHAPTER</span>
            <h2>Got a problem<br />worth <em>solving?</em></h2>
            <p>I’m open to relevant internships, entry-level opportunities, collaborations, and freelance projects where thoughtful engineering makes a difference.</p>
            <a className="button button-primary" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">Connect on GitHub <ArrowUpRight size={16} /></a>
            <div className="contact-note"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home"><span className="mark">R<span>.</span></span><span className="wordmark-text">ROHIT <small>THE BUILDER</small></span></a>
        <span className="footer-copy">DESIGNED TO EVOLVE · © {new Date().getFullYear()}</span>
        <a className="back-top" href="#home">BACK TO TOP <ArrowDown size={13} /></a>
      </footer>

      <AnimatePresence>
        {selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details"><X size={20} /></button>
            <span className="section-index">{selected.number} / {selected.category}</span>
            <h2 id="modal-title">{selected.title}</h2>
            <span className="modal-status">{selected.status}</span>
            <p>{selected.detail}</p>
            <div className="modal-stack"><span>FOCUS AREAS</span><div>{selected.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="modal-footnote">Public repository and demo links will be added after verification.</div>
            <a className="text-link" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">Visit GitHub profile <ArrowUpRight size={15} /></a>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default App
