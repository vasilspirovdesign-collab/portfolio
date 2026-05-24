import projectBg from '../assets/project-bg.png'

const projectScreenshot = 'https://www.figma.com/api/mcp/asset/7e5cfbd8-a6b1-46d7-a671-58627c881835'

export default function ProjectCard({ title = 'Opus Edu', description = 'Lorem ipsum dolor sit amet consectetur.', dark }) {
  return (
    <div
      style={{
        width: '329px',
        flexShrink: 0,
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: dark ? '#1e1f26' : '#ffffff',
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ position: 'relative', height: '219px', width: '100%', overflow: 'hidden' }}>
        <img src={projectBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <img src={projectScreenshot} alt={title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px' }}>
        <p style={{ margin: 0, fontSize: '22px', fontWeight: 600, lineHeight: '28px', color: dark ? '#f3f4f6' : '#414141', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </p>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.18px', color: '#757575' }}>
          {description}
        </p>
      </div>
    </div>
  )
}
