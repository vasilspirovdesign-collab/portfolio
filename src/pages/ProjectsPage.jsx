import { useEffect } from 'react'
import { t } from '../theme'
import { navLabel } from '../styles'
import InnerHeader from '../components/InnerHeader'
import ProjectCard from '../components/ProjectCard'

const CATEGORIES = [
  {
    name: 'Crypto',
    projects: [
      { title: 'Opus Edu', description: 'OpusEdu is a platform where creators and learners connect to share and gain knowledge, powered by blockchain technology.' },
    ],
  },
]

export default function ProjectsPage({ dark, onBack, onToggle, onOpenProject }) {
  useEffect(() => { document.title = 'Projects — Vasil Spirov' }, [])

  return (
    <div className="page-enter transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg') }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onBack}
        crumbs={[{ label: 'Projects' }]}
      />
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        {CATEGORIES.map((category) => (
          <section key={category.name}>
            <h2 style={{ margin: '0 0 24px', ...navLabel, color: dark ? '#a2a3a5' : '#414141' }}>
              {category.name}
            </h2>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {category.projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  dark={dark}
                  title={project.title}
                  description={project.description}
                  empty={project.empty}
                  onClick={project.empty ? undefined : () => onOpenProject?.(project.title)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
