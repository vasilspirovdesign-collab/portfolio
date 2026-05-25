import { useState, useEffect, useRef } from 'react'
import { t } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import WorkflowPage from './pages/WorkflowPage'

const FEATURED = [
  { title: 'Opus Edu', description: 'OpusEdu is a platform where creators and learners connect to share and gain knowledge, powered by blockchain technology.' },
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
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(initial.page)
  const [selectedProject, setSelectedProject] = useState(initial.selectedProject)
  const [aboutInitialTab, setAboutInitialTab] = useState(undefined)
  const isMount = useRef(true)

  const openProject = (title) => {
    setSelectedProject(title)
    setPage('project-detail')
  }

  const toggle = () => setDark((d) => !d)

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
