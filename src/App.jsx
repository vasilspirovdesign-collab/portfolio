import { useState, useEffect, useRef } from 'react'
import { t } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import HederaPage from './pages/HederaPage'
import AboutPage from './pages/AboutPage'
import WorkflowPage from './pages/WorkflowPage'

const FEATURED = [
  { title: 'Opus Edu', description: 'OpusEdu is a platform where creators and learners connect to share and gain knowledge, powered by blockchain technology.' },
  { title: 'Hedera Transaction Tool', description: 'A transaction tool built on the Hedera network, enabling fast and low-cost token transfers with a clean, accessible interface.' },
]

function parseHash() {
  const hash = window.location.hash.slice(1)
  if (!hash || hash === 'home') return { page: 'home', selectedProject: null }
  if (hash === 'projects') return { page: 'projects', selectedProject: null }
  if (hash === 'about') return { page: 'about-me', selectedProject: null }
  if (hash === 'workflow') return { page: 'workflow', selectedProject: null }
  if (hash.startsWith('project/')) return { page: 'project-detail', selectedProject: decodeURIComponent(hash.slice(8)) }
  return { page: 'home', selectedProject: null }
}

function toHash(page, selectedProject) {
  if (page === 'projects') return '#projects'
  if (page === 'about-me') return '#about'
  if (page === 'workflow') return '#workflow'
  if (page === 'project-detail' && selectedProject) return `#project/${encodeURIComponent(selectedProject)}`
  return '#home'
}

export default function App() {
  const initial = parseHash()
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [page, setPage] = useState(initial.page)
  const [selectedProject, setSelectedProject] = useState(initial.selectedProject)
  const [aboutInitialTab, setAboutInitialTab] = useState(undefined)
  const isMount = useRef(true)

  const openProject = (title) => {
    setSelectedProject(title)
    setPage('project-detail')
  }

  const toggle = () => setDark((d) => {
    const next = !d
    localStorage.setItem('theme', next ? 'dark' : 'light')
    return next
  })

  useEffect(() => {
    const newHash = toHash(page, selectedProject)
    if (isMount.current) {
      history.replaceState(null, '', newHash)
      isMount.current = false
    } else {
      history.pushState(null, '', newHash)
    }
  }, [page, selectedProject])

  useEffect(() => {
    const onPop = () => {
      const { page, selectedProject } = parseHash()
      setPage(page)
      setSelectedProject(selectedProject)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (page === 'home') document.title = 'Vasil Spirov - Portfolio'
  }, [page])

  if (page === 'about-me') {
    return <AboutPage dark={dark} onBack={() => setPage('home')} onToggle={toggle} initialTab={aboutInitialTab} />
  }

  if (page === 'workflow') {
    return <WorkflowPage dark={dark} onBack={() => setPage('home')} onToggle={toggle} />
  }

  if (page === 'project-detail') {
    if (selectedProject === 'Hedera Transaction Tool') {
      return (
        <HederaPage
          dark={dark}
          onHome={() => setPage('home')}
          onBack={() => setPage('projects')}
          onToggle={toggle}
        />
      )
    }
    return (
      <ProjectDetailPage
        dark={dark}
        project={selectedProject}
        onHome={() => setPage('home')}
        onBack={() => setPage('projects')}
        onToggle={toggle}
      />
    )
  }

  if (page === 'projects') {
    return (
      <ProjectsPage
        dark={dark}
        onBack={() => setPage('home')}
        onOpenProject={openProject}
        onToggle={toggle}
      />
    )
  }

  return (
    <div className="page-enter" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), transition: 'background-color 0.3s' }}>
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#63CAFF" />
            <stop offset="100%" stopColor="#1A5AFF" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} onNavigate={setPage} page={page} />

      <main style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '30px', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <Hero onGoResume={() => { setAboutInitialTab('Resume'); setPage('about-me') }} />

        <section>
          <h2 style={{
            margin: '0 0 24px', fontFamily: 'Questrial, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0px', color: t(dark, 'muted'), whiteSpace: 'nowrap',
            overflow: 'hidden', textOverflow: 'ellipsis', transition: 'color 0.3s',
          }}>
            Projects I&apos;m Proud Of
          </h2>
          <div style={{ display: 'flex', gap: '24px' }}>
            {FEATURED.map((project, i) => (
              <ProjectCard
                key={i}
                dark={dark}
                title={project.title}
                description={project.description}
                empty={project.empty}
                onClick={project.empty ? undefined : () => openProject(project.title)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
