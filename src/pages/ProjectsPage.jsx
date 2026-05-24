import { Home, LightbulbOff } from 'lucide-react'
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
          display: 'flex',
          height: '94px',
          alignItems: 'center',
          padding: '31px 30px',
          borderBottom: `1px solid ${t(dark, 'border')}`,
          backgroundColor: t(dark, 'bg'),
          gap: '24px',
        }}
      >
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}
          aria-label="Go home"
        >
          <Home size={24} color={dark ? '#d0d2d0' : '#414141'} strokeWidth={1.5} />
        </button>
        <div style={{ width: '1px', height: '26px', backgroundColor: t(dark, 'border') }} />
        <span style={{ fontSize: '22px', fontWeight: 600, color: dark ? '#d0d2d0' : '#414141', lineHeight: '28px' }}>
          Projects
        </span>
        <button onClick={onToggle} aria-label="Toggle theme" style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}>
          <LightbulbOff size={24} color={dark ? '#d0d2d0' : '#414141'} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {CATEGORIES.map((category) => (
          <section key={category.name}>
            <h2
              style={{
                margin: '0 0 24px',
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '28px',
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
