import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Award, BookOpen, Check,
  ChevronLeft, ChevronRight, Code2, ExternalLink, Github, Globe2,
  Mail, Play, ShieldCheck, Sparkles, X, Zap, Phone, Linkedin,
} from 'lucide-react'

type Project = {
  id: string; title: string; category: string; status: string; synopsis: string
  detail: string; tags: string[]; palette: string; symbol: string; url: string
}

const projects: Project[] = [
  { id: '01', title: 'Self Learning AI Assistant', category: 'AI · AUTOMATION', status: 'PROJECT', synopsis: 'An AI assistant built around learning, interaction, and useful task automation.', detail: 'An AI-based assistant designed to support learning, user interaction, and task automation. The public repository is the source of truth for implementation details.', tags: ['Python', 'AI assistant', 'Automation'], palette: 'ember', symbol: 'AI', url: 'https://github.com/rohitkrchandoliya/CS--Ai-Assistant' },
  { id: '02', title: 'AI AppSec Platform', category: 'APPLICATION SECURITY', status: 'EARLY MVP', synopsis: 'Developer-first static checks, normalized findings, and machine-readable security reports.', detail: 'The repository documents Python and JavaScript/TypeScript static checks, secret-pattern detection with redacted evidence, dependency inventory, optional OSV advisory audits, CycloneDX SBOM export, risk scoring, and JSON/SARIF reports. It is an early MVP with intentionally limited rule coverage—not a guarantee that a codebase is secure.', tags: ['Python', 'SAST', 'SARIF', 'SBOM'], palette: 'crimson', symbol: 'SEC', url: 'https://github.com/rohitkrchandoliya/ai-appsec-platform' },
  { id: '03', title: 'Autonomous YouTube Factory', category: 'AI · CONTENT SYSTEMS', status: 'IN PROGRESS', synopsis: 'A cloud-first pipeline for research-led video and Shorts production.', detail: 'The repository describes research collection, evidence packs, scheduling, a durable queue, script/storyboard models, rights tracking, quality gates, analytics, moderation, and audit events. Unattended publishing remains fail-closed until deployment configuration, OAuth, provider licensing, and production verification are complete.', tags: ['Python', 'Automation', 'PostgreSQL', 'QA'], palette: 'gold', symbol: '▶', url: 'https://github.com/rohitkrchandoliya/autonomous-youtube-factory' },
  { id: '04', title: 'Certificate Automation System', category: 'AUTOMATION · LEADERSHIP', status: 'AWARD-WINNING PROJECT', synopsis: 'A system for generating and managing digital certificates.', detail: 'Built as a team-led project for certificate generation and management. The resume states this project achieved 2nd place at a UEM international conference.', tags: ['Automation', 'Team Lead', 'Digital certificates'], palette: 'violet', symbol: 'CAS', url: 'https://github.com/rohitkrchandoliya/Event-Certificates-Automation' },
  { id: '05', title: 'Smart-Scan: Smart Contract Analyzer', category: 'WEB3 · SECURITY', status: 'HACKATHON PROJECT', synopsis: 'A Web3 security project focused on smart-contract and wallet analysis.', detail: 'The repository describes smart contract and wallet analysis, secure API-key handling, and a zero-cost deployment goal. The precise detection coverage should be assessed from the source code and its current tests.', tags: ['Web3', 'Security', 'API integration'], palette: 'ice', symbol: 'W3', url: 'https://github.com/rohitkrchandoliya/Smart-Contract-Analyzer---AceHack-4.0' },
  { id: '06', title: 'AI Resume Analyzer & Job Matcher', category: 'AI · CAREER TOOLS', status: 'PROJECT REPOSITORY', synopsis: 'A project focused on connecting resume information with job opportunities.', detail: 'A public repository in the AI and career-tool space. The implementation and supported features should be confirmed from the source before stronger claims or metrics are displayed.', tags: ['AI', 'Resume analysis', 'Job matching'], palette: 'mint', symbol: 'CV', url: 'https://github.com/rohitkrchandoliya/AI-Resume-Analyzer-Job-Matcher' },
]

