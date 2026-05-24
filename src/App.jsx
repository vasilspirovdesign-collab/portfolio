import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'

const PROJECTS = [
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { title: 'Opus Edu', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Navbar />

      <main className="flex flex-col gap-[24px] p-[30px]">
        <Hero />

        {/* Projects section */}
        <section>
          <h2
            className="mb-[24px] overflow-hidden text-ellipsis whitespace-nowrap text-[22px] font-semibold leading-[28px] text-[#757575]"
            style={{ fontFeatureSettings: "'liga' 0" }}
          >
            Projects I&apos;m Proud Of
          </h2>
          <div className="flex gap-[24px]">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} title={project.title} description={project.description} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
