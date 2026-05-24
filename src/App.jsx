import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import ProjectsPage from './pages/ProjectsPage'

const FEATURED = [
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

export default function App() {
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState('home')

  if (page === 'projects') {
    return <ProjectsPage dark={dark} onBack={() => setPage('home')} />
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: dark ? '#16171d' : '#f0f0f0',
        transition: 'background-color 0.3s',
      }}
    >
      <Navbar
        dark={dark}
        onToggle={() => setDark((d) => !d)}
        onNavigate={setPage}
        page={page}
      />

      <main style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '30px' }}>
        <Hero />

        <section>
          <h2
            style={{
              margin: '0 0 24px',
              fontSize: '22px',
              fontWeight: 600,
              lineHeight: '28px',
              color: dark ? '#a2a3a5' : '#757575',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              transition: 'color 0.3s',
            }}
          >
            Projects I&apos;m Proud Of
          </h2>
          <div style={{ display: 'flex', gap: '24px' }}>
            {FEATURED.map((project, i) => (
              <ProjectCard key={i} dark={dark} title={project.title} description={project.description} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
