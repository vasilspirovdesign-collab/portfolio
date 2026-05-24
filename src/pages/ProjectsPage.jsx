import { Home, Moon, Sun } from 'lucide-react'
import { t } from '../theme'
import ProjectCard from '../components/ProjectCard'

const CATEGORIES = [
  {
    name: 'Crypto',
    projects: [
      { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
      { title: 'Hedera Transaction Tool' },
      { title: 'ORDx Trading' },
      { title: 'Opus Edu' },
    ],
  },
  {
    name: 'Finance',
    projects: [
      { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
      { title: 'Hedera Transaction Tool' },
      { title: 'ORDx Trading' },
      { title: 'Opus Edu' },
    ],
  },
]

export default function ProjectsPage({ dark, onBack, onToggle, onOpenProject }) {
  return (
    <div className="page-enter" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), transition: 'background-color 0.3s' }}>
      {/* Page header */}
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 10,
          display: 'flex', height: '94px', alignItems: 'center',
          padding: '31px 30px', gap: '24px',
          borderBottom: `1px solid ${t(dark, 'border')}`,
          backgroundColor: t(dark, 'bg'),
          transition: 'background-color 0.3s',
        }}
      >
        <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: '24px', minWidth: 0 }}>
          <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }} aria-label="Go home">
            <Home size={24} color={t(dark, 'text')} strokeWidth={1.5} />
          </button>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '22px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.22px', color: t(dark, 'border'), flexShrink: 0 }}>/</span>
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.18px', color: t(dark, 'muted'), whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Projects</span>
        </div>
        <button onClick={onToggle} aria-label="Toggle theme" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}>
          {dark ? <Sun size={24} color={t(dark, 'text')} strokeWidth={1.5} /> : <Moon size={24} color={t(dark, 'text')} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {CATEGORIES.map((category) => (
          <section key={category.name}>
            <h2
              style={{
                margin: '0 0 24px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.18px',
                color: dark ? '#a2a3a5' : '#414141',
              }}
            >
              {category.name}
            </h2>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {category.projects.map((project, i) => (
                <ProjectCard key={i} dark={dark} title={project.title} description={project.description} onClick={() => onOpenProject && onOpenProject(project.title)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
