import projectBg from '../assets/project-bg.png'

const projectScreenshot = 'https://www.figma.com/api/mcp/asset/efe87861-f5dd-4d91-8c10-d86c0417607f'

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

function ProjectCard({ title, description, dark }) {
  return (
    <div
      style={{
        width: '329px',
        flexShrink: 0,
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: dark ? '#1e1f26' : '#ffffff',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '329/219', overflow: 'hidden' }}>
        <img src={projectBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src={projectScreenshot} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <p style={{ margin: 0, fontSize: '22px', fontWeight: 600, lineHeight: '28px', color: dark ? '#f3f4f6' : '#757575', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </p>
        {description && (
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.18px', color: '#757575' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage({ dark, onBack }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: dark ? '#16171d' : '#f0f0f0', transition: 'background-color 0.3s' }}>
      {/* Page header */}
      <div
        style={{
          display: 'flex',
          height: '94px',
          alignItems: 'center',
          padding: '31px 30px',
          borderBottom: `1px solid ${dark ? '#2e303a' : '#d0d2d0'}`,
          backgroundColor: dark ? '#16171d' : '#f0f0f0',
          gap: '24px',
        }}
      >
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke={dark ? '#f3f4f6' : '#414141'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ width: '1px', height: '26px', backgroundColor: dark ? '#2e303a' : '#d0d2d0' }} />
        <span style={{ fontSize: '22px', fontWeight: 600, color: dark ? '#f3f4f6' : '#414141', lineHeight: '28px' }}>
          Projects
        </span>
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
                <ProjectCard key={i} dark={dark} title={project.title} description={project.description} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
