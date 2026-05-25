import { useEffect } from 'react'
import { t } from '../theme'
import { navLabel } from '../styles'
import InnerHeader from '../components/InnerHeader'
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
  useEffect(() => { document.title = 'Projects — Vasil Spirov' }, [])

  return (
    <div className="page-enter" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg'), transition: 'background-color 0.3s' }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onBack}
        crumbs={[{ label: 'Projects' }]}
      />
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                  onClick={() => onOpenProject?.(project.title)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
