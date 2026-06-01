import { useEffect } from 'react'
import { t } from '../theme'
import InnerHeader from '../components/InnerHeader'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

export default function ProjectsPage({ dark, onBack, onToggle, onOpenProject, visitedProjects = new Set() }) {
  useEffect(() => { document.title = 'Projects - Vasil Spirov' }, [])

  return (
    <div className="page-enter transition-colors duration-300" style={{ minHeight: '100vh', backgroundColor: t(dark, 'bg') }}>
      <InnerHeader
        dark={dark}
        onToggle={onToggle}
        onHome={onBack}
        crumbs={[{ label: 'Projects' }]}
      />
      <main id="main-content" style={{ padding: '30px', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              dark={dark}
              title={project.title}
              description={project.description}
              visited={visitedProjects.has(project.title)}
              onClick={() => onOpenProject?.(project.title)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
