import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight,
  Code2, Github, Play, ShieldCheck, Sparkles, X, Zap,
} from 'lucide-react'

type Project = {
  id: string
  title: string
  category: string
  status: string
  synopsis: string
  detail: string
  tags: string[]
  palette: string
  symbol: string
}

const projects: Project[] = [
  {
    id: '01', title: 'AI Desktop Assistant', category: 'AI · AUTOMATION',
    status: 'IN DEVELOPMENT', synopsis: 'A smarter layer between everyday tasks and the tools you use.',
    detail: 'An assistant concept exploring voice and text commands, useful desktop actions, and practical workflow automation. The portfolio will only claim capabilities that can be demonstrated in the repository.',
    tags: ['Python', 'AI / NLP', 'Automation'], palette: 'ember', symbol: 'AI',
  },
  {
    id: '02', title: 'AI Security Assistant', category: 'CYBERSECURITY',
    status: 'RESEARCH PROJECT', synopsis: 'Making security research more structured, explainable, and repeatable.',
    detail: 'An AI-assisted research workflow for organizing security signals and supporting responsible bug-hunting. Testing is limited to authorized systems and permitted environments.',
    tags: ['AI', 'AppSec', 'Research'], palette: 'crimson', symbol: 'SEC',
  },
  {
    id: '03', title: 'Secure Web Application', category: 'APPLICATION SECURITY',
    status: 'BUILD / HARDEN', synopsis: 'Defensive engineering against common web application risks.',
    detail: 'A security-focused application track covering safer input handling and defenses against risks such as XSS and SQL injection. Implementation details and test evidence will be linked after repository verification.',
    tags: ['Web', 'XSS', 'SQL injection'], palette: 'ice', symbol: '{ }',
  },
  {
    id: '04', title: 'CTFverse', category: 'SECURITY LEARNING',
    status: 'PLATFORM PROJECT', synopsis: 'A hands-on learning universe for curious security minds.',
    detail: 'A cybersecurity learning-platform concept centered on practical challenges and structured skill-building. A verified demo and walkthrough can be added when the current build is ready.',
    tags: ['CTF', 'Web development', 'Learning'], palette: 'violet', symbol: 'CTF',
  },
  {
    id: '05', title: 'YouTube Automation', category: 'CREATOR SYSTEMS',
    status: 'IN PROGRESS', synopsis: 'Turning repeatable content tasks into a more reliable workflow.',
    detail: 'A workflow project exploring how content-production steps can be organized and automated with human review points. Current integrations and shipped features will be documented as they are verified.',
    tags: ['Automation', 'AI', 'Content'], palette: 'gold', symbol: '▶',
  },
  {
    id: '06', title: 'Bug Bounty Research Lab', category: 'CHEAKSTAR · R&D',
    status: 'RESEARCH TRACK', synopsis: 'A disciplined space for testing, learning, and documenting findings.',
    detail: 'A research track for practicing web security analysis and improving testing discipline in authorized environments, controlled labs, and programs that explicitly permit testing.',
    tags: ['Security research', 'Testing', 'Documentation'], palette: 'mint', symbol: 'LAB',
  },
]

const skills = [
  { title: 'AI & Automation', text: 'Assistants · Workflows · Practical tools', icon: Sparkles },
  { title: 'Software Building', text: 'Web experiences · Product iteration', icon: Code2 },
  { title: 'Cybersecurity', text: 'Application security · Authorized testing', icon: ShieldCheck },
  { title: 'Execution Mindset', text: 'Research · Testing · Documentation', icon: Zap },
]

