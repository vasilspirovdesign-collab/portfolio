import { useState } from 'react'
import { t } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'

const FEATURED = [
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

export default function App() {
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (title) => {
    setSelectedProject(title)
    setPage('project-detail')
  }

  const toggle = () => setDark((d) => !d)

  if (page === 'about-me') {
    return <AboutPage dark={dark} onBack={() => setPage('home')} onToggle={toggle} />
  }

  if (page === 'project-detail') {
    return (
      <ProjectDetailPage
        dark={dark}
        project={selectedProject}
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

      <main style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '30px' }}>
        <Hero />

        <section>
          <h2 style={{
            margin: '0 0 24px', fontSize: '18px', fontWeight: 500, lineHeight: 'normal',
            letterSpacing: '-0.18px', color: t(dark, 'muted'), whiteSpace: 'nowrap',
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
                onClick={() => openProject(project.title)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
