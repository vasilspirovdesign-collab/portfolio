import { useEffect } from 'react'
import { t } from '../theme'
import InnerHeader from '../components/InnerHeader'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  { title: 'Opus Edu', description: 'OpusEdu is a platform where creators and learners connect to share and gain knowledge, powered by blockchain technology.' },
  { title: 'Hedera Transaction Tool', description: 'A transaction tool built on the Hedera network, enabling fast and low-cost token transfers with a clean, accessible interface.' },
  { title: 'Rowan Carbon Chain', description: 'A blockchain-based platform for issuing, managing, and retiring carbon offset certificates via smart contracts.' },
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
      <div style={{ padding: '30px', maxWidth: '1920px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              dark={dark}
              title={project.title}
              description={project.description}
              onClick={() => onOpenProject?.(project.title)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