const skills = [
  { title: 'AI & Machine Learning', text: 'Python · TensorFlow · Prompt engineering', icon: Sparkles },
  { title: 'Software Engineering', text: 'Backend services · REST APIs · Web apps', icon: Code2 },
  { title: 'Automation & Data', text: 'n8n · Supabase · SQL · Integrations', icon: Zap },
  { title: 'Application Security', text: 'Web security · Vulnerability assessment · CTF', icon: ShieldCheck },
]
const countries = [
  { value: 'uae', label: 'United Arab Emirates (UAE)' },
  { value: 'other', label: 'Other country / international role' },
  { value: 'india', label: 'India' },
]
function App() {
  const [intro, setIntro] = useState(true)
  const [selected, setSelected] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [country, setCountry] = useState('uae')
  const reduceMotion = useReducedMotion()
  const rails = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    if (reduceMotion) setIntro(false)
    const timer = window.setTimeout(() => setIntro(false), reduceMotion ? 0 : 3500)
    return () => window.clearTimeout(timer)
  }, [reduceMotion])
  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [selected])
  const scrollRail = (id: string, direction: number) => rails.current[id]?.scrollBy({ left: direction * 420, behavior: 'smooth' })
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="series-site">
      <div className="film-grain" aria-hidden="true" />
      <AnimatePresence>
        {intro && <motion.div className="opening" key="opening" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }} transition={{ duration: 0.8 }}>
          <div className="opening-light" />
          <motion.p className="opening-studio" initial={{ opacity: 0, letterSpacing: '0.9em' }} animate={{ opacity: 1, letterSpacing: '0.42em' }} transition={{ duration: 1.2 }}>AN INDEPENDENT BUILDER PRESENTS</motion.p>
          <motion.div className="opening-title" initial={{ opacity: 0, y: 24, scale: 1.12 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.35, duration: 1.1 }}><span>ROHIT</span><b>THE BUILDER</b></motion.div>
          <motion.p className="opening-caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>AI · SOFTWARE · AUTOMATION · SECURITY</motion.p>
          <button className="opening-play" onClick={() => setIntro(false)}><Play size={16} fill="currentColor" /> ENTER EXPERIENCE <span>↗</span></button>
          <button className="skip-intro" onClick={() => setIntro(false)}>SKIP INTRO</button>
        </motion.div>}
      </AnimatePresence>

      <header className="series-nav">
        <a className="series-brand" href="#home" onClick={closeMenu}><span className="brand-n">R<span>.</span></span><span className="brand-words">ROHIT <small>THE BUILDER</small></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <span>☰</span>}</button>
        <nav className={menuOpen ? 'series-links is-open' : 'series-links'} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a><a href="#originals" onClick={closeMenu}>Projects</a><a href="#career" onClick={closeMenu}>Experience</a><a href="#mobility" onClick={closeMenu}>Relocation</a><a className="nav-connect" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="series-hero" id="home">
          <div className="hero-backdrop" /><div className="hero-vignette" /><div className="hero-ambient hero-ambient-one" /><div className="hero-ambient hero-ambient-two" />
          <div className="hero-vertical-label">AI · SOFTWARE · AUTOMATION · SECURITY</div>
          <motion.div className="hero-content" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: intro ? 3.1 : 0.15 }}>
            <div className="series-kicker"><span className="live-dot" /> OPEN TO OPPORTUNITIES <span className="kicker-line" /> 2026</div>
            <div className="hero-series-mark"><span>R</span><b>INDEPENDENT BUILDER</b></div>
            <h1>Curiosity<br />in <em>production.</em></h1>
            <p className="hero-description">I’m Rohit Kumar Chandoliya — a Computer Science graduate and builder working across AI, automation, software engineering, and application security. I turn ideas into systems, test them, and keep improving.</p>
            <div className="hero-meta"><span className="meta-match">AVAILABLE FOR HIRE</span><span>JAIPUR, INDIA</span><span className="meta-rating">REMOTE · RELOCATION</span></div>
            <div className="hero-buttons"><a className="hero-play" href="#originals"><Play size={18} fill="currentColor" /> Explore my work</a><a className="hero-more" href="#contact"><Mail size={16} /> Contact me</a></div>
            <div className="hero-foot">BCA · UEM JAIPUR · 2026 <span /> OPEN TO RELEVANT ROLES</div>
          </motion.div>
          <div className="hero-art hero-art-profile" aria-label="Illustrated developer profile artwork"><img src="https://raw.githubusercontent.com/rohitkrchandoliya/rohitkrchandoliya/main/assets/profile/hero.svg" alt="Rohit OS illustrated developer profile" /><div className="hero-art-chip chip-a"><span className="chip-dot" /> HIRING STATUS <b>OPEN</b></div><div className="hero-art-chip chip-b"><Code2 size={15} /> BUILD / TEST / IMPROVE</div></div>
          <a className="hero-scroll" href="#continue"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a><div className="hero-fade" />
        </section>

        <section className="continue-section" id="continue">
          <div className="rail-heading"><div><span className="rail-eyebrow">THE STORY SO FAR</span><h2>Explore the universe</h2></div><div className="rail-controls"><button onClick={() => scrollRail('explore', -1)} aria-label="Scroll left"><ChevronLeft /></button><button onClick={() => scrollRail('explore', 1)} aria-label="Scroll right"><ChevronRight /></button></div></div>
          <div className="poster-rail explore-rail" ref={el => { rails.current.explore = el }}>
            {[
              { no: '01', title: 'Selected Projects', sub: 'Things I build', target: '#originals', palette: 'poster-originals', glyph: '01' },
              { no: '02', title: 'Career Timeline', sub: 'Experience & education', target: '#career', palette: 'poster-about', glyph: 'CV' },
              { no: '03', title: 'The Toolkit', sub: 'Technical capabilities', target: '#skills', palette: 'poster-skills', glyph: '{ }' },
              { no: '04', title: 'Global Opportunities', sub: 'Hiring & relocation details', target: '#mobility', palette: 'poster-contact', glyph: '↗' },
            ].map(item => <a href={item.target} className="explore-card" key={item.no}><div className={'explore-art ' + item.palette}><span className="explore-glyph">{item.glyph}</span><span className="explore-no">CHAPTER {item.no}</span><span className="explore-play"><Play size={16} fill="currentColor" /></span></div><strong>{item.title}</strong><span>{item.sub}</span></a>)}
          </div>
        </section>

        <section className="originals-section" id="originals">
          <div className="section-topline"><span className="red-dash" /> SELECTED PROJECTS <span className="topline-season">SOURCE-LINKED PROJECT FILES</span></div>
          <div className="originals-title-row"><div><h2>Ideas made <em>tangible.</em></h2><p>Explore the source code and current project notes. Status and scope are kept honest—no invented metrics or inflated claims.</p></div><div className="rail-controls originals-controls"><button onClick={() => scrollRail('projects', -1)} aria-label="Scroll projects left"><ChevronLeft /></button><button onClick={() => scrollRail('projects', 1)} aria-label="Scroll projects right"><ChevronRight /></button></div></div>
          <div className="poster-rail project-rail" ref={el => { rails.current.projects = el }}>
            {projects.map((project, index) => <motion.button type="button" key={project.id} className="project-poster" onClick={() => setSelected(project)} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
              <div className={'poster-art poster-' + project.palette}><div className="poster-topline"><span>R ORIGINAL</span><span>EP. {project.id}</span></div><div className="poster-halo" /><span className="poster-symbol">{project.symbol}</span><div className="poster-art-title"><span>{project.category}</span><strong>{project.title}</strong></div><span className="poster-play"><Play size={19} fill="currentColor" /></span><span className="poster-corner">{project.id}</span></div>
              <div className="poster-info"><div className="poster-info-top"><span className="poster-match">SOURCE LINKED</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.synopsis}</p><div className="poster-tags">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><div className="poster-view">VIEW PROJECT <ArrowUpRight size={14} /></div></div>
            </motion.button>)}
          </div>
          <div className="rail-bottom-note"><span>ROHIT / PROJECTS</span><span>REAL REPOSITORIES · TRANSPARENT PROGRESS</span></div>
        </section>

        <section className="featured-section" id="career">
          <div className="featured-visual"><div className="featured-grid" /><div className="featured-orb" /><span className="featured-index">CAREER FILE / 001</span><div className="featured-bigmark">BUILD<span>.</span></div><div className="featured-side-note">LEARN · SHIP · IMPROVE</div></div>
          <div className="featured-copy"><span className="section-eyebrow">EXPERIENCE & EDUCATION</span><h2>Grounded in<br /><em>real work.</em></h2>
            <div className="career-list">
              <div className="career-item"><span className="career-date">MAY 2024 — DEC 2024</span><strong>Software Engineer · Walmart</strong><p>Backend services, code optimization, ML-supported features, deployment workflows, testing, and troubleshooting (as described in my resume).</p></div>
              <div className="career-item"><span className="career-date">DEC 2023 — MAY 2024</span><strong>Software & Web Developer · Tata Group</strong><p>Web applications, backend functionality, REST API integration, database work, debugging, and deployment (as described in my resume).</p></div>
              <div className="career-item"><span className="career-date">COMPLETED · JUNE 2026</span><strong>Bachelor of Computer Applications · UEM Jaipur</strong><p>Computer Science.</p></div>
            </div>
            <div className="resume-actions"><a className="inline-cta" href="mailto:rohitkchandoliya@gmail.com?subject=AI%20%26%20Automation%20Resume%20Request">AI &amp; Automation Resume <Mail size={15} /></a><a className="inline-cta" href="mailto:rohitkchandoliya@gmail.com?subject=Software%20Engineering%20Resume%20Request">Software Engineering Resume <Mail size={15} /></a></div>
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="story-art"><div className="story-art-ring" /><span className="story-letter">R</span><span className="story-signature">FOUNDER · CHEAKSTAR</span><span className="story-stamp">THE<br />BUILDER<br /><b>EST. 2026</b></span></div>
          <div className="story-copy"><span className="section-eyebrow">CHAPTER 01 · THE PERSON</span><h2>Build with<br /><em>purpose.</em></h2><p>I’m Rohit Kumar Chandoliya, a Computer Science graduate, Founder at Cheakstar, and an early-career software engineer interested in AI, automation, backend/web development, and cybersecurity.</p><p>I enjoy taking problems from idea to implementation—breaking them down, connecting systems, testing assumptions, documenting what works, and improving the result.</p><div className="achievement-chip"><Award size={18} /><span><strong>2nd Place</strong><small>UEM International Conference · Certificate Automation System</small></span></div><div className="achievement-chip"><BookIcon /><span><strong>Author · “Secure The Future”</strong><small>Cybersecurity and web security fundamentals</small></span></div><a className="inline-cta" href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="skills-section" id="skills"><div className="section-eyebrow">CHAPTER 02 · THE TOOLKIT</div><div className="skills-heading"><h2>Things I’m <em>building with.</em></h2><p>Skills listed from my resume and GitHub profile. Depth varies by project; source code is the best evidence.</p></div><div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <div className="skill-tile" key={skill.title}><span className="skill-count">0{i + 1}</span><Icon size={23} strokeWidth={1.4} /><h3>{skill.title}</h3><p>{skill.text}</p><span className="skill-underline" /></div> })}</div><div className="tech-cloud"><span>Python</span><span>JavaScript</span><span>TypeScript</span><span>C / C++</span><span>Java</span><span>SQL</span><span>TensorFlow</span><span>Next.js</span><span>REST APIs</span><span>Supabase</span><span>Git / GitHub</span><span>n8n</span></div><div className="principle-line"><span><Check size={14} /> TEST THE ASSUMPTIONS</span><span><Check size={14} /> DOCUMENT THE WORK</span><span><Check size={14} /> KEEP IMPROVING</span></div></section>

        <section className="mobility-section" id="mobility"><div className="mobility-copy"><span className="section-eyebrow">GLOBAL HIRING · RELOCATION</span><h2>Talent can travel.<br /><em>With the right support.</em></h2><p>I’m currently based in Jaipur, India. I’m open to discussing international opportunities where the employer can support the required work authorization and a practical relocation plan.</p><div className="country-select-wrap"><label htmlFor="country-select">EMPLOYER LOCATION</label><select id="country-select" value={country} onChange={event => setCountry(event.target.value)}>{countries.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
          {country === 'india' ? <div className="mobility-details"><h3>Hiring in India</h3><ul><li>Open to relevant software engineering, AI/automation, and application-security roles.</li><li>Based in Jaipur, Rajasthan; work arrangement can be discussed for each role.</li><li>Use the contact buttons below to discuss role, location, and start date.</li></ul></div> : country === 'uae' ? <div className="mobility-details"><h3>United Arab Emirates · Relocation requirements</h3><ul><li><Check size={15} /> Open to relocating to the UAE after receiving a formal employment offer.</li><li><Check size={15} /> Employer-sponsored UAE work visa / work permit required.</li><li><Check size={15} /> Requesting employer-supported travel reimbursement or relocation allowance.</li><li><Check size={15} /> Requesting temporary accommodation / initial stay support.</li><li><Check size={15} /> Requesting guidance and support with required immigration and employment documentation.</li></ul><p className="mobility-footnote">These are requirements to discuss, not assumptions that every employer provides all benefits.</p></div> : <div className="mobility-details"><h3>Other international destinations</h3><ul><li>Interested in discussing suitable roles outside India, subject to destination-country eligibility.</li><li>Employer sponsorship for the appropriate work visa / permit is required.</li><li>Travel or relocation assistance, temporary accommodation, and immigration-documentation guidance are requested as part of a feasible relocation plan.</li><li>Visa rules, employer benefits, and eligibility vary by country and must be confirmed for the specific offer.</li></ul><p className="mobility-footnote">The UAE is the destination explicitly listed in my current resume; other destinations are subject to discussion and eligibility.</p></div>}
          <a className="hero-play mobility-cta" href={'mailto:rohitkchandoliya@gmail.com?subject='+encodeURIComponent('International opportunity - '+countries.find(item=>item.value===country)?.label)}><Mail size={17} /> Discuss this opportunity <ArrowUpRight size={15} /></a>
        </div><div className="mobility-visual"><div className="mobility-globe"><Globe2 size={90} strokeWidth={0.8} /></div><span className="mobility-coordinate">26.9124° N · 75.7873° E</span><span className="mobility-stamp">BASED IN INDIA<br /><b>OPEN TO DISCUSSION</b></span><div className="mobility-route"><span /><span /><span /></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-glow" /><div className="contact-content"><span className="section-eyebrow">THE NEXT CHAPTER IS UNWRITTEN</span><h2>Let’s make<br /><em>something matter.</em></h2><p>Available for relevant software engineering, AI/automation, backend/web, and application-security opportunities. For international roles, please include location, sponsorship, and relocation-support details.</p><div className="contact-actions"><a className="hero-play" href="mailto:rohitkchandoliya@gmail.com?subject=Opportunity%20for%20Rohit%20Kumar%20Chandoliya"><Mail size={17} /> Email me</a><a className="hero-more" href="tel:+919057604170"><Phone size={16} /> Call</a><a className="hero-more" href="https://wa.me/919057604170" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a></div><div className="contact-socials"><a href="https://linkedin.com/in/rohitkrchandoliya" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="mailto:rohitkchandoliya@gmail.com"><Mail size={16} /> Email</a></div><span className="contact-note"><span className="live-dot" /> OPEN TO THE RIGHT OPPORTUNITY</span></div></section>
      </main>

      <footer className="series-footer"><a className="series-brand" href="#home"><span className="brand-n">R<span>.</span></span><span className="brand-words">ROHIT <small>THE BUILDER</small></span></a><span>JAIPUR, INDIA · © {new Date().getFullYear()}</span><div className="footer-links"><a href="https://linkedin.com/in/rohitkrchandoliya" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://github.com/rohitkrchandoliya" target="_blank" rel="noreferrer">GITHUB</a><a href="mailto:rohitkchandoliya@gmail.com">EMAIL</a><a href="#home" className="footer-top">BACK TO TOP ↑</a></div></footer>

      <AnimatePresence>
        {selected && <motion.div className="episode-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <motion.div className="episode-modal" role="dialog" aria-modal="true" aria-labelledby="episode-title" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.98 }} onClick={event => event.stopPropagation()}>
            <button className="episode-close" onClick={() => setSelected(null)} aria-label="Close project details"><X /></button>
            <div className={'episode-modal-art poster-' + selected.palette}><span className="modal-episode">ROHIT PROJECT · EPISODE {selected.id}</span><span className="modal-big-symbol">{selected.symbol}</span><span className="modal-art-title">{selected.title}</span></div>
            <div className="episode-modal-copy"><span className="section-eyebrow">{selected.category} · {selected.status}</span><h2 id="episode-title">{selected.title}</h2><p>{selected.detail}</p><div className="episode-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="inline-cta" href={selected.url} target="_blank" rel="noreferrer">View source repository <ExternalLink size={15} /></a><span className="modal-honesty">Project scope and current implementation are described conservatively; please refer to the repository for the latest code.</span></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}
function BookIcon() { return <BookOpen size={18} /> }
export default App