function App() {
  const [intro, setIntro] = useState(true)
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const rails = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    if (reduceMotion) setIntro(false)
    const timer = window.setTimeout(() => setIntro(false), reduceMotion ? 0 : 3800)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  const scrollRail = (id: string, direction: number) => {
    rails.current[id]?.scrollBy({ left: direction * 420, behavior: 'smooth' })
  }
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="series-site">
      <div className="film-grain" aria-hidden="true" />
      <AnimatePresence>
        {intro && (
          <motion.div className="opening" key="opening" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }} transition={{ duration: 0.8 }}>
            <div className="opening-light" />
            <motion.p className="opening-studio" initial={{ opacity: 0, letterSpacing: '0.9em' }} animate={{ opacity: 1, letterSpacing: '0.42em' }} transition={{ duration: 1.2 }}>AN INDEPENDENT BUILDER PRESENTS</motion.p>
            <motion.div className="opening-title" initial={{ opacity: 0, y: 24, scale: 1.12 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.35, duration: 1.1 }}>
              <span>ROHIT</span><b>THE BUILDER</b>
            </motion.div>
            <motion.p className="opening-caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>AI · SOFTWARE · CYBERSECURITY</motion.p>
            <button className="opening-play" onClick={() => setIntro(false)}><Play size={16} fill="currentColor" /> ENTER EXPERIENCE <span>↗</span></button>
            <button className="skip-intro" onClick={() => setIntro(false)}>SKIP INTRO</button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="series-nav">
        <a className="series-brand" href="#home" onClick={closeMenu}><span className="brand-n">R<span>.</span></span><span className="brand-words">ROHIT <small>THE BUILDER</small></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <span>☰</span>}</button>
        <nav className={menuOpen ? 'series-links is-open' : 'series-links'} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a><a href="#continue" onClick={closeMenu}>Explore</a><a href="#originals" onClick={closeMenu}>Originals</a><a href="#about" onClick={closeMenu}>My story</a>
          <a className="nav-connect" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="series-hero" id="home">
          <div className="hero-backdrop" />
          <div className="hero-vignette" />
          <div className="hero-ambient hero-ambient-one" /><div className="hero-ambient hero-ambient-two" />
          <div className="hero-vertical-label">A WORK IN PROGRESS · ALWAYS BUILDING</div>
          <motion.div className="hero-content" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: intro ? 3.3 : 0.15 }}>
            <div className="series-kicker"><span className="live-dot" /> THE STORY SO FAR <span className="kicker-line" /> SEASON 01</div>
            <div className="hero-series-mark"><span>R</span><b>ORIGINAL SERIES</b></div>
            <h1>Curiosity<br />in <em>production.</em></h1>
            <p className="hero-description">I’m Rohit Kumar Chandoliya — building at the intersection of AI, software, and cybersecurity. This is where the experiments, ideas, and projects take shape.</p>
            <div className="hero-meta"><span className="meta-match">98% MATCH</span><span>2026</span><span className="meta-rating">BUILD · LEARN · REPEAT</span><span>6 PROJECTS</span></div>
            <div className="hero-buttons">
              <a className="hero-play" href="#continue"><Play size={18} fill="currentColor" /> Explore my work</a>
              <a className="hero-more" href="#about"><span>i</span> More about me</a>
            </div>
            <div className="hero-foot">JAIPUR, INDIA <span /> OPEN TO OPPORTUNITIES</div>
          </motion.div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-ring ring-a" /><div className="hero-art-ring ring-b" />
            <div className="hero-monogram">R<span>.</span></div>
            <div className="hero-art-caption caption-a">IDEAS → SYSTEMS</div><div className="hero-art-caption caption-b">DESIGNED TO EVOLVE</div>
            <div className="hero-art-chip chip-a"><span className="chip-dot" /> BUILD MODE <b>ACTIVE</b></div>
            <div className="hero-art-chip chip-b"><Code2 size={15} /> THINK / MAKE / TEST</div>
          </div>
          <a className="hero-scroll" href="#continue"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
          <div className="hero-fade" />
        </section>

        <section className="continue-section" id="continue">
          <div className="rail-heading"><div><span className="rail-eyebrow">YOUR NEXT EPISODE</span><h2>Continue exploring</h2></div><div className="rail-controls"><button onClick={() => scrollRail('explore', -1)} aria-label="Scroll left"><ChevronLeft /></button><button onClick={() => scrollRail('explore', 1)} aria-label="Scroll right"><ChevronRight /></button></div></div>
          <div className="poster-rail explore-rail" ref={el => { rails.current.explore = el }}>
            {[
              { no: '01', title: 'The Builder', sub: 'A little about me', target: '#about', palette: 'poster-about', glyph: 'R' },
              { no: '02', title: 'The Originals', sub: 'Projects in progress', target: '#originals', palette: 'poster-originals', glyph: '01' },
              { no: '03', title: 'The Toolkit', sub: 'Skills & capabilities', target: '#skills', palette: 'poster-skills', glyph: '{ }' },
              { no: '04', title: 'The Next Chapter', sub: 'Let’s build something', target: '#contact', palette: 'poster-contact', glyph: '↗' },
            ].map(item => <a href={item.target} className="explore-card" key={item.no}><div className={'explore-art ' + item.palette}><span className="explore-glyph">{item.glyph}</span><span className="explore-no">CHAPTER {item.no}</span><span className="explore-play"><Play size={16} fill="currentColor" /></span></div><strong>{item.title}</strong><span>{item.sub}</span></a>)}
          </div>
        </section>

        <section className="originals-section" id="originals">
          <div className="section-topline"><span className="red-dash" /> ROHIT’S ORIGINALS <span className="topline-season">SEASON 01 · PROJECT FILES</span></div>
          <div className="originals-title-row"><div><h2>Built, tested<br />and <em>in the making.</em></h2><p>Every project has a story. Pick an episode to see the idea, the focus, and what’s next.</p></div><div className="rail-controls originals-controls"><button onClick={() => scrollRail('projects', -1)} aria-label="Scroll projects left"><ChevronLeft /></button><button onClick={() => scrollRail('projects', 1)} aria-label="Scroll projects right"><ChevronRight /></button></div></div>
          <div className="poster-rail project-rail" ref={el => { rails.current.projects = el }}>
            {projects.map((project, index) => <motion.button type="button" key={project.id} className="project-poster" onClick={() => setSelected(project)} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
              <div className={'poster-art poster-' + project.palette}><div className="poster-topline"><span>R ORIGINAL</span><span>EP. {project.id}</span></div><div className="poster-halo" /><span className="poster-symbol">{project.symbol}</span><div className="poster-art-title"><span>{project.category}</span><strong>{project.title}</strong></div><span className="poster-play"><Play size={19} fill="currentColor" /></span><span className="poster-corner">{project.id}</span></div>
              <div className="poster-info"><div className="poster-info-top"><span className="poster-match">NEW EPISODE</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.synopsis}</p><div className="poster-tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><div className="poster-view">VIEW EPISODE <ArrowUpRight size={14} /></div></div>
            </motion.button>)}
          </div>
          <div className="rail-bottom-note"><span>R / ORIGINALS</span><span>HONEST PROGRESS. REAL BUILDS. MORE TO COME.</span></div>
        </section>

        <section className="featured-section">
          <div className="featured-visual"><div className="featured-grid" /><div className="featured-orb" /><span className="featured-index">FEATURED STORY / 001</span><div className="featured-bigmark">BUILD<span>.</span></div><div className="featured-side-note">CURIOSITY IS THE ENGINE</div></div>
          <div className="featured-copy"><span className="section-eyebrow">THE CREATOR BEHIND THE CREDITS</span><h2>Not just ideas.<br /><em>Follow-through.</em></h2><p>I’m interested in turning complex ideas into practical tools — from AI-assisted workflows to software and defensive security research. The work is evolving, and I’m committed to showing the process honestly.</p><a href="#about" className="inline-cta">Discover my story <ArrowRight size={16} /></a><div className="featured-stats"><div><strong>AI</strong><span>EXPERIMENTS</span></div><div><strong>DEV</strong><span>BUILDING</span></div><div><strong>SEC</strong><span>RESEARCH</span></div></div></div>
        </section>

        <section className="story-section" id="about">
          <div className="story-art"><div className="story-art-ring" /><span className="story-letter">R</span><span className="story-signature">STAY CURIOUS. KEEP BUILDING.</span><span className="story-stamp">THE<br />BUILDER<br /><b>EST. 2026</b></span></div>
          <div className="story-copy"><span className="section-eyebrow">CHAPTER 01 · THE PERSON</span><h2>Learning by<br /><em>making things.</em></h2><p>I’m Rohit Kumar Chandoliya, an engineering student and builder interested in AI, software development, and cybersecurity.</p><p>I value practical learning, clear documentation, and systems that can be tested and improved. I’m looking for opportunities where I can contribute, learn from strong teams, and build useful things.</p><a className="inline-cta" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="skills-section" id="skills"><div className="section-eyebrow">CHAPTER 02 · THE TOOLKIT</div><div className="skills-heading"><h2>Things I’m <em>building with.</em></h2><p>Curiosity is the starting point. Practice is what makes it useful.</p></div><div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <div className="skill-tile" key={skill.title}><span className="skill-count">0{i + 1}</span><Icon size={23} strokeWidth={1.4} /><h3>{skill.title}</h3><p>{skill.text}</p><span className="skill-underline" /></div> })}</div><div className="principle-line"><span><Check size={14} /> TEST THE ASSUMPTIONS</span><span><Check size={14} /> DOCUMENT THE WORK</span><span><Check size={14} /> KEEP IMPROVING</span></div></section>

        <section className="contact-section" id="contact"><div className="contact-glow" /><div className="contact-content"><span className="section-eyebrow">THE NEXT CHAPTER IS UNWRITTEN</span><h2>Let’s make<br /><em>something matter.</em></h2><p>Open to relevant internships, entry-level opportunities, collaborations, and freelance work where thoughtful building makes a difference.</p><a className="hero-play contact-button" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer"><Github size={18} /> Connect on GitHub <ArrowUpRight size={16} /></a><span className="contact-note"><span className="live-dot" /> OPEN TO THE RIGHT OPPORTUNITY</span></div></section>
      </main>

      <footer className="series-footer"><a className="series-brand" href="#home"><span className="brand-n">R<span>.</span></span><span className="brand-words">ROHIT <small>THE BUILDER</small></span></a><span>AN INDEPENDENT WORK IN PROGRESS · © {new Date().getFullYear()}</span><a href="#home" className="footer-top">BACK TO TOP ↑</a></footer>

      <AnimatePresence>
        {selected && <motion.div className="episode-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.div className="episode-modal" role="dialog" aria-modal="true" aria-labelledby="episode-title" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.98 }} onClick={event => event.stopPropagation()}>
            <button className="episode-close" onClick={() => setSelected(null)} aria-label="Close episode"><X /></button>
            <div className={'episode-modal-art poster-' + selected.palette}><span className="modal-episode">ROHIT ORIGINAL · EPISODE {selected.id}</span><span className="modal-big-symbol">{selected.symbol}</span><span className="modal-art-title">{selected.title}</span></div>
            <div className="episode-modal-copy"><span className="section-eyebrow">{selected.category} · {selected.status}</span><h2 id="episode-title">{selected.title}</h2><p>{selected.detail}</p><div className="episode-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="inline-cta" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">Explore GitHub profile <ArrowUpRight size={15} /></a><span className="modal-honesty">Repository-specific links will be added after each project is verified.</span></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default App
